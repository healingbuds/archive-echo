import { useState } from 'react';

interface AgeGateProps {
  onAccept: () => void;
}

const AgeGate = ({ onAccept }: AgeGateProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const handleAccept = () => {
    setIsExiting(true);
    localStorage.setItem('drgreen-age-verified', 'true');
    setTimeout(() => {
      setIsVisible(false);
      onAccept();
    }, 600);
  };

  const handleDecline = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-600 ${isExiting ? 'opacity-0' : 'opacity-100'}`}
      style={{
        background: 'radial-gradient(ellipse at center, rgba(0,20,15,0.97) 0%, rgba(0,0,0,0.99) 100%)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Starfield behind modal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="stars absolute inset-0" />
        <div className="stars1 absolute inset-0" />
      </div>

      <div 
        className={`relative p-10 md:p-14 text-center max-w-lg mx-4 transition-all duration-500 ${isExiting ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}
        style={{
          background: 'rgba(0,0,0,0.85)',
          border: '1px solid hsl(161 100% 42%)',
          borderRadius: '8px',
          boxShadow: `
            0 0 40px hsl(161 100% 42% / 0.25),
            0 0 80px hsl(161 100% 42% / 0.15),
            inset 0 1px 0 hsl(161 100% 42% / 0.1)
          `,
        }}
      >
        <h2 className="font-display text-2xl md:text-3xl text-foreground mb-1" style={{ fontWeight: 400 }}>
          You must be over
        </h2>
        <h2 className="font-display text-2xl md:text-3xl mb-1" style={{ fontWeight: 400 }}>
          <span className="text-primary">18 years old</span>{' '}
          <span className="text-foreground">to use</span>
        </h2>
        <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8" style={{ fontWeight: 400 }}>
          this website
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleAccept}
            className="px-10 py-3 bg-transparent text-foreground tracking-[0.15em] uppercase text-xs border border-primary rounded transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            I'm Over 18
          </button>
          <button 
            onClick={handleDecline}
            className="px-10 py-3 bg-transparent text-foreground/70 tracking-[0.15em] uppercase text-xs border border-foreground/30 rounded transition-all duration-300 hover:border-foreground/50 hover:text-foreground"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
          >
            I'm Under 18
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeGate;
