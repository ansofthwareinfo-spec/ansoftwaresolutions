import { ArrowRight, MessagesSquare } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './ServiceHelpCard.module.css'

/** Closing tile for the services grid, for visitors who are not sure what they need. */
export default function ServiceHelpCard() {
  return (
    <article className={styles.card}>
      <span className={styles.icon}>
        <MessagesSquare size={28} strokeWidth={1.8} aria-hidden="true" />
      </span>
      <h3 className={styles.title}>Not sure where to start?</h3>
      <p className={styles.text}>Tell us about the problem. We will suggest the right approach, even if it is a small one.</p>
      <Link to="/contact" className={styles.link}>
        Talk to us <ArrowRight size={18} aria-hidden="true" />
      </Link>
    </article>
  )
}
