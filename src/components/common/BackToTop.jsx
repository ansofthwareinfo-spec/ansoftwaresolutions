import { ArrowUp } from 'lucide-react'
import { useScrolledPast } from '@/hooks/useScrollPosition'
import { cn } from '@/utils/cn'
import styles from './BackToTop.module.css'

export default function BackToTop() {
  const visible = useScrolledPast(600)

  return (
    <button
      type="button"
      className={cn(styles.button, visible && styles.visible)}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUp size={20} aria-hidden="true" />
    </button>
  )
}
