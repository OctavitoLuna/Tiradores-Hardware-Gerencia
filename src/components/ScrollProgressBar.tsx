import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/gsap';

export default function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const bar = barRef.current;
    if (!bar) return;

    gsap.set(bar, { scaleX: 0, transformOrigin: 'left center' });

    const trigger = ScrollTrigger.create({
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.15,
      onUpdate: (self) => {
        gsap.to(bar, {
          scaleX: self.progress,
          duration: 0.1,
          ease: 'none',
          overwrite: 'auto',
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[9999] pointer-events-none"
    >
      <div
        ref={barRef}
        className="w-full h-full bg-[#C1522A] shadow-[0_0_8px_rgba(193,82,42,0.8)] origin-left"
      />
    </div>
  );
}
