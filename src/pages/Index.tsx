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
import keyCardSp2 from '@/assets/key-card-sp2.jpg';
import keyCardGs13 from '@/assets/key-card-gs13.jpg';
import keyCardP20 from '@/assets/key-card-p20.jpg';

// NFT slides - Archive authentic assets
import nftArchive1 from '@/assets/nft-archive-1.png';
import nftArchive2 from '@/assets/nft-archive-2.png';
import nftArchive3 from '@/assets/nft-archive-3.png';
import nftArchive4 from '@/assets/nft-archive-4.png';
import nftArchive5 from '@/assets/nft-archive-5.png';
import nftArchive6 from '@/assets/nft-archive-6.png';
import nftArchive7 from '@/assets/nft-archive-7.png';
import nftArchive8 from '@/assets/nft-archive-8.png';
import nftArchive9 from '@/assets/nft-archive-9.png';
import nftArchive10 from '@/assets/nft-archive-10.png';
import nftArchive11 from '@/assets/nft-archive-11.png';
import nftArchive12 from '@/assets/nft-archive-12.png';
import nftArchive13 from '@/assets/nft-archive-13.png';
import nftArchive14 from '@/assets/nft-archive-14.png';
import nftArchive15 from '@/assets/nft-archive-15.png';
import nftArchive16 from '@/assets/nft-archive-16.png';
import nftArchive17 from '@/assets/nft-archive-17.png';
import nftArchive18 from '@/assets/nft-archive-18.png';
import nftArchive19 from '@/assets/nft-archive-19.png';
import nftArchive20 from '@/assets/nft-archive-20.png';
import nftArchive21 from '@/assets/nft-archive-21.png';
import nftArchive22 from '@/assets/nft-archive-22.png';
import nftArchive24 from '@/assets/nft-archive-24.png';
import nftArchive25 from '@/assets/nft-archive-25.png';
import nftArchive26 from '@/assets/nft-archive-26.png';
import nftArchive27 from '@/assets/nft-archive-27.png';
import nftArchive28 from '@/assets/nft-archive-28.png';
import nftArchive29 from '@/assets/nft-archive-29.png';
import nftArchive30 from '@/assets/nft-archive-30.png';
import nftArchive31 from '@/assets/nft-archive-31.png';
import nftArchive32 from '@/assets/nft-archive-32.png';
import nftArchive33 from '@/assets/nft-archive-33.png';

