import { ArrowRight } from 'lucide-react'
import ProjectCard from '@/components/cards/ProjectCard'
import Button from '@/components/common/Button'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import { PROJECTS } from '@/data/portfolio'

export default function PortfolioPreview() {
  return (
    <section className="section section--soft" aria-labelledby="portfolio-preview-title">
      <div className="container">
        <SectionHeading
          eyebrow="Our work"
          title={
            <span id="portfolio-preview-title">
              Solutions that deliver <span className="text-gradient">real results</span>
            </span>
          }
          description="A glimpse of the products we have designed and engineered for clients across industries."
        />

        <div className="grid-3">
          {PROJECTS.slice(0, 3).map((project, index) => (
            <Reveal key={project.id} delay={index * 90}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <div className="section-actions">
          <Button to="/portfolio" variant="outline" icon={ArrowRight}>
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  )
}
