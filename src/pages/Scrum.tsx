import React from 'react';
import { useNavigate } from 'react-router-dom';
import VideoEmbed from '../components/VideoEmbed';
import { LayoutDashboard } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import FadeIn from '../components/FadeIn';

export default function Scrum() {
  const navigate = useNavigate();

  const handleOrgNav = (hash: string) => {
    navigate('/organigrama');
    setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <AnimatedPage>
    <div className="w-full bg-background pb-20">
      {/* Page Header */}
      <header className="bg-surface text-foreground-inverse py-20 border-b-8 border-primary">
        <div className="container-wide text-center">
          <h1 className="text-5xl md:text-7xl font-display tracking-wide text-white mb-4">Metodología SCRUM</h1>
          <p className="text-xl font-display tracking-widest text-primary uppercase">Trabajo Ágil en IA MediTech</p>
        </div>
      </header>

      <div className="container-wide max-w-6xl mt-16 space-y-24">
        
        {/* Intro */}
        <FadeIn>
        <section>
          <h2 className="text-3xl md:text-4xl font-display mb-6 border-l-4 border-primary pl-4">1. ¿Qué es Scrum?</h2>
          <div className="text-lg text-foreground-muted leading-relaxed space-y-4 mb-8">
            <p>
              Scrum es un marco de trabajo ágil diseñado para entregar valor de manera incremental y responder con agilidad a los cambios que surjan durante el ciclo de vida del proyecto. Sus pilares fundamentales son la <strong>transparencia</strong>, la <strong>inspección</strong> y la <strong>adaptación</strong>. A diferencia de los modelos lineales tradicionales (como Waterfall/Cascada), Scrum organiza el trabajo en ciclos de tiempo fijo llamados <em>sprints</em>, evaluando resultados de forma continua en lugar de esperar hasta el final del proyecto.
            </p>
            <p>
              Scrum forma parte de un movimiento más amplio: el <strong>Manifiesto Ágil (2001)</strong>, que prioriza a las personas y la colaboración sobre los procesos rígidos, el software funcionando sobre la documentación exhaustiva, la colaboración con el cliente sobre la negociación de contratos, y la respuesta al cambio sobre seguir un plan fijo.
            </p>
            <div className="bg-white p-6 border-l-4 border-surface shadow-sm">
               <h4 className="font-bold text-surface mb-2 uppercase tracking-widest text-sm">Los 5 valores de Scrum:</h4>
               <div className="flex flex-wrap gap-4 font-display text-xl text-primary">
                 <span>Compromiso</span> • <span>Coraje</span> • <span>Foco</span> • <span>Apertura</span> • <span>Respeto</span>
               </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <VideoEmbed title="¿Qué es Scrum?" channel="EDteam" url="https://www.youtube.com/watch?v=sLexw-z13Fo" />
            <VideoEmbed title="Manifiesto Ágil explicado" channel="Sugerido" url="https://www.youtube.com/watch?v=dl0CMAiPKhA" />
            <VideoEmbed title="Scrum vs Kanban vs Waterfall" channel="Sugerido" url="https://www.youtube.com/watch?v=rIaz-l1Kf8w" />
          </div>
        </section>
        </FadeIn>

        {/* Intro Equipo */}
        <FadeIn delay={0.1}>
        <section className="bg-background-dark p-8 md:p-12 border-t-4 border-primary">
          <h2 className="text-3xl md:text-4xl font-display mb-6">2. Introducción al equipo</h2>
          <p className="text-lg text-foreground-muted leading-relaxed">
            En el equipo "Pisadores" (Hardware e Infraestructura), adoptamos el marco ágil SCRUM para gestionar y ejecutar nuestras actividades de manera eficiente, colaborativa y adaptativa. Este enfoque nos permite trabajar en iteraciones cortas (sprints), evaluar el progreso de forma continua e implementar mejoras inmediatas en cada ciclo, garantizando un desarrollo estructurado y entregables de alta calidad. La implementación de SCRUM ha fortalecido la comunicación interna, facilitado una clara distribución de responsabilidades y optimizado la visibilidad del flujo de trabajo a través de un tablero Kanban gestionado en Smartsheet.
          </p>
        </section>
        </FadeIn>

        {/* Roles del equipo */}
        <FadeIn delay={0.1}>
        <section>
          <h2 className="text-3xl md:text-4xl font-display mb-10 border-l-4 border-primary pl-4">3. Estructura y Roles del Equipo</h2>
          
           <div className="space-y-6">
             <ScrumRoleCard 
               id="octavio-luna"
               role="Scrum Master / Líder de Hardware"
               name="Octavio Luna Vargas"
               desc="Estudiante de Ingeniería de Sistemas, Universidad Católica Boliviana 'San Pablo'. Encargado de liderar la facilitación del proceso, moderar ceremonias del sprint (Planning, Daily, Review, Retrospective), remover impedimentos operativos y coordinar las 4 áreas de hardware ante la dirección general."
               orgHash="lider-hardware"
               onNav={handleOrgNav}
             />
             <ScrumRoleCard 
               id="leandro-colque"
               role="Product Owner"
               name="Leandro Colque"
               desc="Estudiante de Ingeniería de Sistemas, UCB. Responsable de definir la visión estratégica del proyecto de infraestructura, priorizar el backlog de hardware y asegurar que las inversiones y entregables cumplan los objetivos financieros y tecnológicos."
               orgHash="direccion-tecnologia"
               onNav={handleOrgNav}
             />
             <ScrumRoleCard 
               id="einar-guillen"
               role="Developer"
               name="Einar Andrés Guillén Boero"
               desc="Estudiante de Ingeniería de Sistemas. Especialista encargado de la adquisición logística de servidores, gestión del ciclo de vida de los componentes físicos, optimización de almacenamiento en centros de datos y diseño de arquitectura de red. Asegura que la capacidad de hardware escale de manera eficiente."
               orgHash="gestion-infraestructura"
               onNav={handleOrgNav}
             />
             <ScrumRoleCard 
               id="huascar-duran"
               role="Developer"
               name="Huáscar Camilo Durán Avendaño"
               desc="Estudiante de Ingeniería de Sistemas. Responsable de garantizar el estricto cumplimiento de normativas internacionales de salud y seguridad. Realiza pruebas de estrés físico al equipamiento, audita la calidad de componentes y verifica la protección física de los datos médicos."
               orgHash="aseguramiento-calidad"
               onNav={handleOrgNav}
             />
             <ScrumRoleCard 
               id="leonardo-ibarra"
               role="Developer"
               name="Leonardo Ibarra López"
               desc="Estudiante de Ingeniería de Sistemas. Especialista enfocado en la atención al usuario final y el entorno operativo diario. Administra la mesa de ayuda (Helpdesk), brinda capacitación técnica continua al personal médico y mantiene los niveles de servicio (SLA) resolviendo incidencias rápidamente."
               orgHash="operaciones-soporte"
               onNav={handleOrgNav}
             />
          </div>
        </section>
        </FadeIn>

        {/* Artefactos, Eventos y Tablero */}
        <FadeIn delay={0.1}>
        <section className="grid lg:grid-cols-3 gap-8">
           
           <div>
             <h2 className="text-2xl font-display mb-6 text-primary">4. Artefactos</h2>
             <ul className="space-y-4 text-sm text-foreground-muted">
               <li><strong className="text-surface block mb-1">Product Backlog:</strong> Inventario centralizado y priorizado de todos los requisitos, funcionalidades y mejoras del proyecto, administrado por el Product Owner.</li>
               <li><strong className="text-surface block mb-1">Sprint Backlog:</strong> Subconjunto de tareas extraídas del Product Backlog que el equipo se compromete a completar durante el sprint vigente (Sprint Goal).</li>
               <li><strong className="text-surface block mb-1">Incremento:</strong> Resultado tangible, funcional y verificable obtenido al cierre del sprint, que cumple con la Definition of Done.</li>
             </ul>
           </div>

           <div>
             <h2 className="text-2xl font-display mb-6 text-primary">5. Ceremonias</h2>
             <ul className="space-y-4 text-sm text-foreground-muted">
               <li><strong className="text-surface block mb-1">Sprint Planning:</strong> Sesión inicial donde se seleccionan tareas prioritarias, se estiman esfuerzos y se asignan responsabilidades.</li>
               <li><strong className="text-surface block mb-1">Daily Scrum:</strong> Espacio breve diario para exponer avances, plan del día y bloqueos.</li>
               <li><strong className="text-surface block mb-1">Sprint Review:</strong> Presentación formal del incremento al Product Owner para recibir retroalimentación.</li>
               <li><strong className="text-surface block mb-1">Sprint Retrospective:</strong> Espacio de introspección para identificar aciertos y acciones de mejora.</li>
             </ul>
           </div>

           <div className="bg-surface text-foreground-inverse p-6 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
               <LayoutDashboard size={100} />
             </div>
             <h2 className="text-2xl font-display mb-4 relative z-10">6. Kanban</h2>
             <p className="text-sm text-gray-400 mb-4 relative z-10">
               Columnas: Backlog → To Do / Not Started → In Progress → Review / Testing → Done / Complete.
             </p>
             <p className="text-sm text-gray-400 relative z-10">
               Anatomía de cada tarjeta: nombre descriptivo, responsable, fechas, estimación, criterios de aceptación y enlaces de seguimiento.
             </p>
           </div>

        </section>
        </FadeIn>

        {/* Misión y Visión por Área */}
        <FadeIn delay={0.1}>
        <section className="bg-[#FAF8F5] p-8 md:p-12 shadow-sm border-t-8 border-surface">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-display uppercase tracking-wide font-bold mb-4 text-surface">Misión y Visión por Área</h2>
           </div>

           <div className="space-y-0">
             <AreaMVBlock 
               area="Líder de Hardware e Infraestructura"
               person="Octavio Luna (Nivel Superior)"
               mision="Coordinar de forma transversal las 4 áreas de hardware, articulando la estrategia técnica con la dirección general de Tiradores."
               vision="Consolidar un área de hardware autogestionada, ágil y alineada, referente interno de trabajo en equipo bajo metodología Scrum."
             />

             <AreaMVBlock 
               area="Dirección de Tecnología y Presupuesto"
               person="Leandro Colque"
               mision="Definir el stack tecnológico óptimo y administrar el presupuesto operativo/capital del área de Hardware, asegurando compatibilidad con la nube y decisiones de inversión estratégicas."
               vision="Ser el referente en planificación tecnológica financiera, anticipando las necesidades futuras del ecosistema IA MediTech con eficiencia presupuestaria."
             />

             <AreaMVBlock 
               area="Gestión de Infraestructura Global"
               person="Einar Guillén"
               mision="Administrar la adquisición, logística, almacenamiento y ciclo de vida de todo el equipamiento físico, garantizando su disponibilidad continua."
               vision="Consolidar una infraestructura global resiliente y escalable que soporte el crecimiento del ecosistema de salud digital."
             />

             <AreaMVBlock 
               area="Aseguramiento de Calidad y Recursos"
               person="Huascar Duran"
               mision="Certificar el cumplimiento de estándares de salud, seguridad física de datos y normativas internacionales (ISO, CE, FDA) en todo el hardware desplegado."
               vision="Ser garantes de la calidad y confiabilidad técnica que permite operar sin interrupciones los sistemas críticos de salud."
             />

             <AreaMVBlock 
               area="Operaciones de Soporte y Entorno de Trabajo"
               person="Leonardo Ibarra"
               mision="Mantener la continuidad operativa diaria de los usuarios finales mediante mesa de ayuda, capacitación y administración de accesos."
               vision="Ser el primer punto de contacto confiable que resuelve incidencias con rapidez y empodera a los usuarios con conocimiento técnico."
             />

           </div>
        </section>
        </FadeIn>

      </div>
    </div>
    </AnimatedPage>
  );
}

