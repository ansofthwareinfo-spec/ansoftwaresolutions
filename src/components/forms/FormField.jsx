import { cn } from '@/utils/cn'
import styles from './Form.module.css'

/**
 * Accessible labelled field with inline error.
 * `as` can be "input" | "textarea" | "select". Pass <option>s as children for selects.
 */
export default function FormField({
  as: Control = 'input',
  label,
  id,
  error,
  required = false,
  hint,
  className,
  children,
  ...rest
}) {
  const errorId = `${id}-error`
  const hintId = `${id}-hint`
  const describedBy = [error && errorId, hint && hintId].filter(Boolean).join(' ') || undefined

  return (
    <div className={cn(styles.field, error && styles.hasError, className)}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {required && (
          <span className={styles.required} aria-hidden="true">
            *
          </span>
        )}
      </label>

      <Control
        id={id}
        className={cn(styles.control, Control === 'textarea' && styles.textarea, Control === 'select' && styles.select)}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={describedBy}
        aria-required={required || undefined}
        {...rest}
      >
        {children}
      </Control>

      {hint && !error && (
        <p id={hintId} className={styles.hint}>
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
