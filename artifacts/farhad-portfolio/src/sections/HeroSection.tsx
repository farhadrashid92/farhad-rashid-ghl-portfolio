import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/data/config';
import { Button } from '@/components/ui/button';
import { ArrowRight, CircleDot } from 'lucide-react';
import { HeroPattern } from '@/components/HeroPattern';

export function HeroSection() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const badges = ["GoHighLevel", "Automation", "Funnels", "CRM", "AI"];

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-50" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] opacity-50" />
      <HeroPattern />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary w-fit">
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
              <Button size="lg" className="rounded-full px-8 h-12 text-base" onClick={() => scrollTo('#projects')}>
                View My Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base bg-background/50 backdrop-blur" onClick={() => scrollTo('#contact')}>
                Let's Work Together
              </Button>
            </div>
          </motion.div>

          {/* Right Image area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-primary/20 border-dashed animate-[spin_40s_linear_infinite_reverse]" />
              
              {/* Profile Image */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-white/10 bg-card shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10" />
                <img 
                  src="/assets/profile.png" 
                  alt="Farhad Rashid" 
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Badges */}
              {badges.map((badge, i) => {
                const angle = (i * (360 / badges.length)) * (Math.PI / 180);
                const radius = window.innerWidth < 768 ? 160 : 260; // Approximate responsive radius
                
                return (
                  <motion.div
                    key={badge}
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    animate={{ 
                      opacity: 1,
                      x: Math.cos(angle) * radius,
                      y: Math.sin(angle) * radius,
                    }}
                    transition={{ delay: 0.5 + (i * 0.1), duration: 0.8, type: "spring" }}
                    className="absolute top-1/2 left-1/2 -mt-4 -ml-4 glass-card px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium shadow-xl flex items-center gap-2"
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
