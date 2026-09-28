import { ArrowRight } from 'lucide-react'
import SolutionCard from '@/components/cards/SolutionCard'
import Button from '@/components/common/Button'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import { SOLUTIONS } from '@/data/solutions'

// One example from each of our main areas
const FEATURED_IDS = ['ecommerce-store', 'sales-dashboard', 'ai-document-assistant']
const FEATURED = FEATURED_IDS.map((id) => SOLUTIONS.find((s) => s.id === id)).filter(Boolean)

export default function SolutionsPreview() {
  return (
    <section className="section section--soft" aria-labelledby="solutions-preview-title">
      <div className="container">
        <SectionHeading
          eyebrow="Solutions"
          title={
            <span id="solutions-preview-title">
              Examples of what <span className="text-gradient">we can build</span>
            </span>
          }
          description="A few examples of the solutions we build, each one tailored to your workflows, users and goals."
        />

        <div className="grid-3">
          {FEATURED.map((solution, index) => (
            <Reveal key={solution.id} delay={index * 90}>
              <SolutionCard solution={solution} />
            </Reveal>
          ))}
        </div>

        <div className="section-actions">
          <Button to="/solutions" variant="outline" icon={ArrowRight}>
            Explore All Solutions
          </Button>
        </div>
      </div>
    </section>
  )
}
