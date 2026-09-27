import { FEATURED_TECH } from '@/data/technologies'
import styles from './TechMarquee.module.css'

function Track({ hidden = false }) {
  return (
    <ul className={styles.track} aria-hidden={hidden || undefined}>
      {FEATURED_TECH.map((tech) => (
        <li key={tech} className={styles.item}>
          {tech}
        </li>
      ))}
    </ul>
  )
}

export default function TechMarquee() {
  return (
    <section className={styles.section} aria-label="Technologies we work with">
      <div className="container">
        <p className={styles.label}>Powered by modern, proven technologies</p>
      </div>
      <div className={styles.marquee}>
        <Track />
        <Track hidden />
      </div>
    </section>
  )
}
