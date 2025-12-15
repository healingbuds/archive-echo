import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import homeThumbnail from '@/assets/home-thumbnail.jpg';
import ethereumHq from '@/assets/ethereum-hq-archive.jpg';
import keyPlatinum from '@/assets/key-platinum.jpg';
import keyGold from '@/assets/key-gold.jpg';
import keyDigital from '@/assets/key-digital.jpg';
import keyPlatinum2 from '@/assets/key-platinum-2.png';
import keyGold2 from '@/assets/key-gold-2.png';
import keyDigital2 from '@/assets/key-digital-2.jpg';
import nftChar1 from '@/assets/nft-char-1.png';
import nftChar2 from '@/assets/nft-char-2.png';
import nftChar3 from '@/assets/nft-char-3.png';
import nftChar4 from '@/assets/nft-char-4.png';
import nftChar5 from '@/assets/nft-char-5.png';
import videoLogo from '@/assets/video-logo.svg';
import planetAromatica from '@/assets/planet-aromatica-archive.png';
import planetCannabiscus from '@/assets/planet-cannabiscus-archive.png';
import planetFragraria from '@/assets/planet-fragraria-archive.png';

const Index = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Static countdown display (mint date has passed)
    setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  }, []);
  
  const nftCards = [
    { name: 'Dr. Green Platinum Key', token: 'ERC-721', quantity: '5,145', tier: 'platinum', image: keyPlatinum },
    { name: 'Dr. Green Gold Key', token: 'ERC-721', quantity: '5,145', tier: 'gold', image: keyGold },
    { name: 'Dr. Green Digital Key', token: 'ERC-721', quantity: '5,145', tier: 'standard', image: keyDigital },
    { name: 'Dr. Green Platinum Key', token: 'ERC-721', quantity: '5,145', tier: 'platinum', image: keyPlatinum2 },
    { name: 'Dr. Green Gold Key', token: 'ERC-721', quantity: '5,145', tier: 'gold', image: keyGold2 },
    { name: 'Dr. Green Digital Key', token: 'ERC-721', quantity: '5,145', tier: 'standard', image: keyDigital2 },
  ];

  const nftCharacters = [nftChar1, nftChar2, nftChar3, nftChar4, nftChar5];

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
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/70 to-background" />
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 md:px-8 relative z-10 pt-32 pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="video-container aspect-video mb-12 overflow-hidden group cursor-pointer">
              <div 
                className="w-full h-full bg-cover bg-center flex items-center justify-center relative transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${homeThumbnail})` }}
              >
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/30 transition-colors duration-500" />
                <div className="text-center relative z-10">
                  <img src={videoLogo} alt="Dr. Green" className="w-40 h-40 mx-auto mb-6 drop-shadow-2xl" />
                  <span className="text-xs md:text-sm tracking-[0.5em] text-foreground/70 uppercase font-medium">Digital Key</span>
                  <p className="text-foreground/90 mt-3 text-lg md:text-xl tracking-wide font-light">ON-DEMAND CANNABIS</p>
                  <div className="mt-8 w-16 h-16 mx-auto rounded-full border-2 border-foreground/30 flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                    <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-foreground/80 ml-1" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <div className="flex flex-col items-center gap-2">
                <span className="text-[10px] tracking-[0.4em] text-foreground/40 uppercase">Scroll to explore</span>
                <div className="w-px h-8 bg-gradient-to-b from-foreground/40 to-transparent animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Revolution Section */}
      <section className="py-32 section-gradient">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <ScrollReveal>
              <p className="text-xs tracking-[0.4em] text-primary uppercase mb-4">The Future of Cannabis</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
                Join The <span className="text-primary text-glow">Revolution</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/60 mb-10 leading-relaxed max-w-lg">
                Purchase a Dr. Green Digital Key to start trading cannabis worldwide through our revolutionary blockchain platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/whitepaper" className="btn-primary">
                  Read Whitepaper
                </Link>
                <Link to="/digital-keys" className="btn-outline">
                  View Digital Keys
                </Link>
              </div>
            </ScrollReveal>

            {/* NFT Cards Stack */}
            <ScrollReveal delay={200}>
              <div className="space-y-3">
                {nftCards.slice(0, 3).map((card, index) => (
                  <div 
                    key={`${card.name}-${index}`}
                    className={`nft-card p-5 transition-all duration-300 hover:translate-x-2 ${index === 0 ? 'glow-green border-primary/50' : ''}`}
                  >
                    <div className="flex items-center gap-5">
                      <div 
                        className={`w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0 ${
                          card.tier === 'platinum' ? 'bg-platinum/20 ring-1 ring-platinum/30' :
                          card.tier === 'gold' ? 'bg-gold/20 ring-1 ring-gold/30' : 'bg-primary/20 ring-1 ring-primary/30'
                        }`}
                      >
                        <img 
                          src={card.image} 
                          alt={card.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-display text-lg text-foreground truncate">{card.name}</p>
                        <div className="flex gap-6 mt-2">
                          <div>
                            <p className="text-[10px] uppercase tracking-wider text-foreground/40">Token</p>
                            <p className="text-sm text-foreground/80">{card.token}</p>
                          </div>
                          <div>
                            <p className="text-[10px] uppercase tracking-wider text-foreground/40">Supply</p>
                            <p className="text-sm text-foreground/80">{card.quantity}</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-primary/60 hidden sm:block">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
                <Link to="/digital-keys" className="block text-center text-sm text-primary/80 hover:text-primary transition-colors pt-4">
                  View all Digital Keys →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Planet decorations */}
        <img src={planetAromatica} alt="" className="absolute -left-20 top-10 w-48 opacity-40 pointer-events-none blur-[1px]" />
        <img src={planetCannabiscus} alt="" className="absolute -right-10 top-1/3 w-40 opacity-30 pointer-events-none blur-[1px]" />
        <img src={planetFragraria} alt="" className="absolute left-1/4 -bottom-10 w-32 opacity-25 pointer-events-none blur-[1px]" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <ScrollReveal>
            <div className="countdown-card max-w-4xl mx-auto py-12 px-8">
              <p className="text-xs tracking-[0.4em] text-primary/80 uppercase mb-4">Mint Status</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-2">
                Public Mint <span className="text-primary text-glow">Complete</span>
              </h2>
              <p className="text-foreground/50 mb-8">The mint has ended. Trade on secondary markets.</p>
              
              <div className="grid grid-cols-4 gap-4 md:gap-8 my-10">
                {[
                  { value: countdown.days, label: 'Days' },
                  { value: countdown.hours, label: 'Hours' },
                  { value: countdown.minutes, label: 'Minutes' },
                  { value: countdown.seconds, label: 'Seconds' },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <p className="font-display text-4xl md:text-6xl text-foreground/20">
                      {String(item.value).padStart(2, '0')}
                    </p>
                    <p className="text-[10px] md:text-xs uppercase tracking-wider text-foreground/40 mt-2">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <a href="#" className="btn-outline text-sm">
                  View on OpenSea
                </a>
                <Link to="/digital-keys" className="btn-primary text-sm">
                  Learn More
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Digital Key Benefits */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center mb-20">
              <p className="text-xs tracking-[0.4em] text-primary uppercase mb-4">Why Digital Keys?</p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed">
                Purchasing our Digital Key unlocks the potential for <span className="text-primary">substantial revenue growth</span> from the flourishing cannabis market.
              </h2>
              <p className="text-foreground/50 mt-6 text-lg">
                Gain exclusive access to our sophisticated platform designed for the legal trade of cannabis.
              </p>
            </div>
          </ScrollReveal>

          {/* Our Digital Key */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <ScrollReveal>
              <p className="text-xs tracking-[0.4em] text-primary/80 uppercase mb-3">The Technology</p>
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">
                Our <span className="text-primary text-glow">Digital Key</span>
              </h3>
              <p className="text-foreground/60 leading-relaxed text-lg mb-6">
                Dr. Green combines the Ethereum blockchain, NFT technology and physical cannabis into a solution that allows for accountable, traceable and verified cannabis transactions globally.
              </p>
              <p className="text-foreground/50 leading-relaxed">
                The digital key itself through the use of smart contracts provides our regulated license to the holder, empowering the digital key holder to trade cannabis legally anywhere that cannabis is accepted.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="aspect-square rounded-lg overflow-hidden glow-green-intense group">
                <img 
                  src={ethereumHq} 
                  alt="Dr. Green Digital Key NFT"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-24">
            <ScrollReveal>
              <div className="feature-card h-full p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-display text-2xl text-foreground mb-4">
                  Genetic <span className="text-primary">Traceability</span>
                </h4>
                <p className="text-foreground/60 leading-relaxed">
                  At the seed stage of cultivation, we employ plant genome sequencing. The genome is encrypted into key-pairs — a public key written into a QR code follows the seed through its lifecycle, verifiable against our private key.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="feature-card h-full p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="font-display text-2xl text-foreground mb-4">
                  Spoofing <span className="text-primary">Elimination</span>
                </h4>
                <p className="text-foreground/60 leading-relaxed">
                  Spoofing — when illegal cannabis enters the legal supply chain — is the industry's biggest problem. Our technology verifies authenticity, eliminating black-market cannabis from legal supply using decentralized ETH blockchain.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="feature-card h-full md:col-span-2 p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-display text-2xl text-foreground mb-4">
                  First-of-its-Kind <span className="text-primary">Integration</span>
                </h4>
                <p className="text-foreground/60 leading-relaxed max-w-3xl">
                  Our ERC-721 token builds cannabis licensing into the digital key, allowing holders to trade internationally via our on-demand delivery platform. You never touch the product — just earn ETH for creating clients and orders. Traditional cannabis market entry costs upwards of $20M USD.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Digital Universe & NFT Artwork */}
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="feature-card h-full p-8">
                <h4 className="font-display text-2xl text-foreground mb-4">
                  Digital <span className="text-primary">Universe</span>
                </h4>
                <p className="text-foreground/60 leading-relaxed">
                  We've created a Digital Universe with 20 planets, each featuring unique backstories about culture and inhabitants. The planets contain native cannabis strains, fostering international community collaboration.
                </p>
                <Link to="/universe" className="inline-block mt-4 text-sm text-primary/80 hover:text-primary transition-colors">
                  Explore the Universe →
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="feature-card h-full p-8">
                <h4 className="font-display text-2xl text-foreground mb-4">
                  NFT <span className="text-primary">Artwork</span>
                </h4>
                <p className="text-foreground/60 leading-relaxed">
                  Each digital key represents a unique creature from our universe. Every design is hand-drawn by an EA artist — no traits, just pure unique artistry granting access to planet-specific strains.
                </p>
                <Link to="/nfts" className="inline-block mt-4 text-sm text-primary/80 hover:text-primary transition-colors">
                  View Artwork →
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* NFT Character Showcase */}
          <ScrollReveal delay={200}>
            <div className="mt-20 overflow-hidden rounded-xl">
              <div className="flex gap-6 animate-scroll py-4">
                {[...nftCharacters, ...nftCharacters, ...nftCharacters].map((char, i) => (
                  <div key={i} className="flex-shrink-0 w-28 h-28 md:w-36 md:h-36 rounded-xl overflow-hidden glow-green hover:glow-green-intense transition-all duration-300 hover:scale-105">
                    <img src={char} alt={`NFT Character ${(i % 5) + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* News Section */}
      <section className="py-32 section-gradient">
        <div className="container mx-auto px-4 md:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.4em] text-primary uppercase mb-4">Latest Updates</p>
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
                Dr. Green In The Press
              </h3>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsItems.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <Link to="/news" className="news-card block h-full group">
                  <div className="aspect-video bg-gradient-to-br from-primary/5 via-secondary/20 to-background relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {(item.categories || [item.category]).map((cat) => (
                        <span key={cat} className="text-[10px] uppercase tracking-wider text-primary/90 bg-primary/10 px-2.5 py-1 rounded-full">
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h4 className="font-display text-lg text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-sm text-foreground/50 line-clamp-2 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <span className="inline-block mt-4 text-xs text-primary/70 group-hover:text-primary transition-colors">
                      Read more →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/news" className="btn-outline">
              View All News
            </Link>
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
