import { Briefcase, Building2, ChevronDown, Laptop, MapPin } from 'lucide-react'
import { useState } from 'react'
import Button from '@/components/common/Button'
import { cn } from '@/utils/cn'
import styles from './JobCard.module.css'

export default function JobCard({ job, onApply }) {
  const [open, setOpen] = useState(false)
  const detailsId = `job-${job.id}-details`

  return (
    <article className={cn(styles.card, open && styles.open)}>
      <div className={styles.main}>
        <div>
          <span className={styles.dept}>{job.type}</span>
          <h3 className={styles.title}>{job.title}</h3>
          <ul className={styles.meta}>
            <li>
              <Building2 size={16} aria-hidden="true" /> {job.company}
            </li>
            <li>
              <MapPin size={16} aria-hidden="true" /> {job.location}
            </li>
            <li>
              <Laptop size={16} aria-hidden="true" /> {job.workMode}
            </li>
            <li>
              <Briefcase size={16} aria-hidden="true" /> {job.experience}
            </li>
          </ul>
          <p className={styles.summary}>{job.summary}</p>
          <ul className={`chip-list ${styles.skills}`} aria-label="Key skills">
            {job.skills.map((skill) => (
              <li key={skill} className="chip">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.actions}>
          <Button size="sm" onClick={() => onApply(job)}>
            Apply Now
          </Button>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls={detailsId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Hide details' : 'View details'}
            <ChevronDown size={16} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div id={detailsId} className={styles.details} hidden={!open}>
        <div>
          <h4>What you will do</h4>
          <ul>
            {job.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>What they are looking for</h4>
          <ul>
            {job.requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
