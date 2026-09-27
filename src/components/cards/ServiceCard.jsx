import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './ServiceCard.module.css'

export default function ServiceCard({ service, index }) {
  const { slug, title, short, icon: Icon } = service

  return (
    <article className={styles.card}>
      <div className={styles.head}>
        <span className={styles.icon}>
          <Icon size={28} strokeWidth={1.8} aria-hidden="true" />
        </span>
        {index != null && <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>}
      </div>
      <h3 className={styles.title}>
        <Link to={`/services/${slug}`} className={styles.stretched}>
          {title}
        </Link>
      </h3>
      <p className={styles.text}>{short}</p>
      <span className={styles.more} aria-hidden="true">
        Learn more <ArrowUpRight size={18} />
      </span>
    </article>
  )
}
