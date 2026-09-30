import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '@/components/common/Logo'
import SocialLinks from '@/components/common/SocialLinks'
import { SITE } from '@/config/site'
import { FOOTER_COMPANY_LINKS, LEGAL_LINKS } from '@/data/navigation'
import { SERVICES } from '@/data/services'
import NewsletterForm from './NewsletterForm'
import styles from './Footer.module.css'

export default function Footer() {
  const { contact } = SITE

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <Logo tone="light" />
          <p className={styles.about}>
            {SITE.name} helps companies hire skilled professionals and build dependable technology, from our base
            in Hyderabad.
          </p>
          <SocialLinks tone="light" />
        </div>

        <div>
          <h2 className={styles.heading}>Company</h2>
          <ul className={styles.links}>
            {FOOTER_COMPANY_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={styles.heading}>Technology Services</h2>
          <ul className={styles.links}>
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={styles.heading}>Get in Touch</h2>
          <ul className={styles.contact}>
            <li>
              <MapPin size={18} aria-hidden="true" />
              <address>
                {contact.address.city}, {contact.address.state} {contact.address.zip}, {contact.address.country}
              </address>
            </li>
            <li>
              <Phone size={18} aria-hidden="true" />
              <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
            </li>
            <li>
              <Mail size={18} aria-hidden="true" />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className={styles.newsletter}>
          <div>
            <h2 className={styles.newsTitle}>Stay in the loop</h2>
            <p>Occasional notes on software, data and AI that are actually useful. No spam.</p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p>
            © {SITE.legalName}. All rights reserved.
          </p>
          <ul className={styles.legal}>
            {LEGAL_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
