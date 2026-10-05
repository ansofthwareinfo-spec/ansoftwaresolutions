import { ArrowDown, GraduationCap, Mail, Search, Send } from 'lucide-react'
import { useRef, useState } from 'react'
import JobCard from '@/components/cards/JobCard'
import Button from '@/components/common/Button'
import FilterBar from '@/components/common/FilterBar'
import PageHero from '@/components/common/PageHero'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import Seo from '@/components/common/Seo'
import SmartImage from '@/components/common/SmartImage'
import JobApplicationForm from '@/components/forms/JobApplicationForm'
import { SITE } from '@/config/site'
import { CANDIDATE_STEPS } from '@/data/hiring'
import { JOBS, JOB_TYPES } from '@/data/jobs'
import { IMAGES } from '@/utils/image'
import styles from './Jobs.module.css'

const POSITIONS = JOBS.map((job) => job.title)

export default function Jobs() {
  const [type, setType] = useState('All')
  const [query, setQuery] = useState('')
  const [selection, setSelection] = useState({ position: '', key: 0 })
  const applyRef = useRef(null)

  const term = query.trim().toLowerCase()
  const visibleJobs = JOBS.filter(
    (job) =>
      (type === 'All' || job.type === type) &&
      (!term || [job.title, job.location, job.company, ...job.skills].join(' ').toLowerCase().includes(term)),
  )

  const handleApply = (job) => {
    setSelection((prev) => ({ position: job.title, key: prev.key + 1 }))
    applyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Seo />

      <PageHero
        eyebrow="Jobs"
        title={
          <>
            Find a job that <span className="text-gradient">fits you</span>
          </>
        }
        description="We hire for companies that are looking for skilled people. Browse the current openings, or send us your resume and we will contact you when a matching role comes up."
      >
        <Button href="#openings" icon={ArrowDown}>
          Browse Openings
        </Button>
        <Button href="#apply" variant="outline" icon={Send} iconPosition="left">
          Send Your Resume
        </Button>
      </PageHero>

      {/* Openings */}
      <section id="openings" className="section" aria-labelledby="openings-title">
        <div className="container">
          <SectionHeading
            eyebrow="Current openings"
            title={<span id="openings-title">Roles companies are hiring for</span>}
            description="Company names are shared with shortlisted candidates. New roles are added regularly, so check back often."
          />

          <div className={styles.toolbar}>
            <label className={styles.search}>
              <Search size={18} aria-hidden="true" />
              <span className="visually-hidden">Search jobs</span>
              <input
                type="search"
                placeholder="Search by role, skill or city"
                value={query}
                maxLength={60}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
          </div>
          <FilterBar options={JOB_TYPES} value={type} onChange={setType} label="Filter jobs by type" />

          <p className={styles.count} aria-live="polite">
            {visibleJobs.length} {visibleJobs.length === 1 ? 'opening' : 'openings'}
          </p>

          {visibleJobs.length > 0 ? (
            <div className={styles.jobs}>
              {visibleJobs.map((job) => (
                <JobCard key={job.id} job={job} onApply={handleApply} />
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <p className={styles.emptyTitle}>No openings match your search right now.</p>
              <p>Send us your resume and we will contact you when a suitable role comes up.</p>
              <Button href="#apply" variant="outline" icon={Send} iconPosition="left">
                Send Your Resume
              </Button>
            </div>
          )}

          <Reveal className={styles.freshers}>
            <span className={styles.freshersIcon}>
              <GraduationCap size={28} aria-hidden="true" />
            </span>
            <div>
              <h3>Freshers are welcome</h3>
              <p>
                Just finished your degree? We also hire for trainee and entry-level roles. Share your resume and we will
                contact you when one matches your profile.
              </p>
            </div>
            <Button href="#apply" size="sm">
              Apply as a Fresher
            </Button>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="section section--dark" aria-labelledby="steps-title">
        <div className="container">
          <SectionHeading
            tone="light"
            eyebrow="How it works"
            title={<span id="steps-title">From application to your first day</span>}
          />
          <ol className={styles.steps}>
            {CANDIDATE_STEPS.map((step, index) => (
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
              title={<span id="apply-title">Send us your profile</span>}
              description="Apply for a specific opening, or choose “Any suitable role” to join our talent pool. We read every profile."
            />
            <div className={styles.introImage}>
              <SmartImage src={IMAGES.resume} alt="A resume on a clipboard next to a laptop" sizes="(max-width: 900px) 90vw, 35vw" />
            </div>
            <div className={styles.infoCard}>
              <Mail size={22} aria-hidden="true" />
              <div>
                <p className={styles.infoTitle}>Prefer email?</p>
                <a href={`mailto:${SITE.contact.careersEmail}`}>{SITE.contact.careersEmail}</a>
              </div>
            </div>
          </div>
          <div className={styles.formCard}>
            <JobApplicationForm positions={POSITIONS} selectedPosition={selection.position} selectionKey={selection.key} />
          </div>
        </div>
      </section>
    </>
  )
}
