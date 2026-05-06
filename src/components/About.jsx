import profileImage from '../assets/profile.jpg'

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-brand-800 text-brand-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          About <span className="bg-gradient-to-r from-brand-100 via-brand-200 to-brand-300 bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center animate-slide-up">
            <div className="w-64 h-64 bg-gradient-to-br from-brand-200 to-brand-600 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:scale-105">
              <img
                src={profileImage}
                alt="xaina"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="animate-slide-up space-y-6">
            <p className="text-lg text-brand-100 leading-relaxed">
              I'm a passionate developer with a love for creating elegant solutions to complex problems. With expertise in both frontend and backend technologies, I craft beautiful, functional web applications.
            </p>

            <p className="text-lg text-brand-100 leading-relaxed">
              My journey in web development started with a curiosity about how things work online. Since then, I've worked on diverse projects ranging from e-commerce platforms to real-time applications.
            </p>

            <p className="text-lg text-brand-100 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-brand-50 px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105"
              >
                Learn More About Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
