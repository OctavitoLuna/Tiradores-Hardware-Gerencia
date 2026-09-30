import React from 'react';
import VideoEmbed from '../components/VideoEmbed';
import AnimatedPage from '../components/AnimatedPage';
import FadeIn from '../components/FadeIn';

export default function MBTI() {
  return (
    <AnimatedPage>
    <div className="w-full bg-background pb-20">
      {/* Page Header */}
      <header className="bg-surface text-foreground-inverse py-20 border-b-8 border-primary relative overflow-hidden">
        <div className="absolute top-1/2 right-10 -translate-y-1/2 text-9xl font-display opacity-5 select-none tracking-tighter">MBTI</div>
        <div className="container-wide text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-display tracking-wide text-white mb-4">MBTI</h1>
          <p className="text-xl font-display tracking-widest text-primary uppercase">Myers-Briggs Type Indicator</p>
        </div>
      </header>

      <div className="container-wide max-w-5xl mt-16 space-y-24">
        
        {/* Intro */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-display mb-6 border-l-4 border-primary pl-4">¿Qué es el MBTI?</h2>
            <div className="text-lg text-foreground-muted leading-relaxed space-y-4">
              <p>
                El Indicador de Tipos Myers-Briggs (MBTI) es una herramienta de autoconocimiento desarrollada por Katharine Cook Briggs e Isabel Briggs Myers, basada en la teoría de los tipos psicológicos de Carl Jung. Clasifica las preferencias psicológicas de una persona en 4 dicotomías:
              </p>
              <ul className="space-y-4 pt-4 border-t border-gray-200">
                <Dichotomy letter1="E" title1="Extroversión" letter2="I" title2="Introversión" desc="De dónde obtiene energía la persona (del mundo exterior o de su mundo interior)." />
                <Dichotomy letter1="S" title1="Sensación" letter2="N" title2="Intuición" desc="Cómo procesa la información (datos concretos y detalles vs. patrones y posibilidades)." />
                <Dichotomy letter1="T" title1="Pensamiento" letter2="F" title2="Sentimiento" desc="Cómo toma decisiones (lógica objetiva vs. valores y armonía)." />
                <Dichotomy letter1="J" title1="Juicio" letter2="P" title2="Percepción" desc="Cómo se relaciona con el mundo exterior (estructura y planificación vs. flexibilidad y adaptabilidad)." />
              </ul>
              <p className="pt-4">
                La combinación de estas 4 letras genera <strong>16 tipos de personalidad</strong> posibles. En el contexto de equipos de trabajo, el MBTI no busca etiquetar, sino <strong>entender estilos de comunicación, motivación y toma de decisión</strong> para mejorar la colaboración, prevenir conflictos y asignar tareas según las fortalezas naturales de cada integrante.
              </p>
            </div>
          </div>
          <div className="space-y-8">
             <div className="bg-white p-8 border-t-4 border-primary shadow-sm">
                <h3 className="font-display text-2xl mb-4 text-surface">¿Por qué lo usamos en nuestro equipo?</h3>
                <ul className="space-y-3 text-foreground-muted">
                  <li className="flex gap-3"><div className="w-2 h-2 mt-2 bg-primary rounded-full shrink-0"></div> Para asignar roles de Scrum de forma más natural (ej. perfiles J suelen encajar bien como Scrum Master, perfiles N-P aportan ideas disruptivas).</li>
                  <li className="flex gap-3"><div className="w-2 h-2 mt-2 bg-primary rounded-full shrink-0"></div> Para anticipar fricciones de comunicación entre estilos distintos (ej. T vs F al dar feedback).</li>
                  <li className="flex gap-3"><div className="w-2 h-2 mt-2 bg-primary rounded-full shrink-0"></div> Para fomentar empatía: entender que la forma de trabajar de un compañero no es "incorrecta", solo distinta.</li>
                </ul>
             </div>
             <VideoEmbed title="MBTI explicado: los 16 tipos de personalidad" channel="Sugerido" url="https://www.youtube.com/watch?v=Z-0dnVP_iPs" />
          </div>
        </section>

        {/* Profiles */}
        <section>
          <h2 className="text-3xl md:text-4xl font-display mb-12 text-center text-primary">Perfiles del Equipo</h2>
          
          <div className="space-y-6">
             <ProfileCard 
               name="Octavio Luna" 
               type="ENFP" 
               desc="Son personas entusiastas y creativas que buscan conexiones profundas y se guían por sus valores personales. Prefieren enfocarse en las grandes ideas y las posibilidades futuras en lugar de seguir rutinas estrictas."
               strengths="Energía contagiosa, pensamiento innovador, facilidad de comunicación."
               weaknesses="Seguimiento de tareas repetitivas."
               contribution="Como líder del área y Scrum Master, motiva al equipo y facilita la resolución creativa de bloqueos."
             />

             <ProfileCard 
               name="Leandro Colque" 
               type="ENTJ" 
               desc="Son líderes estratégicos y lógicos que disfrutan organizando recursos para alcanzar metas ambiciosas. Toman decisiones rápidas y eficientes, aunque pueden impacientarse con quienes no siguen su ritmo de trabajo."
               strengths="Visión estratégica, decisión firme."
               weaknesses="Paciencia con procesos más lentos del equipo."
               contribution="Como Product Owner y responsable de Dirección de Tecnología y Presupuesto, prioriza el backlog con foco en resultados de negocio."
             />

             <ProfileCard 
               name="Leonardo Ibarra" 
               type="ENFP" 
               desc="Son mentes ágiles e impredecibles que se adaptan rápidamente al caos encontrando soluciones fuera de lo común. Prefieren experimentar con tácticas innovadoras y motivar a su equipo antes que ceñirse a una estrategia rígida y predefinida."
               strengths="Adaptabilidad, creatividad técnica."
               weaknesses="Estructurar procesos repetibles."
               contribution="Como responsable de Operaciones de Soporte, propone soluciones ágiles ante incidencias del día a día."
             />

             <ProfileCard 
               name="Einar Guillén" 
               type="ESFP" 
               desc="Son individuos espontáneos y llenos de energía que disfrutan viviendo el presente al máximo. Les encanta interactuar con su entorno y convertir las experiencias diarias en algo divertido para todos."
               strengths="Energía positiva, trabajo en equipo."
               weaknesses="Planificación a largo plazo."
               contribution="Como responsable de Gestión de Infraestructura Global, mantiene la moral del equipo alta y facilita la colaboración práctica en logística."
             />

             <ProfileCard 
               name="Huascar Duran" 
               type="INFJ" 
               desc="Son personas idealistas y empáticas con una fuerte visión sobre cómo ayudar a los demás. Gracias a su intuición logran conectar genuinamente, aunque siempre necesitan tiempo a solas para recargar energías."
               strengths="Empatía, visión a largo plazo, atención al detalle en calidad."
               weaknesses="Necesita espacios de trabajo profundo sin interrupciones."
               contribution="Como responsable de Aseguramiento de Calidad y Recursos, garantiza que el trabajo cumpla estándares con una mirada cuidadosa."
             />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <VideoEmbed title="Teorías de la Personalidad" channel="Astraway" url="https://www.youtube.com/watch?v=9vticqDaW8M" />
            <VideoEmbed title="Cómo usar el MBTI para formar mejores equipos" channel="Sugerido" url="https://www.youtube.com/watch?v=cPWYANT9A8s" />
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-surface text-foreground-inverse p-10 md:p-16 text-center">
           <h2 className="text-3xl font-display mb-6 text-primary">Diversidad de personalidades: nuestra fortaleza</h2>
           <p className="text-lg max-w-3xl mx-auto text-gray-300 leading-relaxed">
             Nuestro equipo combina liderazgo estratégico (ENTJ), motivación y creatividad (ENFP x2), energía práctica (ESFP) y visión empática de calidad (INFJ). Esta diversidad es intencional: nos permite cubrir tanto la ejecución técnica como la cohesión humana del equipo, evitando puntos ciegos que un equipo homogéneo tendría.
           </p>
        </section>

      </div>
    </div>
    </AnimatedPage>
  );
}

function Dichotomy({ letter1, title1, letter2, title2, desc }: { letter1: string, title1: string, letter2: string, title2: string, desc: string }) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-1">
        <span className="font-display text-xl text-primary">{letter1}</span>
        <span className="font-bold text-surface">{title1}</span>
        <span className="text-gray-400">vs</span>
        <span className="font-bold text-surface">{title2}</span>
        <span className="font-display text-xl text-primary">{letter2}</span>
      </div>
      <p className="text-sm pl-8 border-l-2 border-background-dark">{desc}</p>
    </div>
  );
}

