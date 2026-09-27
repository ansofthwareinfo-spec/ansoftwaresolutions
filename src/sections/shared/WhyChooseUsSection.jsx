import FeatureCard from '@/components/cards/FeatureCard'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import { WHY_CHOOSE_US } from '@/data/company'

export default function WhyChooseUsSection({ soft = true }) {
  return (
    <section className={`section ${soft ? 'section--soft' : ''}`} aria-labelledby="why-title">
      <div className="container">
        <SectionHeading
          eyebrow="Why choose us"
          title={
            <span id="why-title">
              A technology partner that <span className="text-gradient">owns the outcome</span>
            </span>
          }
          description="We combine technical depth with honest communication, so you get software that works — and a partner you can rely on."
        />
        <div className="grid-3">
          {WHY_CHOOSE_US.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 90}>
              <FeatureCard {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
