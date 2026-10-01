import { ArrowRight, Check } from 'lucide-react'
import FeatureCard from '@/components/cards/FeatureCard'
import ServiceCard from '@/components/cards/ServiceCard'
import ServiceHelpCard from '@/components/cards/ServiceHelpCard'
import Button from '@/components/common/Button'
import CtaBanner from '@/components/common/CtaBanner'
import PageHero from '@/components/common/PageHero'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import Seo from '@/components/common/Seo'
import { GOALS } from '@/data/company'
import { ENGAGEMENT_MODELS, SERVICES } from '@/data/services'
import FaqSection from '@/sections/shared/FaqSection'
import ProcessSection from '@/sections/shared/ProcessSection'
import WhyChooseUsSection from '@/sections/shared/WhyChooseUsSection'
import { cn } from '@/utils/cn'
import styles from './Services.module.css'

export default function Services() {
  return (
    <>
      <Seo
        image="/og/services.jpg"
        title="Our Services"
        description="Software engineering, data & analytics, artificial intelligence, business intelligence, cloud computing, automation and digital transformation services from A&N Software Solutions, Hyderabad."
      />

      <PageHero
        eyebrow="Technology services"
        title={
          <>
            What we can <span className="text-gradient">do for you</span>
          </>
        }
        description="Seven areas of expertise under one roof. We help you decide what to do, build it properly and keep it running well."
      >
        <Button to="/contact" icon={ArrowRight}>
          Discuss Your Project
        </Button>
      </PageHero>

      <section className="section" aria-labelledby="all-services-title">
        <h2 id="all-services-title" className="visually-hidden">
          Our technology services
        </h2>
        <div className="container grid-4">
          {SERVICES.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 4) * 80}>
              <ServiceCard service={service} index={index} />
            </Reveal>
          ))}
          <Reveal delay={240}>
            <ServiceHelpCard />
          </Reveal>
        </div>
      </section>

      <WhyChooseUsSection />
      <ProcessSection />

      <section className="section section--soft" aria-labelledby="models-title">
        <div className="container">
          <SectionHeading
            eyebrow="Engagement models"
            title={
              <span id="models-title">
                Flexible ways to <span className="text-gradient">work together</span>
              </span>
            }
            description="Choose the model that best fits your scope, timeline and budget. You can switch as your needs evolve."
          />
          <div className={styles.models}>
            {ENGAGEMENT_MODELS.map((model, index) => (
              <Reveal key={model.title} delay={index * 100} className={cn(styles.model, model.featured && styles.featured)}>
                {model.tag && <span className={styles.tag}>{model.tag}</span>}
                <h3 className={styles.modelTitle}>{model.title}</h3>
                <p className={styles.modelText}>{model.text}</p>
                <ul className={`check-list ${styles.modelList}`}>
                  {model.points.map((point) => (
                    <li key={point}>
                      <Check size={18} aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Button to="/contact" variant={model.featured ? 'accent' : 'outline'} fullWidth>
                  Get Started
                </Button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="section" aria-labelledby="commitments-title">
        <div className="container">
          <SectionHeading
            eyebrow="Our commitments"
            title={
              <span id="commitments-title">
                What we hold <span className="text-gradient">ourselves to</span>
              </span>
            }
            description="Simple commitments that shape how we plan, build and support every project."
          />
          <div className="grid-3">
            {GOALS.map((goal, index) => (
              <Reveal key={goal.title} delay={(index % 3) * 90}>
                <FeatureCard {...goal} number={index + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqSection soft />
      <CtaBanner />
    </>
  )
}
