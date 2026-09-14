import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

export function HeroPattern() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const pointerX = useRef(0);
  const pointerY = useRef(0);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);
  const reqRef = useRef<number | null>(null);

  useEffect(() => {
    if (reducedMotion) return;
    
    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    if (containerRef.current) observer.observe(containerRef.current);

    const onPointerMove = (e: PointerEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      pointerX.current = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointerY.current = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    };
    
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    let time = 0;
    const animate = () => {
      if (isVisible) {
        time += 0.003;
        if (layer1Ref.current) {
          const tx = Math.sin(time) * 40 + pointerX.current * 30;
          const ty = Math.cos(time * 0.8) * 40 + pointerY.current * 30;
          layer1Ref.current.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${1 + Math.sin(time * 0.5) * 0.05})`;
        }
        if (layer2Ref.current) {
          const tx = Math.cos(time * 1.2) * 50 - pointerX.current * 40;
          const ty = Math.sin(time * 0.9) * 50 - pointerY.current * 40;
          layer2Ref.current.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${1 + Math.cos(time * 0.7) * 0.05})`;
        }
        if (layer3Ref.current) {
          const tx = Math.sin(time * 0.7) * 60 + pointerX.current * 20;
          const ty = Math.cos(time * 1.1) * 60 - pointerY.current * 20;
          layer3Ref.current.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${1 + Math.sin(time * 0.9) * 0.05})`;
        }
      }
      reqRef.current = requestAnimationFrame(animate);
    };
    reqRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
      observer.disconnect();
    };
  }, [reducedMotion]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10" aria-hidden="true">
      {/* Base ambient backdrop */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Aurora Layer 1 - Primary Royal Blue */}
      <div 
        ref={layer1Ref}
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] min-w-[500px] min-h-[500px] opacity-40 mix-blend-screen transition-opacity duration-1000"
        style={{
          background: 'radial-gradient(circle at center, hsl(var(--primary) / 0.18) 0%, hsl(var(--primary) / 0.05) 40%, transparent 70%)',
          willChange: reducedMotion ? 'auto' : 'transform'
        }}
      />
      
      {/* Aurora Layer 2 - Accent/Reddish tone for depth */}
      <div 
        ref={layer2Ref}
        className="absolute top-[10%] right-[-10%] w-[70vw] h-[70vw] min-w-[600px] min-h-[600px] opacity-25 mix-blend-screen transition-opacity duration-1000 delay-300"
        style={{
          background: 'radial-gradient(circle at center, hsl(var(--accent) / 0.15) 0%, hsl(var(--accent) / 0.02) 40%, transparent 70%)',
          willChange: reducedMotion ? 'auto' : 'transform'
        }}
      />

      {/* Aurora Layer 3 - Muted Secondary Blue */}
      <div 
        ref={layer3Ref}
        className="absolute bottom-[-20%] left-[20%] w-[80vw] h-[80vw] min-w-[600px] min-h-[600px] opacity-35 mix-blend-screen transition-opacity duration-1000 delay-500"
        style={{
          background: 'radial-gradient(circle at center, hsl(221, 83%, 65%) / 0.12) 0%, hsl(221, 83%, 65%) / 0.02 40%, transparent 70%)',
          willChange: reducedMotion ? 'auto' : 'transform'
        }}
      />
      
      {/* Subtle fade to bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
    </div>
  );
}
