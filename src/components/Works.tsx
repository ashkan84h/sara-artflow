import { useState } from 'react';
import { Eye, ExternalLink, X } from 'lucide-react';
import workDigital1 from '@/assets/work-digital-1.jpg';
import workVideo1 from '@/assets/work-video-1.jpg';

interface WorkItem {
  id: string;
  title: string;
  category: string;
  image: string;
  images?: string[];
  description: string;
}

const Works = () => {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const works: WorkItem[] = [
    {
      id: '1',
      title: 'E-commerce Platform Redesign',
      category: 'digital',
      image: workDigital1,
      images: [workDigital1, workDigital1, workDigital1],
      description: 'Complete redesign of a major e-commerce platform focusing on user experience and conversion optimization.'
    },
    {
      id: '2',
      title: 'Brand Campaign Video',
      category: 'video',
      image: workVideo1,
      images: [workVideo1, workVideo1],
      description: 'Art direction for a luxury brand campaign video, combining elegant cinematography with compelling storytelling.'
    },
    {
      id: '3',
      title: 'Corporate Identity System',
      category: 'branding',
      image: workDigital1,
      images: [workDigital1, workDigital1, workDigital1, workDigital1],
      description: 'Comprehensive brand identity development including logo, color palette, typography, and brand guidelines.'
    },
    {
      id: '4',
      title: 'Editorial Illustration Series',
      category: 'illustration',
      image: workVideo1,
      images: [workVideo1, workVideo1, workVideo1],
      description: 'Custom illustrations for a leading magazine, focusing on contemporary social issues and cultural themes.'
    },
    {
      id: '5',
      title: 'Retail POSM Campaign',
      category: 'posm',
      image: workDigital1,
      images: [workDigital1, workDigital1],
      description: 'Point-of-sale marketing materials for a global retail chain, including displays, signage, and promotional materials.'
    },
    {
      id: '6',
      title: 'Product Photography Direction',
      category: 'photography',
      image: workVideo1,
      images: [workVideo1, workVideo1, workVideo1, workVideo1],
      description: 'Art direction for luxury product photography, emphasizing premium quality and brand positioning.'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'digital', label: 'Digital & Web' },
    { id: 'video', label: 'Video Ad' },
    { id: 'photography', label: 'Photography' },
    { id: 'illustration', label: 'Illustration' },
    { id: 'posm', label: 'POSM' },
    { id: 'branding', label: 'Branding' }
  ];

  const filteredWorks = activeCategory === 'all' 
    ? works 
    : works.filter(work => work.category === activeCategory);

  const openModal = (work: WorkItem) => {
    setSelectedWork(work);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedWork(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="works" className="py-20">
      <div className="container mx-auto px-6">
        <div className="space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="display-medium">Featured Works</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              A showcase of creative projects spanning digital design, video production, and visual storytelling
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up animate-delay-200">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Works Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorks.map((work, index) => (
              <div
                key={work.id}
                className="group cursor-pointer animate-fade-in-up hover-lift"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                onClick={() => openModal(work)}
              >
                <div className="glass rounded-2xl overflow-hidden shadow-portfolio">
                  <div className="relative overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <Eye size={24} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-2">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {categories.find(cat => cat.id === work.category)?.label}
                      </span>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {work.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {work.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Modal */}
      {selectedWork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="glass rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="heading-large">{selectedWork.title}</h3>
                  <span className="text-sm text-primary font-medium">
                    {categories.find(cat => cat.id === selectedWork.category)?.label}
                  </span>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                <p className="body-large text-muted-foreground">
                  {selectedWork.description}
                </p>

                <div className="grid gap-4">
                  {selectedWork.images?.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedWork.title} - Image ${index + 1}`}
                      className="w-full rounded-xl"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;