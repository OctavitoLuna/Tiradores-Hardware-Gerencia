import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Settings, 
  Zap, 
  Target, 
  Users, 
  BookOpen, 
  Layers, 
  Server, 
  ShieldCheck, 
  Activity, 
  Workflow, 
  Network, 
  ExternalLink, 
  Cpu,
  Radio,
  Share2,
  ChevronDown,
  HardDrive,
  Database
} from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import { 
  gsap, 
  ScrollTrigger, 
  SplitText, 
  ScrollToPlugin 
} from '../lib/gsap';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroParagraphRef = useRef<HTMLParagraphElement>(null);
  const heroKickerLineRef = useRef<HTMLSpanElement>(null);
  const heroKickerTextRef = useRef<HTMLSpanElement>(null);
  const motionGraphicsContainerRef = useRef<HTMLDivElement>(null);
  const rotatingRingsRef = useRef<SVGSVGElement>(null);
  const serverVisualRef = useRef<HTMLDivElement>(null);
  const marqueeTrackRef = useRef<HTMLDivElement>(null);
  const statsSectionRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);
  const quickLinksGridRef = useRef<HTMLDivElement>(null);
  const scrollPromptRef = useRef<HTMLButtonElement>(null);

  const objectives = [
    {
      title: 'Infraestructura de alta disponibilidad',
      desc: 'Diseñar y mantener una arquitectura híbrida (local + nube) capaz de garantizar 99.9% de disponibilidad para los sistemas clínicos críticos.',
      icon: <Activity size={26} />,
      code: 'HIGH_AVAILABILITY // 99.9%'
    },
    {
      title: 'Estructura de equipo clara',
      desc: 'Definir un organigrama funcional con roles y responsables bien establecidos, alineado a la metodología ágil Scrum.',
      icon: <Users size={26} />,
      code: 'TEAM_STRUCTURE // SCRUM'
    },
    {
      title: 'Cumplimiento y calidad',
      desc: 'Asegurar que todo el hardware desplegado cumpla normativas de salud (ISO, CE, FDA) y proteja la información sensible de los pacientes.',
      icon: <ShieldCheck size={26} />,
      code: 'COMPLIANCE // ISO-CE-FDA'
    },
    {
      title: 'Documentación y mejora continua',
      desc: 'Modelar y documentar nuestros procesos (misión, visión, IDEF0, BPMN) para facilitar la toma de decisiones y la mejora constante del área.',
      icon: <Workflow size={26} />,
      code: 'PROCESS // IDEF0-BPMN'
    }
  ];

  const quickLinks = [
    {
      title: 'Gestión de Tecnología',
      desc: 'Cómo dirigimos la estrategia tecnológica del área.',
      path: '/gestion-tecnologia',
      icon: <Settings size={22} />,
      tag: '01'
    },
    {
      title: 'Ciencia, Tecnología e Innovación',
      desc: 'El motor del progreso que inspira nuestro trabajo.',
      path: '/ciencia-tecnologia-innovacion',
      icon: <Zap size={22} />,
      tag: '02'
    },
    {
      title: 'Misión y Visión',
      desc: 'Nuestro propósito y hacia dónde vamos.',
      path: '/mision-vision',
      icon: <Target size={22} />,
      tag: '03'
    },
    {
      title: 'Organigrama',
      desc: 'Cómo está estructurado y quién hace qué.',
      path: '/organigrama',
      icon: <Layers size={22} />,
      tag: '04'
    },
    {
      title: 'MBTI',
      desc: 'Las personalidades que forman nuestro equipo.',
      path: '/mbti',
      icon: <Users size={22} />,
      tag: '05'
    },
    {
      title: 'Scrum',
      desc: 'Nuestra metodología ágil de trabajo.',
      path: '/scrum',
      icon: <BookOpen size={22} />,
      tag: '06'
    },
    {
      title: 'IDEF0',
      desc: 'Modelado funcional del proceso y flujo ICOM.',
      path: '/idef0',
      icon: <Network size={22} />,
      tag: '07'
    },
    {
      title: 'BPMN',
      desc: 'Gestión de solicitud con carriles y decisiones.',
      path: '/bpmn',
      icon: <Workflow size={22} />,
      tag: '08'
    }
  ];

  // GSAP Smooth Scroll Down Handler
  const handleScrollDown = () => {
    if (statsSectionRef.current) {
      gsap.to(window, {
        scrollTo: { y: statsSectionRef.current, offsetY: 70 },
        duration: 1.1,
        ease: "power3.inOut"
      });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (isReduced) return;

      // 1. HERO ENTRANCE CHOREOGRAPHY
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Line and Kicker
      if (heroKickerLineRef.current) {
        heroTl.fromTo(
          heroKickerLineRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.6, ease: "power3.inOut" }
        );
      }
      if (heroKickerTextRef.current) {
        heroTl.fromTo(
          heroKickerTextRef.current,
          { opacity: 0, x: -15 },
          { opacity: 1, x: 0, duration: 0.45 },
          "-=0.3"
        );
      }

      // Title split lines
      if (heroTitleRef.current) {
        const titleSplit = new SplitText(heroTitleRef.current, {
          type: "lines,words",
          linesClass: "overflow-hidden"
        });

        heroTl.from(titleSplit.words, {
          yPercent: 110,
          rotationX: -20,
          opacity: 0,
          stagger: 0.035,
          duration: 0.8,
          ease: "power4.out"
        }, "-=0.35");
      }

      // Paragraph split lines
      if (heroParagraphRef.current) {
        const pSplit = new SplitText(heroParagraphRef.current, {
          type: "lines",
          linesClass: "overflow-hidden"
        });

        heroTl.from(pSplit.lines, {
          yPercent: 100,
          opacity: 0,
          stagger: 0.06,
          duration: 0.65,
          ease: "power3.out"
        }, "-=0.45");
      }

      // Motion Graphics entrance (scale & fade in)
      if (motionGraphicsContainerRef.current) {
        heroTl.fromTo(
          motionGraphicsContainerRef.current,
          { opacity: 0, scale: 0.9, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: "back.out(1.4)" },
          "-=0.7"
        );
      }

      // Scroll Prompt entrance
      if (scrollPromptRef.current) {
        heroTl.fromTo(
          scrollPromptRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3"
        );
      }

      // 2. ADAPTIVE MOTION GRAPHICS MOUSE PARALLAX (Desktop)
      if (window.innerWidth >= 800 && heroRef.current && motionGraphicsContainerRef.current) {
        const target = motionGraphicsContainerRef.current;
        const xQuick = gsap.quickTo(target, "x", { duration: 0.5, ease: "power2.out" });
        const yQuick = gsap.quickTo(target, "y", { duration: 0.5, ease: "power2.out" });
        const rotQuick = gsap.quickTo(target, "rotateY", { duration: 0.6, ease: "power2.out" });

        const onMouseMove = (e: MouseEvent) => {
          const rect = heroRef.current?.getBoundingClientRect();
          if (!rect) return;
          const relX = (e.clientX - rect.left) / rect.width - 0.5;
          const relY = (e.clientY - rect.top) / rect.height - 0.5;
          xQuick(relX * 28);
          yQuick(relY * 20);
          rotQuick(relX * 8);
        };

        heroRef.current.addEventListener('mousemove', onMouseMove);
      }

      // 3. GSAP NATURAL SCROLL PARALLAX ON HERO (Smooth scrub down)
      if (heroRef.current && motionGraphicsContainerRef.current) {
        ScrollTrigger.create({
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
          onUpdate: (self) => {
            const p = self.progress;
            if (motionGraphicsContainerRef.current) {
              gsap.set(motionGraphicsContainerRef.current, {
                y: p * 95,
                opacity: 1 - p * 0.7,
                scale: 1 - p * 0.08
              });
            }
          }
        });
      }

      // Infinite Marquee strip
      if (marqueeTrackRef.current) {
        gsap.to(marqueeTrackRef.current, {
          xPercent: -50,
          repeat: -1,
          duration: 25,
          ease: "none"
        });
      }

      // 4. STATS COUNTERS WITH TELEMETRY DIAL REVEAL
      if (statsSectionRef.current) {
        const counters = statsSectionRef.current.querySelectorAll('.stat-number');
        ScrollTrigger.create({
          trigger: statsSectionRef.current,
          start: "top 80%",
          once: true,
          onEnter: () => {
            counters.forEach((el) => {
              const target = parseFloat(el.getAttribute('data-target') || '0');
              const isDecimal = el.getAttribute('data-decimal') === 'true';
              const suffix = el.getAttribute('data-suffix') || '';

              const obj = { val: 0 };
              gsap.to(obj, {
                val: target,
                duration: 1.6,
                ease: "power2.out",
                onUpdate: () => {
                  if (isDecimal) {
                    el.textContent = obj.val.toFixed(1) + suffix;
                  } else {
                    el.textContent = Math.round(obj.val).toString() + suffix;
                  }
                }
              });
            });
          }
        });
      }

      // 5. BATCH CARD REVEAL FOR OBJECTIVES
      if (cardsGridRef.current) {
        const cards = cardsGridRef.current.querySelectorAll('.objective-card');
        ScrollTrigger.batch(cards, {
          start: "top 85%",
          onEnter: (batch) => {
            gsap.fromTo(batch, 
              { opacity: 0, y: 35, scale: 0.96 },
              { opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.1, ease: "power3.out" }
            );
          }
        });
      }

      // 6. BATCH CARD REVEAL FOR QUICK LINKS
      if (quickLinksGridRef.current) {
        const links = quickLinksGridRef.current.querySelectorAll('.quick-link-card');
        ScrollTrigger.batch(links, {
          start: "top 85%",
          onEnter: (batch) => {
            gsap.fromTo(batch,
              { opacity: 0, y: 35, scale: 0.95 },
              { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.06, ease: "power3.out" }
            );
          }
        });
      }

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <AnimatedPage>
      <div ref={heroRef} className="w-full overflow-hidden bg-background">

        {/* ==================== HERO SECTION (MOTION GRAPHICS ADAPTATIVO) ==================== */}
        <section className="relative min-h-[92vh] flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-10 px-4 sm:px-6 md:px-12 bg-background bg-tech-grid overflow-hidden">
          
          {/* Micro HUD technical decor */}
          <div aria-hidden="true" className="absolute top-24 left-8 text-primary/35 font-mono text-[11px] select-none pointer-events-none hidden lg:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span>NODE_CORE // IA-MEDITECH HW-01</span>
          </div>
          <div aria-hidden="true" className="absolute top-24 right-8 text-primary/35 font-mono text-[11px] select-none pointer-events-none hidden lg:flex items-center gap-2">
            <span>UPTIME SLA 99.9% // SECURE CLUSTER</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          <div className="container-wide mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center my-auto relative z-10 w-full">
            
            {/* Left Column: Typographic Editorial Core - ALL EXACT TEXT PRESERVED */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Kicker */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  ref={heroKickerLineRef}
                  aria-hidden="true"
                  className="w-10 sm:w-14 h-1 bg-primary block origin-left rounded-full"
                />
                <span
                  ref={heroKickerTextRef}
                  className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm font-mono flex items-center gap-2"
                >
                  <span>IA MediTech</span>
                </span>
              </div>

              {/* Titular Principal - EXACTO */}
              <h1
                ref={heroTitleRef}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-display leading-[0.9] mb-8 text-surface tracking-tight"
              >
                Construimos la base física que sostiene la <span className="text-primary">salud digital.</span>
              </h1>

              {/* Párrafo Hero - EXACTO */}
              <p
                ref={heroParagraphRef}
                className="text-base sm:text-lg md:text-xl text-foreground-muted mb-10 max-w-2xl font-sans leading-relaxed"
              >
                Hola. Hablamos desde el equipo de Hardware e Infraestructura de Tiradores. Diseñamos, implementamos y garantizamos que el software médico crítico funcione sin interrupciones.
              </p>

              {/* Botones de Acción - EXACTOS */}
              <div className="flex flex-wrap gap-4 items-center">
                <Link 
                  to="/organigrama" 
                  className="btn-primary shadow-hard-orange hover:translate-y-[-2px] transition-transform"
                >
                  Conoce al equipo
                </Link>
                <Link 
                  to="/scrum" 
                  className="btn-secondary flex items-center gap-2 shadow-hard hover:translate-y-[-2px] transition-transform"
                >
                  <PlayCircle /> Nuestra metodología
                </Link>
              </div>

            </div>

            {/* Right Column: Motion Graphics que se adapta dinámicamente a la pantalla */}
            <div
              ref={motionGraphicsContainerRef}
              className="lg:col-span-5 relative w-full max-w-[500px] lg:max-w-none mx-auto flex items-center justify-center aspect-square sm:aspect-[4/3] lg:aspect-square"
            >
              {/* Architectural Technical Container */}
              <div className="relative w-full h-full rounded-3xl bg-[#0D0D0D] border-2 border-primary/40 shadow-2xl p-5 flex flex-col justify-between overflow-hidden group">
                
                {/* Background Blueprint Grid + Radial Glow */}
                <div aria-hidden="true" className="absolute inset-0 bg-tech-dots-dark opacity-30 pointer-events-none" />
                <div aria-hidden="true" className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                <div aria-hidden="true" className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

                {/* Top HUD Telemetry Bar */}
                <div className="flex items-center justify-between border-b border-primary/25 pb-3 z-10 font-mono text-[10px] text-gray-400 select-none">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-white font-semibold">HW_CORE_01</span>
                  </div>
                  <div className="flex items-center gap-3 text-primary">
                    <span>TEMP: 34°C</span>
                    <span>LOAD: 12%</span>
                  </div>
                </div>

                {/* Central Motion Graphics Engine: Server Matrix & Orbital Neural Ring */}
                <div className="relative my-auto flex items-center justify-center py-4 z-10">
                  
                  {/* Rotating Orbital SVG Rings */}
                  <svg
                    ref={rotatingRingsRef}
                    aria-hidden="true"
                    viewBox="0 0 340 340"
                    className="w-64 h-64 sm:w-72 sm:h-72 select-none pointer-events-none"
                  >
                    {/* Outer Dashed Orbit */}
                    <circle
                      cx="170"
                      cy="170"
                      r="150"
                      fill="none"
                      stroke="#C1522A"
                      strokeWidth="1.5"
                      strokeDasharray="6 8"
                      opacity="0.5"
                      className="animate-[spin_40s_linear_infinite]"
                    />
                    {/* Counter-rotating Inner Precision Orbit */}
                    <circle
                      cx="170"
                      cy="170"
                      r="125"
                      fill="none"
                      stroke="#FAF7F2"
                      strokeWidth="1"
                      strokeDasharray="14 10"
                      opacity="0.25"
                      className="animate-[spin_24s_linear_infinite_reverse]"
                    />
                    {/* Inner Core Radar Ring */}
                    <circle
                      cx="170"
                      cy="170"
                      r="95"
                      fill="none"
                      stroke="#C1522A"
                      strokeWidth="1.2"
                      opacity="0.4"
                    />

                    {/* Orbiting Satellite Dots */}
                    <circle cx="170" cy="20" r="4.5" fill="#C1522A" />
                    <circle cx="320" cy="170" r="3.5" fill="#FAF7F2" />
                    <circle cx="170" cy="320" r="4" fill="#C1522A" />
                    <circle cx="20" cy="170" r="3" fill="#FAF7F2" />
                  </svg>

                  {/* Layered Hardware Blades Visual (Isometric Rack Stack) */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 z-20 pointer-events-none select-none">
                    
                    {/* Blade 01 */}
                    <div className="w-48 sm:w-56 bg-neutral-900/90 border border-primary/50 rounded-xl p-2.5 shadow-lg flex items-center justify-between backdrop-blur-md transform hover:scale-105 transition-transform pointer-events-auto">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                          <Server size={16} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[11px] font-mono font-bold text-white leading-tight">SERVER BLADE 01</span>
                          <span className="text-[9px] font-mono text-gray-400">CLINICAL DATABASE</span>
                        </div>
                      </div>
                      <div className="flex gap-1 items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                      </div>
                    </div>

                    {/* Blade 02 (Active Neural AI Hub) */}
                    <div className="w-52 sm:w-60 bg-neutral-900/95 border-2 border-primary rounded-xl p-3 shadow-hard-orange flex items-center justify-between backdrop-blur-md transform hover:scale-105 transition-transform pointer-events-auto">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center shadow-sm">
                          <Cpu size={18} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[12px] font-mono font-bold text-white leading-tight">NEURAL COMPUTE</span>
                          <span className="text-[9px] font-mono text-primary font-semibold">TENSOR ACCELERATOR</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-mono text-emerald-400 font-bold block">ACTIVE</span>
                        <span className="text-[8px] font-mono text-gray-400">LATENCY 1.2ms</span>
                      </div>
                    </div>

                    {/* Blade 03 */}
                    <div className="w-48 sm:w-56 bg-neutral-900/90 border border-primary/50 rounded-xl p-2.5 shadow-lg flex items-center justify-between backdrop-blur-md transform hover:scale-105 transition-transform pointer-events-auto">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                          <HardDrive size={16} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[11px] font-mono font-bold text-white leading-tight">STORAGE MATRIX</span>
                          <span className="text-[9px] font-mono text-gray-400">RAID-10 NVMe</span>
                        </div>
                      </div>
                      <div className="flex gap-1 items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      </div>
                    </div>

                  </div>

                </div>

                {/* Bottom Telemetry Footer */}
                <div className="border-t border-primary/25 pt-2.5 flex items-center justify-between text-[10px] font-mono text-gray-400 z-10 select-none">
                  <span className="flex items-center gap-1.5 text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    HW & INFRASTRUCTURE
                  </span>
                  <span className="text-primary font-bold">DISPONIBILIDAD: 99.9%</span>
                </div>

              </div>
            </div>

          </div>

          {/* GSAP NATURAL SCROLL DOWN PROMPT (Interactive GSAP Scroll) */}
          <div className="flex flex-col items-center justify-center mt-6 z-20">
            <button
              ref={scrollPromptRef}
              onClick={handleScrollDown}
              className="group flex flex-col items-center gap-2 text-surface hover:text-primary transition-colors cursor-pointer select-none"
              aria-label="Bajar a la siguiente sección con GSAP"
            >
              <span className="text-[10px] font-mono tracking-widest uppercase text-gray-500 group-hover:text-primary transition-colors">
                SCROLL EXPLORE
              </span>
              <div className="w-8 h-12 rounded-full border-2 border-primary/50 group-hover:border-primary flex items-center justify-center p-1 shadow-sm transition-all group-hover:scale-110">
                <ChevronDown size={18} className="text-primary animate-bounce" />
              </div>
            </button>
          </div>

        </section>

        {/* ==================== INFINITE MARQUEE STRIP (SVG DECORATIVO) ==================== */}
        <div aria-hidden="true" className="w-full bg-[#111111] text-primary py-3.5 overflow-hidden border-y border-primary/30 select-none">
          <div ref={marqueeTrackRef} className="flex whitespace-nowrap w-[200%] gap-8 items-center">
            {Array.from({ length: 2 }).map((_, loopIdx) => (
              <div key={loopIdx} className="flex items-center gap-10 text-primary/80 shrink-0 font-mono text-xs">
                <Cpu size={20} />
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <Server size={20} />
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <Radio size={20} />
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <Workflow size={20} />
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <Activity size={20} />
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <Network size={20} />
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <Share2 size={20} />
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <ShieldCheck size={20} />
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
            ))}
          </div>
        </div>

        {/* ==================== BARRA DE MÉTRICAS (TELEMETRÍA EDITORIAL RICA) ==================== */}
        <section
          id="stats-overview"
          ref={statsSectionRef}
          className="bg-[#111111] text-foreground-inverse py-16 border-b-4 border-primary relative overflow-hidden"
        >
          <div aria-hidden="true" className="absolute inset-0 bg-tech-dots-dark opacity-15 pointer-events-none" />
          
          <div className="container-wide grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
            
            {/* Metric 01 */}
            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-primary/30 hover:border-primary shadow-hard hover:shadow-hard-orange transition-all duration-300 group flex flex-col justify-between">
              <div className="flex items-center justify-between text-gray-400 font-mono text-xs mb-3">
                <span>01 // EQUIPO</span>
                <Users size={16} className="text-primary group-hover:scale-125 transition-transform" />
              </div>
              <div className="stat-number text-5xl md:text-7xl font-display text-primary mb-2 leading-none" data-target="5">
                5
              </div>
              <div className="text-sm font-sans tracking-wider uppercase text-gray-300 font-medium">
                Integrantes del equipo
              </div>
            </div>

            {/* Metric 02 */}
            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-primary/30 hover:border-primary shadow-hard hover:shadow-hard-orange transition-all duration-300 group flex flex-col justify-between">
              <div className="flex items-center justify-between text-gray-400 font-mono text-xs mb-3">
                <span>02 // GESTIÓN</span>
                <Layers size={16} className="text-primary group-hover:scale-125 transition-transform" />
              </div>
              <div className="stat-number text-5xl md:text-7xl font-display text-primary mb-2 leading-none" data-target="4">
                4
              </div>
              <div className="text-sm font-sans tracking-wider uppercase text-gray-300 font-medium">
                Áreas de gestión
              </div>
            </div>

            {/* Metric 03 */}
            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-primary/30 hover:border-primary shadow-hard hover:shadow-hard-orange transition-all duration-300 group flex flex-col justify-between">
              <div className="flex items-center justify-between text-gray-400 font-mono text-xs mb-3">
                <span>03 // UPTIME</span>
                <Activity size={16} className="text-primary group-hover:scale-125 transition-transform" />
              </div>
              <div className="stat-number text-5xl md:text-7xl font-display text-primary mb-2 leading-none" data-target="99.9" data-decimal="true" data-suffix="%">
                99.9%
              </div>
              <div className="text-sm font-sans tracking-wider uppercase text-gray-300 font-medium">
                Disponibilidad objetivo
              </div>
            </div>

            {/* Metric 04 */}
            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-primary/30 hover:border-primary shadow-hard hover:shadow-hard-orange transition-all duration-300 group flex flex-col justify-between">
              <div className="flex items-center justify-between text-gray-400 font-mono text-xs mb-3">
                <span>04 // PROYECTO</span>
                <Zap size={16} className="text-primary group-hover:scale-125 transition-transform" />
              </div>
              <div className="stat-number text-5xl md:text-7xl font-display text-primary mb-2 leading-none" data-target="1">
                1
              </div>
              <div className="text-sm font-sans tracking-wider uppercase text-gray-300 font-medium">
                Proyecto estratégico: IA MediTech
              </div>
            </div>

          </div>
        </section>

        {/* ==================== ¿QUIÉNES SOMOS? (CENTRO DE OPERACIONES Y MANDO - NO VACÍO) ==================== */}
        <section id="about-section" className="section-padding bg-background relative overflow-hidden border-b border-stone-300">
          <div aria-hidden="true" className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="container-wide mx-auto">
            
            {/* Header del Bloque */}
            <div className="flex items-center gap-3 mb-6">
              <span aria-hidden="true" className="w-8 h-1 bg-primary block rounded-full" />
              <span className="text-primary font-bold tracking-widest uppercase text-xs font-mono">
                CONOCE NUESTRO PROPÓSITO
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Dossier Técnico Editorial con Contenido Exacto */}
              <div className="lg:col-span-7 bg-[#FAF7F2] p-8 sm:p-12 rounded-3xl border-2 border-stone-300 shadow-hard relative">
                
                {/* Tech corner brackets */}
                <div aria-hidden="true" className="absolute top-4 right-4 text-primary font-mono text-xs select-none">
                  [ HW_DOSSIER // TIRADORES ]
                </div>

                <h2 className="text-4xl sm:text-5xl md:text-6xl font-display mb-8 text-surface leading-tight">
                  ¿Quiénes somos?
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-foreground-muted mb-10 leading-relaxed font-sans">
                  Somos el equipo de Ingeniería de Hardware y Soporte de Infraestructura de Tiradores, una empresa especializada en el desarrollo de soluciones de software para el sector médico. Diseñamos, implementamos y mantenemos la base física y los entornos de alta disponibilidad que garantizan la ejecución segura, rápida y continua de nuestras aplicaciones de salud. Combinamos conocimiento en arquitectura de servidores, redes seguras, dispositivos IoT médicos y sistemas embebidos para proteger la información sensible de los pacientes.
                </p>

                <Link 
                  to="/gestion-tecnologia" 
                  className="btn-primary inline-flex items-center gap-2 shadow-hard-orange hover:translate-y-[-2px] transition-transform"
                >
                  Leer más
                </Link>
              </div>

              {/* Right Column: Visual Arquitectónico de Hardware (Rellena el espacio y da riqueza visual) */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                
                {/* Panel 01: Servidores y Redes */}
                <div className="bg-[#111111] text-white p-6 rounded-2xl border border-primary/40 shadow-hard flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0 border border-primary/50">
                    <Server size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-primary font-bold uppercase mb-1">
                      PILAR 01 // SERVIDORES
                    </div>
                    <div className="text-base font-display font-bold text-white mb-1">
                      Arquitectura Híbrida & Alta Disponibilidad
                    </div>
                    <div className="text-xs text-gray-400 font-sans">
                      Entornos redundantes y tolerancia a fallos para soporte clínico continuo.
                    </div>
                  </div>
                </div>

                {/* Panel 02: IoT Médico y Seguridad */}
                <div className="bg-[#111111] text-white p-6 rounded-2xl border border-primary/40 shadow-hard flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0 border border-primary/50">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-primary font-bold uppercase mb-1">
                      PILAR 02 // SEGURIDAD & IOT
                    </div>
                    <div className="text-base font-display font-bold text-white mb-1">
                      Protección de Datos & Sensores Médicos
                    </div>
                    <div className="text-xs text-gray-400 font-sans">
                      Conexión segura de dispositivos médicos con cifrado y normativas estrictas.
                    </div>
                  </div>
                </div>

                {/* Panel 03: Telemetría en Tiempo Real */}
                <div className="bg-[#111111] text-white p-6 rounded-2xl border border-primary/40 shadow-hard flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0 border border-primary/50">
                    <Activity size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-primary font-bold uppercase mb-1">
                      PILAR 03 // MONITOREO
                    </div>
                    <div className="text-base font-display font-bold text-white mb-1">
                      Supervisión 24/7 de Infraestructura
                    </div>
                    <div className="text-xs text-gray-400 font-sans">
                      Detección proactiva de cuellos de botella y respuesta inmediata.
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ==================== ¿QUÉ QUEREMOS REALIZAR? (MATRIZ DE OBJETIVOS MODULAR) ==================== */}
        <section className="section-padding bg-[#FAF8F5] border-y border-stone-300 relative">
          <div className="container-wide mx-auto">
            
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="text-primary font-bold tracking-widest uppercase text-xs block mb-3 font-mono">
                Metas y Propósito
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display mb-6 text-surface">
                ¿Qué queremos realizar?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-foreground-muted leading-relaxed font-sans">
                Nuestro objetivo como equipo de Hardware e Infraestructura es construir y sostener la base física que permite que la inteligencia artificial y los sistemas clínicos de IATECH Co. operen sin interrupciones. Esto se traduce en metas concretas para este proyecto:
              </p>
            </div>

            {/* Grid de 4 tarjetas de objetivos con diseño de módulo técnico */}
            <div ref={cardsGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {objectives.map((obj, idx) => (
                <div 
                  key={idx}
                  className="objective-card bg-white p-8 rounded-2xl border-2 border-stone-300 shadow-hard hover:shadow-hard-orange transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden"
                >
                  <div aria-hidden="true" className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none" />
                  
                  <div>
                    {/* Header técnico con código */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                        {obj.icon}
                      </div>
                      <span className="text-[10px] font-mono text-primary font-bold px-2.5 py-1 bg-primary/10 rounded-full border border-primary/20">
                        {obj.code}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-surface mb-3 group-hover:text-primary transition-colors">
                      {obj.title}
                    </h3>
                    <p className="text-foreground-muted text-sm md:text-base leading-relaxed">
                      {obj.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Directiva de Cierre - TEXTO EXACTO */}
            <div className="bg-[#111111] text-foreground-inverse p-8 sm:p-10 rounded-2xl shadow-hard-lg border-l-8 border-primary relative overflow-hidden">
              <div aria-hidden="true" className="absolute top-0 right-0 p-6 text-primary/10 font-mono text-6xl font-bold select-none pointer-events-none">
                "
              </div>
              <p className="text-base md:text-lg lg:text-xl text-gray-200 font-sans italic text-center md:text-left leading-relaxed relative z-10">
                "Todo esto lo llevamos adelante como equipo Tiradores, aplicando ciencia, tecnología e innovación al servicio de la salud digital en Bolivia."
              </p>
            </div>

          </div>
        </section>

        {/* ==================== ÁREAS DE GESTIÓN Y CULTURA (SERVER BLADE MODULES) ==================== */}
        <section className="section-padding bg-background relative overflow-hidden">
          <div className="container-wide mx-auto">
            
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-primary font-bold tracking-widest uppercase text-xs block mb-3 font-mono">
                MAPA ESTRUCTURAL
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-surface">
                Áreas de Gestión y Cultura
              </h2>
            </div>

            <div
              ref={quickLinksGridRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {quickLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  className="quick-link-card group block bg-[#111111] text-foreground-inverse p-7 rounded-2xl border border-neutral-800 shadow-hard hover:shadow-hard-orange hover:bg-neutral-900 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
                >
                  <div
                    aria-hidden="true"
                    className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform pointer-events-none text-primary"
                  >
                    {React.cloneElement(link.icon as React.ReactElement, { size: 100 })}
                  </div>

                  <div>
                    {/* Module index number */}
                    <div className="flex items-center justify-between mb-5 z-10 relative">
                      <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-white shadow-sm group-hover:rotate-6 transition-transform">
                        {link.icon}
                      </div>
                      <span className="text-xs font-mono text-gray-500 group-hover:text-primary transition-colors">
                        MODULE // {link.tag}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display tracking-wide mb-3 relative z-10 text-white group-hover:text-primary transition-colors leading-tight">
                      {link.title}
                    </h3>
                    <p className="text-gray-400 font-sans text-xs sm:text-sm mb-6 relative z-10 min-h-[40px] leading-relaxed">
                      {link.desc}
                    </p>
                  </div>

                  <div className="flex items-center text-primary font-bold uppercase text-xs tracking-widest relative z-10 group-hover:text-white transition-colors pt-2 border-t border-neutral-800/80">
                    Explorar <ArrowRight size={15} className="ml-2 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* ==================== SISTEMA DE INVENTARIO DE HARDWARE (CONSOLA DE MANDO) ==================== */}
        <section className="py-20 bg-[#111111] text-foreground-inverse border-t-4 border-primary relative overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 bg-tech-dots-dark opacity-20 pointer-events-none" />
          
          <div className="container-wide mx-auto text-center space-y-6 relative z-10 px-4">
            
            <div className="flex items-center justify-center gap-3">
              <span aria-hidden="true" className="w-8 h-1 bg-primary block rounded-full" />
              <span className="text-primary font-bold tracking-widest uppercase text-xs font-mono">
                Plataforma Operativa
              </span>
              <span aria-hidden="true" className="w-8 h-1 bg-primary block rounded-full" />
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-white">
              Sistema de Inventario de <span className="text-primary">Hardware</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-sans">
              Accede a nuestra plataforma web para el control de inventario, activos y equipamiento de infraestructura en tiempo real.
            </p>

            <div className="pt-4">
              <a 
                href="https://iatech-co-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3 text-base px-9 py-4 shadow-hard-orange hover:scale-105 transition-all group"
              >
                <span>Acceder al Sistema de Inventario</span>
                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </section>

        {/* ==================== BANDA NARANJA FINAL DE CONTACTO ==================== */}
        <section className="py-16 bg-primary text-foreground-inverse relative overflow-hidden shadow-hard-lg">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_right,_var(--color-primary-light),_transparent_70%)] opacity-30 pointer-events-none" />
          
          <div className="container-wide mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10 px-4">
            <div className="max-w-2xl text-center md:text-left">
              <span className="text-white/80 font-mono text-xs font-bold uppercase tracking-widest block mb-2">
                ¿Requieres soporte técnico o auditoría de infraestructura?
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-white">
                Hablemos sobre tu proyecto de salud digital
              </h2>
              <p className="text-white/90 text-sm sm:text-base font-sans mt-2 leading-relaxed">
                El equipo de Tiradores está disponible para coordinar arquitectura de hardware, despliegue de servidores y monitoreo en tiempo real.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                to="/contacto"
                className="btn-secondary text-surface bg-white hover:bg-stone-100 text-sm sm:text-base px-8 py-4 font-bold shadow-hard hover:scale-105 transition-transform inline-flex items-center gap-3 border-0"
              >
                <span>Contáctanos</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </AnimatedPage>
  );
}

function PlayCircle() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polygon points="10 8 16 12 10 16 10 8"/>
    </svg>
  );
}
