import { Building2, Mail, MapPin, Phone } from 'lucide-react'
import PageHero from '@/components/common/PageHero'
import Reveal from '@/components/common/Reveal'
import Seo from '@/components/common/Seo'
import SocialLinks from '@/components/common/SocialLinks'
import ContactForm from '@/components/forms/ContactForm'
import { SITE } from '@/config/site'
import { HOME_FAQS } from '@/data/faqs'
import FaqSection from '@/sections/shared/FaqSection'
import styles from './Contact.module.css'

const { contact } = SITE
const fullAddress = `${contact.address.city}, ${contact.address.state} ${contact.address.zip}, ${contact.address.country}`

const CHANNELS = [
  { icon: Phone, title: 'Call us', value: contact.phone, href: `tel:${contact.phoneHref}` },
  { icon: Mail, title: 'Email us', value: contact.email, href: `mailto:${contact.email}` },
  { icon: MapPin, title: 'Visit us', value: fullAddress },
]

const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`

export default function Contact() {
  return (
    <>
      <Seo
        image="/og/contact.jpg"
        title="Contact Us"
        description="Contact A&N Software Solutions in Hyderabad about hiring, job opportunities or technology projects. Call +91 63007 21736 or send us a message."
      />

      <PageHero
        eyebrow="Contact us"
        title={
          <>
            Let’s start a <span className="text-gradient">conversation</span>
          </>
        }
        description="Whether you are hiring, looking for a job or planning a technology project, we are happy to help. We usually reply within one business day."
      />

      <section className="section" aria-label="Contact information and form">
        <div className="container">
          <ul className={styles.channels}>
            {CHANNELS.map(({ icon: Icon, title, value, href }, index) => (
              <Reveal as="li" key={title} delay={index * 70} className={styles.channel}>
                <span className={styles.channelIcon}>
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h2 className={styles.channelTitle}>{title}</h2>
                {href ? (
                  <a href={href} className={styles.channelValue}>
                    {value}
                  </a>
                ) : (
                  <p className={styles.channelValue}>{value}</p>
                )}
              </Reveal>
            ))}
          </ul>

          <div className={styles.layout}>
            <Reveal className={styles.formCard}>
              <h2 className={styles.formTitle}>Send us a message</h2>
              <p className={styles.formText}>A few details are enough to get started. We will get back to you with next steps.</p>
              <ContactForm />
            </Reveal>

            <aside className={styles.aside}>
              <div className={styles.map}>
                <iframe
                  title={`Map showing ${SITE.name} office location`}
                  src={MAP_SRC}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  sandbox="allow-scripts allow-same-origin allow-popups"
                />
              </div>

              <div className={styles.offices}>
                <h2 className={styles.asideTitle}>Our office</h2>
                <ul className={styles.officeList}>
                  <li>
                    <Building2 size={20} aria-hidden="true" />
                    <div>
                      <p className={styles.officeCity}>
                        {SITE.contact.address.city} <span>Headquarters</span>
                      </p>
                      <p className={styles.officeDetail}>{fullAddress}</p>
                    </div>
                  </li>
                </ul>
                <p className={styles.follow}>Follow us</p>
                <SocialLinks />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FaqSection items={HOME_FAQS} soft />
    </>
  )
}
