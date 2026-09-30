import { CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import CtaBanner from '@/components/common/CtaBanner'
import FilterBar from '@/components/common/FilterBar'
import PageHero from '@/components/common/PageHero'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import Seo from '@/components/common/Seo'
import { FEATURED_TECH, TECH_CATEGORIES, TECH_PRINCIPLES } from '@/data/technologies'
import Marquee from '@/sections/home/Marquee'
import styles from './Technologies.module.css'

const FILTERS = [{ value: 'all', label: 'All' }, ...TECH_CATEGORIES.map((c) => ({ value: c.id, label: c.title }))]

export default function Technologies() {
  const [filter, setFilter] = useState('all')
  const visible = filter === 'all' ? TECH_CATEGORIES : TECH_CATEGORIES.filter((c) => c.id === filter)

  return (
    <>
      <Seo
        image="/og/technologies.jpg"
        title="Technologies"
        description="The tools A&N Software Solutions works with across web, mobile, cloud, data, business intelligence, AI and automation, and how we choose the right ones for you."
      />

      <PageHero
        eyebrow="Technologies"
        title={
          <>
            The tools <span className="text-gradient">we work with</span>
          </>
        }
        description="We work with well-established tools across software, data, AI and cloud, and recommend whichever fits your project best."
      />

      <Marquee items={FEATURED_TECH} ariaLabel="Technologies we work with" />

      <section className="section" aria-label="Technology stack">
        <div className="container">
          <FilterBar options={FILTERS} value={filter} onChange={setFilter} label="Filter technologies by category" />

          <div className={styles.grid}>
            {visible.map(({ id, title, icon: Icon, description, items }, index) => (
              <Reveal key={id} delay={(index % 2) * 90} className={styles.card}>
                <div className={styles.head}>
                  <span className={styles.icon}>
                    <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.desc}>{description}</p>
                  </div>
                </div>
                <ul className={styles.items}>
                  {items.map((item) => (
                    <li key={item}>
                      <span className={styles.initial} aria-hidden="true">
                        {item.replace(/[^A-Za-z0-9]/g, '').slice(0, 2)}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark" aria-labelledby="principles-title">
        <div className="container">
          <SectionHeading
            tone="light"
            eyebrow="How we choose"
            title={<span id="principles-title">How we pick the right tools</span>}
            description="The newest tool is not always the right one. These four questions guide every recommendation we make."
          />
          <div className="grid-4">
            {TECH_PRINCIPLES.map((item, index) => (
              <Reveal key={item.title} delay={index * 80} className={styles.principle}>
                <CheckCircle2 size={28} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Not sure which technology is right for you?"
        text="Tell us about your project. We will look at your requirements and recommend tools that balance speed, cost and long-term maintenance."
        primaryLabel="Talk to an Expert"
      />
    </>
  )
}
