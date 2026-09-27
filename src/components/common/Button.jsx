import { Loader2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/utils/cn'
import styles from './Button.module.css'

const isExternal = (href) => /^https?:\/\//i.test(href)

/**
 * One button component for every call-to-action.
 * - `to`   → internal route (react-router Link)
 * - `href` → anchor (external links open safely in a new tab)
 * - else   → native <button>
 */
export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  fullWidth = false,
  loading = false,
  className,
  children,
  type = 'button',
  ...rest
}) {
  const classes = cn(
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth && styles.full,
    Icon && iconPosition === 'right' && styles.hasArrow,
    className,
  )

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={18} aria-hidden="true" />}
      <span>{children}</span>
      {loading ? (
        <Loader2 size={18} aria-hidden="true" className={styles.spinner} />
      ) : (
        Icon && iconPosition === 'right' && <Icon size={18} aria-hidden="true" className={styles.icon} />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    const external = isExternal(href)
    return (
      <a
        href={href}
        className={classes}
        {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
        {...rest}
      >
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...rest} disabled={loading || rest.disabled} aria-busy={loading || undefined}>
      {content}
    </button>
  )
}
