import { ChevronDown, Mail, Phone, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@/components/common/Button'
import Logo from '@/components/common/Logo'
import SocialLinks from '@/components/common/SocialLinks'
import { SITE } from '@/config/site'
import { NAV_LINKS } from '@/data/navigation'
import { SERVICES } from '@/data/services'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { cn } from '@/utils/cn'
import styles from './MobileMenu.module.css'

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function MobileMenu({ id, open, onClose }) {
  const panelRef = useRef(null)
  const closeRef = useRef(null)
  const onCloseRef = useRef(onClose)
  const [servicesOpen, setServicesOpen] = useState(false)

  useLockBodyScroll(open)

  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  useEffect(() => {
    if (!open) return undefined
    const frame = requestAnimationFrame(() => closeRef.current?.focus())

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onCloseRef.current()
        return
      }
      if (event.key !== 'Tab' || !panelRef.current) return

      // Keep keyboard focus inside the drawer while it is open.
      const nodes = [...panelRef.current.querySelectorAll(FOCUSABLE)]
      const first = nodes[0]
      const last = nodes[nodes.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const linkClass = ({ isActive }) => cn(styles.link, isActive && styles.active)

  return (
    <div className={cn(styles.root, open && styles.open)} aria-hidden={!open} inert={!open}>
      <div className={styles.overlay} onClick={onClose} />

      <div ref={panelRef} id={id} className={styles.panel} role="dialog" aria-modal="true" aria-label="Site menu">
        <div className={styles.top}>
          <Logo onClick={onClose} />
          <button ref={closeRef} type="button" className={styles.close} onClick={onClose} aria-label="Close menu">
            <X size={24} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile" className={styles.nav}>
          <ul>
            {NAV_LINKS.map((link) =>
              link.hasMenu ? (
                <li key={link.to}>
                  <div className={styles.row}>
                    <NavLink to={link.to} end className={linkClass}>
                      {link.label}
                    </NavLink>
                    <button
                      type="button"
                      className={cn(styles.expand, servicesOpen && styles.expanded)}
                      aria-expanded={servicesOpen}
                      aria-controls="mobile-services"
                      aria-label={`${servicesOpen ? 'Hide' : 'Show'} services`}
                      onClick={() => setServicesOpen((v) => !v)}
                    >
                      <ChevronDown size={20} aria-hidden="true" />
                    </button>
                  </div>
                  <ul id="mobile-services" className={styles.sub} hidden={!servicesOpen}>
                    {SERVICES.map((service) => (
                      <li key={service.slug}>
                        <NavLink to={`/services/${service.slug}`} className={linkClass}>
                          {service.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.to}>
                  <NavLink to={link.to} end={link.to === '/'} className={linkClass}>
                    {link.label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className={styles.footer}>
          <Button to="/hire" fullWidth>
            Hire Talent
          </Button>
          <a href={`tel:${SITE.contact.phoneHref}`} className={styles.contact}>
            <Phone size={18} aria-hidden="true" /> {SITE.contact.phone}
          </a>
          <a href={`mailto:${SITE.contact.email}`} className={styles.contact}>
            <Mail size={18} aria-hidden="true" /> {SITE.contact.email}
          </a>
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}
