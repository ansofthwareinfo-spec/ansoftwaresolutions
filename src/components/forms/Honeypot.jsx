import styles from './Form.module.css'

/** Hidden anti-spam field. Humans never see it; bots that fill it are ignored. */
export default function Honeypot({ value, onChange }) {
  return (
    <div className={styles.honeypot} aria-hidden="true">
      <label htmlFor="website">Leave this field empty</label>
      <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={value} onChange={onChange} />
    </div>
  )
}
