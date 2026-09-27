import { Plus } from 'lucide-react'
import { useId, useState } from 'react'
import { cn } from '@/utils/cn'
import styles from './Accordion.module.css'

function AccordionItem({ question, answer, isOpen, onToggle, baseId }) {
  const buttonId = `${baseId}-btn`
  const panelId = `${baseId}-panel`

  return (
    <div className={cn(styles.item, isOpen && styles.open)}>
      <h3 className={styles.heading}>
        <button
          id={buttonId}
          type="button"
          className={styles.trigger}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span>{question}</span>
          <span className={styles.icon} aria-hidden="true">
            <Plus size={18} />
          </span>
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={buttonId} className={styles.panel} hidden={!isOpen}>
        <p>{answer}</p>
      </div>
    </div>
  )
}

/** Accessible FAQ accordion — one panel open at a time. */
export default function Accordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)
  const baseId = useId()

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem
          key={item.q}
          question={item.q}
          answer={item.a}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          baseId={`${baseId}-${index}`}
        />
      ))}
    </div>
  )
}
