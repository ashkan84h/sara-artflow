import { Heart, ArrowUp } from 'lucide-react';

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

  return (
    <footer className="section-bg border-t border-border">
      <div className="container mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <h3 className="font-display text-3xl font-bold">Sara Ali Mohammadi</h3>
                <p className="text-lg text-muted-foreground">Art Director</p>
                <p className="body-large text-muted-foreground max-w-md">
                  Creating compelling visual narratives through innovative design and artistic direction. 
                  Transforming ideas into powerful visual experiences.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="space-y-1">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                    Get in Touch
                  </h4>
                  <div className="space-y-1">
                    <p className="text-sm">
                      <a href="tel:+989123456789" className="hover:text-primary transition-colors">
                        +98 912 345 6789
                      </a>
                    </p>
                    <p className="text-sm">
                      <a href="tel:+982187654321" className="hover:text-primary transition-colors">
                        +98 21 8765 4321
                      </a>
                    </p>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm">
                    <a href="mailto:sara@artdirector.com" className="hover:text-primary transition-colors">
                      sara@artdirector.com
                    </a>
                  </p>
                  <p className="text-sm">
                    <a href="mailto:hello@saraali.design" className="hover:text-primary transition-colors">
                      hello@saraali.design
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                Quick Links
              </h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-sm hover:text-primary transition-colors text-left"
                  >
                    {link.label}
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
                    className="block text-sm hover:text-primary transition-colors text-left"
                  >
                    {service.label}
                  </button>
                ))}
                <div className="pt-2">
                  <a
                    href="/portfolio.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    Download Portfolio
                  </a>
                </div>
              </nav>
            </div>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>© 2024 Sara Ali Mohammadi. Made with</span>
              <Heart size={14} className="text-red-500 fill-current" />
              <span>in Tehran, Iran</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a
                href="https://instagram.com/saraali"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com/in/saraali"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/saraali"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Twitter
              </a>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </button>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;