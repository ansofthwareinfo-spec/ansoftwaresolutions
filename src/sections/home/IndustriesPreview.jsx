import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '@/components/common/Button'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import { INDUSTRIES } from '@/data/industries'
import styles from './IndustriesPreview.module.css'

export default function IndustriesPreview() {
  return (
    <section className="section" aria-labelledby="industries-preview-title">
      <div className="container">
        <div className={styles.head}>
          <SectionHeading
            align="left"
            eyebrow="Industries we serve"
            title={
              <span id="industries-preview-title">
                Domain expertise across <span className="text-gradient">key industries</span>
              </span>
            }
            description="We understand the regulations, workflows and customer expectations unique to each sector we work in."
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
        </ul>
      </div>
    </section>
  )
}
