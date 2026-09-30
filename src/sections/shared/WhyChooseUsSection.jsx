import { useId } from 'react'
import FeatureCard from '@/components/cards/FeatureCard'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import { WHY_CHOOSE_US } from '@/data/company'

const DEFAULT_TITLE = (
  <>
    A small team that takes <span className="text-gradient">real ownership</span>
  </>
)

/** Grid of reasons to work with us. Defaults to the technology-services reasons. */
export default function WhyChooseUsSection({
  soft = true,
  items = WHY_CHOOSE_US,
  eyebrow = 'Why work with us',
  title = DEFAULT_TITLE,
  description = 'Solid technical skills and straightforward communication. You always know where your project stands.',
}) {
  const titleId = useId()

  return (
    <section className={`section ${soft ? 'section--soft' : ''}`} aria-labelledby={titleId}>
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={<span id={titleId}>{title}</span>} description={description} />
        <div className="grid-3">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={(index % 3) * 90}>
              <FeatureCard {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
