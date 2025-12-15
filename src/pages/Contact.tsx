import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative pt-32">
      {/* Hero */}
      <section className="story-hero">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <ScrollReveal>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              <span className="text-primary">Contact</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
              Have questions? We'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-foreground/60 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border/50 rounded text-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-foreground/60 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border/50 rounded text-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-foreground/60 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border/50 rounded text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="How can we help?"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-foreground/60 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-card border border-border/50 rounded text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal delay={200}>
              <div className="mt-16 text-center">
                <h3 className="font-display text-xl text-foreground mb-6">Connect With Us</h3>
                <div className="flex justify-center gap-6">
                  <a href="https://twitter.com/DrGreenNFT" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                    Twitter
                  </a>
                  <a href="https://discord.gg/DrGreen" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                    Discord
                  </a>
                  <a href="https://t.me/DrGreenNFTentry" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                    Telegram
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
