interface SectionBackgroundProps {
  variant?: 'hero' | 'services' | 'projects' | 'automations' | 'about' | 'contact';
}

export function SectionBackground({ variant = 'hero' }: SectionBackgroundProps) {
  // Different variants use lightweight, static accent paths. The hero owns
  // the only moving background gradients; keeping section paths static avoids
  // SVG filter and stroke-dashoffset repaints while scrolling.
  return (
    <div 
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="gradient-primary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary) / 0.3)" />
            <stop offset="50%" stopColor="hsl(var(--primary) / 0.1)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="gradient-accent" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent) / 0.2)" />
            <stop offset="50%" stopColor="hsl(var(--accent) / 0.05)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="gradient-muted" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="hsl(221, 83%, 65% / 0.2)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

        </defs>

        {variant === 'hero' && (
          <g>
            {/* Flowing curve representing initial lead flow */}
            <path
              d="M-100,200 C300,300 400,100 800,400 S1200,600 1600,200"
              fill="none"
              stroke="url(#gradient-primary)"
              strokeWidth="2"
            />
            {/* Automation path */}
            <path
              d="M-100,500 C400,400 600,800 1000,500 S1400,200 1800,600"
              fill="none"
              stroke="url(#gradient-accent)"
              strokeWidth="1.5"
            />
            {/* Follow up loop */}
            <path
              d="M200,-100 C100,300 600,500 800,200 S1000,-100 1400,300"
              fill="none"
              stroke="url(#gradient-muted)"
              strokeWidth="2"
            />
          </g>
        )}

        {variant === 'services' && (
          <g>
            {/* Interconnected web of services */}
            <path
              d="M0,100 Q400,300 800,100 T1600,100"
              fill="none"
              stroke="url(#gradient-primary)"
              strokeWidth="1.5"
            />
            <path
              d="M0,500 Q400,300 800,500 T1600,500"
              fill="none"
              stroke="url(#gradient-accent)"
              strokeWidth="1"
            />
            {/* Vertical connector */}
            <path
              d="M400,0 Q600,400 400,800"
              fill="none"
              stroke="url(#gradient-muted)"
              strokeWidth="2"
            />
            <path
              d="M1200,0 Q1000,400 1200,800"
              fill="none"
              stroke="url(#gradient-muted)"
              strokeWidth="2"
            />
          </g>
        )}

        {variant === 'projects' && (
          <g>
            {/* Dynamic steps for projects */}
            <path
              d="M-200,800 L200,500 L600,700 L1000,300 L1400,600 L1800,200"
              fill="none"
              stroke="url(#gradient-primary)"
              strokeWidth="1.5"
            />
          </g>
        )}

        {variant === 'automations' && (
          <g>
            {/* Circuit-like precise lines for automations */}
            <path
              d="M-100,200 L200,200 L300,400 L800,400 L900,200 L1600,200"
              fill="none"
              stroke="url(#gradient-accent)"
              strokeWidth="2"
            />
            <path
              d="M-100,600 L400,600 L500,800 L1000,800 L1100,600 L1600,600"
              fill="none"
              stroke="url(#gradient-primary)"
              strokeWidth="2"
            />
          </g>
        )}

        {variant === 'about' && (
          <g>
            {/* Organic, personal growth path */}
            <path
              d="M-100,700 C200,700 300,200 800,200 S1200,800 1600,300"
              fill="none"
              stroke="url(#gradient-muted)"
              strokeWidth="2"
            />
          </g>
        )}

        {variant === 'contact' && (
          <g>
            {/* Direct connection lines */}
            <path
              d="M-200,300 Q800,800 1800,300"
              fill="none"
              stroke="url(#gradient-primary)"
              strokeWidth="2"
            />
            <path
              d="M1800,600 Q800,100 -200,600"
              fill="none"
              stroke="url(#gradient-accent)"
              strokeWidth="1.5"
            />
          </g>
        )}
      </svg>
    </div>
  );
}