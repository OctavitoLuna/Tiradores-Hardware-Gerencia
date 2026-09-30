import React from 'react';
import VideoEmbed from '../components/VideoEmbed';
import AnimatedPage from '../components/AnimatedPage';
import FadeIn from '../components/FadeIn';
import { 
  Compass, 
  Eye, 
  Target, 
  ShieldCheck, 
  Cpu, 
  Users, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  Layers, 
  Activity, 
  Award,
  HelpCircle,
  TrendingUp,
  FileCheck
} from 'lucide-react';

export default function MisionVision() {
  const coreValues = [
    {
      title: "Excelencia Técnica y Tolerancia a Fallos",
      desc: "En el sector de la salud digital no existe margen de error admisible. Cada servidor, cable de fibra y switch se diseña bajo esquemas de redundancia activa (N+1) para asegurar disponibilidad continua en quirófanos y unidades de terapia intensiva.",
      behaviors: "Pruebas de estrés periódicas, simulacros de failover y mantenimiento proactivo sin interrupción.",
      icon: <Cpu className="text-primary" size={28} />
    },
    {
      title: "Soberanía y Seguridad de Datos Clínicos",
      desc: "La privacidad de los pacientes es un derecho fundamental e innegociable. Custodiamos físicamente los registros clínicos bajo estrictos estándares de aislamiento de red y cifrado de hardware en reposo y en tránsito.",
      behaviors: "Apego riguroso a normativas de confidencialidad médica, control biométrico de acceso y auditoría de logs.",
      icon: <ShieldCheck className="text-primary" size={28} />
    },
    {
      title: "Colaboración Multidisciplinaria Ágil",
      desc: "La infraestructura no opera de forma aislada; es el puente que une al software inteligente, los médicos especialistas y la administración clínica. Promovemos una cultura de co-creación y comunicación transparente.",
      behaviors: "Ceremonias Scrum rigurosas, retroalimentación constante con el equipo de Cloud y empatía con el personal de salud.",
      icon: <Users className="text-primary" size={28} />
    },
    {
      title: "Innovación Responsable y Eficiencia Financiera",
      desc: "Implementamos tecnologías de vanguardia (Edge AI, IoT biomédico) de forma sustentable, equilibrando cuidadosamente las inversiones de capital (CAPEX) con los costos operativos (OPEX) del proyecto.",
      behaviors: "Evaluación de retorno de inversión médica, dimensionamiento energético eficiente y reciclaje tecnológico responsable.",
      icon: <TrendingUp className="text-primary" size={28} />
    }
  ];

  const strategicHorizons = [
    {
      horizon: "Horizonte 1 (Corto Plazo — 2026)",
      title: "Estabilización y Despliegue de Base Clínica",
      goals: [
        "Garantizar disponibilidad operativa del 99.9% en el entorno hospitalario primario.",
        "Implementar el sistema de trazabilidad de inventario físico en tiempo real (100% de activos auditados).",
        "Estandarizar los protocolos de contingencia DRP (Disaster Recovery Plan) con RPO < 15 min y RTO < 30 min.",
        "Homologación inicial de normativas de equipamiento médico y protección eléctrica grado hospitalario."
      ]
    },
    {
      horizon: "Horizonte 2 (Mediano Plazo — 2027)",
      title: "Integración Híbrida y Expansión Edge Computing",
      goals: [
        "Desplegar micro datacenters locales (Edge Nodes) en 3 centros hospitalarios estratégicos de Bolivia.",
        "Integración bidireccional transparente entre almacenamiento on-premise y el cluster elástico de IA en la nube.",
        "Optimización del consumo energético del área mediante sistemas de refrigeración inteligente y fuentes UPS redundantes.",
        "Obtención de certificaciones de calidad de infraestructura médica ISO 13485 e ISO/IEC 27001."
      ]
    },
    {
      horizon: "Horizonte 3 (Largo Plazo — 2028 - 2030)",
      title: "Soberanía Tecnológica y Red Nacional Inteligente",
      goals: [
        "Consolidar a Tiradores como el referente nacional en infraestructura física para telemedicina y cirugía asistida por IA.",
        "Arquitectura autónoma con orquestación inteligente capaz de auto-reparar fallos de hardware en milisegundos.",
        "Soporte federado a la red de salud pública y privada de Bolivia, garantizando soberanía de datos en territorio nacional.",
        "Cero huella de carbono neta en centros de datos médicos propios mediante adopción de energías limpias."
      ]
    }
  ];

  return (
    <AnimatedPage>
      <div className="w-full bg-background pb-24">
        {/* Page Header */}
        <header className="bg-surface text-foreground-inverse py-20 border-b-8 border-primary">
          <div className="container-wide text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1 rounded-full mb-3 border border-primary/20">
              Planeación Estratégica Institucional
            </span>
            <h1 className="text-5xl md:text-7xl font-display tracking-wide text-white mb-4">
              Misión y Visión
            </h1>
            <p className="text-lg md:text-xl font-display tracking-widest text-primary uppercase max-w-2xl mx-auto">
              Propósito, Rumbo y Valores del Área de Hardware e Infraestructura • Tiradores
            </p>
          </div>
        </header>

        <div className="container-wide max-w-7xl mt-16 space-y-24">
          
          {/* 1. Marco Teórico y Conceptual */}
          <FadeIn>
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-primary/10 text-primary rounded-lg">
                  <Compass size={28} />
                </div>
                <div>
                  <h2 className="text-3xl md:text-5xl font-display text-surface">
                    1. Fundamentos: Misión, Visión y Propósito
                  </h2>
                  <p className="text-xs md:text-sm text-foreground-muted font-sans uppercase tracking-widest">
                    La brújula que transforma objetivos técnicos en impacto humano
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 md:p-10 shadow-sm border border-stone-200/80 rounded-2xl text-foreground-muted space-y-6 text-base md:text-lg leading-relaxed">
                <p>
                  En proyectos de alta complejidad tecnológica y sanitaria como <strong>IA MediTech</strong>, la <strong>misión</strong> y la <strong>visión</strong> no constituyen ejercicios de redacción retórica; representan directrices de ingeniería y gobernanza que dictan desde la topología de un cableado estructurado hasta la asignación de presupuestos CAPEX/OPEX.
                </p>

                <div className="grid md:grid-cols-2 gap-8 pt-2">
                  <div className="bg-[#FAF7F2] p-6 rounded-xl border-l-4 border-surface shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Target className="text-primary" size={24} />
                      <h3 className="font-display font-bold text-xl text-surface uppercase">Misión: El Presente Operativo</h3>
                    </div>
                    <p className="text-sm text-foreground-muted leading-relaxed mb-3">
                      Define la <strong>razón de ser fundamental</strong> de la organización en el aquí y el ahora. Responde taxativamente a tres preguntas:
                    </p>
                    <ul className="text-xs space-y-2 font-medium text-surface">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">1.</span>
                        <span><strong>¿Qué hacemos?</strong> Diseñar, implementar y mantener la base física y de red.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">2.</span>
                        <span><strong>¿Para quién?</strong> Para el personal médico, pacientes y sistemas de software clínico.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">3.</span>
                        <span><strong>¿Cuál es nuestro valor diferencial?</strong> Disponibilidad 99.9%, latencia ultra-baja y tolerancia a fallos.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#FAF7F2] p-6 rounded-xl border-l-4 border-primary shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Eye className="text-primary" size={24} />
                      <h3 className="font-display font-bold text-xl text-surface uppercase">Visión: El Futuro Aspiracional</h3>
                    </div>
                    <p className="text-sm text-foreground-muted leading-relaxed mb-3">
                      Pinta el cuadro del <strong>estado futuro deseado</strong> al que la empresa aspira llegar a largo plazo. Cumple tres funciones vitales:
                    </p>
                    <ul className="text-xs space-y-2 font-medium text-surface">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">1.</span>
                        <span><strong>Inspirar y unificar:</strong> Provee un destino compartido para todos los ingenieros del equipo.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">2.</span>
                        <span><strong>Establecer el estándar de excelencia:</strong> Marca el listón técnico que guía la innovación continua.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">3.</span>
                        <span><strong>Anticipar la evolución:</strong> Prepara a la infraestructura para los retos médicos de la próxima década.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* El Círculo Dorado de Simon Sinek */}
                <div className="bg-background/80 p-6 md:p-8 rounded-xl border border-stone-200 mt-6">
                  <h3 className="font-display font-bold text-xl text-surface mb-3 flex items-center gap-2">
                    <Sparkles className="text-primary" size={20} />
                    El Círculo Dorado Aplicado a Nuestra Infraestructura
                  </h3>
                  <p className="text-sm text-foreground-muted mb-6">
                    Siguiendo la metodología de <em>Simon Sinek (Start With Why)</em>, articulamos nuestra labor desde el propósito humano más profundo hacia los entregables tangibles:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-5 rounded-lg border-t-4 border-primary shadow-sm">
                      <span className="text-xs font-bold text-primary tracking-widest uppercase block mb-1">01 • ¿Por qué? (Why)</span>
                      <h4 className="font-display font-bold text-base text-surface mb-2">Propósito Humano</h4>
                      <p className="text-xs text-foreground-muted leading-relaxed">
                        Porque cada segundo que un sistema clínico permanece sin conexión puede costar vidas. Existimos para garantizar que la tecnología médica nunca falle cuando un paciente la necesita.
                      </p>
                    </div>

                    <div className="bg-white p-5 rounded-lg border-t-4 border-surface shadow-sm">
                      <span className="text-xs font-bold text-surface tracking-widest uppercase block mb-1">02 • ¿Cómo? (How)</span>
                      <h4 className="font-display font-bold text-base text-surface mb-2">Estrategia y Metodología</h4>
                      <p className="text-xs text-foreground-muted leading-relaxed">
                        A través de una arquitectura híbrida equilibrada, diseño modular redundante (N+1), agilidad Scrum y estricta observancia de normativas de salud internacionales.
                      </p>
                    </div>

                    <div className="bg-white p-5 rounded-lg border-t-4 border-emerald-700 shadow-sm">
                      <span className="text-xs font-bold text-emerald-700 tracking-widest uppercase block mb-1">03 • ¿Qué? (What)</span>
                      <h4 className="font-display font-bold text-base text-surface mb-2">Solución Física Concreta</h4>
                      <p className="text-xs text-foreground-muted leading-relaxed">
                        Servidores de alta disponibilidad, centros de cómputo hospitalarios, cableado estructurado certificado, gateways IoT y soporte técnico en tiempo real.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-stone-200">
                  <VideoEmbed title="Mision y Vision" url="https://www.youtube.com/watch?v=l7uhrPleR6Y" />
                </div>
              </div>
            </section>
          </FadeIn>

          {/* 2. Declaraciones Oficiales de Misión y Visión */}
          <FadeIn delay={0.1}>
            <section className="space-y-8">
              <div className="border-b pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1 block">
                  Declaraciones Oficiales del Área
                </span>
                <h2 className="text-3xl md:text-5xl font-display text-surface">
                  2. Misión y Visión de Tiradores — Hardware
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Tarjeta Misión */}
                <div className="bg-surface text-foreground-inverse p-8 md:p-12 rounded-2xl relative overflow-hidden group shadow-xl border-t-8 border-primary flex flex-col justify-between">
                  <div className="absolute top-0 right-0 p-8 text-9xl font-display opacity-5 group-hover:scale-110 transition-transform select-none">
                    M
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-6 relative z-10">
                      <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center border border-primary/30">
                        <Target size={24} />
                      </div>
                      <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-primary">Nuestra Declaración</span>
                        <h3 className="text-3xl md:text-4xl font-display text-white">Misión</h3>
                      </div>
                    </div>

                    <blockquote className="text-gray-200 text-lg md:text-xl font-sans leading-relaxed relative z-10 italic border-l-2 border-primary pl-4 my-6">
                      "Diseñar, desplegar y mantener una arquitectura física de alto rendimiento, latencia baja y máxima disponibilidad, que garantice la continuidad operativa de los sistemas clínicos críticos en el hospital; colaborando de manera estratégica con el equipo de Infraestructura Cloud para articular un ecosistema híbrido balanceado, seguro y eficiente, que cumpla con las normativas locales de salud y optimice los recursos operacionales y financieros del proyecto IA MediTech."
                    </blockquote>
                  </div>

                  {/* Componentes de la Misión */}
                  <div className="pt-6 border-t border-white/10 relative z-10 space-y-2 text-xs text-gray-300">
                    <span className="font-bold uppercase tracking-wider text-primary block">Dimensiones Clave:</span>
                    <p>• <strong>Alcance Operativo:</strong> Cero interrupciones en entornos clínicos de misión crítica.</p>
                    <p>• <strong>Articulación Estratégica:</strong> Sinergia balanceada entre Hardware local y Cloud elástica.</p>
                    <p>• <strong>Sostenibilidad:</strong> Racionalización financiera inteligente (CAPEX/OPEX).</p>
                  </div>
                </div>

                {/* Tarjeta Visión */}
                <div className="bg-gradient-to-br from-[#C1522A] to-[#9E3E1B] text-white p-8 md:p-12 rounded-2xl relative overflow-hidden group shadow-xl border-t-8 border-surface flex flex-col justify-between">
                  <div className="absolute top-0 right-0 p-8 text-9xl font-display opacity-10 group-hover:scale-110 transition-transform select-none">
                    V
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-6 relative z-10">
                      <div className="w-12 h-12 rounded-full bg-black/20 text-white flex items-center justify-center border border-white/30">
                        <Eye size={24} />
                      </div>
                      <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-amber-200">Destino Estratégico</span>
                        <h3 className="text-3xl md:text-4xl font-display text-white">Visión</h3>
                      </div>
                    </div>

                    <blockquote className="text-white text-lg md:text-xl font-sans leading-relaxed relative z-10 italic border-l-2 border-white/60 pl-4 my-6">
                      "Ser el pilar físico e inquebrantable de la infraestructura de IA MediTech, reconocido por la excelencia técnica en procesamiento local, soberanía de datos y tolerancia a fallos, consolidándose como un modelo de referencia en la integración armónica entre la infraestructura local y la elasticidad de la nube, para soportar sin interrupciones la evolución de la medicina inteligente en Bolivia."
                    </blockquote>
                  </div>

                  {/* Componentes de la Visión */}
                  <div className="pt-6 border-t border-white/20 relative z-10 space-y-2 text-xs text-amber-100">
                    <span className="font-bold uppercase tracking-wider text-white block">Aspiraciones de Impacto:</span>
                    <p>• <strong>Liderazgo Regional:</strong> Modelo de referencia nacional en infraestructura de salud inteligente.</p>
                    <p>• <strong>Soberanía de Datos:</strong> Seguridad física in situ de la información médica de los bolivianos.</p>
                    <p>• <strong>Evolución Futura:</strong> Preparados para soportar algoritmos biomédicos de próxima generación.</p>
                  </div>
                </div>
              </div>

              {/* Matriz de Desglose Anatómico */}
              <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
                <h3 className="text-2xl font-display font-bold text-surface mb-6 flex items-center gap-2">
                  <Layers className="text-primary" size={24} />
                  Desglose Analítico de Nuestras Declaraciones
                </h3>
                <div className="grid md:grid-cols-4 gap-6 text-sm">
                  <div className="p-4 bg-background/60 rounded-xl border border-stone-200">
                    <h4 className="font-bold text-surface mb-1 flex items-center gap-2 text-primary">
                      <Activity size={18} /> Continuidad Crítica
                    </h4>
                    <p className="text-xs text-foreground-muted leading-relaxed">
                      Sistemas como historias clínicas digitales y monitores de quirófano no admiten caídas; nuestra infraestructura garantiza 99.9% de uptime operativo.
                    </p>
                  </div>

                  <div className="p-4 bg-background/60 rounded-xl border border-stone-200">
                    <h4 className="font-bold text-surface mb-1 flex items-center gap-2 text-primary">
                      <Cpu size={18} /> Ecosistema Híbrido
                    </h4>
                    <p className="text-xs text-foreground-muted leading-relaxed">
                      Procesamiento local ultra-rápido para inferencia de IA en tiempo real combinado con la escalabilidad y respaldo masivo en nube pública.
                    </p>
                  </div>

                  <div className="p-4 bg-background/60 rounded-xl border border-stone-200">
                    <h4 className="font-bold text-surface mb-1 flex items-center gap-2 text-primary">
                      <ShieldCheck size={18} /> Normativa & Soberanía
                    </h4>
                    <p className="text-xs text-foreground-muted leading-relaxed">
                      Cumplimiento de estándares de seguridad médica ISO y leyes locales de protección de datos personales de salud en territorio boliviano.
                    </p>
                  </div>

                  <div className="p-4 bg-background/60 rounded-xl border border-stone-200">
                    <h4 className="font-bold text-surface mb-1 flex items-center gap-2 text-primary">
                      <Award size={18} /> Excelencia Scrum
                    </h4>
                    <p className="text-xs text-foreground-muted leading-relaxed">
                      Cultura de trabajo ágil con roles definidos que permite pivotar, resolver incidencias y entregar incrementos de valor en cada Sprint.
                    </p>
                  </div>
                </div>
              </div>

            </section>
          </FadeIn>

          {/* 3. Valores Fundamentales del Equipo */}
          <FadeIn delay={0.1}>
            <section className="bg-background-dark p-8 md:p-12 border-t-4 border-primary rounded-2xl shadow-sm">
              <div className="max-w-3xl mb-10">
                <span className="text-primary font-bold tracking-widest uppercase text-xs block mb-2">
                  Cultura de Trabajo
                </span>
                <h2 className="text-3xl md:text-5xl font-display text-surface mb-4">
                  3. Valores Fundamentales de Tiradores
                </h2>
                <p className="text-foreground-muted text-base md:text-lg leading-relaxed">
                  Los valores no son ideales pasivos; son los principios de comportamiento que guían cómo configuramos cada servidor, cómo colaboramos bajo presión y cómo respondemos ante contingencias.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {coreValues.map((val, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div>
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                        {val.icon}
                      </div>
                      <h3 className="font-display font-bold text-2xl text-surface mb-3">
                        {val.title}
                      </h3>
                      <p className="text-sm text-foreground-muted leading-relaxed mb-6">
                        {val.desc}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-stone-100 bg-[#FAF7F2] -mx-8 -mb-8 p-6 rounded-b-xl">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary block mb-1">
                        Comportamiento en la práctica:
                      </span>
                      <p className="text-xs text-surface font-medium leading-relaxed">
                        {val.behaviors}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* 4. Horizontes Estratégicos (Roadmap Temporal) */}
          <FadeIn delay={0.1}>
            <section className="space-y-8">
              <div className="border-b pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1 block">
                  Metas Cuantificables
                </span>
                <h2 className="text-3xl md:text-5xl font-display text-surface">
                  4. Horizontes de Ejecución Estratégica (Roadmap)
                </h2>
                <p className="text-foreground-muted text-sm md:text-base mt-2">
                  Cómo materializamos nuestra Visión paso a paso a lo largo del tiempo:
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {strategicHorizons.map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold text-primary tracking-widest uppercase block mb-2 font-mono">
                        {item.horizon}
                      </span>
                      <h3 className="font-display font-bold text-2xl text-surface mb-4">
                        {item.title}
                      </h3>
                      <ul className="space-y-3 text-xs text-foreground-muted leading-relaxed">
                        {item.goals.map((g, gIdx) => (
                          <li key={gIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                            <span>{g}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>

          {/* 5. Metodología de Redacción y Buenas Prácticas */}
          <FadeIn delay={0.1}>
            <section className="bg-white p-8 md:p-12 border-l-4 border-primary rounded-2xl shadow-sm">
              <div className="max-w-3xl mb-8">
                <span className="text-primary font-bold tracking-widest uppercase text-xs block mb-1">
                  Guía Metodológica
                </span>
                <h2 className="text-3xl md:text-4xl font-display text-surface mb-3">
                  5. Cómo Redactar la Misión y Visión con Rigor
                </h2>
                <p className="text-foreground-muted text-sm md:text-base leading-relaxed">
                  Para que las declaraciones sean efectivas y guíen genuinamente el comportamiento organizacional, deben construirse siguiendo criterios claros de calidad:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8 text-sm">
                <div className="space-y-4">
                  <h3 className="font-bold text-surface text-base border-b pb-2 flex items-center gap-2">
                    <CheckCircle2 className="text-emerald-600" size={18} />
                    Buenas Prácticas Recomendadas
                  </h3>
                  <ul className="space-y-2 text-foreground-muted text-xs leading-relaxed">
                    <li className="p-3 bg-background/50 rounded-lg">
                      <strong>Concreción vs. Ambigüedad:</strong> Usar verbos de acción específicos (*"Diseñar, desplegar y mantener"*) en lugar de generalidades vacías (*"Ser los mejores"*).
                    </li>
                    <li className="p-3 bg-background/50 rounded-lg">
                      <strong>Límite y Alcance:</strong> Especificar claramente a qué industria se atiende y cuáles son los límites de responsabilidad del equipo.
                    </li>
                    <li className="p-3 bg-background/50 rounded-lg">
                      <strong>Cohesión con Métricas:</strong> Cada elemento de la misión debe poder traducirse a un indicador clave (KPI/SLA), como disponibilidad de red o tiempos de resolución.
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-surface text-base border-b pb-2 flex items-center gap-2">
                    <HelpCircle className="text-primary" size={18} />
                    Errores Comunes a Evitar
                  </h3>
                  <ul className="space-y-2 text-foreground-muted text-xs leading-relaxed">
                    <li className="p-3 bg-background/50 rounded-lg">
                      <strong>Confundir Misión con Visión:</strong> Mezclar las tareas operativas de hoy con los sueños a 10 años.
                    </li>
                    <li className="p-3 bg-background/50 rounded-lg">
                      <strong>Desconexión de la Realidad:</strong> Proclamar metas inalcanzables sin asignar el presupuesto ni las capacidades técnicas para respaldarlas.
                    </li>
                    <li className="p-3 bg-background/50 rounded-lg">
                      <strong>Dejarla Olvidada en un Cajón:</strong> No socializarla con los nuevos integrantes ni utilizarla como criterio en la toma de decisiones cotidianas.
                    </li>
                  </ul>
                </div>
              </div>

              <h4 className="font-display font-bold text-xl text-surface mb-6">
                Recursos Audiovisuales de Formación Estratégica:
              </h4>
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
