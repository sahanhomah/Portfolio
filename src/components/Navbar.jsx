import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { applyTheme, getStoredTheme, THEMES } from '../theme';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(getStoredTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleThemeChange = (event) => {
    setTheme(event.target.value)
  }

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full bg-brand-900/95 text-brand-50 shadow-lg z-50 backdrop-blur-sm border-b border-brand-700/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-brand-100 via-brand-200 to-brand-300 bg-clip-text text-transparent">
              Portfolio
            </a>
          </div>

          <div className="flex-1" />

          {/* Right-side controls */}
          <div className="flex items-center gap-2 sm:gap-3 ml-auto">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-brand-300 transition duration-300 ease-in-out"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <label className="relative inline-flex items-center">
              <span className="sr-only">Select theme</span>
              <select
                value={theme}
                onChange={handleThemeChange}
                className="appearance-none cursor-pointer rounded-md border border-brand-700 bg-brand-800 px-3 py-2 pr-8 text-sm text-brand-50 shadow-sm outline-none transition hover:border-brand-300 focus:border-brand-300 focus:ring-2 focus:ring-brand-300/50"
              >
                {THEMES.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="pointer-events-none absolute right-2 text-brand-100" />
            </label>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center rounded-md p-2 transition hover:bg-brand-800"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-brand-800 animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-md hover:bg-brand-700 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
