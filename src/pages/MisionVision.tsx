import React, { useState } from 'react';
import { 
  Target, 
  Eye, 
  Cpu, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  XCircle,
  Clock, 
  Sparkles, 
  Activity, 
  Layers, 
  Award,
  HelpCircle
} from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Marker } from '../components/ui/Marker';
import { VideoCard } from '../components/ui/VideoCard';
import { Tabs } from '../components/ui/Tabs';
import { GoldenCircle } from '../components/svg/HardwareIcons';

export default function MisionVision() {
  const [activeHorizon, setActiveHorizon] = useState('h1');

  const coreValues = [
    {
      num: '01',
      title: "Excelencia Técnica y Tolerancia a Fallos",
      desc: "En el sector de la salud digital no existe margen de error admisible. Cada servidor, cable de fibra y switch se diseña bajo esquemas de redundancia activa (N+1) para asegurar disponibilidad continua en quirófanos y unidades de terapia intensiva.",
      behaviors: "Pruebas de estrés periódicas, simulacros de failover y mantenimiento proactivo sin interrupción.",
      color: 'teal' as const,
      icon: <Cpu size={28} />
    },
    {
      num: '02',
      title: "Soberanía y Seguridad de Datos Clínicos",
      desc: "La privacidad de los pacientes es un derecho fundamental e innegociable. Custodiamos físicamente los registros clínicos bajo estrictos estándares de aislamiento de red y cifrado de hardware en reposo y en tránsito.",
      behaviors: "Apego riguroso a normativas de confidencialidad médica, control biométrico de acceso y auditoría de logs.",
      color: 'yellow' as const,
      icon: <ShieldCheck size={28} />
    },
    {
      num: '03',
      title: "Colaboración Multidisciplinaria Ágil",
      desc: "La infraestructura no opera de forma aislada; es el puente que une al software inteligente, los médicos especialistas y la administración clínica. Promovemos una cultura de co-creación y comunicación transparente.",
      behaviors: "Ceremonias Scrum rigurosas, retroalimentación constante con el equipo de Cloud y empatía con el personal de salud.",
      color: 'magenta' as const,
      icon: <Users size={28} />
    },
    {
      num: '04',
      title: "Innovación Responsable y Eficiencia Financiera",
      desc: "Implementamos tecnologías de vanguardia (Edge AI, IoT biomédico) de forma sustentable, equilibrando cuidadosamente las inversiones de capital (CAPEX) con los costos operativos (OPEX) del proyecto.",
      behaviors: "Evaluación de retorno de inversión médica, dimensionamiento energético eficiente y reciclaje tecnológico responsable.",
      color: 'lime' as const,
      icon: <TrendingUp size={28} />
    }
  ];

  const horizonsData = {
    h1: {
      tag: "HORIZONTE 1 (CORTO PLAZO — 2026)",
      title: "Estabilización y Despliegue de Base Clínica",
      goals: [
        "Garantizar disponibilidad operativa del 99.9% en el entorno hospitalario primario.",
        "Implementar el sistema de trazabilidad de inventario físico en tiempo real (100% de activos auditados).",
        "Estandarizar los protocolos de contingencia DRP (Disaster Recovery Plan) con RPO < 15 min y RTO < 30 min.",
        "Homologación inicial de normativas de equipamiento médico y protección eléctrica grado hospitalario."
      ],
      color: 'bg-[#FFE500]'
    },
    h2: {
      tag: "HORIZONTE 2 (MEDIANO PLAZO — 2027)",
      title: "Integración Híbrida y Expansión Edge Computing",
      goals: [
        "Desplegar micro datacenters locales (Edge Nodes) en 3 centros hospitalarios estratégicos de Bolivia.",
        "Integración bidireccional transparente entre almacenamiento on-premise y el cluster elástico de IA en la nube.",
        "Optimización del consumo energético del área mediante sistemas de refrigeración inteligente y fuentes UPS redundantes.",
        "Obtención de certificaciones de calidad de infraestructura médica ISO 13485 e ISO/IEC 27001."
      ],
      color: 'bg-[#00C2CB]'
    },
    h3: {
      tag: "HORIZONTE 3 (LARGO PLAZO — 2028 - 2030)",
      title: "Soberanía Tecnológica y Red Nacional Inteligente",
      goals: [
        "Consolidar a Tiradores como el referente nacional en infraestructura física para telemedicina y cirugía asistida por IA.",
        "Arquitectura autónoma con orquestación inteligente capaz de auto-reparar fallos de hardware en milisegundos.",
        "Soporte federado a la red de salud pública y privada de Bolivia, garantizando soberanía de datos en territorio nacional.",
        "Cero huella de carbono neta en centros de datos médicos propios mediante adopción de energías limpias."
      ],
      color: 'bg-[#B6F23A]'
    }
  };

  return (
    <div className="w-full pb-28">
      {/* Header Hero (Fondo Amarillo) */}
      <header className="bg-[#FFE500] bg-dots border-b-[4px] border-[#0A0A0A] py-16 md:py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto text-center">
          <Badge color="black" className="mb-4">
            PLANEACIÓN ESTRATÉGICA INSTITUCIONAL
          </Badge>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-[#0A0A0A] uppercase leading-[0.9]">
            MISIÓN Y <Marker color="terracota">VISIÓN</Marker>
          </h1>
          <p className="text-lg md:text-xl text-[#0A0A0A]/90 font-sans max-w-2xl mx-auto mt-4 font-medium">
            Propósito, Rumbo y Valores del Área de Hardware e Infraestructura • Tiradores
          </p>
        </div>
      </header>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 mt-16 space-y-24">
        
        {/* 1. Marco Teórico y Conceptual + Círculo Dorado */}
        <section>
          <Card color="white" className="p-8 md:p-12 mb-8 bg-dots">
            <Badge color="yellow" className="mb-4">SECCIÓN 01 // FUNDAMENTOS</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-6">
              1. Fundamentos: Misión, Visión y Propósito
            </h2>
            <p className="text-lg md:text-xl text-[#0A0A0A]/90 font-sans leading-relaxed mb-8">
              En proyectos de alta complejidad tecnológica y sanitaria como <strong>IA MediTech</strong>, la <strong>misión</strong> y la <strong>visión</strong> no constituyen ejercicios de redacción retórica; representan directrices de ingeniería y gobernanza que dictan desde la topología de un cableado estructurado hasta la asignación de presupuestos CAPEX/OPEX.
            </p>

            {/* Comparación Misión vs Visión */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="p-6 rounded-2xl border-[3px] border-[#0A0A0A] bg-[#FAF5DC] shadow-brutal-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C1522A] text-white flex items-center justify-center font-bold">
                    <Target size={20} />
                  </div>
                  <h3 className="font-display font-bold text-2xl uppercase text-[#0A0A0A]">Misión: El Presente Operativo</h3>
                </div>
                <p className="text-sm font-sans text-[#0A0A0A]/80 mb-4">
                  Define la <strong>razón de ser fundamental</strong> de la organización en el aquí y el ahora. Responde taxativamente a tres preguntas:
                </p>
                <ul className="text-sm font-sans space-y-2 text-[#0A0A0A]">
                  <li>• <strong>¿Qué hacemos?</strong> Diseñar, implementar y mantener la base física y de red.</li>
                  <li>• <strong>¿Para quién?</strong> Para el personal médico, pacientes y sistemas de software clínico.</li>
                  <li>• <strong>¿Cuál es nuestro valor diferencial?</strong> Disponibilidad 99.9%, latencia ultra-baja y tolerancia a fallos.</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl border-[3px] border-[#0A0A0A] bg-[#FAF5DC] shadow-brutal-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#3B6BFF] text-white flex items-center justify-center font-bold">
                    <Eye size={20} />
                  </div>
                  <h3 className="font-display font-bold text-2xl uppercase text-[#0A0A0A]">Visión: El Futuro Aspiracional</h3>
                </div>
                <p className="text-sm font-sans text-[#0A0A0A]/80 mb-4">
                  Pinta el cuadro del <strong>estado futuro deseado</strong> al que la empresa aspira llegar a largo plazo. Cumple tres funciones vitales:
                </p>
                <ul className="text-sm font-sans space-y-2 text-[#0A0A0A]">
                  <li>• <strong>Inspirar y unificar:</strong> Provee un destino compartido para todos los ingenieros del equipo.</li>
                  <li>• <strong>Establecer el estándar de excelencia:</strong> Marca el listón técnico que guía la innovación continua.</li>
                  <li>• <strong>Anticipar la evolución:</strong> Prepara a la infraestructura para los retos médicos de la próxima década.</li>
                </ul>
              </div>
            </div>

            {/* Círculo Dorado de Sinek con SVG Interactivo */}
            <div className="p-8 rounded-2xl border-[3px] border-[#0A0A0A] bg-white shadow-brutal">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/3 flex justify-center">
                  <GoldenCircle />
                </div>
                <div className="lg:w-2/3 space-y-4">
                  <Badge color="terracota">SIMON SINEK // START WITH WHY</Badge>
                  <h3 className="text-2xl md:text-3xl font-display font-bold uppercase text-[#0A0A0A]">
                    El Círculo Dorado Aplicado a Nuestra Infraestructura
                  </h3>
                  <div className="space-y-3 text-sm md:text-base font-sans">
                    <div className="p-3 bg-[#FAF5DC] rounded-xl border-[2px] border-[#0A0A0A]">
                      <strong className="font-display uppercase text-sm block text-[#C1522A]">01 • ¿Por qué? (Why) — Propósito Humano</strong>
                      <p className="text-xs md:text-sm text-[#0A0A0A]/80">Porque cada segundo que un sistema clínico permanece sin conexión puede costar vidas. Existimos para garantizar que la tecnología médica nunca falle cuando un paciente la necesita.</p>
                    </div>
                    <div className="p-3 bg-[#FAF5DC] rounded-xl border-[2px] border-[#0A0A0A]">
                      <strong className="font-display uppercase text-sm block text-[#00C2CB]">02 • ¿Cómo? (How) — Estrategia y Metodología</strong>
                      <p className="text-xs md:text-sm text-[#0A0A0A]/80">A través de una arquitectura híbrida equilibrada, diseño modular redundante (N+1), agilidad Scrum y estricta observancia de normativas de salud internacionales.</p>
                    </div>
                    <div className="p-3 bg-[#FAF5DC] rounded-xl border-[2px] border-[#0A0A0A]">
                      <strong className="font-display uppercase text-sm block text-[#0A0A0A]">03 • ¿Qué? (What) — Solución Física Concreta</strong>
                      <p className="text-xs md:text-sm text-[#0A0A0A]/80">Servidores de alta disponibilidad, centros de cómputo hospitalarios, cableado estructurado certificado, gateways IoT y soporte técnico en tiempo real.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="max-w-2xl">
            <VideoCard title="Mision y Vision" url="https://www.youtube.com/watch?v=l7uhrPleR6Y" />
          </div>
        </section>

        {/* 2. Declaraciones Oficiales de Misión y Visión (DOS GRANDES TARJETAS LADO A LADO) */}
        <section>
          <div className="mb-8">
            <Badge color="yellow" className="mb-4">DECLARACIONES OFICIALES</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-4">
              2. Misión y Visión de Tiradores — Hardware
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Tarjeta Misión (Terracota) */}
            <Card color="terracota" rotation={-0.8} className="p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Badge color="white">DECLARACIÓN OFICIAL</Badge>
                  <div className="w-12 h-12 rounded-xl bg-white text-[#C1522A] border-[2px] border-[#0A0A0A] flex items-center justify-center font-bold">
                    <Target size={24} />
                  </div>
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white uppercase mb-6">
                  MISIÓN
                </h3>
                <blockquote className="text-lg md:text-xl font-sans leading-relaxed italic bg-black/20 p-6 rounded-2xl border-[2px] border-white/30 mb-6 text-white">
                  "Diseñar, desplegar y mantener una arquitectura física de alto rendimiento, latencia baja y máxima disponibilidad, que garantice la continuidad operativa de los sistemas clínicos críticos en el hospital; colaborando de manera estratégica con el equipo de Infraestructura Cloud para articular un ecosistema híbrido balanceado, seguro y eficiente, que cumpla con las normativas locales de salud y optimice los recursos operacionales y financieros del proyecto IA MediTech."
                </blockquote>
              </div>
              <div className="space-y-1.5 text-xs text-white/90 font-sans pt-4 border-t border-white/20">
                <span className="font-display font-bold uppercase tracking-wider block text-[#FFE500]">Dimensiones Clave:</span>
                <p>• <strong>Alcance Operativo:</strong> Cero interrupciones en entornos clínicos de misión crítica.</p>
                <p>• <strong>Articulación Estratégica:</strong> Sinergia balanceada entre Hardware local y Cloud elástica.</p>
                <p>• <strong>Sostenibilidad:</strong> Racionalización financiera inteligente (CAPEX/OPEX).</p>
              </div>
            </Card>

            {/* Tarjeta Visión (Azul) */}
            <Card color="blue" rotation={0.8} className="p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Badge color="yellow">DESTINO ESTRATÉGICO</Badge>
                  <div className="w-12 h-12 rounded-xl bg-[#FFE500] text-[#0A0A0A] border-[2px] border-[#0A0A0A] flex items-center justify-center font-bold">
                    <Eye size={24} />
                  </div>
                </div>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-white uppercase mb-6">
                  VISIÓN
                </h3>
                <blockquote className="text-lg md:text-xl font-sans leading-relaxed italic bg-black/20 p-6 rounded-2xl border-[2px] border-white/30 mb-6 text-white">
                  "Ser el pilar físico e inquebrantable de la infraestructura de IA MediTech, reconocido por la excelencia técnica en procesamiento local, soberanía de datos y tolerancia a fallos, consolidándose como un modelo de referencia en la integración armónica entre la infraestructura local y la elasticidad de la nube, para soportar sin interrupciones la evolución de la medicina inteligente en Bolivia."
                </blockquote>
              </div>
              <div className="space-y-1.5 text-xs text-white/90 font-sans pt-4 border-t border-white/20">
                <span className="font-display font-bold uppercase tracking-wider block text-[#FFE500]">Aspiraciones de Impacto:</span>
                <p>• <strong>Liderazgo Regional:</strong> Modelo de referencia nacional en infraestructura de salud inteligente.</p>
                <p>• <strong>Soberanía de Datos:</strong> Seguridad física in situ de la información médica de los bolivianos.</p>
                <p>• <strong>Evolución Futura:</strong> Preparados para soportar algoritmos biomédicos de próxima generación.</p>
              </div>
            </Card>
          </div>

          {/* Matriz de Desglose en 4 tarjetas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card color="white" className="p-6">
              <div className="w-10 h-10 rounded-xl bg-[#C1522A] text-white flex items-center justify-center font-bold mb-4">
                <Activity size={20} />
              </div>
              <h4 className="font-display font-bold text-xl uppercase mb-2">Continuidad Crítica</h4>
              <p className="text-sm font-sans text-[#0A0A0A]/80 leading-relaxed">
                Sistemas como historias clínicas digitales y monitores de quirófano no admiten caídas; nuestra infraestructura garantiza 99.9% de uptime operativo.
              </p>
            </Card>

            <Card color="white" className="p-6">
              <div className="w-10 h-10 rounded-xl bg-[#00C2CB] text-[#0A0A0A] flex items-center justify-center font-bold mb-4">
                <Cpu size={20} />
              </div>
              <h4 className="font-display font-bold text-xl uppercase mb-2">Ecosistema Híbrido</h4>
              <p className="text-sm font-sans text-[#0A0A0A]/80 leading-relaxed">
                Procesamiento local ultra-rápido para inferencia de IA en tiempo real combinado con la escalabilidad y respaldo masivo en nube pública.
              </p>
            </Card>

            <Card color="white" className="p-6">
              <div className="w-10 h-10 rounded-xl bg-[#B6F23A] text-[#0A0A0A] flex items-center justify-center font-bold mb-4">
                <ShieldCheck size={20} />
              </div>
              <h4 className="font-display font-bold text-xl uppercase mb-2">Normativa & Soberanía</h4>
              <p className="text-sm font-sans text-[#0A0A0A]/80 leading-relaxed">
                Cumplimiento de estándares de seguridad médica ISO y leyes locales de protección de datos personales de salud en territorio boliviano.
              </p>
            </Card>

            <Card color="white" className="p-6">
              <div className="w-10 h-10 rounded-xl bg-[#FFE500] text-[#0A0A0A] flex items-center justify-center font-bold mb-4">
                <Award size={20} />
              </div>
              <h4 className="font-display font-bold text-xl uppercase mb-2">Excelencia Scrum</h4>
              <p className="text-sm font-sans text-[#0A0A0A]/80 leading-relaxed">
                Cultura de trabajo ágil con roles definidos que permite pivotar, resolver incidencias y entregar incrementos de valor en cada Sprint.
              </p>
            </Card>
          </div>
        </section>

        {/* 3. Valores Fundamentales de Tiradores */}
        <section>
          <div className="mb-8">
            <Badge color="magenta" className="mb-4">CULTURA DE TRABAJO</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-4">
              3. Valores Fundamentales de Tiradores
            </h2>
            <p className="text-lg md:text-xl text-[#0A0A0A]/85 font-sans leading-relaxed">
              Los valores no son ideales pasivos; son los principios de comportamiento que guían cómo configuramos cada servidor, cómo colaboramos bajo presión y cómo respondemos ante contingencias.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((val, idx) => (
              <Card key={idx} color={val.color} className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-bold text-3xl opacity-40">#{val.num}</span>
                    <div className="w-12 h-12 rounded-xl border-[2px] border-[#0A0A0A] bg-white text-[#0A0A0A] flex items-center justify-center shadow-[2px_2px_0_#0A0A0A]">
                      {val.icon}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-2xl uppercase mb-3 leading-snug">
                    {val.title}
                  </h3>
                  <p className="text-base font-sans leading-relaxed mb-6 opacity-95">
                    {val.desc}
                  </p>
                </div>
                <div className="p-4 rounded-xl border-[2px] border-[#0A0A0A] bg-white text-[#0A0A0A]">
                  <span className="text-[11px] font-display font-bold uppercase tracking-wider block mb-1 text-[#C1522A]">
                    Comportamiento en la práctica:
                  </span>
                  <p className="text-xs md:text-sm font-sans font-medium">
                    {val.behaviors}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 4. Horizontes de Ejecución Estratégica (Roadmap con Tabs) */}
        <section>
          <div className="mb-8">
            <Badge color="teal" className="mb-4">METAS CUANTIFICABLES</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-4">
              4. Horizontes de Ejecución Estratégica (Roadmap)
            </h2>
            <p className="text-lg text-[#0A0A0A]/85 font-sans mb-6">
              Cómo materializamos nuestra Visión paso a paso a lo largo del tiempo:
            </p>

            <Tabs
              tabs={[
                { id: 'h1', label: 'Horizonte 1 (2026)' },
                { id: 'h2', label: 'Horizonte 2 (2027)' },
                { id: 'h3', label: 'Horizonte 3 (2028-2030)' },
              ]}
              activeTab={activeHorizon}
              onChange={setActiveHorizon}
              activeColor="terracota"
            />
          </div>

          {/* Active Horizon Card */}
          {(() => {
            const h = horizonsData[activeHorizon as keyof typeof horizonsData];
            return (
              <Card color="white" className="p-8 md:p-12 shadow-brutal-lg">
                <Badge color="yellow" className="mb-3">{h.tag}</Badge>
                <h3 className="text-3xl md:text-4xl font-display font-bold uppercase text-[#0A0A0A] mb-8">
                  {h.title}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {h.goals.map((g, gIdx) => (
                    <div key={gIdx} className="p-5 rounded-xl border-[2px] border-[#0A0A0A] bg-[#FAF5DC] flex items-start gap-3">
                      <CheckCircle2 size={22} className="text-[#C1522A] shrink-0 mt-0.5" />
                      <span className="text-base font-sans text-[#0A0A0A] font-medium">{g}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })()}
        </section>

        {/* 5. Metodología de Redacción y Buenas Prácticas (Haz vs Evita) */}
        <section>
          <div className="mb-8">
            <Badge color="yellow" className="mb-4">GUÍA METODOLÓGICA</Badge>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A0A0A] uppercase mb-4">
              5. Cómo Redactar la Misión y Visión con Rigor
            </h2>
            <p className="text-lg text-[#0A0A0A]/85 font-sans leading-relaxed">
              Para que las declaraciones sean efectivas y guíen genuinamente el comportamiento organizacional, deben construirse siguiendo criterios claros de calidad:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Columna Haz (Verde) */}
            <Card color="lime" className="p-8">
              <div className="flex items-center gap-2 font-display font-bold text-2xl uppercase mb-6 text-[#0A0A0A]">
                <CheckCircle2 size={28} className="text-[#0A0A0A]" />
                <span>Buenas Prácticas Recomendadas (Haz ✓)</span>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl border-[2px] border-[#0A0A0A]">
                  <strong className="font-display uppercase text-sm block mb-1">Concreción vs. Ambigüedad</strong>
                  <p className="text-sm font-sans text-[#0A0A0A]/80">Usar verbos de acción específicos (<em>"Diseñar, desplegar y mantener"</em>) en lugar de generalidades vacías (<em>"Ser los mejores"</em>).</p>
                </div>
                <div className="p-4 bg-white rounded-xl border-[2px] border-[#0A0A0A]">
                  <strong className="font-display uppercase text-sm block mb-1">Límite y Alcance</strong>
                  <p className="text-sm font-sans text-[#0A0A0A]/80">Especificar claramente a qué industria se atiende y cuáles son los límites de responsabilidad del equipo.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border-[2px] border-[#0A0A0A]">
                  <strong className="font-display uppercase text-sm block mb-1">Cohesión con Métricas</strong>
                  <p className="text-sm font-sans text-[#0A0A0A]/80">Cada elemento de la misión debe poder traducirse a un indicador clave (KPI/SLA), como disponibilidad de red o tiempos de resolución.</p>
                </div>
              </div>
            </Card>

            {/* Columna Evita (Magenta) */}
            <Card color="magenta" className="p-8">
              <div className="flex items-center gap-2 font-display font-bold text-2xl uppercase mb-6 text-white">
                <XCircle size={28} className="text-white" />
                <span>Errores Comunes a Evitar (Evita ✗)</span>
              </div>
              <div className="space-y-4 text-[#0A0A0A]">
                <div className="p-4 bg-white rounded-xl border-[2px] border-[#0A0A0A]">
                  <strong className="font-display uppercase text-sm block mb-1 text-[#C1522A]">Confundir Misión con Visión</strong>
                  <p className="text-sm font-sans text-[#0A0A0A]/80">Mezclar las tareas operativas de hoy con los sueños a 10 años.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border-[2px] border-[#0A0A0A]">
                  <strong className="font-display uppercase text-sm block mb-1 text-[#C1522A]">Desconexión de la Realidad</strong>
                  <p className="text-sm font-sans text-[#0A0A0A]/80">Proclamar metas inalcanzables sin asignar el presupuesto ni las capacidades técnicas para respaldarlas.</p>
                </div>
                <div className="p-4 bg-white rounded-xl border-[2px] border-[#0A0A0A]">
                  <strong className="font-display uppercase text-sm block mb-1 text-[#C1522A]">Dejarla Olvidada en un Cajón</strong>
                  <p className="text-sm font-sans text-[#0A0A0A]/80">No socializarla con los nuevos integrantes ni utilizarla como criterio en la toma de decisiones cotidianas.</p>
                </div>
              </div>
            </Card>
          </div>

          <h4 className="font-display font-bold text-2xl text-[#0A0A0A] uppercase mb-6">
            Recursos Audiovisuales de Formación Estratégica:
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <VideoCard title="¿Cómo redactar la Visión y Misión de tu empresa?" channel="Conociendo Tu Empresa" url="https://www.youtube.com/watch?v=WBM8qsBBR_w" />
            <VideoCard title="Aprende a hacer la visión, misión y valores en menos de 5 minutos" channel="EAS Escuela Innovadora" url="https://www.youtube.com/watch?v=wCjLpHX0LoA" />
            <VideoCard title="Misión, visión y valores: diferencias y ejemplos reales" channel="Sugerido" url="https://www.youtube.com/watch?v=RV9YrstWny0" />
          </div>
        </section>

      </div>
    </div>
  );
}
