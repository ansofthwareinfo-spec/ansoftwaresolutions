/**
 * Post-build step (runs after `vite build`):
 *  - writes one HTML file per route with that page's own <title>, description,
 *    canonical URL and Open Graph / Twitter tags, so search engines and social
 *    networks see correct metadata without running JavaScript
 *  - writes 404.html (noindex) for unknown URLs
 *  - generates sitemap.xml and robots.txt
 *
 * All metadata comes from src/config/pageMeta.js, the same file <Seo /> uses at runtime.
 */
import { execFileSync } from 'node:child_process'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'

const root = fileURLToPath(new URL('..', import.meta.url))
const dist = path.join(root, 'dist')

/**
 * Source files that make up each page's content. Used to give every sitemap URL an
 * accurate <lastmod>: the date of the last git commit that touched these files
 * (or today, if they have uncommitted changes). Search engines only trust lastmod
 * when it reflects real content changes, not the build date.
 */
const SHARED_SOURCES = ['src/config/pageMeta.js', 'src/config/site.js']
const PAGE_SOURCES = {
  '/': ['src/pages/Home.jsx', 'src/sections/home', 'src/data/hiring.js', 'src/data/faqs.js'],
  '/hire': ['src/pages/Hire.jsx', 'src/data/hiring.js'],
  '/jobs': ['src/pages/Jobs.jsx', 'src/data/jobs.js', 'src/components/forms/JobApplicationForm.jsx'],
  '/services': ['src/pages/Services.jsx', 'src/data/services.js', 'src/data/company.js'],
  '/solutions': ['src/pages/Solutions.jsx', 'src/data/solutions.js'],
  '/industries': ['src/pages/Industries.jsx', 'src/data/industries.js'],
  '/technologies': ['src/pages/Technologies.jsx', 'src/data/technologies.js'],
  '/about': ['src/pages/About.jsx', 'src/data/company.js'],
  '/contact': ['src/pages/Contact.jsx', 'src/components/forms/ContactForm.jsx'],
  '/privacy-policy': ['src/pages/PrivacyPolicy.jsx', 'src/data/legal.js'],
  '/terms': ['src/pages/Terms.jsx', 'src/data/legal.js'],
}
const SERVICE_DETAIL_SOURCES = ['src/pages/ServiceDetail.jsx', 'src/data/services.js']

const today = () => new Date().toLocaleDateString('en-CA') // YYYY-MM-DD, local time

function lastModified(routePath) {
  const files = [
    ...(PAGE_SOURCES[routePath] ?? (routePath.startsWith('/services/') ? SERVICE_DETAIL_SOURCES : [])),
    ...SHARED_SOURCES,
  ]
  const git = (args) => execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim()
  try {
    if (git(['status', '--porcelain', '--', ...files])) return today()
    return git(['log', '-1', '--format=%cs', '--', ...files]) || today()
  } catch {
    return today() // no git available (e.g. a plain file upload): fall back to the build date
  }
}

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

const vite = await createServer({
  root,
  logLevel: 'error',
  appType: 'custom',
  server: { middlewareMode: true, hmr: false },
})

try {
  const { INDEXABLE_PATHS, NOT_FOUND_META, getPageMeta, fullTitle, canonicalUrl, absoluteUrl } =
    await vite.ssrLoadModule('/src/config/pageMeta.js')
  const { SITE } = await vite.ssrLoadModule('/src/config/site.js')

  const template = await readFile(path.join(dist, 'index.html'), 'utf8')

  const renderPage = (meta, routePath) => {
    const title = fullTitle(meta.title)
    const description = meta.description ?? SITE.defaultDescription
    const image = absoluteUrl(meta.image ?? SITE.ogImage)

    let html = template
    html = replaceOnce(html, /<title>[\s\S]*?<\/title>/, `<title>${escapeText(title)}</title>`, '<title>')
    html = setMeta(html, 'name', 'description', description)
    html = setMeta(html, 'name', 'robots', meta.noindex ? 'noindex, follow' : 'index, follow')
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
    } else {
      // 404: no canonical or og:url
      html = html.replace(/\s*<link rel="canonical" href="[^"]*" \/>/, '')
      html = html.replace(/\s*<meta property="og:url" content="[^"]*" \/>/, '')
    }
    return html
  }

  // One file per route: "/" -> index.html, "/about" -> about.html, "/services/x" -> services/x.html
  for (const routePath of INDEXABLE_PATHS) {
    const file = routePath === '/' ? 'index.html' : `${routePath.slice(1)}.html`
    const target = path.join(dist, file)
    await mkdir(path.dirname(target), { recursive: true })
    await writeFile(target, renderPage(getPageMeta(routePath), routePath))
  }
  await writeFile(path.join(dist, '404.html'), renderPage(NOT_FOUND_META, null))

  // sitemap.xml — each page's lastmod is the last time its own content changed
  const urls = INDEXABLE_PATHS.map(
    (routePath) =>
      `  <url>\n    <loc>${canonicalUrl(routePath)}</loc>\n    <lastmod>${lastModified(routePath)}</lastmod>\n  </url>`,
  ).join('\n')
  await writeFile(
    path.join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  )

  // robots.txt
  await writeFile(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`)

  console.log(`prerender: wrote ${INDEXABLE_PATHS.length} pages, 404.html, sitemap.xml and robots.txt`)
} finally {
  await vite.close()
}
