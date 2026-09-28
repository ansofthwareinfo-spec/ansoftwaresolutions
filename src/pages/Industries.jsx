import { ArrowRight, Check } from 'lucide-react'
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
        description="How software, data and cloud solutions help health insurance, healthcare, banking and finance, retail and education. A&N Software Solutions, Hyderabad."
      />

      <PageHero
        eyebrow="Industries"
        title={
          <>
            Technology that fits <span className="text-gradient">your industry</span>
          </>
        }
        description="Every sector has its own way of working. Here are a few where our specialties can make a real difference."
      />

      <section className="section" aria-label="Industries">
        <div className={`container ${styles.list}`}>
          {INDUSTRIES.map(({ id, title, icon: Icon, image, text, solutions }) => (
            <Reveal as="article" key={id} id={id} className={styles.row}>
              <div className={styles.media}>
                <SmartImage src={image} alt={`${title} software solutions`} sizes="(max-width: 900px) 90vw, 45vw" />
              </div>
              <div className={styles.body}>
                <span className={styles.icon}>
                  <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.text}>{text}</p>
                <ul className={`check-list ${styles.solutions}`}>
                  {solutions.map((item) => (
                    <li key={item}>
                      <Check size={18} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button to="/contact" variant="link" icon={ArrowRight}>
                  Discuss your {title.toLowerCase()} project
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Don’t see your industry here?"
        text="Our skills apply across many sectors. Tell us about your business and we will tell you honestly whether we can help."
      />
    </>
  )
}
