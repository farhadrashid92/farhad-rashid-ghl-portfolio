import { motion } from 'framer-motion';
import { PROJECTS } from '@/data/config';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative bg-card/20">
      <div className="container mx-auto px-4 md:px-8">
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

        <div className="flex flex-col gap-12 lg:gap-24">
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
      </div>
    </section>
  );
}
