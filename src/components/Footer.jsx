import { ArrowUp } from 'lucide-react'
import { footer, profile, socialLinks } from '../data/site'
import SocialIcon from './SocialIcon'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-brand-900 pb-12 pt-24 lg:pt-32">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
        <div className="grid gap-12 border-t border-brand-700 pt-16 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-3" aria-label={profile.name}>
              <span className="relative flex h-7 w-12 items-center">
                <span className="absolute left-0 h-7 w-7 bg-accent-pink" />
                <span className="absolute left-4 h-7 w-7 rounded-full bg-brand-300" />
              </span>
              <span className="text-lg font-extrabold tracking-[0.28em] text-brand-50">
                {profile.logoText}
                <span className="text-brand-300">.</span>
              </span>
            </a>

            <p className="mt-6 max-w-xs leading-relaxed text-brand-200">{footer.blurb}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-800 text-brand-100 transition hover:bg-brand-300 hover:text-brand-900"
                >
                  <SocialIcon name={link.icon} size={15} />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-200">Navigate</h2>
            <ul className="mt-6 space-y-3">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-medium text-brand-100 transition hover:text-brand-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-200">Contact</h2>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="break-all font-medium text-brand-100 transition hover:text-brand-300"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phoneHref}`}
                  className="font-medium text-brand-100 transition hover:text-brand-300"
                >
                  {profile.phone}
                </a>
              </li>
              <li className="font-medium text-brand-100">{profile.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-brand-700 pt-8">
          <p className="text-sm text-brand-200">
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>

          <a
            href="#home"
            className="flex items-center gap-3 text-sm font-semibold text-brand-100 transition hover:text-brand-300"
          >
            Back to top
            <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-700">
              <ArrowUp size={16} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
