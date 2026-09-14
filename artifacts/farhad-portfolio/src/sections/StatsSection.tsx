import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS } from '@/data/config';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 border-y border-border/50 bg-card/70 relative z-20">
      <div className="container mx-auto px-4 md:px-8">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-border/50">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <div className="flex items-start gap-1">
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                  {stat.value}
                </h3>
                {stat.pending && (
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="w-3 h-3 text-muted-foreground mt-2 opacity-50 hover:opacity-100 transition-opacity" />
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p className="text-xs">Pending verification</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
              <p className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
