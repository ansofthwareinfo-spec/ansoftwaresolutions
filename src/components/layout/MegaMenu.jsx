import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SERVICES } from '@/data/services'
import { cn } from '@/utils/cn'
import styles from './Navbar.module.css'

export default function MegaMenu({ id, open, onNavigate }) {
  return (
    <div id={id} className={cn(styles.mega, open && styles.megaOpen)} inert={!open}>
      <div className={styles.megaIntro}>
        <p className={styles.megaEyebrow}>Technology services</p>
        <p className={styles.megaTitle}>Seven areas of expertise</p>
        <p className={styles.megaText}>From strategy to execution: software, data, AI, cloud and automation.</p>
        <Link to="/services" className={styles.megaAll} onClick={onNavigate}>
          View all services <ArrowRight size={16} aria-hidden="true" />
        </Link>
        <Link to="/technologies" className={styles.megaSecondary} onClick={onNavigate}>
          Tools we use <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>

      <ul className={styles.megaGrid}>
        {SERVICES.map(({ slug, title, icon: Icon }) => (
          <li key={slug}>
            <Link to={`/services/${slug}`} className={styles.megaItem} onClick={onNavigate}>
              <span className={styles.megaIcon}>
                <Icon size={20} aria-hidden="true" />
              </span>
              <span>{title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
