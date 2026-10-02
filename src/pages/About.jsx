import { ArrowRight, Check, Cpu, Users } from 'lucide-react'
import Button from '@/components/common/Button'
import CtaBanner from '@/components/common/CtaBanner'
import PageHero from '@/components/common/PageHero'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import Seo from '@/components/common/Seo'
import SmartImage from '@/components/common/SmartImage'
import { SITE } from '@/config/site'
import { COMPANY_FACTS, MISSION_VISION, SERVICES_PROVIDED, SPECIALTIES } from '@/data/company'
import { HIRING_MODELS, HIRING_SERVICES } from '@/data/hiring'
import { SERVICES } from '@/data/services'
import { IMAGES } from '@/utils/image'
import styles from './About.module.css'

const STORY_POINTS = [
  'Hiring for every function, from freshers to leaders',
  'Screened candidates, not stacks of resumes',
  'Engineers who deliver software, data and cloud projects',
  'Honest advice and clear, agreed terms',
]

const OFFERINGS = [
  {
    icon: Users,
    eyebrow: 'Recruitment & staffing',
    title: 'We find the people you need',
    text: 'From a single key hire to a full new team, we source, screen and shortlist candidates for every function.',
    items: HIRING_SERVICES.map((service) => service.title),
    cta: { label: 'Hire Talent', to: '/hire' },
    dark: true,
  },
  {
    icon: Cpu,
    eyebrow: 'Technology services',
    title: 'We also build your technology',
    text: 'Our engineers plan, build and support the systems your business runs on, from strategy to execution.',
    items: SERVICES.map((service) => service.title),
    cta: { label: 'Explore Services', to: '/services' },
    dark: false,
  },
]

export default function About() {
  return (
    <>
      <Seo />

      <PageHero
        eyebrow="About us"
        title={
          <>
            People and technology, <span className="text-gradient">working for you</span>
          </>
        }
        description={`A ${SITE.contact.address.city}-based company that helps organisations grow by finding the right people and building the right technology.`}
      />

      {/* Story */}
      <section className="section" aria-labelledby="story-title">
        <div className={`container ${styles.story}`}>
          <Reveal className={styles.storyMedia}>
            <SmartImage src={IMAGES.collaboration} alt="A team discussing a project around laptops" sizes="(max-width: 900px) 90vw, 45vw" />
            <div className={styles.storyBadge}>
              <strong>One</strong>
              <span>partner for talent and technology</span>
            </div>
          </Reveal>

          <div>
            <SectionHeading align="left" eyebrow="Our story" title={<span id="story-title">Who we are</span>} />
            <Reveal className={styles.storyText}>
              <p>
                {SITE.name} helps organisations grow in two ways: by finding them the right people, and by building the
                technology those people work with.
              </p>
              <p>
                Our recruitment practice connects companies with skilled professionals for permanent, contract and
                leadership roles: developers and analysts, customer support and BPO teams, operations, sales, HR and
                management, from freshers to senior specialists. We take time to understand each role, so we can tell a
                strong candidate from a good-looking resume.
              </p>
              <p>
                Alongside hiring, we also deliver technology services for our clients: software engineering, data and
                analytics, AI, business intelligence, cloud computing, automation and digital transformation.
              </p>
              <p>
                Whether it is filling a critical position or modernising how your business runs, you get a clear
                process, honest advice and a team that stays with you from the first conversation to the final result.
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

      {/* What we do */}
      <section className="section" aria-labelledby="offer-title">
        <div className="container">
          <SectionHeading
            eyebrow="What we do for you"
            title={
              <span id="offer-title">
                Two ways we help <span className="text-gradient">your business grow</span>
              </span>
            }
            description="Work with us for one or both, whenever you need them. The same team, the same clear way of working."
          />
          <div className={styles.offerGrid}>
            {OFFERINGS.map(({ icon: Icon, eyebrow, title, text, items, cta, dark }, index) => (
              <Reveal as="article" key={eyebrow} delay={index * 100} className={`${styles.offer} ${dark ? styles.offerDark : ''}`}>
                <p className={styles.offerEyebrow}>
                  <Icon size={16} aria-hidden="true" /> {eyebrow}
                </p>
                <h3 className={styles.offerTitle}>{title}</h3>
                <p className={styles.offerText}>{text}</p>
                <ul className={styles.offerList}>
                  {items.map((item) => (
                    <li key={item}>
                      <Check size={16} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button to={cta.to} variant={dark ? 'accent' : 'primary'} icon={ArrowRight}>
                  {cta.label}
                </Button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Snapshot */}
      <section className="section section--soft" aria-labelledby="snapshot-title">
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
            <p className={styles.specialtiesLabel}>Hiring solutions</p>
            <ul className="chip-list">
              {HIRING_MODELS.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
            <p className={`${styles.specialtiesLabel} ${styles.spaced}`}>Technology specialties</p>
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

      <CtaBanner
        title="Looking for people or a technology partner?"
        text="Tell us what you need. We usually reply within one business day."
        primaryLabel="Get in Touch"
      />
    </>
  )
}
