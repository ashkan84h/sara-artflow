import { useState } from 'react';
import { X, Play } from 'lucide-react';
import campaign1 from '@/assets/campaign-1.jpg';

interface Campaign {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  extendedDescription: string;
  images: string[];
  socialImages: string[];
}

const Campaigns = () => {
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);

  const campaigns: Campaign[] = [
    {
      id: '1',
      title: 'Luxury Brand Rebrand',
      subtitle: 'Elevating heritage through modern design',
      image: campaign1,
      description: 'A comprehensive rebranding campaign for a century-old luxury brand, bridging traditional craftsmanship with contemporary aesthetics. The project involved complete visual identity overhaul, packaging redesign, and digital presence transformation. Our approach emphasized the brands rich heritage while positioning it for modern luxury consumers. The campaign successfully increased brand recognition by 40% and attracted a younger demographic while maintaining loyalty among existing customers. Key deliverables included logo redesign, color palette development, typography system, packaging design, website redesign, and social media guidelines.',
      extendedDescription: 'The social media component of this campaign was particularly innovative, featuring behind-the-scenes content that showcased the artisanal process, user-generated content campaigns, and influencer collaborations. We created a cohesive visual language across all platforms, resulting in 300% increase in social engagement and 150% growth in follower base across all channels.',
      images: [campaign1, campaign1, campaign1, campaign1],
      socialImages: [campaign1, campaign1, campaign1]
    },
    {
      id: '2',
      title: 'Tech Startup Launch',
      subtitle: 'Disrupting the fintech space with bold visuals',
      image: campaign1,
      description: 'Brand identity and launch campaign for an innovative fintech startup. Challenged with creating trust and accessibility in a complex industry, we developed a clean, approachable visual system that demystifies financial technology. The campaign included brand identity, website design, mobile app interface, marketing collateral, and a comprehensive digital marketing strategy. Our solution balanced professionalism with approachability, using clear typography, intuitive iconography, and a calming color palette. The launch exceeded all KPIs, achieving 50,000 app downloads in the first month.',
      extendedDescription: 'Social media strategy focused on financial education and transparency, featuring animated explainer videos, customer success stories, and real-time market insights. The campaign generated over 2 million impressions and established the brand as a thought leader in the fintech space.',
      images: [campaign1, campaign1, campaign1],
      socialImages: [campaign1, campaign1]
    },
    {
      id: '3',
      title: 'Fashion Week Campaign',
      subtitle: 'Avant-garde meets commercial appeal',
      image: campaign1,
      description: 'Art direction for a major fashion brands Fashion Week campaign, balancing avant-garde aesthetics with commercial viability. The project encompassed runway presentation, backstage documentation, social media content, and press materials. We created a visual narrative that celebrated the designers vision while ensuring broad market appeal. The campaign featured bold typography, dramatic lighting, and carefully curated color stories that complemented the collection. Results included extensive media coverage, influencer engagement, and a 25% increase in pre-orders.',
      extendedDescription: 'The social media extension included live behind-the-scenes content, model interviews, and exclusive previews. We partnered with fashion influencers and created shareable moments that generated organic buzz, resulting in trending hashtags and millions of user-generated content pieces.',
      images: [campaign1, campaign1, campaign1, campaign1, campaign1],
      socialImages: [campaign1, campaign1, campaign1, campaign1]
    },
    {
      id: '4',
      title: 'Sustainable Product Line',
      subtitle: 'Communicating environmental responsibility through design',
      image: campaign1,
      description: 'Visual campaign for a sustainable product line launch, emphasizing environmental responsibility through every design decision. The challenge was communicating sustainability without sacrificing aesthetic appeal or commercial viability. We developed an earth-toned palette, organic typography, and packaging solutions using recycled materials. The campaign included product photography, packaging design, website development, and educational content about sustainability. The authentic approach resonated with environmentally conscious consumers, resulting in sold-out initial inventory.',
      extendedDescription: 'Social media content focused on education and transparency, featuring supply chain documentaries, environmental impact statistics, and user guides for sustainable living. The campaign sparked conversations about responsible consumption and positioned the brand as an industry leader in sustainability.',
      images: [campaign1, campaign1],
      socialImages: [campaign1, campaign1, campaign1]
    },
    {
      id: '5',
      title: 'Cultural Festival Branding',
      subtitle: 'Celebrating diversity through visual storytelling',
      image: campaign1,
      description: 'Complete visual identity for a multicultural arts festival, celebrating diversity through inclusive design. The project required creating a cohesive brand that represented multiple cultures without appropriation or stereotyping. Our solution featured a modular design system that could adapt to different cultural expressions while maintaining brand consistency. Deliverables included logo design, signage system, promotional materials, digital assets, and merchandise. The festival achieved record attendance and positive community feedback.',
      extendedDescription: 'Social media strategy celebrated cultural stories through user-generated content, artist spotlights, and educational posts about cultural traditions. The campaign fostered community engagement and cross-cultural dialogue, generating organic reach that exceeded paid advertising efforts.',
      images: [campaign1, campaign1, campaign1],
      socialImages: [campaign1, campaign1]
    },
    {
      id: '6',
      title: 'Corporate Innovation Summit',
      subtitle: 'Visualizing the future of business',
      image: campaign1,
      description: 'Brand and campaign development for a major corporate innovation summit, attracting industry leaders and emerging entrepreneurs. The challenge was creating sophisticated visuals that conveyed cutting-edge thinking while remaining accessible to diverse audiences. We developed a futuristic yet approachable aesthetic using dynamic typography, gradient systems, and innovative layout structures. The campaign included event branding, speaker materials, digital platform design, and comprehensive promotional strategy. The summit attracted 500% more attendees than previous years.',
      extendedDescription: 'Digital and social media components featured speaker previews, innovation showcases, and real-time event coverage. The campaign established new standards for corporate event marketing and generated significant media attention and industry recognition.',
      images: [campaign1, campaign1, campaign1, campaign1],
      socialImages: [campaign1, campaign1, campaign1]
    }
  ];

  const openCampaign = (campaign: Campaign) => {
    setSelectedCampaign(campaign);
    document.body.style.overflow = 'hidden';
  };

  const closeCampaign = () => {
    setSelectedCampaign(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="campaigns" className="py-20 section-bg">
      <div className="container mx-auto px-6">
        <div className="space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="display-medium">Campaign Portfolio</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Strategic campaigns that drive results through compelling visual narratives and innovative design solutions
            </p>
          </div>

          {/* Campaigns Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign, index) => (
              <div
                key={campaign.id}
                className="group cursor-pointer animate-fade-in-up hover-lift"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                onClick={() => openCampaign(campaign)}
              >
                <div className="glass rounded-2xl overflow-hidden shadow-portfolio">
                  <div className="relative overflow-hidden">
                    <img
                      src={campaign.image}
                      alt={campaign.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {campaign.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {campaign.subtitle}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <Play size={16} className="text-white ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Campaign Modal with Tracing Beam Effect */}
      {selectedCampaign && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto">
          <div className="min-h-screen py-8 px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="text-white">
                  <h2 className="heading-large">{selectedCampaign.title}</h2>
                  <p className="text-white/80">{selectedCampaign.subtitle}</p>
                </div>
                <button
                  onClick={closeCampaign}
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X size={24} className="text-white" />
                </button>
              </div>

              {/* Tracing Beam Content */}
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full" />
                
                <div className="space-y-12">
                  
                  {/* Description Section */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 bg-primary rounded-full border-4 border-black flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <div className="glass rounded-2xl p-6">
                      <h3 className="heading-large mb-4">Campaign Overview</h3>
                      <p className="body-large text-muted-foreground leading-relaxed">
                        {selectedCampaign.description}
                      </p>
                    </div>
                  </div>

                  {/* Main Images */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 bg-accent rounded-full border-4 border-black flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="heading-large text-white">Visual Showcase</h3>
                      <div className="grid gap-4">
                        {selectedCampaign.images.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`${selectedCampaign.title} - Image ${index + 1}`}
                            className="w-full rounded-xl shadow-xl"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Social Media Section */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-black flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="heading-large text-white">Social Impact</h3>
                      <div className="glass rounded-2xl p-6">
                        <p className="body-large text-muted-foreground leading-relaxed mb-6">
                          {selectedCampaign.extendedDescription}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {selectedCampaign.socialImages.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt={`${selectedCampaign.title} - Social ${index + 1}`}
                              className="w-full aspect-square object-cover rounded-lg"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Campaigns;