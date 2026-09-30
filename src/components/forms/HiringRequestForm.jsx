import { Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '@/components/common/Button'
import { HIRING_MODELS } from '@/data/hiring'
import { useForm } from '@/hooks/useForm'
import { submitForm } from '@/utils/submitForm'
import { LIMITS, validateEmail, validateMessage, validateName, validatePhone, validateRequired } from '@/utils/validators'
import CheckboxField from './CheckboxField'
import FormField from './FormField'
import FormSuccess from './FormSuccess'
import Honeypot from './Honeypot'
import styles from './Form.module.css'

const POSITION_COUNTS = ['1', '2–5', '6–10', 'More than 10']
const EXPERIENCE_LEVELS = ['Freshers', '1–3 years', '3–6 years', '6–10 years', '10+ years', 'Mixed levels']

const INITIAL_VALUES = {
  company: '',
  fullName: '',
  email: '',
  phone: '',
  roles: '',
  positions: '',
  hiringModel: '',
  experience: '',
  location: '',
  details: '',
  consent: false,
  website: '',
}

const validate = (v) => ({
  company: validateRequired(v.company, 'Company name is required'),
  fullName: validateName(v.fullName, 'Your name'),
  email: validateEmail(v.email),
  phone: validatePhone(v.phone),
  roles: validateRequired(v.roles, 'Tell us which role(s) you are hiring for'),
  positions: validateRequired(v.positions, 'Please select the number of positions'),
  hiringModel: validateRequired(v.hiringModel, 'Please select a hiring type'),
  experience: validateRequired(v.experience, 'Please select the experience level'),
  location: validateRequired(v.location, 'Job location is required'),
  details: validateMessage(v.details, { required: false, min: 10 }),
  consent: v.consent ? '' : 'Please accept the privacy policy to continue',
})

/** Employer hiring requirement form (frontend only). */
export default function HiringRequestForm() {
  const { values, status, formRef, register, handleChange, handleSubmit, reset } = useForm(INITIAL_VALUES, validate)

  const onSubmit = handleSubmit((data) => submitForm('hiring-request', data))

  if (status === 'success') {
    const firstName = values.fullName.trim().split(/\s+/)[0]
    return (
      <FormSuccess
        title="Requirement received successfully!"
        message={`Thank you, ${firstName}. Our consultant will call you within one business day to understand the ${values.roles} role and agree on the next steps.`}
        actionLabel="Submit another requirement"
        onReset={reset}
      />
    )
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-label="Hiring requirement form">
      <Honeypot value={values.website} onChange={handleChange} />

      <div className={styles.grid}>
        <FormField {...register('company')} label="Company name" placeholder="Your company" autoComplete="organization" maxLength={LIMITS.company} required />
        <FormField {...register('fullName')} label="Your name" placeholder="Full name" autoComplete="name" maxLength={LIMITS.name} required />
        <FormField {...register('email')} type="email" label="Work email" placeholder="you@company.com" autoComplete="email" maxLength={LIMITS.email} required />
        <FormField {...register('phone')} type="tel" label="Phone number" placeholder="+91 90000 00000" autoComplete="tel" maxLength={LIMITS.phone} required />

        <FormField
          {...register('roles')}
          label="Role(s) you are hiring for"
          placeholder="e.g. 2 Java Developers, 1 QA Engineer"
          maxLength={LIMITS.company}
          className={styles.span2}
          required
        />

        <FormField {...register('positions')} as="select" label="Number of positions" required>
          <option value="">Select</option>
          {POSITION_COUNTS.map((count) => (
            <option key={count} value={count}>
              {count}
            </option>
          ))}
        </FormField>

        <FormField {...register('hiringModel')} as="select" label="Hiring type" required>
          <option value="">Select</option>
          {HIRING_MODELS.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </FormField>

        <FormField {...register('experience')} as="select" label="Experience level" required>
          <option value="">Select</option>
          {EXPERIENCE_LEVELS.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </FormField>

        <FormField {...register('location')} label="Job location" placeholder="City, or Remote / Hybrid" maxLength={LIMITS.company} required />

        <FormField
          {...register('details')}
          as="textarea"
          label="Job description or notes"
          placeholder="Key skills, responsibilities, budget range or timeline (optional)"
          maxLength={LIMITS.message}
          className={styles.span2}
          hint={`Optional · ${values.details.length}/${LIMITS.message}`}
        />

        <div className={styles.span2}>
          <CheckboxField {...register('consent')} checked={values.consent}>
            I agree to the <Link to="/privacy-policy">Privacy Policy</Link> and consent to being contacted about this
            requirement.
          </CheckboxField>
        </div>

        {status === 'error' && (
          <p className={`${styles.formError} ${styles.span2}`} role="alert">
            Something went wrong. Please try again in a moment.
          </p>
        )}

        <div className={`${styles.submitRow} ${styles.span2}`}>
          <p className={styles.note}>Your details stay confidential.</p>
          <Button type="submit" size="lg" loading={status === 'submitting'} icon={Send}>
            {status === 'submitting' ? 'Sending…' : 'Send Requirement'}
          </Button>
        </div>
      </div>
    </form>
  )
}
