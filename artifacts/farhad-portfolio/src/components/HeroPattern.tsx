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
        className={`absolute top-[-25%] left-[20%] w-[60vw] h-[60vw] min-w-[500px] min-h-[500px] mix-blend-screen ${shouldAnimate ? 'aurora-1' : ''}`}
        style={{
          background: 'radial-gradient(ellipse at center, rgba(42, 92, 240, 0.55) 0%, rgba(36, 78, 209, 0.22) 38%, transparent 70%)',
          animationDuration: '7s',
          willChange: reducedMotion ? 'auto' : 'transform'
        }}
      />
      
      {/* Aurora Layer 2 - Accent/Reddish tone for depth */}
      <div 
        className={`absolute top-[10%] right-[-15%] w-[70vw] h-[70vw] min-w-[600px] min-h-[600px] mix-blend-screen ${shouldAnimate ? 'aurora-2' : ''}`}
        style={{
          background: 'radial-gradient(ellipse at center, rgba(89, 67, 205, 0.38) 0%, rgba(44, 70, 190, 0.18) 40%, transparent 70%)',
          animationDuration: '9s',
          willChange: reducedMotion ? 'auto' : 'transform'
        }}
      />

      {/* Aurora Layer 3 - Muted Secondary Blue */}
      <div 
        className={`absolute bottom-[-40%] left-[10%] w-[80vw] h-[80vw] min-w-[600px] min-h-[600px] mix-blend-screen ${shouldAnimate ? 'aurora-3' : ''}`}
        style={{
          background: 'radial-gradient(ellipse at center, rgba(40, 128, 235, 0.42) 0%, rgba(42, 99, 224, 0.14) 40%, transparent 70%)',
          animationDuration: '8s',
          willChange: reducedMotion ? 'auto' : 'transform'
        }}
      />

      {/* Restrained curved flowing paths */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1600 900"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hero-grad-primary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#467cfa" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#80b4ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="hero-grad-accent" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6879ec" stopOpacity="0.65" />
            <stop offset="50%" stopColor="#8db7ff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="hero-grad-muted" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="hsl(221 83% 65% / 0.7)" />
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
              strokeDasharray: '240 650',
              animationDuration: '6s',
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
              strokeDasharray: '200 500',
              animationDuration: '7s',
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
              strokeDasharray: '300 700',
              animationDuration: '8s',
            }}
          />
        </g>
      </svg>
      
      {/* Subtle fade to bottom */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(4,8,18,0.55), transparent 65%), linear-gradient(to bottom, transparent 70%, hsl(var(--background)))' }} />
    </div>
  );
}