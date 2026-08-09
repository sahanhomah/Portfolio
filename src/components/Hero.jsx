import { ArrowRight } from 'lucide-react'
import { hero, profile, socialLinks } from '../data/site'
import { HeroScene } from './iso/IsoShapes'
import SocialIcon from './SocialIcon'
import ScrollCue from './ScrollCue'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-brand-900 pb-16 pt-32 lg:pb-24 lg:pt-40"
    >
      {/*
        The signature diagonal. On large screens an indigo panel occupies the
        right side, clipped so its left edge slopes down toward the bottom-left.
        Hidden below lg where a stacked layout reads better.
      */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[60%] lg:block">
        <div
          className="absolute inset-0 bg-brand-300"
          style={{ clipPath: 'polygon(26% 0, 100% 0, 100% 100%, 0% 100%)' }}
        />
        {/* Lighter "floor" plane filling the lower right */}
        <div
          className="absolute inset-0 bg-brand-400"
          style={{ clipPath: 'polygon(100% 44%, 100% 100%, 12% 100%)' }}
        />

        <HeroScene className="absolute inset-0" />
      </div>

      {/* Faint isometric guide lines over the light half */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-30deg, rgb(var(--brand-50) / 0.05) 0 1px, transparent 1px 160px)',
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1500px] flex-1 flex-col justify-center px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl">
          <p className="eyebrow reveal text-brand-300">{hero.eyebrow}</p>

          {/*
            Each line is its own .reveal so --reveal-delay actually applies;
            the variable has no effect on a child of the animated element.
          */}
          <h1 className="mt-8 text-[2.75rem] font-extrabold leading-[1.06] tracking-tightest text-brand-50 sm:text-6xl lg:text-[4.25rem]">
            {hero.headline.map((line, index) => (
              <span
                key={line}
                className="reveal block"
                style={{ '--reveal-delay': `${index * 90}ms` }}
              >
                {line}
              </span>
            ))}
          </h1>

          <p
            className="reveal mt-7 max-w-md text-lg leading-relaxed text-brand-200"
            style={{ '--reveal-delay': '160ms' }}
          >
            I build fast, accessible web applications from database to interface.
          </p>

          {/* Mobile / tablet get the iso scene inline, since the diagonal is hidden */}
          <div className="relative mt-10 h-64 sm:h-80 lg:hidden">
            <div
              className="absolute inset-0 -mx-6 overflow-hidden rounded-3xl bg-brand-300 sm:-mx-10"
              aria-hidden="true"
            >
              <HeroScene className="absolute inset-0 scale-90" />
            </div>
          </div>

          <div
            className="reveal mt-10 flex flex-wrap items-center gap-4"
            style={{ '--reveal-delay': '240ms' }}
          >
            <a href="#projects" className="btn-primary" data-cursor="hover">
              View My Work
              <ArrowRight size={17} />
            </a>
            <a href="#contact" className="btn-ghost" data-cursor="hover">
              Get In Touch
            </a>
          </div>

          <div
            className="reveal mt-10 flex flex-wrap items-center gap-3"
            style={{ '--reveal-delay': '320ms' }}
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand-50/20 text-brand-100 transition duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-300 hover:text-brand-900"
              >
                <SocialIcon name={link.icon} size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="reveal mt-16 lg:mt-20" style={{ '--reveal-delay': '380ms' }}>
          <ScrollCue href="#about" label={hero.scrollLabel} />
        </div>
      </div>

      <span className="sr-only">
        {profile.name} — {profile.role}
      </span>
    </section>
  )
}
