import Reveal from '@/components/common/Reveal'
import { HIGHLIGHTS } from '@/data/company'
import styles from './HighlightsSection.module.css'

/** Dark band with a few verified company facts. */
export default function HighlightsSection() {
  return (
    <section className={styles.section} aria-label="Company at a glance">
      <div className="container">
        <dl className={styles.grid}>
          {HIGHLIGHTS.map(({ value, label }, index) => (
            <Reveal key={label} delay={index * 80} className={styles.item}>
              <dt className={styles.label}>{label}</dt>
              <dd className={styles.value}>{value}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
