
import { useEffect, useState } from "react";
import { ChevronDown, Mail, Linkedin, ExternalLink, GraduationCap, Briefcase, Code, Heart } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University Name",
      year: "2020-2024",
      description: "Focused on software engineering and web development"
    }
  ];

  const experience = [
    {
      position: "Software Developer",
      company: "Tech Company",
      period: "2023-Present",
      description: "Developed web applications using React and Node.js"
    },
    {
      position: "Frontend Developer Intern",
      company: "Startup Inc",
      period: "2022-2023",
      description: "Built responsive user interfaces and improved user experience"
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", 
    "HTML/CSS", "Tailwind CSS", "Git", "SQL", "MongoDB"
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js, featuring user authentication, payment processing, and inventory management."
    },
    {
      title: "Task Management App", 
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features."
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides detailed forecasts and weather analytics with interactive charts and location-based services."
    }
  ];

  const hobbies = [
    "Photography", "Hiking", "Reading Tech Blogs", "Playing Guitar", 
    "Cooking", "Open Source Contributing"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-slate-800">Portfolio</h1>
            <div className="hidden md:flex space-x-6 text-sm">
              <button onClick={() => scrollToSection('home')} className="text-slate-600 hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('education')} className="text-slate-600 hover:text-blue-600 transition-colors">Education</button>
              <button onClick={() => scrollToSection('experience')} className="text-slate-600 hover:text-blue-600 transition-colors">Experience</button>
              <button onClick={() => scrollToSection('skills')} className="text-slate-600 hover:text-blue-600 transition-colors">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-600 hover:text-blue-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('hobbies')} className="text-slate-600 hover:text-blue-600 transition-colors">Hobbies</button>
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
            onClick={() => scrollToSection('about')}
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Learn More About Me
            <ChevronDown className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-8">About Me</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            I'm a passionate developer with 5+ years of experience creating digital solutions. 
            I love working with modern technologies and turning ideas into reality.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to open source, 
            or enjoying a good cup of coffee while reading about the latest tech trends.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 text-center mb-16">Education</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <GraduationCap className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{edu.degree}</h3>
                    <p className="text-blue-600 font-medium">{edu.school}</p>
                    <p className="text-slate-500 text-sm mb-2">{edu.year}</p>
                    <p className="text-slate-600">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 text-center mb-16">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-slate-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <Briefcase className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{exp.position}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                    <p className="text-slate-500 text-sm mb-2">{exp.period}</p>
                    <p className="text-slate-600">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 text-center mb-16">Skills</h2>
          <div className="flex items-center justify-center mb-8">
            <Code className="h-8 w-8 text-blue-600" />
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-6 py-3 bg-white text-slate-700 rounded-full shadow-md hover:shadow-lg transition-shadow border border-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 text-center mb-16">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-slate-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 text-center mb-16">Hobbies & Interests</h2>
          <div className="flex items-center justify-center mb-8">
            <Heart className="h-8 w-8 text-blue-600" />
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {hobbies.map((hobby, index) => (
                <span 
                  key={index}
                  className="px-6 py-3 bg-white text-slate-700 rounded-full shadow-md hover:shadow-lg transition-shadow border border-slate-200"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-8">Get In Touch</h2>
          <p className="text-lg text-slate-600 mb-12">
            I'm always interested in new opportunities and interesting projects. Let's connect!
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
