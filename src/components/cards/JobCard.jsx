import { Briefcase, ChevronDown, Clock, MapPin } from 'lucide-react'
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
          <span className={styles.dept}>{job.department}</span>
          <h3 className={styles.title}>{job.title}</h3>
          <ul className={styles.meta}>
            <li>
              <MapPin size={16} aria-hidden="true" /> {job.location}
            </li>
            <li>
              <Briefcase size={16} aria-hidden="true" /> {job.experience}
            </li>
            <li>
              <Clock size={16} aria-hidden="true" /> {job.type}
            </li>
          </ul>
          <p className={styles.summary}>{job.summary}</p>
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
          <h4>Responsibilities</h4>
          <ul>
            {job.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Requirements</h4>
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
