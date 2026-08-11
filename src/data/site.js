import meropasal from '../assets/meropasal.png'
import raktasathi from '../assets/raktasathi.png'
import portfolioShot from '../assets/image.png'
import exercisetracker from '../assets/exercisetracker.png'
import quizweb from '../assets/quizweb.png'
import profileImage from '../assets/profile.jpg'

/**
 * Single source of truth for every piece of copy on the site.
 * write here rather than inside components.
 */

export const profile = {
  name: 'Sahan Shrestha',
  firstName: 'Sahan',
  role: 'Full Stack Developer',
  logoText: 'SAHAN',
  email: 'sahanshrestha2000@gmail.com',
  phone: '+977 9813068936',
  // Digits only, keeps the tel: href valid.
  phoneHref: '+9779813068936',
  location: 'Banepa, Nepal',
  image: profileImage,
}

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Work' },
  { href: '#skills', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/sahanhomah', icon: 'github' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sahan-shrestha-09a919316/',
    icon: 'linkedin',
  },
  { label: 'Instagram', href: 'https://www.instagram.com/sahanshrestha/', icon: 'instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/sahan.shrestha.307241', icon: 'facebook' },
  { label: 'YouTube', href: 'https://www.youtube.com/@BasketballVideos20000', icon: 'youtube' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@sahanhomah', icon: 'tiktok' },
  {
    label: 'Snapchat',
    href: 'https://www.snapchat.com/add/sahanhomah?share_id=thjqKSif6R0&locale=en-US',
    icon: 'snapchat',
  },
]

// The two shown inline in the navbar, mirroring the reference layout.
export const navSocials = ['GitHub', 'LinkedIn']

export const hero = {
  eyebrow: profile.name,
  headline: [`Hello, my`, `name's ${profile.firstName}.`, `I'm a Full Stack`, `Developer.`],
  scrollLabel: 'Scroll down',
}

export const about = {
  eyebrow: 'What I Do',
  lead: 'I enjoy building fast, accessible, human-centered web applications.',
  headline: ['Think.', 'Make.', 'Ship.'],
  cta: { label: 'Contact Me', href: '#contact' },
  paragraphs: [
    "I'm a developer who likes turning messy problems into clean, working software. I work across the stack, from database schema to the last pixel of the interface.",
    'My path started with plain curiosity about how websites actually work. Since then I have shipped e-commerce platforms, donor-matching systems, and a handful of tools I built purely because I wanted them to exist.',
    'Outside of code I follow basketball far too closely, and I am usually reading about whatever framework I have decided to learn next.',
  ],
}

export const services = {
  eyebrow: 'What I Offer',
  title: 'Services',
  items: [
    {
      title: 'Frontend',
      accent: 'yellow',
      icon: 'layout',
      description:
        'Responsive interfaces built with React and Tailwind. Accessible, fast, and comfortable on every screen size.',
      skills: ['JavaScript', 'React', 'Tailwind CSS', 'HTML/CSS', 'Responsive Design'],
    },
    {
      title: 'Backend',
      accent: 'indigo',
      icon: 'server',
      featured: true,
      description:
        'APIs and server logic with Python and Django. Authentication, business rules, and clean REST endpoints.',
      skills: ['Python', 'Django', 'REST APIs', 'Authentication'],
    },
    {
      title: 'Data & Tooling',
      accent: 'pink',
      icon: 'database',
      description:
        'Relational schema design plus the version control and deployment workflow that keeps a project shippable.',
      skills: [ 'SQL', 'Git', 'GitHub' ],
    },
  ],
}

export const marquee = {
  eyebrow: 'What I Work With',
  headline: ['Building for the', 'modern web,', 'end to end.'],
  body: 'I research and build breakthrough, delightful ideas — from first schema to final pixel.',
  scrollLabel: 'Scroll down',
  stack: [
    'React',
    'Django', 
    'Python',
    'JavaScript',
    'Tailwind CSS',
    'PostgreSQL',
    'Git',
  ],
}

export const projects = {
  eyebrow: 'Selected Work',
  title: 'Featured Projects',
  items: [
    {
      id: 1,
      title: 'MeroPasal',
      subtitle: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce site with a tech product catalog, shopping cart, and payment integration.',
      tech: ['HTML', 'JavaScript', 'MySQL', 'PHP'],
      github: 'https://github.com/sahanhomah/meropasal.git',
      image: meropasal,
      accent: 'yellow',
    },
    {
      id: 2,
      title: 'RaktaSathi',
      subtitle: 'Blood Donation Network',
      description:
        'An online platform that connects blood donors with people in need, making it far easier to find a match quickly.',
      tech: ['Django', 'JavaScript', 'Bootstrap', 'SQLite'],
      github: 'https://github.com/sahanhomah/RaktaSathi.git',
      image: raktasathi,
      accent: 'pink',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      subtitle: 'Personal Site',
      description: 'The site you are looking at. Built to showcase my projects and skills.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'EmailJS'],
      github: 'https://github.com/sahanhomah/Portfolio.git',
      image: portfolioShot,
      accent: 'indigo',
    },
    {
      id: 4,
      title: 'Exercise Tracker',
      subtitle: 'Desktop App',
      description: 'A lightweight desktop application for logging workouts and tracking progress over time.',
      tech: ['Python', 'Tkinter'],
      github: 'https://github.com/sahanhomah/ExerciseTracking.git',
      image: exercisetracker,
      accent: 'orange',
    },
    {
      id: 5,
      title: 'Quiz Web App',
      subtitle: 'Learning Tool',
      description:
        'A quiz platform built to sharpen my own general knowledge, then opened up so others could use it too.',
      tech: ['Python', 'Django', 'SQLite', 'Tailwind CSS'],
      github: 'https://github.com/sahanhomah/QuizApp.git',
      image: quizweb,
      accent: 'lavender',
    },
  ],
}

export const contact = {
  eyebrow: 'Get In Touch',
  headline: ["Let's build", 'something good.'],
  body: "Whether you have a project in mind, a role to fill, or just want to talk shop about the web — my inbox is open.",
}

export const footer = {
  blurb: 'Full stack developer based in Nepal, building for the modern web.',
  quickLinks: navLinks,
}
