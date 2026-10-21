import React, { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from '../lib/gsap';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export default function FadeIn({ children, delay = 0, className = "", direction = 'up' }: FadeInProps) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(el, { opacity: 1, y: 0, x: 0 });
      return;
    }

    const yVal = direction === 'up' ? 35 : direction === 'down' ? -35 : 0;
    const xVal = direction === 'left' ? 35 : direction === 'right' ? -35 : 0;

    const anim = gsap.fromTo(el, 
      {
        opacity: 0,
        y: yVal,
        x: xVal,
        scale: 0.98
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: 0.75,
        delay,
        ease: "snappyUI",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      anim.kill();
    };
  }, [delay, direction]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
}
