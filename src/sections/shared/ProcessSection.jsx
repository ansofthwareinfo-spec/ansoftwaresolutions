import { useId } from 'react'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import { PROCESS } from '@/data/company'
import styles from './ProcessSection.module.css'

const DEFAULT_TITLE = (
  <>
    Five clear steps, <span className="text-gradient">no surprises</span>
  </>
)

/** Numbered step-by-step process. Defaults to the technology delivery process. */
export default function ProcessSection({
  soft = false,
  steps = PROCESS,
  eyebrow = 'How we work',
  title = DEFAULT_TITLE,
  description = 'You always know what is happening, what comes next and what it will cost.',
}) {
  const titleId = useId()

  return (
    <section className={`section ${soft ? 'section--soft' : ''}`} aria-labelledby={titleId}>
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={<span id={titleId}>{title}</span>} description={description} />

        <ol className={styles.steps}>
          {steps.map(({ icon: Icon, title: stepTitle, text }, index) => (
            <Reveal as="li" key={stepTitle} className={styles.step} delay={index * 90}>
              <span className={styles.badge}>
                <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
                <span className={styles.num} aria-hidden="true">
                  {index + 1}
                </span>
              </span>
              <h3 className={styles.title}>{stepTitle}</h3>
              <p className={styles.text}>{text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
