import { Heart, ArrowUp, Instagram, Linkedin, Twitter, Dribbble } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'works', label: 'Works' },
    { id: 'campaigns', label: 'Campaigns' }
  ];

  const services = [
    { id: 'services', label: 'Services' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const socialLinks = [
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/saraali', 
      icon: Instagram,
      color: 'hover:text-pink-500'
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/saraali', 
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/saraali', 
      icon: Twitter,
      color: 'hover:text-blue-400'
    },
    { 
      name: 'Dribbble', 
      href: 'https://dribbble.com/saraali', 
      icon: Dribbble,
      color: 'hover:text-pink-400'
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-background via-background to-muted/20 border-t border-border/40">
      <div className="container mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-display text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    Sara Ali Mohammadi
                  </h3>
                  <p className="text-xl text-primary font-medium">Art Director</p>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  Creating compelling visual narratives through innovative design and artistic direction. 
                  Transforming ideas into powerful visual experiences that connect and inspire.
                </p>
              </div>
              
              {/* Social Media */}
              <div className="space-y-4">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                  Follow My Work
                </h4>
                <div className="flex items-center space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center w-12 h-12 rounded-xl bg-muted/50 text-muted-foreground transition-all duration-300 hover:bg-primary/10 hover:scale-110 hover:shadow-lg ${social.color} group`}
                        aria-label={social.name}
                      >
                        <Icon size={20} className="group-hover:scale-110 transition-transform" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-7 grid md:grid-cols-3 gap-8">
              
              {/* Quick Links */}
              <div className="space-y-6">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                  Navigation
                </h4>
                <nav className="space-y-3">
                  {quickLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left group"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Services */}
              <div className="space-y-6">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                  Services
                </h4>
                <nav className="space-y-3">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => scrollToSection(service.id)}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left group"
                    >
                      <span className="relative">
                        {service.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                  Get in Touch
                </h4>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <div className="space-y-1">
                      <a href="tel:+989123456789" className="block text-sm hover:text-primary transition-colors">
                        +98 912 345 6789
                      </a>
                      <a href="tel:+982187654321" className="block text-sm hover:text-primary transition-colors">
                        +98 21 8765 4321
                      </a>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <div className="space-y-1">
                      <a href="mailto:sara@artdirector.com" className="block text-sm hover:text-primary transition-colors">
                        sara@artdirector.com
                      </a>
                      <a href="mailto:hello@saraali.design" className="block text-sm hover:text-primary transition-colors">
                        hello@saraali.design
                      </a>
                    </div>
                  </div>
                  <div className="pt-2">
                    <a
                      href="/portfolio.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      Download Portfolio
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border/40 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© 2024 Sara Ali Mohammadi. Made with</span>
              <Heart size={14} className="text-red-500 fill-current animate-pulse" />
              <span>in Tehran, Iran</span>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 group hover:bg-muted/50 rounded-lg"
            >
              <span>Back to Top</span>
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;