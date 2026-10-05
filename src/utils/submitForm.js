/**
 * Form submission.
 *
 * Forms listed in SHEET_FORMS are sent to the Google Apps Script Web app, which saves each one
 * as a row in Google Sheets (see google-apps-script/README.md). Its URL comes from VITE_FORMS_ENDPOINT.
 * Other forms are still simulated so the UI can show a success state.
 * Keep the honeypot check — bots that fill the hidden field are dropped silently.
 */
const ENDPOINT = import.meta.env.VITE_FORMS_ENDPOINT
const SHEET_FORMS = ['contact', 'job-application']
const SIMULATED_DELAY_MS = 1200

function sanitize(payload) {
  return Object.fromEntries(
    Object.entries(payload).map(([key, value]) => [key, typeof value === 'string' ? value.trim() : value]),
  )
}

export async function submitForm(formName, payload) {
  const { website, ...data } = payload

  // Honeypot: real users never see or fill the "website" field.
  if (website) {
    return { ok: true }
  }

  const clean = sanitize(data)

  // Without an endpoint (local development) the form is simulated.
  if (!SHEET_FORMS.includes(formName) || !ENDPOINT) {
    if (SHEET_FORMS.includes(formName) && !import.meta.env.DEV) throw new Error('VITE_FORMS_ENDPOINT is not set')
    await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS))
    return { ok: true }
  }

  // text/plain keeps this a "simple" request, so the browser skips the CORS preflight Apps Script cannot answer.
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ form: formName, ...clean }),
  })
  if (!response.ok) throw new Error(`Form submission failed (${response.status})`)

  const result = await response.json()
  if (!result.ok) throw new Error(result.error || 'Form submission failed')
  return result
}
