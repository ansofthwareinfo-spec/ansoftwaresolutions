import { ArrowRight } from 'lucide-react'
import ServiceCard from '@/components/cards/ServiceCard'
import ServiceHelpCard from '@/components/cards/ServiceHelpCard'
import Button from '@/components/common/Button'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import { SERVICES } from '@/data/services'

export default function ServicesPreview() {
  return (
    <section className="section section--soft" aria-labelledby="services-preview-title">
      <div className="container">
        <SectionHeading
          eyebrow="What we do"
          title={
            <span id="services-preview-title">
              Seven areas of expertise, <span className="text-gradient">one team</span>
            </span>
          }
          description="From building software to making sense of your data, we help with the full picture: strategy, delivery and support."
        />

        <div className="grid-4">
          {SERVICES.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 4) * 80}>
              <ServiceCard service={service} index={index} />
            </Reveal>
          ))}
          <Reveal delay={240}>
            <ServiceHelpCard />
          </Reveal>
        </div>

        <div className="section-actions">
          <Button to="/services" variant="outline" icon={ArrowRight}>
            Explore Our Services
          </Button>
        </div>
      </div>
    </section>
  )
}
