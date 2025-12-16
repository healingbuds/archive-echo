import { useRef, useEffect } from 'react';
import gsap from 'gsap';

// Import all NFT character images from archive
import nftChar1 from '@/assets/nft-char-0001.png';
import nftChar2 from '@/assets/nft-char-0002.png';
import nftChar3 from '@/assets/nft-char-0003.png';
import nftChar4 from '@/assets/nft-char-0004.png';
import nftChar5 from '@/assets/nft-char-0005.png';
import nftChar6 from '@/assets/nft-char-0006.png';
import nftChar7 from '@/assets/nft-char-0007.png';
import nftChar8 from '@/assets/nft-char-0008.png';
import nftChar9 from '@/assets/nft-char-0009.png';
import nftChar10 from '@/assets/nft-char-0010.png';
import nftChar11 from '@/assets/nft-char-0011.png';
import nftChar12 from '@/assets/nft-char-0012.png';
import nftChar13 from '@/assets/nft-char-0013.png';
import nftChar14 from '@/assets/nft-char-0014.png';
import nftChar15 from '@/assets/nft-char-0015.png';
import nftChar16 from '@/assets/nft-char-0016.png';
import nftChar17 from '@/assets/nft-char-0017.png';
import nftChar18 from '@/assets/nft-char-0018.png';
import nftChar19 from '@/assets/nft-char-0019.png';
import nftChar20 from '@/assets/nft-char-0020.png';
import nftChar21 from '@/assets/nft-char-0021.png';
import nftChar22 from '@/assets/nft-char-0022.png';
import nftChar23 from '@/assets/nft-char-0023.png';
import nftChar25 from '@/assets/nft-char-0025.png';
import nftChar26 from '@/assets/nft-char-0026.png';
import nftChar27 from '@/assets/nft-char-0027.png';
import nftChar28 from '@/assets/nft-char-0028.png';
import nftChar29 from '@/assets/nft-char-0029.png';
import nftChar30 from '@/assets/nft-char-0030.png';
import nftChar31 from '@/assets/nft-char-0031.png';
import nftChar32 from '@/assets/nft-char-0032.png';
import nftChar33 from '@/assets/nft-char-0033.png';
import nftChar34 from '@/assets/nft-char-0034.png';

const nftCharacters = [
  nftChar1, nftChar2, nftChar3, nftChar4, nftChar5, nftChar6,
  nftChar7, nftChar8, nftChar9, nftChar10, nftChar11, nftChar12,
  nftChar13, nftChar14, nftChar15, nftChar16, nftChar17, nftChar18,
  nftChar19, nftChar20, nftChar21, nftChar22, nftChar23, nftChar25,
  nftChar26, nftChar27, nftChar28, nftChar29, nftChar30, nftChar31,
  nftChar32, nftChar33, nftChar34
];

interface NFTCharacterSliderProps {
  className?: string;
}

/**
 * NFT Character Slider - Archive-exact auto-scrolling marquee
 * Matches the original drgreennft.com swiper with:
 * - Continuous auto-scroll (loop)
 * - Speed: 3000ms per full cycle
 * - Free mode (smooth scrolling)
 * - 20px space between slides
 * - Responsive: 5 slides mobile, 8 tablet, 10 desktop, 15 xl
 */
const NFTCharacterSlider = ({ className = '' }: NFTCharacterSliderProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Calculate the width of one set of images
    const slides = track.querySelectorAll('.nft-slide');
    if (slides.length === 0) return;

    // Get total width of first half (original images)
    const halfSlides = Math.floor(slides.length / 2);
    let totalWidth = 0;
    for (let i = 0; i < halfSlides; i++) {
      totalWidth += (slides[i] as HTMLElement).offsetWidth + 20; // 20px gap
    }

    // Set up infinite scroll animation
    animationRef.current = gsap.to(track, {
      x: -totalWidth,
      duration: 40, // Slow, continuous scroll matching archive feel
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth)
      }
    });

    // Pause on hover (optional, matching archive behavior)
    const handleMouseEnter = () => animationRef.current?.pause();
    const handleMouseLeave = () => animationRef.current?.resume();

    track.addEventListener('mouseenter', handleMouseEnter);
    track.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      animationRef.current?.kill();
      track.removeEventListener('mouseenter', handleMouseEnter);
      track.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Double the images for seamless loop
  const allSlides = [...nftCharacters, ...nftCharacters];

  return (
    <div className={`nft-character-slider overflow-hidden ${className}`}>
      <div 
        ref={trackRef}
        className="flex items-end gap-5"
        style={{ willChange: 'transform' }}
      >
        {allSlides.map((img, idx) => (
          <div 
            key={idx} 
            className="nft-slide flex-shrink-0 group cursor-pointer"
            style={{ width: 'clamp(76px, 15vw, 190px)' }}
          >
            <img 
              src={img} 
              alt="" 
              className="w-full h-auto grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500 ease-out"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)'
              }}
              loading="lazy"
              width={304}
              height={440}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTCharacterSlider;
