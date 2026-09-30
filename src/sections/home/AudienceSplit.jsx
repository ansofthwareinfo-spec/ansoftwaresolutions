import { ArrowRight, Building2, Check, UserSearch } from 'lucide-react'
import Button from '@/components/common/Button'
import Reveal from '@/components/common/Reveal'
import SmartImage from '@/components/common/SmartImage'
import { IMAGES } from '@/utils/image'
import styles from './AudienceSplit.module.css'

const PANELS = [
  {
    id: 'employers',
    icon: Building2,
    eyebrow: 'For employers',
    title: 'Hiring for your team?',
    text: 'Tell us who you need. We find, screen and shortlist candidates so you only meet people worth your time.',
    points: ['Permanent, contract and leadership roles', 'Screened, ready-to-interview shortlists', 'Interview scheduling and follow-up'],
    cta: { label: 'Hire Talent', to: '/hire' },
    image: IMAGES.handshake,
    alt: 'Two people shaking hands after an interview',
    dark: true,
  },
  {
    id: 'candidates',
    icon: UserSearch,
    eyebrow: 'For job seekers',
    title: 'Looking for your next role?',
    text: 'Browse openings with the companies we work with, or send your resume and we will match you with roles that fit.',
    points: ['Openings for freshers and experienced professionals', 'Honest details about each role', 'Support from application to joining'],
    cta: { label: 'Find a Job', to: '/jobs' },
    image: IMAGES.candidate,
    alt: 'A smiling young professional',
    dark: false,
  },
]

export default function AudienceSplit() {
  return (
    <section className="section" aria-label="Employers and job seekers">
      <div className={`container ${styles.grid}`}>
        {PANELS.map(({ id, icon: Icon, eyebrow, title, text, points, cta, image, alt, dark }, index) => (
          <Reveal as="article" key={id} delay={index * 100} className={`${styles.panel} ${dark ? styles.dark : ''}`}>
            <div className={styles.media}>
              <SmartImage src={image} alt={alt} sizes="(max-width: 900px) 90vw, 45vw" />
            </div>
            <div className={styles.body}>
              <p className={styles.eyebrow}>
                <Icon size={16} aria-hidden="true" />
                {eyebrow}
              </p>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.text}>{text}</p>
              <ul className={styles.points}>
                {points.map((point) => (
                  <li key={point}>
                    <Check size={18} aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <Button to={cta.to} variant={dark ? 'accent' : 'primary'} icon={ArrowRight}>
                {cta.label}
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
