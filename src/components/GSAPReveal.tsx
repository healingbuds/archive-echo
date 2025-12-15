import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GSAPRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  stagger?: number;
}

const GSAPReveal = ({ 
  children, 
  className = '', 
  delay = 0,
  y = 30,
  duration = 1,
}: GSAPRevealProps) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state
    gsap.set(element, {
      opacity: 0,
      y: y,
    });

    // Create scroll trigger animation
    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: duration,
      delay: delay / 1000, // Convert ms to seconds
      ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        once: true,
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [delay, y, duration]);

  return (
    <section ref={elementRef} className={className}>
      {children}
    </section>
  );
};

export default GSAPReveal;
