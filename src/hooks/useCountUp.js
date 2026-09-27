import { useEffect, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/** Animates from 0 to `end` once `start` becomes true. */
export function useCountUp(end, { start = true, duration = 1600 } = {}) {
  const [value, setValue] = useState(0)
  const [reduced] = useState(prefersReducedMotion)

  useEffect(() => {
    if (!start || reduced) return undefined

    let frame
    const startTime = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(end * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [end, start, duration, reduced])

  // Users who prefer reduced motion see the final number immediately.
  if (reduced) return start ? end : 0
  return value
}