function ScrumRoleCard({ id, role, name, desc, orgHash, onNav }: any) {
  return (
    <div id={id} className="bg-white border-l-4 border-primary p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 scroll-mt-24 hover:shadow-md transition-shadow">
       <div className="flex-1">
          <div className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">{role}</div>
          <h3 className="text-2xl font-display text-surface mb-2">{name}</h3>
          <p className="text-foreground-muted text-sm">{desc}</p>
       </div>
       <button 
         onClick={() => onNav(orgHash)}
         className="btn-secondary whitespace-nowrap text-xs px-4 py-2 self-start md:self-auto"
       >
         Ver en Organigrama
       </button>
    </div>
  );
}

function AreaMVBlock({ area, person, mision, vision }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-10 border-b border-gray-200 last:border-0 items-start">
      <div className="md:col-span-4">
        <h3 className="text-lg md:text-xl font-display font-bold uppercase text-surface mb-2">{area}</h3>
        <p className="text-primary font-medium">{person}</p>
      </div>
      <div className="md:col-span-8 space-y-8">
        <div>
           <span className="inline-block bg-[#E5DCD3] text-surface/90 text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-widest mb-3">Misión</span>
           <p className="text-foreground-muted italic leading-relaxed text-[15px]">{mision}</p>
        </div>
        <div>
           <span className="inline-block bg-[#E5DCD3] text-surface/90 text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-widest mb-3">Visión</span>
           <p className="text-foreground-muted italic leading-relaxed text-[15px]">{vision}</p>
        </div>
      </div>
    </div>
  );
}