function ProfileCard({ name, type, desc, strengths, weaknesses, contribution }: any) {
  return (
    <div className="bg-white border border-gray-200 shadow-sm flex flex-col md:flex-row overflow-hidden group hover:border-primary transition-colors">
      <div className="bg-surface text-white p-8 md:w-1/3 flex flex-col justify-center items-center text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-primary),_transparent_70%)]"></div>
         <div className="text-7xl font-display text-primary mb-2 relative z-10">{type}</div>
         <h3 className="text-2xl font-bold font-sans relative z-10">{name}</h3>
      </div>
      <div className="p-8 md:w-2/3 space-y-4">
         <p className="text-foreground-muted italic leading-relaxed">"{desc}"</p>
         <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
            <div>
               <h4 className="text-xs font-bold uppercase tracking-widest text-surface mb-1">Fortalezas</h4>
               <p className="text-sm text-foreground-muted">{strengths}</p>
            </div>
            <div>
               <h4 className="text-xs font-bold uppercase tracking-widest text-surface mb-1">Puntos de mejora</h4>
               <p className="text-sm text-foreground-muted">{weaknesses}</p>
            </div>
         </div>
         <div className="pt-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Aporte al equipo (Rol)</h4>
            <p className="text-sm font-medium text-surface">{contribution}</p>
         </div>
      </div>
    </div>
  );
}
