import { useState, useEffect } from 'react';

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
      className={`age-gate-overlay transition-opacity duration-600 ${isExiting ? 'opacity-0' : 'opacity-100'}`}
    >
      <div 
        className={`age-gate-card transition-all duration-500 ${isExiting ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-2">
          You must be over
        </h2>
        <h2 className="font-display text-3xl md:text-4xl font-medium mb-6">
          <span className="text-primary">18 years old</span>{' '}
          <span className="text-foreground">to use this website</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button 
            onClick={handleAccept}
            className="px-8 py-3 bg-transparent text-foreground font-body font-medium tracking-wider uppercase text-sm border border-primary/60 rounded transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_20px_hsl(161_100%_42%/0.3)]"
          >
            I'm Over 18
          </button>
          <button 
            onClick={handleDecline}
            className="px-8 py-3 bg-transparent text-foreground font-body font-medium tracking-wider uppercase text-sm border border-foreground/30 rounded transition-all duration-300 hover:border-foreground/60"
          >
            I'm Under 18
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgeGate;
