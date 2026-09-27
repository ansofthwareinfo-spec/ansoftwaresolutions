import { ArrowRight, Check } from 'lucide-react'
import FeatureCard from '@/components/cards/FeatureCard'
import Button from '@/components/common/Button'
import CtaBanner from '@/components/common/CtaBanner'
import PageHero from '@/components/common/PageHero'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import Seo from '@/components/common/Seo'
import SmartImage from '@/components/common/SmartImage'
import { SITE } from '@/config/site'
import { GOALS, LEADERSHIP, MISSION_VISION, TIMELINE, VALUES } from '@/data/company'
import StatsSection from '@/sections/shared/StatsSection'
import WhyChooseUsSection from '@/sections/shared/WhyChooseUsSection'
import { IMAGES } from '@/utils/image'
import styles from './About.module.css'

const STORY_POINTS = [
  'Client-first approach with complete transparency',
  'Cross-functional team of engineers, designers and QA',
  'Proven delivery across startups, SMEs and enterprises',
  'Strong focus on security, quality and documentation',
]

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about AN Software Solutions — our story, mission, vision, goals and the people behind our software development and IT services."
      />

      <PageHero
        eyebrow="About us"
        title={
          <>
            Built on trust. Driven by <span className="text-gradient">technology</span>.
          </>
        }
        description="We are a passionate team of technologists helping businesses turn ideas into dependable digital products."
      />

      {/* Story */}
      <section className="section" aria-labelledby="story-title">
        <div className={`container ${styles.story}`}>
          <Reveal className={styles.storyMedia}>
            <SmartImage src={IMAGES.collaboration} alt="Team members collaborating around laptops" sizes="(max-width: 900px) 90vw, 45vw" />
            <div className={styles.storyBadge}>
              <strong>{SITE.foundedYear}</strong>
              <span>Founded with a promise of quality</span>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title={<span id="story-title">From a small team with a big idea to a trusted technology partner</span>}
            />
            <Reveal className={styles.storyText}>
              <p>
                {SITE.name} began with a simple belief: businesses deserve a technology partner that is honest about
                what it takes, delivers what it promises, and stays invested long after launch.
              </p>
              <p>
                Today, we help organisations of every size design, build and scale software — from customer-facing
                websites and mobile apps to complex enterprise platforms, cloud infrastructure and AI-driven automation.
                Every engagement is guided by clear communication, engineering discipline and a genuine focus on your
                business outcomes.
              </p>
            </Reveal>
            <Reveal as="ul" className={`check-list ${styles.points}`}>
              {STORY_POINTS.map((point) => (
                <li key={point}>
                  <Check size={18} aria-hidden="true" />
                  {point}
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section--soft" aria-label="Mission and vision">
        <div className={`container ${styles.mvGrid}`}>
          {MISSION_VISION.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 100} className={styles.mvCard}>
              <span className={styles.mvIcon}>
                <Icon size={30} aria-hidden="true" />
              </span>
              <h2 className={styles.mvTitle}>{title}</h2>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Goals & Objectives */}
      <section className="section" aria-labelledby="goals-title">
        <div className="container">
          <SectionHeading
            eyebrow="Goals & objectives"
            title={
              <span id="goals-title">
                What we are <span className="text-gradient">working towards</span>
              </span>
            }
            description="Our goals keep us accountable — to our clients, our people and the quality of everything we build."
          />
          <div className="grid-3">
            {GOALS.map((goal, index) => (
              <Reveal key={goal.title} delay={(index % 3) * 90}>
                <FeatureCard {...goal} number={index + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Core values */}
      <section className="section" aria-labelledby="values-title">
        <div className="container">
          <SectionHeading
            eyebrow="Core values"
            title={<span id="values-title">The principles behind every line of code</span>}
          />
          <div className="grid-3">
            {VALUES.map((value, index) => (
              <Reveal key={value.title} delay={(index % 3) * 90}>
                <FeatureCard {...value} variant="soft" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section--soft" aria-labelledby="journey-title">
        <div className="container">
          <SectionHeading
            eyebrow="Our journey"
            title={<span id="journey-title">Milestones that shaped us</span>}
          />
          <ol className={styles.timeline}>
            {TIMELINE.map((item, index) => (
              <Reveal as="li" key={item.year} className={styles.milestone} delay={(index % 2) * 100}>
                <span className={styles.year}>{item.year}</span>
                <div className={styles.milestoneCard}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Leadership */}
      <section className="section" aria-labelledby="team-title">
        <div className="container">
          <SectionHeading
            eyebrow="Leadership"
            title={<span id="team-title">Meet the people leading the way</span>}
            description="Experienced leaders who combine technical depth with a passion for client success."
          />
          <div className="grid-4">
            {LEADERSHIP.map((person, index) => (
              <Reveal key={`${person.role}-${index}`} delay={index * 80} className={styles.person}>
                <div className={styles.personImg}>
                  <SmartImage src={person.image} alt={`${person.name}, ${person.role}`} width={400} height={460} sizes="(max-width: 600px) 90vw, 25vw" />
                </div>
                <h3>{person.name}</h3>
                <p>{person.role}</p>
              </Reveal>
            ))}
          </div>
          <div className="section-actions">
            <Button to="/careers" variant="outline" icon={ArrowRight}>
              Join Our Team
            </Button>
          </div>
        </div>
      </section>

      <WhyChooseUsSection />
      <CtaBanner />
    </>
  )
}
