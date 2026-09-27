import { ArrowRight, Check } from 'lucide-react'
import Button from '@/components/common/Button'
import CtaBanner from '@/components/common/CtaBanner'
import PageHero from '@/components/common/PageHero'
import Reveal from '@/components/common/Reveal'
import Seo from '@/components/common/Seo'
import SmartImage from '@/components/common/SmartImage'
import { INDUSTRIES } from '@/data/industries'
import StatsSection from '@/sections/shared/StatsSection'
import styles from './Industries.module.css'

export default function Industries() {
  return (
    <>
      <Seo
        title="Industries We Serve"
        description="Software solutions for healthcare, fintech, retail & e-commerce, education, logistics, real estate, manufacturing and travel — by AN Software Solutions."
      />

      <PageHero
        eyebrow="Industries"
        title={
          <>
            Solutions tailored to <span className="text-gradient">your industry</span>
          </>
        }
        description="We combine technical expertise with domain understanding to build software that fits the way your industry works."
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

      <StatsSection />
      <CtaBanner title="Don’t see your industry listed?" text="Our adaptable teams have delivered solutions across many domains. Tell us about your business and we will show you how we can help." />
    </>
  )
}
