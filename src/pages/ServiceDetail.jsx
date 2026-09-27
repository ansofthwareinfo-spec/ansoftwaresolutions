import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useParams } from 'react-router-dom'
import ServiceCard from '@/components/cards/ServiceCard'
import Button from '@/components/common/Button'
import CtaBanner from '@/components/common/CtaBanner'
import PageHero from '@/components/common/PageHero'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import Seo from '@/components/common/Seo'
import SmartImage from '@/components/common/SmartImage'
import { SERVICES, getServiceBySlug } from '@/data/services'
import ProcessSection from '@/sections/shared/ProcessSection'
import NotFound from './NotFound'
import styles from './ServiceDetail.module.css'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) return <NotFound />

  const { title, short, overview, image, features, benefits, tech, icon: Icon } = service
  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <>
      <Seo title={title} description={`${short} Explore ${title.toLowerCase()} services by AN Software Solutions.`} />

      <PageHero
        eyebrow="Service"
        title={title}
        description={short}
      >
        <Button to="/contact" icon={ArrowRight}>
          Get a Free Consultation
        </Button>
      </PageHero>

      {/* Overview */}
      <section className="section" aria-labelledby="overview-title">
        <div className={`container ${styles.overview}`}>
          <Reveal className={styles.media}>
            <SmartImage src={image} alt={`${title} at AN Software Solutions`} sizes="(max-width: 900px) 90vw, 45vw" priority />
            <span className={styles.mediaIcon}>
              <Icon size={34} strokeWidth={1.8} aria-hidden="true" />
            </span>
          </Reveal>

          <div>
            <SectionHeading align="left" eyebrow="Overview" title={<span id="overview-title">How we help</span>} />
            <Reveal>
              <p className={styles.overviewText}>{overview}</p>
              <h3 className={styles.subheading}>Key benefits</h3>
              <ul className={styles.benefits}>
                {benefits.map((benefit) => (
                  <li key={benefit}>
                    <CheckCircle2 size={20} aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section section--soft" aria-labelledby="capabilities-title">
        <div className="container">
          <SectionHeading
            eyebrow="Capabilities"
            title={
              <span id="capabilities-title">
                What’s included in our <span className="text-gradient">{title.toLowerCase()}</span>
              </span>
            }
          />
          <div className="grid-3">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={(index % 3) * 90} className={styles.feature}>
                <span className={styles.featureNum}>{String(index + 1).padStart(2, '0')}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="section" aria-labelledby="stack-title">
        <div className="container">
          <SectionHeading
            eyebrow="Tools & technologies"
            title={<span id="stack-title">Our technology stack</span>}
            description="We pick proven tools that fit your goals, team and long-term maintenance plans."
          />
          <Reveal as="ul" className={styles.stack}>
            {tech.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </Reveal>
        </div>
      </section>

      <ProcessSection soft />

      {/* Related */}
      <section className="section" aria-labelledby="related-title">
        <div className="container">
          <SectionHeading eyebrow="Explore more" title={<span id="related-title">Related services</span>} />
          <div className="grid-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 90}>
                <ServiceCard service={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title={`Ready to get started with ${title.toLowerCase()}?`} />
    </>
  )
}
