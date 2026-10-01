import { ArrowRight, Check, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import SmartImage from '@/components/common/SmartImage'
import styles from './SolutionCard.module.css'

export default function SolutionCard({ solution, priority = false }) {
  const { title, category, image, summary, idealFor, features, tech } = solution

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <SmartImage src={image} alt={`Example: ${title}`} sizes="(max-width: 768px) 100vw, 33vw" priority={priority} />
        <span className={styles.category}>{category}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.summary}>{summary}</p>

        <p className={styles.idealFor}>
          <Users size={16} aria-hidden="true" />
          <span>
            <strong>Ideal for:</strong> {idealFor}
          </span>
        </p>

        <ul className={styles.features}>
          {features.map((feature) => (
            <li key={feature}>
              <Check size={16} aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>

        <ul className="chip-list" aria-label="Suggested technologies">
          {tech.map((item) => (
            <li key={item} className="chip">
              {item}
            </li>
          ))}
        </ul>

        <Link to="/contact" className={styles.cta}>
          Discuss a similar solution <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
