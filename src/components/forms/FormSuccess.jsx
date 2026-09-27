import { CheckCircle2 } from 'lucide-react'
import { useEffect, useRef } from 'react'
import Button from '@/components/common/Button'
import styles from './Form.module.css'

/** Success panel shown after a form is submitted. Receives focus for screen readers. */
export default function FormSuccess({ title, message, actionLabel = 'Submit another response', onReset }) {
  const ref = useRef(null)

  useEffect(() => {
    ref.current?.focus()
  }, [])

  return (
    <div ref={ref} className={styles.success} role="status" aria-live="polite" tabIndex={-1}>
      <span className={styles.successIcon}>
        <CheckCircle2 size={40} aria-hidden="true" />
      </span>
      <h3>{title}</h3>
      <p>{message}</p>
      {onReset && (
        <Button variant="outline" onClick={onReset}>
          {actionLabel}
        </Button>
      )}
    </div>
  )
}
