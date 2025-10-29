import { Code2, Database, Cloud, LineChart } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Expert in building end-to-end web applications with modern frameworks',
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Hands-on experience with AWS, Azure, and Google Cloud Platform',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Proficient in database design, optimization, and data management',
    },
    {
      icon: LineChart,
      title: 'Data Analytics',
      description: 'Skilled in data visualization with Power BI, Tableau, and Excel',
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a passionate Software Engineer and Data Analyst with a strong foundation in
              computer science fundamentals and hands-on experience in building scalable applications.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Currently pursuing B.Tech in Computer Science at KL University with a CGPA of 8.97,
              I specialize in full-stack development, cloud computing, and data analytics. I've
              successfully delivered projects that have improved performance and efficiency by up to 30%.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              My goal is to contribute to innovative projects at leading tech companies like Google,
              where I can leverage my skills in Python, Java, Spring Boot, and cloud platforms to
              create impactful solutions.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">8.97</div>
                <div className="text-sm text-slate-600">CGPA</div>
              </div>
              <div className="w-px h-12 bg-slate-300" />
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-slate-600">Projects</div>
              </div>
              <div className="w-px h-12 bg-slate-300" />
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-slate-600">Certifications</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
