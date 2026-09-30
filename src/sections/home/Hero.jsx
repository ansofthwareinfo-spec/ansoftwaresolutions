import { ArrowRight, BadgeCheck, CheckCircle2, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '@/components/common/Button'
import SmartImage from '@/components/common/SmartImage'
import { SITE } from '@/config/site'
import { IMAGES } from '@/utils/image'
import styles from './Hero.module.css'

const PROMISES = ['Screened, relevant profiles', 'Confidential hiring', 'Clear, agreed terms']
const MODELS = ['Permanent', 'Contract', 'Contract-to-hire']

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
            Build your team with <span className="text-gradient">people who deliver</span>
          </h1>

          <p className={styles.lead}>
            We help companies hire skilled, pre-screened professionals for permanent, contract and leadership roles.
            And when you need technology built, our engineers are ready to help with that too.
          </p>

          <div className={styles.actions}>
            <Button to="/hire" size="lg" icon={ArrowRight}>
              Hire Talent
            </Button>
            <Button to="/jobs" size="lg" variant="outline">
              Find a Job
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
              src={IMAGES.interview}
              alt="A recruiter interviewing a candidate at a desk"
              width={640}
              height={720}
              sizes="(max-width: 960px) 90vw, 520px"
              priority
            />
          </div>

          {/* Illustrative UI card, not a real candidate */}
          <div className={`${styles.float} ${styles.floatTop}`} aria-hidden="true">
            <span className={styles.floatIcon}>
              <BadgeCheck size={20} />
            </span>
            <div>
              <strong>Profile shortlisted</strong>
              <span>Skills and experience verified</span>
            </div>
          </div>

          <div className={`${styles.float} ${styles.floatBottom}`} aria-hidden="true">
            <p className={styles.floatLabel}>Ways to hire</p>
            <ul className={styles.focus}>
              {MODELS.map((model) => (
                <li key={model}>{model}</li>
              ))}
            </ul>
          </div>

          <Link to="/services" className={styles.servicesPill}>
            Also: Software · Data · AI · Cloud <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
