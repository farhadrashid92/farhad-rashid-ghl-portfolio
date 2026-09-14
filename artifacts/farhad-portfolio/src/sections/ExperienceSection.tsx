import { motion } from 'framer-motion';
import { EXPERIENCE } from '@/data/config';
import { Calendar } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="text-gradient-primary">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative text-center"
            >
              <div>
                <div className="glass-card rounded-2xl p-6 md:p-8">
                  <div className="flex flex-col items-center gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {exp.company}
                      </h3>
                      <p className="text-primary font-medium text-lg mt-1">{exp.role}</p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/50 px-4 py-2 rounded-full border border-border w-fit">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {exp.description}
                  </p>

                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Key Responsibilities</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start justify-center gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                        <span className="text-sm">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
