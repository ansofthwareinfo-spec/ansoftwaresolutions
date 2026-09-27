import styles from './PageHero.module.css'

/** Inner-page banner with title, description and optional actions. */
export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} aria-hidden="true">
        <span className={styles.blobA} />
        <span className={styles.blobB} />
      </div>

      <div className={`container ${styles.inner}`}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
        {children && <div className={styles.actions}>{children}</div>}
      </div>
    </section>
  )
}
