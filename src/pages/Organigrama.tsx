import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, User, Network, Layers, TrendingUp, ShieldCheck } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import FadeIn from '../components/FadeIn';

export default function Organigrama() {
  return (
    <AnimatedPage>
    <div className="w-full bg-background pb-20">
      {/* Page Header */}
      <header className="bg-surface text-foreground-inverse py-20 border-b-8 border-primary">
        <div className="container-wide text-center">
          <h1 className="text-5xl md:text-7xl font-display tracking-wide text-white">Organigrama — Hardware</h1>
        </div>
      </header>

      <div className="container-wide max-w-6xl mt-16 space-y-16">
        
        {/* Intro / Teoría */}
        <FadeIn>
          <section className="max-w-4xl mx-auto px-4 md:px-6">
            <h2 className="text-4xl md:text-5xl font-display mb-2 text-surface">Teoría</h2>
            <p className="text-foreground-muted mb-10 text-lg">Conceptos clave para entender cómo se organiza el área de Hardware e Infraestructura.</p>
            
            <div className="space-y-4 font-sans">
               <AccordionItem icon={<Network size={24} />} title="¿Qué es un organigrama de infraestructura?">
                 <p>Un organigrama es la representación gráfica de la estructura de nuestra área. Muestra las unidades que la componen (como Redes, Calidad, Soporte), sus niveles jerárquicos y las líneas de autoridad. En Hardware, nos permite saber exactamente quién es el responsable de cada nodo físico y quién autoriza los cambios críticos en los servidores y centros de datos.</p>
               </AccordionItem>
               <AccordionItem icon={<Layers size={24} />} title="Tipos de estructura organizacional">
                 <p>Mientras que la jerarquía vertical suele generar burocracia, <strong>las estructuras horizontales</strong> (como la nuestra en Tiradores) reducen los niveles intermedios de mando. Esto fomenta una comunicación directa entre el equipo técnico y la dirección, acelerando el despliegue de nueva infraestructura, la adopción de tecnologías y la respuesta ante incidentes.</p>
               </AccordionItem>
               <AccordionItem icon={<TrendingUp size={24} />} title="Niveles jerárquicos y agilidad">
                 <p>Dividimos nuestra estructura en tres niveles ágiles: <strong>Estratégico</strong> (CEO y Dirección, que definen el presupuesto CAPEX/OPEX y el stack tecnológico), <strong>Táctico</strong> (Líder de Hardware / Scrum Master, que elimina bloqueos diarios) y <strong>Operativo</strong> (los especialistas que ejecutan la gestión de calidad, el soporte a usuarios y la logística global).</p>
               </AccordionItem>
               <AccordionItem icon={<ShieldCheck size={24} />} title="Importancia de la estructura">
                 <p>Tener un organigrama claro es vital para la continuidad operativa. Evita silos de información, previene puntos únicos de falla humana y garantiza que, ante una contingencia o caída del sistema (downtime), exista una cadena de mando precisa para activar los protocolos de recuperación de desastres (DRP) sin perder tiempo crítico.</p>
               </AccordionItem>
            </div>
          </section>
        </FadeIn>

        {/* Diagram */}
        <FadeIn delay={0.2}>
        <section className="overflow-visible pb-8 pt-8">
           <h2 className="text-3xl font-display mb-12 text-center">Estructura del Equipo</h2>
           
           <div className="w-full flex flex-col items-center select-none font-sans relative">
              
              {/* TOP LEVEL */}
              <div className="text-center text-primary font-bold uppercase tracking-widest text-sm mb-4 max-w-[280px]">
                Área de Infraestructura de Hardware (IA MediTech)
              </div>
              <div className="w-px h-8 bg-surface"></div>

              <OrgBox 
                title="CEO" 
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
              <div className="hidden lg:block w-full max-w-[800px] h-px bg-surface relative">
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
      // Navigating and handling hash scroll is sometimes tricky with React Router, 
      // but standard approach is to let the router and browser handle it.
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
    <div id={id} className={`w-full max-w-[280px] lg:max-w-[220px] shrink-0 bg-white border-t-4 shadow-md transition-all duration-300 relative z-10 hover:-translate-y-1 hover:shadow-lg ${
        type === 'external' ? 'border-gray-500' : 
        type === 'leader' ? 'border-primary max-w-[300px] lg:max-w-[300px]' : 'border-surface'
    }`}>
      {/* Box Header - Clickable to open details */}
      <div 
        className={`p-4 ${!isExternal ? 'cursor-pointer hover:bg-gray-50' : ''} flex flex-col items-center text-center`}
        onClick={handleTitleClick}
      >
         <h3 className="text-xs font-bold uppercase tracking-wider text-surface mb-2 h-8 flex items-center justify-center leading-tight">
            {title}
         </h3>
         <div 
           className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${
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
                   className="w-full mt-2 py-2 bg-surface text-white text-[10px] uppercase tracking-widest font-bold hover:bg-primary transition-colors"
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
