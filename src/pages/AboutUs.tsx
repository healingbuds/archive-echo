import GSAPReveal from '../components/GSAPReveal';
import ricardoImg from '../assets/ricardo.jpg';

const AboutUs = () => {
  return (
    <div className="relative pt-32">
      {/* Hero */}
      <section className="story-hero">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <GSAPReveal>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              About <span className="text-primary">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
              Dr. Green stands at the forefront of the cannabis revolution, combining cutting-edge blockchain technology with premium cannabis cultivation.
            </p>
          </GSAPReveal>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <GSAPReveal>
            <div className="max-w-6xl mx-auto">
              <img 
                src={ricardoImg} 
                alt="Dr. Green Team" 
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </GSAPReveal>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-24">
            <GSAPReveal>
              <div className="prose prose-invert prose-lg">
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                  Our <span className="text-primary">Mission</span>
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  With several world-renowned facilities in Portugal, Dr. Green stands as a leader in the cannabis industry, boasting unparalleled growing prowess and exclusive government partnerships in new territories. More than a business, Dr. Green symbolizes a significant impact on the evolving cannabis landscape.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  We are offering a unique opportunity to collaborate with the world's premier cannabis grower and distributor; using our innovative Digital Key smart contract to allow anyone to trade cannabis legally.
                </p>
              </div>
            </GSAPReveal>

            <GSAPReveal delay={100}>
              <div className="prose prose-invert prose-lg">
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                  Our <span className="text-primary">Vision</span>
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  Dr. Green Digital Key invites you to join us in shaping the future of global cannabis trade. Our vision extends beyond traditional boundaries, leveraging blockchain technology to create a transparent, traceable, and legally compliant ecosystem for cannabis distribution worldwide.
                </p>
              </div>
            </GSAPReveal>

            <GSAPReveal delay={200}>
              <div className="prose prose-invert prose-lg">
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                  The <span className="text-primary">Technology</span>
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  Dr. Green combines the Ethereum blockchain, NFT technology and physical cannabis into a solution that allows for accountable, traceable and verified cannabis transactions globally. The cannabis industry lacks traceability, and this product allows regulators to safely open the doors to cannabis distribution.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  The digital key itself through the use of smart contracts provides our regulated license to the holder, empowering the digital key holder to trade cannabis legally anywhere that cannabis is accepted.
                </p>
              </div>
            </GSAPReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
