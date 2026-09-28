import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import { PROCESS } from '@/data/company'
import styles from './ProcessSection.module.css'

export default function ProcessSection({ soft = false }) {
  return (
    <section className={`section ${soft ? 'section--soft' : ''}`} aria-labelledby="process-title">
      <div className="container">
        <SectionHeading
          eyebrow="How we work"
          title={
            <span id="process-title">
              Five clear steps, <span className="text-gradient">no surprises</span>
            </span>
          }
          description="You always know what is happening, what comes next and what it will cost."
        />

        <ol className={styles.steps}>
          {PROCESS.map(({ icon: Icon, title, text }, index) => (
            <Reveal as="li" key={title} className={styles.step} delay={index * 90}>
              <span className={styles.badge}>
                <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
                <span className={styles.num} aria-hidden="true">
                  {index + 1}
                </span>
              </span>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.text}>{text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
