import React from 'react';
import VideoEmbed from '../components/VideoEmbed';
import AnimatedPage from '../components/AnimatedPage';
import FadeIn from '../components/FadeIn';

export default function MisionVision() {
  return (
    <AnimatedPage>
    <div className="w-full bg-background pb-20">
      {/* Page Header */}
      <header className="bg-surface text-foreground-inverse py-20 border-b-8 border-primary">
        <div className="container-wide text-center">
          <h1 className="text-5xl md:text-7xl font-display tracking-wide text-white">Misión y Visión</h1>
        </div>
      </header>

      <div className="container-wide max-w-4xl mt-16 space-y-24">
        
        {/* Intro */}
        <section>
          <h2 className="text-3xl md:text-4xl font-display mb-8 border-l-4 border-primary pl-4">¿Qué son la Misión y la Visión?</h2>
          <div className="bg-white p-8 shadow-sm text-foreground-muted space-y-4 text-lg">
            <p>
              La misión y la visión son los pilares estratégicos fundamentales que definen la identidad y el rumbo de cualquier organización. No son simples frases decorativas: son la brújula que orienta cada decisión operativa y cada plan de crecimiento a largo plazo.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-surface font-medium">
              <li><strong>Misión:</strong> define la razón de ser actual de la empresa. Responde a qué hace la organización, para quién lo hace y qué valor diferencial aporta en el presente. Es la brújula operativa diaria que guía las decisiones y acciones del equipo.</li>
              <li><strong>Visión:</strong> representa la aspiración a largo plazo. Describe el punto al que la empresa quiere llegar en el futuro, inspirando a la organización a crecer, innovar y alcanzar un estado deseado en el mercado.</li>
            </ul>
            <p>
              <strong>Diferencias clave:</strong> la misión vive en el presente (qué hacemos hoy) mientras que la visión vive en el futuro (a dónde queremos llegar); la misión es más concreta y operativa, la visión es más aspiracional e inspiradora.
            </p>
            <div className="pt-4 mt-4 border-t border-gray-200">
              <h3 className="font-bold text-surface mb-2">¿Por qué son importantes?</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Alinean a todo el equipo hacia un mismo propósito.</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Sirven como criterio de decisión.</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Son la base para definir objetivos, KPIs y cultura.</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div> Facilitan la comunicación externa e identidad interna.</li>
              </ul>
            </div>
            <p className="pt-4">
              <strong>¿Cómo se construyen?</strong> Se redactan a partir de responder preguntas clave: ¿Qué hacemos? ¿Para quién? ¿Cómo lo hacemos distinto? ¿A dónde queremos llegar? Deben ser claras, memorables, medibles en su impacto y revisadas periódicamente.
            </p>
          </div>
          <div className="mt-8">
            <VideoEmbed title="Mision y Vision" url="https://www.youtube.com/watch?v=l7uhrPleR6Y" />
          </div>
        </section>

        {/* Declarations Grid */}
        <section className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-surface text-foreground-inverse p-10 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 text-8xl font-display opacity-5 group-hover:scale-110 transition-transform select-none">M</div>
             <h2 className="text-4xl font-display mb-6 text-primary relative z-10">Nuestra Misión</h2>
             <p className="text-gray-300 text-lg leading-relaxed relative z-10">
               "Diseñar, desplegar y mantener una arquitectura física de alto rendimiento, latencia baja y máxima disponibilidad, que garantice la continuidad operativa de los sistemas clínicos críticos en el hospital; colaborando de manera estratégica con el equipo de Infraestructura Cloud para articular un ecosistema híbrido balanceado, seguro y eficiente, que cumpla con las normativas locales de salud y optimice los recursos operacionales y financieros del proyecto IA MediTech."
             </p>
          </div>

          <div className="bg-primary text-white p-10 relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-8 text-8xl font-display opacity-10 group-hover:scale-110 transition-transform select-none">V</div>
             <h2 className="text-4xl font-display mb-6 relative z-10">Nuestra Visión</h2>
             <p className="text-white/90 text-lg leading-relaxed relative z-10">
               "Ser el pilar físico e inquebrantable de la infraestructura de IA MediTech, reconocido por la excelencia técnica en procesamiento local, soberanía de datos y tolerancia a fallos, consolidándose como un modelo de referencia en la integración armónica entre la infraestructura local y la elasticidad de la nube, para soportar sin interrupciones la evolución de la medicina inteligente en Bolivia."
             </p>
          </div>

        </section>

        {/* Valores */}
        <section className="bg-background-dark p-10 border-t-4 border-primary text-center">
          <h2 className="text-3xl md:text-4xl font-display mb-10">Valores del equipo</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             <ValueCard title="Excelencia técnica" />
             <ValueCard title="Colaboración multidisciplinaria" />
             <ValueCard title="Innovación responsable" />
             <ValueCard title="Seguridad y soberanía de datos" />
          </div>
        </section>

        {/* How to write */}
        <FadeIn delay={0.1}>
        <section>
          <h2 className="text-3xl md:text-4xl font-display mb-8 border-l-4 border-primary pl-4">Cómo redactar tu misión y visión</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <VideoEmbed title="¿Cómo redactar la Visión y Misión de tu empresa?" channel="Conociendo Tu Empresa" url="https://www.youtube.com/watch?v=WBM8qsBBR_w" />
            <VideoEmbed title="Aprende a hacer la visión, misión y valores en menos de 5 minutos" channel="EAS Escuela Innovadora" url="https://www.youtube.com/watch?v=wCjLpHX0LoA" />
            <VideoEmbed title="Misión, visión y valores: diferencias y ejemplos reales" channel="Sugerido" url="https://www.youtube.com/watch?v=RV9YrstWny0" />
          </div>
        </section>
        </FadeIn>

      </div>
    </div>
    </AnimatedPage>
  );
}

function ValueCard({ title }: { title: string }) {
  return (
    <div className="bg-white p-6 shadow-sm border border-gray-100 flex items-center justify-center min-h-[120px] hover:border-primary transition-colors">
      <h3 className="font-bold text-surface text-center uppercase tracking-wide text-sm">{title}</h3>
    </div>
  );
}
