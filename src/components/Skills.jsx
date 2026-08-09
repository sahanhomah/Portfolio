import { useState } from 'react'
import { ArrowLeft, ArrowRight, Database, LayoutGrid, Server } from 'lucide-react'
import { services } from '../data/site'

const ICONS = {
  layout: LayoutGrid,
  server: Server,
  database: Database,
}

const ACCENT_BG = {
  yellow: 'bg-accent-yellow',
  indigo: 'bg-brand-300',
  pink: 'bg-accent-pink',
  orange: 'bg-accent-orange',
  lavender: 'bg-accent-lavender',
}

const ACCENT_FG = {
  yellow: 'text-brand-50',
  indigo: 'text-brand-900',
  pink: 'text-brand-50',
  orange: 'text-brand-900',
  lavender: 'text-brand-50',
}

export default function Skills() {
  const items = services.items
  const [active, setActive] = useState(items.findIndex((item) => item.featured))

  const go = (direction) => {
    setActive((current) => (current + direction + items.length) % items.length)
  }

  return (
    <section id="skills" className="relative overflow-hidden bg-brand-900 py-24 lg:py-36">
      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow reveal text-brand-300">{services.eyebrow}</p>
            <h2 className="reveal mt-6 text-4xl font-extrabold tracking-tightest text-brand-50 sm:text-5xl">
              {services.title}
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3 lg:gap-10">
          {items.map((item, index) => {
            const Icon = ICONS[item.icon] ?? LayoutGrid
            const isActive = index === active

            return (
              <article
                key={item.title}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                data-active={isActive ? 'true' : 'false'}
                /*
                 * className is deliberately CONSTANT. The active/inactive
                 * difference is expressed through the data-active attribute
                 * and inline style below instead, so React never rewrites this
                 * attribute on hover. Rewriting it would wipe the `is-visible`
                 * class that useReveal adds imperatively and the card would
                 * fade out permanently.
                 */
                className="service-card reveal group relative flex flex-col rounded-card-lg bg-brand-900 p-9 transition-[box-shadow,transform] duration-500 lg:p-10"
                style={{
                  '--reveal-delay': `${index * 120}ms`,
                  boxShadow: isActive
                    ? '0 30px 80px -20px rgb(var(--brand-50) / 0.25)'
                    : '0 24px 60px -18px rgb(var(--brand-50) / 0.12)',
                }}
              >
                <span
                  className={`flex h-24 w-24 items-center justify-center rounded-full ${ACCENT_BG[item.accent]} ${ACCENT_FG[item.accent]} transition duration-500 group-hover:scale-105`}
                >
                  <Icon size={38} strokeWidth={1.6} />
                </span>

                <h3 className="mt-9 text-2xl font-bold text-brand-50">{item.title}</h3>

                <p className="mt-4 leading-relaxed text-brand-200">{item.description}</p>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full bg-brand-800 px-4 py-2 text-xs font-semibold text-brand-100"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

                {/*
                  Every card keeps its CTA. `mt-auto` pins it to the bottom so
                  the buttons align even when descriptions differ in length.
                */}
                <div className="mt-auto pt-8">
                  <a
                    href="#projects"
                    className={`w-full justify-center ${isActive ? 'btn-ink' : 'btn-ghost'}`}
                    data-cursor="hover"
                  >
                    See it in action
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        {/* Pagination row from the reference footer bar */}
        <div className="mt-16 flex items-center justify-between gap-6">
          <p className="text-sm font-semibold tracking-[0.35em] text-brand-200">
            <span className="text-brand-50">
              {String(active + 1).padStart(2, '0')}
            </span>
            {'  .  '}
            {String(items.length).padStart(2, '0')}
          </p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous service"
              className="flex h-11 w-11 items-center justify-center rounded-full text-brand-200 transition hover:text-brand-50"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next service"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand-50 text-brand-50 transition hover:bg-brand-300 hover:border-brand-300 hover:text-brand-900"
            >
              <ArrowRight size={20} />
            </button>
          </div>

          <a
            href="#contact"
            className="text-sm font-semibold text-brand-300 transition hover:opacity-75"
          >
            Contact me
          </a>
        </div>
      </div>
    </section>
  )
}
