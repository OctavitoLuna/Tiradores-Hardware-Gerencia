import React from 'react';
import VideoEmbed from '../components/VideoEmbed';
import AnimatedPage from '../components/AnimatedPage';
import FadeIn from '../components/FadeIn';

export default function CienciaTecnologia() {
  return (
    <AnimatedPage>
    <div className="w-full bg-background pb-20">
      {/* Page Header */}
      <header className="bg-surface text-foreground-inverse py-20 border-b-8 border-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,_var(--color-primary),_transparent_40%)]"></div>
        <div className="container-wide text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-display tracking-wide text-white mb-4">Ciencia, Tecnología e Innovación</h1>
          <p className="text-xl font-display tracking-widest text-primary uppercase">El Triángulo del Progreso</p>
        </div>
      </header>

      <div className="container-wide max-w-4xl mt-16 space-y-24">
        
        {/* Intro */}
        <FadeIn>
        <section className="bg-white p-8 md:p-12 border-l-8 border-primary shadow-sm text-lg text-foreground-muted leading-relaxed font-medium">
          <p>
            El avance humano no ocurre por casualidad. Se sostiene sobre un ecosistema dinámico donde el conocimiento puro, las herramientas aplicadas y la creatividad se combinan para resolver los retos más complejos del mundo actual. Cuando la ciencia explica el entorno, la tecnología lo transforma en soluciones prácticas y la creatividad cuestiona su propósito, el progreso deja de ser un conjunto de hallazgos aislados. Se convierte en un motor continuo capaz de elevar la calidad de vida y abrir nuevas posibilidades para el futuro.
          </p>
          <VideoEmbed title="Innovation (An animated short)" channel="chickenbreadd" url="https://www.youtube.com/watch?v=yayL1Eslz0I" />
        </section>
        </FadeIn>

        {/* Section 1 */}
        <FadeIn delay={0.1}>
        <section>
          <h2 className="text-3xl md:text-4xl font-display mb-8 border-l-4 border-primary pl-4">1. Las Bases del Conocimiento y la Creación</h2>
          <ul className="space-y-6">
            <ListItem title="Investigación y Método Científico" desc="la ciencia abarca desde las ciencias naturales y sociales hasta las formales; se vale de observación, hipótesis, experimentación y conclusiones para descubrir cómo funciona nuestro entorno." />
            <ListItem title="Herramientas e Ingeniería" desc="la tecnología toma esos descubrimientos científicos y los transforma en soluciones tangibles: componentes físicos (hardware), sistemas lógicos (software) y metodologías de gestión." />
            <ListItem title="El Acto de Innovar" desc="generar valor no se limita a inventar algo nuevo, sino a implementarlo con éxito, ya sea mediante mejoras incrementales, cambios significativos (disruptivos) o transformaciones completas del mercado (radicales)." />
            <ListItem title="Pensamiento crítico y experimentación" desc="validación constante de hipótesis técnicas mediante pruebas controladas (testing, entornos sandbox) antes de producción." isNew />
            <ListItem title="Interdisciplinariedad" desc="la innovación real surge del cruce entre ingeniería de hardware, ciencia de datos y diseño centrado en el usuario." isNew />
          </ul>
          <div className="mt-8">
             <VideoEmbed title="El método científico explicado" channel="Sugerido" url="https://www.youtube.com/watch?v=HraxSpt__II" />
          </div>
        </section>
        </FadeIn>

        {/* Section 2 */}
        <FadeIn delay={0.1}>
        <section>
          <h2 className="text-3xl md:text-4xl font-display mb-8 border-l-4 border-primary pl-4">2. Impacto Económico y Desarrollo de Mercados</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
             <InfoCard title="Competitividad y Productividad" desc="Optimiza procesos en todas las industrias, impulsando el crecimiento del PIB (referentes globales como Silicon Valley e Israel)." />
             <InfoCard title="Nuevas Oportunidades" desc="Fomenta la creación de nuevos modelos de negocio y empleos de alto valor agregado." />
             <InfoCard title="Atracción de Capital" desc="Los polos de innovación atraen inversión privada y retienen al mejor talento global." />
             <InfoCard title="Impacto en la salud digital en Bolivia" desc="La inversión en infraestructura tecnológica médica reduce costos hospitalarios y mejora el acceso a diagnósticos en zonas remotas mediante telemedicina." isNew />
          </div>
          <VideoEmbed title="Cómo la tecnología impulsa el crecimiento económico" channel="Sugerido" url="https://www.youtube.com/watch?v=zhCgRaqb4zo" />
        </section>
        </FadeIn>

        {/* Section 3 */}
        <FadeIn delay={0.1}>
        <section className="bg-background-dark p-8 md:p-12 border-t-4 border-primary">
          <h2 className="text-3xl md:text-4xl font-display mb-8">3. Tendencias Globales y el Futuro Próximo</h2>
          <ul className="space-y-6 mb-8">
            <ListItem title="Inteligencia Artificial" desc="automatización avanzada, aprendizaje automático y optimización masiva de datos." />
            <ListItem title="Biotecnología y Nanotecnología" desc="medicina de precisión personalizada y desarrollo de nuevos materiales con propiedades avanzadas." />
            <ListItem title="Computación Cuántica" desc="potencial inédito para procesar información a velocidades antes inalcanzables." />
            <ListItem title="Internet de las Cosas (IoT) en salud" desc="dispositivos médicos conectados que monitorean pacientes en tiempo real." isNew />
            <ListItem title="Edge Computing" desc="procesamiento de datos cerca del origen para reducir la latencia en decisiones clínicas críticas." isNew />
            <ListItem title="Green IT / Sostenibilidad tecnológica" desc="reducción del consumo energético de centros de datos y economía circular en el hardware." isNew />
          </ul>
          <div className="grid md:grid-cols-2 gap-8">
             <VideoEmbed title="Tendencias tecnológicas 2026: IA, IoT y computación cuántica" channel="Sugerido" url="https://www.youtube.com/watch?v=n0Tosd_kTVY" />
             <VideoEmbed title="Qué es el Edge Computing y por qué importa en salud" channel="Sugerido" url="https://www.youtube.com/watch?v=hRhl6HepzZc" />
          </div>
        </section>
        </FadeIn>

        {/* Section 4 & 5 */}
        <FadeIn delay={0.1}>
        <section className="grid md:grid-cols-2 gap-8">
           <div className="bg-surface text-foreground-inverse p-8">
              <h2 className="text-2xl font-display text-primary mb-4">¿Por Qué Apoyar este Ecosistema?</h2>
              <p className="text-gray-300">
                Apoyar la investigación y la innovación es fundamental para un crecimiento sostenible. La clave del éxito futuro reside en la colaboración estratégica entre el sector científico, la industria tecnológica y la sociedad para asegurar que los avances generen un beneficio equitativo y duradero.
              </p>
           </div>
           <div className="bg-primary text-white p-8">
              <h2 className="text-2xl font-display mb-4">Aplicado a IA MediTech</h2>
              <p>
                En nuestro equipo, este triángulo se traduce en decisiones concretas: la ciencia de datos guía qué infraestructura necesitamos, la ingeniería de hardware la construye, y la innovación constante en procesos de mantenimiento y monitoreo nos permite sostener sistemas de salud inteligente sin interrupciones en Bolivia.
              </p>
           </div>
        </section>
        </FadeIn>

        {/* Section 6 - Timeline */}
        <FadeIn delay={0.1}>
        <section>
          <h2 className="text-3xl md:text-4xl font-display mb-12 text-center text-primary">Línea de Tiempo de Evolución</h2>
          <div className="relative border-l-2 border-primary/30 ml-4 space-y-8 pb-8">
            
            <TimelineItem title="Computación en la nube" />
            <TimelineItem title="IoT médico" />
            <TimelineItem title="Analítica en tiempo real" />
            <TimelineItem title="IA aplicada a diagnóstico" />
            <TimelineItem title="Infraestructura híbrida autoescalable" />
            
          </div>
        </section>
        </FadeIn>

      </div>
    </div>
    </AnimatedPage>
  );
}

