import LegalContent from '@/components/common/LegalContent'
import PageHero from '@/components/common/PageHero'
import Seo from '@/components/common/Seo'
import { TERMS } from '@/data/legal'

export default function Terms() {
  return (
    <>
      <Seo title="Terms of Service" description="Terms and conditions for using the AN Software Solutions website." />
      <PageHero
        title="Terms of Service"
        description="Please read these terms carefully before using our website."
      />
      <LegalContent document={TERMS} />
    </>
  )
}
