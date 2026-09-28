import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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
 * Updates the document's title, description, canonical and social tags
 * per page. Updates existing tags in place so nothing is duplicated.
 * `image` is a path under /public, e.g. "/og/about.jpg".
 */
export default function Seo({ title, description = SITE.defaultDescription, image = SITE.ogImage, noindex = false }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE.name}` : SITE.defaultTitle
    const url = `${SITE.url}${pathname === '/' ? '/' : pathname}`
    const imageUrl = image.startsWith('http') ? image : `${SITE.url}${image}`

    document.title = fullTitle
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', imageUrl)
    upsertMeta('property', 'og:image:width', String(SITE.ogImageSize.width))
    upsertMeta('property', 'og:image:height', String(SITE.ogImageSize.height))
    upsertMeta('property', 'og:image:alt', fullTitle)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', imageUrl)
    upsertCanonical(url)
  }, [title, description, image, noindex, pathname])

  return null
}
