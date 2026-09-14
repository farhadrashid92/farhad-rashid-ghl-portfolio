import { useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/sections/HeroSection';
import { StatsSection } from '@/sections/StatsSection';
import { AboutSection } from '@/sections/AboutSection';
import { ServicesSection } from '@/sections/ServicesSection';
import { SkillsSection } from '@/sections/SkillsSection';
import { ProjectsSection } from '@/sections/ProjectsSection';
import { AutomationsSection } from '@/sections/AutomationsSection';
import { BeyondFunnelsSection } from '@/sections/BeyondFunnelsSection';
import { ExperienceSection } from '@/sections/ExperienceSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { AdditionalSections } from '@/sections/AdditionalSections';
import { SITE_CONFIG } from '@/data/config';
import { ContactDock } from '@/components/ContactDock';

export default function Home() {
  useEffect(() => {
    // Update document title dynamically
    document.title = SITE_CONFIG.ogTitle;
    
    // Add meta tags if needed
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', SITE_CONFIG.ogDescription);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = SITE_CONFIG.ogDescription;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground dark selection:bg-primary/30 pb-[calc(100px+env(safe-area-inset-bottom,0px))]">
      <Navbar />
      
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
        <AutomationsSection />
        <BeyondFunnelsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <AdditionalSections />
      </main>

      <Footer />
      <ContactDock />
    </div>
  );
}
