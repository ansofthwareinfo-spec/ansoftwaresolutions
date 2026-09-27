import { useId } from 'react'
import { Link } from 'react-router-dom'
import { SITE } from '@/config/site'
import { cn } from '@/utils/cn'
import styles from './Logo.module.css'

export function LogoMark({ size = 40 }) {
  const gradientId = `logo-grad-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2b59c3" />
          <stop offset="1" stopColor="#0fb3a2" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill={`url(#${gradientId})`} />
      <g fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 29 15 11l6.5 18M11 23h8" />
        <path d="M24.5 29V11l7.5 18V11" />
      </g>
    </svg>
  )
}

export default function Logo({ tone = 'dark', onClick }) {
  return (
    <Link to="/" className={cn(styles.logo, tone === 'light' && styles.light)} aria-label={`${SITE.name} — Home`} onClick={onClick}>
      <LogoMark />
      <span className={styles.text}>
        <span className={styles.name}>AN Software</span>
        <span className={styles.sub}>Solutions</span>
      </span>
    </Link>
  )
}
