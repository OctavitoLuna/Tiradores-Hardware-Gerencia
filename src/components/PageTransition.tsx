import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from '../lib/gsap';

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const curtainRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' });

    // GSAP page reveal animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        curtainRef.current,
        { scaleY: 1, transformOrigin: 'top center' },
        { scaleY: 0, duration: 0.45, ease: 'power3.inOut' }
      );

      gsap.fromTo(
        contentRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, delay: 0.15, ease: 'power2.out' }
      );
    });

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <div className="relative w-full min-h-screen">
      {/* Brutalist Orange Curtain Wipe */}
      <div
        ref={curtainRef}
        aria-hidden="true"
        className="fixed inset-0 z-50 bg-[#C1522A] pointer-events-none border-b-[5px] border-[#0A0A0A]"
      />
      <div ref={contentRef} className="w-full">
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
