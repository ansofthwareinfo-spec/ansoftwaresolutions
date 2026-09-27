import { SITE } from '@/config/site'
import { cn } from '@/utils/cn'
import styles from './SocialLinks.module.css'

/* Brand icons drawn inline (lucide no longer ships brand logos). */
const ICONS = {
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.5h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1v5.45h-4V15.9c0-1.16-.02-2.66-1.62-2.66-1.63 0-1.88 1.27-1.88 2.58v4.93h-4v-11Z" />
  ),
  twitter: (
    <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.2h1.7L7.4 4.73H5.58L16.67 19.2Z" />
  ),
  facebook: (
    <path d="M13.5 21v-7.5h2.53l.38-2.94H13.5V8.69c0-.85.24-1.43 1.46-1.43h1.56V4.63A20.9 20.9 0 0 0 14.25 4.5c-2.25 0-3.8 1.38-3.8 3.9v2.16H7.9v2.94h2.55V21h3.05Z" />
  ),
  instagram: (
    <path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.75a3.05 3.05 0 1 1 0-6.1 3.05 3.05 0 0 1 0 6.1Zm4.9-8.95a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2ZM21.94 8c-.07-1.47-.4-2.78-1.48-3.85C19.4 3.08 18.08 2.74 16.61 2.67 15.09 2.58 8.9 2.58 7.39 2.67 5.92 2.74 4.61 3.07 3.53 4.14S2.13 6.52 2.06 8c-.09 1.51-.09 7.7 0 9.21.07 1.47.4 2.78 1.47 3.85 1.08 1.07 2.39 1.41 3.86 1.48 1.51.09 7.7.09 9.22 0 1.47-.07 2.78-.4 3.85-1.48 1.07-1.07 1.41-2.38 1.48-3.85.09-1.51.09-7.7 0-9.21Zm-2.07 10.84a3.1 3.1 0 0 1-1.74 1.74c-1.2.48-4.06.37-5.39.37s-4.2.1-5.39-.37a3.1 3.1 0 0 1-1.74-1.74c-.48-1.2-.37-4.06-.37-5.39s-.1-4.2.37-5.39a3.1 3.1 0 0 1 1.74-1.74c1.2-.48 4.06-.37 5.39-.37s4.2-.1 5.39.37a3.1 3.1 0 0 1 1.74 1.74c.48 1.2.37 4.06.37 5.39s.11 4.2-.37 5.39Z" />
  ),
}

const LABELS = { linkedin: 'LinkedIn', twitter: 'X (Twitter)', facebook: 'Facebook', instagram: 'Instagram' }

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
