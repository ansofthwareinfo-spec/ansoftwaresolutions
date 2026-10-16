import { useLayoutEffect } from 'react'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/utils/cn'

/** Fades/slides children in when scrolled into view. */
export default function Reveal({ as: Tag = 'div', delay = 0, className, children, ...rest }) {
  const [ref, inView] = useInView()

  // Set the stagger delay from script, not a style attribute: the CSP (style-src 'self')
  // blocks inline style attributes in prerendered HTML.
  useLayoutEffect(() => {
    const node = ref.current
    if (!node) return
    if (delay) node.style.setProperty('--reveal-delay', `${delay}ms`)
    else node.style.removeProperty('--reveal-delay')
  }, [ref, delay])

  return (
    <Tag ref={ref} className={cn('reveal', inView && 'is-visible', className)} {...rest}>
      {children}
    </Tag>
  )
}
