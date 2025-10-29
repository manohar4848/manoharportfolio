import { GraduationCap, School, BookOpen } from 'lucide-react';

export default function Education() {
  const education = [
    {
      icon: GraduationCap,
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'KL University, Vijayawada',
      period: '2022 - 2026',
      grade: 'CGPA: 8.97 / 10',
      color: 'from-blue-600 to-cyan-600',
      highlights: [
        'Strong foundation in Data Structures and Algorithms',
        'Expertise in Operating Systems and DBMS',
        'Active participant in technical events and hackathons',
      ],
    },
    {
      icon: School,
      degree: 'Intermediate (MPC)',
      institution: 'Sri Chaitanya Junior College, Bhimavaram',
      period: '2020 - 2022',
      grade: 'Percentage: 83%',
      color: 'from-cyan-600 to-teal-600',
      highlights: [
        'Focused on Mathematics, Physics, and Chemistry',
        'Built strong analytical and problem-solving skills',
      ],
    },
    {
      icon: BookOpen,
      degree: 'SSC (Secondary School Certificate)',
      institution: 'Sri Chaitanya School, Bhimavaram',
      period: '2019 - 2020',
      grade: 'CGPA: 10 / 10',
      color: 'from-teal-600 to-green-600',
      highlights: [
        'Perfect CGPA demonstrating academic excellence',
        'Strong foundation in core subjects',
      ],
    },
  ];

  return (
    <section id="education" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-4" />
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Academic journey built on excellence and continuous learning
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-600 to-green-600" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2" />

                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full transform md:-translate-x-1/2 z-10" />

                <div className="md:w-1/2 ml-16 md:ml-0">
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                    <div className={`w-14 h-14 bg-gradient-to-br ${edu.color} rounded-xl flex items-center justify-center mb-4`}>
                      <edu.icon className="text-white" size={28} />
                    </div>

                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-slate-800 mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-600 font-medium mb-1">{edu.institution}</p>
                      <div className="flex items-center gap-3 text-sm text-slate-600">
                        <span>{edu.period}</span>
                        <span>•</span>
                        <span className="font-semibold text-slate-800">{edu.grade}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-slate-600 text-sm">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
