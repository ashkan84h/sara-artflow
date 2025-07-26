import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      primary: '+98 912 345 6789',
      secondary: '+98 21 8765 4321'
    },
    {
      icon: Mail,
      label: 'Email',
      primary: 'sara@artdirector.com',
      secondary: 'hello@saraali.design'
    },
    {
      icon: MapPin,
      label: 'Location',
      primary: 'Tehran, Iran',
      secondary: 'Available for remote work'
    }
  ];

  const socialLinks = [
    { icon: Instagram, url: 'https://instagram.com/saraali', label: 'Instagram' },
    { icon: Linkedin, url: 'https://linkedin.com/in/saraali', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com/saraali', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in-up">
            <h2 className="display-medium">Let's Create Together</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's discuss your project and explore how we can create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-in-up animate-delay-200">
              <div className="glass rounded-3xl p-8 shadow-portfolio">
                <div className="space-y-6">
                  <h3 className="heading-large">Send a Message</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Project Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="What's your project about?"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder="Tell me about your project, timeline, and goals..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-medium hover-lift shadow-glow disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up animate-delay-400">
              
              {/* Contact Details */}
              <div className="glass rounded-3xl p-6 shadow-portfolio">
                <h3 className="heading-large mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={info.label} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon size={20} className="text-white" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold">{info.label}</h4>
                        <p className="text-sm text-muted-foreground">{info.primary}</p>
                        <p className="text-xs text-muted-foreground">{info.secondary}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass rounded-3xl p-6 shadow-portfolio">
                <h3 className="heading-large mb-6">Follow My Work</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-3 rounded-xl hover:bg-muted transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <social.icon size={18} className="text-white" />
                      </div>
                      <span className="font-medium group-hover:text-primary transition-colors">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="glass rounded-3xl p-6 shadow-portfolio">
                <h3 className="heading-large mb-4">Availability</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Available for new projects</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Typical response time: 24-48 hours
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Project start: 1-2 weeks
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;