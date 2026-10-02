import { ArrowRight, Home } from 'lucide-react'
import Button from '@/components/common/Button'
import Seo from '@/components/common/Seo'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <section className={styles.page}>
      <Seo />
      <div className={`container ${styles.inner}`}>
        <p className={styles.code} aria-hidden="true">
          404
        </p>
        <h1 className={styles.title}>Sorry, we can’t find that page</h1>
        <p className={styles.text}>
          It may have moved, or the link might be out of date. Try the home page, or get in touch if you need help.
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
