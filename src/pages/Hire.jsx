import { ArrowDown, Check, Mail, Phone } from 'lucide-react'
import Button from '@/components/common/Button'
import PageHero from '@/components/common/PageHero'
import Reveal from '@/components/common/Reveal'
import SectionHeading from '@/components/common/SectionHeading'
import Seo from '@/components/common/Seo'
import SmartImage from '@/components/common/SmartImage'
import HiringRequestForm from '@/components/forms/HiringRequestForm'
import { SITE } from '@/config/site'
import { EMPLOYER_BENEFITS, HIRING_FAQS, HIRING_PROCESS, ROLE_GROUPS } from '@/data/hiring'
import FaqSection from '@/sections/shared/FaqSection'
import HiringServicesSection from '@/sections/shared/HiringServicesSection'
import ProcessSection from '@/sections/shared/ProcessSection'
import WhyChooseUsSection from '@/sections/shared/WhyChooseUsSection'
import { IMAGES } from '@/utils/image'
import styles from './Hire.module.css'

const NEXT_STEPS = [
  'A consultant calls you within one business day',
  'We agree on the role, timeline and terms',
  'You start receiving screened profiles',
]

export default function Hire() {
  return (
    <>
      <Seo
        image="/og/hire.jpg"
        title="Hire Talent"
        description="Hire skilled, pre-screened professionals with A&N Software Solutions: permanent, contract, contract-to-hire, leadership, fresher and bulk hiring across development, support, operations, sales and management roles."
      />

      <PageHero
        eyebrow="Hire talent"
        title={
          <>
            Hire skilled people, <span className="text-gradient">without the hassle</span>
          </>
        }
        description="Tell us who you need. We find, screen and shortlist candidates, so your team spends time only on the people worth meeting."
      >
        <Button href="#request" icon={ArrowDown}>
          Share Your Requirement
        </Button>
        <Button href={`tel:${SITE.contact.phoneHref}`} variant="outline" icon={Phone} iconPosition="left">
          {SITE.contact.phone}
        </Button>
      </PageHero>

      <HiringServicesSection showCta={false} />

      {/* Roles */}
      <section className="section section--soft" aria-labelledby="roles-title">
        <div className="container">
          <SectionHeading
            eyebrow="Roles we recruit for"
            title={
              <span id="roles-title">
                Talent for <span className="text-gradient">every part of your business</span>
              </span>
            }
            description="From freshers to senior leaders. If your role is not listed, ask us, and we will tell you honestly whether we can help."
          />
          <div className={styles.roles}>
            {ROLE_GROUPS.map((group, index) => (
              <Reveal key={group.title} delay={(index % 3) * 90} className={styles.roleCard}>
                <h3 className={styles.roleTitle}>{group.title}</h3>
                <ul className="chip-list">
                  {group.roles.map((role) => (
                    <li key={role} className="chip">
                      {role}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection
        steps={HIRING_PROCESS}
        eyebrow="How it works"
        title={
          <>
            From requirement to <span className="text-gradient">joining day</span>
          </>
        }
        description="You stay in control of every decision. We handle the searching, screening and scheduling."
      />

      <WhyChooseUsSection
        items={EMPLOYER_BENEFITS}
        eyebrow="Why hire with us"
        title={
          <>
            A hiring partner that <span className="text-gradient">understands your business</span>
          </>
        }
        description="We take time to understand the role, your team and how you work, so every candidate we send is a genuine fit."
      />

      {/* Requirement form */}
      <section id="request" className="section" aria-labelledby="request-title">
        <div className={`container ${styles.requestLayout}`}>
          <div className={styles.requestIntro}>
            <SectionHeading
              align="left"
              eyebrow="Share your requirement"
              title={<span id="request-title">Tell us who you need</span>}
              description="A few details are enough to get started. Everything you share stays confidential."
            />
            <div className={styles.introImage}>
              <SmartImage src={IMAGES.handshake} alt="Two people shaking hands" sizes="(max-width: 900px) 90vw, 35vw" />
            </div>
            <div className={styles.nextCard}>
              <p className={styles.nextTitle}>What happens next</p>
              <ul className={styles.nextList}>
                {NEXT_STEPS.map((step) => (
                  <li key={step}>
                    <Check size={18} aria-hidden="true" />
                    {step}
                  </li>
                ))}
              </ul>
              <div className={styles.directContact}>
                <a href={`tel:${SITE.contact.phoneHref}`}>
                  <Phone size={16} aria-hidden="true" /> {SITE.contact.phone}
                </a>
                <a href={`mailto:${SITE.contact.email}`}>
                  <Mail size={16} aria-hidden="true" /> {SITE.contact.email}
                </a>
              </div>
            </div>
          </div>
          <Reveal className={styles.formCard}>
            <HiringRequestForm />
          </Reveal>
        </div>
      </section>

      <FaqSection items={HIRING_FAQS} soft />
    </>
  )
}
