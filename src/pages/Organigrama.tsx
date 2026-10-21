import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Network, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  User, 
  ExternalLink, 
  AlertTriangle, 
  Clock, 
  CheckCircle2, 
  Cpu, 
  Activity,
  X
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Marker } from '../components/ui/Marker';
import { Button } from '../components/ui/Button';
import { Accordion } from '../components/ui/Accordion';
import { Table, TableHeader, TableRow, TableHead, TableCell } from '../components/ui/Table';
import { TeamAvatar } from '../components/svg/TeamAvatars';

export default function Organigrama() {
  const navigate = useNavigate();
  const [selectedNode, setSelectedNode] = useState<{
    title: string;
    name: string;
    avatar: 'octavio' | 'leandro' | 'einar' | 'huascar' | 'leonardo';
    link: string;
    color: string;
    objetivo: string;
    funciones: string;
    mision: string;
    vision: string;
  } | null>(null);

  const fundamentalsAccordion = [
    {
      title: "¿Qué es un organigrama de infraestructura tecnológica?",
      icon: <Network size={24} />,
      content: (
        <div className="space-y-3">
          <p>
            Un organigrama de infraestructura es el mapa formal que delimita las líneas de autoridad, las responsabilidades sobre activos físicos y los canales de comunicación dentro del equipo técnico. En entornos de misión crítica como la salud digital, no es solo un cuadro jerárquico: es la base del <strong>control de cambios (ITIL Change Management)</strong> y de la respuesta coordinada ante incidentes.
          </p>
          <p>
            Permite responder con certeza ante preguntas críticas: ¿Quién aprueba el apagado programado de un servidor de historias clínicas? ¿Quién custodia las llaves del rack hospitalario? ¿Quién responde ante una falla de hardware a las 3:00 AM?
          </p>
        </div>
      )
    },
    {
      title: "Estructura Horizontal vs. Jerarquía Vertical Tradicional",
      icon: <Layers size={24} />,
      content: (
        <div className="space-y-3">
          <p>
            Las estructuras verticales tradicionales acumulan múltiples capas de mandos medios que ralentizan la toma de decisiones mediante burocracia documental. En cambio, en <strong>Tiradores</strong> adoptamos una <strong>estructura ágil y horizontal</strong>.
          </p>
          <p>
            Esto significa que cada una de las 4 ramas técnicas tiene autonomía para resolver problemas dentro de su dominio técnico, comunicándose directamente con el Líder de Hardware y la Dirección General sin intermediarios innecesarios. El resultado es un tiempo de respuesta drásticamente menor y mayor satisfacción del cliente médico.
          </p>
        </div>
      )
    },
    {
      title: "La Ley de Conway y su Aplicación a Nuestra Arquitectura",
      icon: <TrendingUp size={24} />,
      content: (
        <div className="space-y-3">
          <p>
            La célebre <strong>Ley de Conway</strong> estipula que: <em>"Las organizaciones que diseñan sistemas están constreñidas a producir diseños que son copias de las estructuras de comunicación de dichas organizaciones"</em>.
          </p>
          <p>
            Debido a esto, nuestro organigrama refleja fielmente la arquitectura de nuestro sistema: una rama para la selección del stack tecnológico (Leandro), una para la provisión física (Einar), una para la certificación de calidad (Huascar) y una para la operación diaria (Leonardo), todas orquestadas por un Líder transversal (Octavio). Así garantizamos que el hardware refleje la modularidad del software.
          </p>
        </div>
      )
    },
    {
      title: "Continuidad Operativa y Cultura Blameless Post-Mortem",
      icon: <ShieldCheck size={24} />,
      content: (
        <div className="space-y-3">
          <p>
            Tener roles y dueños claros no busca buscar culpables ante un fallo, sino todo lo contrario: fomentar la <strong>cultura Blameless Post-Mortem</strong> (análisis sin culpas).
          </p>
          <p>
            Cuando ocurre un fallo en un componente de hardware, el equipo se reúne para analizar la causa raíz (temperatura, proveedor de energía, firmware) y robustecer el sistema en lugar de señalar a personas. La claridad del organigrama otorga a cada integrante la tranquilidad de saber exactamente qué ámbito de la infraestructura está bajo su cuidado.
          </p>
        </div>
      )
    }
  ];

  const raciData = [
    {
      task: "Definición del Stack de HW y Planificación Presupuestaria (CAPEX/OPEX)",
      octavio: "A",
      leandro: "R",
      einar: "C",
      huascar: "C",
      leonardo: "I",
      desc: "Evaluación técnica-financiera de servidores, edge computing y proyección de costos de infraestructura."
    },
    {
      task: "Adquisición, Despacho Logístico e Inventario de Equipos",
      octavio: "I",
      leandro: "A",
      einar: "R",
      huascar: "C",
      leonardo: "C",
      desc: "Gestión de proveedores, importación, control aduanero y registro en la plataforma de inventario."
    },
    {
      task: "Instalación Física, Cableado y Puesta en Marcha en Hospital",
      octavio: "A",
      leandro: "I",
      einar: "R",
      huascar: "C",
      leonardo: "C",
      desc: "Montaje de racks, cableado estructurado certificado y configuración de energía redundante (UPS)."
    },
    {
      task: "Auditoría de Normativas Médicas (ISO 13485, CE, FDA) y Capacidad",
      octavio: "A",
      leandro: "I",
      einar: "C",
      huascar: "R",
      leonardo: "I",
      desc: "Ensayos de disipación térmica, estrés electromagnético y certificación de seguridad clínica."
    },
    {
      task: "Activación del Plan de Recuperación ante Desastres (DRP / Failover)",
      octavio: "A",
      leandro: "I",
      einar: "R",
      huascar: "C",
      leonardo: "R",
      desc: "Ejecución inmediata de protocolos ante caída de servidores o enlace de red para restaurar sistemas en < 15 min."
    },
    {
      task: "Gestión de Identidades, Accesos Clínicos (Active Directory) y Soporte",
      octavio: "I",
      leandro: "I",
      einar: "C",
      huascar: "C",
      leonardo: "R",
      desc: "Mesa de ayuda Tier 1-2, aprovisionamiento de credenciales seguras y capacitación al personal médico."
    }
  ];

  const roleSpecs = [
    {
      name: "Octavio Luna",
      avatar: 'octavio' as const,
      role: "Líder de Hardware e Infraestructura",
      badge: "Liderazgo y Estrategia",
      color: "terracota" as const,
      focus: "Coordinación transversal del área, articulación con la Dirección General y facilitación de la agilidad Scrum.",
      tools: ["Jira / Smartsheet", "Métricas Ágiles (Velocity, Burndown)", "Arquitectura de Sistemas", "Gestión de Incidentes P1"],
      kpis: ["Disponibilidad del Sistema (99.9%)", "Tiempo Medio de Recuperación (MTTR < 30 min)", "Velocidad del Sprint (Story Points completados)"],
      link: "/scrum#octavio-luna"
    },
    {
      name: "Leandro Colque",
      avatar: 'leandro' as const,
      role: "Dirección de Tecnología y Presupuesto",
      badge: "Estrategia & FinOps",
      color: "blue" as const,
      focus: "Selección del stack tecnológico óptimo, gestión del presupuesto CAPEX/OPEX y sinergia técnica con el equipo Cloud.",
      tools: ["Modelos FinOps", "Análisis de TCO / ROI", "Benchmarking de Servidores", "Google Cloud / AWS Cost Explorer"],
      kpis: ["Eficiencia del Gasto Presupuestario (Variación < 5%)", "Costo por Transacción Clínica", "TCO a 3 años optimizado"],
      link: "/scrum#leandro-colque"
    },
    {
      name: "Einar Guillén",
      avatar: 'einar' as const,
      role: "Gestión de Infraestructura Global",
      badge: "Operaciones & Logística",
      color: "lime" as const,
      focus: "Adquisición, despliegue físico de hardware, cadena de suministro, cableado estructurado y ciclo de vida de los activos.",
      tools: ["Plataforma de Inventario IATECH", "Gestión de Cadena de Suministro", "Racks & PDU inteligentes", "Fluke Networks (Certificación)"],
      kpis: ["100% de Equipos Auditados en Inventario", "Tiempo de Entrega de Hardware (Lead Time)", "Cumplimiento del Mantenimiento Preventivo"],
      link: "/scrum#einar-guillen"
    },
    {
      name: "Huascar Duran",
      avatar: 'huascar' as const,
      role: "Aseguramiento de Calidad y Recursos",
      badge: "Normativas & Auditoría",
      color: "teal" as const,
      focus: "Homologación de normativas internacionales de salud, monitoreo de estrés térmico/energético y seguridad física de datos.",
      tools: ["Normativas ISO 13485 / ISO 27001", "Monitoreo Energético IoT", "Zabbix / Prometheus", "Auditoría de Seguridad Física"],
      kpis: ["Cero No-Conformidades en Auditorías", "PUE (Power Usage Effectiveness < 1.3)", "Tiempo de Detección de Anomalías Térmicas"],
      link: "/scrum#huascar-duran"
    },
    {
      name: "Leonardo Ibarra",
      avatar: 'leonardo' as const,
      role: "Operaciones de Soporte y Entorno de Trabajo",
      badge: "Soporte & Identidad",
      color: "magenta" as const,
      focus: "Mesa de ayuda técnica para usuarios clínicos, administración de identidades y accesos (Active Directory) y capacitación.",
      tools: ["Microsoft Entra ID / Active Directory", "Helpdesk Ticketing (SLA)", "Remote Desktop / SSH Seguro", "MDM (Mobile Device Management)"],
      kpis: ["Resolución al Primer Contacto (FCR > 85%)", "Satisfacción del Usuario Médico (CSAT > 92%)", "Tiempo Medio de Respuesta (< 15 min)"],
      link: "/scrum#leonardo-ibarra"
    }
  ];

  return (
    <div className="w-full pb-28">
      {/* Header Hero */}
      <header className="bg-[#B6F23A] bg-dots border-b-[4px] border-[#0A0A0A] py-16 md:py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto text-center">
          <Badge color="black" className="mb-4">
            ESTRUCTURA ORGANIZACIONAL Y GOBERNANZA TÉCNICA
          </Badge>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-[#0A0A0A] uppercase leading-[0.9]">
            ORGANIGRAMA — <Marker color="terracota">HARDWARE</Marker>
          </h1>
          <p className="text-lg md:text-xl text-[#0A0A0A]/90 font-sans max-w-3xl mx-auto mt-4 font-medium">
            Diseño Organizacional, Roles, Matriz RACI y Cadena de Valor • Tiradores
          </p>
        </div>
      </header>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 mt-16 space-y-24">
        
        {/* 1. Teoría y Conceptos de Organización en Acordeón */}
        <section>
          <div className="mb-8">
            <Badge color="yellow" className="mb-4">SECCIÓN 01 // FUNDAMENTOS</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-4">
              1. Fundamentos de Organización en Infraestructura
            </h2>
            <p className="text-lg text-[#0A0A0A]/85 font-sans">
              Por qué la estructura técnica define la estabilidad de los sistemas clínicos:
            </p>
          </div>

          <Accordion items={fundamentalsAccordion} />
        </section>

        {/* 2. ÁRBOL ORGANIGRAMA REAL INTERACTIVO EN SVG/CSS */}
        <section className="bg-white p-8 md:p-14 rounded-2xl border-[3px] border-[#0A0A0A] shadow-brutal bg-dots">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge color="terracota" className="mb-4">ESTRUCTURA OFICIAL VINCULADA</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-4">
              2. Estructura Jerárquica y Funcional
            </h2>
            <p className="text-base sm:text-lg text-[#0A0A0A]/80 font-sans">
              Haz clic en cualquier tarjeta del organigrama para desplegar su ficha de Objetivo, Funciones, Misión y Visión:
            </p>
          </div>

          {/* Org Tree Flow */}
          <div className="flex flex-col items-center select-none font-sans relative">
            
            {/* Top Level: External CEO */}
            <div className="w-full max-w-[280px] bg-[#FAF5DC] p-5 rounded-2xl border-[3px] border-[#0A0A0A] shadow-brutal text-center">
              <span className="text-[10px] font-display font-bold uppercase tracking-widest text-[#0A0A0A]/60 block mb-1">SUPERVISIÓN ESTRATÉGICA</span>
              <h3 className="font-display font-bold text-xl uppercase text-[#0A0A0A]">CEO / Dirección General</h3>
              <p className="font-display font-bold text-sm text-[#C1522A] mt-1">Ing. Cárdenas</p>
            </div>

            {/* Connecting Vertical Line 1 */}
            <div className="w-1 h-8 bg-[#0A0A0A]" />

            {/* Level 2: Líder de Hardware (Octavio Luna) */}
            <div 
              onClick={() => setSelectedNode({
                title: "Líder de Hardware e Infraestructura Tecnológica",
                name: "Octavio Luna",
                avatar: "octavio",
                link: "/scrum#octavio-luna",
                color: "bg-[#C1522A] text-white",
                objetivo: "Coordinar las 4 áreas, asegurar la ejecución de la estrategia de hardware definida junto a Dirección de Tecnología y facilitar la resolución de bloqueos entre áreas.",
                funciones: "Supervisión general, articulación con Infraestructura Cloud, reporte a CEO.",
                mision: "Coordinar de forma transversal las 4 áreas de hardware, articulando la estrategia técnica con la dirección general de Tiradores.",
                vision: "Consolidar un área de hardware autogestionada, ágil y alineada, referente interno de trabajo en equipo bajo metodología Scrum."
              })}
              className="w-full max-w-[340px] bg-[#C1522A] text-white p-6 rounded-2xl border-[3px] border-[#0A0A0A] shadow-brutal cursor-pointer hover:scale-105 transition-all text-center relative group"
            >
              <div className="absolute -top-3 right-4">
                <Badge color="yellow">LÍDER ÁGIL</Badge>
              </div>
              <div className="flex items-center justify-center gap-3 mb-3">
                <TeamAvatar member="octavio" size="sm" />
                <h3 className="font-display font-bold text-lg md:text-xl uppercase tracking-wide">
                  Líder de Hardware e Infraestructura
                </h3>
              </div>
              <div className="inline-block px-3 py-1 bg-white text-[#0A0A0A] rounded-full font-display font-bold text-sm uppercase">
                Octavio Luna
              </div>
              <span className="text-[11px] block mt-2 text-white/90 underline font-medium">Ver funciones y misión ↗</span>
            </div>

            {/* Connecting Vertical Line 2 */}
            <div className="w-1 h-8 bg-[#0A0A0A]" />

            {/* Horizontal Branch Bar for 4 Areas (Desktop) */}
            <div className="hidden lg:block w-full max-w-[1040px] h-1 bg-[#0A0A0A] relative">
              <div className="absolute left-[12%] -top-2 w-1 h-6 bg-[#0A0A0A]" />
              <div className="absolute left-[38%] -top-2 w-1 h-6 bg-[#0A0A0A]" />
              <div className="absolute left-[62%] -top-2 w-1 h-6 bg-[#0A0A0A]" />
              <div className="absolute left-[88%] -top-2 w-1 h-6 bg-[#0A0A0A]" />
            </div>

            {/* 4 Areas Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1140px] mt-4 lg:mt-6">
              
              {/* Node 1: Leandro */}
              <div
                onClick={() => setSelectedNode({
                  title: "Dirección de Tecnología y Presupuesto",
                  name: "Leandro Colque",
                  avatar: "leandro",
                  link: "/scrum#leandro-colque",
                  color: "bg-[#3B6BFF] text-white",
                  objetivo: "Definir el stack de hardware, compatibilidad con la nube y gestión del presupuesto operativo/capital (OPEX/CAPEX).",
                  funciones: "Coordinar con Software y Cloud la selección de hardware óptimo (servidores, edge computing, dispositivos IoT médicos); planificar compras estratégicas y evaluar factibilidad financiera.",
                  mision: "Definir el stack tecnológico óptimo y administrar el presupuesto operativo/capital del área de Hardware, asegurando compatibilidad con la nube y decisiones de inversión estratégicas.",
                  vision: "Ser el referente en planificación tecnológica financiera, anticipando las necesidades futuras del ecosistema IA MediTech con eficiencia presupuestaria."
                })}
                className="bg-white p-5 rounded-2xl border-[3px] border-[#0A0A0A] shadow-brutal cursor-pointer hover:-translate-y-1 hover:shadow-brutal-lg transition-all text-center flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-center mb-3">
                    <TeamAvatar member="leandro" size="md" />
                  </div>
                  <h4 className="font-display font-bold text-base uppercase text-[#0A0A0A] mb-2 leading-snug">
                    Dirección de Tecnología y Presupuesto
                  </h4>
                  <div className="inline-block px-3 py-1 bg-[#3B6BFF] text-white rounded-full font-display font-bold text-xs uppercase mb-2">
                    Leandro Colque
                  </div>
                </div>
                <span className="text-[11px] text-[#0A0A0A]/70 underline">Ver detalles ↗</span>
              </div>

              {/* Node 2: Einar */}
              <div
                onClick={() => setSelectedNode({
                  title: "Gestión de Infraestructura Global",
                  name: "Einar Guillén",
                  avatar: "einar",
                  link: "/scrum#einar-guillen",
                  color: "bg-[#B6F23A] text-[#0A0A0A]",
                  objetivo: "Adquisición, logística, almacenamiento y ciclo de vida de todo el equipamiento físico.",
                  funciones: "Compras y control de inventario (proveedores, aduanas); mantenimiento preventivo y correctivo en sedes locales e internacionales.",
                  mision: "Administrar la adquisición, logística, almacenamiento y ciclo de vida de todo el equipamiento físico, garantizando su disponibilidad continua.",
                  vision: "Consolidar una infraestructura global resiliente y escalable que soporte el crecimiento del ecosistema de salud digital."
                })}
                className="bg-white p-5 rounded-2xl border-[3px] border-[#0A0A0A] shadow-brutal cursor-pointer hover:-translate-y-1 hover:shadow-brutal-lg transition-all text-center flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-center mb-3">
                    <TeamAvatar member="einar" size="md" />
                  </div>
                  <h4 className="font-display font-bold text-base uppercase text-[#0A0A0A] mb-2 leading-snug">
                    Gestión de Infraestructura Global
                  </h4>
                  <div className="inline-block px-3 py-1 bg-[#B6F23A] text-[#0A0A0A] rounded-full font-display font-bold text-xs uppercase mb-2">
                    Einar Guillén
                  </div>
                </div>
                <span className="text-[11px] text-[#0A0A0A]/70 underline">Ver detalles ↗</span>
              </div>

              {/* Node 3: Huascar */}
              <div
                onClick={() => setSelectedNode({
                  title: "Aseguramiento de Calidad y Recursos",
                  name: "Huascar Duran",
                  avatar: "huascar",
                  link: "/scrum#huascar-duran",
                  color: "bg-[#00C2CB] text-[#0A0A0A]",
                  objetivo: "Cumplimiento de estándares de salud, seguridad física de datos y eficiencia operativa.",
                  funciones: "Validación de calidad (normativas ISO, CE, FDA); monitoreo y proyecciones de consumo energético y capacidad.",
                  mision: "Certificar el cumplimiento de estándares de salud, seguridad física de datos y normativas internacionales (ISO, CE, FDA) en todo el hardware desplegado.",
                  vision: "Ser garantes de la calidad y confiabilidad técnica que permite operar sin interrupciones los sistemas críticos de salud."
                })}
                className="bg-white p-5 rounded-2xl border-[3px] border-[#0A0A0A] shadow-brutal cursor-pointer hover:-translate-y-1 hover:shadow-brutal-lg transition-all text-center flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-center mb-3">
                    <TeamAvatar member="huascar" size="md" />
                  </div>
                  <h4 className="font-display font-bold text-base uppercase text-[#0A0A0A] mb-2 leading-snug">
                    Aseguramiento de Calidad y Recursos
                  </h4>
                  <div className="inline-block px-3 py-1 bg-[#00C2CB] text-[#0A0A0A] rounded-full font-display font-bold text-xs uppercase mb-2">
                    Huascar Duran
                  </div>
                </div>
                <span className="text-[11px] text-[#0A0A0A]/70 underline">Ver detalles ↗</span>
              </div>

              {/* Node 4: Leonardo */}
              <div
                onClick={() => setSelectedNode({
                  title: "Operaciones de Soporte y Entorno de Trabajo",
                  name: "Leonardo Ibarra",
                  avatar: "leonardo",
                  link: "/scrum#leonardo-ibarra",
                  color: "bg-[#FF3DCB] text-white",
                  objetivo: "Mantener la continuidad operativa diaria de los usuarios finales y administrar accesos.",
                  funciones: "Mesa de ayuda y capacitación (helpdesk); administración de identidades y espacios (Active Directory/Entra ID).",
                  mision: "Mantener la continuidad operativa diaria de los usuarios finales mediante mesa de ayuda, capacitación y administración de accesos.",
                  vision: "Ser el primer punto de contacto confiable que resuelve incidencias con rapidez y empodera a los usuarios con conocimiento técnico."
                })}
                className="bg-white p-5 rounded-2xl border-[3px] border-[#0A0A0A] shadow-brutal cursor-pointer hover:-translate-y-1 hover:shadow-brutal-lg transition-all text-center flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-center mb-3">
                    <TeamAvatar member="leonardo" size="md" />
                  </div>
                  <h4 className="font-display font-bold text-base uppercase text-[#0A0A0A] mb-2 leading-snug">
                    Operaciones de Soporte y Entorno
                  </h4>
                  <div className="inline-block px-3 py-1 bg-[#FF3DCB] text-white rounded-full font-display font-bold text-xs uppercase mb-2">
                    Leonardo Ibarra
                  </div>
                </div>
                <span className="text-[11px] text-[#0A0A0A]/70 underline">Ver detalles ↗</span>
              </div>

            </div>

          </div>
        </section>

        {/* Modal / Panel para nodo seleccionado */}
        {selectedNode && (
          <div 
            className="fixed inset-0 z-50 bg-[#0A0A0A]/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedNode(null)}
          >
            <div 
              className="bg-white rounded-2xl border-[4px] border-[#0A0A0A] shadow-brutal-xl max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b-[3px] border-[#0A0A0A] mb-6">
                <div className="flex items-center gap-3">
                  <TeamAvatar member={selectedNode.avatar} size="md" />
                  <div>
                    <h3 className="font-display font-bold text-2xl uppercase text-[#0A0A0A]">
                      {selectedNode.title}
                    </h3>
                    <p className="font-display font-bold text-sm text-[#C1522A]">
                      {selectedNode.name}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedNode(null)}
                  className="p-2 rounded-xl border-[2px] border-[#0A0A0A] bg-[#FF3DCB] text-white cursor-pointer"
                >
                  <X size={20} strokeWidth={3} />
                </button>
              </div>

              <div className="space-y-5 text-sm md:text-base font-sans">
                <div className="p-4 rounded-xl border-[2px] border-[#0A0A0A] bg-[#FAF5DC]">
                  <strong className="font-display font-bold uppercase text-xs block text-[#C1522A] mb-1">OBJETIVO:</strong>
                  <p className="text-[#0A0A0A]/90">{selectedNode.objetivo}</p>
                </div>
                <div className="p-4 rounded-xl border-[2px] border-[#0A0A0A] bg-[#FAF5DC]">
                  <strong className="font-display font-bold uppercase text-xs block text-[#C1522A] mb-1">FUNCIONES:</strong>
                  <p className="text-[#0A0A0A]/90">{selectedNode.funciones}</p>
                </div>
                <div className="p-4 rounded-xl border-[2px] border-[#0A0A0A] bg-[#FAF5DC]">
                  <strong className="font-display font-bold uppercase text-xs block text-[#C1522A] mb-1">MISIÓN:</strong>
                  <p className="italic text-[#0A0A0A]/90">"{selectedNode.mision}"</p>
                </div>
                <div className="p-4 rounded-xl border-[2px] border-[#0A0A0A] bg-[#FAF5DC]">
                  <strong className="font-display font-bold uppercase text-xs block text-[#C1522A] mb-1">VISIÓN:</strong>
                  <p className="italic text-[#0A0A0A]/90">"{selectedNode.vision}"</p>
                </div>

                <div className="pt-4">
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full"
                    onClick={() => {
                      const link = selectedNode.link;
                      setSelectedNode(null);
                      navigate(link);
                      setTimeout(() => {
                        const hash = link.split('#')[1];
                        if (hash) {
                          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 150);
                    }}
                  >
                    <span>Ver Perfil en Metodología Scrum</span>
                    <ExternalLink size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. Matriz RACI de Responsabilidades */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <Badge color="yellow" className="mb-4">GOBERNANZA DE PROCESOS</Badge>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-2">
                3. Matriz RACI de Responsabilidades
              </h2>
              <p className="text-base text-[#0A0A0A]/80 font-sans">
                Delimitación exacta de roles en los flujos de trabajo críticos de infraestructura:
              </p>
            </div>

            {/* RACI Legend Badges */}
            <div className="flex flex-wrap gap-2 text-xs font-display font-bold">
              <span className="px-3 py-1 bg-[#00C2CB] text-[#0A0A0A] border-[2px] border-[#0A0A0A] rounded-md shadow-[2px_2px_0_#0A0A0A]">R = Responsable</span>
              <span className="px-3 py-1 bg-[#C1522A] text-white border-[2px] border-[#0A0A0A] rounded-md shadow-[2px_2px_0_#0A0A0A]">A = Aprobador</span>
              <span className="px-3 py-1 bg-[#FFE500] text-[#0A0A0A] border-[2px] border-[#0A0A0A] rounded-md shadow-[2px_2px_0_#0A0A0A]">C = Consultado</span>
              <span className="px-3 py-1 bg-white text-[#0A0A0A] border-[2px] border-[#0A0A0A] rounded-md shadow-[2px_2px_0_#0A0A0A]">I = Informado</span>
            </div>
          </div>

          <Table>
            <TableHeader>
              <tr>
                <TableHead>Flujo de Trabajo / Tarea Clave</TableHead>
                <TableHead className="text-center">Octavio (Líder)</TableHead>
                <TableHead className="text-center">Leandro (Presupuesto)</TableHead>
                <TableHead className="text-center">Einar (Logística)</TableHead>
                <TableHead className="text-center">Huascar (Calidad)</TableHead>
                <TableHead className="text-center">Leonardo (Soporte)</TableHead>
              </tr>
            </TableHeader>
            <tbody>
              {raciData.map((row, idx) => {
                const getBadge = (val: string) => {
                  if (val === 'R') return <span className="px-3 py-1 bg-[#00C2CB] text-[#0A0A0A] border-[2px] border-[#0A0A0A] rounded-md font-display font-bold text-xs shadow-[1px_1px_0_#0A0A0A]">R</span>;
                  if (val === 'A') return <span className="px-3 py-1 bg-[#C1522A] text-white border-[2px] border-[#0A0A0A] rounded-md font-display font-bold text-xs shadow-[1px_1px_0_#0A0A0A]">A</span>;
                  if (val === 'C') return <span className="px-3 py-1 bg-[#FFE500] text-[#0A0A0A] border-[2px] border-[#0A0A0A] rounded-md font-display font-bold text-xs shadow-[1px_1px_0_#0A0A0A]">C</span>;
                  return <span className="px-3 py-1 bg-[#FAF5DC] text-[#0A0A0A] border-[2px] border-[#0A0A0A] rounded-md font-display font-bold text-xs">I</span>;
                };

                return (
                  <TableRow key={idx}>
                    <TableCell>
                      <strong className="font-display font-bold text-base text-[#0A0A0A] block mb-1">
                        {row.task}
                      </strong>
                      <span className="text-xs text-[#0A0A0A]/70 font-sans">{row.desc}</span>
                    </TableCell>
                    <TableCell className="text-center">{getBadge(row.octavio)}</TableCell>
                    <TableCell className="text-center">{getBadge(row.leandro)}</TableCell>
                    <TableCell className="text-center">{getBadge(row.einar)}</TableCell>
                    <TableCell className="text-center">{getBadge(row.huascar)}</TableCell>
                    <TableCell className="text-center">{getBadge(row.leonardo)}</TableCell>
                  </TableRow>
                );
              })}
            </tbody>
          </Table>
        </section>

        {/* 4. Fichas Técnicas por Rol, Stack y KPIs */}
        <section>
          <div className="mb-8">
            <Badge color="magenta" className="mb-4">PERFILES Y COMPETENCIAS</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-4">
              4. Stack Tecnológico y Métricas por Rol
            </h2>
            <p className="text-base text-[#0A0A0A]/85 font-sans">
              Herramientas que domina y KPIs bajo los cuales se evalúa cada posición del organigrama:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roleSpecs.map((item, idx) => (
              <Card key={idx} color="white" className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge color="yellow" size="sm">{item.badge}</Badge>
                    <TeamAvatar member={item.avatar} size="sm" />
                  </div>

                  <h3 className="font-display font-bold text-2xl uppercase text-[#0A0A0A] mb-0.5">
                    {item.name}
                  </h3>
                  <h4 className="font-display font-bold text-xs uppercase text-[#C1522A] mb-3">
                    {item.role}
                  </h4>
                  <p className="text-xs text-[#0A0A0A]/80 font-sans leading-relaxed mb-4">
                    {item.focus}
                  </p>

                  <div className="space-y-3 pt-3 border-t-[2px] border-[#0A0A0A]/10 text-xs font-sans">
                    <div>
                      <strong className="font-display font-bold uppercase text-[11px] block text-[#0A0A0A] mb-1.5">
                        🛠 Stack & Herramientas:
                      </strong>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tools.map((t, tIdx) => (
                          <span key={tIdx} className="bg-[#FAF5DC] px-2 py-0.5 rounded border border-[#0A0A0A] text-[10.5px] font-mono font-bold text-[#0A0A0A]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <strong className="font-display font-bold uppercase text-[11px] block text-[#0A0A0A] mb-1.5">
                        📈 KPIs de Impacto:
                      </strong>
                      <ul className="space-y-1 text-[11px] text-[#0A0A0A]/80">
                        {item.kpis.map((k, kIdx) => (
                          <li key={kIdx} className="flex items-start gap-1">
                            <span className="text-[#C1522A] font-bold">›</span>
                            <span>{k}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t-[2px] border-[#0A0A0A]/10">
                  <a
                    href={item.link}
                    className="inline-flex items-center justify-center w-full py-2 bg-[#0A0A0A] hover:bg-[#C1522A] text-white text-xs font-display font-bold uppercase tracking-wider rounded-xl transition-colors gap-1.5 shadow-[2px_2px_0_#0A0A0A]"
                  >
                    <span>Ver Perfil Scrum</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 5. Acuerdos de Nivel de Servicio (SLA) */}
        <section>
          <div className="mb-8">
            <Badge color="terracota" className="mb-4">NIVEL DE SERVICIO GARANTIZADO</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-4">
              5. Protocolos de Escalamiento y Acuerdos de Servicio (SLA)
            </h2>
            <p className="text-base text-[#0A0A0A]/85 font-sans">
              Para que la estructura organizacional sea efectiva bajo estrés, definimos tiempos máximos de respuesta según la criticidad del incidente en el hospital:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* P1: Crítica */}
            <Card color="magenta" className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge color="black">PRIORIDAD 1 • CRÍTICA</Badge>
                  <AlertTriangle size={24} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-2xl uppercase mb-3">
                  Caída de Sistema / Quirófano
                </h3>
                <p className="text-sm font-sans mb-6 opacity-95">
                  Afecta de forma inmediata a la atención del paciente o interrumpe la base de datos clínica principal.
                </p>
              </div>
              <div className="p-4 bg-black/20 rounded-xl border-[2px] border-white/30 text-xs font-mono space-y-1">
                <p className="text-[#FFE500] font-bold">Tiempo de Respuesta: &lt; 15 min</p>
                <p>Tiempo de Solución: &lt; 1 hora</p>
                <p className="text-white/80">Escala a: Octavio Luna / Einar Guillén</p>
              </div>
            </Card>

            {/* P2: Mayor */}
            <Card color="yellow" className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge color="black">PRIORIDAD 2 • MAYOR</Badge>
                  <Clock size={24} className="text-[#0A0A0A]" />
                </div>
                <h3 className="font-display font-bold text-2xl uppercase mb-3">
                  Degradación de Rendimiento
                </h3>
                <p className="text-sm font-sans mb-6 text-[#0A0A0A]/85">
                  Saturación de red o lentitud en inferencia de IA sin detención total del servicio hospitalario.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border-[2px] border-[#0A0A0A] text-xs font-mono space-y-1 text-[#0A0A0A]">
                <p className="text-[#C1522A] font-bold">Tiempo de Respuesta: &lt; 1 hora</p>
                <p>Tiempo de Solución: &lt; 4 horas</p>
                <p className="text-[#0A0A0A]/80">Escala a: Leandro Colque / Huascar Duran</p>
              </div>
            </Card>

            {/* P3: Menor */}
            <Card color="teal" className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge color="black">PRIORIDAD 3 • MENOR</Badge>
                  <CheckCircle2 size={24} className="text-[#0A0A0A]" />
                </div>
                <h3 className="font-display font-bold text-2xl uppercase mb-3">
                  Solicitudes de Soporte & HW
                </h3>
                <p className="text-sm font-sans mb-6 text-[#0A0A0A]/85">
                  Nuevos accesos, configuración de periféricos o dudas operativas de usuarios en estación de trabajo.
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border-[2px] border-[#0A0A0A] text-xs font-mono space-y-1 text-[#0A0A0A]">
                <p className="text-[#0A0A0A] font-bold">Tiempo de Respuesta: &lt; 4 horas</p>
                <p>Tiempo de Solución: &lt; 24 horas</p>
                <p className="text-[#0A0A0A]/80">Atiende: Leonardo Ibarra (Soporte)</p>
              </div>
            </Card>
          </div>
        </section>

      </div>
    </div>
  );
}
