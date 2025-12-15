import GSAPReveal from '../components/GSAPReveal';

const Whitepaper = () => {
  return (
    <div className="relative pt-32">
      {/* Hero */}
      <section className="story-hero">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <GSAPReveal>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              <span className="text-primary">Whitepaper</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
              Deep dive into the technical architecture, tokenomics, and vision behind Dr. Green Digital Key.
            </p>
            <a 
              href="#" 
              className="btn-primary inline-block"
            >
              Download Whitepaper
            </a>
          </GSAPReveal>
        </div>
      </section>

      {/* Document Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <GSAPReveal>
              <div className="feature-card">
                <h2 className="font-display text-2xl text-foreground mb-6">Document Contents</h2>
                <ul className="space-y-4 text-foreground/70">
                  <li className="flex items-center gap-3">
                    <span className="text-primary">01.</span> Executive Summary
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">02.</span> Market Analysis
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">03.</span> Technology Architecture
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">04.</span> Digital Key Tokenomics
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">05.</span> Regulatory Compliance
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">06.</span> Roadmap
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-primary">07.</span> Team & Partners
                  </li>
                </ul>
              </div>
            </GSAPReveal>

            <GSAPReveal delay={200}>
              <div className="mt-8 feature-card">
                <h2 className="font-display text-2xl text-foreground mb-6">Additional Resources</h2>
                <div className="space-y-4">
                  <a href="#" className="block text-foreground/70 hover:text-primary transition-colors">
                    → Project Overview (PDF)
                  </a>
                  <a href="#" className="block text-foreground/70 hover:text-primary transition-colors">
                    → Technical Documentation
                  </a>
                  <a href="#" className="block text-foreground/70 hover:text-primary transition-colors">
                    → Smart Contract Audit
                  </a>
                </div>
              </div>
            </GSAPReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whitepaper;
