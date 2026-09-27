import { ArrowRight, Check } from 'lucide-react'
import Button from '@/components/common/Button'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import SmartImage from '@/components/common/SmartImage'
import { MISSION_VISION } from '@/data/company'
import { IMAGES } from '@/utils/image'
import styles from './AboutPreview.module.css'

const HIGHLIGHTS = [
  'Dedicated project manager for every client',
  'Agile delivery with weekly progress demos',
  'Secure, scalable and well-documented code',
  'Flexible engagement models for any budget',
]

export default function AboutPreview() {
  return (
    <section className="section" aria-labelledby="about-preview-title">
      <div className={`container ${styles.layout}`}>
        <Reveal className={styles.media}>
          <div className={styles.imgMain}>
            <SmartImage src={IMAGES.officeTeam} alt="Our team planning a client project together" sizes="(max-width: 900px) 90vw, 40vw" />
          </div>
          <div className={styles.imgSmall}>
            <SmartImage src={IMAGES.developer} alt="Developer writing code on a laptop" sizes="(max-width: 900px) 50vw, 20vw" />
          </div>
          <div className={styles.badge}>
            <strong>100%</strong>
            <span>Commitment to quality</span>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About us"
            title={
              <span id="about-preview-title">
                Your long-term partner for <span className="text-gradient">digital transformation</span>
              </span>
            }
            description="AN Software Solutions is a team of engineers, designers and strategists who turn business challenges into reliable digital products. We work closely with startups, SMEs and enterprises to deliver technology that is simple to use, secure by design and built to scale."
          />

          <Reveal className={styles.mv}>
            {MISSION_VISION.map(({ icon: Icon, title, text }) => (
              <div key={title} className={styles.mvItem}>
                <span className={styles.mvIcon}>
                  <Icon size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal as="ul" className={`check-list ${styles.list}`}>
            {HIGHLIGHTS.map((item) => (
              <li key={item}>
                <Check size={18} aria-hidden="true" />
                {item}
              </li>
            ))}
          </Reveal>

          <Reveal>
            <Button to="/about" icon={ArrowRight}>
              More About Us
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
