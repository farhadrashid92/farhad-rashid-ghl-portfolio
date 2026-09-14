import { useEffect, useRef } from 'react';

/** Decorative canvas: no pointer capture, no React updates per animation frame. */
export function HeroPattern() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = canvas?.parentElement;
    const context = canvas?.getContext('2d');
    if (!canvas || !hero || !context) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    const pointer = { x: -1000, y: -1000 };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      const spacing = 58;
      for (let y = 24; y < height; y += spacing) {
        for (let x = 24; x < width; x += spacing) {
          const distance = Math.hypot(x - pointer.x, y - pointer.y);
          const proximity = reduced.matches ? 0 : Math.max(0, 1 - distance / 230);
          const pulse = reduced.matches ? 0.25 : (Math.sin(time / 2100 + x / 210 + y / 170) + 1) / 2;
          context.strokeStyle = `rgba(70, 113, 235, ${0.035 + proximity * 0.23})`;
          context.lineWidth = 0.7;
          context.beginPath();
          context.moveTo(x, y);
          context.lineTo(x + spacing, y);
          context.moveTo(x, y);
          context.lineTo(x, y + spacing);
          context.stroke();
          context.fillStyle = `rgba(99, 148, 255, ${0.12 + pulse * 0.18 + proximity * 0.55})`;
          context.beginPath();
          context.arc(x, y, 1 + proximity * 2.1, 0, Math.PI * 2);
          context.fill();
        }
      }
      if (visible && !document.hidden && !reduced.matches) frame = requestAnimationFrame(draw);
    };
    const restart = () => {
      cancelAnimationFrame(frame);
      if (visible && !document.hidden) draw(performance.now());
    };
    const resize = () => {
      const bounds = hero.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      restart();
    };
    const move = (event: PointerEvent) => {
      const bounds = hero.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
    };
    const leave = () => { pointer.x = pointer.y = -1000; };
    const resizeObserver = new ResizeObserver(resize);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      restart();
    });
    resizeObserver.observe(hero);
    visibilityObserver.observe(hero);
    hero.addEventListener('pointermove', move, { passive: true });
    hero.addEventListener('pointerleave', leave);
    document.addEventListener('visibilitychange', restart);
    reduced.addEventListener('change', restart);
    resize();
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      hero.removeEventListener('pointermove', move);
      hero.removeEventListener('pointerleave', leave);
      document.removeEventListener('visibilitychange', restart);
      reduced.removeEventListener('change', restart);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 80%, transparent)' }} />;
}