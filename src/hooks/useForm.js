import { useRef, useState } from 'react'
import { compactErrors } from '@/utils/validators'

/**
 * Lightweight form state manager.
 * @param {object} initialValues
 * @param {(values: object) => object} validate  returns { field: 'error message' }
 */
export function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const formRef = useRef(null)

  const validateField = (name, nextValues) => {
    const fieldError = validate(nextValues)[name]
    setErrors((prev) => compactErrors({ ...prev, [name]: fieldError }))
  }

  /** Set a value programmatically. `{ touch: true }` validates immediately (e.g. file pickers). */
  const setFieldValue = (name, value, { touch = false } = {}) => {
    const next = { ...values, [name]: value }
    setValues(next)
    if (touch) setTouched((prev) => ({ ...prev, [name]: true }))
    if (touch || touched[name]) validateField(name, next)
  }

  const handleChange = (event) => {
    const { name, type, value, checked, files } = event.target
    let nextValue = value
    if (type === 'checkbox') nextValue = checked
    else if (type === 'file') nextValue = files?.[0] ?? null
    setFieldValue(name, nextValue)
  }

  const handleBlur = (event) => {
    const { name } = event.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    validateField(name, values)
  }

  const handleSubmit = (onSubmit) => async (event) => {
    event.preventDefault()
    if (status === 'submitting') return

    const nextErrors = compactErrors(validate(values))
    setErrors(nextErrors)
    setTouched(Object.fromEntries(Object.keys(values).map((key) => [key, true])))

    if (Object.keys(nextErrors).length > 0) {
      requestAnimationFrame(() => {
        formRef.current?.querySelector('[aria-invalid="true"]')?.focus()
      })
      return
    }

    setStatus('submitting')
    try {
      await onSubmit(values)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
    setStatus('idle')
  }

  /** Spread onto a field: <FormField {...register('email')} /> */
  const register = (name) => ({
    name,
    id: name,
    value: values[name] ?? '',
    onChange: handleChange,
    onBlur: handleBlur,
    error: touched[name] ? errors[name] : undefined,
  })

  return { values, errors, status, formRef, register, handleChange, handleBlur, handleSubmit, setFieldValue, reset }
}
