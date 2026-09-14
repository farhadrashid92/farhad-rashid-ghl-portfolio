import { motion } from 'framer-motion';
import { ScreenshotGallery } from '@/components/ScreenshotGallery';

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

        <ScreenshotGallery category="Funnels" />
      </div>
    </section>
  );
}
