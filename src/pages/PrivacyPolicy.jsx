import LegalContent from '@/components/common/LegalContent'
import PageHero from '@/components/common/PageHero'
import Seo from '@/components/common/Seo'
import { PRIVACY_POLICY } from '@/data/legal'

export default function PrivacyPolicy() {
  return (
    <>
      <Seo image="/og/privacy-policy.jpg" title="Privacy Policy" description="How A&N Software Solutions collects, uses and protects your personal information." />
      <PageHero
        title="Privacy Policy"
        description="Your privacy matters to us. This policy explains what data we collect and how we use it."
      />
      <LegalContent document={PRIVACY_POLICY} />
    </>
  )
}
