import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-100 opacity-70" />

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-slate-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-lg text-slate-600 font-medium">Hello, I'm</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-transparent">
              Bokka Manohar
            </h1>
            <p className="text-2xl md:text-3xl text-slate-700 font-light">
              Software Engineer & Data Analyst
            </p>
          </div>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Passionate about building scalable solutions with expertise in full-stack development,
            cloud computing, and data analytics. Proficient in Python, Java, Spring Boot, and modern web technologies.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="mailto:bmanohar178@gmail.com"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={20} />
              Get in Touch
            </a>
          <a
  href="/Bokka_Manohar_Resume.pdf"
  download="Bokka_Manohar_Resume.pdf"
  className="px-8 py-3 border-2 border-slate-300 text-slate-700 rounded-full font-medium 
             hover:border-blue-600 hover:text-blue-600 hover:shadow-lg hover:scale-105 
             transition-all duration-300 flex items-center gap-2"
>
  <Download size={20} />
  Download Resume
</a>

          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/b-manohar-384ba328a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 text-slate-700 hover:text-blue-600"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 text-slate-700 hover:text-blue-600"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:bmanohar178@gmail.com"
              className="p-3 rounded-full bg-white shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 text-slate-700 hover:text-blue-600"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-600 hover:text-blue-600 transition-colors"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
