import { useEffect, useRef, useState } from 'react'

/** Returns [ref, inView]. Once visible it stays true (one-shot) by default. */
export function useInView({ threshold = 0.15, rootMargin = '0px 0px -40px 0px', once = true } = {}) {
  const ref = useRef(null)
  // Without IntersectionObserver support, treat everything as visible.
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return undefined

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
