import CtaBanner from '@/components/common/CtaBanner'
import Seo from '@/components/common/Seo'
import AboutPreview from '@/sections/home/AboutPreview'
import Hero from '@/sections/home/Hero'
import IndustriesPreview from '@/sections/home/IndustriesPreview'
import PortfolioPreview from '@/sections/home/PortfolioPreview'
import ServicesPreview from '@/sections/home/ServicesPreview'
import TechMarquee from '@/sections/home/TechMarquee'
import FaqSection from '@/sections/shared/FaqSection'
import ProcessSection from '@/sections/shared/ProcessSection'
import StatsSection from '@/sections/shared/StatsSection'
import TestimonialsSection from '@/sections/shared/TestimonialsSection'
import WhyChooseUsSection from '@/sections/shared/WhyChooseUsSection'

export default function Home() {
  return (
    <>
      <Seo />
      <Hero />
      <TechMarquee />
      <AboutPreview />
      <ServicesPreview />
      <StatsSection />
      <WhyChooseUsSection soft={false} />
      <ProcessSection soft />
      <IndustriesPreview />
      <PortfolioPreview />
      <TestimonialsSection />
      <FaqSection />
      <CtaBanner />
    </>
  )
}
