import { cn } from '@/utils/cn'
import styles from './Form.module.css'

export default function CheckboxField({ id, name, checked, onChange, error, children }) {
  const errorId = `${id}-error`
  return (
    <div className={cn(styles.checkboxField, error && styles.hasError)}>
      <label htmlFor={id} className={styles.checkbox}>
        <input
          id={id}
          name={name}
          type="checkbox"
          checked={Boolean(checked)}
          onChange={onChange}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? errorId : undefined}
        />
        <span>{children}</span>
      </label>
      {error && (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
