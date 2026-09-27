/**
 * Client-side validation rules.
 * NOTE: client-side checks improve UX but are not a security boundary —
 * any backend you connect later must re-validate every field.
 */
export const LIMITS = {
  name: 60,
  email: 120,
  phone: 20,
  company: 100,
  url: 200,
  message: 2000,
  fileBytes: 5 * 1024 * 1024,
}

const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i
const NAME_RE = /^[\p{L}][\p{L}\s.'-]*$/u
const PHONE_RE = /^\+?[\d\s()-]{7,20}$/
const LINKEDIN_RE = /^https:\/\/([a-z]{2,3}\.)?linkedin\.com\/.+$/i

const ALLOWED_RESUME = {
  extensions: ['pdf', 'doc', 'docx'],
  mimeTypes: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ],
}

export const isBlank = (v) => v == null || String(v).trim() === ''

export function validateName(value, label = 'Name') {
  const v = String(value ?? '').trim()
  if (!v) return `${label} is required`
  if (v.length < 2) return `${label} must be at least 2 characters`
  if (v.length > LIMITS.name) return `${label} must be under ${LIMITS.name} characters`
  if (!NAME_RE.test(v)) return `${label} can only contain letters, spaces, dots, apostrophes and hyphens`
  return ''
}

export function validateEmail(value) {
  const v = String(value ?? '').trim()
  if (!v) return 'Email is required'
  if (v.length > LIMITS.email || !EMAIL_RE.test(v)) return 'Please enter a valid email address'
  return ''
}

export function validatePhone(value, { required = true } = {}) {
  const v = String(value ?? '').trim()
  if (!v) return required ? 'Phone number is required' : ''
  const digits = v.replace(/\D/g, '')
  if (!PHONE_RE.test(v) || digits.length < 7 || digits.length > 15) return 'Please enter a valid phone number'
  return ''
}

export function validateRequired(value, message = 'This field is required') {
  return isBlank(value) ? message : ''
}

export function validateMessage(value, { min = 10, required = true } = {}) {
  const v = String(value ?? '').trim()
  if (!v) return required ? 'Message is required' : ''
  if (v.length < min) return `Please write at least ${min} characters`
  if (v.length > LIMITS.message) return `Message must be under ${LIMITS.message} characters`
  return ''
}

export function validateLinkedIn(value) {
  const v = String(value ?? '').trim()
  if (!v) return ''
  if (v.length > LIMITS.url || !LINKEDIN_RE.test(v)) return 'Please enter a valid LinkedIn URL (https://linkedin.com/in/...)'
  return ''
}

export function validateResume(file) {
  if (!file) return 'Please upload your resume'
  const ext = file.name.split('.').pop()?.toLowerCase() ?? ''
  const typeOk = !file.type || ALLOWED_RESUME.mimeTypes.includes(file.type)
  if (!ALLOWED_RESUME.extensions.includes(ext) || !typeOk) return 'Only PDF, DOC or DOCX files are allowed'
  if (file.size > LIMITS.fileBytes) return 'File size must be 5 MB or less'
  if (file.size === 0) return 'The selected file is empty'
  return ''
}

export const RESUME_ACCEPT = '.pdf,.doc,.docx'

/** Removes empty-string entries so `Object.keys(errors).length` means "has errors". */
export function compactErrors(errors) {
  return Object.fromEntries(Object.entries(errors).filter(([, msg]) => Boolean(msg)))
}
