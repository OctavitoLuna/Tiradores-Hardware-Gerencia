import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '../lib/gsap';

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    // Only run once per session to maintain high productivity
    const sessionSeen = sessionStorage.getItem('tiradores_intro_seen');
    if (sessionSeen || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setHasRun(true);
      onComplete?.();
      return;
    }

    const container = containerRef.current;
    const path = pathRef.current;
    const line = lineRef.current;
    if (!container || !path || !line) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem('tiradores_intro_seen', 'true');
          setHasRun(true);
          onComplete?.();
        }
      });

      // SVG morph from technical microchip square to cross/shield symbol
      // Initial shape: chip square
      // Target shape: precision cross
      const crossPath = "M 40 10 L 60 10 L 60 40 L 90 40 L 90 60 L 60 60 L 60 90 L 40 90 L 40 60 L 10 60 L 10 40 L 40 40 Z";

      tl.set(container, { autoAlpha: 1 })
        .set(path, { drawSVG: "0%" })
        .to(path, {
          drawSVG: "100%",
          duration: 0.6,
          ease: "power2.inOut"
        })
        .to(path, {
          morphSVG: crossPath,
          duration: 0.5,
          ease: "snappyUI"
        }, "+=0.05")
        .to(line, {
          scaleX: 1,
          duration: 0.4,
          ease: "power3.inOut"
        }, "-=0.2")
        .to(container, {
          yPercent: -100,
          duration: 0.65,
          ease: "editorialSmooth"
        }, "+=0.15");
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (hasRun) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 z-[10000] bg-surface flex flex-col items-center justify-center pointer-events-auto"
      style={{ opacity: 1 }}
    >
      <div className="relative flex flex-col items-center">
        {/* SVG Morphing Circuit Symbol */}
        <svg
          className="w-24 h-24 text-primary"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Starting microchip path */}
          <path
            ref={pathRef}
            d="M 20 20 L 80 20 L 80 80 L 20 80 Z"
            fill="none"
          />
        </svg>

        {/* Precision Laser Line */}
        <div className="w-48 h-[2px] bg-neutral-800 mt-6 overflow-hidden">
          <div
            ref={lineRef}
            className="w-full h-full bg-primary origin-left scale-x-0"
          />
        </div>
      </div>
    </div>
  );
}
