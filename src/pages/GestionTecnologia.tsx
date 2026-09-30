import React from 'react';
import VideoEmbed from '../components/VideoEmbed';
import AnimatedPage from '../components/AnimatedPage';

export default function GestionTecnologia() {
  return (
    <AnimatedPage>
    <div className="w-full bg-background pb-20">
      {/* Page Header */}
      <header className="bg-surface text-foreground-inverse py-20 border-b-8 border-primary">
        <div className="container-wide text-center">
          <h1 className="text-5xl md:text-7xl font-display tracking-wide text-white">Gestión de Tecnología</h1>
        </div>
      </header>

      <div className="container-wide max-w-4xl mt-16 space-y-24">
        
        {/* Section 1 */}
        <section>
          <h2 className="text-3xl md:text-4xl font-display mb-6 border-l-4 border-primary pl-4">1. Gestión y Dirección Tecnológica</h2>
          <p className="text-lg text-foreground-muted mb-8">
            Consiste en conectar las metas del negocio con las herramientas digitales adecuadas. A través de una planificación rigurosa y la correcta asignación de recursos, se busca maximizar el valor de cada inversión y reducir posibles riesgos operativos.
          </p>
          <VideoEmbed 
            title="Gestión tecnológica en las organizaciones"
            channel="Udearroba"
            url="https://www.youtube.com/watch?v=hYJ_YBo_djg"
          />
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-3xl md:text-4xl font-display mb-6 border-l-4 border-primary pl-4">2. Estrategia y Hoja de Ruta Digital</h2>
          <p className="text-lg text-foreground-muted mb-6">
            Antes de comprar servidores o escribir código, se necesita un plan claro. Una buena estrategia define hacia dónde va la organización y cómo la tecnología la llevará allí:
          </p>
          <ul className="space-y-4 mb-8">
            <ListItem title="Alineación con el Negocio" desc="definimos prioridades técnicas que responden directamente a lo que la empresa quiere lograr." />
            <ListItem title="Metas e Indicadores Claves" desc="establecemos objetivos medibles para saber exactamente qué resultado esperar de cada proyecto." />
            <ListItem title="Adopción de Innovación" desc="evaluamos de forma continua tecnologías emergentes (IA, automatización) para integrarlas en el momento oportuno." />
            <ListItem title="Roadmap por horizontes" desc="Corto plazo (0-6 meses: estabilización y mantenimiento preventivo), Mediano plazo (6-18 meses: migración a arquitectura híbrida), Largo plazo (18+ meses: automatización total del monitoreo con IA)." isNew />
            <ListItem title="Gestión de riesgos tecnológicos" desc="identificación de puntos únicos de falla, planes de contingencia (DRP), matrices de riesgo por criticidad." isNew />
            <ListItem title="Cumplimiento normativo" desc="alineación con estándares de salud digital y protección de datos." isNew />
          </ul>
          <div className="grid md:grid-cols-2 gap-8">
            <VideoEmbed 
              title="7. Transformación Digital. Hoja de Ruta..."
              channel="Antonio Serrano Acitores"
              url="https://www.youtube.com/watch?v=v6w6_ZjT0KY"
            />
            <VideoEmbed 
              title="Qué es un roadmap tecnológico y cómo construirlo"
              channel="Sugerido"
              url="https://www.youtube.com/watch?v=2QVFwOXDP0Y"
            />
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-3xl md:text-4xl font-display mb-6 border-l-4 border-primary pl-4">3. Los Cuatro Pilares de la Infraestructura y Sistemas</h2>
          <p className="text-lg text-foreground-muted mb-6">
            Un plan estratégico solo funciona si la plataforma técnica que lo sostiene es sólida y confiable:
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <PillarCard 
              num="01" 
              title="Infraestructura y Redes" 
              desc="Diseñamos y mantenemos hardware, centros de datos y redes robustas, garantizando alta disponibilidad, seguridad estricta y consumo energético eficiente." 
            />
            <PillarCard 
              num="02" 
              title="Desarrollo y Gestión de Aplicaciones" 
              desc="Creamos, actualizamos e integrando software adaptado a los procesos, asegurando que los sistemas hablen entre sí sin fricción." 
            />
            <PillarCard 
              num="03" 
              title="Gobernanza y Analítica de Datos" 
              desc="Recolectamos, analizamos y protegemos los datos cumpliendo rigurosamente las normativas de privacidad." 
            />
            <PillarCard 
              num="04" 
              title="Seguridad y Continuidad Operativa" 
              desc="Ciberseguridad física, respaldo (backups) redundante, planes de recuperación ante desastres (DRP) y protocolos de continuidad del negocio (BCP)." 
              isNew
            />
          </div>
        </section>

        {/* Section 4 */}
        <section className="bg-background-dark p-8 md:p-12 border-t-4 border-primary">
          <h2 className="text-3xl md:text-4xl font-display mb-6">4. ¿Qué es Infraestructura TI?</h2>
          <p className="text-lg text-foreground-muted mb-6 font-medium">
            "La infraestructura TI es el conjunto de componentes físicos y lógicos —hardware, software, redes, centros de datos y personas— que permiten operar, almacenar y proteger la información de una organización."
          </p>
          <ul className="space-y-4 mb-8">
            <ListItem title="Componentes" desc="hardware (servidores, dispositivos IoT médicos, redes), software de gestión, sistemas de almacenamiento, personal técnico." />
            <ListItem title="Modelos de despliegue" desc="on-premise (control total, mayor costo), en la nube (escalabilidad, menor CAPEX), híbrido (balance entre control y flexibilidad — el modelo elegido por el equipo para IA MediTech)." />
            <ListItem title="Importancia en salud digital" desc="la infraestructura debe garantizar cero interrupciones porque de ella depende información clínica crítica." />
          </ul>
          <div className="grid md:grid-cols-2 gap-8">
            <VideoEmbed 
              title="¿Qué es Infraestructura TI?"
              channel="INFRA FACIL"
              url="https://www.youtube.com/watch?v=lgF3Kc-QCMQ"
            />
            <VideoEmbed 
              title="Infraestructura híbrida on-premise vs. cloud explicada"
              channel="Sugerido"
              url="https://www.youtube.com/watch?v=fOTuX-lmf24"
            />
          </div>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-3xl md:text-4xl font-display mb-6 border-l-4 border-primary pl-4">5. El Factor Humano: La Clave del Éxito</h2>
          <p className="text-lg text-foreground-muted mb-6">
            La mejor tecnología no sirve de nada sin las personas correctas para operarla y hacerla evolucionar:
          </p>
          <ul className="space-y-4 mb-8">
            <ListItem title="Capacitación Continua" desc="mantenemos al equipo actualizado en las últimas herramientas y lenguajes del mercado." />
            <ListItem title="Atracción de Talento" desc="incorporamos y retenemos a los mejores especialistas para áreas clave del desarrollo." />
            <ListItem title="Cultura de Innovación" desc="promovemos un ambiente creativo y colaborativo donde se prueban nuevas ideas de forma constante." />
            <ListItem title="Liderazgo y bienestar del equipo" desc="fomentamos comunicación abierta, balance de carga de trabajo y reconocimiento del esfuerzo técnico." isNew />
          </ul>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <VideoEmbed title="El factor humano es la clave del éxito" channel="MarketingDirecto" url="https://www.youtube.com/watch?v=zTBhxtdijXE" />
            <VideoEmbed title="El Recurso Humano capacitado es factor clave del éxito" channel="TEDx Talks" url="https://www.youtube.com/watch?v=ChGjozKn4NY" />
            <VideoEmbed title="Cómo retener talento técnico en equipos de TI" channel="Sugerido" url="https://www.youtube.com/watch?v=65HKm30UUAs" />
          </div>
        </section>

        {/* Section 6 */}
        <section className="bg-surface text-foreground-inverse p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-display mb-6 text-primary">6. ¿Qué Ganas al Implementar una Correcta Gestión Tecnológica?</h2>
          <ul className="space-y-6 mb-8 text-gray-300">
            <li className="flex items-start gap-4">
               <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0"></div>
               <div><strong className="text-white">Mayor Eficiencia:</strong> procesos más rápidos, menos fallas y reducción directa en costos operativos.</div>
            </li>
            <li className="flex items-start gap-4">
               <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0"></div>
               <div><strong className="text-white">Decisiones Inteligentes:</strong> estrategias basadas en datos reales y análisis profundos, no en suposiciones.</div>
            </li>
            <li className="flex items-start gap-4">
               <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0"></div>
               <div><strong className="text-white">Ventaja Competitiva:</strong> respuestas más ágiles ante el mercado y una experiencia superior para los clientes finales.</div>
            </li>
            <li className="flex items-start gap-4">
               <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0"></div>
               <div><strong className="text-white">Escalabilidad:</strong> capacidad de crecer sin rediseñar toda la arquitectura.</div>
            </li>
            <li className="flex items-start gap-4">
               <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0"></div>
               <div><strong className="text-white">Reducción de downtime:</strong> menor tiempo de inactividad gracias a monitoreo proactivo.</div>
            </li>
          </ul>
          <VideoEmbed title="¿Qué es la Gestión Tecnológica?" channel="Instituto Artek" url="https://www.youtube.com/watch?v=fOC7klUl_iw" />
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="text-3xl md:text-4xl font-display mb-10 border-l-4 border-primary pl-4">7. Ciclo de Vida de la Gestión Tecnológica</h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-2">
            <CycleStep num="1" title="Planificación" desc="Definición de objetivos y diseño." />
            <CycleArrow />
            <CycleStep num="2" title="Implementación" desc="Despliegue y configuración de sistemas." />
            <CycleArrow />
            <CycleStep num="3" title="Monitoreo" desc="Vigilancia activa 24/7." />
            <CycleArrow />
            <CycleStep num="4" title="Optimización" desc="Mejora continua y ajustes." />
            <CycleArrow />
            <CycleStep num="5" title="Renovación" desc="Actualización de hardware obsoleto." />
          </div>
        </section>

        {/* Section 8 */}
        <section>
          <h2 className="text-3xl md:text-4xl font-display mb-6 border-l-4 border-primary pl-4">8. Indicadores Clave (KPIs)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface text-foreground-inverse">
                  <th className="p-4 font-display text-xl uppercase tracking-wider">Indicador</th>
                  <th className="p-4 font-display text-xl uppercase tracking-wider">Meta</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-surface">Disponibilidad del sistema</td>
                  <td className="p-4 font-bold text-primary">99.9%</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-surface">Tiempo medio de reparación (MTTR)</td>
                  <td className="p-4 font-bold text-primary">&lt; 2 horas</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-semibold text-surface">Tiempo de respuesta de soporte (Helpdesk)</td>
                  <td className="p-4 font-bold text-primary">&lt; 30 minutos</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-surface">Incidentes críticos por trimestre</td>
                  <td className="p-4 font-bold text-primary">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
    </AnimatedPage>
  );
}

