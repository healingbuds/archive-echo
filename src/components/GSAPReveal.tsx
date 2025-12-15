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
  as?: keyof JSX.IntrinsicElements;
}

const GSAPReveal = ({ 
  children, 
  className = '', 
  delay = 0,
  y = 30,
  duration = 1,
  stagger = 0.1,
  as: Component = 'section',
}: GSAPRevealProps) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Custom easing matching the canonical spec
    const customEase = 'power2.out';

    // Get all direct children or animatable elements
    const animatableElements = element.querySelectorAll(
      'h1, h2, h3, h4, p, .animate-item, img, .btn-primary, .btn-outline, a[class*="btn"], button'
    );

    if (animatableElements.length > 0) {
      // Set initial state for all animatable elements
      gsap.set(animatableElements, {
        opacity: 0,
        y: y,
      });

      // Create staggered scroll trigger animation
      gsap.to(animatableElements, {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay / 1000,
        stagger: stagger,
        ease: customEase,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          once: true,
        },
      });
    } else {
      // Fallback: animate the container itself
      gsap.set(element, {
        opacity: 0,
        y: y,
      });

      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay / 1000,
        ease: customEase,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          once: true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [delay, y, duration, stagger]);

  const ElementComponent = Component as any;

  return (
    <ElementComponent ref={elementRef} className={className}>
      {children}
    </ElementComponent>
  );
};

export default GSAPReveal;

// Additional component for reveal animations on individual elements
export const RevealElement = ({ 
  children, 
  className = '', 
  delay = 0,
  y = 30,
  duration = 0.9,
  scale = 1,
  as: Component = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  scale?: number;
  as?: keyof JSX.IntrinsicElements;
}) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.set(element, {
      opacity: 0,
      y: y,
      scale: scale !== 1 ? 0.95 : 1,
    });

    gsap.to(element, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: duration,
      delay: delay / 1000,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [delay, y, duration, scale]);

  const ElementComponent = Component as any;

  return (
    <ElementComponent ref={elementRef} className={className}>
      {children}
    </ElementComponent>
  );
};
