import GSAPReveal from '../components/GSAPReveal';

const OurStory = () => {
  const archetypes = [
    {
      title: 'The Capitalist',
      description: 'If a standard NFT holder wants to sell cannabis from another world. For example, they hold an NFT from planet A, but have clients that are interested in weed from planet B. There are 3 ways this can be achieved: They can simply buy and mint an NFT from the other world and have access to those strains on their platform.',
    },
    {
      title: 'The Diplomat',
      description: 'You can chat in our Discord and Telegram groups for "Joining Forces" and create an alliance with a holder from planet B. The two of you agree a profit share and sign the agreement with their wallets. This creates a new Smart Contract on the chain that sees the deal honoured.',
    },
    {
      title: 'The Warlord',
      description: 'You are stepping into a Web3 RPG game where your NFT character takes center stage. The game incorporates worlds from our digital universe, allowing you to build weed farms and armies for their protection. You can deploy your army to attack other planets.',
    },
  ];

  return (
    <div className="relative pt-32">
      {/* Hero */}
      <section className="story-hero min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <GSAPReveal>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8">
              Our <span className="text-primary">Story</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
              With several world-renowned facilities in Portugal, Dr. Green stands as a leader in the cannabis industry, boasting unparalleled growing prowess and exclusive government partnerships in new territories. More than a business, Dr. Green symbolizes a significant impact on the evolving cannabis landscape.
            </p>
            <p className="text-lg md:text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed mt-6">
              We are offering a unique opportunity to collaborate with the world's premier cannabis grower and distributor; using our innovative Digital Key smart contract to allow anyone to trade cannabis legally. Dr. Green Digital Key invites you to join us in shaping the future of global cannabis trade.
            </p>
          </GSAPReveal>
        </div>
      </section>

      {/* Digital Key Designation */}
      <section className="story-section section-gradient">
        <div className="container mx-auto px-4 md:px-8">
          <GSAPReveal>
            <h2 className="font-display text-3xl md:text-4xl text-foreground text-center mb-16">
              DIGITAL KEY <span className="text-primary">DESIGNATION</span>
            </h2>
          </GSAPReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <GSAPReveal>
              <div className="feature-card text-center h-full">
                <h3 className="font-display text-xl text-foreground mb-4">5,000 Standard NFTs</h3>
                <p className="text-sm text-foreground/60">
                  These are planet based and have the ability to trade the strains of weed native to their home planet. These will be for public sale.
                </p>
              </div>
            </GSAPReveal>

            <GSAPReveal delay={100}>
              <div className="feature-card text-center h-full border-gold/30">
                <h3 className="font-display text-xl text-gold mb-4">75 Gold NFTs</h3>
                <p className="text-sm text-foreground/60">
                  These are for our KOLs, Influencers and people associated to the project. These NFTs have the benefit of being "Gods" they can travel the universe and sell cannabis from any planet.
                </p>
              </div>
            </GSAPReveal>

            <GSAPReveal delay={200}>
              <div className="feature-card text-center h-full border-platinum/30">
                <h3 className="font-display text-xl text-platinum mb-4">70 Platinum NFTs</h3>
                <p className="text-sm text-foreground/60">
                  These are for our highly influential partners. They have the addition of being included in our brand partnerships. An example of that would be the Jacob&Co "Dr. Green Edition" watch.
                </p>
              </div>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* Minting Your Digital Key */}
      <section className="story-section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <GSAPReveal>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
                Minting Your <span className="text-primary">Digital Key</span>
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                The public mint will allow 250 Digital Keys to be minted on each planet. The standard Key will cost $10k to mint. In addition to the 250 standard Digital Keys on each world, we have hidden one Platinum Key on each planet. This Platinum Key will empower one lucky minter to start their business venture off with a bang. They will be given the full celebrity treatment, having a staff member assigned to them aiding their administration and crafting their own strain of cannabis with our master growers, subject to our terms and conditions.
              </p>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* Artwork Design */}
      <section className="story-section section-gradient">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <GSAPReveal>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
                Digital Key <span className="text-primary">ARTWORK DESIGN</span>
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                Our artist, who previously developed games for EA, including titles like Harry Potter and Medal of Honor, has embarked on designing the graphical characters for Dr. Green's Digital Key project. We have crafted a captivating and unique visual representation that captures the essence of our NFT collection. This series will feature 5,145 distinct characters, each uniquely designed without relying on repetitive traits.
              </p>
            </GSAPReveal>
          </div>
        </div>
      </section>

      {/* Character Archetypes */}
      <section className="story-section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-24 max-w-4xl mx-auto">
            {archetypes.map((archetype, index) => (
              <GSAPReveal key={archetype.title} delay={index * 100}>
                <div className={`${index % 2 === 1 ? 'md:text-right' : ''}`}>
                  <h3 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                    The <span className="text-primary">{archetype.title.split(' ')[1]}</span>
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {archetype.description}
                  </p>
                </div>
              </GSAPReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Launch Party */}
      <section className="story-section section-gradient">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <GSAPReveal>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
                LAUNCH <span className="text-primary">PARTY</span>
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                The unveiling of our Digital Key promises to be the year's most thrilling event, set against the breathtaking, ultramodern skyline of Dubai. This exclusive launch party will be an exceptional blend of innovation, luxury, and entertainment, capturing the spirit of a pioneering venture in the digital art arena. Upon arrival, guests will be treated to a spectacular exhibition of digital art, featuring our unique pieces that marry artistic brilliance with advanced technology. The atmosphere will buzz with excitement as attendees receive an exclusive preview of the collection before its official release, signifying a landmark moment for both the art scene and the evolving cannabis culture.
              </p>
            </GSAPReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
