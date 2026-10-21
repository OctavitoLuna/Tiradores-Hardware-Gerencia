import React, { useRef, useEffect } from 'react';
import { gsap, SplitText, ScrollTrigger } from '../lib/gsap';

interface PageHeaderBannerProps {
  title: string;
  badge?: string;
  subtitle?: string;
  category?: string;
}

export default function PageHeaderBanner({ title, badge, subtitle, category }: PageHeaderBannerProps) {
  const bannerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bottomLineRef = useRef<HTMLDivElement>(null);
  const bgGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const banner = bannerRef.current;
    const titleEl = titleRef.current;
    const bottomLine = bottomLineRef.current;
    const bgGrid = bgGridRef.current;
    if (!banner || !titleEl) return;

    const ctx = gsap.context(() => {
      // Respect reduced-motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        if (bottomLine) gsap.set(bottomLine, { scaleX: 1 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "snappyUI" } });

      // Animate bottom accent line drawing
      if (bottomLine) {
        tl.fromTo(bottomLine,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.9, ease: "editorialSmooth" }
        );
      }

      // Split title characters
      const split = new SplitText(titleEl, {
        type: "chars,words",
        charsClass: "banner-char inline-block"
      });

      tl.from(split.chars, {
        yPercent: 120,
        rotationX: -45,
        opacity: 0,
        stagger: {
          amount: 0.5,
          from: "center"
        },
        duration: 0.8,
        ease: "power4.out"
      }, bottomLine ? "-=0.6" : 0);

      // Subtle mouse repulsion on title characters (Desktop)
      if (window.innerWidth >= 800) {
        const chars = split.chars as HTMLElement[];
        const onMouseMove = (e: MouseEvent) => {
          const rect = titleEl.getBoundingClientRect();
          const mouseX = e.clientX;
          const mouseY = e.clientY;

          chars.forEach((char) => {
            const charRect = char.getBoundingClientRect();
            const charCenterX = charRect.left + charRect.width / 2;
            const charCenterY = charRect.top + charRect.height / 2;
            const dist = Math.hypot(mouseX - charCenterX, mouseY - charCenterY);

            if (dist < 120) {
              const power = (1 - dist / 120) * 14;
              const angle = Math.atan2(charCenterY - mouseY, charCenterX - mouseX);
              gsap.to(char, {
                x: Math.cos(angle) * power,
                y: Math.sin(angle) * power,
                color: '#F4A261',
                duration: 0.25,
                ease: "power2.out"
              });
            } else {
              gsap.to(char, {
                x: 0,
                y: 0,
                color: '#FFFFFF',
                duration: 0.45,
                ease: "power2.out"
              });
            }
          });
        };

        banner.addEventListener('mousemove', onMouseMove);
      }

      // Scroll parallax scrub
      ScrollTrigger.create({
        trigger: banner,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress;
          gsap.set(titleEl, { y: p * 45, opacity: 1 - p * 0.7, scale: 1 - p * 0.05 });
          if (bgGrid) {
            gsap.set(bgGrid, { y: p * 70 });
          }
        }
      });
    }, bannerRef);

    return () => ctx.revert();
  }, [title]);

  return (
    <header
      ref={bannerRef}
      className="bg-surface text-foreground-inverse py-20 md:py-24 relative overflow-hidden border-b-8 border-primary"
    >
      {/* Technical blueprint grid and watermark */}
      <div
        ref={bgGridRef}
        aria-hidden="true"
        className="absolute inset-0 bg-tech-grid-dark opacity-35 pointer-events-none"
      />

      {/* Decorative Technical Crosshairs in Corners */}
      <div aria-hidden="true" className="absolute top-4 left-6 text-primary/40 font-mono text-xs select-none pointer-events-none">
        + HW-SYS // LATENCY &lt; 1MS +
      </div>
      <div aria-hidden="true" className="absolute top-4 right-6 text-primary/40 font-mono text-xs select-none pointer-events-none hidden sm:block">
        [ NODE-ACTIVE : 99.9% UPTIME ]
      </div>

      <div className="container-wide text-center relative z-10 mx-auto px-4">
        {/* Subtle lateral telemetry hints for widescreen elegance */}
        <div aria-hidden="true" className="hidden xl:flex justify-between items-center text-primary/35 font-mono text-[11px] select-none pointer-events-none mb-3 px-6">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
            [ PROTOCOL // TIRADORES-HW-SYS ]
          </span>
          <span>[ METRIC: 99.9% STABLE // LAT &lt; 1MS ]</span>
        </div>
        {category && (
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1 rounded-full mb-3 border border-primary/20">
            {category}
          </span>
        )}
        {badge && (
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1 rounded-full mb-3 border border-primary/20">
            {badge}
          </span>
        )}

        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-7xl font-display tracking-wide text-white mb-4 overflow-hidden py-1"
        >
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg md:text-xl font-display tracking-widest text-primary uppercase max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom Orange Laser Line */}
      <div
        ref={bottomLineRef}
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-primary-light to-primary origin-left"
        style={{ transform: 'scaleX(1)' }}
      />
    </header>
  );
}