function ListItem({ title, desc, isNew = false }: { title: string, desc: string, isNew?: boolean }) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
      <div className="text-foreground-muted">
        <strong className="text-surface font-semibold">{title}:</strong> {desc}
        {isNew && <span className="ml-2 inline-block px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-full">Nuevo</span>}
      </div>
    </li>
  );
}

function PillarCard({ num, title, desc, isNew = false }: { num: string, title: string, desc: string, isNew?: boolean }) {
  return (
    <div className="bg-white p-6 border-l-4 border-primary shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
      <div className="text-6xl font-display text-primary/10 absolute right-4 top-4 group-hover:scale-110 transition-transform">
        {num}
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
           <h3 className="text-xl font-display text-surface">{title}</h3>
           {isNew && <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-full">Nuevo</span>}
        </div>
        <p className="text-sm text-foreground-muted">{desc}</p>
      </div>
    </div>
  );
}

function CycleStep({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center text-center max-w-[140px]">
      <div className="w-12 h-12 rounded-full bg-surface text-primary font-display text-2xl flex items-center justify-center mb-3 shadow-md">
        {num}
      </div>
      <h4 className="font-bold text-surface mb-1 text-sm">{title}</h4>
      <p className="text-xs text-foreground-muted">{desc}</p>
    </div>
  );
}

function CycleArrow() {
  return (
    <div className="hidden md:block flex-1 border-t-2 border-dashed border-primary/40 mt-6 relative">
       <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 rounded-full bg-primary/40"></div>
    </div>
  );
}
