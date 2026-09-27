/**
 * Form submission stub (frontend only).
 *
 * Right now this simulates a network request so the UI can show a success
 * state. When you are ready to receive real submissions, replace the body
 * with a call to your backend or a form service (Formspree, EmailJS, etc.).
 * Keep the honeypot check — bots that fill the hidden field are dropped silently.
 */
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
  void formName
  void clean

  await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS))
  return { ok: true }
}
