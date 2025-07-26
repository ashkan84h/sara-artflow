import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Works from '@/components/Works';
import Campaigns from '@/components/Campaigns';
import Services from '@/components/Services';
import Partners from '@/components/Partners';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling to the document
    document.documentElement.classList.add('smooth-scroll');
    
    // Update document title
    document.title = 'Sara Ali Mohammadi - Art Director Portfolio';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Art Director & Visual Creative specializing in brand campaigns, digital design, and compelling visual narratives. Based in Tehran, Iran.');
    }

    // Add intersection observer for scroll animations
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      document.documentElement.classList.remove('smooth-scroll');
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Works Section */}
        <Works />
        
        {/* Campaigns Section */}
        <Campaigns />
        
        {/* Services Section */}
        <Services />
        
        {/* Partner Brands */}
        <Partners />
        
        {/* Experience & Resume */}
        <Experience />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;