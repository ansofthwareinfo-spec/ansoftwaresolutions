import { useInView } from '@/hooks/useInView'
import { cn } from '@/utils/cn'

/** Fades/slides children in when scrolled into view. */
export default function Reveal({ as: Tag = 'div', delay = 0, className, children, ...rest }) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      className={cn('reveal', inView && 'is-visible', className)}
      style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
