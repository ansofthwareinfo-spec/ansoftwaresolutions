import { CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import CtaBanner from '@/components/common/CtaBanner'
import FilterBar from '@/components/common/FilterBar'
import PageHero from '@/components/common/PageHero'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import Seo from '@/components/common/Seo'
import { TECH_CATEGORIES, TECH_PRINCIPLES } from '@/data/technologies'
import styles from './Technologies.module.css'

const FILTERS = [{ value: 'all', label: 'All' }, ...TECH_CATEGORIES.map((c) => ({ value: c.id, label: c.title }))]

export default function Technologies() {
  const [filter, setFilter] = useState('all')
  const visible = filter === 'all' ? TECH_CATEGORIES : TECH_CATEGORIES.filter((c) => c.id === filter)

  return (
    <>
      <Seo
        title="Technologies"
        description="React, Angular, Node.js, Java, Python, .NET, Flutter, AWS, Azure, Kubernetes and more — explore the technology stack AN Software Solutions uses to build modern software."
      />

      <PageHero
        eyebrow="Technologies"
        title={
          <>
            The right tools for <span className="text-gradient">every challenge</span>
          </>
        }
        description="Our engineers work across modern frontend, backend, mobile, cloud, data and testing technologies — so we always recommend what fits you best."
      />

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
            title={<span id="principles-title">Technology decisions grounded in your goals</span>}
            description="We never chase trends for their own sake. Every recommendation is based on four simple principles."
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
        text="Our architects will review your requirements and recommend a stack that balances speed, cost and long-term maintainability."
        primaryLabel="Talk to an Expert"
      />
    </>
  )
}
