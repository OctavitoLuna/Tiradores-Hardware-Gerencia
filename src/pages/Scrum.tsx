import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  ExternalLink, 
  CheckCircle2, 
  LayoutDashboard, 
  Clock, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Marker } from '../components/ui/Marker';
import { Button } from '../components/ui/Button';
import { VideoCard } from '../components/ui/VideoCard';
import { TeamAvatar } from '../components/svg/TeamAvatars';
import { SprintCycle } from '../components/svg/HardwareIcons';

export default function Scrum() {
  const navigate = useNavigate();

  const handleOrgNav = (hash: string) => {
    navigate('/organigrama');
    setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const values = ['Compromiso', 'Coraje', 'Foco', 'Apertura', 'Respeto'];

  const teamRoles = [
    {
      id: "octavio-luna",
      role: "Scrum Master / Líder de Hardware",
      name: "Octavio Luna Vargas",
      avatar: "octavio" as const,
      color: "terracota" as const,
      desc: "Estudiante de Ingeniería de Sistemas, Universidad Católica Boliviana 'San Pablo'. Encargado de liderar la facilitación del proceso, moderar ceremonias del sprint (Planning, Daily, Review, Retrospective), remover impedimentos operativos y coordinar las 4 áreas de hardware ante la dirección general.",
      orgHash: "lider-hardware"
    },
    {
      id: "leandro-colque",
      role: "Product Owner",
      name: "Leandro Colque",
      avatar: "leandro" as const,
      color: "blue" as const,
      desc: "Estudiante de Ingeniería de Sistemas, UCB. Responsable de definir la visión estratégica del proyecto de infraestructura, priorizar el backlog de hardware y asegurar que las inversiones y entregables cumplan los objetivos financieros y tecnológicos.",
      orgHash: "direccion-tecnologia"
    },
    {
      id: "einar-guillen",
      role: "Developer",
      name: "Einar Andrés Guillén Boero",
      avatar: "einar" as const,
      color: "lime" as const,
      desc: "Estudiante de Ingeniería de Sistemas. Especialista encargado de la adquisición logística de servidores, gestión del ciclo de vida de los componentes físicos, optimización de almacenamiento en centros de datos y diseño de arquitectura de red. Asegura que la capacidad de hardware escale de manera eficiente.",
      orgHash: "gestion-infraestructura"
    },
    {
      id: "huascar-duran",
      role: "Developer",
      name: "Huáscar Camilo Durán Avendaño",
      avatar: "huascar" as const,
      color: "teal" as const,
      desc: "Estudiante de Ingeniería de Sistemas. Responsable de garantizar el estricto cumplimiento de normativas internacionales de salud y seguridad. Realiza pruebas de estrés físico al equipamiento, audita la calidad de componentes y verifica la protección física de los datos médicos.",
      orgHash: "aseguramiento-calidad"
    },
    {
      id: "leonardo-ibarra",
      role: "Developer",
      name: "Leonardo Ibarra López",
      avatar: "leonardo" as const,
      color: "magenta" as const,
      desc: "Estudiante de Ingeniería de Sistemas. Especialista enfocado en la atención al usuario final y el entorno operativo diario. Administra la mesa de ayuda (Helpdesk), brinda capacitación técnica continua al personal médico y mantiene los niveles de servicio (SLA) resolviendo incidencias rápidamente.",
      orgHash: "operaciones-soporte"
    }
  ];

  const kanbanColumns = [
    {
      title: "Backlog",
      color: "bg-[#FAF5DC]",
      badgeColor: "yellow" as const,
      cards: [
        { title: "Cotización de nuevos transceivers 10Gbps SFP+", tag: "Leandro", bg: "bg-[#3B6BFF] text-white" },
        { title: "Evaluación de sensores ambientales para racks", tag: "Huascar", bg: "bg-[#00C2CB] text-[#0A0A0A]" }
      ]
    },
    {
      title: "To Do / Not Started",
      color: "bg-[#FFE500]/20",
      badgeColor: "yellow" as const,
      cards: [
        { title: "Parche de firmware crítico en switches Core", tag: "Einar", bg: "bg-[#B6F23A] text-[#0A0A0A]" },
        { title: "Auditoría de cableado estructurado en Quirófano 2", tag: "Octavio", bg: "bg-[#C1522A] text-white" }
      ]
    },
    {
      title: "In Progress",
      color: "bg-[#00C2CB]/20",
      badgeColor: "teal" as const,
      cards: [
        { title: "Despliegue de nodo Edge AI en servidor local", tag: "Einar & Leandro", bg: "bg-[#B6F23A] text-[#0A0A0A]" }
      ]
    },
    {
      title: "Review / Testing",
      color: "bg-[#FF3DCB]/20",
      badgeColor: "magenta" as const,
      cards: [
        { title: "Prueba de conmutación y failover de UPS redundante", tag: "Huascar", bg: "bg-[#00C2CB] text-[#0A0A0A]" }
      ]
    },
    {
      title: "Done / Complete",
      color: "bg-[#B6F23A]/20",
      badgeColor: "lime" as const,
      cards: [
        { title: "Inventario físico 100% conciliado en Vercel", tag: "Equipo", bg: "bg-white text-[#0A0A0A]" },
        { title: "Capacitación a mesa de ayuda clínica", tag: "Leonardo", bg: "bg-[#FF3DCB] text-white" }
      ]
    }
  ];

  return (
    <div className="w-full pb-28">
      {/* Header Hero */}
      <header className="bg-[#FFE500] bg-dots border-b-[4px] border-[#0A0A0A] py-16 md:py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <Badge color="black" className="mb-4">
              MARCO DE TRABAJO ÁGIL // IA MEDITECH
            </Badge>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-[#0A0A0A] uppercase leading-[0.9]">
              METODOLOGÍA <Marker color="terracota">SCRUM</Marker>
            </h1>
            <p className="text-lg md:text-xl text-[#0A0A0A]/90 font-sans max-w-2xl mt-4 font-medium">
              Gestión iterativa, roles transparentes y entregas continuas de infraestructura hospitalaria.
            </p>
          </div>
          <div className="w-full max-w-[280px] flex justify-center">
            <SprintCycle />
          </div>
        </div>
      </header>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 mt-16 space-y-24">
        
        {/* 1. ¿Qué es Scrum? */}
        <section>
          <Card color="white" className="p-8 md:p-12 mb-8 bg-dots">
            <Badge color="yellow" className="mb-4">SECCIÓN 01</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-6">
              1. ¿Qué es Scrum?
            </h2>
            <div className="text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed space-y-4 mb-8">
              <p>
                Scrum es un marco de trabajo ágil diseñado para entregar valor de manera incremental y responder con agilidad a los cambios que surjan durante el ciclo de vida del proyecto. Sus pilares fundamentales son la <strong>transparencia</strong>, la <strong>inspección</strong> y la <strong>adaptación</strong>. A diferencia de los modelos lineales tradicionales (como Waterfall/Cascada), Scrum organiza el trabajo en ciclos de tiempo fijo llamados <em>sprints</em>, evaluando resultados de forma continua en lugar de esperar hasta el final del proyecto.
              </p>
              <p>
                Scrum forma parte de un movimiento más amplio: el <strong>Manifiesto Ágil (2001)</strong>, que prioriza a las personas y la colaboración sobre los procesos rígidos, el software funcionando sobre la documentación exhaustiva, la colaboración con el cliente sobre la negociación de contratos, y la respuesta al cambio sobre seguir un plan fijo.
              </p>
            </div>

            {/* Los 5 Valores de Scrum en Pills Gigantes */}
            <div className="p-6 rounded-2xl border-[3px] border-[#0A0A0A] bg-[#FAF5DC]">
              <span className="font-display font-bold text-xs uppercase tracking-widest text-[#0A0A0A]/70 block mb-3">
                LOS 5 VALORES FUNDAMENTALES DE SCRUM:
              </span>
              <div className="flex flex-wrap gap-3">
                {values.map((v, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white rounded-full border-[2px] border-[#0A0A0A] font-display font-bold text-base md:text-lg uppercase text-[#C1522A] shadow-[2px_2px_0_#0A0A0A]"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-8">
            <VideoCard title="¿Qué es Scrum?" channel="EDteam" url="https://www.youtube.com/watch?v=sLexw-z13Fo" />
            <VideoCard title="Manifiesto Ágil explicado" channel="Sugerido" url="https://www.youtube.com/watch?v=dl0CMAiPKhA" />
            <VideoCard title="Scrum vs Kanban vs Waterfall" channel="Sugerido" url="https://www.youtube.com/watch?v=rIaz-l1Kf8w" />
          </div>
        </section>

        {/* 2. Introducción al equipo */}
        <section>
          <Card color="paper" className="p-8 md:p-12">
            <Badge color="teal" className="mb-4">SECCIÓN 02</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-6">
              2. Introducción al equipo
            </h2>
            <p className="text-lg md:text-xl text-[#0A0A0A]/90 font-sans leading-relaxed">
              En el equipo "Pisadores" (Hardware e Infraestructura), adoptamos el marco ágil SCRUM para gestionar y ejecutar nuestras actividades de manera eficiente, colaborativa y adaptativa. Este enfoque nos permite trabajar en iteraciones cortas (sprints), evaluar el progreso de forma continua e implementar mejoras inmediatas en cada ciclo, garantizando un desarrollo estructurado y entregables de alta calidad. La implementación de SCRUM ha fortalecido la comunicación interna, facilitado una clara distribución de responsabilidades y optimizado la visibilidad del flujo de trabajo a través de un tablero Kanban gestionado en Smartsheet.
            </p>
          </Card>
        </section>

        {/* 3. Estructura y Roles del Equipo (5 Tarjetas con Avatar y Enlace) */}
        <section>
          <div className="mb-8">
            <Badge color="magenta" className="mb-4">SECCIÓN 03 // INTEGRANTES UCB</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-4">
              3. Estructura y Roles del Equipo
            </h2>
          </div>

          <div className="space-y-6">
            {teamRoles.map((role) => (
              <div
                key={role.id}
                id={role.id}
                className="scroll-mt-32"
              >
                <Card color="white" className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-start md:items-center gap-5 flex-1">
                    <TeamAvatar member={role.avatar} size="lg" />
                    <div>
                      <Badge color="yellow" size="sm" className="mb-2">
                        {role.role}
                      </Badge>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-[#0A0A0A] uppercase mb-2">
                        {role.name}
                      </h3>
                      <p className="text-sm md:text-base text-[#0A0A0A]/80 font-sans leading-relaxed max-w-3xl">
                        {role.desc}
                      </p>
                    </div>
                  </div>

                  <Button
                    variant="secondary"
                    size="md"
                    className="self-start md:self-center shrink-0"
                    onClick={() => handleOrgNav(role.orgHash)}
                  >
                    <span>Ver en Organigrama</span>
                    <ArrowRight size={16} />
                  </Button>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Artefactos y 5. Ceremonias */}
        <section className="grid lg:grid-cols-2 gap-8">
          
          {/* Artefactos */}
          <Card color="yellow" className="p-8">
            <Badge color="black" className="mb-4">4. ARTEFACTOS DE SCRUM</Badge>
            <h2 className="text-3xl font-display font-bold uppercase mb-6 text-[#0A0A0A]">
              Entregables Tangibles
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-xl border-[2px] border-[#0A0A0A]">
                <strong className="font-display uppercase text-lg block text-[#C1522A] mb-1">Product Backlog:</strong>
                <p className="text-sm font-sans text-[#0A0A0A]/85">Inventario centralizado y priorizado de todos los requisitos, funcionalidades y mejoras del proyecto, administrado por el Product Owner.</p>
              </div>
              <div className="p-4 bg-white rounded-xl border-[2px] border-[#0A0A0A]">
                <strong className="font-display uppercase text-lg block text-[#C1522A] mb-1">Sprint Backlog:</strong>
                <p className="text-sm font-sans text-[#0A0A0A]/85">Subconjunto de tareas extraídas del Product Backlog que el equipo se compromete a completar durante el sprint vigente (Sprint Goal).</p>
              </div>
              <div className="p-4 bg-white rounded-xl border-[2px] border-[#0A0A0A]">
                <strong className="font-display uppercase text-lg block text-[#C1522A] mb-1">Incremento:</strong>
                <p className="text-sm font-sans text-[#0A0A0A]/85">Resultado tangible, funcional y verificable obtenido al cierre del sprint, que cumple con la Definition of Done.</p>
              </div>
            </div>
          </Card>

          {/* Ceremonias */}
          <Card color="teal" className="p-8">
            <Badge color="black" className="mb-4">5. CEREMONIAS DE SCRUM</Badge>
            <h2 className="text-3xl font-display font-bold uppercase mb-6 text-[#0A0A0A]">
              Ritmos de Sincronización
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-xl border-[2px] border-[#0A0A0A]">
                <strong className="font-display uppercase text-lg block text-[#0A0A0A] mb-1">Sprint Planning:</strong>
                <p className="text-sm font-sans text-[#0A0A0A]/85">Sesión inicial donde se seleccionan tareas prioritarias, se estiman esfuerzos y se asignan responsabilidades.</p>
              </div>
              <div className="p-4 bg-white rounded-xl border-[2px] border-[#0A0A0A]">
                <strong className="font-display uppercase text-lg block text-[#0A0A0A] mb-1">Daily Scrum:</strong>
                <p className="text-sm font-sans text-[#0A0A0A]/85">Espacio breve diario para exponer avances, plan del día y bloqueos.</p>
              </div>
              <div className="p-4 bg-white rounded-xl border-[2px] border-[#0A0A0A]">
                <strong className="font-display uppercase text-lg block text-[#0A0A0A] mb-1">Sprint Review:</strong>
                <p className="text-sm font-sans text-[#0A0A0A]/85">Presentación formal del incremento al Product Owner para recibir retroalimentación.</p>
              </div>
              <div className="p-4 bg-white rounded-xl border-[2px] border-[#0A0A0A]">
                <strong className="font-display uppercase text-lg block text-[#0A0A0A] mb-1">Sprint Retrospective:</strong>
                <p className="text-sm font-sans text-[#0A0A0A]/85">Espacio de introspección para identificar aciertos y acciones de mejora.</p>
              </div>
            </div>
          </Card>

        </section>

        {/* 6. TABLERO KANBAN VISUAL DE 5 COLUMNAS */}
        <section>
          <div className="mb-8">
            <Badge color="lime" className="mb-4">6. GESTIÓN VISUAL EN SMARTSHEET</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-4">
              Tablero Kanban del Sprint
            </h2>
            <p className="text-base sm:text-lg text-[#0A0A0A]/85 font-sans">
              Columnas: Backlog → To Do / Not Started → In Progress → Review / Testing → Done / Complete.
              Anatomía de cada tarjeta: nombre descriptivo, responsable, fechas, estimación, criterios de aceptación y enlaces de seguimiento.
            </p>
          </div>

          <div className="overflow-x-auto pb-4">
            <div className="grid grid-cols-5 gap-4 min-w-[1000px]">
              {kanbanColumns.map((col, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border-[3px] border-[#0A0A0A] ${col.color} shadow-brutal flex flex-col`}
                >
                  <div className="flex items-center justify-between pb-3 mb-3 border-b-[2px] border-[#0A0A0A]">
                    <h4 className="font-display font-bold text-sm uppercase text-[#0A0A0A]">
                      {col.title}
                    </h4>
                    <span className="w-6 h-6 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center text-xs font-mono font-bold">
                      {col.cards.length}
                    </span>
                  </div>

                  <div className="space-y-3 flex-1">
                    {col.cards.map((c, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-3.5 rounded-xl border-[2px] border-[#0A0A0A] bg-white shadow-brutal-sm hover:scale-102 transition-transform"
                      >
                        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-display font-bold uppercase mb-2 ${c.bg}`}>
                          {c.tag}
                        </span>
                        <p className="text-xs font-sans font-medium text-[#0A0A0A] leading-snug">
                          {c.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Misión y Visión por Área */}
        <section className="bg-white p-8 md:p-12 rounded-2xl border-[3px] border-[#0A0A0A] shadow-brutal bg-dots">
          <div className="text-center mb-12">
            <Badge color="terracota" className="mb-3">ALINEACIÓN DE ÁREAS</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase text-[#0A0A0A]">
              Misión y Visión por Área
            </h2>
          </div>

          <div className="space-y-8 divide-y-[3px] divide-[#0A0A0A]/20">
            
            <div className="pt-6 first:pt-0 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-4">
                <Badge color="terracota" size="sm" className="mb-2">NIVEL SUPERIOR</Badge>
                <h3 className="font-display font-bold text-2xl uppercase text-[#0A0A0A]">
                  Líder de Hardware e Infraestructura
                </h3>
                <p className="font-display font-bold text-sm text-[#C1522A]">Octavio Luna</p>
              </div>
              <div className="md:col-span-8 space-y-4 font-sans text-sm md:text-base">
                <div className="p-4 bg-[#FAF5DC] rounded-xl border-[2px] border-[#0A0A0A]">
                  <strong className="font-display font-bold uppercase text-xs block text-[#C1522A] mb-1">Misión:</strong>
                  <p className="italic">"Coordinar de forma transversal las 4 áreas de hardware, articulando la estrategia técnica con la dirección general de Tiradores."</p>
                </div>
                <div className="p-4 bg-[#FAF5DC] rounded-xl border-[2px] border-[#0A0A0A]">
                  <strong className="font-display font-bold uppercase text-xs block text-[#C1522A] mb-1">Visión:</strong>
                  <p className="italic">"Consolidar un área de hardware autogestionada, ágil y alineada, referente interno de trabajo en equipo bajo metodología Scrum."</p>
                </div>
              </div>
            </div>

            <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-4">
                <Badge color="blue" size="sm" className="mb-2">FINANZAS & NUBE</Badge>
                <h3 className="font-display font-bold text-2xl uppercase text-[#0A0A0A]">
                  Dirección de Tecnología y Presupuesto
                </h3>
                <p className="font-display font-bold text-sm text-[#3B6BFF]">Leandro Colque</p>
              </div>
              <div className="md:col-span-8 space-y-4 font-sans text-sm md:text-base">
                <div className="p-4 bg-[#FAF5DC] rounded-xl border-[2px] border-[#0A0A0A]">
                  <strong className="font-display font-bold uppercase text-xs block text-[#3B6BFF] mb-1">Misión:</strong>
                  <p className="italic">"Definir el stack tecnológico óptimo y administrar el presupuesto operativo/capital del área de Hardware, asegurando compatibilidad con la nube y decisiones de inversión estratégicas."</p>
                </div>
                <div className="p-4 bg-[#FAF5DC] rounded-xl border-[2px] border-[#0A0A0A]">
                  <strong className="font-display font-bold uppercase text-xs block text-[#3B6BFF] mb-1">Visión:</strong>
                  <p className="italic">"Ser el referente en planificación tecnológica financiera, anticipando las necesidades futuras del ecosistema IA MediTech con eficiencia presupuestaria."</p>
                </div>
              </div>
            </div>

            <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-4">
                <Badge color="lime" size="sm" className="mb-2">LOGÍSTICA & FÍSICO</Badge>
                <h3 className="font-display font-bold text-2xl uppercase text-[#0A0A0A]">
                  Gestión de Infraestructura Global
                </h3>
                <p className="font-display font-bold text-sm text-[#0A0A0A]">Einar Guillén</p>
              </div>
              <div className="md:col-span-8 space-y-4 font-sans text-sm md:text-base">
                <div className="p-4 bg-[#FAF5DC] rounded-xl border-[2px] border-[#0A0A0A]">
                  <strong className="font-display font-bold uppercase text-xs block text-[#0A0A0A] mb-1">Misión:</strong>
                  <p className="italic">"Administrar la adquisición, logística, almacenamiento y ciclo de vida de todo el equipamiento físico, garantizando su disponibilidad continua."</p>
                </div>
                <div className="p-4 bg-[#FAF5DC] rounded-xl border-[2px] border-[#0A0A0A]">
                  <strong className="font-display font-bold uppercase text-xs block text-[#0A0A0A] mb-1">Visión:</strong>
                  <p className="italic">"Consolidar una infraestructura global resiliente y escalable que soporte el crecimiento del ecosistema de salud digital."</p>
                </div>
              </div>
            </div>

            <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-4">
                <Badge color="teal" size="sm" className="mb-2">CALIDAD & NORMATIVAS</Badge>
                <h3 className="font-display font-bold text-2xl uppercase text-[#0A0A0A]">
                  Aseguramiento de Calidad y Recursos
                </h3>
                <p className="font-display font-bold text-sm text-[#00C2CB]">Huascar Duran</p>
              </div>
              <div className="md:col-span-8 space-y-4 font-sans text-sm md:text-base">
                <div className="p-4 bg-[#FAF5DC] rounded-xl border-[2px] border-[#0A0A0A]">
                  <strong className="font-display font-bold uppercase text-xs block text-[#00C2CB] mb-1">Misión:</strong>
                  <p className="italic">"Certificar el cumplimiento de estándares de salud, seguridad física de datos y normativas internacionales (ISO, CE, FDA) en todo el hardware desplegado."</p>
                </div>
                <div className="p-4 bg-[#FAF5DC] rounded-xl border-[2px] border-[#0A0A0A]">
                  <strong className="font-display font-bold uppercase text-xs block text-[#00C2CB] mb-1">Visión:</strong>
                  <p className="italic">"Ser garantes de la calidad y confiabilidad técnica que permite operar sin interrupciones los sistemas críticos de salud."</p>
                </div>
              </div>
            </div>

            <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-4">
                <Badge color="magenta" size="sm" className="mb-2">SOPORTE & ACCESOS</Badge>
                <h3 className="font-display font-bold text-2xl uppercase text-[#0A0A0A]">
                  Operaciones de Soporte y Entorno de Trabajo
                </h3>
                <p className="font-display font-bold text-sm text-[#FF3DCB]">Leonardo Ibarra</p>
              </div>
              <div className="md:col-span-8 space-y-4 font-sans text-sm md:text-base">
                <div className="p-4 bg-[#FAF5DC] rounded-xl border-[2px] border-[#0A0A0A]">
                  <strong className="font-display font-bold uppercase text-xs block text-[#FF3DCB] mb-1">Misión:</strong>
                  <p className="italic">"Mantener la continuidad operativa diaria de los usuarios finales mediante mesa de ayuda, capacitación y administración de accesos."</p>
                </div>
                <div className="p-4 bg-[#FAF5DC] rounded-xl border-[2px] border-[#0A0A0A]">
                  <strong className="font-display font-bold uppercase text-xs block text-[#FF3DCB] mb-1">Visión:</strong>
                  <p className="italic">"Ser el primer punto de contacto confiable que resuelve incidencias con rapidez y empodera a los usuarios con conocimiento técnico."</p>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
