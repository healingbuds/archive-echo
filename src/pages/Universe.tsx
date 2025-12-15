import GSAPReveal from '../components/GSAPReveal';

const Universe = () => {
  const planets = [
    { name: 'Verdantis', description: 'A lush world of eternal spring, home to the Aromatica strain.' },
    { name: 'Nebulora', description: 'Shrouded in cosmic mists, birthplace of the rare Cannabiscus.' },
    { name: 'Crystallia', description: 'A planet of crystalline structures, where Fragraria thrives.' },
    { name: 'Solaris', description: 'Bathed in golden light, nurturing the Euphoria strain.' },
    { name: 'Lunaria', description: 'A moon-touched world where Serenity grows in silver gardens.' },
    { name: 'Aurorae', description: 'Dancing lights illuminate the Vivacity fields.' },
  ];

  return (
    <div className="relative pt-32">
      {/* Hero */}
      <section className="story-hero min-h-[70vh]">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <GSAPReveal>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              Digital <span className="text-primary">Universe</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
              We aim to build community and foster community collaboration internationally with our product. To achieve this, we have created a "Digital Universe" which contains 20 planets, each with a unique and fun backstory about its culture and the inhabitants.
            </p>
          </GSAPReveal>
        </div>
      </section>

      {/* Planets */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <GSAPReveal>
            <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-16">
              Explore the <span className="text-primary">Planets</span>
            </h2>
          </GSAPReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planets.map((planet, index) => (
              <GSAPReveal key={planet.name} delay={index * 80}>
                <div className="feature-card h-full group cursor-pointer">
                  <div className="w-20 h-20 rounded-full bg-primary/20 mb-6 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <span className="font-display text-2xl text-primary">{planet.name.charAt(0)}</span>
                  </div>
                  <h3 className="font-display text-2xl text-foreground text-center mb-4 group-hover:text-primary transition-colors">
                    {planet.name}
                  </h3>
                  <p className="text-foreground/60 text-sm text-center">
                    {planet.description}
                  </p>
                </div>
              </GSAPReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lore Section */}
      <section className="py-24 section-gradient">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <GSAPReveal>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
                The <span className="text-primary">Lore</span>
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-6">
                The planets contain native strains of cannabis. Each world has developed its own unique varieties over millennia, influenced by their distinct environments, atmospheres, and the cosmic energies that flow through them.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Purchasing a digital key by world gives you access to that planet's subset of strains to sell internationally subject to the law in each jurisdiction. The creatures that hail from those worlds are the digital keys and each creature, without using traits, is a unique design that has been hand drawn by an EA artist.
              </p>
            </GSAPReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Universe;
