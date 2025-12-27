import { Github, Linkedin, Mail, Code2, Award, FileText } from 'lucide-react';

const Hero = ({ darkMode }) => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Meer-Mohammad-Faisal',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/meer-faisal/',
      label: 'LinkedIn',
    },
    {
      icon: Code2,
      href: 'https://leetcode.com/u/Meerfaisal/',
      label: 'LeetCode',
    },
    {
      icon: Award,
      href: 'https://www.geeksforgeeks.org/user/fmd350g0i',
      label: 'GeeksforGeeks',
    },
    {
      icon: Mail,
      href: 'mailto:fmd35585@gmail.com',
      label: 'Email',
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-[calc(var(--navbar-height,80px)+2rem)] ${
        darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-2">
            <p
              className={`text-sm sm:text-base font-medium tracking-wider uppercase ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}
            >
              Hello, I'm
            </p>
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Meer Mohammad Faisal
            </h1>
            <div
              className={`text-lg sm:text-xl md:text-2xl font-medium ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>
                Full Stack Developer
              </span>
              {' | '}
              <span className={darkMode ? 'text-green-400' : 'text-green-600'}>
                AI & ML Developer
              </span>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              Building Scalable Software & AI-Powered Solutions
            </h2>
            <p
              className={`text-base sm:text-lg leading-relaxed ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Driven Computer Engineering student with strong foundations in Data Structures, Full-Stack Development, and AI/ML. Experienced in building production-ready applications and AI-powered systems. Passionate about problem-solving, clean architecture, and continuous learning.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="/MEER_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white transition-all transform hover:scale-105 ${
                darkMode
                  ? 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/50'
                  : 'bg-blue-600 hover:bg-blue-700 shadow-lg'
              }`}
            >
              <FileText size={20} />
              View Resume
            </a>
            <button
              onClick={() => scrollToSection('#projects')}
              className={`inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                darkMode
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className={`inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all border-2 ${
                darkMode
                  ? 'border-gray-700 text-white hover:bg-gray-800'
                  : 'border-gray-300 text-gray-900 hover:bg-gray-100'
              }`}
            >
              Contact Me
            </button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`p-3 rounded-lg transition-all transform hover:scale-110 ${
                    darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>

          <div className={`pt-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <p className="text-sm font-medium">Based in Bangalore, Karnataka, India</p>
            <p className="text-sm">
              B.Tech CSE (AIML) • Technocrats Institute of Technology, Bhopal
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;