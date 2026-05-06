import { useState } from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    // Show success message
    setSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    // Hide message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);

    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    { icon: ExternalLink, url: "https://github.com", label: "GitHub", color: "hover:text-brand-100" },
    { icon: ExternalLink, url: "https://linkedin.com", label: "LinkedIn", color: "hover:text-brand-300" },
    { icon: ExternalLink, url: "https://twitter.com", label: "Twitter", color: "hover:text-brand-200" },
    { icon: Mail, url: "mailto:your.email@example.com", label: "Email", color: "hover:text-brand-300" }
  ];

  return (
    <section id="contact" className="min-h-screen bg-brand-900 text-brand-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Get In <span className="bg-gradient-to-r from-brand-100 via-brand-200 to-brand-300 bg-clip-text text-transparent">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-brand-100 text-lg mb-8">
                I'd love to hear from you! Whether you have a project idea, a job opportunity, or just want to chat about web development, feel free to reach out.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-brand-300" size={24} />
                <div>
                  <p className="text-brand-200 text-sm">Email</p>
                  <a href="mailto:your.email@example.com" className="text-lg hover:text-brand-300 transition">
                    your.email@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-brand-300" size={24} />
                <div>
                  <p className="text-brand-200 text-sm">Phone</p>
                  <a href="tel:+1234567890" className="text-lg hover:text-brand-300 transition">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-brand-200 mb-4">Follow Me</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full bg-brand-800 border border-brand-700 flex items-center justify-center transition hover:border-brand-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="bg-brand-800 rounded-lg p-8 space-y-6 border border-brand-700/60">
              {submitted && (
                <div className="bg-brand-500 text-brand-50 p-4 rounded-lg animate-fade-in">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-brand-700 border border-brand-600 rounded-lg px-4 py-3 text-brand-50 placeholder:text-brand-200 focus:outline-none focus:border-brand-300 focus:ring-2 focus:ring-brand-300 focus:ring-opacity-50 transition"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-brand-700 border border-brand-600 rounded-lg px-4 py-3 text-brand-50 placeholder:text-brand-200 focus:outline-none focus:border-brand-300 focus:ring-2 focus:ring-brand-300 focus:ring-opacity-50 transition"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-brand-700 border border-brand-600 rounded-lg px-4 py-3 text-brand-50 placeholder:text-brand-200 focus:outline-none focus:border-brand-300 focus:ring-2 focus:ring-brand-300 focus:ring-opacity-50 transition"
                  placeholder="Subject"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-brand-700 border border-brand-600 rounded-lg px-4 py-3 text-brand-50 placeholder:text-brand-200 focus:outline-none focus:border-brand-300 focus:ring-2 focus:ring-brand-300 focus:ring-opacity-50 transition resize-none"
                  placeholder="Your Message"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-brand-50 py-3 rounded-lg font-semibold transition transform hover:scale-105 active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
