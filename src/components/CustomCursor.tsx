import React, { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop and when reduced-motion is not requested
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 799px)').matches;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (prefersReducedMotion || isMobile || isTouch) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 });

    const xDot = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3.out" });
    const yDot = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3.out" });
    const xRing = gsap.quickTo(ring, "x", { duration: 0.28, ease: "power3.out" });
    const yRing = gsap.quickTo(ring, "y", { duration: 0.28, ease: "power3.out" });

    let isVisible = false;

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
        isVisible = true;
      }
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    const onMouseEnterInteractive = () => {
      gsap.to(ring, {
        scale: 1.8,
        borderColor: '#C1522A',
        backgroundColor: 'rgba(193, 82, 42, 0.15)',
        duration: 0.25,
        ease: "snappyUI"
      });
      gsap.to(dot, {
        scale: 0.5,
        backgroundColor: '#C1522A',
        duration: 0.2
      });
    };

    const onMouseLeaveInteractive = () => {
      gsap.to(ring, {
        scale: 1,
        borderColor: 'rgba(193, 82, 42, 0.5)',
        backgroundColor: 'transparent',
        duration: 0.25,
        ease: "power2.out"
      });
      gsap.to(dot, {
        scale: 1,
        backgroundColor: '#C1522A',
        duration: 0.2
      });
    };

    const onMouseLeaveWindow = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.25 });
      isVisible = false;
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeaveWindow);

    // Attach listeners to interactive elements
    const attachHover = () => {
      const interactives = document.querySelectorAll('a, button, [role="button"], input, select, textarea, .cursor-pointer');
      interactives.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnterInteractive);
        el.addEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };

    attachHover();
    const observer = new MutationObserver(attachHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeaveWindow);
      observer.disconnect();
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      {/* Central pinpoint */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-primary pointer-events-none shadow-sm"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      {/* Precision orbit ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-primary/50 pointer-events-none transition-colors"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </div>
  );
}
