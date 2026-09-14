import { motion, useReducedMotion } from 'framer-motion';
import { SITE_CONFIG } from '@/data/config';
import { Button } from '@/components/ui/button';
import { ArrowRight, CircleDot } from 'lucide-react';
import { HeroPattern } from '@/components/HeroPattern';

export function HeroSection() {
  const reducedMotion = useReducedMotion();

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const badges = ["GoHighLevel", "Automation", "Funnels", "CRM", "AI"];

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-20 pb-16 overflow-hidden">
      <HeroPattern />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary w-fit shadow-[0_0_15px_hsl(var(--primary)/0.15)]">
              <CircleDot className="w-4 h-4 animate-pulse" />
              <span className="text-sm font-medium tracking-wide">Available for GHL Projects</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              I Build GoHighLevel Systems That <span className="text-gradient-primary">Automate Growth</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
              Funnels. Automations. CRM. AI. Built Inside GoHighLevel.
            </h2>
            
            <p className="text-lg text-muted-foreground/80 max-w-xl leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-shadow" onClick={() => scrollTo('#projects')}>
                View My Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base glass-card border-white/10 hover:bg-white/5" onClick={() => scrollTo('#contact')}>
                Let's Work Together
              </Button>
            </div>
          </motion.div>

          {/* Right Image area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] mx-auto lg:ml-auto lg:mr-8">
              {/* Elegant glow behind portrait */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[60px] opacity-60 mix-blend-screen" />
              
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border border-primary/20" />
              <div 
                className="absolute inset-4 rounded-full border border-primary/30 border-dashed"
                style={{ 
                  animation: 'spin 60s linear infinite reverse',
                  animationPlayState: reducedMotion ? 'paused' : 'running'
                }} 
              />
              
              {/* Profile Image */}
              <div className="absolute inset-8 rounded-full overflow-hidden border border-white/10 bg-card shadow-2xl z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent z-10 pointer-events-none mix-blend-overlay" />
                <img 
                  src="/assets/profile.png" 
                  alt="Farhad Rashid" 
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Badges */}
              {badges.map((badge, i) => {
                const positions = [
                  { top: '15%', left: '-5%' },
                  { top: '10%', right: '-5%' },
                  { bottom: '25%', left: '0%' },
                  { bottom: '15%', right: '5%' },
                  { top: '0%', left: '35%' },
                ];
                const pos = positions[i];
                
                return (
                  <motion.div
                    key={badge}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1,
                      scale: 1,
                      y: reducedMotion ? 0 : [0, -8, 0]
                    }}
                    transition={{ 
                      opacity: { delay: 0.6 + (i * 0.1), duration: 0.6 },
                      scale: { delay: 0.6 + (i * 0.1), duration: 0.6, type: "spring" },
                      y: { 
                        repeat: Infinity, 
                        duration: 4 + i, 
                        ease: "easeInOut",
                        delay: i * 0.4
                      }
                    }}
                    className="absolute z-20 glass-card px-3 py-1.5 sm:px-4 sm:py-2 rounded-full whitespace-nowrap text-[11px] sm:text-xs md:text-sm font-medium shadow-xl flex items-center gap-2 border border-white/10 bg-background/60 backdrop-blur-md"
                    style={pos}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {badge}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
