import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronDown, 
  ChevronUp, 
  User, 
  Network, 
  Layers, 
  TrendingUp, 
  ShieldCheck,
  CheckCircle2,
  Clock,
  Activity,
  AlertTriangle,
  FileSpreadsheet,
  Cpu,
  Workflow,
  ExternalLink,
  Info
} from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import FadeIn from '../components/FadeIn';

export default function Organigrama() {
  const [activeTabRACI, setActiveTabRACI] = useState<'all' | 'adquisicion' | 'seguridad' | 'contingencia' | 'calidad' | 'soporte'>('all');

  const raciData = [
    {
      task: "Definición del Stack de HW y Planificación Presupuestaria (CAPEX/OPEX)",
      category: "adquisicion",
      octavio: "A (Aprobador)",
      leandro: "R (Responsable)",
      einar: "C (Consultado)",
      huascar: "C (Consultado)",
      leonardo: "I (Informado)",
      desc: "Evaluación técnica-financiera de servidores, edge computing y proyección de costos de infraestructura."
    },
    {
      task: "Adquisición, Despacho Logístico e Inventario de Equipos",
      category: "adquisicion",
      octavio: "I (Informado)",
      leandro: "A (Aprobador)",
      einar: "R (Responsable)",
      huascar: "C (Consultado)",
      leonardo: "C (Consultado)",
      desc: "Gestión de proveedores, importación, control aduanero y registro en la plataforma de inventario."
    },
    {
      task: "Instalación Física, Cableado y Puesta en Marcha en Hospital",
      category: "adquisicion",
      octavio: "A (Aprobador)",
      leandro: "I (Informado)",
      einar: "R (Responsable)",
      huascar: "C (Consultado)",
      leonardo: "C (Consultado)",
      desc: "Montaje de racks, cableado estructurado certificado y configuración de energía redundante (UPS)."
    },
    {
      task: "Auditoría de Normativas Médicas (ISO 13485, CE, FDA) y Capacidad",
      category: "calidad",
      octavio: "A (Aprobador)",
      leandro: "I (Informado)",
      einar: "C (Consultado)",
      huascar: "R (Responsable)",
      leonardo: "I (Informado)",
      desc: "Ensayos de disipación térmica, estrés electromagnético y certificación de seguridad clínica."
    },
    {
      task: "Activación del Plan de Recuperación ante Desastres (DRP / Failover)",
      category: "contingencia",
      octavio: "A (Aprobador)",
      leandro: "I (Informado)",
      einar: "R (Responsable)",
      huascar: "C (Consultado)",
      leonardo: "R (Responsable)",
      desc: "Ejecución inmediata de protocolos ante caída de servidores o enlace de red para restaurar sistemas en < 15 min."
    },
    {
      task: "Gestión de Identidades, Accesos Clínicos (Active Directory) y Soporte",
      category: "soporte",
      octavio: "I (Informado)",
      leandro: "I (Informado)",
      einar: "C (Consultado)",
      huascar: "C (Consultado)",
      leonardo: "R (Responsable)",
      desc: "Mesa de ayuda Tier 1-2, aprovisionamiento de credenciales seguras y capacitación al personal médico."
    }
  ];

  const roleSpecs = [
    {
      name: "Octavio Luna",
      role: "Líder de Hardware e Infraestructura",
      badge: "Liderazgo y Estrategia",
      focus: "Coordinación transversal del área, articulación con la Dirección General y facilitación de la agilidad Scrum.",
      tools: ["Jira / Smartsheet", "Métricas Ágiles (Velocity, Burndown)", "Arquitectura de Sistemas", "Gestión de Incidentes P1"],
      kpis: ["Disponibilidad del Sistema (99.9%)", "Tiempo Medio de Recuperación (MTTR < 30 min)", "Velocidad del Sprint (Story Points completados)"],
      link: "/scrum#octavio-luna"
    },
    {
      name: "Leandro Colque",
      role: "Dirección de Tecnología y Presupuesto",
      badge: "Estrategia & FinOps",
      focus: "Selección del stack tecnológico óptimo, gestión del presupuesto CAPEX/OPEX y sinergia técnica con el equipo Cloud.",
      tools: ["Modelos FinOps", "Análisis de TCO / ROI", "Benchmarking de Servidores", "Google Cloud / AWS Cost Explorer"],
      kpis: ["Eficiencia del Gasto Presupuestario (Variación < 5%)", "Costo por Transacción Clínica", "TCO a 3 años optimizado"],
      link: "/scrum#leandro-colque"
    },
    {
      name: "Einar Guillén",
      role: "Gestión de Infraestructura Global",
      badge: "Operaciones & Logística",
      focus: "Adquisición, despliegue físico de hardware, cadena de suministro, cableado estructurado y ciclo de vida de los activos.",
      tools: ["Plataforma de Inventario IATECH", "Gestión de Cadena de Suministro", "Racks & PDU inteligentes", "Fluke Networks (Certificación)"],
      kpis: ["100% de Equipos Auditados en Inventario", "Tiempo de Entrega de Hardware (Lead Time)", "Cumplimiento del Mantenimiento Preventivo"],
      link: "/scrum#einar-guillen"
    },
    {
      name: "Huascar Duran",
      role: "Aseguramiento de Calidad y Recursos",
      badge: "Normativas & Auditoría",
      focus: "Homologación de normativas internacionales de salud, monitoreo de estrés térmico/energético y seguridad física de datos.",
      tools: ["Normativas ISO 13485 / ISO 27001", "Monitoreo Energético IoT", "Zabbix / Prometheus", "Auditoría de Seguridad Física"],
      kpis: ["Cero No-Conformidades en Auditorías", "PUE (Power Usage Effectiveness < 1.3)", "Tiempo de Detección de Anomalías Térmicas"],
      link: "/scrum#huascar-duran"
    },
    {
      name: "Leonardo Ibarra",
      role: "Operaciones de Soporte y Entorno de Trabajo",
      badge: "Soporte & Identidad",
      focus: "Mesa de ayuda técnica para usuarios clínicos, administración de identidades y accesos (Active Directory) y capacitación.",
      tools: ["Microsoft Entra ID / Active Directory", "Helpdesk Ticketing (SLA)", "Remote Desktop / SSH Seguro", "MDM (Mobile Device Management)"],
      kpis: ["Resolución al Primer Contacto (FCR > 85%)", "Satisfacción del Usuario Médico (CSAT > 92%)", "Tiempo Medio de Respuesta (< 15 min)"],
      link: "/scrum#leonardo-ibarra"
    }
  ];

  return (
    <AnimatedPage>
      <div className="w-full bg-background pb-24">
        {/* Page Header */}
        <header className="bg-surface text-foreground-inverse py-20 border-b-8 border-primary">
          <div className="container-wide text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1 rounded-full mb-3 border border-primary/20">
              Estructura Organizacional y Gobernanza Técnica
            </span>
            <h1 className="text-5xl md:text-7xl font-display tracking-wide text-white mb-4">
              Organigrama — Hardware
            </h1>
            <p className="text-lg md:text-xl font-display tracking-widest text-primary uppercase max-w-3xl mx-auto">
              Diseño Organizacional, Roles, Matriz RACI y Cadena de Valor • Tiradores
            </p>
          </div>
        </header>

        <div className="container-wide max-w-7xl mt-16 space-y-24">
          
          {/* 1. Teoría y Conceptos de Organización */}
          <FadeIn>
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-primary/10 text-primary rounded-lg">
                  <Network size={28} />
                </div>
                <div>
                  <h2 className="text-3xl md:text-5xl font-display text-surface">
                    1. Fundamentos de Organización en Infraestructura
                  </h2>
                  <p className="text-xs md:text-sm text-foreground-muted font-sans uppercase tracking-widest">
                    Por qué la estructura técnica define la estabilidad de los sistemas clínicos
                  </p>
                </div>
              </div>

              <div className="space-y-4 font-sans">
                <AccordionItem icon={<Network size={24} />} title="¿Qué es un organigrama de infraestructura tecnológica?">
                  <p className="mb-3">
                    Un organigrama de infraestructura es el mapa formal que delimita las líneas de autoridad, las responsabilidades sobre activos físicos y los canales de comunicación dentro del equipo técnico. En entornos de misión crítica como la salud digital, no es solo un cuadro jerárquico: es la base del <strong>control de cambios (ITIL Change Management)</strong> y de la respuesta coordinada ante incidentes.
                  </p>
                  <p>
                    Permite responder con certeza ante preguntas críticas: ¿Quién aprueba el apagado programado de un servidor de historias clínicas? ¿Quién custodia las llaves del rack hospitalario? ¿Quién responde ante una falla de hardware a las 3:00 AM?
                  </p>
                </AccordionItem>

                <AccordionItem icon={<Layers size={24} />} title="Estructura Horizontal vs. Jerarquía Vertical Tradicional">
                  <p className="mb-3">
                    Las estructuras verticales tradicionales acumulan múltiples capas de mandos medios que ralentizan la toma de decisiones mediante burocracia documental. En cambio, en <strong>Tiradores</strong> adoptamos una <strong>estructura ágil y horizontal</strong>.
                  </p>
                  <p>
                    Esto significa que cada una de las 4 ramas técnicas tiene autonomía para resolver problemas dentro de su dominio técnico, comunicándose directamente con el Líder de Hardware y la Dirección General sin intermediarios innecesarios. El resultado es un tiempo de respuesta drásticamente menor y mayor satisfacción del cliente médico.
                  </p>
                </AccordionItem>

                <AccordionItem icon={<TrendingUp size={24} />} title="La Ley de Conway y su Aplicación a Nuestra Arquitectura">
                  <p className="mb-3">
                    La célebre <strong>Ley de Conway</strong> estipula que: <em>"Las organizaciones que diseñan sistemas están constreñidas a producir diseños que son copias de las estructuras de comunicación de dichas organizaciones"</em>.
                  </p>
                  <p>
                    Debido a esto, nuestro organigrama refleja fielmente la arquitectura de nuestro sistema: una rama para la selección del stack tecnológico (Leandro), una para la provisión física (Einar), una para la certificación de calidad (Huascar) y una para la operación diaria (Leonardo), todas orquestadas por un Líder transversal (Octavio). Así garantizamos que el hardware refleje la modularidad del software.
                  </p>
                </AccordionItem>

                <AccordionItem icon={<ShieldCheck size={24} />} title="Continuidad Operativa y Cultura Blameless Post-Mortem">
                  <p className="mb-3">
                    Tener roles y dueños claros no busca buscar culpables ante un fallo, sino todo lo contrario: fomentar la <strong>cultura Blameless Post-Mortem</strong> (análisis sin culpas).
                  </p>
                  <p>
                    Cuando ocurre un fallo en un componente de hardware, el equipo se reúne para analizar la causa raíz (temperatura, proveedor de energía, firmware) y robustecer el sistema en lugar de señalar a personas. La claridad del organigrama otorga a cada integrante la tranquilidad de saber exactamente qué ámbito de la infraestructura está bajo su cuidado.
                  </p>
                </AccordionItem>
              </div>
            </section>
          </FadeIn>

          {/* 2. Diagrama Interactivo del Equipo */}
          <FadeIn delay={0.1}>
            <section className="bg-white p-8 md:p-12 rounded-2xl border border-stone-200 shadow-sm overflow-visible">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-primary font-bold tracking-widest uppercase text-xs block mb-2">
                  Estructura Oficial
                </span>
                <h2 className="text-3xl md:text-5xl font-display text-surface mb-3">
                  2. Estructura Jerárquica y Funcional
                </h2>
                <p className="text-foreground-muted text-sm md:text-base">
                  Haz clic en el encabezado de cualquier tarjeta para desplegar sus objetivos, funciones y enlace a su perfil Scrum:
                </p>
              </div>
              
              <div className="w-full flex flex-col items-center select-none font-sans relative">
                
                {/* TOP LEVEL */}
                <div className="text-center text-primary font-bold uppercase tracking-widest text-xs mb-3 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20">
                  Área de Infraestructura de Hardware (IA MediTech)
                </div>
                <div className="w-px h-8 bg-surface"></div>

                <OrgBox 
                  title="CEO / Dirección General" 
                  name="Ing. Cárdenas" 
                  type="external"
                />

                <div className="w-px h-8 bg-surface"></div>

                {/* SECOND LEVEL */}
                <OrgBox 
                  id="lider-hardware"
                  title="Líder de Hardware e Infraestructura Tecnológica" 
                  name="Octavio Luna" 
                  link="/scrum#octavio-luna"
                  type="leader"
                  mision="Coordinar de forma transversal las 4 áreas de hardware, articulando la estrategia técnica con la dirección general de Tiradores."
                  vision="Consolidar un área de hardware autogestionada, ágil y alineada, referente interno de trabajo en equipo bajo metodología Scrum."
                  objetivo="Coordinar las 4 áreas, asegurar la ejecución de la estrategia de hardware definida junto a Dirección de Tecnología y facilitar la resolución de bloqueos entre áreas."
                  funciones="Supervisión general, articulación con Infraestructura Cloud, reporte a CEO."
                />

                <div className="w-px h-8 bg-surface"></div>
                
                {/* HORIZONTAL LINE (Desktop only) */}
                <div className="hidden lg:block w-full max-w-[950px] h-px bg-surface relative">
                  <div className="absolute left-0 top-0 w-px h-8 bg-surface"></div>
                  <div className="absolute left-1/3 top-0 w-px h-8 bg-surface -translate-x-1/2"></div>
                  <div className="absolute left-2/3 top-0 w-px h-8 bg-surface -translate-x-1/2"></div>
                  <div className="absolute right-0 top-0 w-px h-8 bg-surface"></div>
                </div>

                {/* THIRD LEVEL - 4 COLUMNS */}
                <div className="flex flex-col lg:flex-row justify-center w-full mt-0 lg:mt-8 gap-6 items-center lg:items-start relative">
                  
                  {/* Mobile connector line */}
                  <div className="absolute top-0 bottom-1/2 left-1/2 w-px bg-surface -translate-x-1/2 lg:hidden -z-10"></div>
                  
                  <OrgBox 
                    id="direccion-tecnologia"
                    title="Dirección de Tecnología y Presupuesto" 
                    name="Leandro Colque" 
                    link="/scrum#leandro-colque"
                    mision="Definir el stack tecnológico óptimo y administrar el presupuesto operativo/capital del área de Hardware, asegurando compatibilidad con la nube y decisiones de inversión estratégicas."
                    vision="Ser el referente en planificación tecnológica financiera, anticipando las necesidades futuras del ecosistema IA MediTech con eficiencia presupuestaria."
                    objetivo="Definir el stack de hardware, compatibilidad con la nube y gestión del presupuesto operativo/capital (OPEX/CAPEX)."
                    funciones="Coordinar con Software y Cloud la selección de hardware óptimo (servidores, edge computing, dispositivos IoT médicos); planificar compras estratégicas y evaluar factibilidad financiera."
                  />

                  <OrgBox 
                    id="gestion-infraestructura"
                    title="Gestión de Infraestructura Global" 
                    name="Einar Guillén" 
                    link="/scrum#einar-guillen"
                    mision="Administrar la adquisición, logística, almacenamiento y ciclo de vida de todo el equipamiento físico, garantizando su disponibilidad continua."
                    vision="Consolidar una infraestructura global resiliente y escalable que soporte el crecimiento del ecosistema de salud digital."
                    objetivo="Adquisición, logística, almacenamiento y ciclo de vida de todo el equipamiento físico."
                    funciones="Compras y control de inventario (proveedores, aduanas); mantenimiento preventivo y correctivo en sedes locales e internacionales."
                  />

                  <OrgBox 
                    id="aseguramiento-calidad"
                    title="Aseguramiento de Calidad y Recursos" 
                    name="Huascar Duran" 
                    link="/scrum#huascar-duran"
                    mision="Certificar el cumplimiento de estándares de salud, seguridad física de datos y normativas internacionales (ISO, CE, FDA) en todo el hardware desplegado."
                    vision="Ser garantes de la calidad y confiabilidad técnica que permite operar sin interrupciones los sistemas críticos de salud."
                    objetivo="Cumplimiento de estándares de salud, seguridad física de datos y eficiencia operativa."
                    funciones="Validación de calidad (normativas ISO, CE, FDA); monitoreo y proyecciones de consumo energético y capacidad."
                  />

                  <OrgBox 
                    id="operaciones-soporte"
                    title="Operaciones de Soporte y Entorno de Trabajo" 
                    name="Leonardo Ibarra" 
                    link="/scrum#leonardo-ibarra"
                    mision="Mantener la continuidad operativa diaria de los usuarios finales mediante mesa de ayuda, capacitación y administración de accesos."
                    vision="Ser el primer punto de contacto confiable que resuelve incidencias con rapidez y empodera a los usuarios con conocimiento técnico."
                    objetivo="Mantener la continuidad operativa diaria de los usuarios finales y administrar accesos."
                    funciones="Mesa de ayuda y capacitación (helpdesk); administración de identidades y espacios (Active Directory/Entra ID)."
                  />

                </div>

              </div>
            </section>
          </FadeIn>

          {/* 3. Matriz RACI de Responsabilidades */}
          <FadeIn delay={0.1}>
            <section className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1 block">
                    Gobernanza de Procesos
                  </span>
                  <h2 className="text-3xl md:text-5xl font-display text-surface">
                    3. Matriz RACI de Responsabilidades
                  </h2>
                  <p className="text-foreground-muted text-sm mt-1">
                    Delimitación exacta de roles en los flujos de trabajo críticos de infraestructura:
                  </p>
                </div>

                {/* Leyenda de la matriz RACI */}
                <div className="flex flex-wrap gap-2 text-[11px] font-mono font-bold bg-white p-2.5 rounded-lg border border-stone-200">
                  <span className="px-2 py-0.5 bg-red-100 text-red-800 rounded">R = Responsable</span>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded">A = Aprobador</span>
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded">C = Consultado</span>
                  <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded">I = Informado</span>
                </div>
              </div>

              {/* Tabla RACI */}
              <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-surface text-white text-xs uppercase tracking-wider font-display">
                      <th className="p-4 pl-6">Flujo de Trabajo / Tarea Clave</th>
                      <th className="p-4 text-center">Octavio (Líder)</th>
                      <th className="p-4 text-center">Leandro (Presupuesto)</th>
                      <th className="p-4 text-center">Einar (Logística)</th>
                      <th className="p-4 text-center">Huascar (Calidad)</th>
                      <th className="p-4 text-center">Leonardo (Soporte)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-xs">
                    {raciData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-amber-50/50 transition-colors">
                        <td className="p-4 pl-6 font-sans">
                          <strong className="block text-surface text-sm">{row.task}</strong>
                          <span className="text-foreground-muted text-xs">{row.desc}</span>
                        </td>
                        <td className="p-4 text-center font-mono font-bold">
                          <span className={`px-2 py-1 rounded inline-block text-[11px] ${
                            row.octavio.startsWith('R') ? 'bg-red-100 text-red-800' :
                            row.octavio.startsWith('A') ? 'bg-amber-100 text-amber-800' :
                            row.octavio.startsWith('C') ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'
                          }`}>
                            {row.octavio}
                          </span>
                        </td>
                        <td className="p-4 text-center font-mono font-bold">
                          <span className={`px-2 py-1 rounded inline-block text-[11px] ${
                            row.leandro.startsWith('R') ? 'bg-red-100 text-red-800' :
                            row.leandro.startsWith('A') ? 'bg-amber-100 text-amber-800' :
                            row.leandro.startsWith('C') ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'
                          }`}>
                            {row.leandro}
                          </span>
                        </td>
                        <td className="p-4 text-center font-mono font-bold">
                          <span className={`px-2 py-1 rounded inline-block text-[11px] ${
                            row.einar.startsWith('R') ? 'bg-red-100 text-red-800' :
                            row.einar.startsWith('A') ? 'bg-amber-100 text-amber-800' :
                            row.einar.startsWith('C') ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'
                          }`}>
                            {row.einar}
                          </span>
                        </td>
                        <td className="p-4 text-center font-mono font-bold">
                          <span className={`px-2 py-1 rounded inline-block text-[11px] ${
                            row.huascar.startsWith('R') ? 'bg-red-100 text-red-800' :
                            row.huascar.startsWith('A') ? 'bg-amber-100 text-amber-800' :
                            row.huascar.startsWith('C') ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'
                          }`}>
                            {row.huascar}
                          </span>
                        </td>
                        <td className="p-4 text-center font-mono font-bold">
                          <span className={`px-2 py-1 rounded inline-block text-[11px] ${
                            row.leonardo.startsWith('R') ? 'bg-red-100 text-red-800' :
                            row.leonardo.startsWith('A') ? 'bg-amber-100 text-amber-800' :
                            row.leonardo.startsWith('C') ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'
                          }`}>
                            {row.leonardo}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </FadeIn>

          {/* 4. Fichas Técnicas de Roles, Stack y KPIs */}
          <FadeIn delay={0.1}>
            <section className="space-y-6">
              <div className="border-b pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1 block">
                  Perfiles y Competencias
                </span>
                <h2 className="text-3xl md:text-5xl font-display text-surface">
                  4. Stack Tecnológico y Métricas por Rol
                </h2>
                <p className="text-foreground-muted text-sm mt-1">
                  Herramientas que domina y KPIs bajo los cuales se evalúa cada posición del organigrama:
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {roleSpecs.map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                          {item.badge}
                        </span>
                        <User size={18} className="text-stone-400" />
                      </div>

                      <h3 className="font-display font-bold text-2xl text-surface">
                        {item.name}
                      </h3>
                      <h4 className="text-xs font-bold text-foreground-muted mb-3">
                        {item.role}
                      </h4>
                      <p className="text-xs text-foreground-muted leading-relaxed mb-4">
                        {item.focus}
                      </p>

                      <div className="space-y-3 pt-3 border-t border-stone-100 text-xs">
                        <div>
                          <strong className="block text-surface mb-1 font-semibold flex items-center gap-1.5">
                            <Cpu size={14} className="text-primary" /> Stack & Herramientas:
                          </strong>
                          <div className="flex flex-wrap gap-1.5">
                            {item.tools.map((t, tIdx) => (
                              <span key={tIdx} className="bg-[#FAF7F2] px-2 py-0.5 rounded border border-stone-200 text-[10.5px] text-surface font-medium">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <strong className="block text-surface mb-1 font-semibold flex items-center gap-1.5">
                            <Activity size={14} className="text-emerald-600" /> KPIs de Impacto:
                          </strong>
                          <ul className="space-y-1 text-[11px] text-foreground-muted">
                            {item.kpis.map((k, kIdx) => (
                              <li key={kIdx} className="flex items-start gap-1.5">
                                <span className="text-primary font-bold">›</span>
                                <span>{k}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-stone-100">
                      <a 
                        href={item.link} 
                        className="inline-flex items-center justify-center w-full py-2 bg-surface hover:bg-primary text-white text-xs font-bold uppercase tracking-wider rounded transition-colors gap-1.5"
                      >
                        <span>Ver Perfil Scrum</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* 5. Acuerdos de Nivel de Servicio (SLA) y Tiempos de Respuesta */}
          <FadeIn delay={0.1}>
            <section className="bg-surface text-foreground-inverse p-8 md:p-12 rounded-2xl shadow-xl border-t-8 border-primary">
              <div className="max-w-3xl mb-8">
                <span className="text-primary font-bold tracking-widest uppercase text-xs block mb-1">
                  Nivel de Servicio Garantizado
                </span>
                <h2 className="text-3xl md:text-4xl font-display text-white mb-3">
                  5. Protocolos de Escalamiento y Acuerdos de Servicio (SLA)
                </h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Para que la estructura organizacional sea efectiva bajo estrés, definimos tiempos máximos de respuesta según la criticidad del incidente en el hospital:
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 border border-red-500/30 p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 bg-red-500/20 text-red-400 text-[10px] font-bold uppercase tracking-wider rounded border border-red-500/40">
                      Prioridad 1 • Crítica
                    </span>
                    <AlertTriangle size={18} className="text-red-400" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">Caída de Sistema / Quirófano</h3>
                  <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                    Afecta de forma inmediata a la atención del paciente o interrumpe la base de datos clínica principal.
                  </p>
                  <div className="pt-3 border-t border-white/10 text-xs space-y-1 font-mono">
                    <p className="text-primary font-bold">Tiempo de Respuesta: &lt; 15 min</p>
                    <p className="text-gray-300">Tiempo de Solución: &lt; 1 hora</p>
                    <p className="text-gray-400">Escala a: Octavio Luna / Einar Guillén</p>
                  </div>
                </div>

                <div className="bg-white/5 border border-amber-500/30 p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 bg-amber-500/20 text-amber-400 text-[10px] font-bold uppercase tracking-wider rounded border border-amber-500/40">
                      Prioridad 2 • Mayor
                    </span>
                    <Clock size={18} className="text-amber-400" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">Degradación de Rendimiento</h3>
                  <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                    Saturación de red o lentitud en inferencia de IA sin detención total del servicio hospitalario.
                  </p>
                  <div className="pt-3 border-t border-white/10 text-xs space-y-1 font-mono">
                    <p className="text-primary font-bold">Tiempo de Respuesta: &lt; 1 hora</p>
                    <p className="text-gray-300">Tiempo de Solución: &lt; 4 horas</p>
                    <p className="text-gray-400">Escala a: Leandro Colque / Huascar Duran</p>
                  </div>
                </div>

                <div className="bg-white/5 border border-blue-500/30 p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 bg-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded border border-blue-500/40">
                      Prioridad 3 • Menor
                    </span>
                    <CheckCircle2 size={18} className="text-blue-400" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">Solicitudes de Soporte & HW</h3>
                  <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                    Nuevos accesos, configuración de periféricos o dudas operativas de usuarios en estación de trabajo.
                  </p>
                  <div className="pt-3 border-t border-white/10 text-xs space-y-1 font-mono">
                    <p className="text-primary font-bold">Tiempo de Respuesta: &lt; 4 horas</p>
                    <p className="text-gray-300">Tiempo de Solución: &lt; 24 horas</p>
                    <p className="text-gray-400">Atiende: Leonardo Ibarra (Soporte)</p>
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

interface OrgBoxProps {
  id?: string;
  title: string;
  name: string;
  type?: 'external' | 'leader' | 'area';
  link?: string;
  mision?: string;
  vision?: string;
  objetivo?: string;
  funciones?: string;
}

function OrgBox({ id, title, name, type = 'area', link, mision, vision, objetivo, funciones }: OrgBoxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const isExternal = type === 'external';
  
  const handleTitleClick = () => {
    if (isExternal) return;
    setIsOpen(!isOpen);
  };

  const handleProfileClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (link) {
      navigate(link);
      setTimeout(() => {
         const hash = link.split('#')[1];
         if (hash) {
            document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
         }
      }, 100);
    }
  };

  return (
    <div id={id} className={`w-full max-w-[280px] lg:max-w-[230px] shrink-0 bg-white border-t-4 shadow-md transition-all duration-300 relative z-10 hover:-translate-y-1 hover:shadow-lg ${
        type === 'external' ? 'border-gray-500' : 
        type === 'leader' ? 'border-primary max-w-[320px] lg:max-w-[320px]' : 'border-surface'
    }`}>
      {/* Box Header - Clickable to open details */}
      <div 
        className={`p-4 ${!isExternal ? 'cursor-pointer hover:bg-gray-50' : ''} flex flex-col items-center text-center`}
        onClick={handleTitleClick}
      >
         <h3 className="text-xs font-bold uppercase tracking-wider text-surface mb-2 h-9 flex items-center justify-center leading-tight">
            {title}
         </h3>
         <div 
           className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
              link ? 'bg-background-dark hover:bg-primary hover:text-white cursor-pointer' : 'bg-gray-100 text-gray-600'
           }`}
           onClick={handleProfileClick}
         >
            <User size={14} />
            {name}
         </div>
         {!isExternal && (
            <div className="mt-3 text-gray-400 flex items-center justify-center w-full">
              {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
         )}
      </div>

      {/* Expandable Details */}
      {!isExternal && (
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] border-t border-gray-100 opacity-100' : 'max-h-0 opacity-0'}`}>
           <div className="p-4 bg-background-dark/30 space-y-4 text-left">
              
              {objetivo && (
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Objetivo</h4>
                  <p className="text-xs text-foreground-muted leading-relaxed">{objetivo}</p>
                </div>
              )}
              
              {funciones && (
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Funciones</h4>
                  <p className="text-xs text-foreground-muted leading-relaxed">{funciones}</p>
                </div>
              )}

              {mision && (
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Misión</h4>
                  <p className="text-xs text-surface font-medium leading-relaxed italic">"{mision}"</p>
                </div>
              )}

              {vision && (
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Visión</h4>
                  <p className="text-xs text-surface font-medium leading-relaxed italic">"{vision}"</p>
                </div>
              )}
              
              {link && (
                 <button 
                   onClick={handleProfileClick}
                   className="w-full mt-2 py-2 bg-surface text-white text-[10px] uppercase tracking-widest font-bold hover:bg-primary transition-colors cursor-pointer"
                 >
                    Ver Perfil Scrum
                 </button>
              )}
           </div>
        </div>
      )}
    </div>
  );
}

function AccordionItem({ icon, title, children }: any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:border-primary/40 transition-colors">
      <button 
        className="w-full flex items-center justify-between p-5 md:p-6 bg-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
           <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-background flex items-center justify-center text-primary shrink-0">
             {icon}
           </div>
           <h3 className="font-bold text-surface text-base md:text-lg text-left">{title}</h3>
        </div>
        <div className={`text-gray-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-primary' : ''}`}>
           <ChevronDown size={20} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 px-5 md:px-6 ${isOpen ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
         <div className="text-foreground-muted leading-relaxed md:pl-[64px]">
           {children}
         </div>
      </div>
    </div>
  );
}
