import { motion } from 'framer-motion';
import { ScreenshotGallery } from '@/components/ScreenshotGallery';
import { SectionBackground } from '@/components/SectionBackground';

export function AutomationsSection() {
  return (
    <section id="automations" className="py-24 relative overflow-hidden z-0">
      <SectionBackground variant="automations" />
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 -z-10" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Automation</span> Systems I've Built
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A visual showcase of GoHighLevel automation screenshots from systems built to improve client follow-up and reduce manual work.
          </p>
        </motion.div>

        <ScreenshotGallery category="Automations" />
      </div>
    </section>
  );
}
