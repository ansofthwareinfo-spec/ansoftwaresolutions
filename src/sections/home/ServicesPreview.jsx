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
          eyebrow="Our services"
          title={
            <span id="services-preview-title">
              We also build technology <span className="text-gradient">for your business</span>
            </span>
          }
          description="Alongside hiring, we work with clients on software, data, AI, cloud and automation projects, from the first plan to ongoing support. Here is what we can do for you."
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
