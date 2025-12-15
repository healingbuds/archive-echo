import { useEffect, useRef, useCallback } from 'react';

interface MouseParticlesProps {
  particleCount?: number;
  particleColor?: string;
  particleSize?: number;
  sensitivity?: number;
}

const MouseParticles = ({
  particleCount = 50,
  particleColor = 'hsl(161, 100%, 42%)',
  particleSize = 2,
  sensitivity = 0.05,
}: MouseParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    size: number;
    alpha: number;
    vx: number;
    vy: number;
  }>>([]);
  const animationRef = useRef<number>();

  const initParticles = useCallback((width: number, height: number) => {
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        size: Math.random() * particleSize + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
        vx: 0,
        vy: 0,
      });
    }
    particlesRef.current = particles;
  }, [particleCount, particleSize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(canvas.width, canvas.height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Calculate distance from mouse
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        if (distance < maxDistance) {
          // Push particles away from mouse
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          particle.vx -= Math.cos(angle) * force * sensitivity * 10;
          particle.vy -= Math.sin(angle) * force * sensitivity * 10;
        }

        // Return to base position with easing
        particle.vx += (particle.baseX - particle.x) * 0.02;
        particle.vy += (particle.baseY - particle.y) * 0.02;

        // Apply friction
        particle.vx *= 0.95;
        particle.vy *= 0.95;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor.replace(')', `, ${particle.alpha})`).replace('hsl', 'hsla');
        ctx.fill();

        // Draw connections between nearby particles
        particlesRef.current.forEach((other) => {
          const pdx = particle.x - other.x;
          const pdy = particle.y - other.y;
          const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

          if (pdist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = particleColor.replace(')', `, ${0.1 * (1 - pdist / 100)})`).replace('hsl', 'hsla');
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initParticles, particleColor, sensitivity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ opacity: 0.6 }}
    />
  );
};

export default MouseParticles;
