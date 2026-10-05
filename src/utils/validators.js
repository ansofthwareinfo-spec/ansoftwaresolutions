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
}

const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i
const NAME_RE = /^[\p{L}][\p{L}\s.'-]*$/u
const PHONE_RE = /^\+?[\d\s()-]{7,20}$/
const LINKEDIN_RE = /^https:\/\/([a-z]{2,3}\.)?linkedin\.com\/.+$/i
/** Resume links: Google Drive / Docs, OneDrive (incl. SharePoint) or Dropbox. */
const RESUME_LINK_RE =
  /^https:\/\/(drive\.google\.com|docs\.google\.com|onedrive\.live\.com|1drv\.ms|[\w-]+\.sharepoint\.com|(www\.)?dropbox\.com)\/\S+$/i

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

export function validateResumeLink(value) {
  const v = String(value ?? '').trim()
  if (!v) return 'Please add a link to your resume'
  if (v.length > LIMITS.url || !RESUME_LINK_RE.test(v)) {
    return 'Please enter a Google Drive, OneDrive or Dropbox link to your resume'
  }
  return ''
}

/** Removes empty-string entries so `Object.keys(errors).length` means "has errors". */
export function compactErrors(errors) {
  return Object.fromEntries(Object.entries(errors).filter(([, msg]) => Boolean(msg)))
}
