/**
 * Post-build step (runs after `vite build`):
 *  - writes one HTML file per route with that page's own <title>, description,
 *    canonical URL and Open Graph / Twitter tags, so search engines and social
 *    networks see correct metadata without running JavaScript
 *  - writes 404.html (noindex) for unknown URLs
 *
 * All metadata comes from src/config/pageMeta.js, the same file <Seo /> uses at runtime.
 * sitemap.xml and robots.txt are written by hand in /public and copied as-is.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'

const root = fileURLToPath(new URL('..', import.meta.url))
const dist = path.join(root, 'dist')

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

  console.log(`prerender: wrote ${INDEXABLE_PATHS.length} pages and 404.html`)
} finally {
  await vite.close()
}
