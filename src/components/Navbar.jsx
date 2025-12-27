import { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const updateNavbarHeightVar = () => {
      if (!navRef.current) return;
      const height = Math.ceil(navRef.current.getBoundingClientRect().height);
      document.documentElement.style.setProperty('--navbar-height', `${height}px`);
    };

    updateNavbarHeightVar();

    let resizeObserver;
    if (window.ResizeObserver && navRef.current) {
      resizeObserver = new ResizeObserver(() => updateNavbarHeightVar());
      resizeObserver.observe(navRef.current);
    }

    window.addEventListener('resize', updateNavbarHeightVar);

    return () => {
      window.removeEventListener('resize', updateNavbarHeightVar);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const cssVar = getComputedStyle(document.documentElement)
        .getPropertyValue('--navbar-height')
        .trim();
      const navbarHeight = Number.parseInt(cssVar.replace('px', ''), 10);
      const scrollPosition = window.scrollY + (Number.isFinite(navbarHeight) ? navbarHeight + 24 : 120);
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    
    if (element) {
      const cssVar = getComputedStyle(document.documentElement)
        .getPropertyValue('--navbar-height')
        .trim();
      const navbarHeight = Number.parseInt(cssVar.replace('px', ''), 10);
      const headerOffset = Number.isFinite(navbarHeight) ? navbarHeight + 16 : 96;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-gray-900/95 backdrop-blur-lg shadow-2xl shadow-black/20'
            : 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="group flex items-center gap-2 flex-shrink-0"
          >
            <span className={`text-xl font-bold bg-gradient-to-r ${darkMode ? 'from-blue-400 to-cyan-400' : 'from-blue-600 to-cyan-600'} bg-clip-text text-transparent transition-all duration-300`}>
              Faisal
            </span>
          </a>

          <div className="hidden md:flex items-center gap-2 flex-1 justify-end">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`relative px-3 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                      isActive
                        ? darkMode
                          ? 'text-blue-400'
                          : 'text-blue-600'
                        : darkMode
                        ? 'text-gray-300 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`} />
                    )}
                  </a>
                );
              })}
            </div>
            <div className="h-6 w-px mx-2" style={{ backgroundColor: darkMode ? '#4a5568' : '#e2e8f0' }} />
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-xl transition-all duration-300 transform hover:scale-110 ${
                darkMode
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700 hover:shadow-lg hover:shadow-yellow-500/10'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-lg'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-xl transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className={`p-2 rounded-xl transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className={`fixed left-0 right-0 top-[var(--navbar-height)] border-t ${
            darkMode ? 'border-gray-800 bg-gray-900/95' : 'border-gray-200 bg-white/95'
          } backdrop-blur-lg shadow-2xl`}
        >
          <div className="px-4 py-4 space-y-1 max-h-[calc(100vh-5rem)] overflow-auto">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? darkMode
                        ? 'bg-blue-600/20 text-blue-400'
                        : 'bg-blue-100 text-blue-600'
                      : darkMode
                      ? 'text-gray-200 hover:bg-gray-800'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;