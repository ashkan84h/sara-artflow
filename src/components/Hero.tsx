import { Download, ArrowRight } from 'lucide-react';
import MovingBorderButton from './MovingBorderButton';
import saraPortrait from '@/assets/sara-portrait.jpg';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 hero-gradient" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="display-large bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Sara Ali Mohammadi
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.2em] text-muted-foreground">
                ART DIRECTOR
              </h2>
            </div>
            
            <p className="body-large text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Creating compelling visual narratives through innovative design and artistic direction. 
              Transforming ideas into powerful visual experiences that resonate with audiences.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <MovingBorderButton 
                href="/portfolio.pdf"
                className="group"
              >
                <Download size={16} />
                <span>Download Portfolio</span>
              </MovingBorderButton>
              
              <MovingBorderButton 
                variant="secondary"
                onClick={scrollToContact}
                className="group"
              >
                <span>Contact Me</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </MovingBorderButton>
            </div>
          </div>
          
          {/* Right Content - Portrait */}
          <div className="relative animate-fade-in-up animate-delay-400">
            <div className="relative max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-2xl animate-pulse-glow" />
              
              {/* Portrait container */}
              <div className="relative glass rounded-3xl p-2 shadow-portfolio">
                <img
                  src={saraPortrait}
                  alt="Sara Ali Mohammadi - Art Director"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full blur-lg opacity-60 animate-bounce" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full blur-lg opacity-40 animate-bounce animate-delay-200" />
            </div>
          </div>
          
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;