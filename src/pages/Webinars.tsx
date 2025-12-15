import ScrollReveal from '../components/ScrollReveal';
import { Link } from 'react-router-dom';

const Webinars = () => {
  const webinars = [
    {
      title: 'Introduction to Dr. Green Digital Key',
      date: 'December 2024',
      description: 'Learn about the revolutionary cannabis trading platform and how Digital Keys work.',
    },
    {
      title: 'Blockchain & Cannabis: A Perfect Match',
      date: 'November 2024',
      description: 'Explore how blockchain technology is solving traceability issues in the cannabis industry.',
    },
    {
      title: 'Getting Started with Your Digital Key',
      date: 'October 2024',
      description: 'A step-by-step guide to minting and using your Dr. Green Digital Key.',
    },
    {
      title: 'The Digital Universe Explained',
      date: 'September 2024',
      description: 'Dive into the lore and mechanics of our 20-planet digital universe.',
    },
  ];

  return (
    <div className="relative pt-32">
      {/* Hero */}
      <section className="story-hero">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <ScrollReveal>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              <span className="text-primary">Webinars</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
              Join our educational sessions to learn more about Dr. Green and the future of cannabis trading.
            </p>
            <Link to="/contact" className="btn-primary inline-block">
              Book a Webinar
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Webinars List */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {webinars.map((webinar, index) => (
              <ScrollReveal key={webinar.title} delay={index * 100}>
                <div className="feature-card hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <p className="text-xs text-primary mb-2">{webinar.date}</p>
                      <h3 className="font-display text-xl text-foreground mb-2">{webinar.title}</h3>
                      <p className="text-sm text-foreground/60">{webinar.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="btn-outline text-xs">Watch Now</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Webinars;
