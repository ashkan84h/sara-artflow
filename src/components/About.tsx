import { Heart, Globe, Camera, Palette } from 'lucide-react';
import Timeline from './Timeline';

const About = () => {
  const educationData = [
    {
      year: '2018-2022',
      title: 'Bachelor of Fine Arts in Visual Communication',
      institution: 'Tehran University of Art',
      description: 'Specialized in graphic design, typography, and visual storytelling with focus on digital media and brand identity.',
      type: 'education' as const
    },
    {
      year: '2020',
      title: 'Adobe Creative Suite Certification',
      institution: 'Adobe Certified Expert',
      description: 'Advanced certification in Photoshop, Illustrator, After Effects, and InDesign for professional design workflows.',
      type: 'education' as const
    },
    {
      year: '2021',
      title: 'Digital Marketing & Brand Strategy',
      institution: 'Marketing Institute',
      description: 'Comprehensive training in digital marketing strategies, brand positioning, and consumer psychology.',
      type: 'education' as const
    }
  ];

  const skills = [
    { name: 'Adobe Photoshop', level: 95 },
    { name: 'Adobe Illustrator', level: 92 },
    { name: 'After Effects', level: 88 },
    { name: '3DS Max', level: 85 },
    { name: 'Brand Strategy', level: 90 },
    { name: 'Creative Direction', level: 93 },
    { name: 'Visual Storytelling', level: 96 },
    { name: 'Typography', level: 89 }
  ];

  const interests = [
    { icon: Palette, title: 'Digital Illustration', description: 'Creating unique artistic expressions' },
    { icon: Globe, title: 'Cultural Travel', description: 'Exploring global design perspectives' },
    { icon: Camera, title: 'Photography', description: 'Capturing moments and stories' },
    { icon: Heart, title: 'NGO Volunteer Work', description: 'Giving back to the community' }
  ];

  return (
    <section id="about" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="display-medium">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Bio */}
          <div className="glass rounded-3xl p-8 md:p-12 shadow-portfolio animate-fade-in-up animate-delay-200">
            <div className="space-y-6">
              <h3 className="heading-large">Creative Vision & Passion</h3>
              <div className="space-y-4 body-large text-muted-foreground">
                <p>
                  As an Art Director with over 5 years of experience, I specialize in creating compelling visual narratives 
                  that bridge the gap between artistic vision and strategic communication. My work spans across digital 
                  platforms, brand identity, and multimedia campaigns.
                </p>
                <p>
                  I believe that great design is not just about aesthetics—it's about creating meaningful connections 
                  between brands and their audiences. Every project I undertake is an opportunity to tell a unique story 
                  and evoke genuine emotions through carefully crafted visual experiences.
                </p>
                <p>
                  My approach combines traditional artistic principles with cutting-edge digital techniques, ensuring 
                  that each design solution is both timeless and contemporary. I'm passionate about mentoring young 
                  designers and contributing to projects that make a positive social impact.
                </p>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8 animate-fade-in-up animate-delay-400">
            <h3 className="heading-large text-center">Educational Journey</h3>
            <Timeline items={educationData} />
          </div>

          {/* Skills */}
          <div className="space-y-8 animate-fade-in-up animate-delay-600">
            <h3 className="heading-large text-center">Core Skills & Expertise</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="space-y-2"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="space-y-8 animate-fade-in-up animate-delay-800">
            <h3 className="heading-large text-center">Interests & Passions</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {interests.map((interest, index) => (
                <div 
                  key={interest.title}
                  className="glass rounded-2xl p-6 text-center hover-lift group"
                  style={{ animationDelay: `${1.0 + index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <interest.icon size={24} className="text-white" />
                    </div>
                    <h4 className="font-semibold group-hover:text-primary transition-colors">
                      {interest.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {interest.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;