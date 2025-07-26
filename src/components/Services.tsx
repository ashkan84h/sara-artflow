import { Palette, Lightbulb, Brush, Target } from 'lucide-react';

const Services = () => {
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
    },
    {
      icon: Palette,
      title: 'Branding Consultancy',
      description: 'Comprehensive brand development services, from identity creation to brand guideline establishment and implementation.',
      features: [
        'Brand Identity Design',
        'Logo Development',
        'Brand Guidelines',
        'Visual System Creation'
      ]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="display-medium">Services & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Comprehensive creative services designed to elevate your brand and connect with your audience
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="glass rounded-3xl p-8 shadow-portfolio hover-lift group animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="space-y-6">
                  
                  {/* Icon */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon size={32} className="text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
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
              </div>
            ))}
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
                    className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-full font-medium hover-lift shadow-glow"
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