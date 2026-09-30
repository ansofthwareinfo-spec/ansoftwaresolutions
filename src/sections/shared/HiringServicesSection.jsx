import { ArrowRight } from 'lucide-react'
import { useId } from 'react'
import FeatureCard from '@/components/cards/FeatureCard'
import Button from '@/components/common/Button'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import { HIRING_SERVICES } from '@/data/hiring'

/** The ways companies can hire through us. */
export default function HiringServicesSection({ soft = false, showCta = true }) {
  const titleId = useId()

  return (
    <section className={`section ${soft ? 'section--soft' : ''}`} aria-labelledby={titleId}>
      <div className="container">
        <SectionHeading
          eyebrow="Hiring solutions"
          title={
            <span id={titleId}>
              Every way you need to <span className="text-gradient">hire great people</span>
            </span>
          }
          description="Whether it is one key role or a whole new team, we find people with the right skills and the right attitude."
        />
        <div className="grid-3">
          {HIRING_SERVICES.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 90}>
              <FeatureCard {...item} />
            </Reveal>
          ))}
        </div>
        {showCta && (
          <div className="section-actions">
            <Button to="/hire" icon={ArrowRight}>
              Share Your Requirement
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
