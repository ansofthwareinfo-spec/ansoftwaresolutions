import CtaBanner from '@/components/common/CtaBanner'
import Seo from '@/components/common/Seo'
import { HOME_FAQS } from '@/data/faqs'
import { EMPLOYER_BENEFITS, FEATURED_ROLES, HIRING_HIGHLIGHTS, HIRING_PROCESS } from '@/data/hiring'
import AboutPreview from '@/sections/home/AboutPreview'
import AudienceSplit from '@/sections/home/AudienceSplit'
import Hero from '@/sections/home/Hero'
import IndustriesPreview from '@/sections/home/IndustriesPreview'
import Marquee from '@/sections/home/Marquee'
import ServicesPreview from '@/sections/home/ServicesPreview'
import FaqSection from '@/sections/shared/FaqSection'
import HighlightsSection from '@/sections/shared/HighlightsSection'
import HiringServicesSection from '@/sections/shared/HiringServicesSection'
import ProcessSection from '@/sections/shared/ProcessSection'
import WhyChooseUsSection from '@/sections/shared/WhyChooseUsSection'

export default function Home() {
  return (
    <>
      <Seo image="/og/home.jpg" />
      <Hero />
      <Marquee items={FEATURED_ROLES} label="Roles we recruit for" />
      <HiringServicesSection soft />
      <HighlightsSection items={HIRING_HIGHLIGHTS} label="How we work with employers" />
      <ProcessSection
        steps={HIRING_PROCESS}
        eyebrow="How we hire"
        title={
          <>
            From requirement to <span className="text-gradient">joining day</span>
          </>
        }
        description="A simple, transparent process. You stay in control of every decision, and we handle the legwork."
      />
      <WhyChooseUsSection
        items={EMPLOYER_BENEFITS}
        eyebrow="Why companies choose us"
        title={
          <>
            A hiring partner that <span className="text-gradient">understands your business</span>
          </>
        }
        description="We take time to understand the role, your team and how you work, so every candidate we send is a genuine fit."
      />
      <AudienceSplit />
      <ServicesPreview />
      <AboutPreview />
      <IndustriesPreview soft />
      <FaqSection items={HOME_FAQS} />
      <CtaBanner
        title="Have positions to fill? Let’s talk."
        text="Share your requirement today. A consultant will call you back within one business day to understand the role."
        primaryLabel="Hire Talent"
        primaryTo="/hire"
      />
    </>
  )
}
