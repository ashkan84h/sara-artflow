import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    { id: 'home', label: 'HOME' },
    { id: 'works', label: 'WORKS' },
    { id: 'campaigns', label: 'CAMPAIGNS' },
    { id: 'services', label: 'SERVICES' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT ME' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-md py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="font-display text-2xl md:text-3xl font-bold cursor-pointer hover:text-primary transition-colors"
          onClick={() => scrollToSection('home')}
        >
          Sara Ali
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium tracking-wider hover:text-primary transition-colors relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 right-0 glass transition-all duration-300 ${
            isMenuOpen 
              ? 'opacity-100 visible translate-y-0' 
              : 'opacity-0 invisible -translate-y-4'
          }`}
        >
          <nav className="container mx-auto px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-lg font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;