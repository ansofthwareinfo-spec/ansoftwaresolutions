import { useEffect, useState } from 'react'

/** True once the page has scrolled past `offset` pixels. rAF-throttled. */
export function useScrolledPast(offset = 10) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let ticking = false
    const update = () => {
      setScrolled(window.scrollY > offset)
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return scrolled
}
