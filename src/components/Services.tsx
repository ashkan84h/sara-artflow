import { Palette, Lightbulb, Brush, Target, Monitor, Camera, Pen, Zap } from 'lucide-react';
import { useRef, useState } from 'react';
import AnimatedBeam from './AnimatedBeam';

const Services = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Target,
      title: 'Art Direction',
      description: 'Leading creative vision and visual strategy for campaigns, ensuring cohesive and impactful brand storytelling across all touchpoints.',
      features: [
        'Creative Strategy Development',
        'Visual Concept Creation',
        'Team Leadership & Coordination',
        'Brand Consistency Management'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Visual Concept Development',
      description: 'Transforming abstract ideas into compelling visual narratives that resonate with target audiences and drive engagement.',
      features: [
        'Concept Ideation & Research',
        'Mood Board Creation',
        'Visual Storytelling',
        'Creative Problem Solving'
      ]
    },
    {
      icon: Brush,
      title: 'Illustration & Design',
      description: 'Creating custom illustrations and design solutions that capture brand essence and communicate messages effectively.',
      features: [
        'Digital Illustration',
        'Custom Icon Design',
        'Infographic Creation',
        'Editorial Illustration'
      ]
    }
  ];

  const skills = [
    { icon: Monitor, name: 'Photoshop', ref: useRef<HTMLDivElement>(null) },
    { icon: Camera, name: 'Illustrator', ref: useRef<HTMLDivElement>(null) },
    { icon: Pen, name: 'After Effects', ref: useRef<HTMLDivElement>(null) },
    { icon: Zap, name: '3DS Max', ref: useRef<HTMLDivElement>(null) }
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - startX;
    setScrollX(x);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const cardWidth = 400;
    const newIndex = Math.round(-scrollX / cardWidth);
    const clampedIndex = Math.max(0, Math.min(services.length - 1, newIndex));
    setCurrentCard(clampedIndex);
    setScrollX(-clampedIndex * cardWidth);
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="space-y-16">
          
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="display-medium">Services & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Comprehensive creative services designed to elevate your brand and connect with your audience
            </p>
          </div>

          {/* Skills with Animated Beam */}
          <div className="relative" ref={containerRef}>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-12">Technical Skills</h3>
              <div className="relative h-96 flex items-center justify-center">
                
                {/* Center Profile */}
                <div ref={profileRef} className="absolute z-10">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl">
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">SA</span>
                    </div>
                  </div>
                </div>

                {/* Skills in Circle */}
                {skills.map((skill, index) => {
                  const angle = (index * 90) - 45; // 90 degrees apart, starting at -45
                  const radius = 150;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  
                  return (
                    <div key={skill.name} className="absolute z-10" style={{ transform: `translate(${x}px, ${y}px)` }}>
                      <div ref={skill.ref} className="group">
                        <div className="w-16 h-16 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                          <skill.icon size={24} className="text-primary group-hover:text-accent transition-colors" />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                          <span className="text-xs font-medium text-muted-foreground">{skill.name}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Animated Beams */}
                {skills.map((skill, index) => (
                  <AnimatedBeam
                    key={index}
                    containerRef={containerRef}
                    fromRef={profileRef}
                    toRef={skill.ref}
                    duration={3 + index * 0.5}
                    delay={index * 0.2}
                    curvature={20}
                    pathColor="rgba(156, 163, 175, 0.3)"
                    gradientStartColor="#6366f1"
                    gradientStopColor="#8b5cf6"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Draggable Services Cards */}
          <div className="relative">
            <h3 className="text-2xl font-bold text-center mb-8">Core Services</h3>
            <div className="overflow-hidden">
              <div 
                className="flex gap-6 transition-transform duration-300 ease-out cursor-grab active:cursor-grabbing"
                style={{ transform: `translateX(${scrollX}px)` }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    className="min-w-[400px] h-[500px] relative group select-none"
                  >
                    {/* Glossy Card */}
                    <div className="h-full glass rounded-3xl p-8 shadow-portfolio hover-lift relative overflow-hidden bg-gradient-to-br from-white to-gray-50 border border-gray-200">
                      
                      {/* Glossy Highlight */}
                      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/40 to-transparent rounded-t-3xl" />
                      <div className="absolute top-4 left-4 w-16 h-16 bg-white/20 rounded-full blur-xl" />
                      
                      {/* Content */}
                      <div className="relative z-10 space-y-6 h-full flex flex-col">
                        
                        {/* Icon with Glow */}
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                            <service.icon size={32} className="text-white" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity" />
                        </div>

                        {/* Content */}
                        <div className="space-y-4 flex-1">
                          <h3 className="heading-large group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          <p className="body-large text-muted-foreground">
                            {service.description}
                          </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                            Key Services
                          </h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Card Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentCard(index);
                    setScrollX(-index * 400);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentCard === index ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fade-in-up animate-delay-600">
            <div className="glass rounded-3xl p-8 md:p-12 shadow-portfolio">
              <div className="space-y-6 max-w-3xl mx-auto">
                <h3 className="heading-large">Ready to Start Your Project?</h3>
                <p className="body-large text-muted-foreground">
                  Let's collaborate to bring your creative vision to life. I work closely with clients 
                  to understand their unique needs and deliver exceptional results that exceed expectations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover-lift hover:bg-primary-dark transition-all"
                  >
                    Start a Project
                  </button>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('works');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-8 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;