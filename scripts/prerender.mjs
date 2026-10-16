/**
 * Post-build step (runs after `vite build` and `vite build --ssr src/entry-server.jsx`):
 *  - writes one HTML file per route with that page's own <title>, description,
 *    canonical URL and Open Graph / Twitter tags, so search engines and social
 *    networks see correct metadata without running JavaScript
 *  - renders the page's content into #root (src/main.jsx hydrates it), so text and
 *    images show before JavaScript loads
 *  - preloads the page's own lazy-loaded JS and CSS and the two Latin web fonts
 *  - adds Service structured data (JSON-LD) to each service page
 *  - writes 404.html (noindex) for unknown URLs
 *
 * All metadata comes from src/config/pageMeta.js, the same file <Seo /> uses at runtime.
 * sitemap.xml and robots.txt are written by hand in /public and copied as-is.
 */
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const dist = path.join(root, 'dist')
const distSsr = path.join(root, 'dist-ssr')

/** Lazy-loaded page module for each route (keep in sync with src/App.jsx). Home and NotFound are in the main bundle. */
const PAGE_MODULES = {
  '/about': 'src/pages/About.jsx',
  '/hire': 'src/pages/Hire.jsx',
  '/jobs': 'src/pages/Jobs.jsx',
  '/services': 'src/pages/Services.jsx',
  '/technologies': 'src/pages/Technologies.jsx',
  '/industries': 'src/pages/Industries.jsx',
  '/solutions': 'src/pages/Solutions.jsx',
  '/contact': 'src/pages/Contact.jsx',
  '/privacy-policy': 'src/pages/PrivacyPolicy.jsx',
  '/terms': 'src/pages/Terms.jsx',
}
const pageModuleFor = (routePath) =>
  routePath.startsWith('/services/') ? 'src/pages/ServiceDetail.jsx' : PAGE_MODULES[routePath]

/** Web fonts used above the fold; only the Latin subsets are downloaded by browsers here. */
const PRELOAD_FONTS = [/^manrope-latin-wght-normal-.*\.woff2$/, /^outfit-latin-wght-normal-.*\.woff2$/]

const escapeAttr = (value) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const escapeText = (value) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function replaceOnce(html, pattern, replacement, label) {
  if (!pattern.test(html)) throw new Error(`prerender: could not find ${label} in index.html`)
  return html.replace(pattern, replacement)
}

const setMeta = (html, attr, key, value) =>
  replaceOnce(
    html,
    new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[^"]*(")`),
    `$1${escapeAttr(value)}$2`,
    `${attr}="${key}"`,
  )

const {
  render,
  INDEXABLE_PATHS,
  NOT_FOUND_META,
  ROBOTS_INDEX,
  ROBOTS_NOINDEX,
  getPageMeta,
  fullTitle,
  canonicalUrl,
  absoluteUrl,
  SITE,
} = await import(pathToFileURL(path.join(distSsr, 'entry-server.js')).href)

const manifestPath = path.join(dist, '.vite', 'manifest.json')
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'))
const template = await readFile(path.join(dist, 'index.html'), 'utf8')
const fonts = (await readdir(path.join(dist, 'assets'))).filter((file) => PRELOAD_FONTS.some((re) => re.test(file)))

/** JS chunks and CSS files a lazy page needs, excluding what the main entry already loads. */
function pageAssets(moduleKey) {
  const entry = Object.values(manifest).find((chunk) => chunk.isEntry)
  const loaded = new Set([entry.file, ...(entry.css ?? [])])
  const js = new Set()
  const css = new Set()
  const visit = (key) => {
    const chunk = manifest[key]
    if (!chunk || loaded.has(chunk.file) || js.has(chunk.file)) return
    js.add(chunk.file)
    for (const file of chunk.css ?? []) if (!loaded.has(file)) css.add(file)
    for (const dep of chunk.imports ?? []) visit(dep)
  }
  if (moduleKey) {
    if (!manifest[moduleKey]) throw new Error(`prerender: ${moduleKey} not found in the Vite manifest`)
    visit(moduleKey)
  }
  return { js: [...js], css: [...css] }
}

function headTags(routePath) {
  const { js, css } = pageAssets(routePath ? pageModuleFor(routePath) : null)
  return [
    ...fonts.map((file) => `<link rel="preload" as="font" type="font/woff2" href="/assets/${file}" crossorigin />`),
    ...js.map((file) => `<link rel="modulepreload" crossorigin href="/${file}" />`),
    ...css.map((file) => `<link rel="stylesheet" crossorigin href="/${file}" />`),
  ]
    .map((tag) => `    ${tag}`)
    .join('\n')
}

// Service schema: tells search engines exactly what each service page offers
const serviceJsonLd = (meta, url) => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: meta.service.name,
    serviceType: meta.service.name,
    description: meta.description,
    url,
    image: absoluteUrl(meta.image),
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: { '@type': 'Country', name: 'India' },
  }
  return `    <script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`
}

async function renderPage(meta, routePath) {
  const title = fullTitle(meta.title)
  const description = meta.description ?? SITE.defaultDescription
  const image = absoluteUrl(meta.image ?? SITE.ogImage)

  let html = template
  html = replaceOnce(html, /<title>[\s\S]*?<\/title>/, `<title>${escapeText(title)}</title>`, '<title>')
  html = setMeta(html, 'name', 'description', description)
  html = setMeta(html, 'name', 'robots', meta.noindex ? ROBOTS_NOINDEX : ROBOTS_INDEX)
  html = setMeta(html, 'name', 'keywords', (meta.keywords ?? []).join(', '))
  html = setMeta(html, 'property', 'og:title', title)
  html = setMeta(html, 'property', 'og:description', description)
  html = setMeta(html, 'property', 'og:image', image)
  html = setMeta(html, 'property', 'og:image:alt', title)
  html = setMeta(html, 'name', 'twitter:title', title)
  html = setMeta(html, 'name', 'twitter:description', description)
  html = setMeta(html, 'name', 'twitter:image', image)

  if (routePath) {
    const url = canonicalUrl(routePath)
    html = setMeta(html, 'property', 'og:url', url)
    html = replaceOnce(html, /(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`, 'canonical link')
    if (meta.service) html = html.replace('</head>', `${serviceJsonLd(meta, url)}\n  </head>`)
  } else {
    // 404: no canonical or og:url
    html = html.replace(/\s*<link rel="canonical" href="[^"]*" \/>/, '')
    html = html.replace(/\s*<meta property="og:url" content="[^"]*" \/>/, '')
  }

  html = html.replace('</head>', `${headTags(routePath)}\n  </head>`)
  const appHtml = await render(routePath ?? '/404')
  return replaceOnce(html, /<div id="root"><\/div>/, () => `<div id="root">${appHtml}</div>`, '#root')
}

try {
  // One file per route: "/" -> index.html, "/about" -> about.html, "/services/x" -> services/x.html
  for (const routePath of INDEXABLE_PATHS) {
    const file = routePath === '/' ? 'index.html' : `${routePath.slice(1)}.html`
    const target = path.join(dist, file)
    await mkdir(path.dirname(target), { recursive: true })
    await writeFile(target, await renderPage(getPageMeta(routePath), routePath))
  }
  await writeFile(path.join(dist, '404.html'), await renderPage(NOT_FOUND_META, null))
  console.log(`prerender: wrote ${INDEXABLE_PATHS.length} pages and 404.html`)
} finally {
  // The manifest and server bundle are build-time only; don't deploy them.
  await rm(path.join(dist, '.vite'), { recursive: true, force: true })
  await rm(distSsr, { recursive: true, force: true })
}
