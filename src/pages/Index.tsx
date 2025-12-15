import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GSAPReveal from '@/components/GSAPReveal';

// Archive assets
import homeThumbnail from '@/assets/home-thumbnail.jpg';
import videoLogo from '@/assets/video-logo-archive.svg';
import cardBackground from '@/assets/card-background.png';
import ethereumHq from '@/assets/ethereum-hq-archive.jpg';
import aromaticaCountdown from '@/assets/aromatica-countdown.png';
import cannabiscusCountdown from '@/assets/cannabiscus-countdown.png';
import fragrariaCountdown from '@/assets/fragraria-countdown.png';
import sweetNirvana from '@/assets/sweet-nirvana.png';
import cannavariaWeb from '@/assets/cannavaria-web.png';
import citraflora from '@/assets/citraflora-1.png';
import bluePlanet from '@/assets/blue-planet.svg';
import pinkPlanet from '@/assets/pinkplanet.png';
import yellowPlanet from '@/assets/yellow-planet-new.png';
import dgbanner from '@/assets/dgbanner.jpg';
import capJpg from '@/assets/cap.jpg';

// NFT slides
import nftSlide1 from '@/assets/nft-slide-1.png';
import nftSlide2 from '@/assets/nft-slide-2.png';
import nftSlide3 from '@/assets/nft-slide-3.png';
import nftSlide4 from '@/assets/nft-slide-4.png';
import nftSlide5 from '@/assets/nft-slide-5.png';
import nftSlide6 from '@/assets/nft-slide-6.png';
import nftChar1 from '@/assets/nft-char-1.png';
import nftChar2 from '@/assets/nft-char-2.png';
import nftChar3 from '@/assets/nft-char-3.png';
import nftChar4 from '@/assets/nft-char-4.png';
import nftChar5 from '@/assets/nft-char-5.png';

