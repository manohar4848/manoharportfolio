import { Award, Briefcase, Trophy } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      icon: Briefcase,
      title: 'AWS Virtual Internship',
      organization: 'Amazon Web Services',
      period: '2024',
      description: 'Completed AWS virtual internship, gaining hands-on experience with cloud services, deployment, and serverless architecture.',
      skills: ['AWS EC2', 'S3', 'Lambda', 'CloudFormation', 'Serverless'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Trophy,
      title: 'Hackathon Participant',
      organization: 'KL University',
      period: '2023',
      description: 'Developed Projects.',
      skills: ['MERN', 'Data Analytics', 'Django'],
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Performance Optimization',
      description: 'Optimized backend queries, improving performance by 30%',
    },
    {
      icon: Award,
      title: 'Academic Excellence',
      description: 'Maintained 8.97 CGPA throughout B.Tech program',
    },
    {
      icon: Award,
      title: 'Multiple Certifications',
      description: 'Earned 5+ professional certifications from industry leaders',
    },
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Experience & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto" />
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <exp.icon className="text-white" size={32} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-slate-800">{exp.title}</h4>
                        <p className="text-blue-600 font-medium">{exp.organization}</p>
                      </div>
                      <span className="px-4 py-1 bg-white rounded-full text-sm font-medium text-slate-600">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-slate-600 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-white text-slate-700 rounded-lg text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl text-white hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <achievement.icon size={32} className="mb-4" />
                <h4 className="text-lg font-bold mb-2">{achievement.title}</h4>
                <p className="text-blue-100 text-sm leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
