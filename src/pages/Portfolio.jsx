import { useState } from 'react'
import ProjectCard from '@/components/cards/ProjectCard'
import CtaBanner from '@/components/common/CtaBanner'
import FilterBar from '@/components/common/FilterBar'
import PageHero from '@/components/common/PageHero'
import Reveal from '@/components/common/Reveal'
import Seo from '@/components/common/Seo'
import { PROJECTS, PROJECT_CATEGORIES } from '@/data/portfolio'
import TestimonialsSection from '@/sections/shared/TestimonialsSection'

export default function Portfolio() {
  const [category, setCategory] = useState('All')
  const visible = category === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === category)

  return (
    <>
      <Seo
        title="Portfolio & Case Studies"
        description="Explore web, mobile, cloud, AI and enterprise projects delivered by AN Software Solutions and the measurable results they created."
      />

      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Work we are <span className="text-gradient">proud of</span>
          </>
        }
        description="Every project is a partnership. Here are some of the products we have built and the results they delivered."
      />

      <section className="section" aria-label="Projects">
        <div className="container">
          <FilterBar options={PROJECT_CATEGORIES} value={category} onChange={setCategory} label="Filter projects by category" />
          <p className="visually-hidden" aria-live="polite">
            Showing {visible.length} projects
          </p>
          <div className="grid-3">
            {visible.map((project, index) => (
              <Reveal key={project.id} delay={(index % 3) * 90}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CtaBanner title="Want results like these?" />
    </>
  )
}
