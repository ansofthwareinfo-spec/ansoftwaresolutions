import { ArrowRight, CheckCircle2, Rocket, Sparkles, Star } from 'lucide-react'
import Button from '@/components/common/Button'
import SmartImage from '@/components/common/SmartImage'
import { IMAGES } from '@/utils/image'
import styles from './Hero.module.css'

const AVATARS = [IMAGES.portrait1, IMAGES.portrait2, IMAGES.portrait3, IMAGES.portrait4]

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
            Software development &amp; IT services company
          </p>

          <h1 id="hero-title" className={styles.title}>
            We build software that <span className="text-gradient">moves your business</span> forward
          </h1>

          <p className={styles.lead}>
            From idea to launch and beyond — AN Software Solutions designs, develops and scales web, mobile, cloud and AI
            solutions that solve real problems and deliver measurable growth.
          </p>

          <div className={styles.actions}>
            <Button to="/contact" size="lg" icon={ArrowRight}>
              Start Your Project
            </Button>
            <Button to="/services" size="lg" variant="outline">
              Explore Services
            </Button>
          </div>

          <div className={styles.trust}>
            <div className={styles.avatars} aria-hidden="true">
              {AVATARS.map((src) => (
                <SmartImage key={src} src={src} alt="" width={44} height={44} sizes="44px" />
              ))}
            </div>
            <div>
              <p className={styles.rating}>
                <span className={styles.stars} aria-hidden="true">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </span>
                <strong>4.9/5</strong>
              </p>
              <p className={styles.trustText}>Rated by 80+ happy clients</p>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.frame}>
            <SmartImage
              src={IMAGES.heroTeam}
              alt="AN Software Solutions team collaborating on a software project"
              width={640}
              height={720}
              sizes="(max-width: 960px) 90vw, 520px"
              priority
            />
          </div>

          <div className={`${styles.float} ${styles.floatTop}`}>
            <span className={styles.floatIcon}>
              <Rocket size={20} aria-hidden="true" />
            </span>
            <div>
              <strong>150+</strong>
              <span>Projects delivered</span>
            </div>
          </div>

          <div className={`${styles.float} ${styles.floatBottom}`}>
            <div className={styles.progressHead}>
              <span>On-time delivery</span>
              <strong>98%</strong>
            </div>
            <div className={styles.progress} aria-hidden="true">
              <span />
            </div>
            <p className={styles.floatNote}>
              <CheckCircle2 size={14} aria-hidden="true" /> Agile sprints &amp; weekly demos
            </p>
          </div>

          <div className={styles.code} aria-hidden="true">
            <span className={styles.dots}>
              <i />
              <i />
              <i />
            </span>
            <code>
              <span className={styles.k}>const</span> growth = <span className={styles.f}>build</span>(
              <span className={styles.s}>&apos;your idea&apos;</span>)
            </code>
          </div>
        </div>
      </div>
    </section>
  )
}
