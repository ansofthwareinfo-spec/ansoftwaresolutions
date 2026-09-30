import { ArrowRight, Check, Cpu, Users } from 'lucide-react'
import Button from '@/components/common/Button'
import CtaBanner from '@/components/common/CtaBanner'
import PageHero from '@/components/common/PageHero'
import Reveal from '@/components/common/Reveal'
import Seo from '@/components/common/Seo'
import SmartImage from '@/components/common/SmartImage'
import { INDUSTRIES } from '@/data/industries'
import styles from './Industries.module.css'

export default function Industries() {
  return (
    <>
      <Seo
        image="/og/industries.jpg"
        title="Industries"
        description="Hiring and technology services for IT, BPO and customer service, health insurance, healthcare, banking and finance, retail and education. A&N Software Solutions, Hyderabad."
      />

      <PageHero
        eyebrow="Industries"
        title={
          <>
            Talent and technology for <span className="text-gradient">your industry</span>
          </>
        }
        description="Every sector has its own way of working. Here is how skilled people and the right technology can make a difference in a few of them."
      />

      <section className="section" aria-label="Industries">
        <div className={`container ${styles.list}`}>
          {INDUSTRIES.map(({ id, title, icon: Icon, image, text, roles, solutions }) => (
            <Reveal as="article" key={id} id={id} className={styles.row}>
              <div className={styles.media}>
                <SmartImage src={image} alt={`${title} sector`} sizes="(max-width: 900px) 90vw, 45vw" />
              </div>
              <div className={styles.body}>
                <span className={styles.icon}>
                  <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.text}>{text}</p>
                <div className={styles.offers}>
                  <div>
                    <p className={styles.offerTitle}>
                      <Users size={16} aria-hidden="true" /> People we hire
                    </p>
                    <ul className="check-list">
                      {roles.map((item) => (
                        <li key={item}>
                          <Check size={18} aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className={styles.offerTitle}>
                      <Cpu size={16} aria-hidden="true" /> Solutions we build
                    </p>
                    <ul className="check-list">
                      {solutions.map((item) => (
                        <li key={item}>
                          <Check size={18} aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={styles.links}>
                  <Button to="/hire" size="sm" icon={ArrowRight}>
                    Hire for this sector
                  </Button>
                  <Button to="/contact" variant="link" icon={ArrowRight}>
                    Discuss a project
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Don’t see your industry here?"
        text="We work across many sectors. Tell us who you need or what you want to build, and we will tell you honestly how we can help."
      />
    </>
  )
}
