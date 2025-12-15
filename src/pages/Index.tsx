import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import homeThumbnail from '@/assets/home-thumbnail.jpg';
import ethereumHq from '@/assets/ethereum-hq.jpg';
import nftPlatinum1 from '@/assets/nft-platinum-1.jpg';
import nftGold1 from '@/assets/nft-gold-1.jpg';
import nftDigital1 from '@/assets/nft-digital-1.jpg';
import nftCard1 from '@/assets/nft-card-1.png';
import nftCard2 from '@/assets/nft-card-2.png';
import nftCard3 from '@/assets/nft-card-3.png';
import nftCard4 from '@/assets/nft-card-4.png';
import nftCard5 from '@/assets/nft-card-5.png';
import nftCard6 from '@/assets/nft-card-6.png';
import drGreenLogo from '@/assets/drgreen-logo.svg';

const Index = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Static countdown display (mint date has passed)
    setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  }, []);

  const nftImages = [nftPlatinum1, nftGold1, nftDigital1];
  
  const nftCards = [
    { name: 'Dr. Green Platinum Key', token: 'ERC-721', quantity: '5,145', tier: 'platinum', image: nftPlatinum1 },
    { name: 'Dr. Green Gold Key', token: 'ERC-721', quantity: '5,145', tier: 'gold', image: nftGold1 },
    { name: 'Dr. Green Digital Key', token: 'ERC-721', quantity: '5,145', tier: 'standard', image: nftDigital1 },
  ];

  const newsItems = [
    {
      title: 'Unlocking the Future: Next Steps After Minting Your NFT',
      excerpt: 'Minting your NFT is just the beginning of your journey into a revolutionary platform that combines blockchain technology with the medical cannabis industry.',
      category: 'Dr. Green',
    },
    {
      title: 'Sniper Spotlight with Ricardo Capone from Dr. Green Cannabis',
      excerpt: "For the last five years, we've been involved heavily in the medical cannabis space in Portugal. We have facilities where we grow medical cannabis for distribution.",
      categories: ['Dr. Green', 'NFT', 'Medical Cannabis'],
    },
    {
      title: 'Ricardo Capone: Pioneering Technological Solutions in the Cannabis Industry',
      excerpt: 'Financial setbacks have never deterred billionaire Maximillian White. After losing $39 million in the Cypriot banking collapse, White turned his resilience into a new venture.',
      category: 'Dr. Green',
    },
    {
      title: 'Marlon Wayans Answers Hard-Hitting Questions As He Joins Billionaire In Cannabis Venture',
      excerpt: 'Marlon Wayans has never stepped into a cannabis venture like this. When presented with the offer to do so from Dr. Green, he felt that Dr. Green was the first company to approach him that actually knew what they were doing.',
      categories: ['Cannabis', 'Dr. Green'],
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="hero-section min-h-screen relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${homeThumbnail})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        
        {/* Video Section */}
        <div className="container mx-auto px-4 md:px-8 relative z-10 pt-32">
          <div className="max-w-5xl mx-auto">
            <div className="video-container aspect-video mb-8 overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
                style={{ backgroundImage: `url(${homeThumbnail})` }}
              >
                <div className="absolute inset-0 bg-background/30" />
                <div className="text-center relative z-10">
                  <img src={drGreenLogo} alt="Dr. Green" className="w-32 h-32 mx-auto mb-4" />
                  <span className="text-sm tracking-[0.4em] text-foreground/60 uppercase">Digital Key</span>
                  <p className="text-foreground/80 mt-2">ON-DEMAND CANNABIS</p>
                </div>
              </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <span className="text-xs tracking-[0.3em] text-foreground/40 uppercase">Scroll</span>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Revolution Section */}
      <section className="py-24 section-gradient">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <ScrollReveal>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Join The <strong className="text-primary">Revolution</strong>
              </h1>
              <p className="text-lg text-foreground/70 mb-8">
                Purchase a Dr. Green Digital Key to start trading cannabis worldwide
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="btn-outline">
                  Whitepaper
                </a>
                <a href="#" className="btn-outline">
                  Overview
                </a>
              </div>
            </ScrollReveal>

            {/* NFT Cards Carousel */}
            <ScrollReveal delay={200}>
              <div className="space-y-4">
                {nftCards.map((card, index) => (
                  <div 
                    key={card.name}
                    className={`nft-card p-6 ${index === 0 ? 'glow-green' : ''}`}
                  >
                    <div className="flex items-center gap-4">
                      <div 
                        className={`w-20 h-20 rounded-lg flex items-center justify-center overflow-hidden ${
                          card.tier === 'platinum' ? 'bg-platinum/20' :
                          card.tier === 'gold' ? 'bg-gold/20' : 'bg-primary/20'
                        }`}
                      >
                        <img 
                          src={card.image} 
                          alt={card.name}
                          className="w-full h-full object-cover opacity-80"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-foreground/50 mb-1">Name:</p>
                        <p className="font-medium text-foreground">{card.name}</p>
                        <div className="flex gap-6 mt-2">
                          <div>
                            <p className="text-xs text-foreground/50">Token:</p>
                            <p className="text-sm">{card.token}</p>
                          </div>
                          <div>
                            <p className="text-xs text-foreground/50">Quantity:</p>
                            <p className="text-sm">{card.quantity}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="countdown-card max-w-3xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                PUBLIC MINT <span className="text-primary">LAUNCHES</span> IN:
              </h2>
              
              <div className="grid grid-cols-4 gap-4 my-8">
                {[
                  { value: countdown.days, label: 'DAYS' },
                  { value: countdown.hours, label: 'HOURS' },
                  { value: countdown.minutes, label: 'MINUTES' },
                  { value: countdown.seconds, label: 'SECONDS' },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <p className="text-xs text-foreground/50 mb-2">{item.label}</p>
                    <p className="font-display text-4xl md:text-5xl text-foreground">
                      {String(item.value).padStart(2, '0')}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-foreground/60">
                Greenlist mint will be on <span className="text-primary">December 11th 4pm UTC</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Digital Key Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-center max-w-4xl mx-auto mb-16 leading-relaxed">
              Purchasing our Digital Key unlocks the potential for substantial revenue growth from the flourishing cannabis market. You gain exclusive access to our sophisticated platform designed for the legal trade of cannabis.
            </h2>
          </ScrollReveal>

          {/* Our Digital Key */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <ScrollReveal>
              <h3 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Our <span className="text-primary">Digital Key</span>
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Dr. Green combines the Ethereum blockchain, NFT technology and physical cannabis into a solution that allows for accountable, traceable and verified cannabis transactions globally. Introducing the Dr. Green Digital Key. The cannabis industry lacks traceability, and this product allows regulators to safely open the doors to cannabis distribution. The digital key itself through the use of smart contracts provides our regulated license to the holder, empowering the digital key holder to trade cannabis legally anywhere that cannabis is accepted.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="aspect-square rounded-lg overflow-hidden glow-green">
                <img 
                  src={ethereumHq} 
                  alt="Dr. Green Digital Key NFT"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <ScrollReveal>
              <div className="feature-card h-full">
                <h4 className="font-display text-2xl text-foreground mb-4">
                  Genetic <span className="text-primary">Traceability</span>
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  At the seed stage of cultivation, we employ our own method of plant genome sequencing. The seeds genome is then encrypted into two key-pairs, a public key and a private key. The public key is written into a QR code that follows the seed through its lifecycle through to the end users packaging. Scanning this code will reveal its journey to the user and can be checked for authenticity against the private key we hold on our servers.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="feature-card h-full">
                <h4 className="font-display text-2xl text-foreground mb-4">
                  Spoofing <span className="text-primary">Elimination</span>
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Spoofing is the biggest problem in the cannabis industry. This is when illegal cannabis enters the legal supply chain. Currently there is no product offering to solve this problem. This new technology enables the cannabis to be verified, thus contributing to the elimination of black-market cannabis from the legal supply. Utilising the ETH block chain enables the decentralisation of our data.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="feature-card h-full md:col-span-2">
                <h4 className="font-display text-2xl text-foreground mb-4">
                  First-of-its-Kind <span className="text-primary">Integration</span>
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Providing an ERC-721 token, we can build our cannabis licensing into the digital key and allow any holder to trade cannabis internationally, on chain, via an on-demand delivery platform. We and our partners are regulated, we actually deliver the cannabis to the consumer. The digital key holder never comes into contact with the product but is paid in ETH for creating those clients and orders. Traditionally, entering the cannabis market as an entrepreneur will cost upwards of $20M USD.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Digital Universe & NFT Artwork */}
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="feature-card h-full">
                <h4 className="font-display text-2xl text-foreground mb-4">
                  Digital <span className="text-primary">Universe</span>
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  We aim to build community and foster community collaboration internationally with our product. To achieve this, we have created a "Digital Universe" which can be found on our marketplace. This universe contains 20 planets, each with a unique and fun backstory about its culture and the inhabitants. The planets contain native strains of cannabis.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="feature-card h-full">
                <h4 className="font-display text-2xl text-foreground mb-4">
                  NFT <span className="text-primary">Artwork</span>
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Purchasing a digital key by world gives you access to that planets subset of strains to sell internationally subject to the law in each jurisdiction. The creatures that hail from those worlds are the digital keys and each creature, without using traits, is a unique design that has been hand drawn by an EA artist.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 section-gradient">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] text-primary uppercase mb-2">News / Updates</p>
              <h3 className="font-display text-3xl md:text-4xl text-foreground">
                Dr. Green In The Press
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsItems.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <Link to="/news" className="news-card block h-full group">
                  <div className="aspect-video bg-gradient-to-br from-secondary/30 to-background" />
                  <div className="p-4">
                    <h4 className="font-display text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-foreground/50 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {(item.categories || [item.category]).map((cat) => (
                        <span key={cat} className="text-[10px] text-primary/80 bg-primary/10 px-2 py-1 rounded">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] text-foreground/50 uppercase mb-2">Testimonials</p>
              <h3 className="font-display text-3xl md:text-4xl text-foreground">
                From Our <span className="text-primary">Platinum Partners</span>
              </h3>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="partner-logo w-24 h-12 bg-foreground/10 rounded flex items-center justify-center">
                  <span className="text-xs text-foreground/30">Partner {i}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
