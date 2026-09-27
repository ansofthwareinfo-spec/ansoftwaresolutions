import { STATS } from '@/data/company'
import { useCountUp } from '@/hooks/useCountUp'
import { useInView } from '@/hooks/useInView'
import styles from './StatsSection.module.css'

function Stat({ value, suffix, label, start }) {
  const count = useCountUp(value, { start })
  return (
    <div className={styles.stat}>
      <p className={styles.value}>
        <span aria-hidden="true">
          {count}
          {suffix}
        </span>
        <span className="visually-hidden">
          {value}
          {suffix}
        </span>
      </p>
      <p className={styles.label}>{label}</p>
    </div>
  )
}

export default function StatsSection() {
  const [ref, inView] = useInView({ threshold: 0.3 })

  return (
    <section className={styles.section} aria-label="Company highlights">
      <div className="container">
        <div ref={ref} className={styles.grid}>
          {STATS.map((stat) => (
            <Stat key={stat.label} {...stat} start={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
