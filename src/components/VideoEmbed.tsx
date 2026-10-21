import React, { useRef, useEffect } from 'react';
import { Play } from 'lucide-react';
import { gsap, ScrollTrigger } from '../lib/gsap';

interface VideoEmbedProps {
  url: string;
  title: string;
  channel?: string;
}

export default function VideoEmbed({ url, title, channel }: VideoEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const bracketsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const media = mediaRef.current;
    const brackets = bracketsRef.current;
    if (!container || !media) return;

    const ctx = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 82%",
          toggleActions: "play none none reverse"
        }
      });

      // Viewfinder corners entrance
      if (brackets) {
        const corners = brackets.querySelectorAll('.visor-corner');
        tl.fromTo(corners,
          { opacity: 0, scale: 0.6 },
          { opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: "snappyUI" }
        );
      }

      // Clip path inset reveal from center + subtle scale
      tl.fromTo(media,
        {
          clipPath: 'inset(18% 18% 18% 18%)',
          scale: 1.08,
          opacity: 0.3
        },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          scale: 1,
          opacity: 1,
          duration: 0.85,
          ease: "editorialSmooth"
        },
        "-=0.35"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // If no URL is provided, show a placeholder
  if (!url || url === 'PENDIENTE DE PEGAR') {
    return (
      <div
        ref={containerRef}
        className="w-full aspect-video bg-surface text-foreground-inverse flex flex-col items-center justify-center p-6 text-center border-4 border-background-dark my-8 relative overflow-hidden group shadow-hard"
      >
        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4 text-white shadow-hard-orange">
          <Play size={24} className="ml-1" />
        </div>
        <h4 className="font-display text-2xl tracking-wide uppercase">{title}</h4>
        {channel && <p className="text-gray-400 mt-2 font-sans text-sm">Canal: {channel}</p>}
        <div className="mt-4 px-4 py-1 border border-primary text-primary text-xs uppercase tracking-widest font-bold">
          Video Pendiente
        </div>
      </div>
    );
  }

  // Extract video ID for YouTube embed
  let videoId = '';
  try {
    const parsedUrl = new URL(url);
    if (parsedUrl.hostname.includes('youtube.com')) {
      videoId = parsedUrl.searchParams.get('v') || '';
    } else if (parsedUrl.hostname.includes('youtu.be')) {
      videoId = parsedUrl.pathname.slice(1);
    }
  } catch (e) {
    // invalid url
  }

  if (videoId) {
    return (
      <div ref={containerRef} className="relative w-full aspect-video my-8 group p-2">
        {/* Technical Visor Corner Brackets */}
        <div ref={bracketsRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-20">
          {/* Top-Left */}
          <div className="visor-corner absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary" />
          {/* Top-Right */}
          <div className="visor-corner absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary" />
          {/* Bottom-Left */}
          <div className="visor-corner absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary" />
          {/* Bottom-Right */}
          <div className="visor-corner absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary" />
        </div>

        {/* Video Screen Container with Clip-Path Reveal */}
        <div
          ref={mediaRef}
          className="w-full h-full overflow-hidden rounded-xl border border-neutral-800 bg-surface shadow-hard-lg"
        >
          <iframe
            className="w-full h-full border-0"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  // Fallback for non-youtube links
  return (
    <div
      ref={containerRef}
      className="w-full aspect-video bg-surface text-foreground-inverse flex flex-col items-center justify-center p-6 text-center border-4 border-background-dark my-8 shadow-hard"
    >
       <a href={url} target="_blank" rel="noopener noreferrer" className="btn-primary">
         Ver Video
       </a>
    </div>
  );
}
