import { ArrowRight, Home } from 'lucide-react'
import Button from '@/components/common/Button'
import Seo from '@/components/common/Seo'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <section className={styles.page}>
      <Seo title="Page Not Found" description="The page you are looking for could not be found." noindex />
      <div className={`container ${styles.inner}`}>
        <p className={styles.code} aria-hidden="true">
          404
        </p>
        <h1 className={styles.title}>Oops! This page wandered off.</h1>
        <p className={styles.text}>
          The page you are looking for may have been moved or no longer exists. Let’s get you back on track.
        </p>
        <div className={styles.actions}>
          <Button to="/" icon={Home} iconPosition="left">
            Back to Home
          </Button>
          <Button to="/contact" variant="outline" icon={ArrowRight}>
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
