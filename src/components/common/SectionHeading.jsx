import { cn } from '@/utils/cn'
import Reveal from './Reveal'
import styles from './SectionHeading.module.css'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'default',
  as: Heading = 'h2',
  className,
}) {
  return (
    <Reveal className={cn(styles.heading, styles[align], tone === 'light' && styles.light, className)}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <Heading className={styles.title}>{title}</Heading>
      {description && <p className={styles.description}>{description}</p>}
    </Reveal>
  )
}
