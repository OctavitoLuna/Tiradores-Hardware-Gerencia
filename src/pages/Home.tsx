import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Zap, Target, Users, BookOpen, Layers, Server } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import FadeIn from '../components/FadeIn';

export default function Home() {
  const quickLinks = [
    {
      title: 'Gestión de Tecnología',
      desc: 'Cómo dirigimos la estrategia tecnológica del área.',
      path: '/gestion-tecnologia',
      icon: <Settings size={24} />
    },
    {
      title: 'Ciencia, Tecnología e Innovación',
      desc: 'El motor del progreso que inspira nuestro trabajo.',
      path: '/ciencia-tecnologia-innovacion',
      icon: <Zap size={24} />
    },
    {
      title: 'Misión y Visión',
      desc: 'Nuestro propósito y hacia dónde vamos.',
      path: '/mision-vision',
      icon: <Target size={24} />
    },
    {
      title: 'Organigrama',
      desc: 'Cómo está estructurado y quién hace qué.',
      path: '/organigrama',
      icon: <Layers size={24} />
    },
    {
      title: 'MBTI',
      desc: 'Las personalidades que forman nuestro equipo.',
      path: '/mbti',
      icon: <Users size={24} />
    },
    {
      title: 'Scrum',
      desc: 'Nuestra metodología ágil de trabajo.',
      path: '/scrum',
      icon: <BookOpen size={24} />
    }
  ];

  return (
    <AnimatedPage>
    <div className="w-full">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden bg-background">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-1 bg-primary block"></span>
              <span className="text-primary font-bold tracking-widest uppercase text-sm">IA MediTech</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display leading-[0.9] mb-8 text-surface">
              Construimos la base física que sostiene la <span className="text-primary">salud digital.</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground-muted mb-10 max-w-xl font-sans">
              Hola. Hablamos desde el equipo de Hardware e Infraestructura de Tiradores. Diseñamos, implementamos y garantizamos que el software médico crítico funcione sin interrupciones.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/organigrama" className="btn-primary">
                Conoce al equipo
              </Link>
              <Link to="/scrum" className="btn-secondary flex items-center gap-2">
                <PlayCircle /> Nuestra metodología
              </Link>
            </div>
          </div>
          
          <div className="relative w-full max-w-[320px] md:max-w-[450px] aspect-square mx-auto lg:ml-auto mt-12 lg:mt-0 shrink-0">
            {/* Decorative orbital circles */}
            <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-primary/40 animate-[spin_15s_linear_infinite_reverse]"></div>
            
            {/* Main Image Container */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-primary bg-surface group">
               {/* Image with CSS blend modes to match the color palette */}
               <img 
                 src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800" 
                 alt="Infraestructura y Servidores"
                 className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:scale-110 transition-transform duration-1000 grayscale"
               />
               <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
            </div>

            {/* Floating accents */}
            <div className="absolute top-0 left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-1/4 right-0 w-3 h-3 bg-surface rounded-full translate-x-1/2"></div>
            
            {/* Additional tech accent */}
            <div className="absolute top-1/4 left-0 w-16 h-16 bg-surface text-primary rounded-full flex items-center justify-center -translate-x-1/2 border-4 border-background shadow-lg z-10">
               <Server size={32} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <FadeIn delay={0.2}>
      <section className="bg-surface text-foreground-inverse py-12 border-t-4 border-primary">
        <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl md:text-7xl font-display text-primary mb-2">5</div>
            <div className="text-sm font-sans tracking-wider uppercase text-gray-400">Integrantes del equipo</div>
          </div>
          <div>
            <div className="text-5xl md:text-7xl font-display text-primary mb-2">4</div>
            <div className="text-sm font-sans tracking-wider uppercase text-gray-400">Áreas de gestión</div>
          </div>
          <div>
            <div className="text-5xl md:text-7xl font-display text-primary mb-2">99.9%</div>
            <div className="text-sm font-sans tracking-wider uppercase text-gray-400">Disponibilidad objetivo</div>
          </div>
          <div>
            <div className="text-5xl md:text-7xl font-display text-primary mb-2">1</div>
            <div className="text-sm font-sans tracking-wider uppercase text-gray-400">Proyecto estratégico: IA MediTech</div>
          </div>
        </div>
      </section>
      </FadeIn>

      {/* About Us */}
      <FadeIn>
      <section className="section-padding bg-background-dark">
        <div className="container-wide max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-display mb-8">¿Quiénes somos?</h2>
          <p className="text-lg md:text-xl text-foreground-muted mb-10 leading-relaxed">
            Somos el equipo de Ingeniería de Hardware y Soporte de Infraestructura de Tiradores, una empresa especializada en el desarrollo de soluciones de software para el sector médico. Diseñamos, implementamos y mantenemos la base física y los entornos de alta disponibilidad que garantizan la ejecución segura, rápida y continua de nuestras aplicaciones de salud. Combinamos conocimiento en arquitectura de servidores, redes seguras, dispositivos IoT médicos y sistemas embebidos para proteger la información sensible de los pacientes.
          </p>
          <Link to="/gestion-tecnologia" className="btn-primary inline-flex">
            Leer más
          </Link>
        </div>
      </section>
      </FadeIn>

      {/* Quick Access Grid */}
      <FadeIn delay={0.1}>
      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="text-4xl md:text-5xl font-display mb-12 text-center">Áreas de Gestión y Cultura</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, idx) => (
              <Link key={idx} to={link.path} className="group block bg-surface text-foreground-inverse p-8 hover:bg-gray-900 transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                   {React.cloneElement(link.icon as React.ReactElement, { size: 120 })}
                </div>
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white mb-6 relative z-10">
                  {link.icon}
                </div>
                <h3 className="text-2xl font-display tracking-wide mb-3 relative z-10">{link.title}</h3>
                <p className="text-gray-400 font-sans text-sm mb-6 relative z-10 min-h-[40px]">{link.desc}</p>
                <div className="flex items-center text-primary font-bold uppercase text-xs tracking-widest relative z-10 group-hover:text-white transition-colors">
                  Explorar <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </FadeIn>
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