function ListItem({ title, desc, isNew = false }: { title: string, desc: string, isNew?: boolean }) {
  return (
    <li className="flex items-start gap-4">
      <div className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></div>
      <div className="text-foreground-muted text-lg">
        <strong className="text-surface font-semibold block sm:inline">{title}: </strong> {desc}
        {isNew && <span className="ml-2 inline-block px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-full align-middle">Nuevo</span>}
      </div>
    </li>
  );
}

function InfoCard({ title, desc, isNew = false }: { title: string, desc: string, isNew?: boolean }) {
  return (
    <div className="bg-white p-6 border-t-4 border-primary shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
         <h3 className="font-display text-xl text-surface">{title}</h3>
         {isNew && <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-full">Nuevo</span>}
      </div>
      <p className="text-foreground-muted text-sm">{desc}</p>
    </div>
  );
}

function TimelineItem({ title }: { title: string }) {
  return (
    <div className="relative flex items-center justify-start w-full">
      {/* Dot */}
      <div className="absolute left-[-7px] w-3 h-3 rounded-full bg-primary z-10 ring-4 ring-background"></div>
      
      {/* Content */}
      <div className="ml-8 bg-white p-4 border border-gray-200 shadow-sm rounded-md w-full max-w-xs hover:border-primary transition-colors">
         <h4 className="font-bold text-surface text-lg">{title}</h4>
      </div>
    </div>
  );
}
