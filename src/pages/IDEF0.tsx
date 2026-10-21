import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowDown, 
  ArrowUp, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  Info, 
  Cpu, 
  Sparkles,
  Network
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Marker } from '../components/ui/Marker';
import { DiagramViewer } from '../components/ui/DiagramViewer';

export default function IDEF0() {
  const [activeIcomHover, setActiveIcomHover] = useState<string | null>(null);

  const icomZones = [
    {
      id: 'controles',
      title: 'Controles (C) — Entrada Superior',
      color: 'bg-[#7C6BFF] text-white',
      badgeColor: 'black' as const,
      desc: 'Normas, políticas, restricciones o criterios que guían y condicionan el proceso sin ser consumidos por él.',
      items: [
        'Políticas de gobernanza y seguridad de datos de salud',
        'Normativas de salud internacionales (ISO, CE, FDA)',
        'Presupuesto OPEX / CAPEX asignado',
        'Estrategia corporativa y objetivos de IATECH Co.'
      ],
      icon: <ArrowDown size={22} className="text-white" />
    },
    {
      id: 'entradas',
      title: 'Entradas (I) — Entrada Izquierda',
      color: 'bg-[#C1522A] text-white',
      badgeColor: 'yellow' as const,
      desc: 'Materia prima, requerimientos o información que la actividad transforma o consume para generar su salida.',
      items: [
        'Requerimientos de infraestructura clínica y asistencial',
        'Solicitudes de soporte técnico de personal médico',
        'Datos actualizados de inventario de equipos y activos',
        'Especificaciones técnicas de proveedores y hardware'
      ],
      icon: <ArrowRight size={22} className="text-white" />
    },
    {
      id: 'salidas',
      title: 'Salidas (O) — Salida Derecha',
      color: 'bg-[#B6F23A] text-[#0A0A0A]',
      badgeColor: 'black' as const,
      desc: 'Resultados tangibles, servicios y productos operacionales generados por la actividad.',
      items: [
        'Infraestructura de alta disponibilidad (disponibilidad garantizada del 99.9%)',
        'Sistemas clínicos operativos y en producción sin interrupciones',
        'Reportes periódicos de mantenimiento preventivo/correctivo y KPIs',
        'Incidencias resueltas de manera oportuna (mesa de ayuda técnica)'
      ],
      icon: <ArrowRight size={22} className="text-[#0A0A0A]" />
    },
    {
      id: 'mecanismos',
      title: 'Mecanismos (M) — Entrada Inferior',
      color: 'bg-[#00C2CB] text-[#0A0A0A]',
      badgeColor: 'black' as const,
      desc: 'Recursos humanos, tecnológicos y sistemas que ejecutan la actividad sin ser transformados por ella.',
      items: [
        'Equipo técnico especializado (Equipo Tiradores)',
        'Infraestructura cloud e híbrida de alta resiliencia',
        'Herramientas de monitoreo y gestión de proyectos (Smartsheet)',
        'Equipos y hardware físico (servidores de misión crítica, switches de red, dispositivos IoT médicos)'
      ],
      icon: <ArrowUp size={22} className="text-[#0A0A0A]" />
    }
  ];

  return (
    <div className="w-full pb-28">
      {/* Header Hero */}
      <header className="bg-[#00C2CB] bg-dots border-b-[4px] border-[#0A0A0A] py-16 md:py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto text-center">
          <Badge color="black" className="mb-4">
            ESTÁNDAR FIPS PUB 183 • NIVEL A-0
          </Badge>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-[#0A0A0A] uppercase leading-[0.9]">
            IDEF0 — MODELADO <Marker color="yellow">FUNCIONAL</Marker>
          </h1>
          <p className="text-lg md:text-xl text-[#0A0A0A]/90 font-sans max-w-2xl mx-auto mt-4 font-medium">
            Estructura ICOM del Área de Hardware e Infraestructura • IATECH Co.
          </p>
        </div>
      </header>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 mt-16 space-y-24">
        
        {/* 1.1 ¿Qué es IDEF0? */}
        <section>
          <Card color="white" className="p-8 md:p-12 mb-8 bg-dots">
            <Badge color="yellow" className="mb-4">1.1 ORIGEN Y NORMA</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-6">
              1.1 ¿Qué es IDEF0?
            </h2>
            <div className="text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed space-y-4 mb-6">
              <p>
                <strong>IDEF0</strong> (<em>ICAM DEFinition for Function Modeling</em>) es una metodología de modelado funcional utilizada para describir de forma gráfica y jerárquica las funciones, decisiones y actividades de una organización o sistema. Su nombre proviene del programa <strong>ICAM</strong> (<em>Integrated Computer Aided Manufacturing</em>) de la <strong>Fuerza Aérea de los Estados Unidos</strong>, que la desarrolló a mediados de los años 70 como estándar para documentar y analizar procesos de manufactura e ingeniería.
              </p>
              <p>
                IDEF0 está construido sobre el lenguaje <strong>SADT</strong> (<em>Structured Analysis and Design Technique</em>), creado por Douglas T. Ross, y forma parte de la familia de lenguajes de modelado <strong>IDEF</strong> (que va desde IDEF0 hasta IDEF14, cada uno enfocado en un tipo distinto de modelado: funcional, de datos, dinámico, orientado a objetos, entre otros). Fue publicado oficialmente como estándar federal de EE.UU. bajo la norma <strong>FIPS PUB 183</strong> en 1993, y hoy se aplica ampliamente en reingeniería de procesos, análisis de sistemas de información e ingeniería de software.
              </p>
            </div>

            <div className="p-6 rounded-2xl border-[3px] border-[#0A0A0A] bg-[#FAF5DC] flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-[#FFE500] border-[2px] border-[#0A0A0A] shrink-0 text-[#0A0A0A]">
                <Info size={24} />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg uppercase text-[#0A0A0A] mb-1">
                  Estándar Internacional Consolidado
                </h4>
                <p className="text-sm font-sans text-[#0A0A0A]/80 leading-relaxed">
                  IDEF0 no es un mero diagrama estético: es un estándar formal de modelado funcional que separa con rigor <em>qué hace</em> un sistema de <em>cómo</em> o <em>cuándo</em> se implementa, permitiendo una trazabilidad inigualable entre políticas de control, insumos, recursos y productos.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* 1.2 ¿Para qué sirve? */}
        <section>
          <div className="mb-8">
            <Badge color="teal" className="mb-4">1.2 APLICABILIDAD PRÁCTICA</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-4">
              1.2 ¿Para qué sirve?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card color="yellow" className="p-6 flex gap-4 items-start">
              <span className="font-display font-bold text-4xl text-[#0A0A0A] shrink-0">01</span>
              <div>
                <h3 className="font-display font-bold text-xl uppercase mb-2">
                  Diferenciación de flujo funcional vs. temporal
                </h3>
                <p className="text-sm font-sans text-[#0A0A0A]/85 leading-relaxed">
                  Representar de forma clara y estandarizada <strong>qué hace</strong> un proceso u organización, sin describir <em>cómo</em> lo hace internamente (control de flujo), lo que lo diferencia de un diagrama de flujo tradicional.
                </p>
              </div>
            </Card>

            <Card color="teal" className="p-6 flex gap-4 items-start">
              <span className="font-display font-bold text-4xl text-[#0A0A0A] shrink-0">02</span>
              <div>
                <h3 className="font-display font-bold text-xl uppercase mb-2">
                  Diagnóstico As-Is y diseño To-Be
                </h3>
                <p className="text-sm font-sans text-[#0A0A0A]/85 leading-relaxed">
                  Analizar procesos "tal cual" (<em>as-is</em>) para detectar cuellos de botella, redundancias o mejoras posibles, y también modelar procesos deseados (<em>to-be</em>).
                </p>
              </div>
            </Card>

            <Card color="lime" className="p-6 flex gap-4 items-start">
              <span className="font-display font-bold text-4xl text-[#0A0A0A] shrink-0">03</span>
              <div>
                <h3 className="font-display font-bold text-xl uppercase mb-2">
                  Comunicación de relaciones con el entorno
                </h3>
                <p className="text-sm font-sans text-[#0A0A0A]/85 leading-relaxed">
                  Comunicar de forma visual y jerárquica cómo interactúan las funciones de un sistema con su entorno (datos, normas, recursos).
                </p>
              </div>
            </Card>

            <Card color="paper" className="p-6 flex gap-4 items-start">
              <span className="font-display font-bold text-4xl text-[#0A0A0A] shrink-0">04</span>
              <div>
                <h3 className="font-display font-bold text-xl uppercase mb-2">
                  Base de integración y reingeniería
                </h3>
                <p className="text-sm font-sans text-[#0A0A0A]/85 leading-relaxed">
                  Servir de base para reingeniería de procesos, integración de sistemas de información y documentación de procesos de negocio.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* 1.3 Componentes del modelo: ICOM con Mini Diagrama Interactivo */}
        <section>
          <div className="mb-8">
            <Badge color="magenta" className="mb-4">1.3 ESTRUCTURA ICOM</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-4">
              1.3 Componentes del modelo: ICOM
            </h2>
            <p className="text-lg text-[#0A0A0A]/85 font-sans max-w-3xl">
              Cada actividad de un diagrama IDEF0 se representa como una <strong>caja con un verbo de acción</strong> en su interior, rodeada por 4 tipos de flechas direccionales:
            </p>
          </div>

          {/* Mini Diagrama ICOM Interactivo */}
          <div className="p-8 md:p-12 rounded-2xl border-[3px] border-[#0A0A0A] bg-white shadow-brutal mb-10 flex flex-col items-center">
            <span className="font-display font-bold text-xs uppercase tracking-widest text-[#0A0A0A]/60 block mb-6">
              DIAGRAMA INTERACTIVO ICOM (PASA EL CURSOR SOBRE CADA LADO):
            </span>

            <div className="relative w-full max-w-[500px] h-[340px] flex items-center justify-center select-none font-sans">
              
              {/* TOP: Controls (C) */}
              <div 
                onMouseEnter={() => setActiveIcomHover('controles')}
                onMouseLeave={() => setActiveIcomHover(null)}
                className={`absolute top-2 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl border-[2px] border-[#0A0A0A] bg-[#7C6BFF] text-white shadow-brutal-sm cursor-pointer transition-transform ${activeIcomHover === 'controles' ? 'scale-110 shadow-brutal' : ''}`}
              >
                <div className="flex items-center gap-1.5 font-display font-bold text-xs uppercase">
                  <span>C: CONTROLES</span>
                  <ArrowDown size={14} />
                </div>
              </div>

              {/* LEFT: Inputs (I) */}
              <div 
                onMouseEnter={() => setActiveIcomHover('entradas')}
                onMouseLeave={() => setActiveIcomHover(null)}
                className={`absolute left-0 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl border-[2px] border-[#0A0A0A] bg-[#C1522A] text-white shadow-brutal-sm cursor-pointer transition-transform ${activeIcomHover === 'entradas' ? 'scale-110 shadow-brutal' : ''}`}
              >
                <div className="flex items-center gap-1.5 font-display font-bold text-xs uppercase">
                  <span>I: ENTRADAS</span>
                  <ArrowRight size={14} />
                </div>
              </div>

              {/* CENTER: Action Box */}
              <div className="w-56 h-32 rounded-2xl border-[3px] border-[#0A0A0A] bg-[#0A0A0A] text-white p-4 flex flex-col items-center justify-center text-center shadow-brutal z-10">
                <Badge color="yellow" size="sm" className="mb-1">ACTIVIDAD</Badge>
                <h4 className="font-display font-bold text-base md:text-lg uppercase text-white leading-tight">
                  Área de Hardware e Infraestructura
                </h4>
                <span className="text-[10px] font-mono text-[#FFE500] mt-1">Nodo: A-0</span>
              </div>

              {/* RIGHT: Outputs (O) */}
              <div 
                onMouseEnter={() => setActiveIcomHover('salidas')}
                onMouseLeave={() => setActiveIcomHover(null)}
                className={`absolute right-0 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl border-[2px] border-[#0A0A0A] bg-[#B6F23A] text-[#0A0A0A] shadow-brutal-sm cursor-pointer transition-transform ${activeIcomHover === 'salidas' ? 'scale-110 shadow-brutal' : ''}`}
              >
                <div className="flex items-center gap-1.5 font-display font-bold text-xs uppercase">
                  <span>O: SALIDAS</span>
                  <ArrowRight size={14} />
                </div>
              </div>

              {/* BOTTOM: Mechanisms (M) */}
              <div 
                onMouseEnter={() => setActiveIcomHover('mecanismos')}
                onMouseLeave={() => setActiveIcomHover(null)}
                className={`absolute bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl border-[2px] border-[#0A0A0A] bg-[#00C2CB] text-[#0A0A0A] shadow-brutal-sm cursor-pointer transition-transform ${activeIcomHover === 'mecanismos' ? 'scale-110 shadow-brutal' : ''}`}
              >
                <div className="flex items-center gap-1.5 font-display font-bold text-xs uppercase">
                  <ArrowUp size={14} />
                  <span>M: MECANISMOS</span>
                </div>
              </div>

            </div>
          </div>

          {/* Detailed 4 ICOM Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card color="white" className="p-6">
              <Badge color="terracota" className="mb-2">I — INPUTS (ENTRADAS)</Badge>
              <p className="text-sm font-sans text-[#0A0A0A]/85 leading-relaxed">
                Entran por el <strong>lado izquierdo</strong> de la caja. Son la materia, información o datos que la actividad transforma o consume para generar su salida.
              </p>
            </Card>

            <Card color="white" className="p-6">
              <Badge color="black" className="mb-2">C — CONTROLS (CONTROLES)</Badge>
              <p className="text-sm font-sans text-[#0A0A0A]/85 leading-relaxed">
                Entran por la <strong>parte superior</strong> de la caja. Son las normas, políticas, restricciones o criterios que guían, condicionan o limitan cómo se ejecuta la actividad (sin ser consumidos por ella).
              </p>
            </Card>

            <Card color="white" className="p-6">
              <Badge color="lime" className="mb-2">O — OUTPUTS (SALIDAS)</Badge>
              <p className="text-sm font-sans text-[#0A0A0A]/85 leading-relaxed">
                Salen por el <strong>lado derecho</strong> de la caja. Son los resultados, productos o datos generados por la actividad.
              </p>
            </Card>

            <Card color="white" className="p-6">
              <Badge color="teal" className="mb-2">M — MECHANISMS (MECANISMOS)</Badge>
              <p className="text-sm font-sans text-[#0A0A0A]/85 leading-relaxed">
                Entran por la <strong>parte inferior</strong> de la caja. Son los recursos (personas, herramientas, infraestructura, sistemas) que permiten ejecutar la actividad, sin ser transformados por ella.
              </p>
            </Card>
          </div>
        </section>

        {/* 1.4 Jerarquía y descomposición */}
        <section>
          <Card color="paper" className="p-8 md:p-12 mb-8">
            <Badge color="teal" className="mb-4">1.4 JERARQUÍA</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-6">
              1.4 Jerarquía y descomposición
            </h2>
            <p className="text-lg text-[#0A0A0A]/85 font-sans leading-relaxed mb-6">
              Un modelo IDEF0 no es un único diagrama aislado, sino un <strong>conjunto jerárquico de diagramas</strong> interconectados con rigurosa coherencia topológica:
            </p>

            <div className="space-y-4">
              <div className="p-5 rounded-xl border-[2px] border-[#0A0A0A] bg-white shadow-brutal-sm flex items-start gap-4">
                <span className="px-3 py-1 bg-[#C1522A] text-white rounded-lg font-display font-bold text-sm shrink-0">
                  A-0
                </span>
                <p className="text-sm md:text-base font-sans text-[#0A0A0A]/85 leading-relaxed">
                  El diagrama de más alto nivel se llama <strong>A-0</strong> (pronunciado <em>"A menos cero"</em>) y representa el proceso completo como una sola caja con su contexto general (entradas, controles, mecanismos y salidas del sistema completo). <span className="font-bold text-[#C1522A]">Este es el tipo de diagrama que ya elaboramos para nuestro proyecto.</span>
                </p>
              </div>

              <div className="p-5 rounded-xl border-[2px] border-[#0A0A0A] bg-white shadow-brutal-sm flex items-start gap-4">
                <span className="px-3 py-1 bg-[#00C2CB] text-[#0A0A0A] rounded-lg font-display font-bold text-sm shrink-0">
                  A0
                </span>
                <p className="text-sm md:text-base font-sans text-[#0A0A0A]/85 leading-relaxed">
                  Ese proceso principal puede descomponerse en un diagrama <strong>A0</strong>, con varias sub-actividades relacionadas entre sí mediante flujos internos.
                </p>
              </div>

              <div className="p-5 rounded-xl border-[2px] border-[#0A0A0A] bg-white shadow-brutal-sm flex items-start gap-4">
                <span className="px-3 py-1 bg-[#B6F23A] text-[#0A0A0A] rounded-lg font-display font-bold text-sm shrink-0">
                  A1, A2...
                </span>
                <p className="text-sm md:text-base font-sans text-[#0A0A0A]/85 leading-relaxed">
                  Cada sub-actividad puede, a su vez, descomponerse en más detalle (<strong>A1, A2, A3...</strong>), permitiendo bajar de nivel de abstracción progresivamente sin perder jamás la coherencia con el nivel superior.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl border-[2px] border-[#0A0A0A] bg-[#FFE500] text-xs md:text-sm font-sans font-medium text-[#0A0A0A]">
              <strong>Principio de cascada cognitiva:</strong> Esta estructura permite que cualquier persona o directivo entienda primero el panorama general en segundos y luego profundice exclusivamente en el nivel técnico de detalle que le compete.
            </div>
          </Card>
        </section>

        {/* 1.5 Beneficios de usar IDEF0 */}
        <section>
          <div className="mb-8">
            <Badge color="yellow" className="mb-4">1.5 VALOR AGREGADO</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-4">
              1.5 Beneficios de usar IDEF0
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card color="yellow" className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 size={24} className="text-[#C1522A]" />
                <h3 className="font-display font-bold text-xl uppercase">Visión Integral y Estandarizada</h3>
              </div>
              <p className="text-sm font-sans text-[#0A0A0A]/85 leading-relaxed">
                Da una visión <strong>integral y estandarizada</strong> del funcionamiento de un área u organización en una sola lámina de alta claridad.
              </p>
            </Card>

            <Card color="teal" className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 size={24} className="text-[#0A0A0A]" />
                <h3 className="font-display font-bold text-xl uppercase">Trazabilidad de Dependencias</h3>
              </div>
              <p className="text-sm font-sans text-[#0A0A0A]/85 leading-relaxed">
                Facilita identificar <strong>qué depende de qué</strong>: qué controles regulan un proceso, qué recursos lo sostienen y qué resultados produce.
              </p>
            </Card>

            <Card color="lime" className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 size={24} className="text-[#0A0A0A]" />
                <h3 className="font-display font-bold text-xl uppercase">Detección de Brechas de Diseño</h3>
              </div>
              <p className="text-sm font-sans text-[#0A0A0A]/85 leading-relaxed">
                Permite detectar procesos sin control definido, sin mecanismo asignado, o sin una salida clara (señal inequívoca de un proceso mal diseñado o riesgoso).
              </p>
            </Card>

            <Card color="white" className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 size={24} className="text-[#0A0A0A]" />
                <h3 className="font-display font-bold text-xl uppercase">Lenguaje Universal Puente</h3>
              </div>
              <p className="text-sm font-sans text-[#0A0A0A]/85 leading-relaxed">
                Es un lenguaje común entendible tanto por perfiles técnicos como de negocio, útil para presentar procesos a distintos públicos (equipo técnico, gerencia, stakeholders).
              </p>
            </Card>
          </div>
        </section>

        {/* 1.6 DIAGRAMVIEWER: NUESTRO DIAGRAMA IDEF0 OFICIAL */}
        <section id="diagrama-seccion">
          <div className="mb-8">
            <Badge color="terracota" className="mb-4">1.6 CASO PRÁCTICO TIRADORES • NIVEL A-0</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-4">
              1.6 Nuestro Diagrama IDEF0 — Área de Hardware e Infraestructura
            </h2>
          </div>

          <DiagramViewer
            title="Diagrama Oficial A-0: Hardware e Infraestructura"
            subtitle="IATECH Co. • Arquitectura funcional con recuadro central y flujos ICOM"
            imageSrc="/idef0-diagram.svg"
            downloadFilename="IDEF0_Hardware_Infraestructura_IATECH.svg"
            badgeText="ESTÁNDAR FIPS PUB 183 • NODO A-0"
            className="mb-12"
          />

          {/* Desglose Estructurado del Diagrama Propio */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Layers className="text-[#C1522A]" size={28} />
              <h3 className="text-2xl md:text-3xl font-display font-bold text-[#0A0A0A] uppercase">
                Desglose Estructurado del Diagrama Propio
              </h3>
            </div>

            {/* Caja Central */}
            <Card color="ink" className="p-8">
              <Badge color="yellow" className="mb-2">CAJA CENTRAL (A-0) // PROCESO CENTRAL</Badge>
              <h4 className="text-2xl md:text-3xl font-display font-bold text-white uppercase mb-2">
                Área de Hardware e Infraestructura
              </h4>
              <p className="text-base sm:text-lg text-[#FAF5DC]/90 font-sans leading-relaxed">
                <strong>Función / Verbo de acción:</strong> Diseñar, desplegar y mantener la infraestructura física que garantiza la continuidad operativa de los sistemas clínicos críticos.
              </p>
            </Card>

            {/* Grid de 4 Bloques ICOM */}
            <div className="grid md:grid-cols-2 gap-6">
              {icomZones.map((zone) => (
                <div 
                  key={zone.id}
                  className={`p-6 rounded-2xl border-[3px] border-[#0A0A0A] ${zone.color} shadow-brutal flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-display font-bold text-base md:text-lg uppercase">
                        {zone.title}
                      </span>
                      {zone.icon}
                    </div>
                    <p className="text-xs font-sans italic opacity-85 mb-4">
                      {zone.desc}
                    </p>
                    <ul className="space-y-2 font-sans text-sm font-medium">
                      {zone.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Texto de Cierre Requerido */}
            <Card color="white" className="p-8 md:p-10 border-[4px] border-[#0A0A0A] shadow-brutal">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#FFE500] border-[2px] border-[#0A0A0A] shrink-0 text-[#0A0A0A]">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-display font-bold uppercase text-[#0A0A0A] mb-3">
                    Alcance y Proyección Futura (Nivel A-0 a Nivel A0)
                  </h4>
                  <p className="text-base sm:text-lg font-sans text-[#0A0A0A]/85 leading-relaxed">
                    Este diagrama representa el nivel <strong>A-0</strong> de nuestro proceso: la vista general del área de Hardware e Infraestructura y su relación con el resto de IATECH Co. En futuras iteraciones, este proceso podría descomponerse en diagramas de nivel <strong>A0</strong> para detallar cada una de las 4 áreas del organigrama (<strong>Dirección de Tecnología y Presupuesto</strong>, <strong>Gestión de Infraestructura Global</strong>, <strong>Aseguramiento de Calidad y Recursos</strong>, y <strong>Operaciones de Soporte</strong>) como sub-funciones independientes.
                  </p>
                </div>
              </div>
            </Card>

          </div>
        </section>

      </div>
    </div>
  );
}
