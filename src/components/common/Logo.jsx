import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'
import styles from './Logo.module.css'

/* Generated from public/logo.jpg by scripts/generate_brand_assets.py */
const LOGO_MARK = '/brand/logo-mark-96.webp'
const LOGO_MARK_SRCSET = '/brand/logo-mark-96.webp 96w, /brand/logo-mark.webp 256w'

export function LogoMark({ size = 46 }) {
  return (
    <img
      src={LOGO_MARK}
      srcSet={LOGO_MARK_SRCSET}
      sizes={`${size}px`}
      alt=""
      width={size}
      height={size}
      className={styles.mark}
      decoding="async"
    />
  )
}

export default function Logo({ tone = 'dark', onClick }) {
  return (
    <Link to="/" className={cn(styles.logo, tone === 'light' && styles.light)} onClick={onClick}>
      <LogoMark />
      <span className={styles.text}>
        <span className={styles.name}>A&amp;N Software</span>{' '}
        <span className={styles.sub}>Solutions</span>
        <span className="visually-hidden">, home page</span>
      </span>
    </Link>
  )
}
