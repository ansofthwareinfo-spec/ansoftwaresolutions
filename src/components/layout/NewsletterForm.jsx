import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { useState } from 'react'
import { submitForm } from '@/utils/submitForm'
import { LIMITS, validateEmail } from '@/utils/validators'
import styles from './Footer.module.css'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const message = validateEmail(email)
    setError(message)
    if (message || status === 'submitting') return

    setStatus('submitting')
    await submitForm('newsletter', { email })
    setStatus('success')
    setEmail('')
  }

  if (status === 'success') {
    return (
      <p className={styles.newsSuccess} role="status">
        <CheckCircle2 size={20} aria-hidden="true" /> Subscribed successfully! Thank you for joining us.
      </p>
    )
  }

  return (
    <form className={styles.newsForm} onSubmit={handleSubmit} noValidate>
      <label htmlFor="newsletter-email" className="visually-hidden">
        Email address
      </label>
      <div className={styles.newsRow}>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Enter your email address"
          maxLength={LIMITS.email}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (error) setError('')
          }}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? 'newsletter-error' : undefined}
        />
        <button type="submit" disabled={status === 'submitting'} aria-label="Subscribe">
          {status === 'submitting' ? (
            <Loader2 size={18} className={styles.spin} aria-hidden="true" />
          ) : (
            <Send size={18} aria-hidden="true" />
          )}
          <span>Subscribe</span>
        </button>
      </div>
      {error && (
        <p id="newsletter-error" className={styles.newsError} role="alert">
          {error}
        </p>
      )}
    </form>
  )
}
