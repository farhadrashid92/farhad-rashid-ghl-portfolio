import { motion } from 'framer-motion';
import { SERVICES } from '@/data/config';
import { SectionBackground } from '@/components/SectionBackground';
import { 
  Filter, 
  Workflow, 
  Database, 
  PhoneCall, 
  UserPlus, 
  Star, 
  Share2, 
  Bot, 
  ArrowRightLeft
} from 'lucide-react';

const iconMap: Record<string, any> = {
  "funnel": Filter,
  "workflow": Workflow,
  "database": Database,
  "phone": PhoneCall,
  "user-plus": UserPlus,
  "star": Star,
  "share-2": Share2,
  "bot": Bot,
  "arrow-right-left": ArrowRightLeft
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative bg-card/20 z-0">
      <SectionBackground variant="services" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What I Build in <span className="text-gradient-primary">GoHighLevel</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            End-to-end architecture for the complete customer journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Workflow;
            
            return (
                  <motion.article
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="group glass-card rounded-2xl p-6 md:p-8 cursor-default relative overflow-hidden h-full flex flex-col"
                  >
                    <div
                      className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.14), transparent 72%)' }}
                    />
                    
                    <div className="w-12 h-12 rounded-xl bg-background/50 border border-border flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm flex-grow">
                      {service.description}
                    </p>
                    
                  </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
