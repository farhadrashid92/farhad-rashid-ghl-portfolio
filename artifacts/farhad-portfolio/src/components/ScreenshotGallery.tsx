import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Image as ImageIcon, Info, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '@/data/gallery';
import type { GalleryCategory } from '@/data/gallery';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export interface ScreenshotGalleryProps {
  category: GalleryCategory;
}


export function ScreenshotGallery({ category }: ScreenshotGalleryProps) {
  const items = GALLERY_ITEMS.filter((item) => item.category === category);

  return (
    <div>
      {category === 'Automations' && (
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
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative flex flex-col glass-card rounded-2xl overflow-hidden"
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
                        <DialogDescription asChild>
                          <div className="text-base mt-1.5 flex items-center gap-2">
                            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                              {item.category}
                            </Badge>
                            <span>{item.description}</span>
                          </div>
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
    </div>
  );
}