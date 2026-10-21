import React from 'react';
import { 
  GitFork, 
  Workflow, 
  CheckCircle2, 
  Info, 
  Layers, 
  ArrowRight, 
  Sparkles,
  Building2,
  Cpu,
  ShieldCheck,
  UserCheck,
  Activity,
  Layers as LayersIcon
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Marker } from '../components/ui/Marker';
import { DiagramViewer } from '../components/ui/DiagramViewer';
import { BpmnFlowGraphic } from '../components/svg/HardwareIcons';

export default function BPMN() {
  const laneBreakdown = [
    {
      id: 'cliente-interno',
      role: 'Cliente Interno',
      holder: 'Hospital / Equipo Médico',
      tabColor: 'paper' as const,
      color: 'white' as const,
      badgeColor: 'black' as const,
      icon: <Building2 className="text-[#0A0A0A]" size={24} />,
      desc: 'Origina la solicitud de infraestructura o soporte técnico, y recibe la infraestructura entregada al cierre del proceso.',
      activities: [
        'Enviar solicitud de infraestructura o soporte técnico (dispara el evento de inicio)',
        'Recepción final / infraestructura entregada y validada en operación clínica (evento de fin)'
      ]
    },
    {
      id: 'lider-hardware',
      role: 'Líder de Hardware',
      holder: 'Octavio Luna',
      tabColor: 'terracota' as const,
      color: 'white' as const,
      badgeColor: 'terracota' as const,
      icon: <UserCheck className="text-[#C1522A]" size={24} />,
      desc: 'Evalúa la viabilidad inicial de la solicitud y, al final del proceso, revisa y aprueba los resultados entregados antes de pasarlos al cliente.',
      activities: [
        'Evaluar viabilidad técnica y operativa de la solicitud inicial',
        'Decisión: Compuerta ¿Es viable? (si es "No viable", retorna al cliente; si es "Sí", deriva a Presupuesto)',
        'Revisar y auditar los resultados consolidados de todas las áreas técnicas',
        'Decisión: Compuerta ¿Aprobado? (si es "No aprobado", retorna a adquisición; si es "Sí", procede a entrega)',
        'Entregar al cliente interno formalmente'
      ]
    },
    {
      id: 'direccion-tecnologia',
      role: 'Dirección de Tecnología y Presupuesto',
      holder: 'Leandro Colque',
      tabColor: 'yellow' as const,
      color: 'white' as const,
      badgeColor: 'yellow' as const,
      icon: <Cpu className="text-[#0A0A0A]" size={24} />,
      desc: 'Evalúa el presupuesto y el stack tecnológico necesario, y asigna los recursos y la prioridad de atención.',
      activities: [
        'Evaluar presupuesto financiero (OPEX/CAPEX) y compatibilidad del stack tecnológico requerido',
        'Asignar recursos de capital, herramientas y prioridad en la cola de trabajo del sprint'
      ]
    },
    {
      id: 'gestion-infraestructura',
      role: 'Gestión de Infraestructura Global',
      holder: 'Einar Guillén',
      tabColor: 'lime' as const,
      color: 'white' as const,
      badgeColor: 'lime' as const,
      icon: <Workflow className="text-[#0A0A0A]" size={24} />,
      desc: 'Adquiere o asigna el equipo físico necesario y lo instala/configura.',
      activities: [
        'Adquirir o asignar del inventario existente el equipo o hardware físico necesario',
        'Instalar físicamente y configurar servidores, cableado de red y dispositivos biomédicos',
        'Receptor de reprocesos en caso de rechazo en pruebas de calidad o auditoría final'
      ]
    },
    {
      id: 'aseguramiento-calidad',
      role: 'Aseguramiento de Calidad y Recursos',
      holder: 'Huascar Duran',
      tabColor: 'teal' as const,
      color: 'white' as const,
      badgeColor: 'teal' as const,
      icon: <ShieldCheck className="text-[#00C2CB]" size={24} />,
      desc: 'Valida que la infraestructura instalada cumpla normativas de salud (ISO, CE, FDA) y mide su capacidad y consumo; si no cumple, el proceso regresa a Gestión de Infraestructura Global.',
      activities: [
        'Validar estricto cumplimiento de normativas de salud y seguridad médica (ISO, CE, FDA)',
        'Medir capacidad de carga, disipación térmica y consumo energético bajo estrés',
        'Decisión: Compuerta ¿Cumple estándares? (si es "No válido", retrocede a reconfiguración; si es "Sí", avanza a soporte)'
      ]
    },
    {
      id: 'operaciones-soporte',
      role: 'Operaciones de Soporte y Entorno de Trabajo',
      holder: 'Leonardo Ibarra',
      tabColor: 'magenta' as const,
      color: 'white' as const,
      badgeColor: 'magenta' as const,
      icon: <Layers className="text-[#FF3DCB]" size={24} />,
      desc: 'Configura accesos y capacita al usuario final antes de que el Líder de Hardware dé la aprobación definitiva.',
      activities: [
        'Configurar perfiles de usuario, credenciales seguras y políticas de acceso clínico',
        'Capacitar técnicamente al personal médico y asistencial en el uso del hardware',
        'Transferir el paquete operativo completo al Líder de Hardware para la revisión de cierre'
      ]
    }
  ];

  const quickNav = [
    { id: 'bpmn-que-es', label: '1.1 ¿Qué es?' },
    { id: 'bpmn-para-que-sirve', label: '1.2 ¿Para qué sirve?' },
    { id: 'bpmn-categorias', label: '1.3 Categorías' },
    { id: 'bpmn-eventos-compuertas', label: '1.4 Eventos & Gates' },
    { id: 'bpmn-beneficios', label: '1.5 Beneficios' },
    { id: 'bpmn-diagrama', label: '1.6 Diagrama Oficial' },
    { id: 'bpmn-lanes', label: '1.7 Carriles (Lanes)' },
  ];

  return (
    <div className="w-full bg-[#FAF5DC] pb-24">
      {/* HERO SECTION NEO-BRUTALISTA */}
      <section className="bg-[#B6F23A] border-b-[3px] border-[#0A0A0A] py-16 px-4 relative overflow-hidden bg-dot-pattern">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <Badge color="black" className="mb-4">
              NOTACIÓN ESTÁNDAR OMG • VERSIÓN 2.0
            </Badge>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight text-[#0A0A0A] leading-[0.95] mb-6">
              BPMN — MODELADO DE <Marker color="terracota">PROCESOS</Marker> DE NEGOCIO
            </h1>
            <p className="text-lg md:text-xl font-body text-[#0A0A0A] max-w-xl font-medium leading-relaxed">
              Business Process Model and Notation en <span className="font-bold">IA MediTech • Tiradores</span>: trazabilidad rigurosa, carriles funcionales y compuertas de decisión para solicitudes hospitalarias.
            </p>
          </div>

          <div className="shrink-0 w-full lg:w-auto flex justify-center">
            <Card color="white" rotation={2} className="p-4 sm:p-6 max-w-sm w-full">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-center block mb-3 text-[#0A0A0A]">
                SEMÁNTICA DE COMPUERTAS
              </span>
              <BpmnFlowGraphic className="mx-auto" />
            </Card>
          </div>
        </div>
      </section>

      {/* QUICK NAV STICKY BAR */}
      <div className="sticky top-20 z-20 bg-[#FAF5DC]/95 backdrop-blur-xs border-b-[3px] border-[#0A0A0A] py-3 px-4 shadow-[0_4px_0_#0A0A0A]">
        <div className="max-w-6xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          <span className="text-xs font-display font-bold uppercase tracking-wider text-[#0A0A0A] shrink-0 mr-2">
            Índice BPMN:
          </span>
          {quickNav.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-xs font-bold uppercase px-3 py-1.5 rounded-full border-[2px] border-[#0A0A0A] bg-white text-[#0A0A0A] hover:bg-[#FFE500] hover:-translate-y-0.5 transition-all shadow-[2px_2px_0_#0A0A0A] shrink-0"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-16 space-y-20">

        {/* 1.1 ¿Qué es BPMN? */}
        <section id="bpmn-que-es" className="scroll-mt-36">
          <div className="flex items-center gap-3 mb-6">
            <Badge color="terracota">1.1 FUNDAMENTOS</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-[#0A0A0A]">
              ¿QUÉ ES <Marker color="yellow">BPMN</Marker>?
            </h2>
          </div>

          <Card color="white" className="p-6 sm:p-8 space-y-6">
            <div className="text-lg text-[#0A0A0A] font-body leading-relaxed space-y-4 max-w-4xl">
              <p>
                <strong>BPMN</strong> (<em>Business Process Model and Notation</em> — Notación de Modelado de Procesos de Negocio) es un lenguaje gráfico estándar para representar procesos de negocio mediante un conjunto claro y estructurado de símbolos. Permite describir visualmente la secuencia detallada de actividades, decisiones y flujos de información necesarios para completar un proceso de principio a fin.
              </p>
              <p>
                BPMN fue concebido y desarrollado originalmente por el <strong>Business Process Management Institute (BPMI)</strong> y, desde 2005, es mantenido por el <strong>Object Management Group (OMG)</strong>, el mismo organismo responsable de UML. La versión actual y más utilizada es <strong>BPMN 2.0</strong>. A diferencia de UML (orientado al diseño de software) o de un diagrama de flujo genérico, BPMN está diseñado específicamente para que tanto perfiles técnicos como de negocio puedan leer y validar el mismo diagrama sin ambigüedad.
              </p>
            </div>

            {/* Callout Info */}
            <div className="bg-[#FAF5DC] p-5 sm:p-6 border-[3px] border-[#0A0A0A] rounded-xl shadow-[4px_4px_0_#0A0A0A] flex items-start gap-4">
              <div className="p-2.5 bg-[#FFE500] border-[2px] border-[#0A0A0A] rounded-lg shrink-0 text-[#0A0A0A]">
                <Info size={24} />
              </div>
              <div>
                <h4 className="font-display font-bold text-[#0A0A0A] uppercase tracking-wider text-base mb-1">
                  Estándar de la Industria Gestionado por OMG
                </h4>
                <p className="text-sm font-body text-[#0A0A0A] leading-relaxed">
                  Al estandarizar la semántica visual entre tareas humanas, eventos temporales y compuertas lógicas, BPMN 2.0 elimina las interpretaciones subjetivas y posibilita la ejecución directa en motores de automatización de procesos (BPMS).
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* 1.2 ¿Para qué sirve? */}
        <section id="bpmn-para-que-sirve" className="scroll-mt-36">
          <div className="flex items-center gap-3 mb-6">
            <Badge color="teal">1.2 PROPÓSITO</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-[#0A0A0A]">
              ¿PARA QUÉ <Marker color="lime">SIRVE</Marker>?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card color="teal" rotation={-0.8} tab="OBJETIVO 01" className="p-6">
              <div className="flex items-start gap-4">
                <span className="font-display font-bold text-4xl text-[#0A0A0A]">01</span>
                <div>
                  <h3 className="font-display font-bold text-xl uppercase text-[#0A0A0A] mb-2">
                    Diagnóstico As-Is y Rediseño To-Be
                  </h3>
                  <p className="text-sm font-body text-[#0A0A0A] leading-relaxed">
                    Documentar procesos "tal cual" (<em>as-is</em>) para entender cómo funciona realmente un proceso hoy, y diseñar procesos futuros (<em>to-be</em>) con mejoras.
                  </p>
                </div>
              </div>
            </Card>

            <Card color="magenta" rotation={0.8} tab="OBJETIVO 02" className="p-6">
              <div className="flex items-start gap-4">
                <span className="font-display font-bold text-4xl text-white">02</span>
                <div>
                  <h3 className="font-display font-bold text-xl uppercase text-white mb-2">
                    Puente Negocio-Técnico y Automatización
                  </h3>
                  <p className="text-sm font-body text-white leading-relaxed">
                    Servir como puente de comunicación entre áreas de negocio y equipos técnicos: un mismo diagrama puede usarse para análisis de procesos y como base para automatización (por ejemplo, mediante motores BPM).
                  </p>
                </div>
              </div>
            </Card>

            <Card color="yellow" rotation={0.8} tab="OBJETIVO 03" className="p-6">
              <div className="flex items-start gap-4">
                <span className="font-display font-bold text-4xl text-[#0A0A0A]">03</span>
                <div>
                  <h3 className="font-display font-bold text-xl uppercase text-[#0A0A0A] mb-2">
                    Control de Tiempos y Cuellos de Botella
                  </h3>
                  <p className="text-sm font-body text-[#0A0A0A] leading-relaxed">
                    Identificar responsables, tiempos, decisiones críticas y puntos de posible cuello de botella dentro de un proceso.
                  </p>
                </div>
              </div>
            </Card>

            <Card color="blue" rotation={-0.8} tab="OBJETIVO 04" className="p-6">
              <div className="flex items-start gap-4">
                <span className="font-display font-bold text-4xl text-white">04</span>
                <div>
                  <h3 className="font-display font-bold text-xl uppercase text-white mb-2">
                    Visibilidad de Flujos Inter-Áreas
                  </h3>
                  <p className="text-sm font-body text-white leading-relaxed">
                    Detectar procesos que dependen de más de un área (como es el caso de una solicitud de infraestructura, que pasa por varias áreas del equipo de Hardware).
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* 1.3 Categorías de elementos de la notación BPMN */}
        <section id="bpmn-categorias" className="scroll-mt-36">
          <div className="flex items-center gap-3 mb-6">
            <Badge color="magenta">1.3 NOTACIÓN</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-[#0A0A0A]">
              CATEGORÍAS DE <Marker color="teal">ELEMENTOS</Marker> BPMN
            </h2>
          </div>
          <p className="text-lg font-body text-[#0A0A0A] mb-8 font-medium">
            BPMN organiza sus símbolos en <strong>4 categorías principales</strong> bien diferenciadas:
          </p>

          <div className="space-y-8">
            {/* 1. Objetos de flujo */}
            <Card color="white" tab="01 · OBJETOS DE FLUJO" className="p-6 sm:p-8">
              <h3 className="text-2xl font-display font-bold text-[#0A0A0A] uppercase mb-4 flex items-center gap-2">
                Objetos de flujo (el corazón del diagrama)
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mt-4">
                <div className="bg-[#FAF5DC] p-5 rounded-xl border-[3px] border-[#0A0A0A] shadow-[4px_4px_0_#0A0A0A]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full border-[3px] border-[#0A0A0A] bg-[#B6F23A] inline-flex items-center justify-center font-display font-bold text-xs text-[#0A0A0A]">
                      ○
                    </span>
                    <strong className="text-[#0A0A0A] font-display text-lg uppercase">Eventos</strong>
                  </div>
                  <p className="text-xs font-body text-[#0A0A0A] leading-relaxed">
                    Se representan con <strong>círculos</strong>. Indican algo que "sucede" en el proceso (no una tarea). Pueden ser de <strong>inicio</strong>, <strong>intermedios</strong> o <strong>fin</strong>, y dentro del círculo puede haber un ícono que indique el tipo (mensaje, temporizador, error, señal, cancelación, etc.).
                  </p>
                </div>

                <div className="bg-[#FAF5DC] p-5 rounded-xl border-[3px] border-[#0A0A0A] shadow-[4px_4px_0_#0A0A0A]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-lg border-[3px] border-[#0A0A0A] bg-[#00C2CB] inline-flex items-center justify-center font-display font-bold text-xs text-[#0A0A0A]">
                      ▢
                    </span>
                    <strong className="text-[#0A0A0A] font-display text-lg uppercase">Actividades</strong>
                  </div>
                  <p className="text-xs font-body text-[#0A0A0A] leading-relaxed">
                    Se representan con <strong>rectángulos de esquinas redondeadas</strong>. Son el trabajo que se ejecuta dentro del proceso; pueden ser tareas simples o subprocesos que a su vez contienen su propio flujo interno.
                  </p>
                </div>

                <div className="bg-[#FAF5DC] p-5 rounded-xl border-[3px] border-[#0A0A0A] shadow-[4px_4px_0_#0A0A0A]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rotate-45 border-[3px] border-[#0A0A0A] bg-[#FFE500] inline-flex items-center justify-center font-display font-bold text-xs text-[#0A0A0A]">
                      ◇
                    </span>
                    <strong className="text-[#0A0A0A] font-display text-lg uppercase ml-1">Compuertas</strong>
                  </div>
                  <p className="text-xs font-body text-[#0A0A0A] leading-relaxed">
                    Se representan con <strong>rombos/diamantes</strong>. Son puntos de decisión que determinan por qué camino continúa el flujo (exclusiva, inclusiva, paralela, basada en eventos), similar a un "if" dentro del proceso.
                  </p>
                </div>
              </div>
            </Card>

            {/* 2. Objetos de conexión */}
            <Card color="white" tab="02 · OBJETOS DE CONEXIÓN" className="p-6 sm:p-8">
              <h3 className="text-2xl font-display font-bold text-[#0A0A0A] uppercase mb-2">
                Objetos de conexión
              </h3>
              <p className="text-sm font-body text-[#0A0A0A] mb-6 font-medium">
                Líneas que conectan los objetos de flujo entre sí con significado explícito:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-5 bg-[#FAF5DC] rounded-xl border-[3px] border-[#0A0A0A] shadow-[4px_4px_0_#0A0A0A]">
                  <strong className="block text-[#0A0A0A] mb-2 font-display uppercase text-sm">Flujo de secuencia</strong>
                  <div className="h-1 w-24 bg-[#0A0A0A] mb-3 relative flex items-center justify-end">
                    <span className="text-xs font-bold text-[#0A0A0A] translate-x-1">▶</span>
                  </div>
                  <p className="text-xs font-body text-[#0A0A0A] leading-relaxed">
                    Línea sólida con punta de flecha; indica el orden estricto en que se ejecutan las actividades.
                  </p>
                </div>

                <div className="p-5 bg-[#FAF5DC] rounded-xl border-[3px] border-[#0A0A0A] shadow-[4px_4px_0_#0A0A0A]">
                  <strong className="block text-[#0A0A0A] mb-2 font-display uppercase text-sm">Flujo de mensajes</strong>
                  <div className="h-0 w-24 border-b-[3px] border-dashed border-[#C1522A] mb-3"></div>
                  <p className="text-xs font-body text-[#0A0A0A] leading-relaxed">
                    Línea discontinua; indica el intercambio de información o mensajes entre dos participantes distintos (dos pools).
                  </p>
                </div>

                <div className="p-5 bg-[#FAF5DC] rounded-xl border-[3px] border-[#0A0A0A] shadow-[4px_4px_0_#0A0A0A]">
                  <strong className="block text-[#0A0A0A] mb-2 font-display uppercase text-sm">Asociación</strong>
                  <div className="h-0 w-24 border-b-[3px] border-dotted border-[#0A0A0A] mb-3"></div>
                  <p className="text-xs font-body text-[#0A0A0A] leading-relaxed">
                    Línea punteada sin flecha de secuencia; conecta artefactos (datos, anotaciones) a un elemento del flujo.
                  </p>
                </div>
              </div>
            </Card>

            {/* 3. Carriles (Pools y Lanes) */}
            <Card color="white" tab="03 · CARRILES (POOLS Y LANES)" className="p-6 sm:p-8">
              <h3 className="text-2xl font-display font-bold text-[#0A0A0A] uppercase mb-2">
                Carriles (Pools y Lanes)
              </h3>
              <p className="text-sm font-body text-[#0A0A0A] mb-6 font-medium">
                Representan a los <strong>participantes y responsables</strong> del proceso:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 bg-[#FAF5DC] rounded-xl border-[3px] border-[#0A0A0A] shadow-[4px_4px_0_#0A0A0A]">
                  <h4 className="font-display font-bold text-[#0A0A0A] text-base mb-2 uppercase">Pool (piscina)</h4>
                  <p className="text-xs font-body text-[#0A0A0A] leading-relaxed">
                    Representa a una organización o participante completo (ej. <em>"Cliente Interno"</em>). Delimita las fronteras institucionales de un proceso autónomo.
                  </p>
                </div>

                <div className="p-5 bg-[#FAF5DC] rounded-xl border-[3px] border-[#0A0A0A] shadow-[4px_4px_0_#0A0A0A]">
                  <h4 className="font-display font-bold text-[#0A0A0A] text-base mb-2 uppercase">Lane (carril)</h4>
                  <p className="text-xs font-body text-[#0A0A0A] leading-relaxed">
                    Subdivisión dentro de un pool que representa un rol o área específica (ej. <em>"Líder de Hardware"</em>, <em>"Aseguramiento de Calidad"</em>) para asignar responsabilidades precisas.
                  </p>
                </div>
              </div>
            </Card>

            {/* 4. Artefactos */}
            <Card color="white" tab="04 · ARTEFACTOS" className="p-6 sm:p-8">
              <h3 className="text-2xl font-display font-bold text-[#0A0A0A] uppercase mb-3">
                Artefactos
              </h3>
              <p className="text-sm font-body text-[#0A0A0A] leading-relaxed">
                Elementos adicionales que dan contexto sin afectar el flujo directo del proceso: <strong>objetos de datos</strong> (documentos, inventarios o paquetes de información que entran o salen de una actividad), <strong>grupos</strong> (rectángulos punteados para agrupar visualmente actividades relacionadas) y <strong>anotaciones</strong> (notas de texto explicativas enlazadas al diagrama).
              </p>
            </Card>
          </div>
        </section>

        {/* 1.4 Tipos de eventos y compuertas más comunes */}
        <section id="bpmn-eventos-compuertas" className="scroll-mt-36">
          <div className="flex items-center gap-3 mb-6">
            <Badge color="yellow">1.4 TAXONOMÍA</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-[#0A0A0A]">
              EVENTOS Y <Marker color="terracota">COMPUERTAS</Marker>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Eventos */}
            <Card color="white" tab="EVENTOS" className="p-6 sm:p-8">
              <h3 className="text-2xl font-display font-bold text-[#0A0A0A] uppercase mb-4 flex items-center gap-2">
                <Activity size={24} className="text-[#C1522A]" />
                Tipos de Eventos
              </h3>
              <ul className="space-y-3 text-sm font-body text-[#0A0A0A]">
                <li className="p-3 bg-[#FAF5DC] rounded-xl border-[2px] border-[#0A0A0A] shadow-[2px_2px_0_#0A0A0A]">
                  <strong className="text-[#0A0A0A] font-display uppercase block mb-0.5">De Inicio:</strong>
                  Dispara e inicia la ejecución del proceso al recibir un estímulo externo o requerimiento.
                </li>
                <li className="p-3 bg-[#FAF5DC] rounded-xl border-[2px] border-[#0A0A0A] shadow-[2px_2px_0_#0A0A0A]">
                  <strong className="text-[#0A0A0A] font-display uppercase block mb-0.5">De Mensaje:</strong>
                  Indica la recepción o el envío de una comunicación formal entre participantes.
                </li>
                <li className="p-3 bg-[#FAF5DC] rounded-xl border-[2px] border-[#0A0A0A] shadow-[2px_2px_0_#0A0A0A]">
                  <strong className="text-[#0A0A0A] font-display uppercase block mb-0.5">De Temporizador:</strong>
                  Condicionado por plazos de tiempo fijos, intervalos de espera o vencimientos.
                </li>
                <li className="p-3 bg-[#FAF5DC] rounded-xl border-[2px] border-[#0A0A0A] shadow-[2px_2px_0_#0A0A0A]">
                  <strong className="text-[#0A0A0A] font-display uppercase block mb-0.5">De Error y de Señal:</strong>
                  Capturan o difunden excepciones críticas y avisos de broadcast en el sistema.
                </li>
                <li className="p-3 bg-[#FAF5DC] rounded-xl border-[2px] border-[#0A0A0A] shadow-[2px_2px_0_#0A0A0A]">
                  <strong className="text-[#0A0A0A] font-display uppercase block mb-0.5">De Fin:</strong>
                  Cierra formalmente el proceso completo o culmina una de sus ramas activas.
                </li>
              </ul>
            </Card>

            {/* Compuertas */}
            <Card color="white" tab="GATEWAYS" className="p-6 sm:p-8">
              <h3 className="text-2xl font-display font-bold text-[#0A0A0A] uppercase mb-4 flex items-center gap-2">
                <GitFork size={24} className="text-[#00C2CB]" />
                Tipos de Compuertas (Gateways)
              </h3>
              <ul className="space-y-3 text-sm font-body text-[#0A0A0A]">
                <li className="p-3 bg-[#FAF5DC] rounded-xl border-[2px] border-[#0A0A0A] shadow-[2px_2px_0_#0A0A0A]">
                  <strong className="text-[#0A0A0A] font-display uppercase block mb-0.5">Exclusiva (XOR):</strong>
                  Solo un camino posible. Es la más común para decisiones binarias o condicionales tipo <em>"sí / no"</em>.
                </li>
                <li className="p-3 bg-[#FAF5DC] rounded-xl border-[2px] border-[#0A0A0A] shadow-[2px_2px_0_#0A0A0A]">
                  <strong className="text-[#0A0A0A] font-display uppercase block mb-0.5">Paralela (AND):</strong>
                  Todos los caminos emergentes se ejecutan de manera concurrente y simultánea sin evaluar condición.
                </li>
                <li className="p-3 bg-[#FAF5DC] rounded-xl border-[2px] border-[#0A0A0A] shadow-[2px_2px_0_#0A0A0A]">
                  <strong className="text-[#0A0A0A] font-display uppercase block mb-0.5">Inclusiva (OR):</strong>
                  Uno o más caminos pueden activarse simultáneamente dependiendo de múltiples condiciones evaluadas.
                </li>
                <li className="p-3 bg-[#FAF5DC] rounded-xl border-[2px] border-[#0A0A0A] shadow-[2px_2px_0_#0A0A0A]">
                  <strong className="text-[#0A0A0A] font-display uppercase block mb-0.5">Basada en Eventos:</strong>
                  La ruta que sigue el flujo se define según cuál evento ocurra primero en el entorno (ej. llegada de mensaje vs. expiración de temporizador).
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* 1.5 Beneficios de usar BPMN */}
        <section id="bpmn-beneficios" className="scroll-mt-36">
          <div className="flex items-center gap-3 mb-6">
            <Badge color="lime">1.5 VENTAJAS</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-[#0A0A0A]">
              BENEFICIOS DE <Marker color="yellow">BPMN</Marker>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <Card color="white" rotation={-0.8} className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#B6F23A] border-[2px] border-[#0A0A0A] rounded-lg">
                  <CheckCircle2 className="text-[#0A0A0A]" size={22} />
                </div>
                <h3 className="font-display font-bold text-lg text-[#0A0A0A] uppercase">Estandarización Universal</h3>
              </div>
              <p className="text-sm font-body text-[#0A0A0A] leading-relaxed">
                Estandariza la forma de documentar procesos, permitiendo que cualquier persona capacitada en BPMN (en cualquier organización) lea el diagrama sin necesitar explicación adicional.
              </p>
            </Card>

            <Card color="white" rotation={0.8} className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#FFE500] border-[2px] border-[#0A0A0A] rounded-lg">
                  <CheckCircle2 className="text-[#0A0A0A]" size={22} />
                </div>
                <h3 className="font-display font-bold text-lg text-[#0A0A0A] uppercase">Dependencias Claras entre Áreas</h3>
              </div>
              <p className="text-sm font-body text-[#0A0A0A] leading-relaxed">
                Hace visibles las dependencias entre áreas: en procesos con varios responsables (como el nuestro), deja claro en qué momento un área entrega trabajo a otra.
              </p>
            </Card>

            <Card color="white" rotation={0.8} className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#C1522A] border-[2px] border-[#0A0A0A] rounded-lg">
                  <CheckCircle2 className="text-white" size={22} />
                </div>
                <h3 className="font-display font-bold text-lg text-[#0A0A0A] uppercase">Detección de Reprocesos y Fallos</h3>
              </div>
              <p className="text-sm font-body text-[#0A0A0A] leading-relaxed">
                Facilita detectar reprocesos o cuellos de botella (por ejemplo, un ciclo de "no aprobado" que regresa varias veces a la misma área para subsanar errores).
              </p>
            </Card>

            <Card color="white" rotation={-0.8} className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#00C2CB] border-[2px] border-[#0A0A0A] rounded-lg">
                  <CheckCircle2 className="text-[#0A0A0A]" size={22} />
                </div>
                <h3 className="font-display font-bold text-lg text-[#0A0A0A] uppercase">Base de Automatización Directa</h3>
              </div>
              <p className="text-sm font-body text-[#0A0A0A] leading-relaxed">
                Es la base para automatizar procesos con herramientas BPM (motores de flujo de trabajo) cuando el proceso ya está validado y estabilizado.
              </p>
            </Card>
          </div>
        </section>

        {/* 1.6 Nuestro Diagrama BPMN — Visor Neo-Brutalista */}
        <section id="bpmn-diagrama" className="scroll-mt-36">
          <div className="flex items-center gap-3 mb-6">
            <Badge color="terracota">1.6 FLUJO OFICIAL</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-[#0A0A0A]">
              DIAGRAMA <Marker color="lime">BPMN OFICIAL</Marker>
            </h2>
          </div>
          <p className="text-lg font-body text-[#0A0A0A] mb-8 font-medium">
            Gestión de Solicitud de Infraestructura Tecnológica — Proceso oficial modelado con 6 carriles funcionales y 3 compuertas decisionales:
          </p>

          <DiagramViewer
            src="/bpmn-diagram.svg"
            downloadFilename="BPMN_Gestion_Solicitud_Infraestructura.svg"
            title="Gestión de Solicitud de Infraestructura Tecnológica"
            subtitle="Diagrama de flujo de actividades con carriles por rol y compuertas lógicas de decisión"
            badge="6 LANES · 3 COMPUERTAS · CICLOS DE REPROCESO"
          />
        </section>

        {/* 1.7 DESGLOSE DETALLADO DE CADA CARRIL (LANE) */}
        <section id="bpmn-lanes" className="scroll-mt-36 space-y-8">
          <div className="flex items-center gap-3 mb-2">
            <Badge color="black">1.7 RESPONSABILIDADES</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-[#0A0A0A]">
              DESGLOSE POR <Marker color="teal">CARRILES</Marker> (LANES)
            </h2>
          </div>
          <p className="text-lg font-body text-[#0A0A0A] font-medium">
            Cada área técnica y actor cuenta con un carril explícito que delimita sus actividades y compuertas de decisión:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {laneBreakdown.map((lane) => (
              <Card 
                key={lane.id}
                color={lane.color}
                tab={lane.holder.toUpperCase()}
                className="p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-[#FAF5DC] border-[2px] border-[#0A0A0A] rounded-xl shrink-0">
                        {lane.icon}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl uppercase text-[#0A0A0A] leading-tight">
                          {lane.role}
                        </h3>
                        <span className="text-xs font-mono font-bold text-[#C1522A] uppercase">
                          Responsable: {lane.holder}
                        </span>
                      </div>
                    </div>
                    <Badge color={lane.badgeColor}>ACTIVO</Badge>
                  </div>

                  <p className="text-sm font-body text-[#0A0A0A] mb-5 leading-relaxed font-medium">
                    {lane.desc}
                  </p>
                </div>

                <div className="bg-[#FAF5DC] p-4 rounded-xl border-[2px] border-[#0A0A0A] shadow-[2px_2px_0_#0A0A0A]">
                  <span className="text-xs font-display font-bold uppercase tracking-wider text-[#0A0A0A] block mb-2">
                    Actividades y controles:
                  </span>
                  <ul className="space-y-2">
                    {lane.activities.map((act, idx) => (
                      <li key={idx} className="text-xs font-body text-[#0A0A0A] flex items-start gap-2 leading-snug">
                        <ArrowRight size={14} className="text-[#C1522A] shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          {/* TEXTO DE CIERRE REQUERIDO: SINERGIA IDEF0 Y BPMN */}
          <div className="bg-[#0A0A0A] text-[#FAF5DC] p-8 sm:p-10 rounded-2xl border-[3px] border-[#0A0A0A] shadow-[8px_8px_0_#C1522A] mt-12">
            <div className="flex items-start gap-5">
              <div className="p-3 bg-[#FFE500] text-[#0A0A0A] border-[2px] border-[#FAF5DC] rounded-xl shrink-0">
                <Sparkles size={32} />
              </div>
              <div className="max-w-4xl">
                <h4 className="text-2xl sm:text-3xl font-display uppercase tracking-tight text-[#FAF5DC] mb-3">
                  Sinergia entre Modelos: IDEF0 y BPMN
                </h4>
                <p className="text-base sm:text-lg font-body text-[#FAF5DC]/90 leading-relaxed font-medium">
                  Este diagrama complementa al diagrama IDEF0 del área: mientras <strong>IDEF0</strong> muestra la relación del proceso con su entorno (entradas, controles, mecanismos y salidas), <strong>BPMN</strong> detalla paso a paso cómo se ejecuta ese mismo proceso internamente entre las distintas áreas del equipo.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
