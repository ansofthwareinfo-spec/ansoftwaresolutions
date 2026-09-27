import { SITE } from '@/config/site'
import styles from './LegalContent.module.css'

/** Renders a legal document from structured data (see data/legal.js). */
export default function LegalContent({ document }) {
  return (
    <section className="section">
      <div className={`container ${styles.wrap}`}>
        <p className={styles.updated}>Last updated: {document.updated}</p>
        {document.sections.map((section, index) => (
          <article key={section.title} className={styles.block}>
            <h2>
              {index + 1}. {section.title}
            </h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        ))}
        <article className={styles.block}>
          <h2>Contact</h2>
          <p>
            For any questions, please contact {SITE.legalName} at{' '}
            <a href={`mailto:${SITE.contact.email}`}>{SITE.contact.email}</a>.
          </p>
        </article>
      </div>
    </section>
  )
}
