import { motion } from 'framer-motion';
import { ShieldCheck, Database, Link2 } from 'lucide-react';

export function BeyondFunnelsSection() {
  return (
    <section className="py-24 relative bg-card/20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Beyond</span> Funnels
          </h2>
          <p className="text-lg text-muted-foreground">
            Technical GoHighLevel implementation work ensuring compliance, data integrity, and system connectivity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-2xl p-8 flex flex-col h-full"
          >
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">A2P Registration</h3>
            
            <ol className="grid grid-cols-2 gap-2 mt-4">
              {["Business Information", "Phone Setup", "Messaging Configuration", "A2P Registration", "Compliance"].map((step, i) => (
                <li key={step} className="min-w-0 flex items-center gap-2 px-3 py-3 rounded-lg bg-background/50 border border-border/50 text-xs leading-relaxed text-muted-foreground">
                  <span className="text-green-400/80 text-[10px] font-semibold shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className="text-sm text-muted-foreground mt-6 text-center border-t border-border/50 pt-4">
              Supporting clients through the complete GoHighLevel A2P compliance process.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-8 flex flex-col h-full relative overflow-hidden"
          >
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full"
              style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.12), transparent 72%)' }}
            />
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 relative z-10">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white relative z-10">GHL Migration</h3>
            
            <ol className="grid grid-cols-2 gap-2 mt-4 relative z-10">
              {["Existing CRM/System", "Data Preparation", "Contact Migration", "Funnel Recreation", "Workflow Recreation", "Testing", "Go Live"].map((step, i) => (
                <li key={step} className="min-w-0 flex items-center gap-2 px-3 py-3 rounded-lg bg-background/50 border border-border/50 text-xs leading-relaxed text-muted-foreground">
                  <span className="text-blue-400 text-[10px] font-semibold shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-2xl p-8 flex flex-col h-full"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
              <Link2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Integrations</h3>
            
            <div className="flex flex-col gap-3 mt-4 flex-1 justify-center">
              <div className="w-full text-center px-4 py-3 rounded-lg bg-primary/10 border border-primary/30 text-white font-medium shadow-[0_0_15px_rgba(26,86,219,0.15)]">
                GoHighLevel
              </div>
              
              <div className="flex justify-center my-1"><Link2 className="w-4 h-4 text-muted-foreground rotate-90" /></div>
              
              <div className="grid grid-cols-2 gap-2">
                {["Forms", "Calendars", "Chat", "AI"].map(tool => (
                  <div key={tool} className="text-center px-2 py-2 rounded-lg bg-background/50 border border-border/50 text-xs text-muted-foreground">
                    {tool}
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center my-1"><Link2 className="w-4 h-4 text-muted-foreground rotate-90" /></div>
              
              <div className="w-full text-center px-4 py-3 rounded-lg bg-background/50 border border-border/50 text-sm text-muted-foreground">
                Third-Party Tools
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
