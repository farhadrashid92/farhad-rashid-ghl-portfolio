import { motion } from 'framer-motion';
import { WHY_WORK_WITH_ME, PROCESS_STEPS, SITE_CONFIG } from '@/data/config';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AdditionalSections() {
  return (
    <>
      {/* Tools Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient-primary">Tools</span> I Work With
            </h2>
            <p className="text-lg text-muted-foreground">Ecosystem surrounding GoHighLevel implementations.</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["GoHighLevel", "Conversation AI", "Voice AI", "Twilio", "Email", "SMS", "Calendars", "Webhooks", "Zapier", "Make", "Google Sheets", "Chat Widgets", "Forms", "Surveys"].map((tool, i) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-3 rounded-full glass-card flex items-center gap-3 border border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-medium text-white/90">{tool}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-24 relative bg-card/20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Why Work <span className="text-gradient-primary">With Me</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_WORK_WITH_ME.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 -z-10" />
        
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              How I <span className="text-gradient-primary">Work</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Process line for desktop */}
              <div className="hidden lg:block absolute top-12 left-[4.5rem] right-12 h-1 bg-border/50 rounded-full" />
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
                {PROCESS_STEPS.map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.15 }}
                    className="flex lg:flex-col items-start lg:items-center gap-6 lg:gap-8 lg:text-center group"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-card border-2 border-border flex items-center justify-center text-xl font-bold text-muted-foreground group-hover:border-primary group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300 shadow-lg relative flex-shrink-0">
                      {step.step}
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative bg-card/40 border-t border-border/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card rounded-3xl p-8 md:p-16 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-50" />
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
                Need a GoHighLevel System Built?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 relative z-10">
                Tell me what you want to automate, build, migrate, or improve inside GoHighLevel.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                <a href={`mailto:${SITE_CONFIG.email}`} className="w-full sm:w-auto">
                  <Button size="lg" className="rounded-full px-8 h-14 text-base w-full sm:w-auto shadow-[0_0_20px_rgba(26,86,219,0.3)]">
                    Let's Work Together
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <a href={`mailto:${SITE_CONFIG.email}`} className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base bg-background/50 w-full sm:w-auto border-border/50">
                    Send Me a Message
                  </Button>
                </a>
              </div>
              
              <div className="mt-8 text-sm text-muted-foreground/70 relative z-10 bg-background/50 inline-block px-4 py-2 rounded-lg border border-border/50">
                Note: Contact destinations pending configuration.
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