const Index = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Mint date has passed
    setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  }, []);

  const nftSlides = [nftSlide1, nftSlide2, nftSlide3, nftSlide4, nftSlide5, nftSlide6, nftChar1, nftChar2, nftChar3, nftChar4, nftChar5];

  const newsItems = [
    {
      title: 'Unlocking the Future: Next Steps After Minting Your NFT',
      excerpt: 'Minting your NFT is just the beginning of your journey into a revolutionary platform that combines blockchain technology with the medical cannabis industry.',
      image: dgbanner,
      tag: 'Dr. Green',
    },
    {
      title: 'Sniper Spotlight with Ricardo Capone from Dr. Green Cannabis',
      excerpt: "For the last five years, we've been involved heavily in the medical cannabis space in Portugal.",
      image: capJpg,
      tags: ['Dr. Green', 'NFT', 'Medical Cannabis'],
    },
  ];

  return (
    <div className="relative bg-background text-foreground">
      {/* Starfield Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="stars absolute inset-0" />
        <div className="stars1 absolute inset-0" />
        <div className="stars2 absolute inset-0" />
      </div>

      {/* Hero Section - Full Width Video */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="none"
          poster={homeThumbnail}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <div className="text-overlay-wrapper mb-8">
            <p className="text-[10px] tracking-[0.5em] text-foreground/70 uppercase mb-1">DR. GREEN DIGITAL KEY</p>
            <p className="text-[10px] tracking-[0.5em] text-foreground/70 uppercase">ON-DEMAND CANNABIS</p>
          </div>

          <img 
            src={videoLogo} 
            alt="Dr. Green" 
            className="w-[132px] h-[132px] mx-auto mb-8"
          />

          {/* Scroll indicator */}
          <div className="scroll-indicator mt-16">
            <div className="mouse w-6 h-10 border-2 border-foreground/40 rounded-full mx-auto mb-2 relative">
              <div className="wheel w-1 h-2 bg-foreground/60 rounded-full absolute left-1/2 top-2 -translate-x-1/2 animate-[scroll-wheel_1.5s_ease-in-out_infinite]" />
            </div>
            <p className="text-[10px] tracking-[0.4em] text-foreground/50 uppercase">SCROLL</p>
          </div>
        </div>
      </section>

      {/* Join The Revolution Section */}
      <GSAPReveal className="py-24 md:py-32 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <p className="text-[10px] tracking-[0.4em] text-primary uppercase mb-4">The Future of Cannabis</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-[1.1]">
                Join The <span className="text-primary">Revolution</span>
              </h1>
              <p className="text-lg text-foreground/60 mb-10 leading-relaxed max-w-lg">
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
            </div>

            {/* Card Stack with Background */}
            <div className="relative">
              <img 
                src={cardBackground} 
                alt="" 
                className="w-full max-w-[704px] mx-auto"
              />
            </div>
          </div>
        </div>
      </GSAPReveal>

      {/* Countdown Section */}
      <GSAPReveal className="py-24 relative z-10 overflow-visible">
        {/* Decorative Planets */}
        <img src={aromaticaCountdown} alt="" className="absolute -right-10 top-0 w-24 md:w-40 opacity-80 pointer-events-none" />
        <img src={cannabiscusCountdown} alt="" className="absolute -left-16 top-1/4 w-32 md:w-48 opacity-70 pointer-events-none" />
        <img src={fragrariaCountdown} alt="" className="absolute right-0 bottom-0 w-28 md:w-44 opacity-60 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="countdown-card max-w-4xl mx-auto py-12 px-8 text-center">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-2">
              PUBLIC MINT <span className="text-primary">LAUNCHES</span> IN:
            </h2>
            
            <div className="grid grid-cols-4 gap-4 md:gap-8 my-10">
              {[
                { value: countdown.days, label: 'DAYS' },
                { value: countdown.hours, label: 'HOURS' },
                { value: countdown.minutes, label: 'MINUTES' },
                { value: countdown.seconds, label: 'SCONDS' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-[10px] tracking-wider text-foreground/50 mb-2">{item.label}</p>
                  <p className="font-display text-4xl md:text-6xl text-foreground/20">
                    {String(item.value).padStart(2, '0')}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-sm md:text-base text-foreground/70">
              Greenlist mint will be on <span className="text-primary">December 11th 4pm UTC</span>
            </h3>
          </div>
        </div>
      </GSAPReveal>

      {/* YouTube Preview Section */}
      <GSAPReveal className="py-16 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="aspect-video max-w-5xl mx-auto rounded-lg overflow-hidden bg-card border border-border/30">
            <iframe
              src="https://www.youtube.com/embed/2neQQJx6TgE?mute=1&rel=0"
              title="Dr. Green Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </GSAPReveal>

      {/* Full Screen Text Section */}
      <GSAPReveal className="py-24 md:py-32 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed">
              Purchasing our Digital Key unlocks the potential for <span className="text-primary">substantial revenue growth</span> from the flourishing cannabis market. You gain exclusive access to our sophisticated platform designed for the legal trade of cannabis.
            </h2>
          </div>
        </div>
      </GSAPReveal>

      {/* Our Digital Key Section */}
      <GSAPReveal className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">
                Our <span className="text-primary">Digital Key</span>
              </h3>
              <p className="text-foreground/60 leading-relaxed text-lg">
                Dr. Green combines the Ethereum blockchain, NFT technology and physical cannabis into a solution that allows for accountable, traceable and verified cannabis transactions globally. Introducing the Dr. Green Digital Key. The cannabis industry lacks traceability, and this product allows regulators to safely open the doors to cannabis distribution. The digital key itself through the use of smart contracts provides our regulated license to the holder, empowering the digital key holder to trade cannabis legally anywhere that cannabis is accepted.
              </p>
            </div>
            <div className="relative">
              <img 
                src={ethereumHq}
                alt="Dr. Green Digital Key NFT"
                className="w-full max-w-[442px] mx-auto rounded-lg glow-green-intense"
              />
            </div>
          </div>
        </div>

        {/* NFT Character Slider */}
        <div className="mt-16 overflow-hidden">
          <div className="flex animate-scroll">
            {[...nftSlides, ...nftSlides].map((img, idx) => (
              <div key={idx} className="flex-shrink-0 w-[152px] md:w-[200px] mx-2">
                <img src={img} alt="" className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </GSAPReveal>

      {/* Genetic Traceability & Spoofing Section */}
      <GSAPReveal className="py-24 relative z-10 overflow-visible">
        {/* Planet decorations */}
        <img src={sweetNirvana} alt="" className="absolute left-0 top-0 w-32 md:w-48 opacity-70 pointer-events-none" />
        <img src={cannavariaWeb} alt="" className="absolute right-0 top-1/3 w-40 md:w-64 opacity-60 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                Genetic <span className="text-primary">Traceability</span>
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                At the seed stage of cultivation, we employ our own method of plant genome sequencing. The seeds genome is then encrypted into two key-pairs, a public key and a private key. The public key is written into a QR code that follows the seed through its lifecycle through to the end users packaging. Scanning this code will reveal its journey to the user and can be checked for authenticity against the private key we hold on our servers. Meaning the traceability is undeniable and verifiable.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                Spoofing <span className="text-primary">Elimination</span>
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                Spoofing is the biggest problem in the cannabis industry. This is when illegal cannabis enters the legal supply chain. Currently there is no product offering to solve this problem. Perpetrators are not able to be caught as once the cannabis is inside legal packaging, it is just a plant in a bag. This new technology enables the cannabis to be verified, thus contributing to the elimination of black-market cannabis from the legal supply. Utilising the ETH block chain enables the decentralisation of our data.
              </p>
            </div>
          </div>
        </div>
      </GSAPReveal>

      {/* First-of-its-Kind Integration */}
      <GSAPReveal className="py-24 relative z-10 overflow-visible">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h3 className="font-display text-3xl md:text-4xl text-foreground mb-8">
                First-of-its-Kind <span className="text-primary">Integration</span>
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                Providing an ERC-721 token, we can build our cannabis licensing into the digital key and allow any holder to trade cannabis internationally, on chain, via an on-demand delivery platform. We and our partners are regulated, we actually deliver the cannabis to the consumer. The digital key holder never comes into contact with the product but is paid in ETH for creating those clients and orders. Traditionally, entering the cannabis market as an entrepreneur will cost upwards of $20M USD.
              </p>
            </div>
            <div className="relative">
              <img 
                src={citraflora}
                alt="Citraflora Planet"
                className="w-full max-w-[400px] mx-auto"
              />
              {/* Decorative planets */}
              <img src={bluePlanet} alt="" className="absolute -left-10 top-0 w-16 opacity-70" />
              <img src={pinkPlanet} alt="" className="absolute -right-10 top-1/4 w-20 opacity-60" />
              <img src={yellowPlanet} alt="" className="absolute left-1/4 -bottom-10 w-24 opacity-50" />
            </div>
          </div>
        </div>
      </GSAPReveal>

      {/* Digital Universe & NFT Artwork */}
      <GSAPReveal className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                Digital <span className="text-primary">Universe</span>
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                We aim to build community and foster community collaboration internationally with our product. To achieve this, we have created a "Digital Universe" which can be found on our marketplace. This universe contains 20 planets, each with a unique and fun backstory about its culture and the inhabitants. The planets contain native strains of cannabis.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                NFT <span className="text-primary">Artwork</span>
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                Purchasing a digital key by world gives you access to that planets subset of strains to sell internationally subject to the law in each jurisdiction. The creatures that hail from those worlds are the digital keys and each creature, without using traits, is a unique design that has been hand drawn by an EA artist. His unique style comes across in the 5,145 unique pieces we have created for this project.
              </p>
            </div>
          </div>
        </div>
      </GSAPReveal>

      {/* News Section */}
      <GSAPReveal className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12">
            <p className="text-[10px] tracking-[0.4em] text-primary/80 uppercase mb-2">News / Updates</p>
            <h3 className="font-display text-3xl md:text-4xl text-foreground">Dr. Green In The Press</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {newsItems.map((item, idx) => (
              <article key={idx} className="news-card group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-foreground/60 text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                  <button className="text-sm text-primary hover:text-primary/80 transition-colors uppercase tracking-wider">
                    Read More
                  </button>
                  {item.tag && (
                    <div className="mt-4">
                      <span className="text-[10px] tracking-wider text-foreground/50 uppercase bg-foreground/10 px-3 py-1 rounded">
                        {item.tag}
                      </span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </GSAPReveal>
    </div>
  );
};

export default Index;
