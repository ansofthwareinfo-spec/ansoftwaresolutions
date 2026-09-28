import { Link } from 'react-router-dom'
import { SITE } from '@/config/site'
import { cn } from '@/utils/cn'
import styles from './Logo.module.css'

/* Generated from public/logo.jpg by scripts/generate_brand_assets.py */
const LOGO_MARK = '/brand/logo-mark.webp'

export function LogoMark({ size = 46 }) {
  return <img src={LOGO_MARK} alt="" width={size} height={size} className={styles.mark} decoding="async" />
}

export default function Logo({ tone = 'dark', onClick }) {
  return (
    <Link to="/" className={cn(styles.logo, tone === 'light' && styles.light)} aria-label={`${SITE.name} — Home`} onClick={onClick}>
      <LogoMark />
      <span className={styles.text}>
        <span className={styles.name}>A&amp;N Software</span>
        <span className={styles.sub}>Solutions</span>
      </span>
    </Link>
  )
}
