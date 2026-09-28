import { ArrowRight, MessageCircle } from 'lucide-react'
import Accordion from '@/components/common/Accordion'
import Button from '@/components/common/Button'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import { SITE } from '@/config/site'
import { GENERAL_FAQS } from '@/data/faqs'
import styles from './FaqSection.module.css'

export default function FaqSection({ items = GENERAL_FAQS, soft = false }) {
  return (
    <section className={`section ${soft ? 'section--soft' : ''}`} aria-labelledby="faq-title">
      <div className={`container ${styles.layout}`}>
        <div className={styles.intro}>
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title={<span id="faq-title">Frequently asked questions</span>}
            description="Answers to the questions people usually ask us. If yours is not here, just get in touch."
          />
          <Reveal className={styles.help}>
            <MessageCircle size={28} aria-hidden="true" />
            <div>
              <p className={styles.helpTitle}>Still have questions?</p>
              <p className={styles.helpText}>Our team typically replies within one business day.</p>
            </div>
            <Button to="/contact" size="sm" icon={ArrowRight}>
              Contact Us
            </Button>
            <a href={`mailto:${SITE.contact.email}`} className={styles.mail}>
              {SITE.contact.email}
            </a>
          </Reveal>
        </div>
        <Reveal>
          <Accordion items={items} />
        </Reveal>
      </div>
    </section>
  )
}
