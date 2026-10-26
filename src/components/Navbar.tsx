import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cpu, Menu, X } from 'lucide-react';
import { gsap, ScrollTrigger } from '../lib/gsap';

export interface NavLinkItem {
  name: string;
  path: string;
}

export const navLinks: NavLinkItem[] = [
  { name: 'Inicio', path: '/' },
  { name: 'Gestión de Tecnología', path: '/gestion-tecnologia' },
  { name: 'Ciencia, Tecnología e Innovación', path: '/ciencia-tecnologia-innovacion' },
  { name: 'Misión y Visión', path: '/mision-vision' },
  { name: 'Organigrama', path: '/organigrama' },
  { name: 'MBTI', path: '/mbti' },
  { name: 'Scrum', path: '/scrum' },
  { name: 'IDEF0', path: '/idef0' },
  { name: 'BPMN', path: '/bpmn' },
  { name: 'Monitoreo', path: '/monitoreo' },
  { name: 'Servicios Externos', path: '/servicios-externos' },
  { name: 'Contacto', path: '/contacto' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navContainerRef = useRef<HTMLElement>(null);
  const navPillRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const liquidIndicatorRef = useRef<HTMLDivElement>(null);
  const linksContainerRef = useRef<HTMLDivElement>(null);
  const logoIconRef = useRef<SVGSVGElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // 1. GSAP Natural Scroll Behavior + Compact on Scroll + Stagger Entry
  useEffect(() => {
    const navPill = navPillRef.current;
    const progressBar = progressBarRef.current;
    if (!navPill) return;

    const ctx = gsap.context(() => {
      // 1A. ENTRADA INICIAL CON STAGGER FLUIDO
      const introTl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.05
      });

      // El contenedor desciende con suavidad
      introTl.fromTo(
        navPill,
        { y: -80, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8 }
      );

      // El icono de procesador gira y pulsa
      if (logoIconRef.current) {
        introTl.fromTo(
          logoIconRef.current,
          { rotate: -90, scale: 0.5, opacity: 0 },
          { rotate: 0, scale: 1, opacity: 1, duration: 0.6, ease: "back.out(2)" },
          "-=0.5"
        );
      }

      // Los enlaces entran en cascada (stagger)
      const linkElements = navPill.querySelectorAll('.nav-link-item');
      if (linkElements.length) {
        introTl.fromTo(
          linkElements,
          { y: -12, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.035,
            duration: 0.45,
            ease: "power2.out"
          },
          "-=0.4"
        );
      }

      // 1B. BARRA DE PROGRESO DE SCROLL FINA CON SCRUB
      if (progressBar) {
        ScrollTrigger.create({
          start: 'top top',
          end: 'bottom bottom',
          onUpdate: (self) => {
            gsap.to(progressBar, {
              scaleX: self.progress,
              ease: "none",
              duration: 0.05,
              overwrite: true
            });
          }
        });
      }

      // 1C. COMPACTACIÓN Y OCULTAMIENTO NATURAL AL NAVEGAR (ScrollTrigger nativo)
      let lastScrollY = window.scrollY;
      let isHidden = false;

      ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          const currentScrollY = self.scroll();
          const scrollDelta = currentScrollY - lastScrollY;

          // Compactación visual suave (reduce altura y densifica el cristal)
          if (currentScrollY > 40) {
            gsap.to(navPill, {
              paddingTop: '6px',
              paddingBottom: '6px',
              backgroundColor: 'rgba(12, 12, 12, 0.96)',
              borderColor: 'rgba(193, 82, 42, 0.55)',
              boxShadow: '0 16px 36px -8px rgba(0,0,0,0.7), 0 0 0 1px rgba(193,82,42,0.3)',
              duration: 0.25,
              overwrite: 'auto'
            });
          } else {
            gsap.to(navPill, {
              paddingTop: '10px',
              paddingBottom: '10px',
              backgroundColor: 'rgba(17, 17, 17, 0.90)',
              borderColor: 'rgba(193, 82, 42, 0.35)',
              boxShadow: '0 12px 30px -10px rgba(0,0,0,0.5), 0 0 0 1px rgba(193,82,42,0.2)',
              duration: 0.25,
              overwrite: 'auto'
            });
          }

          // Ocultamiento natural: solo si baja con intención (>10px de delta y superados los 90px)
          if (scrollDelta > 8 && currentScrollY > 100 && !isHidden) {
            isHidden = true;
            gsap.to(navPill, {
              y: -110,
              opacity: 0.85,
              duration: 0.35,
              ease: "power2.inOut",
              overwrite: 'auto'
            });
          } else if ((scrollDelta < -5 || currentScrollY <= 40) && isHidden) {
            // Reaparece fluidamente al subir o volver al tope
            isHidden = false;
            gsap.to(navPill, {
              y: 0,
              opacity: 1,
              duration: 0.35,
              ease: "power2.out",
              overwrite: 'auto'
            });
          }

          lastScrollY = currentScrollY;
        }
      });

    }, navContainerRef);

    return () => ctx.revert();
  }, []);

  // 2. INDICADOR LÍQUIDO ACTIVO FLUIDO
  useEffect(() => {
    const liquid = liquidIndicatorRef.current;
    const container = linksContainerRef.current;
    if (!liquid || !container) return;

    const activeEl = container.querySelector(`[data-path="${location.pathname}"]`) as HTMLElement;

    if (activeEl) {
      const containerRect = container.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();
      const targetLeft = activeRect.left - containerRect.left;
      const targetWidth = activeRect.width;

      const currentX = (gsap.getProperty(liquid, "x") as number) || 0;
      const movingRight = targetLeft > currentX;

      // Movimiento elástico de estiramiento y asentamiento ("líquido")
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(liquid, {
        opacity: 1,
        duration: 0.1
      })
      .to(liquid, {
        x: targetLeft,
        width: targetWidth,
        transformOrigin: movingRight ? "0% 50%" : "100% 50%",
        duration: 0.38,
        ease: "power3.out"
      }, 0);
    } else {
      gsap.to(liquid, { opacity: 0, duration: 0.2 });
    }
  }, [location.pathname]);

  // 3. MENÚ MÓVIL / TABLET CON EFECTO EN CASCADA
  useEffect(() => {
    const drawer = mobileMenuRef.current;
    if (!drawer) return;

    if (isMenuOpen) {
      gsap.set(drawer, { display: 'flex' });
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        drawer,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3 }
      )
      .fromTo(
        drawer.querySelectorAll('.mobile-nav-link'),
        { opacity: 0, x: -25 },
        { opacity: 1, x: 0, stagger: 0.04, duration: 0.3 },
        "-=0.15"
      );
    } else {
      gsap.to(drawer, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(drawer, { display: 'none' });
        }
      });
    }
  }, [isMenuOpen]);

  // Microinteracción del icono del logo al pasar el cursor
  const handleLogoHover = (enter: boolean) => {
    if (logoIconRef.current) {
      gsap.to(logoIconRef.current, {
        rotate: enter ? 180 : 0,
        scale: enter ? 1.15 : 1,
        duration: 0.4,
        ease: enter ? "back.out(2)" : "power2.out"
      });
    }
  };

  return (
    <header
      ref={navContainerRef}
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 md:px-8 pt-3 sm:pt-4 pointer-events-none select-none"
    >
      {/* Barra de progreso de lectura (Scrub naranja al tope de la pantalla) */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-neutral-900/60 z-[52] pointer-events-none">
        <div
          ref={progressBarRef}
          aria-hidden="true"
          className="w-full h-full bg-gradient-to-r from-primary via-[#e0683a] to-primary origin-left"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>

      {/* Cápsula flotante técnica (Glass Floating Bar) */}
      <div
        ref={navPillRef}
        className="max-w-[1780px] mx-auto bg-[#111111]/90 backdrop-blur-2xl rounded-2xl md:rounded-full px-4 sm:px-6 py-2.5 transition-[padding,background-color,border-color,box-shadow] pointer-events-auto border border-primary/35 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.5),0_0_0_1px_rgba(193,82,42,0.2)]"
      >
        <div className="flex items-center justify-between gap-3">
          {/* LOGO TIRADORES - TEXTO EXACTO */}
          <Link
            to="/"
            onMouseEnter={() => handleLogoHover(true)}
            onMouseLeave={() => handleLogoHover(false)}
            className="flex items-center gap-2.5 group shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/60 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
              <Cpu
                ref={logoIconRef}
                size={18}
                className="transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg md:text-xl tracking-wider text-white group-hover:text-primary transition-colors leading-none">
                Tiradores
              </span>
              <span aria-hidden="true" className="font-mono text-[9px] text-primary tracking-widest leading-none mt-1 hidden sm:block">
                HW & INFRA
              </span>
            </div>
          </Link>

          {/* Enlaces de Navegación de Escritorio con Indicador Líquido */}
          <nav
            ref={linksContainerRef}
            className="hidden xl:flex items-center gap-0.5 relative py-1"
          >
            {/* Indicador líquido activo deslizante */}
            <div
              ref={liquidIndicatorRef}
              aria-hidden="true"
              className="absolute top-1 bottom-1 left-0 bg-primary/20 border border-primary/60 rounded-full pointer-events-none opacity-0 shadow-[0_0_12px_rgba(193,82,42,0.3)]"
              style={{ width: 0 }}
            />

            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  data-path={link.path}
                  className={`nav-link-item relative px-2 2xl:px-3 py-1.5 rounded-full text-[11px] 2xl:text-[12.5px] font-sans font-medium transition-colors z-10 whitespace-nowrap ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Botón CTA Contáctanos (Desktop) */}
          <div className="hidden xl:flex items-center">
            <Link
              to="/contacto"
              className="btn-primary text-xs py-2 px-4 font-semibold uppercase tracking-wider shadow-sm hover:scale-105 transition-transform ml-1"
            >
              Contáctanos
            </Link>
          </div>

          {/* Botón de Menú Móvil / Tablet */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:text-primary transition-colors rounded-lg bg-white/5 border border-white/10"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Desplegable Móvil / Tablet */}
      <div
        ref={mobileMenuRef}
        style={{ display: 'none' }}
        className="fixed inset-0 top-[72px] z-40 bg-[#0F0F0F]/98 backdrop-blur-2xl p-6 sm:p-8 flex-col justify-start overflow-y-auto pointer-events-auto border-t border-primary/30"
      >
        <div className="flex flex-col gap-2 pt-2 max-w-lg mx-auto w-full">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`mobile-nav-link text-lg sm:text-xl font-display uppercase tracking-wide py-2.5 px-4 rounded-xl border-l-2 transition-all ${
                  isActive
                    ? "text-primary border-primary bg-primary/10 pl-5 font-bold"
                    : "text-gray-300 border-transparent hover:border-primary/50 hover:text-white hover:bg-white/5 hover:pl-5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Botón CTA Contáctanos en Menú Móvil */}
          <div className="pt-4 mt-2 border-t border-neutral-800">
            <Link
              to="/contacto"
              onClick={() => setIsMenuOpen(false)}
              className="btn-primary w-full text-center justify-center py-3 text-sm font-bold shadow-hard-orange"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
