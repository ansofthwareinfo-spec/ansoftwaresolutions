import { TrendingUp } from 'lucide-react'
import SmartImage from '@/components/common/SmartImage'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project }) {
  const { title, client, category, image, summary, result, tech } = project

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <SmartImage src={image} alt={`${title} project for a ${client.toLowerCase()}`} sizes="(max-width: 768px) 100vw, 33vw" />
        <span className={styles.category}>{category}</span>
      </div>
      <div className={styles.body}>
        <p className={styles.client}>{client}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.summary}>{summary}</p>
        <p className={styles.result}>
          <TrendingUp size={18} aria-hidden="true" /> {result}
        </p>
        <ul className="chip-list" aria-label="Technologies used">
          {tech.map((item) => (
            <li key={item} className="chip">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
