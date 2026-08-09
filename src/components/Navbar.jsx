import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { applyTheme, getStoredTheme, THEMES } from '../theme'
import { navLinks, navSocials, profile, socialLinks } from '../data/site'
import SocialIcon from './SocialIcon'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState(getStoredTheme)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent the page scrolling behind the open mobile sheet.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const inlineSocials = socialLinks.filter((link) => navSocials.includes(link.label))

  return (
    <header
      className={`absolute inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-brand-900/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1500px] items-center gap-8 px-6 py-7 sm:px-10 lg:px-16">
        {/* Logo mark: the stacked square + circle from the reference */}
        <a href="#home" className="flex flex-shrink-0 items-center gap-3" aria-label={profile.name}>
          <span className="relative flex h-7 w-12 items-center">
            <span className="absolute left-0 h-7 w-7 bg-accent-pink" />
            <span className="absolute left-4 h-7 w-7 rounded-full bg-brand-300" />
          </span>
          <span className="text-lg font-extrabold tracking-[0.28em] text-brand-50">
            {profile.logoText}
            <span className="text-brand-300">.</span>
          </span>
        </a>

        {/* Inline socials, desktop only */}
        <div className="hidden items-center gap-7 xl:flex">
          {inlineSocials.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-brand-200 transition hover:text-brand-50"
            >
              <SocialIcon name={link.icon} size={16} />
              {link.label}
            </a>
          ))}
        </div>

        {/*
          Deliberately no desktop row of section links. The hero diagonal puts
          light and dark backgrounds side by side across the header, so any text
          spanning that boundary is unreadable on one side or the other. The
          reference design solves it the same way: logo + socials on the light
          left, controls on the right, everything else behind the menu.
        */}
        <div className="flex-1" />

        {/*
          The right cluster overlaps the indigo panel at lg+, so it flips to
          light-on-dark there. Below lg the hero is stacked and the background
          is light, so it keeps the default dark styling.
        */}
        <label className="relative hidden items-center sm:inline-flex">
          <span className="sr-only">Select theme</span>
          <select
            value={theme}
            onChange={(event) => setTheme(event.target.value)}
            className={`cursor-pointer appearance-none rounded-lg border-2 px-4 py-2 pr-9 text-xs font-semibold outline-none transition ${
              scrolled
                ? 'border-brand-700 bg-brand-900 text-brand-50 hover:border-brand-300'
                : 'border-brand-700 bg-brand-900 text-brand-50 hover:border-brand-300 lg:border-brand-900/40 lg:bg-brand-900/15 lg:text-brand-900 lg:backdrop-blur-sm lg:hover:border-brand-900'
            }`}
          >
            {THEMES.map((option) => (
              <option key={option.id} value={option.id} className="text-brand-50">
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={13}
            className={`pointer-events-none absolute right-3 ${
              scrolled ? 'text-brand-200' : 'text-brand-200 lg:text-brand-900'
            }`}
          />
        </label>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-brand-50 transition hover:bg-brand-800"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menu sheet: now the primary navigation at every breakpoint */}
      {isOpen && (
        <div className="animate-fade-in border-t border-brand-700 bg-brand-900 px-6 pb-10 pt-6 sm:px-10 lg:px-16">
          <nav className="grid gap-1 sm:grid-cols-2" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-4 text-2xl font-bold text-brand-50 transition hover:bg-brand-800 hover:text-brand-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-800 text-brand-50 transition hover:bg-brand-300 hover:text-brand-900"
              >
                <SocialIcon name={link.icon} size={16} />
              </a>
            ))}
          </div>

          <label className="mt-8 block sm:hidden">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-brand-200">
              Theme
            </span>
            <select
              value={theme}
              onChange={(event) => setTheme(event.target.value)}
              className="w-full cursor-pointer rounded-lg border-2 border-brand-700 bg-brand-900 px-4 py-3 text-sm font-semibold text-brand-50 outline-none focus:border-brand-300"
            >
              {THEMES.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}
    </header>
  )
}
