import { ArrowRight } from 'lucide-react'
import { about, profile } from '../data/site'
import { DriftScene } from './iso/IsoShapes'

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-brand-900 py-24 lg:py-36"
    >
      <DriftScene className="absolute inset-y-0 right-0 hidden w-1/2 lg:block" />

      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
        <p className="eyebrow reveal text-brand-300">{about.eyebrow}</p>

        <p className="reveal mt-8 max-w-2xl text-2xl font-semibold leading-snug text-brand-50 sm:text-3xl">
          {about.lead}
        </p>

        <div className="reveal mt-12 h-px w-full max-w-3xl bg-brand-700" />

        {/* The oversized statement headline */}
        <h2 className="mt-14 text-[3.25rem] font-extrabold leading-[0.98] tracking-tightest text-brand-50 sm:text-7xl lg:text-[6.5rem]">
          {about.headline.map((word, index) => (
            <span
              key={word}
              className="reveal mr-5 inline-block"
              style={{ '--reveal-delay': `${index * 90}ms` }}
            >
              {word}
            </span>
          ))}
        </h2>

        <div className="reveal mt-12" style={{ '--reveal-delay': '200ms' }}>
          <a href={about.cta.href} className="btn-primary" data-cursor="hover">
            {about.cta.label}
            <ArrowRight size={17} />
          </a>
        </div>

        {/* Bio + portrait */}
        <div className="mt-24 grid gap-14 lg:mt-32 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-20">
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-card-lg bg-brand-800 shadow-lift">
              <img
                src={profile.image}
                alt={`Portrait of ${profile.name}`}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
            {/* Accent chips echoing the reference palette */}
            <span
              className="absolute -bottom-5 -right-4 h-20 w-20 rounded-2xl bg-accent-yellow"
              aria-hidden="true"
            />
            <span
              className="absolute -left-5 top-10 h-14 w-14 rounded-full bg-accent-orange"
              aria-hidden="true"
            />
          </div>

          <div className="space-y-7">
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 28)}
                className="reveal text-lg leading-relaxed text-brand-100"
                style={{ '--reveal-delay': `${index * 110}ms` }}
              >
                {paragraph}
              </p>
            ))}

            <dl className="reveal grid grid-cols-2 gap-6 pt-6 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-brand-200">
                  Role
                </dt>
                <dd className="mt-2 font-semibold text-brand-50">{profile.role}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-brand-200">
                  Based in
                </dt>
                <dd className="mt-2 font-semibold text-brand-50">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-brand-200">
                  Email
                </dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-semibold text-brand-300 transition hover:opacity-80"
                  >
                    Say hello
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
