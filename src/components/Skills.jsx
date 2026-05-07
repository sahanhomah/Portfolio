export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [ "JavaScript", "Tailwind CSS", "HTML/CSS", "Responsive Design"]
    },
    {
      category: "Backend",
      skills: ["Python", "Django", "REST APIs", "Authentication"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL",  "MySQL", ]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git/GitHub"]
    }
  ];

  return (
    <section id="skills" className="min-h-screen bg-brand-800 text-brand-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          My <span className="bg-gradient-to-r from-brand-100 via-brand-200 to-brand-300 bg-clip-text text-transparent">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-brand-900 rounded-lg p-8 hover:shadow-xl transition transform hover:scale-105 animate-slide-up border border-brand-700 hover:border-brand-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-brand-300">{category.category}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-brand-100 hover:text-brand-300 transition"
                  >
                    <span className="w-2 h-2 bg-brand-300 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-brand-700 to-brand-600 rounded-lg p-8 text-center">
          <p className="text-lg mb-4">
            I'm constantly learning and staying updated with the latest technologies and best practices in web development.
          </p>
          <p className="text-brand-100">
            Check out my projects to see these skills in action!
          </p>
        </div>
      </div>
    </section>
  );
}
