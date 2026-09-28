import LegalContent from '@/components/common/LegalContent'
import PageHero from '@/components/common/PageHero'
import Seo from '@/components/common/Seo'
import { TERMS } from '@/data/legal'

export default function Terms() {
  return (
    <>
      <Seo image="/og/terms.jpg" title="Terms of Service" description="Terms and conditions for using the A&N Software Solutions website." />
      <PageHero
        title="Terms of Service"
        description="Please read these terms carefully before using our website."
      />
      <LegalContent document={TERMS} />
    </>
  )
}
