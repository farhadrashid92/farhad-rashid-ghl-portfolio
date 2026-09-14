import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '@/data/config';
import { ArrowUpRight, CheckCircle2, Image as ImageIcon, Info, Maximize2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { GALLERY_ITEMS, GalleryCategory, GalleryItem } from '@/data/gallery';

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory | 'All'>('All');

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeFilter === 'All' || item.category === activeFilter
  );

  return (
    <section id="projects" className="py-24 relative bg-card/20">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Existing Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            GoHighLevel <span className="text-gradient-primary">Projects</span> I've Worked On
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12 lg:gap-24 mb-32">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Text Content */}
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Badge variant="secondary" className="mb-4 text-primary bg-primary/10 hover:bg-primary/20">
                  {project.industry}
                </Badge>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">GHL Features Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map(feature => (
                      <Badge key={feature} variant="outline" className="border-border/50 text-muted-foreground">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10 mb-8">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-sm font-medium text-white mb-1">Project Outcome</span>
                    <span className="text-sm text-muted-foreground">{project.outcome}</span>
                  </div>
                </div>
                
                {project.link !== "#" && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:text-white transition-colors group"
                  >
                    View Live Project
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                )}
              </div>

              {/* Visual Presentation (Abstract Data / UI Representation instead of standard image) */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="glass-card rounded-2xl p-2 aspect-[4/3] md:aspect-video relative overflow-hidden group">
                  {/* Mockup UI representation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background rounded-2xl opacity-80" />
                  
                  {/* Decorative Elements based on index to differentiate projects visually */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                    <div className="flex justify-between items-center opacity-50">
                      <div className="w-24 h-4 rounded-full bg-border" />
                      <div className="flex gap-2">
                        <div className="w-4 h-4 rounded-full bg-border" />
                        <div className="w-4 h-4 rounded-full bg-border" />
                        <div className="w-4 h-4 rounded-full bg-border" />
                      </div>
                    </div>
                    
                    <div className="flex-1 flex items-center justify-center relative">
                      <div className="absolute w-64 h-64 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/40 transition-colors duration-700" />
                      
                      {/* Diagram representation */}
                      <div className="flex flex-col items-center gap-4 w-full max-w-sm">
                         <div className="w-full h-12 bg-white/5 border border-white/10 rounded-lg flex items-center px-4 gap-3 transform group-hover:-translate-y-2 transition-transform duration-500 delay-100">
                           <div className="w-6 h-6 rounded-md bg-primary/20" />
                           <div className="flex-1 h-2 bg-white/10 rounded-full" />
                         </div>
                         
                         <div className="w-0.5 h-6 bg-border" />
                         
                         <div className="w-full h-24 bg-white/5 border border-white/10 rounded-lg flex flex-col justify-center px-4 gap-3 transform group-hover:scale-105 transition-transform duration-500">
                           <div className="flex gap-3">
                             <div className="w-6 h-6 rounded-full bg-blue-500/20" />
                             <div className="flex-1 h-2 mt-2 bg-white/10 rounded-full" />
                           </div>
                           <div className="w-3/4 h-2 bg-white/5 rounded-full ml-9" />
                         </div>
                         
                         <div className="w-0.5 h-6 bg-border" />
                         
                         <div className="w-full h-12 bg-white/5 border border-white/10 rounded-lg flex items-center px-4 gap-3 transform group-hover:translate-y-2 transition-transform duration-500 delay-100">
                           <div className="w-6 h-6 rounded-md bg-accent/20" />
                           <div className="flex-1 h-2 bg-white/10 rounded-full" />
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Screenshot Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 border-t border-border/50 pt-24"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Visual <span className="text-gradient-primary">Showcase</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                A closer look at the actual funnels and automation systems I've built.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {(['All', 'Funnels', 'Automations'] as const).map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? 'default' : 'outline'}
                  onClick={() => setActiveFilter(filter)}
                  className="rounded-full"
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>
          
          {activeFilter === 'Automations' && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-primary/5 border border-primary/10 px-4 py-3 rounded-lg mb-8 max-w-fit">
              <Info className="w-4 h-4 text-primary" />
              <span>Note: Some workflow logic variations share illustrative screenshots.</span>
            </div>
          )}

          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative flex flex-col glass-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="relative aspect-video overflow-hidden bg-muted w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                          <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <Maximize2 className="w-4 h-4" />
                            <span>View Full Image</span>
                          </div>
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-5xl w-[95vw] h-[90vh] flex flex-col p-1 sm:p-2 bg-background/95 backdrop-blur-xl border-border/50">
                      <DialogHeader className="px-4 pt-4 pb-2 flex-shrink-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <DialogTitle className="text-xl sm:text-2xl font-bold">{item.title}</DialogTitle>
                            <DialogDescription className="text-base mt-1.5 flex items-center gap-2">
                              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">{item.category}</Badge>
                              <span>{item.description}</span>
                            </DialogDescription>
                          </div>
                        </div>
                      </DialogHeader>
                      <div className="flex-1 overflow-auto rounded-lg border border-border/50 bg-muted/30 m-4 mt-2">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-auto min-h-full object-cover object-top"
                        />
                      </div>
                      <div className="px-4 pb-4 flex justify-between items-center flex-shrink-0">
                         {item.isSharedScreenshot && (
                           <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary/50 px-2.5 py-1.5 rounded-md">
                             <Info className="w-3.5 h-3.5" />
                             <span>Illustrative representation</span>
                           </div>
                         )}
                         <a 
                           href={item.image} 
                           target="_blank" 
                           rel="noreferrer"
                           className="inline-flex items-center gap-2 text-sm text-primary hover:text-white transition-colors ml-auto"
                         >
                           <ImageIcon className="w-4 h-4" />
                           Open original image
                           <ArrowUpRight className="w-3 h-3" />
                         </a>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 text-xs">
                        {item.category}
                      </Badge>
                      {item.isSharedScreenshot && (
                        <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium flex items-center gap-1">
                          <Info className="w-3 h-3" />
                          Shared UI
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm flex-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
