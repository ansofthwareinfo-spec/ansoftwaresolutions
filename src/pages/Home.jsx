import CtaBanner from '@/components/common/CtaBanner'
import Seo from '@/components/common/Seo'
import AboutPreview from '@/sections/home/AboutPreview'
import Hero from '@/sections/home/Hero'
import IndustriesPreview from '@/sections/home/IndustriesPreview'
import ServicesPreview from '@/sections/home/ServicesPreview'
import SolutionsPreview from '@/sections/home/SolutionsPreview'
import TechMarquee from '@/sections/home/TechMarquee'
import FaqSection from '@/sections/shared/FaqSection'
import HighlightsSection from '@/sections/shared/HighlightsSection'
import ProcessSection from '@/sections/shared/ProcessSection'
import WhyChooseUsSection from '@/sections/shared/WhyChooseUsSection'

export default function Home() {
  return (
    <>
      <Seo image="/og/home.jpg" />
      <Hero />
      <TechMarquee />
      <AboutPreview />
      <ServicesPreview />
      <HighlightsSection />
      <WhyChooseUsSection soft={false} />
      <ProcessSection soft />
      <IndustriesPreview />
      <SolutionsPreview />
      <FaqSection />
      <CtaBanner />
    </>
  )
}
