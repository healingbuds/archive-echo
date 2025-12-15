import GSAPReveal from '../components/GSAPReveal';

const OurStrains = () => {
  const strains = [
    { name: 'Aromatica', type: 'Hybrid', planet: 'Verdantis', thc: '24%' },
    { name: 'Cannabiscus', type: 'Indica', planet: 'Nebulora', thc: '28%' },
    { name: 'Fragraria', type: 'Sativa', planet: 'Crystallia', thc: '22%' },
    { name: 'Euphoria', type: 'Hybrid', planet: 'Solaris', thc: '26%' },
    { name: 'Serenity', type: 'Indica', planet: 'Lunaria', thc: '30%' },
    { name: 'Vivacity', type: 'Sativa', planet: 'Aurorae', thc: '21%' },
  ];

  return (
    <div className="relative pt-32">
      {/* Hero */}
      <section className="story-hero">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <GSAPReveal>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Our <span className="text-primary">Strains</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
              Each planet in our Digital Universe hosts unique cannabis strains, cultivated with precision and care at our world-class facilities.
            </p>
          </GSAPReveal>
        </div>
      </section>

      {/* Strains Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strains.map((strain, index) => (
              <GSAPReveal key={strain.name} delay={index * 80}>
                <div className="nft-card group cursor-pointer h-full">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-background flex items-center justify-center relative overflow-hidden">
                    <span className="logo-script text-4xl group-hover:scale-110 transition-transform duration-500">
                      {strain.name.charAt(0)}
                    </span>
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {strain.name}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                      <span>Type: <span className="text-primary">{strain.type}</span></span>
                      <span>Planet: <span className="text-foreground">{strain.planet}</span></span>
                      <span>THC: <span className="text-primary">{strain.thc}</span></span>
                    </div>
                  </div>
                </div>
              </GSAPReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Genetic Traceability */}
      <section className="py-24 section-gradient">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <GSAPReveal>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
                Genetic <span className="text-primary">Traceability</span>
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                At the seed stage of cultivation, we employ our own method of plant genome sequencing. The seeds genome is then encrypted into two key-pairs, a public key and a private key. The public key is written into a QR code that follows the seed through its lifecycle through to the end users packaging. Scanning this code will reveal its journey to the user and can be checked for authenticity against the private key we hold on our servers. Meaning the traceability is undeniable and verifiable.
              </p>
            </GSAPReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStrains;
