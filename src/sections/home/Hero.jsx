import { ArrowRight, CheckCircle2, MapPin, Sparkles } from 'lucide-react'
import Button from '@/components/common/Button'
import SmartImage from '@/components/common/SmartImage'
import { SITE } from '@/config/site'
import { IMAGES } from '@/utils/image'
import styles from './Hero.module.css'

const PROMISES = ['Free first consultation', 'NDA on request', 'You own the code']
const FOCUS_AREAS = ['Software', 'Data', 'AI', 'Cloud']

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.bg} aria-hidden="true">
        <span className={styles.orbA} />
        <span className={styles.orbB} />
        <span className={styles.grid} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.badge}>
            <Sparkles size={16} aria-hidden="true" />
            {SITE.tagline}
          </p>

          <h1 id="hero-title" className={styles.title}>
            Turn business challenges into <span className="text-gradient">real opportunities</span>
          </h1>

          <p className={styles.lead}>
            We are a Hyderabad-based team that helps businesses work smarter with software, data, AI and cloud. Tell
            us what is slowing you down, and we will help you plan it, build it and run it.
          </p>

          <div className={styles.actions}>
            <Button to="/contact" size="lg" icon={ArrowRight}>
              Talk to Us
            </Button>
            <Button to="/services" size="lg" variant="outline">
              See What We Do
            </Button>
          </div>

          <ul className={styles.promises}>
            {PROMISES.map((item) => (
              <li key={item}>
                <CheckCircle2 size={18} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.visual}>
          <div className={styles.frame}>
            <SmartImage
              src={IMAGES.heroTeam}
              alt="Developers working together on laptops"
              width={640}
              height={720}
              sizes="(max-width: 960px) 90vw, 520px"
              priority
            />
          </div>

          <div className={`${styles.float} ${styles.floatTop}`}>
            <span className={styles.floatIcon}>
              <MapPin size={20} aria-hidden="true" />
            </span>
            <div>
              <strong>Since {SITE.foundedYear}</strong>
              <span>
                {SITE.contact.address.city}, {SITE.contact.address.country}
              </span>
            </div>
          </div>

          <div className={`${styles.float} ${styles.floatBottom}`}>
            <p className={styles.floatLabel}>From strategy to execution</p>
            <ul className={styles.focus}>
              {FOCUS_AREAS.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div className={styles.code} aria-hidden="true">
            <span className={styles.dots}>
              <i />
              <i />
              <i />
            </span>
            <code>
              <span className={styles.k}>const</span> efficiency = <span className={styles.f}>innovate</span>(
              <span className={styles.s}>&apos;your idea&apos;</span>)
            </code>
          </div>
        </div>
      </div>
    </section>
  )
}
