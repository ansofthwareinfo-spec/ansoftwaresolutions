import { ArrowRight, Check } from 'lucide-react'
import Button from '@/components/common/Button'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import SmartImage from '@/components/common/SmartImage'
import { SITE } from '@/config/site'
import { MISSION_VISION } from '@/data/company'
import { IMAGES } from '@/utils/image'
import styles from './AboutPreview.module.css'

const HIGHLIGHTS = [
  'You work directly with the people building it',
  'Clear estimates before any work starts',
  'Regular progress updates you can follow',
  'Solutions that are easy to maintain',
]

export default function AboutPreview() {
  return (
    <section className="section" aria-labelledby="about-preview-title">
      <div className={`container ${styles.layout}`}>
        <Reveal className={styles.media}>
          <div className={styles.imgMain}>
            <SmartImage src={IMAGES.officeTeam} alt="A small team planning a project around a laptop" sizes="(max-width: 900px) 90vw, 40vw" />
          </div>
          <div className={styles.imgSmall}>
            <SmartImage src={IMAGES.codeLaptop} alt="Code on a laptop screen" sizes="(max-width: 900px) 50vw, 20vw" />
          </div>
          <div className={styles.badge}>
            <strong>{SITE.foundedYear}</strong>
            <span>Founded in {SITE.contact.address.city}</span>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About us"
            title={
              <span id="about-preview-title">
                Technology that makes <span className="text-gradient">work easier</span>
              </span>
            }
            description="A&N Software Solutions helps organisations turn challenges into opportunities through technology, data and intelligent solutions. We combine technical skill with a practical understanding of how businesses run, so what we build actually gets used."
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
