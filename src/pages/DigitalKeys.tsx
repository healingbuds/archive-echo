import { useState, useRef, useEffect } from 'react';
import GSAPReveal from '../components/GSAPReveal';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

// Archive key card images
import keySp2 from '@/assets/key-sp2.jpg';
import keyGs13 from '@/assets/key-gs13.jpg';
import keyP20 from '@/assets/key-p20.jpg';
import keySp10 from '@/assets/key-sp10.png';
import keyGs35 from '@/assets/key-gs35.png';
import keyP72 from '@/assets/key-p72.jpg';

const keyCards = [
  { image: keySp2, name: 'Dr. Green Platinum Key', token: 'ERC-721', quantity: '5,145' },
  { image: keyGs13, name: 'Dr. Green Gold Key', token: 'ERC-721', quantity: '5,145' },
  { image: keyP20, name: 'Dr. Green Digital Key', token: 'ERC-721', quantity: '5,145' },
  { image: keySp10, name: 'Dr. Green Platinum Key', token: 'ERC-721', quantity: '5,145' },
  { image: keyGs35, name: 'Dr. Green Gold Key', token: 'ERC-721', quantity: '5,145' },
  { image: keyP72, name: 'Dr. Green Digital Key', token: 'ERC-721', quantity: '5,145' },
];

const DigitalKeys = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

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

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % keyCards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animate slide changes
  useEffect(() => {
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        x: -activeSlide * 100 + '%',
        duration: 0.8,
        ease: 'power2.out',
      });
    }
  }, [activeSlide]);

  return (
    <div className="relative pt-24 sm:pt-28 md:pt-32">
      {/* Hero */}
      <section className="story-hero">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <GSAPReveal>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-4 sm:mb-6">
              Digital <span className="text-primary">Keys</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto px-2">
              Your gateway to the revolutionary world of legal cannabis trading through blockchain technology.
            </p>
          </GSAPReveal>
        </div>
      </section>

      {/* Key Card Carousel - Archive-exact */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <GSAPReveal>
            <div className="max-w-md mx-auto overflow-hidden rounded-xl">
              <div 
                ref={carouselRef}
                className="flex"
                style={{ width: `${keyCards.length * 100}%` }}
              >
                {keyCards.map((card, idx) => (
                  <div 
                    key={idx} 
                    className="relative"
                    style={{ width: `${100 / keyCards.length}%` }}
                  >
                    <img 
                      src={card.image} 
                      alt={card.name}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 sm:p-6">
                      <div className="mb-3">
                        <p className="text-[10px] text-foreground/50 uppercase tracking-wider">Name:</p>
                        <p className="text-sm sm:text-base text-foreground">{card.name}</p>
                      </div>
                      <div className="flex gap-6">
                        <div>
                          <p className="text-[10px] text-foreground/50 uppercase tracking-wider">Token:</p>
                          <p className="text-xs sm:text-sm text-foreground">{card.token}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-foreground/50 uppercase tracking-wider">Quantity:</p>
                          <p className="text-xs sm:text-sm text-foreground">{card.quantity}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Carousel indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {keyCards.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === activeSlide ? 'bg-primary' : 'bg-foreground/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </GSAPReveal>
        </div>
      </section>

      {/* Key Types */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {keyTypes.map((key, index) => (
              <GSAPReveal key={key.name} delay={index * 100}>
                <div className={`nft-card p-4 sm:p-6 md:p-8 h-full ${
                  key.tier === 'platinum' ? 'border-platinum/40' :
                  key.tier === 'gold' ? 'border-gold/40' : 'border-primary/40'
                }`}>
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full mb-4 sm:mb-6 flex items-center justify-center ${
                    key.tier === 'platinum' ? 'bg-platinum/20' :
                    key.tier === 'gold' ? 'bg-gold/20' : 'bg-primary/20'
                  }`}>
                    <span className="logo-script text-lg sm:text-xl md:text-2xl">DG</span>
                  </div>
                  
                  <h3 className={`font-display text-xl sm:text-2xl mb-2 ${
                    key.tier === 'platinum' ? 'text-platinum' :
                    key.tier === 'gold' ? 'text-gold' : 'text-primary'
                  }`}>
                    {key.name}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-foreground/50 mb-3 sm:mb-4">
                    Quantity: {key.quantity}
                  </p>
                  
                  <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                    {key.description}
                  </p>
                  
                  <ul className="space-y-1.5 sm:space-y-2">
                    {key.features.map((feature) => (
                      <li key={feature} className="text-xs sm:text-sm text-foreground/60 flex items-center gap-2">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </GSAPReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 section-gradient">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <GSAPReveal>
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">
                How It <span className="text-primary">Works</span>
              </h2>
            </div>
          </GSAPReveal>

          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
            <GSAPReveal>
              <div className="feature-card p-4 sm:p-6">
                <h3 className="font-display text-lg sm:text-xl text-foreground mb-2 sm:mb-4">1. Mint Your Digital Key</h3>
                <p className="text-foreground/70 text-xs sm:text-sm">
                  Choose your planet and mint your Digital Key NFT. Each key is an ERC-721 token on the Ethereum blockchain.
                </p>
              </div>
            </GSAPReveal>

            <GSAPReveal delay={100}>
              <div className="feature-card p-4 sm:p-6">
                <h3 className="font-display text-lg sm:text-xl text-foreground mb-2 sm:mb-4">2. Access Your Platform</h3>
                <p className="text-foreground/70 text-xs sm:text-sm">
                  Your Digital Key unlocks access to our trading platform where you can legally trade cannabis through our regulated network.
                </p>
              </div>
            </GSAPReveal>

            <GSAPReveal delay={200}>
              <div className="feature-card p-4 sm:p-6">
                <h3 className="font-display text-lg sm:text-xl text-foreground mb-2 sm:mb-4">3. Build Your Business</h3>
                <p className="text-foreground/70 text-xs sm:text-sm">
                  Create clients, process orders, and earn ETH. The Digital Key holder never comes into contact with the product but is paid for creating clients and orders.
                </p>
              </div>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <GSAPReveal>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 sm:mb-6">
              Ready to Join the <span className="text-primary">Revolution</span>?
            </h2>
            <p className="text-foreground/70 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base px-2">
              Traditionally, entering the cannabis market will cost upwards of $20M USD. Our Digital Key circumvents the large setup costs.
            </p>
            <Link to="/our-story" className="btn-primary text-sm sm:text-base">
              Learn More
            </Link>
          </GSAPReveal>
        </div>
      </section>
    </div>
  );
};

export default DigitalKeys;
