import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { SITE_CONFIG } from '@/data/config';
import { Button } from '@/components/ui/button';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Automations', href: '#automations' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 100)) {
          current = section;
        }
      }
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-4 bg-background/80 backdrop-blur-md border-b border-border/50 shadow-lg'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            aria-label={`${SITE_CONFIG.name} — Home`}
            className="text-[22px] font-extrabold tracking-tight text-white inline-flex items-baseline leading-none rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
          >
            FARHAD<span className="text-primary">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden 2xl:flex items-center gap-1 bg-card/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-border/50">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeSection === link.href.substring(1)
                    ? 'bg-white/10 text-white'
                    : 'text-muted-foreground hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden 2xl:flex items-center gap-4">
            <Button 
              onClick={() => scrollTo('#contact')}
              className="rounded-full px-6"
            >
              Let's Work Together
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="2xl:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 2xl:hidden flex flex-col h-[100dvh] overflow-y-auto"
          >
            <div className="flex flex-col gap-6 text-xl">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className={`font-semibold ${
                    activeSection === link.href.substring(1) ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6 border-t border-border mt-4">
                <Button 
                  onClick={() => scrollTo('#contact')}
                  className="w-full rounded-full"
                  size="lg"
                >
                  Let's Work Together
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
