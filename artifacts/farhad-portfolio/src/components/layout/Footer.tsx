import { SITE_CONFIG } from '@/data/config';
import { Linkedin, Github } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  // Request asks for 2026 copyright
  const year = 2026;

  return (
    <footer className="border-t border-border bg-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">{SITE_CONFIG.name}</h3>
            <p className="text-primary font-medium mb-2">{SITE_CONFIG.title}</p>
            <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold">
              {SITE_CONFIG.secondaryTitle}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              <a 
                href={SITE_CONFIG.socials.linkedin} 
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={SITE_CONFIG.socials.github} 
                className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex gap-6 mt-2">
              <a href="#home" className="text-sm text-muted-foreground hover:text-white transition-colors">Home</a>
              <a href="#services" className="text-sm text-muted-foreground hover:text-white transition-colors">Services</a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-white transition-colors">Projects</a>
              <a href="#experience" className="text-sm text-muted-foreground hover:text-white transition-colors">Experience</a>
            </div>

            <div className="flex flex-col sm:flex-row items-center md:items-end gap-2 text-sm">
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-muted-foreground hover:text-white transition-colors">
                {SITE_CONFIG.email}
              </a>
              <span className="hidden sm:inline text-muted-foreground/50">•</span>
              <a href={`tel:${SITE_CONFIG.phone}`} className="text-muted-foreground hover:text-white transition-colors">
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {year} {SITE_CONFIG.name}. All rights reserved.</p>
          <p>Built exclusively for GoHighLevel.</p>
        </div>
      </div>
    </footer>
  );
}
