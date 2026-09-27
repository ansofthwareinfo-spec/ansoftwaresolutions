import { FileText, Upload, X } from 'lucide-react'
import { useRef, useState } from 'react'
import { cn } from '@/utils/cn'
import styles from './Form.module.css'

const formatSize = (bytes) => (bytes < 1024 * 1024 ? `${Math.round(bytes / 1024)} KB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`)

/** Drag-and-drop file picker that reports the chosen File through onFile(). */
export default function FileField({ id, name, label, file, error, accept, hint, required, onFile }) {
  const inputRef = useRef(null)
  const [dragging, setDragging] = useState(false)
  const errorId = `${id}-error`

  const pick = (selected) => onFile(name, selected ?? null)

  const handleDrop = (event) => {
    event.preventDefault()
    setDragging(false)
    pick(event.dataTransfer.files?.[0])
  }

  const clear = () => {
    pick(null)
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <div className={cn(styles.field, error && styles.hasError)}>
      <span className={styles.label} id={`${id}-label`}>
        {label}
        {required && (
          <span className={styles.required} aria-hidden="true">
            *
          </span>
        )}
      </span>

      {file ? (
        <div className={styles.fileChosen}>
          <FileText size={22} aria-hidden="true" />
          <div className={styles.fileMeta}>
            <strong>{file.name}</strong>
            <span>{formatSize(file.size)}</span>
          </div>
          <button type="button" className={styles.fileRemove} onClick={clear} aria-label={`Remove ${file.name}`}>
            <X size={18} aria-hidden="true" />
          </button>
        </div>
      ) : (
        <label
          htmlFor={id}
          className={cn(styles.dropzone, dragging && styles.dragging)}
          onDragOver={(e) => {
            e.preventDefault()
            setDragging(true)
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
        >
          <Upload size={24} aria-hidden="true" />
          <span>
            <strong>Click to upload</strong> or drag and drop
          </span>
          {hint && <small>{hint}</small>}
        </label>
      )}

      <input
        ref={inputRef}
        id={id}
        name={name}
        type="file"
        accept={accept}
        className="visually-hidden"
        aria-labelledby={`${id}-label`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? errorId : undefined}
        onChange={(e) => pick(e.target.files?.[0])}
      />

      {error && (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
