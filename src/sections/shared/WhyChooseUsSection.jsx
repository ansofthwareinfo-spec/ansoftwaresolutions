import FeatureCard from '@/components/cards/FeatureCard'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import { WHY_CHOOSE_US } from '@/data/company'

export default function WhyChooseUsSection({ soft = true }) {
  return (
    <section className={`section ${soft ? 'section--soft' : ''}`} aria-labelledby="why-title">
      <div className="container">
        <SectionHeading
          eyebrow="Why work with us"
          title={
            <span id="why-title">
              A small team that takes <span className="text-gradient">real ownership</span>
            </span>
          }
          description="Solid technical skills and straightforward communication. You always know where your project stands."
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
