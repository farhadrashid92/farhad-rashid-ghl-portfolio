import { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import { ArrowUpRight, Image as ImageIcon, Info, Maximize2, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { GALLERY_ITEMS } from '@/data/gallery';
import type { GalleryCategory } from '@/data/gallery';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
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
  const galleryRef = useRef<HTMLDivElement>(null);
  const autoScroll = useMemo(() => AutoScroll({
    direction: category === 'Funnels' ? 'backward' : 'forward',
    speed: 0.7,
    startDelay: 0,
    playOnInit: false,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
    stopOnFocusIn: false,
  }), [category]);
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    skipSnaps: false
  }, [autoScroll]);
  
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting));
    if (galleryRef.current) observer.observe(galleryRef.current);
    return () => observer.disconnect();
  }, []);

  // Initialize prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsPlaying(false);
    }
    
    const listener = (e: MediaQueryListEvent) => {
      if (e.matches) setIsPlaying(false);
    };
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // Handle document visibility for auto-play pause
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsDocumentVisible(!document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const shouldPlay = isPlaying && !isHovered && !isModalOpen && isDocumentVisible && isInView;

  useEffect(() => {
    if (!emblaApi) return;
    if (shouldPlay) autoScroll.play();
    else autoScroll.stop();
    return () => autoScroll.stop();
  }, [emblaApi, shouldPlay, autoScroll]);

  return (
    <div ref={galleryRef} className="flex flex-col">
      {/* Controls & Note Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        {category === 'Automations' ? (
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-primary/5 border border-primary/10 px-4 py-3 rounded-lg max-w-fit">
            <Info className="w-4 h-4 text-primary shrink-0" />
            <span>Note: Some workflow logic variations share illustrative screenshots.</span>
          </div>
        ) : <div />}

        <div className="flex items-center gap-2 self-start md:self-auto">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-background/50 border-border/50 hover:bg-primary/10 hover:text-primary transition-colors"
            onClick={() => setIsPlaying(!isPlaying)}
            title={isPlaying ? "Pause autoplay" : "Start autoplay"}
            aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-background/50 border-border/50 hover:bg-primary/10 hover:text-primary transition-colors"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-background/50 border-border/50 hover:bg-primary/10 hover:text-primary transition-colors"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Carousel */}
      <div 
        className="relative w-full"
        style={{ 
          maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)' 
        }}
        onFocus={() => setIsHovered(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setIsHovered(false);
        }}
      >
        <div className="overflow-hidden py-4 -mx-4 px-4 md:-mx-8 md:px-8" ref={emblaRef}>
          <div className="flex ml-[-1rem] md:ml-[-1.5rem]">
            {items.map((item) => (
              <div 
                key={item.id} 
                className="flex-[0_0_85%] sm:flex-[0_0_48%] lg:flex-[0_0_32%] pl-4 md:pl-6 min-w-0"
              >
                <div className="group flex flex-col bg-card dark:bg-[#0a0a0a] border border-border dark:border-white/10 rounded-2xl overflow-hidden h-full transition-all duration-300 hover:border-primary/50 shadow-lg">
                  <Dialog onOpenChange={(open) => setIsModalOpen(open)}>
                    <DialogTrigger asChild>
                      <button 
                        className="relative aspect-[16/10] w-full overflow-hidden bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          draggable={false}
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                          <div className="bg-primary/20 text-blue-100 border border-primary/50 px-6 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                            <Maximize2 className="w-4 h-4" />
                            <span>VIEW FULL</span>
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
                      <div className="px-4 pb-4 flex flex-wrap gap-4 justify-between items-center flex-shrink-0">
                        {item.liveUrl && (
                          <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Preview ${item.title} live funnel in a new tab`} className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400">
                            Preview Live Funnel <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}
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

                  <div className="p-6 flex-1 flex flex-col bg-card/10">
                    <div className="text-[10px] uppercase tracking-wider text-primary mb-3 font-semibold flex items-center gap-2">
                      {item.category}
                      {item.isSharedScreenshot && (
                        <span className="text-muted-foreground font-normal">· Illustrative</span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm flex-1 leading-relaxed">
                      {item.description}
                    </p>
                    {item.liveUrl && (
                      <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Preview ${item.title} live funnel in a new tab`} className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary w-fit">
                        Preview Live Funnel <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center flex-wrap gap-2 mt-6">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
