import { ArrowDown } from 'lucide-react'

/**
 * The circular "Scroll down" affordance from the reference design.
 * `tone="light"` is for use on the indigo panels.
 */
export default function ScrollCue({ href = '#about', label = 'Scroll down', tone = 'dark' }) {
  const isLight = tone === 'light'

  return (
    <a
      href={href}
      className="group inline-flex items-center gap-5"
      aria-label={label}
    >
      <span
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lift transition duration-300 group-hover:-translate-y-1 ${
          isLight ? 'bg-brand-900 text-brand-50' : 'bg-brand-900 text-brand-50 ring-1 ring-brand-700'
        }`}
      >
        <ArrowDown size={18} className="animate-bounce" />
      </span>
      <span
        className={`text-sm font-medium ${isLight ? 'text-brand-900' : 'text-brand-50'}`}
      >
        {label}
      </span>
    </a>
  )
}
