import ScrollReveal from '../components/ScrollReveal';

const NFTs = () => {
  const nftShowcase = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Character #${i + 1}`,
  }));

  return (
    <div className="relative pt-32">
      {/* Hero */}
      <section className="story-hero">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <ScrollReveal>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              NFT <span className="text-primary">Artwork</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
              5,145 distinct characters, each uniquely designed without relying on repetitive traits by our artist who previously developed games for EA.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* NFT Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {nftShowcase.map((nft, index) => (
              <ScrollReveal key={nft.id} delay={index * 50}>
                <div className="nft-card group cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-secondary/40 to-background flex items-center justify-center relative overflow-hidden">
                    <span className="logo-script text-3xl group-hover:scale-110 transition-transform duration-500">
                      DG
                    </span>
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-foreground/60">{nft.name}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Info */}
      <section className="py-24 section-gradient">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
                The <span className="text-primary">Artist</span>
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                Our artist, who previously developed games for EA, including titles like Harry Potter and Medal of Honor, has embarked on designing the graphical characters for Dr. Green's Digital Key project. We have crafted a captivating and unique visual representation that captures the essence of our NFT collection. His unique style comes across in the 5,145 unique pieces we have created for this project.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NFTs;
