import React, { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import FadeIn from '../components/FadeIn';
import { 
  ArrowRight, 
  ArrowDown, 
  ArrowUp, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  Maximize2, 
  Minimize2, 
  Download,
  Info,
  Cpu,
  Sparkles,
  ZoomIn,
  ZoomOut,
  X
} from 'lucide-react';

export default function IDEF0() {
  const [imageSrc, setImageSrc] = useState('/idef0-diagram.svg');
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [activeZone, setActiveZone] = useState<string | null>(null);

  const icomZones = [
    {
      id: 'controles',
      title: 'Controles (C) — Entrada Superior',
      color: 'border-indigo-600 bg-indigo-50/70 text-indigo-900',
      badgeBg: 'bg-indigo-700 text-white',
      desc: 'Normas, políticas, restricciones o criterios que guían y condicionan el proceso sin ser consumidos por él.',
      items: [
        'Políticas de gobernanza y seguridad de datos de salud',
        'Normativas de salud internacionales (ISO, CE, FDA)',
        'Presupuesto OPEX / CAPEX asignado',
        'Estrategia corporativa y objetivos de IATECH Co.'
      ],
      icon: <ArrowDown className="text-indigo-600" size={20} />
    },
    {
      id: 'entradas',
      title: 'Entradas (I) — Entrada Izquierda',
      color: 'border-[#C1522A] bg-amber-50/70 text-amber-950',
      badgeBg: 'bg-[#C1522A] text-white',
      desc: 'Materia prima, requerimientos o información que la actividad transforma o consume para generar su salida.',
      items: [
        'Requerimientos de infraestructura clínica y asistencial',
        'Solicitudes de soporte técnico de personal médico',
        'Datos actualizados de inventario de equipos y activos',
        'Especificaciones técnicas de proveedores y hardware'
      ],
      icon: <ArrowRight className="text-[#C1522A]" size={20} />
    },
    {
      id: 'salidas',
      title: 'Salidas (O) — Salida Derecha',
      color: 'border-emerald-600 bg-emerald-50/70 text-emerald-950',
      badgeBg: 'bg-emerald-700 text-white',
      desc: 'Resultados tangibles, servicios y productos operacionales generados por la actividad.',
      items: [
        'Infraestructura de alta disponibilidad (disponibilidad garantizada del 99.9%)',
        'Sistemas clínicos operativos y en producción sin interrupciones',
        'Reportes periódicos de mantenimiento preventivo/correctivo y KPIs',
        'Incidencias resueltas de manera oportuna (mesa de ayuda técnica)'
      ],
      icon: <ArrowRight className="text-emerald-600" size={20} />
    },
    {
      id: 'mecanismos',
      title: 'Mecanismos (M) — Entrada Inferior',
      color: 'border-teal-700 bg-teal-50/70 text-teal-950',
      badgeBg: 'bg-teal-700 text-white',
      desc: 'Recursos humanos, tecnológicos y sistemas que ejecutan la actividad sin ser transformados por ella.',
      items: [
        'Equipo técnico especializado (Equipo Tiradores)',
        'Infraestructura cloud e híbrida de alta resiliencia',
        'Herramientas de monitoreo y gestión de proyectos (Smartsheet)',
        'Equipos y hardware físico (servidores de misión crítica, switches de red, dispositivos IoT médicos)'
      ],
      icon: <ArrowUp className="text-teal-700" size={20} />
    }
  ];

  return (
    <AnimatedPage>
      <div className="w-full bg-background pb-24">
        {/* Page Header */}
        <header className="bg-surface text-foreground-inverse py-20 border-b-8 border-primary">
          <div className="container-wide text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1 rounded-full mb-3 border border-primary/20">
              Estándar FIPS PUB 183 • Nivel A-0
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display tracking-wide text-white mb-4">
              IDEF0 — Modelado Funcional del Proceso
            </h1>
            <p className="text-lg md:text-xl font-display tracking-widest text-primary uppercase max-w-2xl mx-auto">
              Estructura ICOM del Área de Hardware e Infraestructura • IATECH Co.
            </p>
          </div>
        </header>

        <div className="container-wide max-w-7xl mt-16 space-y-24">

          {/* 1.1 ¿Qué es IDEF0? */}
          <FadeIn>
            <section>
              <h2 className="text-3xl md:text-4xl font-display mb-6 border-l-4 border-primary pl-4 text-surface">
                1.1 ¿Qué es IDEF0?
              </h2>
              <div className="text-lg text-foreground-muted leading-relaxed space-y-4 mb-6">
                <p>
                  <strong>IDEF0</strong> (<em>ICAM DEFinition for Function Modeling</em>) es una metodología de modelado funcional utilizada para describir de forma gráfica y jerárquica las funciones, decisiones y actividades de una organización o sistema. Su nombre proviene del programa <strong>ICAM</strong> (<em>Integrated Computer Aided Manufacturing</em>) de la <strong>Fuerza Aérea de los Estados Unidos</strong>, que la desarrolló a mediados de los años 70 como estándar para documentar y analizar procesos de manufactura e ingeniería.
                </p>
                <p>
                  IDEF0 está construido sobre el lenguaje <strong>SADT</strong> (<em>Structured Analysis and Design Technique</em>), creado por Douglas T. Ross, y forma parte de la familia de lenguajes de modelado <strong>IDEF</strong> (que va desde IDEF0 hasta IDEF14, cada uno enfocado en un tipo distinto de modelado: funcional, de datos, dinámico, orientado a objetos, entre otros). Fue publicado oficialmente como estándar federal de EE.UU. bajo la norma <strong>FIPS PUB 183</strong> en 1993, y hoy se aplica ampliamente en reingeniería de procesos, análisis de sistemas de información e ingeniería de software.
                </p>
              </div>

              {/* Highlight callout box */}
              <div className="bg-white p-6 border-l-4 border-surface shadow-sm rounded-r-md flex items-start gap-4">
                <div className="p-2 bg-primary/10 text-primary rounded-md shrink-0 mt-1">
                  <Info size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-surface mb-1 uppercase tracking-wider text-sm">
                    Estándar Internacional Consolidado
                  </h4>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    IDEF0 no es un mero diagrama estético: es un estándar formal de modelado funcional que separa con rigor <em>qué hace</em> un sistema de <em>cómo</em> o <em>cuándo</em> se implementa, permitiendo una trazabilidad inigualable entre políticas de control, insumos, recursos y productos.
                  </p>
                </div>
              </div>
            </section>
          </FadeIn>

          {/* 1.2 ¿Para qué sirve? */}
          <FadeIn delay={0.1}>
            <section className="bg-background-dark p-8 md:p-12 border-t-4 border-primary rounded-sm shadow-sm">
              <h2 className="text-3xl md:text-4xl font-display mb-6 text-surface">
                1.2 ¿Para qué sirve?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-md shadow-sm border border-stone-200 flex gap-4">
                  <div className="text-primary font-display font-bold text-2xl">01</div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-surface mb-2">
                      Diferenciación de flujo funcional vs. temporal
                    </h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      Representar de forma clara y estandarizada <strong>qué hace</strong> un proceso u organización, sin describir <em>cómo</em> lo hace internamente (control de flujo), lo que lo diferencia de un diagrama de flujo tradicional.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-md shadow-sm border border-stone-200 flex gap-4">
                  <div className="text-primary font-display font-bold text-2xl">02</div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-surface mb-2">
                      Diagnóstico As-Is y diseño To-Be
                    </h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      Analizar procesos "tal cual" (<em>as-is</em>) para detectar cuellos de botella, redundancias o mejoras posibles, y también modelar procesos deseados (<em>to-be</em>).
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-md shadow-sm border border-stone-200 flex gap-4">
                  <div className="text-primary font-display font-bold text-2xl">03</div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-surface mb-2">
                      Comunicación de relaciones con el entorno
                    </h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      Comunicar de forma visual y jerárquica cómo interactúan las funciones de un sistema con su entorno (datos, normas, recursos).
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-md shadow-sm border border-stone-200 flex gap-4">
                  <div className="text-primary font-display font-bold text-2xl">04</div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-surface mb-2">
                      Base de integración y reingeniería
                    </h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      Servir de base para reingeniería de procesos, integración de sistemas de información y documentación de procesos de negocio.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </FadeIn>

          {/* 1.3 Componentes del modelo: ICOM */}
          <FadeIn delay={0.1}>
            <section>
              <h2 className="text-3xl md:text-4xl font-display mb-6 border-l-4 border-primary pl-4 text-surface">
                1.3 Componentes del modelo: ICOM
              </h2>
              <p className="text-lg text-foreground-muted leading-relaxed mb-8">
                Cada actividad de un diagrama IDEF0 se representa como una <strong>caja con un verbo de acción</strong> en su interior (ej. <em>"Transformar datos"</em>, <em>"Gestionar infraestructura"</em>), rodeada por 4 tipos de flechas direccionales, conocidas universalmente por sus siglas <strong>ICOM</strong>:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Inputs */}
                <div className="bg-white p-6 border-l-4 border-[#C1522A] shadow-sm rounded-r-md">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#C1522A] text-white text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      I — Inputs (Entradas)
                    </span>
                    <span className="text-xs text-foreground-muted font-medium">Lado Izquierdo</span>
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    Entran por el <strong>lado izquierdo</strong> de la caja. Son la materia, información o datos que la actividad transforma o consume para generar su salida.
                  </p>
                </div>

                {/* Controls */}
                <div className="bg-white p-6 border-l-4 border-indigo-700 shadow-sm rounded-r-md">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-indigo-700 text-white text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      C — Controls (Controles)
                    </span>
                    <span className="text-xs text-foreground-muted font-medium">Parte Superior</span>
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    Entran por la <strong>parte superior</strong> de la caja. Son las normas, políticas, restricciones o criterios que guían, condicionan o limitan cómo se ejecuta la actividad (sin ser consumidos por ella).
                  </p>
                </div>

                {/* Outputs */}
                <div className="bg-white p-6 border-l-4 border-emerald-700 shadow-sm rounded-r-md">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-emerald-700 text-white text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      O — Outputs (Salidas)
                    </span>
                    <span className="text-xs text-foreground-muted font-medium">Lado Derecho</span>
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    Salen por el <strong>lado derecho</strong> de la caja. Son los resultados, productos o datos generados por la actividad.
                  </p>
                </div>

                {/* Mechanisms */}
                <div className="bg-white p-6 border-l-4 border-teal-700 shadow-sm rounded-r-md">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-teal-700 text-white text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      M — Mechanisms (Mecanismos)
                    </span>
                    <span className="text-xs text-foreground-muted font-medium">Parte Inferior</span>
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    Entran por la <strong>parte inferior</strong> de la caja. Son los recursos (personas, herramientas, infraestructura, sistemas) que permiten ejecutar la actividad, sin ser transformados por ella.
                  </p>
                </div>
              </div>
            </section>
          </FadeIn>

          {/* 1.4 Jerarquía y descomposición */}
          <FadeIn delay={0.1}>
            <section className="bg-white p-8 md:p-12 border-l-4 border-surface shadow-sm rounded-r-md">
              <h2 className="text-3xl md:text-4xl font-display mb-6 text-surface">
                1.4 Jerarquía y descomposición
              </h2>
              <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                Un modelo IDEF0 no es un único diagrama aislado, sino un <strong>conjunto jerárquico de diagramas</strong> interconectados con rigurosa coherencia topológica:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-background/60 rounded-md">
                  <span className="bg-surface text-primary font-display font-bold px-3 py-1 rounded text-sm shrink-0">
                    A-0
                  </span>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    El diagrama de más alto nivel se llama <strong>A-0</strong> (pronunciado <em>"A menos cero"</em>) y representa el proceso completo como una sola caja con su contexto general (entradas, controles, mecanismos y salidas del sistema completo). <span className="text-primary font-semibold">Este es el tipo de diagrama que ya elaboramos para nuestro proyecto.</span>
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 bg-background/60 rounded-md">
                  <span className="bg-surface text-foreground-inverse font-display font-bold px-3 py-1 rounded text-sm shrink-0">
                    A0
                  </span>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    Ese proceso principal puede descomponerse en un diagrama <strong>A0</strong>, con varias sub-actividades relacionadas entre sí mediante flujos internos.
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 bg-background/60 rounded-md">
                  <span className="bg-surface text-gray-300 font-display font-bold px-3 py-1 rounded text-sm shrink-0">
                    A1, A2...
                  </span>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    Cada sub-actividad puede, a su vez, descomponerse en más detalle (<strong>A1, A2, A3...</strong>), permitiendo bajar de nivel de abstracción progresivamente sin perder jamás la coherencia con el nivel superior.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 border border-dashed border-gray-300 rounded-md bg-stone-50 text-xs text-foreground-muted">
                <strong>Principio de cascada cognitiva:</strong> Esta estructura permite que cualquier persona o directivo entienda primero el panorama general en segundos y luego profundice exclusivamente en el nivel técnico de detalle que le compete.
              </div>
            </section>
          </FadeIn>

          {/* 1.5 Beneficios de usar IDEF0 */}
          <FadeIn delay={0.1}>
            <section>
              <h2 className="text-3xl md:text-4xl font-display mb-8 border-l-4 border-primary pl-4 text-surface">
                1.5 Beneficios de usar IDEF0
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#FAF8F5] p-6 border-t-4 border-surface shadow-sm rounded-b-md">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="text-primary" size={24} />
                    <h3 className="font-display font-bold text-lg text-surface uppercase">Visión Integral y Estandarizada</h3>
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    Da una visión <strong>integral y estandarizada</strong> del funcionamiento de un área u organización en una sola lámina de alta claridad.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-6 border-t-4 border-primary shadow-sm rounded-b-md">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="text-primary" size={24} />
                    <h3 className="font-display font-bold text-lg text-surface uppercase">Trazabilidad de Dependencias</h3>
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    Facilita identificar <strong>qué depende de qué</strong>: qué controles regulan un proceso, qué recursos lo sostienen y qué resultados produce.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-6 border-t-4 border-[#C1522A] shadow-sm rounded-b-md">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="text-[#C1522A]" size={24} />
                    <h3 className="font-display font-bold text-lg text-surface uppercase">Detección de Brechas de Diseño</h3>
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    Permite detectar procesos sin control definido, sin mecanismo asignado, o sin una salida clara (señal inequívoca de un proceso mal diseñado o riesgoso).
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-6 border-t-4 border-emerald-700 shadow-sm rounded-b-md">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="text-emerald-700" size={24} />
                    <h3 className="font-display font-bold text-lg text-surface uppercase">Lenguaje Universal Puente</h3>
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    Es un lenguaje común entendible tanto por perfiles técnicos como de negocio, útil para presentar procesos a distintos públicos (equipo técnico, gerencia, stakeholders).
                  </p>
                </div>
              </div>
            </section>
          </FadeIn>

          {/* 1.6 Nuestro Diagrama IDEF0 — Área de Hardware e Infraestructura */}
          <FadeIn delay={0.1}>
            <section className="space-y-8" id="diagrama-seccion">
              <div className="border-b pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1 block">
                  Caso Práctico Tiradores • Nivel A-0
                </span>
                <h2 className="text-3xl md:text-4xl font-display text-surface">
                  1.6 Nuestro Diagrama IDEF0 — Área de Hardware e Infraestructura
                </h2>
              </div>

              {/* HERO CARD CON EL DIAGRAMA */}
              <div className="bg-[#FAF7F2] p-4 sm:p-8 md:p-10 rounded-2xl border border-[#E3DACB] shadow-xl relative overflow-hidden group">
                
                {/* Header de la tarjeta del diagrama */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E8DFD3]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-purple-900 text-white rounded-lg shadow-sm">
                      <Cpu size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-surface">
                        Diagrama Oficial A-0: Hardware e Infraestructura
                      </h3>
                      <p className="text-xs text-foreground-muted">
                        IATECH Co. • Arquitectura funcional con recuadro central morado y flujos ICOM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setIsZoomed(!isZoomed);
                        setZoomScale(1);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-stone-100 text-surface text-xs font-semibold rounded-md border border-stone-300 transition-colors shadow-sm cursor-pointer"
                      title={isZoomed ? "Reducir vista" : "Ver en pantalla completa"}
                    >
                      {isZoomed ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                      <span>{isZoomed ? "Restaurar" : "Ampliar"}</span>
                    </button>
                    <a
                      href="/idef0-diagram.svg"
                      download="IDEF0_Hardware_Infraestructura_IATECH.svg"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary hover:bg-primary-hover text-white text-xs font-semibold rounded-md transition-colors shadow-sm"
                      title="Descargar diagrama vectorial"
                    >
                      <Download size={14} />
                      <span>Descargar SVG</span>
                    </a>
                  </div>
                </div>

                {/* IMAGEN DEL DIAGRAMA CENTRADA (CLICKABLE PARA AMPLIAR) */}
                <div 
                  onClick={() => {
                    setIsZoomed(true);
                    setZoomScale(1);
                  }}
                  className="relative w-full overflow-hidden rounded-xl bg-[#F8F5EE] border border-stone-200/80 p-2 sm:p-4 flex items-center justify-center min-h-[380px] md:min-h-[500px] cursor-pointer group"
                >
                  <img
                    src={imageSrc}
                    onError={() => {
                      if (imageSrc !== '/idef0-diagram.svg') {
                        setImageSrc('/idef0-diagram.svg');
                      }
                    }}
                    alt="Diagrama IDEF0 Área de Hardware e Infraestructura IATECH Co."
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-[650px] object-contain rounded-lg transition-transform duration-300 shadow-md group-hover:scale-[1.01]"
                  />

                  {/* Badge flotante de ayuda */}
                  <div className="absolute bottom-4 right-4 bg-surface/85 hover:bg-surface text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transition-all group-hover:scale-105 backdrop-blur-xs">
                    <Maximize2 size={13} className="text-primary" />
                    <span>Haz clic para ampliar</span>
                  </div>
                </div>

                {/* Pie de foto de la tarjeta */}
                <div className="mt-4 flex flex-col sm:flex-row justify-between items-center text-xs text-foreground-muted gap-2 px-2">
                  <div className="flex items-center gap-1.5">
                    <Sparkles size={14} className="text-primary" />
                    <span>Diagrama funcional elaborado por el equipo Pisadores / Tiradores</span>
                  </div>
                  <span className="font-mono bg-white px-2.5 py-1 rounded border border-stone-200">
                    Nodo: A-0 • Título: Hardware e Infraestructura
                  </span>
                </div>
              </div>

              {/* MODAL ZOOM CON CONTROLES AVANZADOS */}
              {isZoomed && (
                <div 
                  className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-2 sm:p-4 md:p-6"
                  onClick={() => setIsZoomed(false)}
                >
                  <div 
                    className="bg-[#FAF7F2] p-4 sm:p-6 rounded-2xl max-w-7xl w-full h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-stone-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex flex-wrap justify-between items-center mb-4 pb-3 border-b border-stone-300 gap-3">
                      <div>
                        <h4 className="font-display font-bold text-lg md:text-xl text-surface">
                          Vista Ampliada — Diagrama IDEF0 (Nivel A-0)
                        </h4>
                        <p className="text-xs text-foreground-muted font-sans">
                          Usa los controles de zoom o la rueda del ratón para inspeccionar cada flujo ICOM
                        </p>
                      </div>

                      {/* Controles de Zoom */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center bg-white border border-stone-300 rounded-lg p-1 shadow-sm">
                          <button
                            onClick={() => setZoomScale(Math.max(0.6, zoomScale - 0.2))}
                            className="p-1.5 hover:bg-stone-100 rounded text-surface transition-colors cursor-pointer"
                            title="Reducir (-) zoom"
                          >
                            <ZoomOut size={16} />
                          </button>
                          <span className="px-3 text-xs font-mono font-bold text-surface min-w-[50px] text-center">
                            {Math.round(zoomScale * 100)}%
                          </span>
                          <button
                            onClick={() => setZoomScale(Math.min(2.5, zoomScale + 0.2))}
                            className="p-1.5 hover:bg-stone-100 rounded text-surface transition-colors cursor-pointer"
                            title="Aumentar (+) zoom"
                          >
                            <ZoomIn size={16} />
                          </button>
                          <button
                            onClick={() => setZoomScale(1)}
                            className="px-2 py-1 ml-1 hover:bg-stone-100 rounded text-[11px] font-semibold text-primary transition-colors cursor-pointer border-l border-stone-200"
                            title="Restablecer a 100%"
                          >
                            1:1
                          </button>
                        </div>

                        <a
                          href="/idef0-diagram.svg"
                          download="IDEF0_Hardware_Infraestructura_IATECH.svg"
                          className="p-2 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors shadow-sm"
                          title="Descargar SVG original"
                        >
                          <Download size={16} />
                        </a>

                        <button 
                          onClick={() => setIsZoomed(false)}
                          className="p-2 bg-stone-200 hover:bg-stone-300 rounded-lg text-surface transition-colors cursor-pointer"
                          title="Cerrar vista ampliada (Esc)"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </div>

                    {/* Canvas con scroll y zoom dinámico */}
                    <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-white rounded-xl border border-stone-200 shadow-inner">
                      <div 
                        style={{ 
                          transform: `scale(${zoomScale})`, 
                          transformOrigin: 'center center',
                          transition: 'transform 0.15s ease-out' 
                        }}
                        className="w-full flex items-center justify-center"
                      >
                        <img 
                          src={imageSrc}
                          alt="Diagrama IDEF0 en alta resolución" 
                          referrerPolicy="no-referrer"
                          className="w-full max-h-[78vh] object-contain select-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* DESGLOSE DETALLADO DE CADA BLOQUE DEL DIAGRAMA */}
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-2">
                  <Layers className="text-primary" size={24} />
                  <h3 className="text-2xl font-display font-bold text-surface uppercase">
                    Desglose Estructurado del Diagrama Propio
                  </h3>
                </div>

                {/* 1. Proceso central */}
                <div className="bg-white p-6 sm:p-8 border-l-4 border-purple-800 shadow-sm rounded-r-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-purple-900 text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                      Caja Central (A-0)
                    </span>
                    <span className="text-sm font-semibold text-purple-900">Proceso Central</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-display font-bold text-surface mb-2">
                    Área de Hardware e Infraestructura
                  </h4>
                  <p className="text-foreground-muted text-base leading-relaxed">
                    <strong>Función / Verbo de acción:</strong> Diseñar, desplegar y mantener la infraestructura física que garantiza la continuidad operativa de los sistemas clínicos críticos.
                  </p>
                </div>

                {/* Bloques interactivos de ICOM */}
                <div className="grid md:grid-cols-2 gap-6">
                  {icomZones.map((zone) => (
                    <div 
                      key={zone.id}
                      className={`p-6 border-l-4 ${zone.color} shadow-sm rounded-r-xl bg-white transition-all`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-sm uppercase tracking-wider ${zone.badgeBg}`}>
                          {zone.title}
                        </span>
                        {zone.icon}
                      </div>
                      <p className="text-xs text-foreground-muted italic mb-4">
                        {zone.desc}
                      </p>
                      <ul className="space-y-2">
                        {zone.items.map((item, idx) => (
                          <li key={idx} className="text-sm text-surface font-medium flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* TEXTO DE CIERRE REQUERIDO */}
                <div className="bg-surface text-foreground-inverse p-8 rounded-xl shadow-lg border-t-4 border-primary">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 text-primary rounded-lg shrink-0 mt-1">
                      <ShieldCheck size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold text-white mb-3">
                        Alcance y Proyección Futura (Nivel A-0 a Nivel A0)
                      </h4>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        Este diagrama representa el nivel <strong>A-0</strong> de nuestro proceso: la vista general del área de Hardware e Infraestructura y su relación con el resto de IATECH Co. En futuras iteraciones, este proceso podría descomponerse en diagramas de nivel <strong>A0</strong> para detallar cada una de las 4 áreas del organigrama (<strong>Dirección de Tecnología y Presupuesto</strong>, <strong>Gestión de Infraestructura Global</strong>, <strong>Aseguramiento de Calidad y Recursos</strong>, y <strong>Operaciones de Soporte</strong>) como sub-funciones independientes.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </section>
          </FadeIn>

        </div>
      </div>
    </AnimatedPage>
  );
}
