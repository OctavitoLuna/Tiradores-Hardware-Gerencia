import React, { useRef, useEffect } from 'react';
import { gsap } from '../lib/gsap';

export default function AnimatedPage({ children }: { children: React.ReactNode }) {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = pageRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const anim = gsap.fromTo(el,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.65, ease: "snappyUI" }
    );

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <div ref={pageRef} className="w-full">
      {children}
    </div>
  );
}
