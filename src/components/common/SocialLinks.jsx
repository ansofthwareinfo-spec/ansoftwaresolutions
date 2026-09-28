import { SITE } from '@/config/site'
import { cn } from '@/utils/cn'
import styles from './SocialLinks.module.css'

/* Brand icons drawn inline (lucide no longer ships brand logos). Add one here when adding a network to SITE.social. */
const ICONS = {
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.5h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1v5.45h-4V15.9c0-1.16-.02-2.66-1.62-2.66-1.63 0-1.88 1.27-1.88 2.58v4.93h-4v-11Z" />
  ),
}

const LABELS = { linkedin: 'LinkedIn' }

export default function SocialLinks({ tone = 'dark', className }) {
  return (
    <ul className={cn(styles.list, tone === 'light' && styles.light, className)}>
      {Object.entries(SITE.social).map(([key, url]) => (
        <li key={key}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label={`${SITE.name} on ${LABELS[key] ?? key}`}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              {ICONS[key]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}
