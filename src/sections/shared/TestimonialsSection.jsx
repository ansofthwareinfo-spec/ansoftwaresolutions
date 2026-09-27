import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import SectionHeading from '@/components/common/SectionHeading'
import SmartImage from '@/components/common/SmartImage'
import { TESTIMONIALS } from '@/data/testimonials'
import { cn } from '@/utils/cn'
import styles from './TestimonialsSection.module.css'

const AUTOPLAY_MS = 6500

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = TESTIMONIALS.length

  const go = (step) => setActive((current) => (current + step + total) % total)

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (paused || reduce) return undefined
    const timer = setInterval(() => setActive((current) => (current + 1) % total), AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [paused, total])

  const item = TESTIMONIALS[active]

  return (
    <section className="section section--dark" aria-labelledby="testimonials-title">
      <div className={styles.bg} aria-hidden="true" />
      <div className={`container ${styles.layout}`}>
        <div>
          <SectionHeading
            align="left"
            tone="light"
            eyebrow="Testimonials"
            title={<span id="testimonials-title">What our clients say about working with us</span>}
            description="Long-term relationships are the best measure of our work. Here is what a few of our partners have shared."
          />
          <div className={styles.controls}>
            <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial">
              <ChevronLeft size={22} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => go(1)} aria-label="Next testimonial">
              <ChevronRight size={22} aria-hidden="true" />
            </button>
            <div className={styles.dots}>
              {TESTIMONIALS.map((t, index) => (
                <button
                  key={`${t.role}-${index}`}
                  type="button"
                  className={cn(styles.dot, index === active && styles.dotActive)}
                  onClick={() => setActive(index)}
                  aria-label={`Show testimonial ${index + 1} of ${total}`}
                  aria-current={index === active}
                />
              ))}
            </div>
          </div>
        </div>

        <figure
          className={styles.card}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          aria-live="polite"
        >
          <Quote className={styles.quoteIcon} size={56} aria-hidden="true" />
          <div className={styles.stars} aria-label={`Rated ${item.rating} out of 5`}>
            {Array.from({ length: item.rating }, (_, i) => (
              <Star key={i} size={18} fill="currentColor" aria-hidden="true" />
            ))}
          </div>
          <blockquote key={active} className={styles.quote}>
            <p>“{item.quote}”</p>
          </blockquote>
          <figcaption className={styles.author}>
            <SmartImage src={item.image} alt="" width={56} height={56} sizes="56px" className={styles.avatar} />
            <span>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
