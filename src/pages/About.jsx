import { ArrowRight, Check } from 'lucide-react'
import FeatureCard from '@/components/cards/FeatureCard'
import Button from '@/components/common/Button'
import CtaBanner from '@/components/common/CtaBanner'
import PageHero from '@/components/common/PageHero'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import Seo from '@/components/common/Seo'
import SmartImage from '@/components/common/SmartImage'
import { SITE } from '@/config/site'
import { COMPANY_FACTS, GOALS, MISSION_VISION, SERVICES_PROVIDED, SPECIALTIES, VALUES } from '@/data/company'
import WhyChooseUsSection from '@/sections/shared/WhyChooseUsSection'
import { IMAGES } from '@/utils/image'
import styles from './About.module.css'

const STORY_POINTS = [
  'Strategy and delivery handled by the same team',
  'Honest advice, even when it means doing less',
  'Clear pricing and regular progress updates',
  'Scalable, secure solutions that are easy to maintain',
]

export default function About() {
  return (
    <>
      <Seo
        image="/og/about.jpg"
        title="About Us"
        description="A&N Software Solutions is a self-owned technology company founded in Hyderabad in 2022. Learn about our story, mission, goals and the values behind our work."
      />

      <PageHero
        eyebrow="About us"
        title={
          <>
            Efficiency powered by <span className="text-gradient">innovation</span>
          </>
        }
        description={`A small, focused technology company based in ${SITE.contact.address.city}, helping businesses turn challenges into opportunities.`}
      />

      {/* Story */}
      <section className="section" aria-labelledby="story-title">
        <div className={`container ${styles.story}`}>
          <Reveal className={styles.storyMedia}>
            <SmartImage src={IMAGES.collaboration} alt="People discussing a project around laptops" sizes="(max-width: 900px) 90vw, 45vw" />
            <div className={styles.storyBadge}>
              <strong>{SITE.foundedYear}</strong>
              <span>Founded in {SITE.contact.address.city}</span>
            </div>
          </Reveal>

          <div>
            <SectionHeading align="left" eyebrow="Our story" title={<span id="story-title">Why we started</span>} />
            <Reveal className={styles.storyText}>
              <p>
                {SITE.name} was founded in {SITE.contact.address.city} in {SITE.foundedYear}. Technology keeps changing
                quickly, and many businesses find it hard to know where to start or who to trust. We wanted to be the
                partner that makes it simpler.
              </p>
              <p>
                We help organisations define a clear technology strategy, modernise the way they operate and then
                deliver the change. Our work covers software engineering, data and analytics, artificial intelligence,
                business intelligence, cloud computing, automation and digital transformation.
              </p>
              <p>
                We believe real change takes more than new technology. It needs a clear vision, a practical approach and
                a team that stays with you from strategy to execution. That is how we work with every client.
              </p>
            </Reveal>
            <Reveal as="ul" className={`check-list ${styles.points}`}>
              {STORY_POINTS.map((point) => (
                <li key={point}>
                  <Check size={18} aria-hidden="true" />
                  {point}
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section--soft" aria-label="Mission and vision">
        <div className={`container ${styles.mvGrid}`}>
          {MISSION_VISION.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 100} className={styles.mvCard}>
              <span className={styles.mvIcon}>
                <Icon size={30} aria-hidden="true" />
              </span>
              <h2 className={styles.mvTitle}>{title}</h2>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Snapshot */}
      <section className="section" aria-labelledby="snapshot-title">
        <div className={`container ${styles.snapshot}`}>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Company snapshot"
              title={<span id="snapshot-title">A&amp;N at a glance</span>}
              description="The essentials about who we are and what we focus on."
            />
            <Button href={SITE.social.linkedin} variant="outline" icon={ArrowRight}>
              Follow us on LinkedIn
            </Button>
          </div>
          <Reveal className={styles.factCard}>
            <dl className={styles.facts}>
              {COMPANY_FACTS.map(({ label, value }) => (
                <div key={label} className={styles.fact}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <p className={styles.specialtiesLabel}>Specialties</p>
            <ul className="chip-list">
              {SPECIALTIES.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
            <p className={`${styles.specialtiesLabel} ${styles.spaced}`}>Services provided</p>
            <ul className="chip-list">
              {SERVICES_PROVIDED.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Goals & Objectives */}
      <section className="section section--soft" aria-labelledby="goals-title">
        <div className="container">
          <SectionHeading
            eyebrow="Goals & objectives"
            title={
              <span id="goals-title">
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

      {/* Core values */}
      <section className="section" aria-labelledby="values-title">
        <div className="container">
          <SectionHeading eyebrow="Our values" title={<span id="values-title">How we like to work</span>} />
          <div className="grid-3">
            {VALUES.map((value, index) => (
              <Reveal key={value.title} delay={(index % 3) * 90}>
                <FeatureCard {...value} variant="soft" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUsSection />
      <CtaBanner />
    </>
  )
}
