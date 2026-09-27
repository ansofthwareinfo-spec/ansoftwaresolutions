import { useEffect } from 'react'

export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return undefined
    document.body.classList.add('no-scroll')
    return () => document.body.classList.remove('no-scroll')
  }, [locked])
}
