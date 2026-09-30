import { Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '@/components/common/Button'
import { HIRING_SERVICES } from '@/data/hiring'
import { SERVICES } from '@/data/services'
import { useForm } from '@/hooks/useForm'
import { submitForm } from '@/utils/submitForm'
import {
  LIMITS,
  validateEmail,
  validateMessage,
  validateName,
  validatePhone,
  validateRequired,
} from '@/utils/validators'
import CheckboxField from './CheckboxField'
import FormField from './FormField'
import FormSuccess from './FormSuccess'
import Honeypot from './Honeypot'
import styles from './Form.module.css'

const BUDGETS = ['Under ₹2 Lakhs', '₹2 – 5 Lakhs', '₹5 – 15 Lakhs', '₹15 Lakhs +', 'Not sure yet']

const INITIAL_VALUES = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  budget: '',
  message: '',
  consent: false,
  website: '',
}

const validate = (v) => ({
  fullName: validateName(v.fullName, 'Full name'),
  email: validateEmail(v.email),
  phone: validatePhone(v.phone),
  company: v.company.length > LIMITS.company ? `Company must be under ${LIMITS.company} characters` : '',
  service: validateRequired(v.service, 'Please tell us what you need'),
  message: validateMessage(v.message),
  consent: v.consent ? '' : 'Please accept the privacy policy to continue',
})

export default function ContactForm() {
  const { values, status, formRef, register, handleChange, handleSubmit, reset } = useForm(INITIAL_VALUES, validate)

  const onSubmit = handleSubmit((data) => submitForm('contact', data))

  if (status === 'success') {
    const firstName = values.fullName.trim().split(/\s+/)[0]
    return (
      <FormSuccess
        title="Message sent successfully!"
        message={`Thanks for reaching out, ${firstName}. Our team will review your requirements and get back to you within one business day.`}
        actionLabel="Send another message"
        onReset={reset}
      />
    )
  }

  const isSubmitting = status === 'submitting'

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-label="Contact form">
      <Honeypot value={values.website} onChange={handleChange} />

      <div className={styles.grid}>
        <FormField {...register('fullName')} label="Full name" placeholder="Your full name" autoComplete="name" maxLength={LIMITS.name} required />
        <FormField {...register('email')} type="email" label="Email address" placeholder="you@company.com" autoComplete="email" maxLength={LIMITS.email} required />
        <FormField {...register('phone')} type="tel" label="Phone number" placeholder="+91 90000 00000" autoComplete="tel" maxLength={LIMITS.phone} required />
        <FormField {...register('company')} label="Company" placeholder="Company name (optional)" autoComplete="organization" maxLength={LIMITS.company} />

        <FormField {...register('service')} as="select" label="What do you need?" required>
          <option value="">Select an option</option>
          <optgroup label="Hiring">
            {HIRING_SERVICES.map((item) => (
              <option key={item.title} value={item.title}>
                {item.title}
              </option>
            ))}
          </optgroup>
          <optgroup label="Technology services">
            {SERVICES.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
          </optgroup>
          <option value="Looking for a job">I am looking for a job</option>
          <option value="Other">Something else</option>
        </FormField>

        <FormField {...register('budget')} as="select" label="Estimated budget (for projects)">
          <option value="">Select a range (optional)</option>
          {BUDGETS.map((budget) => (
            <option key={budget} value={budget}>
              {budget}
            </option>
          ))}
        </FormField>

        <FormField
          {...register('message')}
          as="textarea"
          label="Details"
          placeholder="Tell us about the role you are hiring for, or the project you have in mind…"
          maxLength={LIMITS.message}
          className={styles.span2}
          hint={`${values.message.length}/${LIMITS.message}`}
          required
        />

        <div className={styles.span2}>
          <CheckboxField {...register('consent')} checked={values.consent}>
            I agree to the <Link to="/privacy-policy">Privacy Policy</Link> and consent to being contacted about my enquiry.
          </CheckboxField>
        </div>

        {status === 'error' && (
          <p className={`${styles.formError} ${styles.span2}`} role="alert">
            Something went wrong. Please try again in a moment.
          </p>
        )}

        <div className={`${styles.submitRow} ${styles.span2}`}>
          <p className={styles.note}>We respect your privacy. No spam, ever.</p>
          <Button type="submit" size="lg" loading={isSubmitting} icon={Send}>
            {isSubmitting ? 'Sending…' : 'Send Message'}
          </Button>
        </div>
      </div>
    </form>
  )
}
