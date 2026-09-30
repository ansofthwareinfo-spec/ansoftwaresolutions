import Reveal from '@/components/common/Reveal'
import { HIGHLIGHTS } from '@/data/company'
import styles from './HighlightsSection.module.css'

/** Dark band of short, verifiable statements. */
export default function HighlightsSection({ items = HIGHLIGHTS, label = 'At a glance' }) {
  return (
    <section className={styles.section} aria-label={label}>
      <div className="container">
        <dl className={styles.grid}>
          {items.map(({ value, label: itemLabel }, index) => (
            <Reveal key={itemLabel} delay={index * 80} className={styles.item}>
              <dt className={styles.label}>{itemLabel}</dt>
              <dd className={styles.value}>{value}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
