import { motion } from 'framer-motion';
import { SKILLS } from '@/data/config';
import { Badge } from '@/components/ui/badge';

export function SkillsSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            GoHighLevel <span className="text-gradient-primary">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(SKILLS).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-6 text-white pb-4 border-b border-border/50">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className="bg-background/50 text-muted-foreground hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-colors py-1.5 px-3 font-normal"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
