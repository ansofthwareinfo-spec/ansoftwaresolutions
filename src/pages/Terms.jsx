import LegalContent from '@/components/common/LegalContent'
import PageHero from '@/components/common/PageHero'
import Seo from '@/components/common/Seo'
import { TERMS } from '@/data/legal'

export default function Terms() {
  return (
    <>
      <Seo />
      <PageHero
        title="Terms of Service"
        description="Please read these terms carefully before using our website."
      />
      <LegalContent document={TERMS} />
    </>
  )
}
