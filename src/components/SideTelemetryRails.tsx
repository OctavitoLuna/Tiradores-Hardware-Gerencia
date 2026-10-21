import React, { useState, useEffect } from 'react';
import { ChevronUp, Activity, Cpu, Layers } from 'lucide-react';

export default function SideTelemetryRails() {
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight > 0) {
        const pct = Math.min(100, Math.max(0, Math.round((scrollTop / docHeight) * 100)));
        setScrollPercent(pct);
      }
      setShowScrollTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ================= LEFT TELEMETRY RAIL ================= */}
      <aside
        aria-hidden="true"
        className="fixed left-2 xl:left-4 top-28 bottom-10 z-40 pointer-events-none hidden lg:flex flex-col justify-between items-center select-none"
      >
        {/* Top telemetry node */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#111111]/85 backdrop-blur-md border border-primary/30 text-white shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[10px] tracking-wider text-primary font-bold">NODE.01</span>
          </div>
          <div className="w-px h-12 bg-gradient-to-b from-primary/60 via-stone-400/40 to-transparent" />
        </div>

        {/* Center vertical technical labels & tick marks */}
        <div className="flex flex-col items-center gap-6 my-auto">
          <div className="flex flex-col items-center gap-1 opacity-60">
            <span className="font-mono text-[9px] text-surface font-semibold tracking-widest">+ 01</span>
            <div className="w-2 h-px bg-primary/40" />
            <span className="font-mono text-[9px] text-surface font-semibold tracking-widest">+ 02</span>
            <div className="w-2 h-px bg-primary/40" />
            <span className="font-mono text-[9px] text-surface font-semibold tracking-widest">+ 03</span>
          </div>

          <div
            className="text-[10px] font-mono tracking-[0.25em] text-foreground-muted/80 uppercase font-semibold whitespace-nowrap"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            TIRADORES // INFRAESTRUCTURA &bull; IA MEDITECH
          </div>

          <div className="flex flex-col items-center gap-1 opacity-50">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            <div className="w-px h-8 bg-stone-300 dark:bg-stone-700" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
          </div>
        </div>

        {/* Bottom hardware telemetry badge */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-t from-primary/60 via-stone-400/40 to-transparent" />
          <div className="px-2 py-0.5 rounded bg-surface/90 text-primary font-mono text-[9px] border border-primary/30 tracking-widest">
            HW &lt; 1MS
          </div>
        </div>
      </aside>

      {/* ================= RIGHT TELEMETRY RAIL ================= */}
      <aside
        className="fixed right-2 xl:right-4 top-28 bottom-10 z-40 pointer-events-none hidden lg:flex flex-col justify-between items-center select-none"
      >
        {/* Top scroll percent indicator */}
        <div className="flex flex-col items-center gap-2 pointer-events-auto">
          <div className="px-2 py-1 rounded bg-[#111111]/85 backdrop-blur-md border border-primary/40 text-primary font-mono text-[11px] font-bold shadow-sm">
            {scrollPercent}%
          </div>
          {/* Micro vertical scroll track */}
          <div className="w-1 h-16 bg-stone-300/60 dark:bg-neutral-800 rounded-full relative overflow-hidden">
            <div
              className="w-full bg-gradient-to-b from-primary via-primary-light to-primary rounded-full transition-all duration-150"
              style={{ height: `${scrollPercent}%` }}
            />
          </div>
        </div>

        {/* Center vertical system indicators & Quick Nav */}
        <div className="flex flex-col items-center gap-4 my-auto pointer-events-auto">
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              title="Volver al inicio"
              className="w-8 h-8 rounded-full bg-[#111111] text-primary hover:bg-primary hover:text-white border border-primary/50 shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer pointer-events-auto group"
            >
              <ChevronUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          )}

          <div
            className="text-[10px] font-mono tracking-[0.25em] text-foreground-muted/80 uppercase font-semibold whitespace-nowrap"
            style={{ writingMode: 'vertical-rl' }}
          >
            DISPONIBILIDAD: 99.9% &bull; ACTIVO
          </div>

          <div className="flex flex-col items-center gap-1 opacity-60">
            <span className="font-mono text-[9px] text-surface font-semibold tracking-widest">[LAT]</span>
            <div className="w-2 h-px bg-primary/40" />
            <span className="font-mono text-[9px] text-primary font-semibold tracking-widest">0.8ms</span>
          </div>
        </div>

        {/* Bottom status badge */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-t from-primary/60 via-stone-400/40 to-transparent" />
          <div className="px-2 py-0.5 rounded bg-surface/90 text-stone-300 font-mono text-[9px] border border-primary/30 tracking-widest">
            STABLE
          </div>
        </div>
      </aside>
    </>
  );
}
