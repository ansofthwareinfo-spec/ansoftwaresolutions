import { ArrowRight } from 'lucide-react'
import ServiceCard from '@/components/cards/ServiceCard'
import Button from '@/components/common/Button'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import { SERVICES } from '@/data/services'

export default function ServicesPreview() {
  return (
    <section className="section section--soft" aria-labelledby="services-preview-title">
      <div className="container">
        <SectionHeading
          eyebrow="Our services"
          title={
            <span id="services-preview-title">
              Everything you need to <span className="text-gradient">build, launch and grow</span>
            </span>
          }
          description="One partner for the full product lifecycle — strategy, design, engineering, cloud, quality and growth marketing."
        />

        <div className="grid-3">
          {SERVICES.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 3) * 90}>
              <ServiceCard service={service} index={index} />
            </Reveal>
          ))}
        </div>

        <div className="section-actions">
          <Button to="/services" variant="outline" icon={ArrowRight}>
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
