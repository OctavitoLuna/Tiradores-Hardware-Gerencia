import React from 'react';
import { 
  Zap, 
  Cpu, 
  Globe, 
  Dna, 
  Atom, 
  Radio, 
  Leaf, 
  TrendingUp, 
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Marker } from '../components/ui/Marker';
import { VideoCard } from '../components/ui/VideoCard';
import { TriangleProgress } from '../components/svg/HardwareIcons';

export default function CienciaTecnologia() {
  const trends = [
    {
      title: 'Inteligencia Artificial',
      desc: 'automatización avanzada, aprendizaje automático y optimización masiva de datos.',
      color: 'teal' as const,
      icon: <Cpu size={24} />,
    },
    {
      title: 'Biotecnología y Nanotecnología',
      desc: 'medicina de precisión personalizada y desarrollo de nuevos materiales con propiedades avanzadas.',
      color: 'magenta' as const,
      icon: <Dna size={24} />,
    },
    {
      title: 'Computación Cuántica',
      desc: 'potencial inédito para procesar información a velocidades antes inalcanzables.',
      color: 'blue' as const,
      icon: <Atom size={24} />,
    },
    {
      title: 'Internet de las Cosas (IoT) en salud',
      desc: 'dispositivos médicos conectados que monitorean pacientes en tiempo real.',
      color: 'yellow' as const,
      icon: <Radio size={24} />,
      isNew: true,
    },
    {
      title: 'Edge Computing',
      desc: 'procesamiento de datos cerca del origen para reducir la latencia en decisiones clínicas críticas.',
      color: 'lime' as const,
      icon: <TrendingUp size={24} />,
      isNew: true,
    },
    {
      title: 'Green IT / Sostenibilidad tecnológica',
      desc: 'reducción del consumo energético de centros de datos y economía circular en el hardware.',
      color: 'paper' as const,
      icon: <Leaf size={24} />,
      isNew: true,
    },
  ];

  const timelineMilestones = [
    { title: 'Computación en la nube', color: 'bg-[#FFE500]' },
    { title: 'IoT médico', color: 'bg-[#00C2CB]' },
    { title: 'Analítica en tiempo real', color: 'bg-[#B6F23A]' },
    { title: 'IA aplicada a diagnóstico', color: 'bg-[#FF3DCB]' },
    { title: 'Infraestructura híbrida autoescalable', color: 'bg-[#C1522A]' },
  ];

  return (
    <div className="w-full pb-28">
      {/* Header Hero (Fondo Amarillo con Triángulo SVG) */}
      <header className="bg-[#FFE500] bg-dots border-b-[4px] border-[#0A0A0A] py-16 md:py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <Badge color="black" className="mb-4">
              EL TRIÁNGULO DEL PROGRESO
            </Badge>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-[#0A0A0A] uppercase leading-[0.9]">
              CIENCIA, TECNOLOGÍA E <Marker color="terracota">INNOVACIÓN</Marker>
            </h1>
            <p className="text-lg md:text-xl text-[#0A0A0A]/90 font-sans mt-4 font-medium leading-relaxed">
              El ecosistema dinámico donde el conocimiento puro, las herramientas aplicadas y la creatividad resuelven los retos de la salud moderna.
            </p>
          </div>
          <div className="w-full max-w-[320px] bg-white p-4 rounded-2xl border-[3px] border-[#0A0A0A] shadow-brutal flex items-center justify-center">
            <TriangleProgress />
          </div>
        </div>
      </header>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 mt-16 space-y-24">
        
        {/* Intro */}
        <section>
          <Card color="white" className="p-8 md:p-12 mb-8 bg-dots">
            <Badge color="yellow" className="mb-4">INTRODUCCIÓN // VISIÓN INTEGRAL</Badge>
            <p className="text-lg md:text-xl text-[#0A0A0A]/90 font-sans leading-relaxed">
              El avance humano no ocurre por casualidad. Se sostiene sobre un ecosistema dinámico donde el conocimiento puro, las herramientas aplicadas y la creatividad se combinan para resolver los retos más complejos del mundo actual. Cuando la ciencia explica el entorno, la tecnología lo transforma en soluciones prácticas y la creatividad cuestiona su propósito, el progreso deja de ser un conjunto de hallazgos aislados. Se convierte en un motor continuo capaz de elevar la calidad de vida y abrir nuevas posibilidades para el futuro.
            </p>
          </Card>

          <div className="max-w-2xl">
            <VideoCard 
              title="Innovation (An animated short)" 
              channel="chickenbreadd" 
              url="https://www.youtube.com/watch?v=yayL1Eslz0I" 
            />
          </div>
        </section>

        {/* Section 1 */}
        <section>
          <Card color="paper" className="p-8 md:p-12 mb-8">
            <Badge color="teal" className="mb-4">SECCIÓN 01</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-8">
              1. Las Bases del Conocimiento y la Creación
            </h2>

            <div className="space-y-4 mb-8">
              <div className="p-5 rounded-xl border-[2px] border-[#0A0A0A] bg-white shadow-brutal-sm">
                <strong className="font-display text-lg uppercase block text-[#C1522A] mb-1">Investigación y Método Científico:</strong>
                <p className="text-base font-sans text-[#0A0A0A]/85">la ciencia abarca desde las ciencias naturales y sociales hasta las formales; se vale de observación, hipótesis, experimentación y conclusiones para descubrir cómo funciona nuestro entorno.</p>
              </div>

              <div className="p-5 rounded-xl border-[2px] border-[#0A0A0A] bg-white shadow-brutal-sm">
                <strong className="font-display text-lg uppercase block text-[#C1522A] mb-1">Herramientas e Ingeniería:</strong>
                <p className="text-base font-sans text-[#0A0A0A]/85">la tecnología toma esos descubrimientos científicos y los transforma en soluciones tangibles: componentes físicos (hardware), sistemas lógicos (software) y metodologías de gestión.</p>
              </div>

              <div className="p-5 rounded-xl border-[2px] border-[#0A0A0A] bg-white shadow-brutal-sm">
                <strong className="font-display text-lg uppercase block text-[#C1522A] mb-1">El Acto de Innovar:</strong>
                <p className="text-base font-sans text-[#0A0A0A]/85">generar valor no se limita a inventar algo nuevo, sino a implementarlo con éxito, ya sea mediante mejoras incrementales, cambios significativos (disruptivos) o transformaciones completas del mercado (radicales).</p>
              </div>

              <div className="p-5 rounded-xl border-[2px] border-[#0A0A0A] bg-white shadow-brutal-sm">
                <div className="flex items-center gap-2 mb-1">
                  <strong className="font-display text-lg uppercase text-[#C1522A]">Pensamiento crítico y experimentación:</strong>
                  <Badge color="yellow" size="sm">NUEVO</Badge>
                </div>
                <p className="text-base font-sans text-[#0A0A0A]/85">validación constante de hipótesis técnicas mediante pruebas controladas (testing, entornos sandbox) antes de producción.</p>
              </div>

              <div className="p-5 rounded-xl border-[2px] border-[#0A0A0A] bg-white shadow-brutal-sm">
                <div className="flex items-center gap-2 mb-1">
                  <strong className="font-display text-lg uppercase text-[#C1522A]">Interdisciplinariedad:</strong>
                  <Badge color="yellow" size="sm">NUEVO</Badge>
                </div>
                <p className="text-base font-sans text-[#0A0A0A]/85">la innovación real surge del cruce entre ingeniería de hardware, ciencia de datos y diseño centrado en el usuario.</p>
              </div>
            </div>
          </Card>

          <div className="max-w-2xl">
            <VideoCard 
              title="El método científico explicado" 
              channel="Sugerido" 
              url="https://www.youtube.com/watch?v=HraxSpt__II" 
            />
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <div className="mb-8">
            <Badge color="magenta" className="mb-4">SECCIÓN 02</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-4">
              2. Impacto Económico y Desarrollo de Mercados
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <Card color="yellow" className="p-8">
              <h3 className="font-display font-bold text-2xl uppercase mb-3">Competitividad y Productividad</h3>
              <p className="text-base font-sans leading-relaxed">Optimiza procesos en todas las industrias, impulsando el crecimiento del PIB (referentes globales como Silicon Valley e Israel).</p>
            </Card>

            <Card color="teal" className="p-8">
              <h3 className="font-display font-bold text-2xl uppercase mb-3">Nuevas Oportunidades</h3>
              <p className="text-base font-sans leading-relaxed">Fomenta la creación de nuevos modelos de negocio y empleos de alto valor agregado.</p>
            </Card>

            <Card color="lime" className="p-8">
              <h3 className="font-display font-bold text-2xl uppercase mb-3">Atracción de Capital</h3>
              <p className="text-base font-sans leading-relaxed">Los polos de innovación atraen inversión privada y retienen al mejor talento global.</p>
            </Card>

            <Card color="terracota" className="p-8">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-display font-bold text-2xl uppercase">Impacto en la salud digital en Bolivia</h3>
                <Badge color="yellow" size="sm">NUEVO</Badge>
              </div>
              <p className="text-base font-sans leading-relaxed opacity-95">La inversión en infraestructura tecnológica médica reduce costos hospitalarios y mejora el acceso a diagnósticos en zonas remotas mediante telemedicina.</p>
            </Card>
          </div>

          <div className="max-w-2xl">
            <VideoCard 
              title="Cómo la tecnología impulsa el crecimiento económico" 
              channel="Sugerido" 
              url="https://www.youtube.com/watch?v=zhCgRaqb4zo" 
            />
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <Card color="white" className="p-8 md:p-12 mb-8 bg-dots">
            <Badge color="blue" className="mb-4">SECCIÓN 03 // VANGUARDIA</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-8">
              3. Tendencias Globales y el Futuro Próximo
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trends.map((t, idx) => (
                <Card key={idx} color={t.color} className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl border-[2px] border-[#0A0A0A] bg-white text-[#0A0A0A] flex items-center justify-center shadow-[2px_2px_0_#0A0A0A]">
                        {t.icon}
                      </div>
                      {t.isNew && <Badge color="black" size="sm">NUEVO</Badge>}
                    </div>
                    <h3 className="font-display font-bold text-xl uppercase mb-2">
                      {t.title}
                    </h3>
                    <p className="text-sm font-sans leading-relaxed opacity-90">
                      {t.desc}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <VideoCard 
              title="Tendencias tecnológicas 2026: IA, IoT y computación cuántica" 
              channel="Sugerido" 
              url="https://www.youtube.com/watch?v=n0Tosd_kTVY" 
            />
            <VideoCard 
              title="Qué es el Edge Computing y por qué importa en salud" 
              channel="Sugerido" 
              url="https://www.youtube.com/watch?v=hRhl6HepzZc" 
            />
          </div>
        </section>

        {/* Sections 4 & 5 */}
        <section className="grid md:grid-cols-2 gap-8">
          <Card color="ink" className="p-8 md:p-10">
            <Badge color="yellow" className="mb-4">REFLEXIÓN</Badge>
            <h2 className="text-3xl font-display font-bold text-[#FFE500] uppercase mb-4">
              ¿Por Qué Apoyar este Ecosistema?
            </h2>
            <p className="text-base sm:text-lg font-sans text-gray-200 leading-relaxed">
              Apoyar la investigación y la innovación es fundamental para un crecimiento sostenible. La clave del éxito futuro reside en la colaboración estratégica entre el sector científico, la industria tecnológica y la sociedad para asegurar que los avances generen un beneficio equitativo y duradero.
            </p>
          </Card>

          <Card color="terracota" className="p-8 md:p-10">
            <Badge color="white" className="mb-4">APLICACIÓN DIRECTA</Badge>
            <h2 className="text-3xl font-display font-bold text-white uppercase mb-4">
              Aplicado a IA MediTech
            </h2>
            <p className="text-base sm:text-lg font-sans text-white/95 leading-relaxed">
              En nuestro equipo, este triángulo se traduce en decisiones concretas: la ciencia de datos guía qué infraestructura necesitamos, la ingeniería de hardware la construye, y la innovación constante en procesos de mantenimiento y monitoreo nos permite sostener sistemas de salud inteligente sin interrupciones en Bolivia.
            </p>
          </Card>
        </section>

        {/* Section 6 - Timeline */}
        <section>
          <div className="text-center mb-12">
            <Badge color="teal" className="mb-3">HOJA DE RUTA EVOLUTIVA</Badge>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-[#0A0A0A] uppercase">
              Línea de Tiempo de <Marker color="yellow">Evolución</Marker>
            </h2>
          </div>

          {/* Stepped zigzag line */}
          <div className="relative max-w-4xl mx-auto space-y-6">
            {timelineMilestones.map((m, idx) => (
              <div
                key={idx}
                className="flex items-center gap-6 p-6 rounded-2xl border-[3px] border-[#0A0A0A] bg-white shadow-brutal brutal-card-hover"
              >
                <div className={`w-12 h-12 rounded-xl border-[2px] border-[#0A0A0A] ${m.color} flex items-center justify-center font-display font-bold text-xl shadow-[2px_2px_0_#0A0A0A] shrink-0`}>
                  0{idx + 1}
                </div>
                <h4 className="font-display font-bold text-xl sm:text-2xl uppercase text-[#0A0A0A]">
                  {m.title}
                </h4>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
