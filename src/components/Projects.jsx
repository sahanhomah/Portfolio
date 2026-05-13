import { ExternalLink } from 'lucide-react';
import meropasal from '../assets/meropasal.png';
import raktasathi from '../assets/raktasathi.png';
import portfolio from '../assets/image.png';

function createProjectImage(title) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500" role="img" aria-labelledby="title desc">
      <title>${title}</title>
      <desc>Project thumbnail for ${title}</desc>
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#02e1ea" />
          <stop offset="55%" stop-color="#00858c" />
          <stop offset="100%" stop-color="#032426" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" rx="32" fill="url(#bg)" />
      <circle cx="660" cy="120" r="90" fill="rgba(255,255,255,0.12)" />
      <circle cx="140" cy="390" r="120" fill="rgba(255,255,255,0.08)" />
      <text x="64" y="280" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="54" font-weight="700">${title}</text>
      <text x="64" y="338" fill="#dbeff0" font-family="Arial, Helvetica, sans-serif" font-size="24">Portfolio showcase</text>
    </svg>
  `

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg.trim())}`
}

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "MeroPasal An E-Commerce Platform",
      description: "A full-featured e-commerce website with tech product catalog, shopping cart, and payment integration.",
      tech: ["HTML", "JavaScript", "MySQL", "PHP"],
      github: "https://github.com/sahanhomah/meropasal.git",
      image: meropasal
    },
    {
      id: 2,
      title: "RaktaSathi",
      description: "RaktaSathi is an online platform that helps people find and donate blood easily. It connects donors, people in need of blood.",
      tech: ["Django",  "Javascript","Bootstrap CSS","SQLite",],
      github: "https://github.com/sahanhomah/RaktaSathi.git",
      image: raktasathi
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Personal portfolio website to showcase projects and skills.",
      tech: ["React", "Node.js", "Express", "Tailwind CSS"],
      github: "https://github.com/sahanhomah/Portfolio.git",
      image: portfolio
    }

   
  ];

  return (
    <section id="projects" className="min-h-screen bg-brand-900 text-brand-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Featured <span className="bg-gradient-to-r from-brand-100 via-brand-200 to-brand-300 bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-brand-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105 animate-slide-up border border-brand-700/60"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden bg-gradient-to-br from-brand-200 to-brand-600">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-brand-100 text-sm mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-brand-700 text-brand-50 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-brand-700 hover:bg-brand-600 px-4 py-2 rounded transition"
                    aria-label="View source code"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
