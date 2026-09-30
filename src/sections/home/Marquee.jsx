import styles from './Marquee.module.css'

function Track({ items, hidden = false }) {
  return (
    <ul className={styles.track} aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className={styles.item}>
          {item}
        </li>
      ))}
    </ul>
  )
}

/** Infinite scrolling strip of short labels (pauses on hover, static for reduced motion). */
export default function Marquee({ items, label, ariaLabel }) {
  return (
    <section className={styles.section} aria-label={ariaLabel ?? label}>
      {label && (
        <div className="container">
          <p className={styles.label}>{label}</p>
        </div>
      )}
      <div className={styles.marquee}>
        <Track items={items} />
        <Track items={items} hidden />
      </div>
    </section>
  )
}
