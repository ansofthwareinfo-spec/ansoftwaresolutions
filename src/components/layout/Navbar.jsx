import { ArrowRight, ChevronDown, Menu } from 'lucide-react'
import { useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Button from '@/components/common/Button'
import Logo from '@/components/common/Logo'
import { NAV_LINKS } from '@/data/navigation'
import { useScrolledPast } from '@/hooks/useScrollPosition'
import { cn } from '@/utils/cn'
import MegaMenu from './MegaMenu'
import MobileMenu from './MobileMenu'
import styles from './Navbar.module.css'

const HOVER_CLOSE_DELAY = 150

export default function Navbar() {
  const scrolled = useScrolledPast(12)
  const { pathname } = useLocation()
  const [megaOpen, setMegaOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lastPath, setLastPath] = useState(pathname)
  const closeTimer = useRef(null)
  const menuButtonRef = useRef(null)
  const servicesToggleRef = useRef(null)

  // Close any open menu when the route changes.
  if (pathname !== lastPath) {
    setLastPath(pathname)
    setMegaOpen(false)
    setMobileOpen(false)
  }

  const openMega = () => {
    clearTimeout(closeTimer.current)
    setMegaOpen(true)
  }

  const scheduleCloseMega = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setMegaOpen(false), HOVER_CLOSE_DELAY)
  }

  const handleDropdownKeyDown = (event) => {
    if (event.key === 'Escape' && megaOpen) {
      setMegaOpen(false)
      servicesToggleRef.current?.focus()
    }
  }

  const handleDropdownBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setMegaOpen(false)
  }

  const closeMobile = () => {
    setMobileOpen(false)
    menuButtonRef.current?.focus()
  }

  const isServicesActive = pathname.startsWith('/services')

  return (
    <>
      <header className={cn(styles.header, (scrolled || megaOpen) && styles.scrolled)}>
        <div className={cn('container', styles.inner)}>
          <Logo />

          <nav className={styles.desktopNav} aria-label="Main">
            <ul className={styles.menu}>
              {NAV_LINKS.map((link) =>
                link.hasMenu ? (
                  <li
                    key={link.to}
                    className={styles.dropdown}
                    onMouseEnter={openMega}
                    onMouseLeave={scheduleCloseMega}
                    onKeyDown={handleDropdownKeyDown}
                    onBlur={handleDropdownBlur}
                  >
                    <div className={styles.dropdownTrigger}>
                      <NavLink to={link.to} className={cn(styles.link, isServicesActive && styles.active)}>
                        {link.label}
                      </NavLink>
                      <button
                        ref={servicesToggleRef}
                        type="button"
                        className={cn(styles.caret, megaOpen && styles.caretOpen)}
                        aria-expanded={megaOpen}
                        aria-controls="services-menu"
                        aria-label={`${megaOpen ? 'Hide' : 'Show'} services menu`}
                        onClick={() => setMegaOpen((open) => !open)}
                      >
                        <ChevronDown size={16} aria-hidden="true" />
                      </button>
                    </div>
                    <MegaMenu id="services-menu" open={megaOpen} onNavigate={() => setMegaOpen(false)} />
                  </li>
                ) : (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) => cn(styles.link, isActive && styles.active)}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className={styles.actions}>
            <Button to="/contact" size="sm" icon={ArrowRight} className={styles.cta}>
              Let’s Talk
            </Button>
            <button
              ref={menuButtonRef}
              type="button"
              className={styles.burger}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={24} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu id="mobile-menu" open={mobileOpen} onClose={closeMobile} />
    </>
  )
}
