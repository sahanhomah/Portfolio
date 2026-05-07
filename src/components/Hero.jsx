import { ChevronDown } from 'lucide-react';
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaMedium,
  FaXTwitter,
  FaSnapchat,
} from 'react-icons/fa6';

export default function Hero() {
  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/sahanhomah',
      icon: FaGithub,
      className: 'bg-[#24292e] text-white hover:bg-[#1b1f23]',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sahan-shrestha-09a919316/',
      icon: FaLinkedinIn,
      className: 'bg-[#0a66c2] text-white hover:bg-[#004182]',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/sahanshrestha/',
      icon: FaInstagram,
      className: 'bg-[#e1306c] text-white hover:bg-[#c13584]',
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/sahan.shrestha.307241',
      icon: FaFacebookF,
      className: 'bg-[#1877f2] text-white hover:bg-[#145db2]',
    },
   

    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@BasketballVideos20000',
      icon: FaYoutube,
      className: 'bg-[#ff0000] text-white hover:bg-[#cc0000]',
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@sahanhomah',
      icon: FaTiktok,
      className: 'bg-black text-white hover:bg-[#222222]',
    },
    {
      label: 'Snapchat',
      href: 'https://www.snapchat.com/add/sahanhomah?share_id=thjqKSif6R0&locale=en-US',
      icon: FaSnapchat,
      className: 'bg-black text-white hover:bg-[#222222]',
    },
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-brand-900 to-brand-800 text-brand-50 flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm  <span className="bg-gradient-to-r from-brand-100 via-brand-200 to-brand-300 bg-clip-text text-transparent">Sahan Shrestha</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-100 mb-6">
            Full Stack Developer | Creative Problem Solver | Tech Enthusiast
          </p>
          <p className="text-base md:text-lg text-brand-200 max-w-2xl mx-auto mb-8">
            I build beautiful, responsive web applications with modern technologies. Let's create something amazing together.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-full shadow-sm transition-transform duration-200 hover:-translate-y-0.5 ${link.className}`}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-brand-50 px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 active:scale-95"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border-2 border-brand-300 text-brand-300 hover:bg-brand-300 hover:text-brand-900 px-8 py-3 rounded-lg font-semibold transition"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce mt-12">
          <a href="#about">
            <ChevronDown size={32} className="mx-auto text-brand-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
