/* eslint-disable react/only-export-components -- build-time entry, never hot-reloaded */
/**
 * Build-time renderer used by scripts/prerender.mjs (built with `vite build --ssr`).
 * Renders a route to HTML so each page's content is in its static file and
 * shows before JavaScript loads; src/main.jsx then hydrates it.
 */
import { StrictMode } from 'react'
import { prerenderToNodeStream } from 'react-dom/static'
import { StaticRouter } from 'react-router-dom'
import { AppRoutes } from './App.jsx'

export { INDEXABLE_PATHS, NOT_FOUND_META, ROBOTS_INDEX, ROBOTS_NOINDEX, absoluteUrl, canonicalUrl, fullTitle, getPageMeta } from './config/pageMeta'
export { SITE } from './config/site'

/** Returns the app's HTML for `url`, after every lazy page has loaded (same tree as main.jsx). */
export async function render(url) {
  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  )
  let html = ''
  for await (const chunk of prelude) html += chunk
  return html
}
