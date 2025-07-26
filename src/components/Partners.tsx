import { useEffect, useRef } from 'react';

const Partners = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Simulated partner logos - in real implementation, these would be actual brand logos
  const partners = [
    'TechCorp', 'DesignHub', 'BrandStudio', 'Creative Co', 'Innovation Labs',
    'Digital Agency', 'StartupVenture', 'MediaGroup', 'Fashion Brand', 'Luxury Goods',
    'TechCorp', 'DesignHub', 'BrandStudio', 'Creative Co', 'Innovation Labs' // Duplicated for seamless loop
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollLeft = 0;

    const animate = () => {
      scrollLeft += 0.5;
      if (scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollLeft = 0;
      }
      scrollContainer.scrollLeft = scrollLeft;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="heading-large">Trusted by Leading Brands</h2>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Collaborating with innovative companies to create impactful visual experiences
            </p>
          </div>

          {/* Partners Carousel */}
          <div className="relative overflow-hidden animate-fade-in-up animate-delay-200">
            <div 
              ref={scrollRef}
              className="flex space-x-12 md:space-x-16 overflow-hidden"
              style={{ width: 'calc(200% + 2rem)' }}
            >
              {partners.map((partner, index) => (
                <div
                  key={`${partner}-${index}`}
                  className="flex-shrink-0 h-16 w-32 md:w-40 flex items-center justify-center glass rounded-xl hover-lift group cursor-pointer"
                >
                  <div className="text-center">
                    <div className="font-semibold text-muted-foreground group-hover:text-primary transition-colors text-sm md:text-base">
                      {partner}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Fade gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>

          {/* Testimonial or Achievement */}
          <div className="text-center animate-fade-in-up animate-delay-400">
            <div className="glass rounded-3xl p-6 md:p-8 max-w-3xl mx-auto shadow-portfolio">
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <div>Client Satisfaction</div>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">25+</div>
                    <div>Brand Partners</div>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div>Project Success Rate</div>
                  </div>
                </div>
                <blockquote className="body-large text-muted-foreground italic">
                  "Working with exceptional brands has shaped my understanding of diverse markets 
                  and refined my ability to create universally compelling visual solutions."
                </blockquote>
                <cite className="text-sm font-medium">— Sara Ali Mohammadi</cite>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partners;