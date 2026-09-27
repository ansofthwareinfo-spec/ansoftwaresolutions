import { cn } from '@/utils/cn'
import styles from './FeatureCard.module.css'

/**
 * Generic icon + title + text card.
 * variant: "default" | "soft" | "dark" | "numbered"
 */
export default function FeatureCard({ icon: Icon, title, text, number, variant = 'default', as: Heading = 'h3' }) {
  return (
    <article className={cn(styles.card, styles[variant])}>
      {number != null && <span className={styles.number}>{String(number).padStart(2, '0')}</span>}
      {Icon && (
        <span className={styles.icon}>
          <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
        </span>
      )}
      <Heading className={styles.title}>{title}</Heading>
      {text && <p className={styles.text}>{text}</p>}
    </article>
  )
}
