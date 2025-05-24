
import { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Project One",
      description: "A beautiful web application built with React and modern technologies.",
      tech: ["React", "TypeScript", "Tailwind"],
      link: "#"
    },
    {
      title: "Project Two", 
      description: "An innovative solution that solves real-world problems.",
      tech: ["Next.js", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Project Three",
      description: "A creative project showcasing design and development skills.",
      tech: ["Vue.js", "Python", "PostgreSQL"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-slate-800">Portfolio</h1>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-600 hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-600 hover:text-blue-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-blue-600 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
            Hello, I'm <span className="text-blue-600">Alex</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8">
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
            I create beautiful, functional web experiences that make a difference. 
            Passionate about clean code, user experience, and innovative solutions.
          </p>
          <button 
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work
            <ChevronDown className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-8">About Me</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            I'm a passionate developer with 5+ years of experience creating digital solutions. 
            I love working with modern technologies and turning ideas into reality. When I'm not coding, 
            you can find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-8">Let's Connect</h2>
          <p className="text-lg text-slate-600 mb-12">
            I'm always interested in new opportunities and interesting projects.
          </p>
          <div className="flex justify-center space-x-8">
            <a 
              href="mailto:hello@example.com"
              className="flex items-center px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email
            </a>
            <a 
              href="https://github.com"
              className="flex items-center px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
            <a 
              href="https://linkedin.com"
              className="flex items-center px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-800 text-white text-center">
        <p>&copy; 2024 Alex. Built with React and Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Index;
