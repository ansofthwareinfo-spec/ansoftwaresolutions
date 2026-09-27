import { ArrowDown, Check, Mail, Search } from 'lucide-react'
import { useRef, useState } from 'react'
import FeatureCard from '@/components/cards/FeatureCard'
import JobCard from '@/components/cards/JobCard'
import Button from '@/components/common/Button'
import FilterBar from '@/components/common/FilterBar'
import PageHero from '@/components/common/PageHero'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import Seo from '@/components/common/Seo'
import SmartImage from '@/components/common/SmartImage'
import CareerApplicationForm from '@/components/forms/CareerApplicationForm'
import { SITE } from '@/config/site'
import { DEPARTMENTS, HIRING_STEPS, JOBS, PERKS } from '@/data/careers'
import { IMAGES } from '@/utils/image'
import styles from './Careers.module.css'

const CULTURE_POINTS = [
  'Work on real products used by thousands of people',
  'Transparent, flat and approachable leadership',
  'Learning sessions, tech talks and hackathons',
  'A diverse, inclusive and supportive team',
]

const POSITIONS = JOBS.map((job) => job.title)

export default function Careers() {
  const [department, setDepartment] = useState('All')
  const [query, setQuery] = useState('')
  const [selection, setSelection] = useState({ position: '', key: 0 })
  const applyRef = useRef(null)

  const normalizedQuery = query.trim().toLowerCase()
  const visibleJobs = JOBS.filter(
    (job) =>
      (department === 'All' || job.department === department) &&
      (!normalizedQuery ||
        `${job.title} ${job.location} ${job.department}`.toLowerCase().includes(normalizedQuery)),
  )

  const handleApply = (job) => {
    setSelection((prev) => ({ position: job.title, key: prev.key + 1 }))
    applyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Seo
        title="Careers"
        description="Join AN Software Solutions. Explore open positions in engineering, design, cloud, data, QA and sales, and grow your career with a people-first technology company."
      />

      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build your career. <span className="text-gradient">Build the future.</span>
          </>
        }
        description="Join a team where your ideas matter, your growth is a priority, and your work reaches real users every day."
      >
        <Button href="#openings" icon={ArrowDown}>
          View Open Positions
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
              eyebrow="Life at AN Software"
              title={
                <span id="culture-title">
                  A workplace where <span className="text-gradient">people grow</span>
                </span>
              }
              description="We believe great software is built by happy, curious and empowered people. That is why we invest in a culture of learning, ownership and mutual respect."
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
            <SmartImage src={IMAGES.teamCulture} alt="Team members celebrating together at the office" sizes="(max-width: 900px) 60vw, 25vw" />
            <SmartImage src={IMAGES.womanTech} alt="Engineer working on a laptop" sizes="(max-width: 900px) 60vw, 25vw" />
            <SmartImage src={IMAGES.brainstorm} alt="Team brainstorming with sticky notes" sizes="(max-width: 900px) 60vw, 25vw" />
          </Reveal>
        </div>
      </section>

      {/* Perks */}
      <section className="section section--soft" aria-labelledby="perks-title">
        <div className="container">
          <SectionHeading
            eyebrow="Perks & benefits"
            title={<span id="perks-title">We take care of our people</span>}
            description="Competitive pay is just the start. Here is what else you can look forward to."
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
            eyebrow="Open positions"
            title={<span id="openings-title">Find your next role</span>}
            description="Don’t see a perfect match? Send a general application — we are always looking for great talent."
          />

          <div className={styles.toolbar}>
            <label className={styles.search}>
              <Search size={18} aria-hidden="true" />
              <span className="visually-hidden">Search jobs</span>
              <input
                type="search"
                placeholder="Search by role or location"
                value={query}
                maxLength={60}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
          </div>
          <FilterBar options={DEPARTMENTS} value={department} onChange={setDepartment} label="Filter jobs by department" />

          <p className={styles.count} aria-live="polite">
            {visibleJobs.length} {visibleJobs.length === 1 ? 'opening' : 'openings'} found
          </p>

          {visibleJobs.length > 0 ? (
            <div className={styles.jobs}>
              {visibleJobs.map((job) => (
                <JobCard key={job.id} job={job} onApply={handleApply} />
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <p>No openings match your search right now.</p>
              <Button href="#apply" variant="outline">
                Send a General Application
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Hiring process */}
      <section className="section section--dark" aria-labelledby="hiring-title">
        <div className="container">
          <SectionHeading tone="light" eyebrow="Hiring process" title={<span id="hiring-title">Simple, transparent and quick</span>} />
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
              eyebrow="Apply now"
              title={<span id="apply-title">Start your journey with us</span>}
              description="Fill in the form and upload your resume. We read every application and reply to every candidate."
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
