import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import voodooLogo from '@/assets/voodoo-logo.png';

gsap.registerPlugin(ScrollTrigger);

// ARCHIVE-MISSING: Partner logos not found in Wayback Machine archive (tested multiple URL patterns).
// The original drgreennft.com partner section logos were not captured. Using text placeholders with original partner names.
const partners = [
  'QANALI',
  'CANNABIS BUSINESS AWARDS',
  'JPR MEDIA',
  'REJOLUT',
  'INFARMED',
  'UPCANN',
  'CLOVERLEAF',
  'VOODOO',
  'LHI CONSULTING'
];

const PartnersSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const partnersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const partnersContainer = partnersRef.current;
    if (!section || !partnersContainer) return;

    const partnerItems = partnersContainer.querySelectorAll('.partner-item');
    
    gsap.fromTo(
      partnerItems,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          once: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-16 border-t border-border/10 relative z-10 bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 md:mb-10">
          <p className="text-[9px] md:text-[10px] tracking-[0.4em] text-foreground/40 uppercase">Our Partners</p>
        </div>
        
        {/* Partner logos row - Archive missing, using text placeholders */}
        <div 
          ref={partnersRef}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12"
        >
          {partners.map((partner) => (
            <div 
              key={partner}
              className="partner-item text-foreground/30 hover:text-foreground/50 transition-colors duration-300 px-2"
            >
              {partner === 'VOODOO' ? (
                <img 
                  src={voodooLogo} 
                  alt="Voodoo" 
                  className="h-3 sm:h-3.5 md:h-4 w-auto opacity-40 hover:opacity-70 transition-opacity duration-300"
                />
              ) : (
                <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.15em] md:tracking-[0.2em] uppercase font-medium whitespace-nowrap">
                  {partner}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
