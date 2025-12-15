import GSAPReveal from '@/components/GSAPReveal';

// ARCHIVE-MISSING: Partner logos not available in Wayback Machine archive
// Using text placeholders with original partner names
const partners = [
  'QANALI',
  'CANNABIS BUSINESS AWARDS',
  'JPR MEDIA',
  'REJOLUT',
  'INFARMED',
  'UPCANN',
  'CLOVERLEAF',
  'ALPHAGEEK',
  'LHI CONSULTING'
];

const PartnersSection = () => {
  return (
    <GSAPReveal className="py-16 border-t border-border/10 relative z-10 bg-background/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <p className="text-[10px] tracking-[0.4em] text-foreground/40 uppercase">Our Partners</p>
        </div>
        
        {/* Partner logos row - Archive missing, using text placeholders */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner) => (
            <div 
              key={partner}
              className="text-foreground/30 hover:text-foreground/50 transition-colors duration-300"
            >
              {/* ARCHIVE-MISSING: Logo placeholder */}
              <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </GSAPReveal>
  );
};

export default PartnersSection;
