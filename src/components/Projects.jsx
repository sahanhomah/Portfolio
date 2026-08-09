import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/site'
import SocialIcon from './SocialIcon'

const ACCENT_BG = {
  yellow: 'bg-accent-yellow',
  pink: 'bg-accent-pink',
  indigo: 'bg-brand-300',
  orange: 'bg-accent-orange',
  lavender: 'bg-accent-lavender',
}

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-brand-900 py-24 lg:py-36">
      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
        <p className="eyebrow reveal text-brand-300">{projects.eyebrow}</p>

        <h2 className="reveal mt-6 max-w-2xl text-4xl font-extrabold tracking-tightest text-brand-50 sm:text-5xl lg:text-6xl">
          {projects.title}
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {projects.items.map((project, index) => (
            <article
              key={project.id}
              className="reveal group relative flex flex-col overflow-hidden rounded-card-lg bg-brand-800 transition duration-500 hover:-translate-y-2 hover:shadow-float"
              style={{ '--reveal-delay': `${(index % 3) * 110}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <span
                  className={`absolute left-5 top-5 rounded-full px-4 py-1.5 text-xs font-bold text-brand-50 ${ACCENT_BG[project.accent]}`}
                >
                  {project.subtitle}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-xl font-bold text-brand-50">{project.title}</h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-200">
                  {project.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-brand-900 px-3 py-1.5 text-xs font-semibold text-brand-100"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 transition hover:gap-3"
                  data-cursor="hover"
                >
                  <SocialIcon name="github" size={16} />
                  View source
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
