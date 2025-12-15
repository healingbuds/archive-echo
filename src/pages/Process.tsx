import GSAPReveal from '../components/GSAPReveal';

const Process = () => {
  const steps = [
    {
      step: '01',
      title: 'Seed Selection',
      description: 'At the seed stage of cultivation, we employ our own method of plant genome sequencing. The seeds genome is then encrypted into two key-pairs.',
    },
    {
      step: '02',
      title: 'Cultivation',
      description: 'Our world-class facilities in Portugal use state-of-the-art growing techniques to ensure the highest quality cannabis.',
    },
    {
      step: '03',
      title: 'QR Encoding',
      description: 'The public key is written into a QR code that follows the seed through its lifecycle through to the end users packaging.',
    },
    {
      step: '04',
      title: 'Verification',
      description: 'Scanning this code will reveal its journey to the user and can be checked for authenticity against the private key we hold on our servers.',
    },
    {
      step: '05',
      title: 'Distribution',
      description: 'Through our regulated network and Digital Key system, cannabis is distributed legally to markets worldwide.',
    },
    {
      step: '06',
      title: 'Trading',
      description: 'Digital Key holders can trade cannabis through our platform, earning ETH for creating clients and orders.',
    },
  ];

  return (
    <div className="relative pt-32">
      {/* Hero */}
      <section className="story-hero">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <GSAPReveal>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              The <span className="text-primary">Process</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
              From seed to sale, every step is tracked, verified, and secured on the blockchain.
            </p>
          </GSAPReveal>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {steps.map((item, index) => (
              <GSAPReveal key={item.step} delay={index * 100}>
                <div className="flex gap-6 md:gap-8 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full border-2 border-primary/40 flex items-center justify-center">
                    <span className="font-display text-xl text-primary">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-foreground mb-3">{item.title}</h3>
                    <p className="text-foreground/60">{item.description}</p>
                  </div>
                </div>
              </GSAPReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
