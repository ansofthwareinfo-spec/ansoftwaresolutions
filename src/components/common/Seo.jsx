import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { absoluteUrl, canonicalUrl, fullTitle, getPageMeta } from '@/config/pageMeta'
import { SITE } from '@/config/site'

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Keeps the document head in sync with the current route during client-side
 * navigation. Metadata comes from src/config/pageMeta.js — the same data the
 * build uses to write each page's static HTML, so the two never disagree.
 */
export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = getPageMeta(pathname)
    const title = fullTitle(meta.title)
    const description = meta.description ?? SITE.defaultDescription
    const image = absoluteUrl(meta.image ?? SITE.ogImage)
    const url = canonicalUrl(pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname)

    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', meta.noindex ? 'noindex, follow' : 'index, follow')
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', image)
    upsertMeta('property', 'og:image:alt', title)
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', image)
    upsertCanonical(url)
  }, [pathname])

  return null
}
