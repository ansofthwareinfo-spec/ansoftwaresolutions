import { Clock, Mail, MapPin, Phone } from 'lucide-react'
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
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <Logo tone="light" />
          <p className={styles.about}>
            {SITE.name} is a software development and IT services company helping startups and enterprises design,
            build and scale digital products with confidence.
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
          <h2 className={styles.heading}>Services</h2>
          <ul className={styles.links}>
            {SERVICES.slice(0, 7).map((service) => (
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
                {contact.address.line1}, {contact.address.line2}, {contact.address.city} – {contact.address.zip},{' '}
                {contact.address.country}
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
            <li>
              <Clock size={18} aria-hidden="true" />
              <span>{contact.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className={styles.newsletter}>
          <div>
            <h2 className={styles.newsTitle}>Subscribe to our newsletter</h2>
            <p>Tech insights, product tips and company news — once a month, no spam.</p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p>
            © {year} {SITE.legalName}. All rights reserved.
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
