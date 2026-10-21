import React from 'react';
import { 
  Settings, 
  Cpu, 
  Server, 
  Database, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  CheckCircle2,
  Clock,
  Activity,
  Layers,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Marker } from '../components/ui/Marker';
import { VideoCard } from '../components/ui/VideoCard';
import { Table, TableHeader, TableRow, TableHead, TableCell } from '../components/ui/Table';
import { Stepper } from '../components/ui/Stepper';
import { HybridCloud } from '../components/svg/HardwareIcons';

export default function GestionTecnologia() {
  const sectionsNav = [
    { id: 'sec-1', label: '1. Dirección TI' },
    { id: 'sec-2', label: '2. Hoja de Ruta' },
    { id: 'sec-3', label: '3. Los 4 Pilares' },
    { id: 'sec-4', label: '4. Infraestructura' },
    { id: 'sec-5', label: '5. Factor Humano' },
    { id: 'sec-6', label: '6. Beneficios' },
    { id: 'sec-7', label: '7. Ciclo de Vida' },
    { id: 'sec-8', label: '8. KPIs' },
  ];

  const pillars = [
    {
      num: '01',
      title: 'Infraestructura y Redes',
      desc: 'Diseñamos y mantenemos hardware, centros de datos y redes robustas, garantizando alta disponibilidad, seguridad estricta y consumo energético eficiente.',
      color: 'teal' as const,
    },
    {
      num: '02',
      title: 'Desarrollo y Gestión de Aplicaciones',
      desc: 'Creamos, actualizamos e integrando software adaptado a los procesos, asegurando que los sistemas hablen entre sí sin fricción.',
      color: 'yellow' as const,
    },
    {
      num: '03',
      title: 'Gobernanza y Analítica de Datos',
      desc: 'Recolectamos, analizamos y protegemos los datos cumpliendo rigurosamente las normativas de privacidad.',
      color: 'lime' as const,
    },
    {
      num: '04',
      title: 'Seguridad y Continuidad Operativa',
      desc: 'Ciberseguridad física, respaldo (backups) redundante, planes de recuperación ante desastres (DRP) y protocolos de continuidad del negocio (BCP).',
      color: 'magenta' as const,
    },
  ];

  const lifecycleSteps = [
    { number: '1', title: 'Planificación', desc: 'Definición de objetivos y diseño.' },
    { number: '2', title: 'Implementación', desc: 'Despliegue y configuración de sistemas.' },
    { number: '3', title: 'Monitoreo', desc: 'Vigilancia activa 24/7.' },
    { number: '4', title: 'Optimización', desc: 'Mejora continua y ajustes.' },
    { number: '5', title: 'Renovación', desc: 'Actualización de hardware obsoleto.' },
  ];

  return (
    <div className="w-full pb-28">
      {/* Page Hero Header (Fondo Teal) */}
      <header className="bg-[#00C2CB] bg-dots border-b-[4px] border-[#0A0A0A] py-16 md:py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <Badge color="black" className="mb-4">
              DIRECCIÓN TÉCNICA // IA MEDITECH
            </Badge>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-[#0A0A0A] uppercase leading-[0.9]">
              GESTIÓN DE <Marker color="yellow">TECNOLOGÍA</Marker>
            </h1>
            <p className="text-lg md:text-xl text-[#0A0A0A]/90 font-sans max-w-2xl mt-4 font-medium">
              Estrategia, arquitectura física, gobernanza y continuidad operativa para sistemas clínicos críticos.
            </p>
          </div>
          <div className="w-full max-w-[280px] bg-white p-4 rounded-2xl border-[3px] border-[#0A0A0A] shadow-brutal hidden md:block">
            <HybridCloud />
          </div>
        </div>
      </header>

      {/* Sticky Sub-Navigation Bar */}
      <div className="sticky top-20 z-30 bg-[#FAF5DC] border-b-[3px] border-[#0A0A0A] py-3 px-4 shadow-[0_4px_0_rgba(10,10,10,0.1)]">
        <div className="max-w-[1280px] mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {sectionsNav.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="px-3.5 py-1.5 rounded-full border-[2px] border-[#0A0A0A] bg-white hover:bg-[#FFE500] text-xs font-display font-bold uppercase tracking-wider whitespace-nowrap shadow-[2px_2px_0_#0A0A0A] transition-all"
            >
              {sec.label}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 mt-16 space-y-24">
        
        {/* Section 1 */}
        <section id="sec-1" className="scroll-mt-36">
          <Card color="white" className="p-8 md:p-12 mb-8">
            <Badge color="yellow" className="mb-4">SECCIÓN 01</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-6">
              1. Gestión y Dirección Tecnológica
            </h2>
            <p className="text-lg md:text-xl text-[#0A0A0A]/85 font-sans leading-relaxed">
              Consiste en conectar las metas del negocio con las herramientas digitales adecuadas. A través de una planificación rigurosa y la correcta asignación de recursos, se busca maximizar el valor de cada inversión y reducir posibles riesgos operativos.
            </p>
          </Card>

          <div className="max-w-2xl">
            <VideoCard
              title="Gestión tecnológica en las organizaciones"
              channel="Udearroba"
              url="https://www.youtube.com/watch?v=hYJ_YBo_djg"
            />
          </div>
        </section>

        {/* Section 2 */}
        <section id="sec-2" className="scroll-mt-36">
          <Card color="paper" className="p-8 md:p-12 mb-8">
            <Badge color="teal" className="mb-4">SECCIÓN 02</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-6">
              2. Estrategia y Hoja de Ruta Digital
            </h2>
            <p className="text-lg md:text-xl text-[#0A0A0A]/85 font-sans leading-relaxed mb-8">
              Antes de comprar servidores o escribir código, se necesita un plan claro. Una buena estrategia define hacia dónde va la organización y cómo la tecnología la llevará allí:
            </p>

            {/* List with brutalist badges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="bg-white p-5 rounded-xl border-[2px] border-[#0A0A0A] shadow-brutal-sm">
                <strong className="font-display text-lg uppercase block text-[#C1522A] mb-1">Alineación con el Negocio</strong>
                <p className="text-sm font-sans text-[#0A0A0A]/80">definimos prioridades técnicas que responden directamente a lo que la empresa quiere lograr.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border-[2px] border-[#0A0A0A] shadow-brutal-sm">
                <strong className="font-display text-lg uppercase block text-[#C1522A] mb-1">Metas e Indicadores Claves</strong>
                <p className="text-sm font-sans text-[#0A0A0A]/80">establecemos objetivos medibles para saber exactamente qué resultado esperar de cada proyecto.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border-[2px] border-[#0A0A0A] shadow-brutal-sm">
                <strong className="font-display text-lg uppercase block text-[#C1522A] mb-1">Adopción de Innovación</strong>
                <p className="text-sm font-sans text-[#0A0A0A]/80">evaluamos de forma continua tecnologías emergentes (IA, automatización) para integrarlas en el momento oportuno.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border-[2px] border-[#0A0A0A] shadow-brutal-sm">
                <div className="flex items-center gap-2 mb-1">
                  <strong className="font-display text-lg uppercase text-[#C1522A]">Gestión de riesgos tecnológicos</strong>
                  <Badge color="yellow" size="sm">NUEVO</Badge>
                </div>
                <p className="text-sm font-sans text-[#0A0A0A]/80">identificación de puntos únicos de falla, planes de contingencia (DRP), matrices de riesgo por criticidad.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border-[2px] border-[#0A0A0A] shadow-brutal-sm md:col-span-2">
                <div className="flex items-center gap-2 mb-1">
                  <strong className="font-display text-lg uppercase text-[#C1522A]">Cumplimiento normativo</strong>
                  <Badge color="yellow" size="sm">NUEVO</Badge>
                </div>
                <p className="text-sm font-sans text-[#0A0A0A]/80">alineación con estándares de salud digital y protección de datos.</p>
              </div>
            </div>

            {/* Stepped Horizon Roadmap Cards */}
            <div className="mb-6">
              <h3 className="font-display font-bold text-2xl uppercase text-[#0A0A0A] mb-4">
                Roadmap por horizontes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card color="yellow" rotation={-0.8} className="p-6">
                  <Badge color="black" className="mb-3">CORTO PLAZO (0-6 MESES)</Badge>
                  <h4 className="font-display font-bold text-xl uppercase mb-2">Estabilización y Mantenimiento</h4>
                  <p className="text-sm font-sans">Estabilización operativa y mantenimiento preventivo de infraestructura clínica base.</p>
                </Card>
                <Card color="teal" rotation={0.8} className="p-6">
                  <Badge color="black" className="mb-3">MEDIANO PLAZO (6-18 MESES)</Badge>
                  <h4 className="font-display font-bold text-xl uppercase mb-2">Migración Híbrida</h4>
                  <p className="text-sm font-sans">Migración hacia arquitectura híbrida local + nube elástica para IA MediTech.</p>
                </Card>
                <Card color="lime" rotation={-0.5} className="p-6">
                  <Badge color="black" className="mb-3">LARGO PLAZO (18+ MESES)</Badge>
                  <h4 className="font-display font-bold text-xl uppercase mb-2">Automatización Total</h4>
                  <p className="text-sm font-sans">Automatización total del monitoreo hospitalario mediante telemetría e IA predictiva.</p>
                </Card>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <VideoCard 
              title="7. Transformación Digital. Hoja de Ruta..."
              channel="Antonio Serrano Acitores"
              url="https://www.youtube.com/watch?v=v6w6_ZjT0KY"
            />
            <VideoCard 
              title="Qué es un roadmap tecnológico y cómo construirlo"
              channel="Sugerido"
              url="https://www.youtube.com/watch?v=2QVFwOXDP0Y"
            />
          </div>
        </section>

        {/* Section 3 */}
        <section id="sec-3" className="scroll-mt-36">
          <div className="mb-8">
            <Badge color="magenta" className="mb-4">SECCIÓN 03</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-4">
              3. Los Cuatro Pilares de la Infraestructura y Sistemas
            </h2>
            <p className="text-lg md:text-xl text-[#0A0A0A]/85 font-sans leading-relaxed max-w-3xl">
              Un plan estratégico solo funciona si la plataforma técnica que lo sostiene es sólida y confiable:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((pil, idx) => (
              <Card key={idx} color={pil.color} className="p-8 relative overflow-hidden group">
                <div className="text-8xl font-display font-bold text-[#0A0A0A]/10 absolute right-4 top-2 select-none group-hover:scale-110 transition-transform">
                  {pil.num}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl border-[2px] border-[#0A0A0A] bg-white text-[#0A0A0A] flex items-center justify-center font-display font-bold text-xl mb-4 shadow-[2px_2px_0_#0A0A0A]">
                    {pil.num}
                  </div>
                  <h3 className="text-2xl font-display font-bold uppercase tracking-wide mb-3">
                    {pil.title}
                  </h3>
                  <p className="text-base font-sans leading-relaxed opacity-95">
                    {pil.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section id="sec-4" className="scroll-mt-36">
          <Card color="white" className="p-8 md:p-12 mb-8 bg-dots">
            <Badge color="yellow" className="mb-4">SECCIÓN 04</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-6">
              4. ¿Qué es Infraestructura TI?
            </h2>
            
            {/* Big Quote Box */}
            <div className="bg-[#FFE500] p-6 md:p-8 rounded-2xl border-[3px] border-[#0A0A0A] shadow-brutal mb-8">
              <span className="text-5xl font-display font-bold text-[#0A0A0A] leading-none block mb-2">“</span>
              <p className="text-xl md:text-2xl font-display font-bold text-[#0A0A0A] uppercase leading-snug">
                La infraestructura TI es el conjunto de componentes físicos y lógicos —hardware, software, redes, centros de datos y personas— que permiten operar, almacenar y proteger la información de una organización.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="p-5 rounded-xl border-[2px] border-[#0A0A0A] bg-[#FAF5DC]">
                <strong className="font-display text-lg uppercase block text-[#C1522A] mb-1">Componentes</strong>
                <p className="text-sm md:text-base font-sans text-[#0A0A0A]/85">hardware (servidores, dispositivos IoT médicos, redes), software de gestión, sistemas de almacenamiento, personal técnico.</p>
              </div>
              <div className="p-5 rounded-xl border-[2px] border-[#0A0A0A] bg-[#FAF5DC]">
                <strong className="font-display text-lg uppercase block text-[#C1522A] mb-1">Modelos de despliegue</strong>
                <p className="text-sm md:text-base font-sans text-[#0A0A0A]/85">on-premise (control total, mayor costo), en la nube (escalabilidad, menor CAPEX), híbrido (balance entre control y flexibilidad — el modelo elegido por el equipo para IA MediTech).</p>
              </div>
              <div className="p-5 rounded-xl border-[2px] border-[#0A0A0A] bg-[#FAF5DC]">
                <strong className="font-display text-lg uppercase block text-[#C1522A] mb-1">Importancia en salud digital</strong>
                <p className="text-sm md:text-base font-sans text-[#0A0A0A]/85">la infraestructura debe garantizar cero interrupciones porque de ella depende información clínica crítica.</p>
              </div>
            </div>

            {/* 3 Deployment Models Cards with Hybrid Star */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-6 rounded-2xl border-[3px] border-[#0A0A0A] bg-white shadow-brutal-sm">
                <h4 className="font-display font-bold text-xl uppercase mb-2">ON-PREMISE</h4>
                <p className="text-sm font-sans text-[#0A0A0A]/80">Control total físico en hospital. Mayor costo inicial de capital (CAPEX).</p>
              </div>

              <div className="p-6 rounded-2xl border-[3px] border-[#0A0A0A] bg-[#C1522A] text-white shadow-brutal-lg relative -rotate-1">
                <div className="absolute -top-3 right-4">
                  <Badge color="yellow">★ MODELO TIRADORES</Badge>
                </div>
                <h4 className="font-display font-bold text-xl uppercase mb-2">HÍBRIDO</h4>
                <p className="text-sm font-sans opacity-95">Balance óptimo: inferencia clínica local ultrarrápida + nube para analítica pesada.</p>
              </div>

              <div className="p-6 rounded-2xl border-[3px] border-[#0A0A0A] bg-white shadow-brutal-sm">
                <h4 className="font-display font-bold text-xl uppercase mb-2">NUBE PÚBLICA</h4>
                <p className="text-sm font-sans text-[#0A0A0A]/80">Alta escalabilidad y elasticidad. Menor costo inicial, mayor dependencia de conectividad.</p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <VideoCard 
              title="¿Qué es Infraestructura TI?"
              channel="INFRA FACIL"
              url="https://www.youtube.com/watch?v=lgF3Kc-QCMQ"
            />
            <VideoCard 
              title="Infraestructura híbrida on-premise vs. cloud explicada"
              channel="Sugerido"
              url="https://www.youtube.com/watch?v=fOTuX-lmf24"
            />
          </div>
        </section>

        {/* Section 5 */}
        <section id="sec-5" className="scroll-mt-36">
          <Card color="white" className="p-8 md:p-12 mb-8">
            <Badge color="lime" className="mb-4">SECCIÓN 05</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-6">
              5. El Factor Humano: La Clave del Éxito
            </h2>
            <p className="text-lg md:text-xl text-[#0A0A0A]/85 font-sans leading-relaxed mb-8">
              La mejor tecnología no sirve de nada sin las personas correctas para operarla y hacerla evolucionar:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border-[2px] border-[#0A0A0A] bg-[#B6F23A] shadow-brutal-sm">
                <strong className="font-display text-lg uppercase block text-[#0A0A0A] mb-1">Capacitación Continua</strong>
                <p className="text-sm font-sans text-[#0A0A0A]/85">mantenemos al equipo actualizado en las últimas herramientas y lenguajes del mercado.</p>
              </div>
              <div className="p-5 rounded-xl border-[2px] border-[#0A0A0A] bg-[#00C2CB] shadow-brutal-sm">
                <strong className="font-display text-lg uppercase block text-[#0A0A0A] mb-1">Atracción de Talento</strong>
                <p className="text-sm font-sans text-[#0A0A0A]/85">incorporamos y retenemos a los mejores especialistas para áreas clave del desarrollo.</p>
              </div>
              <div className="p-5 rounded-xl border-[2px] border-[#0A0A0A] bg-[#FFE500] shadow-brutal-sm">
                <strong className="font-display text-lg uppercase block text-[#0A0A0A] mb-1">Cultura de Innovación</strong>
                <p className="text-sm font-sans text-[#0A0A0A]/85">promovemos un ambiente creativo y colaborativo donde se prueban nuevas ideas de forma constante.</p>
              </div>
              <div className="p-5 rounded-xl border-[2px] border-[#0A0A0A] bg-[#FF3DCB] text-white shadow-brutal-sm">
                <div className="flex items-center gap-2 mb-1">
                  <strong className="font-display text-lg uppercase text-white">Liderazgo y bienestar del equipo</strong>
                  <Badge color="black" size="sm">NUEVO</Badge>
                </div>
                <p className="text-sm font-sans opacity-95">fomentamos comunicación abierta, balance de carga de trabajo y reconocimiento del esfuerzo técnico.</p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <VideoCard title="El factor humano es la clave del éxito" channel="MarketingDirecto" url="https://www.youtube.com/watch?v=zTBhxtdijXE" />
            <VideoCard title="El Recurso Humano capacitado es factor clave del éxito" channel="TEDx Talks" url="https://www.youtube.com/watch?v=ChGjozKn4NY" />
            <VideoCard title="Cómo retener talento técnico en equipos de TI" channel="Sugerido" url="https://www.youtube.com/watch?v=65HKm30UUAs" />
          </div>
        </section>

        {/* Section 6 */}
        <section id="sec-6" className="scroll-mt-36">
          <Card color="ink" className="p-8 md:p-12 mb-8">
            <Badge color="yellow" className="mb-4">SECCIÓN 06 // BENEFICIOS</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#FFE500] uppercase mb-8">
              6. ¿Qué Ganas al Implementar una Correcta Gestión Tecnológica?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-[#FAF5DC]">
              <div className="p-6 rounded-xl border-[2px] border-white/20 bg-white/5">
                <div className="w-8 h-8 rounded-full bg-[#FFE500] text-[#0A0A0A] flex items-center justify-center font-bold mb-3">1</div>
                <strong className="font-display text-xl uppercase block text-white mb-2">Mayor Eficiencia:</strong>
                <p className="text-sm font-sans text-gray-300">procesos más rápidos, menos fallas y reducción directa en costos operativos.</p>
              </div>

              <div className="p-6 rounded-xl border-[2px] border-white/20 bg-white/5">
                <div className="w-8 h-8 rounded-full bg-[#00C2CB] text-[#0A0A0A] flex items-center justify-center font-bold mb-3">2</div>
                <strong className="font-display text-xl uppercase block text-white mb-2">Decisiones Inteligentes:</strong>
                <p className="text-sm font-sans text-gray-300">estrategias basadas en datos reales y análisis profundos, no en suposiciones.</p>
              </div>

              <div className="p-6 rounded-xl border-[2px] border-white/20 bg-white/5">
                <div className="w-8 h-8 rounded-full bg-[#B6F23A] text-[#0A0A0A] flex items-center justify-center font-bold mb-3">3</div>
                <strong className="font-display text-xl uppercase block text-white mb-2">Ventaja Competitiva:</strong>
                <p className="text-sm font-sans text-gray-300">respuestas más ágiles ante el mercado y una experiencia superior para los clientes finales.</p>
              </div>

              <div className="p-6 rounded-xl border-[2px] border-white/20 bg-white/5">
                <div className="w-8 h-8 rounded-full bg-[#FF3DCB] text-white flex items-center justify-center font-bold mb-3">4</div>
                <strong className="font-display text-xl uppercase block text-white mb-2">Escalabilidad:</strong>
                <p className="text-sm font-sans text-gray-300">capacidad de crecer sin rediseñar toda la arquitectura.</p>
              </div>

              <div className="p-6 rounded-xl border-[2px] border-white/20 bg-white/5 md:col-span-2 lg:col-span-2">
                <div className="w-8 h-8 rounded-full bg-[#C1522A] text-white flex items-center justify-center font-bold mb-3">5</div>
                <strong className="font-display text-xl uppercase block text-white mb-2">Reducción de downtime:</strong>
                <p className="text-sm font-sans text-gray-300">menor tiempo de inactividad gracias a monitoreo proactivo.</p>
              </div>
            </div>
          </Card>

          <div className="max-w-2xl">
            <VideoCard title="¿Qué es la Gestión Tecnológica?" channel="Instituto Artek" url="https://www.youtube.com/watch?v=fOC7klUl_iw" />
          </div>
        </section>

        {/* Section 7 */}
        <section id="sec-7" className="scroll-mt-36">
          <div className="mb-8">
            <Badge color="yellow" className="mb-4">SECCIÓN 07</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-4">
              7. Ciclo de Vida de la Gestión Tecnológica
            </h2>
            <p className="text-lg md:text-xl text-[#0A0A0A]/85 font-sans leading-relaxed">
              Un flujo iterativo de 5 etapas que asegura mejora continua y actualización permanente:
            </p>
          </div>

          <Stepper steps={lifecycleSteps} />
        </section>

        {/* Section 8 */}
        <section id="sec-8" className="scroll-mt-36">
          <div className="mb-8">
            <Badge color="terracota" className="mb-4">SECCIÓN 08 // ACUERDOS DE NIVEL</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-4">
              8. Indicadores Clave (KPIs)
            </h2>
            <p className="text-lg text-[#0A0A0A]/80 font-sans">
              Metas operativas vinculantes para el equipo de Hardware e Infraestructura:
            </p>
          </div>

          <Table className="mb-10">
            <TableHeader>
              <tr>
                <TableHead>Indicador</TableHead>
                <TableHead className="text-right">Meta</TableHead>
              </tr>
            </TableHeader>
            <tbody>
              <TableRow>
                <TableCell className="font-bold">Disponibilidad del sistema</TableCell>
                <TableCell className="text-right font-display font-bold text-xl text-[#C1522A]">99.9%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Tiempo medio de reparación (MTTR)</TableCell>
                <TableCell className="text-right font-display font-bold text-xl text-[#C1522A]">&lt; 2 horas</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Tiempo de respuesta de soporte (Helpdesk)</TableCell>
                <TableCell className="text-right font-display font-bold text-xl text-[#C1522A]">&lt; 30 minutos</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Incidentes críticos por trimestre</TableCell>
                <TableCell className="text-right font-display font-bold text-xl text-[#C1522A]">0</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </section>

      </div>
    </div>
  );
}
