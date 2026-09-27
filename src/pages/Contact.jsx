import { Building2, Clock, Mail, MapPin, Phone } from 'lucide-react'
import PageHero from '@/components/common/PageHero'
import Reveal from '@/components/common/Reveal'
import Seo from '@/components/common/Seo'
import SocialLinks from '@/components/common/SocialLinks'
import ContactForm from '@/components/forms/ContactForm'
import { SITE } from '@/config/site'
import FaqSection from '@/sections/shared/FaqSection'
import styles from './Contact.module.css'

const { contact } = SITE
const fullAddress = `${contact.address.line1}, ${contact.address.line2}, ${contact.address.city}, ${contact.address.state} ${contact.address.zip}`

const CHANNELS = [
  { icon: Phone, title: 'Call us', value: contact.phone, href: `tel:${contact.phoneHref}` },
  { icon: Mail, title: 'Email us', value: contact.email, href: `mailto:${contact.email}` },
  { icon: MapPin, title: 'Visit us', value: fullAddress },
  { icon: Clock, title: 'Working hours', value: contact.hours },
]

const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&output=embed`

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with AN Software Solutions for a free consultation on your software, web, mobile, cloud or AI project. We reply within one business day."
      />

      <PageHero
        eyebrow="Contact us"
        title={
          <>
            Let’s start a <span className="text-gradient">conversation</span>
          </>
        }
        description="Tell us about your idea or challenge. We will get back to you within one business day with next steps."
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
              <p className={styles.formText}>Share a few details and the right expert from our team will reach out.</p>
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
                <h2 className={styles.asideTitle}>Our offices</h2>
                <ul className={styles.officeList}>
                  {SITE.offices.map((office) => (
                    <li key={office.city}>
                      <Building2 size={20} aria-hidden="true" />
                      <div>
                        <p className={styles.officeCity}>
                          {office.city} <span>{office.label}</span>
                        </p>
                        <p className={styles.officeDetail}>{office.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className={styles.follow}>Follow us</p>
                <SocialLinks />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FaqSection soft />
    </>
  )
}
