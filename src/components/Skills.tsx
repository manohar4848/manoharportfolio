import { BarChart3, Brain, Cloud, Code, Database, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      skills: ['Python', 'Java', 'C', 'SQL', 'JavaScript', 'HTML/CSS'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Wrench,
      title: 'Frameworks',
      skills: ['Spring Boot', 'Django', 'ReactJS'],
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'SQLite'],
      color: 'from-teal-500 to-green-500',
    },
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      skills: [ 'Azure', 'AWS'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: BarChart3,
      title: 'Analytics Tools',
      skills: ['Power BI', 'Tableau', 'Excel'],
      color: 'from-emerald-500 to-blue-500',
    },
    {
      icon: Brain,
      title: 'Core Concepts',
      skills: ['Data Structures', 'Algorithms', 'Operating Systems', 'DBMS', 'Software Engineering'],
      color: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-4" />
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                <category.icon className="text-white" size={28} />
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
