import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const HASH_RETRY_MS = 100
const HASH_MAX_TRIES = 15

/**
 * Resets scroll on navigation, or scrolls to a #hash target when present.
 * Retries briefly because lazy-loaded pages may not have rendered the target yet.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return undefined
    }

    const id = decodeURIComponent(hash.slice(1))
    let tries = 0
    let timer

    const attempt = () => {
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else if (tries++ < HASH_MAX_TRIES) {
        timer = setTimeout(attempt, HASH_RETRY_MS)
      }
    }

    attempt()
    return () => clearTimeout(timer)
  }, [pathname, hash])

  return null
}
