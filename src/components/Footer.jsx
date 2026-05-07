import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 text-brand-100 border-t border-brand-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Footer */}
          <div>
            <h4 className="text-brand-50 font-bold mb-4">Portfolio</h4>
            <p className="text-sm">
              A modern, responsive portfolio showcasing my skills and projects in web development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-brand-50 font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-brand-300 transition">Home</a></li>
              <li><a href="#about" className="hover:text-brand-300 transition">About</a></li>
              <li><a href="#projects" className="hover:text-brand-300 transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-brand-300 transition">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-brand-50 font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-300 transition">Blog</a></li>
              <li><a href="#" className="hover:text-brand-300 transition">Resume</a></li>
              <li><a href="#" className="hover:text-brand-300 transition">GitHub</a></li>
              <li><a href="#" className="hover:text-brand-300 transition">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brand-700 pt-8">
          {/* Copyright */}
          <div className="text-center text-sm">
            <p className="flex items-center justify-center gap-2 mb-2">
              Made with Copilot by Sahan Shrestha
            </p>
            <p>&copy; {currentYear} Your Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