const Index = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Mint date has passed
    setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  }, []);

  const nftSlides = [
    nftArchive1, nftArchive2, nftArchive3, nftArchive4, nftArchive5, nftArchive6,
    nftArchive7, nftArchive8, nftArchive9, nftArchive10, nftArchive11, nftArchive12,
    nftArchive13, nftArchive14, nftArchive15, nftArchive16, nftArchive17, nftArchive18,
    nftArchive19, nftArchive20, nftArchive21, nftArchive22, nftArchive24, nftArchive25,
    nftArchive26, nftArchive27, nftArchive28, nftArchive29, nftArchive30, nftArchive31,
    nftArchive32, nftArchive33
  ];

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
      <GSAPReveal className="py-20 md:py-28 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] text-foreground mb-6 leading-[1.15]">
                Join The <span className="text-primary">Revolution</span>
              </h1>
              <p className="text-base md:text-lg text-foreground/60 mb-8 leading-relaxed max-w-md">
                Purchase a Dr. Green Digital Key to start trading cannabis worldwide
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/whitepaper" className="btn-primary text-xs px-6 py-2.5 uppercase tracking-wider">
                  Whitepaper
                </Link>
                <Link to="/about-us" className="btn-outline text-xs px-6 py-2.5 uppercase tracking-wider">
                  Overview
                </Link>
              </div>
            </div>

            {/* Stacked Image Cards - Archive Key Cards */}
            <div className="relative h-[400px] md:h-[450px]">
              {/* Top left card - Platinum Key */}
              <div className="absolute left-[10%] top-0 w-[180px] md:w-[220px] rounded-xl overflow-hidden border border-primary/30 shadow-lg">
                <img 
                  src={keyCardSp2} 
                  alt="Dr. Green Platinum Key" 
                  className="w-full h-[140px] md:h-[170px] object-cover grayscale"
                />
              </div>
              {/* Middle center card - Gold Key */}
              <div className="absolute left-[25%] top-[30%] w-[200px] md:w-[260px] rounded-xl overflow-hidden border border-primary/30 shadow-lg z-10">
                <img 
                  src={keyCardGs13} 
                  alt="Dr. Green Gold Key" 
                  className="w-full h-[160px] md:h-[200px] object-cover grayscale"
                />
              </div>
              {/* Right side card - Digital Key */}
              <div className="absolute right-0 top-[15%] w-[160px] md:w-[200px] rounded-xl overflow-hidden border border-primary/30 shadow-lg">
                <img 
                  src={keyCardP20} 
                  alt="Dr. Green Digital Key" 
                  className="w-full h-[280px] md:h-[340px] object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </GSAPReveal>

      {/* Countdown Section */}
      <GSAPReveal className="py-20 relative z-10 overflow-visible">
        {/* Decorative Planets */}
        <img src={aromaticaCountdown} alt="" className="absolute -right-10 top-0 w-20 md:w-32 opacity-80 pointer-events-none" />
        <img src={cannabiscusCountdown} alt="" className="absolute -left-12 top-1/4 w-24 md:w-40 opacity-70 pointer-events-none" />
        <img src={fragrariaCountdown} alt="" className="absolute right-0 bottom-0 w-24 md:w-36 opacity-60 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="countdown-card max-w-3xl mx-auto py-10 px-6 text-center">
            <h2 className="font-display text-xl md:text-2xl text-foreground mb-1">
              PUBLIC MINT <span className="text-primary">LAUNCHES</span> IN:
            </h2>
            
            <div className="grid grid-cols-4 gap-3 md:gap-6 my-8">
              {[
                { value: countdown.days, label: 'DAYS' },
                { value: countdown.hours, label: 'HOURS' },
                { value: countdown.minutes, label: 'MINUTES' },
                { value: countdown.seconds, label: 'SCONDS' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-[9px] tracking-wider text-foreground/50 mb-1">{item.label}</p>
                  <p className="font-display text-3xl md:text-5xl text-foreground/20">
                    {String(item.value).padStart(2, '0')}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-xs md:text-sm text-foreground/70">
              Greenlist mint will be on <span className="text-primary font-medium">December 11th 4pm UTC</span>
            </h3>
          </div>
        </div>
      </GSAPReveal>

      {/* YouTube Preview Section */}
      <GSAPReveal className="py-12 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden bg-card border border-border/30">
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
      <GSAPReveal className="py-20 md:py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-xl md:text-2xl lg:text-3xl text-foreground leading-[1.6]">
              Purchasing our Digital Key unlocks the potential for <span className="text-primary">substantial revenue growth</span> from the flourishing cannabis market. You gain exclusive access to our sophisticated platform designed for the legal trade of cannabis.
            </h2>
          </div>
        </div>
      </GSAPReveal>

      {/* Our Digital Key Section */}
      <GSAPReveal className="py-20 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground mb-6">
                Our <span className="text-primary">Digital Key</span>
              </h3>
              <p className="text-foreground/60 leading-relaxed text-base">
                Dr. Green combines the Ethereum blockchain, NFT technology and physical cannabis into a solution that allows for accountable, traceable and verified cannabis transactions globally. Introducing the Dr. Green Digital Key. The cannabis industry lacks traceability, and this product allows regulators to safely open the doors to cannabis distribution. The digital key itself through the use of smart contracts provides our regulated license to the holder, empowering the digital key holder to trade cannabis legally anywhere that cannabis is accepted.
              </p>
            </div>
            <div className="relative">
              <img 
                src={ethereumHq}
                alt="Dr. Green Digital Key NFT"
                className="w-full max-w-[380px] mx-auto rounded-lg glow-green-intense"
              />
            </div>
          </div>
        </div>

        {/* NFT Character Slider */}
        <div className="mt-12 overflow-hidden">
          <div className="flex animate-scroll">
            {[...nftSlides, ...nftSlides].map((img, idx) => (
              <div key={idx} className="flex-shrink-0 w-[140px] md:w-[180px] mx-1.5">
                <img src={img} alt="" className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </GSAPReveal>

      {/* Genetic Traceability & Spoofing Section */}
      <GSAPReveal className="py-16 relative z-10 overflow-visible">
        {/* Planet decorations */}
        <img src={sweetNirvana} alt="" className="absolute left-0 top-0 w-24 md:w-36 opacity-70 pointer-events-none" />
        <img src={cannavariaWeb} alt="" className="absolute right-0 top-1/3 w-32 md:w-48 opacity-60 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h3 className="font-display text-xl md:text-2xl text-foreground mb-4">
                Genetic <span className="text-primary">Traceability</span>
              </h3>
              <p className="text-foreground/60 leading-relaxed text-sm">
                At the seed stage of cultivation, we employ our own method of plant genome sequencing. The seeds genome is then encrypted into two key-pairs, a public key and a private key. The public key is written into a QR code that follows the seed through its lifecycle through to the end users packaging. Scanning this code will reveal its journey to the user and can be checked for authenticity against the private key we hold on our servers. Meaning the traceability is undeniable and verifiable.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl md:text-2xl text-foreground mb-4">
                Spoofing <span className="text-primary">Elimination</span>
              </h3>
              <p className="text-foreground/60 leading-relaxed text-sm">
                Spoofing is the biggest problem in the cannabis industry. This is when illegal cannabis enters the legal supply chain. Currently there is no product offering to solve this problem. Perpetrators are not able to be caught as once the cannabis is inside legal packaging, it is just a plant in a bag. This new technology enables the cannabis to be verified, thus contributing to the elimination of black-market cannabis from the legal supply. Utilising the ETH block chain enables the decentralisation of our data.
              </p>
            </div>
          </div>
        </div>
      </GSAPReveal>

      {/* First-of-its-Kind Integration */}
      <GSAPReveal className="py-16 relative z-10 overflow-visible">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-6">
                First-of-its-Kind <span className="text-primary">Integration</span>
              </h3>
              <p className="text-foreground/60 leading-relaxed text-sm">
                Providing an ERC-721 token, we can build our cannabis licensing into the digital key and allow any holder to trade cannabis internationally, on chain, via an on-demand delivery platform. We and our partners are regulated, we actually deliver the cannabis to the consumer. The digital key holder never comes into contact with the product but is paid in ETH for creating those clients and orders. Traditionally, entering the cannabis market as an entrepreneur will cost upwards of $20M USD.
              </p>
            </div>
            <div className="relative">
              <img 
                src={citraflora}
                alt="Citraflora Planet"
                className="w-full max-w-[320px] mx-auto"
              />
              {/* Decorative planets */}
              <img src={bluePlanet} alt="" className="absolute -left-8 top-0 w-12 opacity-70" />
              <img src={pinkPlanet} alt="" className="absolute -right-8 top-1/4 w-16 opacity-60" />
              <img src={yellowPlanet} alt="" className="absolute left-1/4 -bottom-8 w-20 opacity-50" />
            </div>
          </div>
        </div>
      </GSAPReveal>

      {/* Digital Universe & NFT Artwork */}
      <GSAPReveal className="py-16 relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h3 className="font-display text-xl md:text-2xl text-foreground mb-4">
                Digital <span className="text-primary">Universe</span>
              </h3>
              <p className="text-foreground/60 leading-relaxed text-sm">
                We aim to build community and foster community collaboration internationally with our product. To achieve this, we have created a "Digital Universe" which can be found on our marketplace. This universe contains 20 planets, each with a unique and fun backstory about its culture and the inhabitants. The planets contain native strains of cannabis.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl md:text-2xl text-foreground mb-4">
                NFT <span className="text-primary">Artwork</span>
              </h3>
              <p className="text-foreground/60 leading-relaxed text-sm">
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
