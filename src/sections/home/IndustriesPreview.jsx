import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '@/components/common/Button'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import { INDUSTRIES } from '@/data/industries'
import styles from './IndustriesPreview.module.css'

export default function IndustriesPreview({ soft = false }) {
  return (
    <section className={`section ${soft ? 'section--soft' : ''}`} aria-labelledby="industries-preview-title">
      <div className="container">
        <div className={styles.head}>
          <SectionHeading
            align="left"
            eyebrow="Industries"
            title={
              <span id="industries-preview-title">
                Where our work <span className="text-gradient">makes a difference</span>
              </span>
            }
            description="Whether you need skilled people or new technology, these are sectors where we can support you."
          />
          <Button to="/industries" variant="outline" icon={ArrowRight} className={styles.cta}>
            All Industries
          </Button>
        </div>

        <ul className={styles.grid}>
          {INDUSTRIES.map(({ id, title, icon: Icon, text }, index) => (
            <Reveal as="li" key={id} delay={(index % 4) * 70}>
              <Link to={`/industries#${id}`} className={styles.tile}>
                <span className={styles.icon}>
                  <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{text}</p>
                <ArrowRight size={18} className={styles.arrow} aria-hidden="true" />
              </Link>
            </Reveal>
          ))}
          <Reveal as="li" delay={210}>
            <Link to="/contact" className={`${styles.tile} ${styles.tileCta}`}>
              <h3 className={styles.title}>Don’t see your industry?</h3>
              <p className={styles.text}>Tell us who you need or what you want to build. We will tell you honestly how we can help.</p>
              <span className={styles.ctaLink}>
                Talk to us <ArrowRight size={16} aria-hidden="true" />
              </span>
            </Link>
          </Reveal>
        </ul>
      </div>
    </section>
  )
}
