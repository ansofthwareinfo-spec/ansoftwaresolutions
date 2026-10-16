import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, inView]. Fires as soon as the element's top edge is 60px inside the viewport,
 * so tall elements reveal immediately. Once visible it stays true (one-shot) by default.
 */
export function useInView({ threshold = 0, rootMargin = '0px 0px -60px 0px', once = true } = {}) {
  const ref = useRef(null)
  // Starts false on the server and in the browser so prerendered markup hydrates without a mismatch.
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined
    // Without IntersectionObserver support, treat everything as visible.
    if (typeof IntersectionObserver === 'undefined') {
      // Must run after hydration (not in the initial state) so server and client markup match.
      // eslint-disable-next-line react/set-state-in-effect
      setInView(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, inView]
}
