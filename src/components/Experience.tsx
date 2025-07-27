import { Download, Calendar, MapPin, Award, Building, Users, Target, Trophy } from 'lucide-react';
import { Timeline } from './TimelineAceternity';
import MovingBorderButton from './MovingBorderButton';

const Experience = () => {
  const timelineData = [
    {
      title: "Apr 2022 - Present",
      content: (
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Building className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-primary">Social project management of Babyrst & Seagull brands</h3>
              <p className="text-lg font-semibold text-muted-foreground">Project manager & Art Director</p>
              <p className="text-muted-foreground mt-2">
                Leading comprehensive social media strategies and visual campaigns for two major brands. 
                Responsible for creative direction, team management, and ensuring brand consistency across all digital touchpoints.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "May 2020 - Apr 2022",
      content: (
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Target className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-primary">Dr Akhavi Laboratory</h3>
              <p className="text-lg font-semibold text-muted-foreground">Advertising manager</p>
              <p className="text-muted-foreground mt-2">
                Managed advertising campaigns and brand communications for a leading medical laboratory. 
                Developed visual strategies that increased brand recognition and patient engagement.
              </p>
              <p className="text-sm text-muted-foreground mt-2 font-medium">
                Cooperation with the following brands and healthcare partners.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2019 - Present",
      content: (
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-primary">Freelance project</h3>
              <p className="text-lg font-semibold text-muted-foreground">Art Director</p>
              <p className="text-muted-foreground mt-2">
                Independent creative direction for diverse clients across multiple industries. 
                Specialized in brand development, campaign creation, and visual storytelling for both local and international brands.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Dec 2018 - Jul 2019",
      content: (
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Building className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-primary">Magnolia Advertising Agency</h3>
              <p className="text-lg font-semibold text-muted-foreground">Graphic Designer, Illustrator</p>
              <p className="text-muted-foreground mt-2">
                Created visual content for advertising campaigns, specializing in illustration and graphic design. 
                Contributed to major client projects and developed expertise in brand visual communication.
              </p>
              <p className="text-sm text-muted-foreground mt-2 font-medium">
                Worked with the following corporations and established strong industry relationships.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Jan 2018 - May 2020",
      content: (
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Target className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-primary">Domino Dairy and Ice Cream</h3>
              <p className="text-lg font-semibold text-muted-foreground">Freelance Graphic Designer, Illustrator</p>
              <p className="text-muted-foreground mt-2">
                Developed packaging design, marketing materials, and brand communications for a leading dairy company. 
                Created appealing visual content that enhanced product appeal and market presence.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Feb 2017 - Dec 2018",
      content: (
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Building className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-primary">Four Mind Advertising Agency</h3>
              <p className="text-lg font-semibold text-muted-foreground">Graphic Designer, Illustrator</p>
              <p className="text-muted-foreground mt-2">
                Collaborated on international campaigns and developed design solutions for global brands. 
                Gained valuable experience in cross-cultural design and international market understanding.
              </p>
              <p className="text-sm text-muted-foreground mt-2 font-medium">
                Worked with the following international corporations and expanded global design perspective.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2013 - 2016",
      content: (
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Trophy className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-primary">Stavita Manufacturing Group</h3>
              <p className="text-lg font-semibold text-muted-foreground">Art Director</p>
              <p className="text-muted-foreground mt-2">
                Led the creative department for a major manufacturing company, overseeing brand identity and marketing materials. 
                Developed comprehensive visual strategies that strengthened market position and brand recognition.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2009 - 2010",
      content: (
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Building className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-primary">Simavid Company</h3>
              <p className="text-lg font-semibold text-muted-foreground">Visual Development and Modeler</p>
              <p className="text-muted-foreground mt-2">
                Started professional career in visual development and 3D modeling. 
                Built foundational skills in digital design and developed technical expertise in visual creation tools.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Design Excellence Award',
      year: '2023',
      description: 'Iranian Design Association'
    },
    {
      icon: Award,
      title: 'Creative Campaign of the Year',
      year: '2022',
      description: 'Marketing Guild Awards'
    },
    {
      icon: Award,
      title: 'Rising Talent Recognition',
      year: '2021',
      description: 'Young Creatives Summit'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '3', label: 'Industry Awards' }
  ];

  return (
    <section id="experience" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="space-y-16">
          
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="display-medium">Experience & Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              A progressive career built on creativity, leadership, and delivering exceptional results
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up animate-delay-200">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center glass rounded-2xl p-6 hover-lift"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Professional Timeline */}
          <div className="space-y-8 animate-fade-in-up animate-delay-400">
            <h3 className="heading-large text-center">Professional Timeline</h3>
            <Timeline data={timelineData} />
          </div>

          {/* Achievements */}
          <div className="space-y-8 animate-fade-in-up animate-delay-600">
            <h3 className="heading-large text-center">Recognition & Awards</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.title}
                  className="glass rounded-2xl p-6 text-center hover-lift group"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <achievement.icon size={24} className="text-white" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-primary font-medium">
                        {achievement.year}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resume Download */}
          <div className="text-center animate-fade-in-up animate-delay-800">
            <div className="glass rounded-3xl p-8 md:p-12 shadow-portfolio max-w-2xl mx-auto">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="heading-large">Download Full Resume</h3>
                  <p className="body-large text-muted-foreground">
                    Get a comprehensive overview of my professional experience, skills, and achievements
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <MovingBorderButton href="/resume.pdf">
                    <Download size={16} />
                    <span>Download Resume</span>
                  </MovingBorderButton>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar size={16} className="mr-2" />
                    <span>Updated December 2024</span>
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center sm:justify-start">
                    <MapPin size={16} className="mr-2 text-primary" />
                    <span>Based in Tehran, Iran</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-end">
                    <Award size={16} className="mr-2 text-primary" />
                    <span>Available for Remote Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;