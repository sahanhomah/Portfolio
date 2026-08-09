import { useEffect, useState } from 'react'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { contact, profile, socialLinks } from '../data/site'
import SocialIcon from './SocialIcon'

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [formData, setFormData] = useState(EMPTY_FORM)
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY')
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in every field before sending.' })
      return
    }

    setLoading(true)
    setStatus({ type: 'idle', message: '' })

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        {
          to_email: import.meta.env.VITE_EMAILJS_RECIPIENT || profile.email,
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
      )

      if (response.status === 200) {
        setFormData(EMPTY_FORM)
        setStatus({
          type: 'success',
          message: "Thanks for reaching out. I'll get back to you soon.",
        })
        setTimeout(() => setStatus({ type: 'idle', message: '' }), 6000)
      } else {
        throw new Error(`Unexpected status ${response.status}`)
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus({
        type: 'error',
        message: 'Something went wrong sending that. Please email me directly instead.',
      })
    } finally {
      setLoading(false)
    }
  }

  const details = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phoneHref}` },
    { icon: MapPin, label: 'Location', value: profile.location, href: null },
  ]

  return (
    <section id="contact" className="relative overflow-hidden bg-brand-900 py-24 lg:py-36">
      <div className="relative mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="eyebrow reveal text-brand-300">{contact.eyebrow}</p>

            <h2 className="mt-8 text-[2.5rem] font-extrabold leading-[1.05] tracking-tightest text-brand-50 sm:text-5xl lg:text-[3.75rem]">
              {contact.headline.map((line, index) => (
                <span
                  key={line}
                  className="reveal block"
                  style={{ '--reveal-delay': `${index * 90}ms` }}
                >
                  {line}
                </span>
              ))}
            </h2>

            <p
              className="reveal mt-8 max-w-md text-lg leading-relaxed text-brand-200"
              style={{ '--reveal-delay': '160ms' }}
            >
              {contact.body}
            </p>

            <dl className="mt-14 space-y-8">
              {details.map((detail, index) => {
                const Icon = detail.icon
                return (
                  <div
                    key={detail.label}
                    className="reveal flex items-center gap-5"
                    style={{ '--reveal-delay': `${index * 110}ms` }}
                  >
                    <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-800 text-brand-300">
                      <Icon size={20} />
                    </span>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-widest text-brand-200">
                        {detail.label}
                      </dt>
                      <dd className="mt-1 text-lg font-semibold text-brand-50">
                        {detail.href ? (
                          <a href={detail.href} className="transition hover:text-brand-300">
                            {detail.value}
                          </a>
                        ) : (
                          detail.value
                        )}
                      </dd>
                    </div>
                  </div>
                )
              })}
            </dl>

            <div className="reveal mt-12 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand-700 text-brand-100 transition duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-300 hover:text-brand-900"
                >
                  <SocialIcon name={link.icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ '--reveal-delay': '140ms' }}>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-card-lg bg-brand-800 p-8 shadow-lift lg:p-10"
              noValidate
            >
              {status.type !== 'idle' && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`animate-fade-in rounded-xl px-5 py-4 text-sm font-semibold ${
                    status.type === 'success'
                      ? 'bg-brand-300 text-brand-900'
                      : 'bg-accent-orange text-brand-900'
                  }`}
                >
                  {status.message}
                </p>
              )}

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-brand-50">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="field"
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-brand-50">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="field"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-brand-50">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="field"
                  placeholder="What is this about?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-brand-50">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="field resize-none"
                  placeholder="Tell me about it..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                data-cursor="hover"
              >
                {loading ? 'Sending...' : 'Send Message'}
                {!loading && <ArrowRight size={17} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
