import GSAPReveal, { TextRotateReveal } from '../components/GSAPReveal';
import ParallaxPlanet from '../components/ParallaxPlanet';

// Archive planet images
import planetAromatica from '@/assets/planet-aromatica.png';
import planetCannabiscus from '@/assets/planet-cannabiscus.png';
import planetFragraria from '@/assets/planet-fragraria.png';
import planetViridescia from '@/assets/planet-viridescia.png';
import sweetNirvana from '@/assets/sweet-nirvana.png';
import cannavariaWeb from '@/assets/cannavaria-web.png';
import citraflora from '@/assets/citraflora-1.png';

const planets = [
  { 
    name: 'Aromatica', 
    image: planetAromatica,
    description: 'A fragrant world where aromatic cannabis strains flourish under twin suns. The inhabitants have developed unique cultivation techniques passed down through generations.',
    strains: ['Aromatic Haze', 'Sun Kiss', 'Twin Dawn']
  },
  { 
    name: 'Cannabiscus', 
    image: planetCannabiscus,
    description: 'A tropical paradise planet covered in lush jungles where the most potent hybrid strains grow wild among flowering cannabiscus plants.',
    strains: ['Jungle Mist', 'Tropical Thunder', 'Paradise Bloom']
  },
  { 
    name: 'Fragraria', 
    image: planetFragraria,
    description: 'Known for its berry-scented atmosphere, Fragraria produces strains with distinctly fruity terpene profiles beloved across the universe.',
    strains: ['Berry Bliss', 'Fragrant Fields', 'Sweet Essence']
  },
  { 
    name: 'Viridescia', 
    image: planetViridescia,
    description: 'An ancient world of deep green forests where medicinal cannabis strains with powerful healing properties are cultivated by wise elders.',
    strains: ['Healer\'s Touch', 'Forest Spirit', 'Elder\'s Wisdom']
  },
  { 
    name: 'Sweet Nirvana', 
    image: sweetNirvana,
    description: 'A blissful realm where the sweetest indica strains are grown in peaceful gardens, known for their relaxing and euphoric effects.',
    strains: ['Bliss Cloud', 'Nirvana Dream', 'Sweet Serenity']
  },
  { 
    name: 'Cannavaria', 
    image: cannavariaWeb,
    description: 'A diverse world featuring every variety of cannabis known to exist. Scientists from across galaxies come to study its genetic diversity.',
    strains: ['Genetic Wonder', 'Diversity Gold', 'Universal Blend']
  },
  { 
    name: 'Citraflora', 
    image: citraflora,
    description: 'Bathed in citrus-colored light, this planet specializes in zesty, energizing sativa strains that invigorate mind and body.',
    strains: ['Citrus Burst', 'Solar Flare', 'Morning Zest']
  },
];

const Universe = () => {
  return (
    <div className="relative pt-24 sm:pt-28 md:pt-32">
      {/* Hero */}
      <section className="story-hero min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] relative overflow-hidden">
        {/* Floating planets decoration */}
        <ParallaxPlanet src={planetAromatica} className="absolute -right-10 top-20 w-24 sm:w-32 md:w-48 opacity-40" speed={0.3} rotate />
        <ParallaxPlanet src={planetCannabiscus} className="absolute -left-8 bottom-20 w-20 sm:w-28 md:w-40 opacity-30" speed={0.5} rotate rotateSpeed={-15} />
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
          <GSAPReveal>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-4 sm:mb-6">
              Digital <span className="text-primary">Universe</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 max-w-3xl mx-auto px-2">
              We aim to build community and foster community collaboration internationally with our product. To achieve this, we have created a "Digital Universe" which contains 20 planets, each with a unique and fun backstory about its culture and the inhabitants.
            </p>
          </GSAPReveal>
        </div>
      </section>

      {/* Planets Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <GSAPReveal>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground text-center mb-10 sm:mb-12 md:mb-16">
              Explore the <span className="text-primary">Planets</span>
            </h2>
          </GSAPReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {planets.map((planet, index) => (
              <GSAPReveal key={planet.name} delay={index * 80}>
                <div className="feature-card h-full group cursor-pointer overflow-hidden">
                  {/* Planet Image */}
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gradient-to-b from-primary/10 to-transparent">
                    <img 
                      src={planet.image} 
                      alt={planet.name}
                      className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 sm:p-6">
                    <h3 className="font-display text-xl sm:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {planet.name}
                    </h3>
                    <p className="text-foreground/60 text-xs sm:text-sm leading-relaxed mb-4">
                      {planet.description}
                    </p>
                    
                    {/* Native Strains */}
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-foreground/40 mb-2">Native Strains:</p>
                      <div className="flex flex-wrap gap-2">
                        {planet.strains.map((strain) => (
                          <span 
                            key={strain}
                            className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary/80"
                          >
                            {strain}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </GSAPReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lore Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 section-gradient relative overflow-hidden">
        <ParallaxPlanet src={planetFragraria} className="absolute -right-16 top-1/4 w-32 md:w-48 opacity-30" speed={0.4} rotate />
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <TextRotateReveal>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 sm:mb-6 md:mb-8">
                The <span className="text-primary">Lore</span>
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                The planets contain native strains of cannabis. Each world has developed its own unique varieties over millennia, influenced by their distinct environments, atmospheres, and the cosmic energies that flow through them.
              </p>
              <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                Purchasing a digital key by world gives you access to that planet's subset of strains to sell internationally subject to the law in each jurisdiction. The creatures that hail from those worlds are the digital keys and each creature, without using traits, is a unique design that has been hand drawn by an EA artist.
              </p>
            </TextRotateReveal>
          </div>
        </div>
      </section>

      {/* NFT Artwork Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <TextRotateReveal>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-foreground mb-4">
                NFT <span className="text-primary">Artwork</span>
              </h3>
              <p className="text-foreground/60 leading-relaxed text-sm sm:text-base">
                Purchasing a digital key by world gives you access to that planets subset of strains to sell internationally subject to the law in each jurisdiction. The creatures that hail from those worlds are the digital keys and each creature, without using traits, is a unique design that has been hand drawn by an EA artist. His unique style comes across in the 5,145 unique pieces we have created for this project.
              </p>
            </TextRotateReveal>
            
            <GSAPReveal delay={100}>
              <div className="relative">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={planetViridescia}
                  className="w-full max-w-md mx-auto rounded-lg"
                >
                  <source src="/videos/viridescia.mp4" type="video/mp4" />
                </video>
              </div>
            </GSAPReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Universe;
