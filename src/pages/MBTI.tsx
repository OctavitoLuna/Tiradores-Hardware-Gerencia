import React, { useState } from 'react';
import { 
  Users, 
  Sparkles, 
  Brain, 
  Lightbulb, 
  ShieldCheck, 
  Target, 
  Compass,
  ArrowRight
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Marker } from '../components/ui/Marker';
import { VideoCard } from '../components/ui/VideoCard';
import { TeamAvatar } from '../components/svg/TeamAvatars';

export default function MBTI() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const dichotomies = [
    {
      code: 'E / I',
      left: 'Extroversión (E)',
      right: 'Introversión (I)',
      desc: 'De dónde obtiene energía la persona (del mundo exterior o de su mundo interior).',
      color: 'bg-[#FFE500]'
    },
    {
      code: 'S / N',
      left: 'Sensación (S)',
      right: 'Intuición (N)',
      desc: 'Cómo procesa la información (datos concretos y detalles vs. patrones y posibilidades).',
      color: 'bg-[#00C2CB]'
    },
    {
      code: 'T / F',
      left: 'Pensamiento (T)',
      right: 'Sentimiento (F)',
      desc: 'Cómo toma decisiones (lógica objetiva vs. valores y armonía).',
      color: 'bg-[#FF3DCB]'
    },
    {
      code: 'J / P',
      left: 'Juicio (J)',
      right: 'Percepción (P)',
      desc: 'Cómo se relaciona con el mundo exterior (estructura y planificación vs. flexibilidad y adaptabilidad).',
      color: 'bg-[#B6F23A]'
    }
  ];

  const profiles = [
    {
      id: 'octavio',
      name: 'Octavio Luna',
      type: 'ENFP',
      role: 'Líder del Área / Scrum Master',
      avatar: 'octavio' as const,
      color: 'terracota' as const,
      desc: 'Son personas entusiastas y creativas que buscan conexiones profundas y se guían por sus valores personales. Prefieren enfocarse en las grandes ideas y las posibilidades futuras en lugar de seguir rutinas estrictas.',
      strengths: 'Energía contagiosa, pensamiento innovador, facilidad de comunicación.',
      weaknesses: 'Seguimiento de tareas repetitivas.',
      contribution: 'Como líder del área y Scrum Master, motiva al equipo y facilita la resolución creativa de bloqueos.'
    },
    {
      id: 'leandro',
      name: 'Leandro Colque',
      type: 'ENTJ',
      role: 'Product Owner / FinOps',
      avatar: 'leandro' as const,
      color: 'blue' as const,
      desc: 'Son líderes estratégicos y lógicos que disfrutan organizando recursos para alcanzar metas ambiciosas. Toman decisiones rápidas y eficientes, aunque pueden impacientarse con quienes no siguen su ritmo de trabajo.',
      strengths: 'Visión estratégica, decisión firme.',
      weaknesses: 'Paciencia con procesos más lentos del equipo.',
      contribution: 'Como Product Owner y responsable de Dirección de Tecnología y Presupuesto, prioriza el backlog con foco en resultados de negocio.'
    },
    {
      id: 'leonardo',
      name: 'Leonardo Ibarra',
      type: 'ENFP',
      role: 'Operaciones de Soporte',
      avatar: 'leonardo' as const,
      color: 'magenta' as const,
      desc: 'Son mentes ágiles e impredecibles que se adaptan rápidamente al caos encontrando soluciones fuera de lo común. Prefieren experimentar con tácticas innovadoras y motivar a su equipo antes que ceñirse a una estrategia rígida y predefinida.',
      strengths: 'Adaptabilidad, creatividad técnica.',
      weaknesses: 'Estructurar procesos repetibles.',
      contribution: 'Como responsable de Operaciones de Soporte, propone soluciones ágiles ante incidencias del día a día.'
    },
    {
      id: 'einar',
      name: 'Einar Guillén',
      type: 'ESFP',
      role: 'Infraestructura Global',
      avatar: 'einar' as const,
      color: 'lime' as const,
      desc: 'Son individuos espontáneos y llenos de energía que disfrutan viviendo el presente al máximo. Les encanta interactuar con su entorno y convertir las experiencias diarias en algo divertido para todos.',
      strengths: 'Energía positiva, trabajo en equipo.',
      weaknesses: 'Planificación a largo plazo.',
      contribution: 'Como responsable de Gestión de Infraestructura Global, mantiene la moral del equipo alta y facilita la colaboración práctica en logística.'
    },
    {
      id: 'huascar',
      name: 'Huascar Duran',
      type: 'INFJ',
      role: 'Calidad & Recursos',
      avatar: 'huascar' as const,
      color: 'teal' as const,
      desc: 'Son personas idealistas y empáticas con una fuerte visión sobre cómo ayudar a los demás. Gracias a su intuición logran conectar genuinamente, aunque siempre necesitan tiempo a solas para recargar energías.',
      strengths: 'Empatía, visión a largo plazo, atención al detalle en calidad.',
      weaknesses: 'Necesita espacios de trabajo profundo sin interrupciones.',
      contribution: 'Como responsable de Aseguramiento de Calidad y Recursos, garantiza que el trabajo cumpla estándares con una mirada cuidadosa.'
    }
  ];

  return (
    <div className="w-full pb-28">
      {/* Header Hero */}
      <header className="bg-[#FF3DCB] text-white bg-dots border-b-[4px] border-[#0A0A0A] py-16 md:py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto text-center">
          <Badge color="yellow" className="mb-4">
            MYERS-BRIGGS TYPE INDICATOR
          </Badge>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white uppercase leading-[0.9]">
            PERFILES <Marker color="yellow">MBTI</Marker>
          </h1>
          <p className="text-lg md:text-xl text-white/95 font-sans max-w-2xl mx-auto mt-4 font-medium">
            Entendiendo estilos de comunicación, motivación y toma de decisiones para maximizar la sinergia del equipo.
          </p>
        </div>
      </header>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 mt-16 space-y-24">
        
        {/* Intro & 4 Toggles */}
        <section className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <Card color="white" className="p-8 md:p-10">
              <Badge color="teal" className="mb-4">TEORÍA PSICOLÓGICA</Badge>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-6">
                ¿Qué es el MBTI?
              </h2>
              <div className="text-base sm:text-lg text-[#0A0A0A]/85 font-sans leading-relaxed space-y-4">
                <p>
                  El Indicador de Tipos Myers-Briggs (MBTI) es una herramienta de autoconocimiento desarrollada por Katharine Cook Briggs e Isabel Briggs Myers, basada en la teoría de los tipos psicológicos de Carl Jung. Clasifica las preferencias psicológicas de una persona en 4 dicotomías:
                </p>
                <p>
                  La combinación de estas 4 letras genera <strong>16 tipos de personalidad</strong> posibles. En el contexto de equipos de trabajo, el MBTI no busca etiquetar, sino <strong>entender estilos de comunicación, motivación y toma de decisión</strong> para mejorar la colaboración, prevenir conflictos y asignar tareas según las fortalezas naturales de cada integrante.
                </p>
              </div>
            </Card>

            {/* 4 Interactive Dicotomías Toggles */}
            <div className="space-y-4">
              {dichotomies.map((d, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border-[3px] border-[#0A0A0A] bg-white shadow-brutal flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-xl border-[2px] border-[#0A0A0A] ${d.color} font-display font-bold text-sm shadow-[1px_1px_0_#0A0A0A]`}>
                      {d.code}
                    </span>
                    <div className="font-display font-bold text-base md:text-lg uppercase text-[#0A0A0A]">
                      <span>{d.left}</span> <span className="text-[#C1522A]">vs</span> <span>{d.right}</span>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-[#0A0A0A]/70 font-sans max-w-sm">
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Why do we use it in the team? */}
          <div className="lg:col-span-5 space-y-8">
            <Card color="yellow" className="p-8">
              <Badge color="black" className="mb-4">APLICACIÓN ÁGIL</Badge>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-[#0A0A0A] uppercase mb-6">
                ¿Por qué lo usamos en nuestro equipo?
              </h3>
              <ul className="space-y-4 text-base font-sans text-[#0A0A0A]/90">
                <li className="p-4 bg-white rounded-xl border-[2px] border-[#0A0A0A] shadow-brutal-sm">
                  <strong>Asignación Natural:</strong> Para asignar roles de Scrum de forma más natural (ej. perfiles J suelen encajar bien como Scrum Master, perfiles N-P aportan ideas disruptivas).
                </li>
                <li className="p-4 bg-white rounded-xl border-[2px] border-[#0A0A0A] shadow-brutal-sm">
                  <strong>Prevención de Conflictos:</strong> Para anticipar fricciones de comunicación entre estilos distintos (ej. T vs F al dar feedback).
                </li>
                <li className="p-4 bg-white rounded-xl border-[2px] border-[#0A0A0A] shadow-brutal-sm">
                  <strong>Fomento de Empatía:</strong> Para fomentar empatía: entender que la forma de trabajar de un compañero no es "incorrecta", solo distinta.
                </li>
              </ul>
            </Card>

            <VideoCard 
              title="MBTI explicado: los 16 tipos de personalidad" 
              channel="Sugerido" 
              url="https://www.youtube.com/watch?v=Z-0dnVP_iPs" 
            />
          </div>
        </section>

        {/* Profiles Section: 5 Collectible Cards */}
        <section>
          <div className="text-center mb-12">
            <Badge color="yellow" className="mb-3">CARTAS COLECCIONABLES DEL EQUIPO</Badge>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-[#0A0A0A] uppercase">
              Perfiles del <Marker color="teal">Equipo</Marker>
            </h2>
            <p className="text-base text-[#0A0A0A]/80 font-sans max-w-xl mx-auto mt-2">
              Haz clic en cualquier carta para alternar entre el perfil psicológico y su aporte concreto al rol de hardware:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profiles.map((p) => {
              const isFlipped = !!flippedCards[p.id];
              return (
                <div
                  key={p.id}
                  onClick={() => toggleFlip(p.id)}
                  className="cursor-pointer group"
                >
                  <Card
                    color={p.color}
                    className="h-full p-8 flex flex-col justify-between transition-all select-none shadow-brutal group-hover:shadow-brutal-lg"
                  >
                    <div>
                      {/* Top Bar of Card */}
                      <div className="flex items-center justify-between mb-4">
                        <Badge color="black">{p.type}</Badge>
                        <TeamAvatar member={p.avatar} size="md" />
                      </div>

                      <h3 className="font-display font-bold text-3xl uppercase leading-tight">
                        {p.name}
                      </h3>
                      <p className="font-display font-bold text-xs uppercase opacity-85 mb-4">
                        {p.role}
                      </p>

                      {!isFlipped ? (
                        /* Front side: Psychological description & traits */
                        <div className="space-y-4">
                          <p className="text-sm font-sans italic opacity-95 leading-relaxed bg-black/10 p-4 rounded-xl border border-black/20">
                            "{p.desc}"
                          </p>
                          <div className="space-y-2 text-xs font-sans">
                            <div className="p-2.5 bg-white text-[#0A0A0A] rounded-lg border border-[#0A0A0A]">
                              <strong className="font-display font-bold uppercase block text-[#C1522A] text-[10px]">FORTALEZAS:</strong>
                              <span>{p.strengths}</span>
                            </div>
                            <div className="p-2.5 bg-white text-[#0A0A0A] rounded-lg border border-[#0A0A0A]">
                              <strong className="font-display font-bold uppercase block text-[#C1522A] text-[10px]">PUNTOS DE MEJORA:</strong>
                              <span>{p.weaknesses}</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Back side: Role Contribution */
                        <div className="p-5 bg-white text-[#0A0A0A] rounded-xl border-[2px] border-[#0A0A0A] space-y-3">
                          <Badge color="yellow" size="sm">APORTE AL ROL // SCRUM</Badge>
                          <p className="text-sm font-sans font-medium leading-relaxed">
                            {p.contribution}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 mt-6 border-t border-black/20 text-center">
                      <span className="text-[11px] font-display font-bold uppercase tracking-wider underline">
                        {isFlipped ? '← Ver análisis psicológico' : 'Ver aporte al rol →'}
                      </span>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <VideoCard title="Teorías de la Personalidad" channel="Astraway" url="https://www.youtube.com/watch?v=9vticqDaW8M" />
            <VideoCard title="Cómo usar el MBTI para formar mejores equipos" channel="Sugerido" url="https://www.youtube.com/watch?v=cPWYANT9A8s" />
          </div>
        </section>

        {/* Conclusion con Gráfico de Barras Brutalistas */}
        <section>
          <Card color="ink" className="p-8 md:p-14 text-center">
            <Badge color="yellow" className="mb-4">SÍNTESIS DE EQUIPO</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#FFE500] uppercase mb-6">
              Diversidad de personalidades: nuestra fortaleza
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#FAF5DC]/90 font-sans leading-relaxed mb-10">
              Nuestro equipo combina liderazgo estratégico (ENTJ), motivación y creatividad (ENFP x2), energía práctica (ESFP) y visión empática de calidad (INFJ). Esta diversidad es intencional: nos permite cubrir tanto la ejecución técnica como la cohesión humana del equipo, evitando puntos ciegos que un equipo homogéneo tendría.
            </p>

            {/* Brutalist Composition Bar Chart */}
            <div className="max-w-2xl mx-auto bg-white/10 p-6 rounded-2xl border-[2px] border-white/20 text-left space-y-4">
              <span className="font-display font-bold text-xs uppercase tracking-wider text-white block">
                COMPOSICIÓN DE TIPOS EN TIRADORES:
              </span>
              
              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-[#FFE500] mb-1">
                  <span>ENFP (Octavio Luna & Leonardo Ibarra)</span>
                  <span>40% (2 integrantes)</span>
                </div>
                <div className="w-full h-5 bg-white/20 rounded-md overflow-hidden border border-black">
                  <div className="w-[40%] h-full bg-[#FFE500]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-[#00C2CB] mb-1">
                  <span>ENTJ (Leandro Colque)</span>
                  <span>20% (1 integrante)</span>
                </div>
                <div className="w-full h-5 bg-white/20 rounded-md overflow-hidden border border-black">
                  <div className="w-[20%] h-full bg-[#00C2CB]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-[#B6F23A] mb-1">
                  <span>ESFP (Einar Guillén)</span>
                  <span>20% (1 integrante)</span>
                </div>
                <div className="w-full h-5 bg-white/20 rounded-md overflow-hidden border border-black">
                  <div className="w-[20%] h-full bg-[#B6F23A]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono font-bold text-[#FF3DCB] mb-1">
                  <span>INFJ (Huascar Duran)</span>
                  <span>20% (1 integrante)</span>
                </div>
                <div className="w-full h-5 bg-white/20 rounded-md overflow-hidden border border-black">
                  <div className="w-[20%] h-full bg-[#FF3DCB]" />
                </div>
              </div>
            </div>
          </Card>
        </section>

      </div>
    </div>
  );
}
