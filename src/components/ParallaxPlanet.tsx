import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxPlanetProps {
  src: string;
  alt?: string;
  className?: string;
  speed?: number; // Parallax speed: positive = slower, negative = faster
  rotate?: boolean;
  rotateSpeed?: number;
}

const ParallaxPlanet = ({
  src,
  alt = '',
  className = '',
  speed = 0.5,
  rotate = false,
  rotateSpeed = 30,
}: ParallaxPlanetProps) => {
  const planetRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const planet = planetRef.current;
    if (!planet) return;

    // Create parallax scroll effect
    const parallaxAnimation = gsap.to(planet, {
      y: () => speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: planet.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    // Optional rotation animation
    let rotationAnimation: gsap.core.Tween | null = null;
    if (rotate) {
      rotationAnimation = gsap.to(planet, {
        rotation: rotateSpeed,
        ease: 'none',
        scrollTrigger: {
          trigger: planet.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      });
    }

    return () => {
      parallaxAnimation.kill();
      if (rotationAnimation) {
        rotationAnimation.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === planet.parentElement) {
          trigger.kill();
        }
      });
    };
  }, [speed, rotate, rotateSpeed]);

  return (
    <img
      ref={planetRef}
      src={src}
      alt={alt}
      className={`pointer-events-none will-change-transform ${className}`}
    />
  );
};

export default ParallaxPlanet;
