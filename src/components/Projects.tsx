import { Database, ExternalLink, Github, Users } from 'lucide-react';
import projectTemplate from '/public/e1249893-6337-45b9-9e45-ebc6976176bd.png'; // Your uploaded image

export default function Projects() {
  const projects = [
    {
      title: 'Online Workshop Management System',
      description: 'Full-stack platform supporting 200+ participants with scheduling and attendance tracking. Implemented secure authentication using Spring Security and role-based access control.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'HTML/CSS', 'Spring Security'],
      highlights: [
        'Built full-stack platform supporting 200+ participants',
        'Implemented secure login/signup with role-based access',
        'Optimized backend queries, improving performance by 30%',
      ],
      icon: Users,
      color: 'from-blue-600 to-cyan-600',
    },
    {
      title: 'Student Management System',
      description: 'Web application for student enrollment, attendance, and performance monitoring. Automated grading system improving academic efficiency.',
      technologies: ['Python', 'Django', 'MySQL', 'HTML/CSS', 'Django ORM'],
      highlights: [
        'Developed comprehensive student management platform',
        'Optimized ORM queries, reducing data fetch time by 25%',
        'Automated grading system, improving efficiency by 30%',
      ],
      icon: Database,
      color: 'from-cyan-600 to-teal-600',
    },
    {
      title: 'AI Care Path Planner',
      description: 'Helping students choose careers that balance passion, skills, and financial prospects.',
      technologies: ['Python', 'Machine Learning', 'AI Studio', 'Data Analysis'],
      highlights: [
        'Integrated student skill and interest assessment',
        'Developed a recommendation system for career paths',
        'Balanced outcomes for passion, skills, and financial returns',
      ],
      icon: ExternalLink,
      color: 'from-purple-600 to-pink-600',
      image: projectTemplate,
      kaggle: 'https://www.kaggle.com/competitions/gemini-3/writeups/new-writeup-1765178335985',
      aiStudio: 'https://aistudio.google.com/apps/drive/1Zx05k99ZTFWT_crXjiy1NPN2lfkIvg5J',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-4" />
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Showcasing practical applications of full-stack development and AI projects
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="md:flex">
                {/* Image Section for projects that have an image */}
                {project.image ? (
                  <div className="md:w-2/5 p-0 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-l-2xl"
                    />
                  </div>
                ) : (
                  <div className={`md:w-2/5 bg-gradient-to-br ${project.color} p-8 flex items-center justify-center`}>
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <project.icon className="text-white" size={48} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    </div>
                  </div>
                )}

                {/* Info Section */}
                <div className="md:w-3/5 p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{project.title}</h3>
                  <p className="text-slate-600 mb-6">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-800 mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-slate-600 text-sm">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-800 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    {project.kaggle && (
                      <a
                        href={project.kaggle}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors flex items-center gap-2"
                      >
                        <Github size={18} />
                        Kaggle
                      </a>
                    )}
                    {project.aiStudio && (
                      <a
                        href={project.aiStudio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
                      >
                        <ExternalLink size={18} />
                        AI Studio
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
