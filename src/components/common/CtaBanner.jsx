import { ArrowRight, Phone } from 'lucide-react'
import { SITE } from '@/config/site'
import Button from './Button'
import Reveal from './Reveal'
import styles from './CtaBanner.module.css'

export default function CtaBanner({
  title = 'Have a problem worth solving? Let’s talk.',
  text = 'Tell us what you are working on. The first consultation is free, and we will give you honest advice on the best way forward.',
  primaryLabel = 'Book a Free Consultation',
  primaryTo = '/contact',
}) {
  return (
    <section className="section" aria-labelledby="cta-title">
      <div className="container">
        <Reveal className={styles.banner}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.content}>
            <h2 id="cta-title" className={styles.title}>
              {title}
            </h2>
            <p className={styles.text}>{text}</p>
          </div>
          <div className={styles.actions}>
            <Button to={primaryTo} variant="accent" size="lg" icon={ArrowRight}>
              {primaryLabel}
            </Button>
            <Button href={`tel:${SITE.contact.phoneHref}`} variant="ghostLight" size="lg" icon={Phone} iconPosition="left">
              {SITE.contact.phone}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
