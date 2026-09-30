import { ArrowRight, Check } from 'lucide-react'
import Button from '@/components/common/Button'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import SmartImage from '@/components/common/SmartImage'
import { MISSION_VISION } from '@/data/company'
import { IMAGES } from '@/utils/image'
import styles from './AboutPreview.module.css'

const HIGHLIGHTS = [
  'Skilled people for every function',
  'A dedicated point of contact',
  'Honest advice and clear terms',
  'Engineers for technology projects',
]

export default function AboutPreview() {
  return (
    <section className="section" aria-labelledby="about-preview-title">
      <div className={`container ${styles.layout}`}>
        <Reveal className={styles.media}>
          <div className={styles.imgMain}>
            <SmartImage src={IMAGES.officeTeam} alt="A team discussing a hiring plan around a laptop" sizes="(max-width: 900px) 90vw, 40vw" />
          </div>
          <div className={styles.imgSmall}>
            <SmartImage src={IMAGES.codeLaptop} alt="Code on a laptop screen" sizes="(max-width: 900px) 50vw, 20vw" />
          </div>
          <div className={styles.badge}>
            <strong>People</strong>
            <span>and technology, under one roof</span>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About us"
            title={
              <span id="about-preview-title">
                The right people and <span className="text-gradient">the right technology</span>
              </span>
            }
            description="A&N Software Solutions helps organisations turn challenges into opportunities. We connect companies with skilled professionals for every function, and we also build the software, data and cloud solutions that help those teams do their best work."
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
