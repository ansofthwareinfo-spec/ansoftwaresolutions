import { useState } from 'react'
import SolutionCard from '@/components/cards/SolutionCard'
import CtaBanner from '@/components/common/CtaBanner'
import FilterBar from '@/components/common/FilterBar'
import PageHero from '@/components/common/PageHero'
import Reveal from '@/components/common/Reveal'
import Seo from '@/components/common/Seo'
import { SOLUTIONS, SOLUTION_CATEGORIES } from '@/data/solutions'
import ProcessSection from '@/sections/shared/ProcessSection'

export default function Solutions() {
  const [category, setCategory] = useState('All')
  const visible = category === 'All' ? SOLUTIONS : SOLUTIONS.filter((s) => s.category === category)

  return (
    <>
      <Seo
        image="/og/solutions.jpg"
        title="Solutions"
        description="Examples of the software, data, AI, cloud and automation solutions A&N Software Solutions can build, from online stores and ERP to dashboards and AI assistants."
      />

      <PageHero
        eyebrow="Solutions"
        title={
          <>
            Solutions we can <span className="text-gradient">build for you</span>
          </>
        }
        description="A few examples of what we can build. Every solution is shaped around your business, your users and your goals."
      />

      <section className="section" aria-labelledby="solution-list-title">
        <h2 id="solution-list-title" className="visually-hidden">
          Example solutions
        </h2>
        <div className="container">
          <FilterBar
            options={SOLUTION_CATEGORIES}
            value={category}
            onChange={setCategory}
            label="Filter solutions by category"
          />
          <p className="visually-hidden" aria-live="polite">
            Showing {visible.length} solutions
          </p>
          <div className="grid-3">
            {visible.map((solution, index) => (
              <Reveal key={solution.id} delay={(index % 3) * 90}>
                <SolutionCard solution={solution} priority={index === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection soft />
      <CtaBanner
        title="Need something different?"
        text="Tell us about your idea. We will design a custom solution around your requirements, timeline and budget."
        primaryLabel="Discuss Your Idea"
      />
    </>
  )
}
