import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'works', 'campaigns', 'services', 'about', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'works', label: 'Works' },
    { id: 'campaigns', label: 'Campaigns' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div 
            className="group cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 group-hover:rotate-12">
                  <Sparkles size={20} className="text-white group-hover:animate-pulse" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </div>
              <div className="font-sans text-2xl md:text-3xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-500">
                Sara Ali
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center space-x-1 bg-background/70 backdrop-blur-xl rounded-full p-2 border border-border/50 shadow-lg">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-6 py-3 text-sm font-medium rounded-full transition-all duration-500 group ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50 hover:scale-105'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 animate-pulse"></div>
                  )}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-xl bg-background/70 backdrop-blur-xl border border-border/50 shadow-lg transition-all duration-300 hover:scale-105 group"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute block h-0.5 w-6 bg-gradient-to-r from-primary to-accent transform transition-all duration-500 ${
                isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
              }`} />
              <span className={`absolute block h-0.5 w-6 bg-gradient-to-r from-primary to-accent transform transition-all duration-500 ${
                isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
              }`} />
              <span className={`absolute block h-0.5 w-6 bg-gradient-to-r from-primary to-accent transform transition-all duration-500 ${
                isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
              }`} />
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen 
              ? 'max-h-96 opacity-100 mt-6' 
              : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="bg-background/95 backdrop-blur-xl rounded-2xl border border-border/50 shadow-xl p-6">
            <nav className="space-y-3">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMenuOpen ? 'fade-in-up 0.5s ease-out forwards' : 'none'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;