import { Send } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@/components/common/Button'
import { useForm } from '@/hooks/useForm'
import { submitForm } from '@/utils/submitForm'
import {
  LIMITS,
  RESUME_ACCEPT,
  validateEmail,
  validateLinkedIn,
  validateMessage,
  validateName,
  validatePhone,
  validateRequired,
  validateResume,
} from '@/utils/validators'
import CheckboxField from './CheckboxField'
import FileField from './FileField'
import FormField from './FormField'
import FormSuccess from './FormSuccess'
import Honeypot from './Honeypot'
import styles from './Form.module.css'

const EXPERIENCE_OPTIONS = ['Fresher', 'Less than 1 year', '1–3 years', '3–5 years', '5–8 years', '8+ years']
const NOTICE_OPTIONS = ['Immediate', '15 days', '30 days', '60 days', '90 days']
const GENERAL_APPLICATION = 'Any suitable role (talent pool)'

const INITIAL_VALUES = {
  fullName: '',
  email: '',
  phone: '',
  position: '',
  skills: '',
  experience: '',
  location: '',
  noticePeriod: '',
  linkedin: '',
  resume: null,
  coverLetter: '',
  consent: false,
  website: '',
}

const validate = (v) => ({
  fullName: validateName(v.fullName, 'Full name'),
  email: validateEmail(v.email),
  phone: validatePhone(v.phone),
  position: validateRequired(v.position, 'Please select a role'),
  skills: validateRequired(v.skills, 'Please list your key skills'),
  experience: validateRequired(v.experience, 'Please select your experience'),
  location: validateRequired(v.location, 'Current location is required'),
  noticePeriod: validateRequired(v.noticePeriod, 'Please select your notice period'),
  linkedin: validateLinkedIn(v.linkedin),
  resume: validateResume(v.resume),
  coverLetter: validateMessage(v.coverLetter, { required: false, min: 20 }),
  consent: v.consent ? '' : 'Please accept the privacy policy to continue',
})

/**
 * Candidate application form (frontend only).
 * `selectedPosition` pre-fills the role whenever a job's "Apply" button is clicked.
 */
export default function JobApplicationForm({ positions, selectedPosition, selectionKey }) {
  const { values, status, formRef, register, handleChange, handleSubmit, setFieldValue, reset } = useForm(
    INITIAL_VALUES,
    validate,
  )
  const [lastSelectionKey, setLastSelectionKey] = useState(selectionKey)

  if (selectionKey !== lastSelectionKey) {
    setLastSelectionKey(selectionKey)
    if (selectedPosition) setFieldValue('position', selectedPosition)
  }

  const onSubmit = handleSubmit(async (data) => {
    const { resume, ...rest } = data
    // A real backend would receive the file via multipart/form-data.
    await submitForm('job-application', { ...rest, resumeName: resume?.name })
  })

  if (status === 'success') {
    const firstName = values.fullName.trim().split(/\s+/)[0]
    return (
      <FormSuccess
        title="Application submitted successfully!"
        message={`Thank you, ${firstName}. We have received your profile for: ${values.position}. If it matches the requirement, our team will call you to discuss the next steps.`}
        actionLabel="Submit another application"
        onReset={reset}
      />
    )
  }

  const isSubmitting = status === 'submitting'

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-label="Job application form">
      <Honeypot value={values.website} onChange={handleChange} />

      <div className={styles.grid}>
        <FormField {...register('fullName')} label="Full name" placeholder="Your full name" autoComplete="name" maxLength={LIMITS.name} required />
        <FormField {...register('email')} type="email" label="Email address" placeholder="you@example.com" autoComplete="email" maxLength={LIMITS.email} required />
        <FormField {...register('phone')} type="tel" label="Phone number" placeholder="+91 90000 00000" autoComplete="tel" maxLength={LIMITS.phone} required />

        <FormField {...register('position')} as="select" label="Role you are applying for" required>
          <option value="">Select a role</option>
          {positions.map((title) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
          <option value={GENERAL_APPLICATION}>{GENERAL_APPLICATION}</option>
        </FormField>

        <FormField {...register('skills')} label="Key skills" placeholder="e.g. Java, Spring Boot, SQL" maxLength={LIMITS.company} required />

        <FormField {...register('experience')} as="select" label="Total experience" required>
          <option value="">Select experience</option>
          {EXPERIENCE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </FormField>

        <FormField {...register('noticePeriod')} as="select" label="Notice period" required>
          <option value="">Select notice period</option>
          {NOTICE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </FormField>

        <FormField {...register('location')} label="Current location" placeholder="City, State" autoComplete="address-level2" maxLength={LIMITS.company} required />
        <FormField {...register('linkedin')} type="url" label="LinkedIn profile" placeholder="https://linkedin.com/in/yourname" maxLength={LIMITS.url} hint="Optional" className={styles.span2} />

        <div className={styles.span2}>
          <FileField
            id="resume"
            name="resume"
            label="Resume / CV"
            file={values.resume}
            error={register('resume').error}
            accept={RESUME_ACCEPT}
            hint="PDF, DOC or DOCX, up to 5 MB"
            onFile={(name, file) => setFieldValue(name, file, { touch: true })}
            required
          />
        </div>

        <FormField
          {...register('coverLetter')}
          as="textarea"
          label="Anything else we should know?"
          placeholder="Preferred location, expected salary or anything else (optional)"
          maxLength={LIMITS.message}
          className={styles.span2}
          hint={`Optional · ${values.coverLetter.length}/${LIMITS.message}`}
        />

        <div className={styles.span2}>
          <CheckboxField {...register('consent')} checked={values.consent}>
            I agree to the processing of my personal data as described in the <Link to="/privacy-policy">Privacy Policy</Link>.
          </CheckboxField>
        </div>

        {status === 'error' && (
          <p className={`${styles.formError} ${styles.span2}`} role="alert">
            Something went wrong. Please try again in a moment.
          </p>
        )}

        <div className={`${styles.submitRow} ${styles.span2}`}>
          <p className={styles.note}>Fields marked * are required.</p>
          <Button type="submit" size="lg" loading={isSubmitting} icon={Send}>
            {isSubmitting ? 'Submitting…' : 'Submit Application'}
          </Button>
        </div>
      </div>
    </form>
  )
}
