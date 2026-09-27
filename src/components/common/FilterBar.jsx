import { cn } from '@/utils/cn'
import styles from './FilterBar.module.css'

/** Pill-style filter buttons. options: string[] or {value,label}[] */
export default function FilterBar({ options, value, onChange, label }) {
  return (
    <div className={styles.bar} role="group" aria-label={label}>
      {options.map((option) => {
        const optionValue = typeof option === 'string' ? option : option.value
        const optionLabel = typeof option === 'string' ? option : option.label
        const active = optionValue === value
        return (
          <button
            key={optionValue}
            type="button"
            className={cn(styles.pill, active && styles.active)}
            aria-pressed={active}
            onClick={() => onChange(optionValue)}
          >
            {optionLabel}
          </button>
        )
      })}
    </div>
  )
}
