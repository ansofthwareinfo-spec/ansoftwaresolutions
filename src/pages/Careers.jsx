import { ArrowDown, Check, Mail } from 'lucide-react'
import { useRef, useState } from 'react'
import FeatureCard from '@/components/cards/FeatureCard'
import JobCard from '@/components/cards/JobCard'
import Button from '@/components/common/Button'
import PageHero from '@/components/common/PageHero'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import Seo from '@/components/common/Seo'
import SmartImage from '@/components/common/SmartImage'
import CareerApplicationForm from '@/components/forms/CareerApplicationForm'
import { SITE } from '@/config/site'
import { HIRING_STEPS, JOBS, PERKS } from '@/data/careers'
import { IMAGES } from '@/utils/image'
import styles from './Careers.module.css'

const CULTURE_POINTS = [
  'A small team where everyone knows each other',
  'Honest feedback and regular code reviews',
  'Room to learn new tools and technologies',
  'Work that clients actually use',
]

const POSITIONS = JOBS.map((job) => job.title)

export default function Careers() {
  const [selection, setSelection] = useState({ position: '', key: 0 })
  const applyRef = useRef(null)

  const handleApply = (job) => {
    setSelection((prev) => ({ position: job.title, key: prev.key + 1 }))
    applyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Seo
        image="/og/careers.jpg"
        title="Careers"
        description="Join A&N Software Solutions in Hyderabad. See open roles in software engineering and data, or send us a general application."
      />

      <PageHero
        eyebrow="Careers"
        title={
          <>
            Grow your career <span className="text-gradient">with us</span>
          </>
        }
        description="We are a small, growing team in Hyderabad. If you enjoy solving real problems with software and data, we would like to hear from you."
      >
        <Button href="#openings" icon={ArrowDown}>
          See Open Roles
        </Button>
        <Button href="#apply" variant="outline">
          Apply Now
        </Button>
      </PageHero>

      {/* Culture */}
      <section className="section" aria-labelledby="culture-title">
        <div className={`container ${styles.culture}`}>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Working here"
              title={
                <span id="culture-title">
                  Small team, <span className="text-gradient">real ownership</span>
                </span>
              }
              description="In a team our size, your work matters from the first week. You will learn quickly, take on responsibility and see the impact of what you build."
            />
            <Reveal as="ul" className={`check-list ${styles.points}`}>
              {CULTURE_POINTS.map((point) => (
                <li key={point}>
                  <Check size={18} aria-hidden="true" />
                  {point}
                </li>
              ))}
            </Reveal>
          </div>
          <Reveal className={styles.collage}>
            <SmartImage src={IMAGES.teamCulture} alt="Colleagues talking in a bright office" sizes="(max-width: 900px) 60vw, 25vw" />
            <SmartImage src={IMAGES.womanTech} alt="A developer working on a laptop" sizes="(max-width: 900px) 60vw, 25vw" />
            <SmartImage src={IMAGES.brainstorm} alt="A planning session with sticky notes" sizes="(max-width: 900px) 60vw, 25vw" />
          </Reveal>
        </div>
      </section>

      {/* What you get */}
      <section className="section section--soft" aria-labelledby="perks-title">
        <div className="container">
          <SectionHeading
            eyebrow="What you get"
            title={<span id="perks-title">Why people join us</span>}
            description="We cannot offer the size of a big company, but we can offer something just as valuable."
          />
          <div className="grid-4">
            {PERKS.map((perk, index) => (
              <Reveal key={perk.title} delay={(index % 4) * 70}>
                <FeatureCard {...perk} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section id="openings" className="section" aria-labelledby="openings-title">
        <div className="container">
          <SectionHeading
            eyebrow="Open roles"
            title={<span id="openings-title">Current openings</span>}
            description="No exact match? Send a general application anyway. We keep good profiles on file for future roles."
          />
          <div className={styles.jobs}>
            {JOBS.map((job) => (
              <JobCard key={job.id} job={job} onApply={handleApply} />
            ))}
          </div>
        </div>
      </section>

      {/* Hiring process */}
      <section className="section section--dark" aria-labelledby="hiring-title">
        <div className="container">
          <SectionHeading tone="light" eyebrow="Hiring process" title={<span id="hiring-title">Four simple steps</span>} />
          <ol className={styles.steps}>
            {HIRING_STEPS.map((step, index) => (
              <Reveal as="li" key={step.title} className={styles.step} delay={index * 80}>
                <span className={styles.stepNum}>{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" ref={applyRef} className="section section--soft" aria-labelledby="apply-title">
        <div className={`container ${styles.applyLayout}`}>
          <div className={styles.applyIntro}>
            <SectionHeading
              align="left"
              eyebrow="Apply"
              title={<span id="apply-title">Send us your application</span>}
              description="Fill in the form and attach your resume. We read every application and reply to every candidate."
            />
            <div className={styles.infoCard}>
              <Mail size={22} aria-hidden="true" />
              <div>
                <p className={styles.infoTitle}>Prefer email?</p>
                <a href={`mailto:${SITE.contact.careersEmail}`}>{SITE.contact.careersEmail}</a>
              </div>
            </div>
          </div>
          <div className={styles.formCard}>
            <CareerApplicationForm positions={POSITIONS} selectedPosition={selection.position} selectionKey={selection.key} />
          </div>
        </div>
      </section>
    </>
  )
}
