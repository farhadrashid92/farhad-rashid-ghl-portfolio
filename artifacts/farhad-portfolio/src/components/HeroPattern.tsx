import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export function HeroPattern() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsVisible(false);
      } else if (containerRef.current) {
        // Re-check visibility
        const rect = containerRef.current.getBoundingClientRect();
        const isInViewport =
          rect.top < (window.innerHeight || document.documentElement.clientHeight) + 100 &&
          rect.bottom > -100;
        setIsVisible(isInViewport);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const shouldAnimate = !reducedMotion && isVisible;

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10" aria-hidden="true">
      {/* Base ambient backdrop */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Aurora Layer 1 - Primary Royal Blue */}
      <div 
        className={`absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] min-w-[500px] min-h-[500px] opacity-40 mix-blend-screen transition-opacity duration-1000 ${shouldAnimate ? 'aurora-1' : ''}`}
        style={{
          background: 'radial-gradient(circle at center, hsl(var(--primary) / 0.18) 0%, hsl(var(--primary) / 0.05) 40%, transparent 70%)',
          willChange: reducedMotion ? 'auto' : 'transform'
        }}
      />
      
      {/* Aurora Layer 2 - Accent/Reddish tone for depth */}
      <div 
        className={`absolute top-[10%] right-[-10%] w-[70vw] h-[70vw] min-w-[600px] min-h-[600px] opacity-25 mix-blend-screen transition-opacity duration-1000 delay-300 ${shouldAnimate ? 'aurora-2' : ''}`}
        style={{
          background: 'radial-gradient(circle at center, hsl(var(--accent) / 0.15) 0%, hsl(var(--accent) / 0.02) 40%, transparent 70%)',
          willChange: reducedMotion ? 'auto' : 'transform'
        }}
      />

      {/* Aurora Layer 3 - Muted Secondary Blue */}
      <div 
        className={`absolute bottom-[-20%] left-[20%] w-[80vw] h-[80vw] min-w-[600px] min-h-[600px] opacity-35 mix-blend-screen transition-opacity duration-1000 delay-500 ${shouldAnimate ? 'aurora-3' : ''}`}
        style={{
          background: 'radial-gradient(circle at center, hsl(221, 83%, 65%) / 0.12) 0%, hsl(221, 83%, 65%) / 0.02 40%, transparent 70%)',
          willChange: reducedMotion ? 'auto' : 'transform'
        }}
      />

      {/* Restrained curved flowing paths */}
      <svg
        className="absolute inset-0 w-full h-full opacity-60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hero-grad-primary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary) / 0.4)" />
            <stop offset="50%" stopColor="hsl(var(--primary) / 0.1)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="hero-grad-accent" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent) / 0.3)" />
            <stop offset="50%" stopColor="hsl(var(--accent) / 0.05)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="hero-grad-muted" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="hsl(221, 83%, 65% / 0.3)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          <filter id="hero-glow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#hero-glow)">
          <path
            d="M-100,200 C300,300 400,100 800,400 S1200,600 1600,200"
            fill="none"
            stroke="url(#hero-grad-primary)"
            strokeWidth="2"
            className="flowing-path"
            style={{
              animationPlayState: shouldAnimate ? 'running' : 'paused',
              strokeDasharray: '400 800',
            }}
          />
          <path
            d="M-100,500 C400,400 600,800 1000,500 S1400,200 1800,600"
            fill="none"
            stroke="url(#hero-grad-accent)"
            strokeWidth="1.5"
            className="flowing-path-reverse"
            style={{
              animationPlayState: shouldAnimate ? 'running' : 'paused',
              strokeDasharray: '300 600',
              animationDelay: '-5s'
            }}
          />
          <path
            d="M200,-100 C100,300 600,500 800,200 S1000,-100 1400,300"
            fill="none"
            stroke="url(#hero-grad-muted)"
            strokeWidth="2"
            className="flowing-path-slow"
            style={{
              animationPlayState: shouldAnimate ? 'running' : 'paused',
              strokeDasharray: '500 1000',
            }}
          />
        </g>
      </svg>
      
      {/* Subtle fade to bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
    </div>
  );
}