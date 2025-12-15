import ScrollReveal from '../components/ScrollReveal';
import { Link } from 'react-router-dom';

const DigitalKeys = () => {
  const keyTypes = [
    {
      name: 'Platinum Key',
      quantity: '70',
      description: 'For our highly influential partners. Includes brand partnerships and the ability to craft your own cannabis strain at our Portugal facility.',
      features: ['Brand Partnerships', 'Custom Strain Creation', 'Full Admin Support', 'VIP Treatment'],
      tier: 'platinum',
    },
    {
      name: 'Gold Key',
      quantity: '75',
      description: 'For KOLs, Influencers and associated people. "Gods" who can travel the universe and sell cannabis from any planet.',
      features: ['Universal Access', 'Admin Support', 'Priority Features', 'Influencer Network'],
      tier: 'gold',
    },
    {
      name: 'Standard Key',
      quantity: '5,000',
      description: 'Planet-based keys with ability to trade strains native to their home planet. Available for public sale.',
      features: ['Planet Access', 'Native Strains', 'Trading Platform', 'Community Access'],
      tier: 'standard',
    },
  ];

  return (
    <div className="relative pt-32">
      {/* Hero */}
      <section className="story-hero">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <ScrollReveal>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Digital <span className="text-primary">Keys</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
              Your gateway to the revolutionary world of legal cannabis trading through blockchain technology.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Key Types */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {keyTypes.map((key, index) => (
              <ScrollReveal key={key.name} delay={index * 100}>
                <div className={`nft-card p-8 h-full ${
                  key.tier === 'platinum' ? 'border-platinum/40' :
                  key.tier === 'gold' ? 'border-gold/40' : 'border-primary/40'
                }`}>
                  <div className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center ${
                    key.tier === 'platinum' ? 'bg-platinum/20' :
                    key.tier === 'gold' ? 'bg-gold/20' : 'bg-primary/20'
                  }`}>
                    <span className="logo-script text-2xl">DG</span>
                  </div>
                  
                  <h3 className={`font-display text-2xl mb-2 ${
                    key.tier === 'platinum' ? 'text-platinum' :
                    key.tier === 'gold' ? 'text-gold' : 'text-primary'
                  }`}>
                    {key.name}
                  </h3>
                  
                  <p className="text-sm text-foreground/50 mb-4">
                    Quantity: {key.quantity}
                  </p>
                  
                  <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                    {key.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {key.features.map((feature) => (
                      <li key={feature} className="text-sm text-foreground/60 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 section-gradient">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl text-foreground">
                How It <span className="text-primary">Works</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-8">
            <ScrollReveal>
              <div className="feature-card">
                <h3 className="font-display text-xl text-foreground mb-4">1. Mint Your Digital Key</h3>
                <p className="text-foreground/70 text-sm">
                  Choose your planet and mint your Digital Key NFT. Each key is an ERC-721 token on the Ethereum blockchain.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="feature-card">
                <h3 className="font-display text-xl text-foreground mb-4">2. Access Your Platform</h3>
                <p className="text-foreground/70 text-sm">
                  Your Digital Key unlocks access to our trading platform where you can legally trade cannabis through our regulated network.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="feature-card">
                <h3 className="font-display text-xl text-foreground mb-4">3. Build Your Business</h3>
                <p className="text-foreground/70 text-sm">
                  Create clients, process orders, and earn ETH. The Digital Key holder never comes into contact with the product but is paid for creating clients and orders.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Ready to Join the <span className="text-primary">Revolution</span>?
            </h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Traditionally, entering the cannabis market will cost upwards of $20M USD. Our Digital Key circumvents the large setup costs.
            </p>
            <Link to="/our-story" className="btn-primary">
              Learn More
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default DigitalKeys;
