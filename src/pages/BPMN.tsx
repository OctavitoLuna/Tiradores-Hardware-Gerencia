import React, { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import FadeIn from '../components/FadeIn';
import { 
  GitFork, 
  Workflow, 
  CheckCircle2, 
  Maximize2, 
  Minimize2, 
  Download, 
  Info, 
  Layers, 
  ArrowRight, 
  RotateCcw, 
  ShieldCheck, 
  Sparkles,
  UserCheck,
  Building2,
  Cpu,
  Clock,
  Activity,
  AlertCircle,
  ZoomIn,
  ZoomOut,
  X
} from 'lucide-react';

export default function BPMN() {
  const [imageSrc, setImageSrc] = useState('/bpmn-diagram.svg');
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [selectedLane, setSelectedLane] = useState<string | null>(null);

  const laneBreakdown = [
    {
      id: 'cliente-interno',
      role: 'Cliente Interno',
      holder: 'Hospital / Equipo Médico',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
      icon: <Building2 className="text-amber-700" size={20} />,
      desc: 'Origina la solicitud de infraestructura o soporte técnico, y recibe la infraestructura entregada al cierre del proceso.',
      activities: [
        'Enviar solicitud de infraestructura o soporte técnico (dispara el evento de inicio)',
        'Recepción final / infraestructura entregada y validada en operación clínica (evento de fin)'
      ]
    },
    {
      id: 'lider-hardware',
      role: 'Líder de Hardware',
      holder: 'Octavio Luna',
      badgeColor: 'bg-orange-100 text-orange-900 border-orange-300',
      icon: <UserCheck className="text-orange-700" size={20} />,
      desc: 'Evalúa la viabilidad inicial de la solicitud y, al final del proceso, revisa y aprueba los resultados entregados antes de pasarlos al cliente.',
      activities: [
        'Evaluar viabilidad técnica y operativa de la solicitud inicial',
        'Decisión: Compuerta ¿Es viable? (si es "No viable", retorna al cliente; si es "Sí", deriva a Presupuesto)',
        'Revisar y auditar los resultados consolidados de todas las áreas técnicas',
        'Decisión: Compuerta ¿Aprobado? (si es "No aprobado", retorna a adquisición; si es "Sí", procede a entrega)',
        'Entregar al cliente interno formalmente'
      ]
    },
    {
      id: 'direccion-tecnologia',
      role: 'Dirección de Tecnología y Presupuesto',
      holder: 'Leandro Colque',
      badgeColor: 'bg-stone-200 text-stone-900 border-stone-400',
      icon: <Cpu className="text-stone-700" size={20} />,
      desc: 'Evalúa el presupuesto y el stack tecnológico necesario, y asigna los recursos y la prioridad de atención.',
      activities: [
        'Evaluar presupuesto financiero (OPEX/CAPEX) y compatibilidad del stack tecnológico requerido',
        'Asignar recursos de capital, herramientas y prioridad en la cola de trabajo del sprint'
      ]
    },
    {
      id: 'gestion-infraestructura',
      role: 'Gestión de Infraestructura Global',
      holder: 'Einar Guillén',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
      icon: <Workflow className="text-amber-700" size={20} />,
      desc: 'Adquiere o asigna el equipo físico necesario y lo instala/configura.',
      activities: [
        'Adquirir o asignar del inventario existente el equipo o hardware físico necesario',
        'Instalar físicamente y configurar servidores, cableado de red y dispositivos biomédicos',
        'Receptor de reprocesos en caso de rechazo en pruebas de calidad o auditoría final'
      ]
    },
    {
      id: 'aseguramiento-calidad',
      role: 'Aseguramiento de Calidad y Recursos',
      holder: 'Huascar Duran',
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      icon: <ShieldCheck className="text-emerald-700" size={20} />,
      desc: 'Valida que la infraestructura instalada cumpla normativas de salud (ISO, CE, FDA) y mide su capacidad y consumo; si no cumple, el proceso regresa a Gestión de Infraestructura Global.',
      activities: [
        'Validar estricto cumplimiento de normativas de salud y seguridad médica (ISO, CE, FDA)',
        'Medir capacidad de carga, disipación térmica y consumo energético bajo estrés',
        'Decisión: Compuerta ¿Cumple estándares? (si es "No válido", retrocede a reconfiguración; si es "Sí", avanza a soporte)'
      ]
    },
    {
      id: 'operaciones-soporte',
      role: 'Operaciones de Soporte y Entorno de Trabajo',
      holder: 'Leonardo Ibarra',
      badgeColor: 'bg-teal-100 text-teal-900 border-teal-300',
      icon: <Layers className="text-teal-700" size={20} />,
      desc: 'Configura accesos y capacita al usuario final antes de que el Líder de Hardware dé la aprobación definitiva.',
      activities: [
        'Configurar perfiles de usuario, credenciales seguras y políticas de acceso clínico',
        'Capacitar técnicamente al personal médico y asistencial en el uso del hardware',
        'Transferir el paquete operativo completo al Líder de Hardware para la revisión de cierre'
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
              Notación Estándar OMG • Versión 2.0
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display tracking-wide text-white mb-4">
              BPMN — Modelado de Procesos de Negocio
            </h1>
            <p className="text-lg md:text-xl font-display tracking-widest text-primary uppercase max-w-2xl mx-auto">
              Business Process Model and Notation en IA MediTech • Tiradores
            </p>
          </div>
        </header>

        <div className="container-wide max-w-7xl mt-16 space-y-24">

          {/* 1.1 ¿Qué es BPMN? */}
          <FadeIn>
            <section>
              <h2 className="text-3xl md:text-4xl font-display mb-6 border-l-4 border-primary pl-4 text-surface">
                1.1 ¿Qué es BPMN?
              </h2>
              <div className="text-lg text-foreground-muted leading-relaxed space-y-4 mb-6">
                <p>
                  <strong>BPMN</strong> (<em>Business Process Model and Notation</em> — Notación de Modelado de Procesos de Negocio) es un lenguaje gráfico estándar para representar procesos de negocio mediante un conjunto claro y estructurado de símbolos. Permite describir visualmente la secuencia detallada de actividades, decisiones y flujos de información necesarios para completar un proceso de principio a fin.
                </p>
                <p>
                  BPMN fue concebido y desarrollado originalmente por el <strong>Business Process Management Institute (BPMI)</strong> y, desde 2005, es mantenido por el <strong>Object Management Group (OMG)</strong>, el mismo organismo responsable de UML. La versión actual y más utilizada es <strong>BPMN 2.0</strong>. A diferencia de UML (orientado al diseño de software) o de un diagrama de flujo genérico, BPMN está diseñado específicamente para que tanto perfiles técnicos como de negocio puedan leer y validar el mismo diagrama sin ambigüedad.
                </p>
              </div>

              {/* Callout Info */}
              <div className="bg-white p-6 border-l-4 border-surface shadow-sm rounded-r-md flex items-start gap-4">
                <div className="p-2 bg-primary/10 text-primary rounded-md shrink-0 mt-1">
                  <Info size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-surface mb-1 uppercase tracking-wider text-sm">
                    Estándar de la Industria Gestionado por OMG
                  </h4>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    Al estandarizar la semántica visual entre tareas humanas, eventos temporales y compuertas lógicas, BPMN 2.0 elimina las interpretaciones subjetivas y posibilita la ejecución directa en motores de automatización de procesos (BPMS).
                  </p>
                </div>
              </div>
            </section>
          </FadeIn>

          {/* 1.2 ¿Para qué sirve? */}
          <FadeIn delay={0.1}>
            <section className="bg-background-dark p-8 md:p-12 border-t-4 border-primary rounded-sm shadow-sm">
              <h2 className="text-3xl md:text-4xl font-display mb-6 text-surface">
                1.2 ¿Para qué sirve?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-md shadow-sm border border-stone-200 flex gap-4">
                  <div className="text-primary font-display font-bold text-2xl">01</div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-surface mb-2">
                      Diagnóstico As-Is y Rediseño To-Be
                    </h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      Documentar procesos "tal cual" (<em>as-is</em>) para entender cómo funciona realmente un proceso hoy, y diseñar procesos futuros (<em>to-be</em>) con mejoras.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-md shadow-sm border border-stone-200 flex gap-4">
                  <div className="text-primary font-display font-bold text-2xl">02</div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-surface mb-2">
                      Puente Negocio-Técnico y Automatización
                    </h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      Servir como puente de comunicación entre áreas de negocio y equipos técnicos: un mismo diagrama puede usarse para análisis de procesos y como base para automatización (por ejemplo, mediante motores BPM).
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-md shadow-sm border border-stone-200 flex gap-4">
                  <div className="text-primary font-display font-bold text-2xl">03</div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-surface mb-2">
                      Control de Tiempos y Cuellos de Botella
                    </h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      Identificar responsables, tiempos, decisiones críticas y puntos de posible cuello de botella dentro de un proceso.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-md shadow-sm border border-stone-200 flex gap-4">
                  <div className="text-primary font-display font-bold text-2xl">04</div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-surface mb-2">
                      Visibilidad de Flujos Inter-Áreas
                    </h3>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      Detectar procesos que dependen de más de un área (como es el caso de una solicitud de infraestructura, que pasa por varias áreas del equipo de Hardware).
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </FadeIn>

          {/* 1.3 Categorías de elementos de la notación BPMN */}
          <FadeIn delay={0.1}>
            <section>
              <h2 className="text-3xl md:text-4xl font-display mb-6 border-l-4 border-primary pl-4 text-surface">
                1.3 Categorías de elementos de la notación BPMN
              </h2>
              <p className="text-lg text-foreground-muted leading-relaxed mb-8">
                BPMN organiza sus símbolos en <strong>4 categorías principales</strong> bien diferenciadas:
              </p>

              <div className="space-y-6">
                
                {/* 1. Objetos de flujo */}
                <div className="bg-white p-6 sm:p-8 border-l-4 border-primary shadow-sm rounded-r-md">
                  <h3 className="text-xl font-display font-bold text-surface mb-3 flex items-center gap-2">
                    <span className="bg-primary text-white text-xs px-2.5 py-1 rounded font-sans">01</span>
                    Objetos de flujo (el corazón del diagrama)
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6 mt-4">
                    <div className="bg-background/60 p-4 rounded-md border border-stone-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-5 h-5 rounded-full border-2 border-primary inline-flex items-center justify-center text-[10px] font-bold text-primary">○</span>
                        <strong className="text-surface font-display text-base">Eventos</strong>
                      </div>
                      <p className="text-xs text-foreground-muted leading-relaxed">
                        Se representan con <strong>círculos</strong>. Indican algo que "sucede" en el proceso (no una tarea). Pueden ser de <strong>inicio</strong>, <strong>intermedios</strong> o <strong>fin</strong>, y dentro del círculo puede haber un ícono que indique el tipo (mensaje, temporizador, error, señal, cancelación, etc.).
                      </p>
                    </div>

                    <div className="bg-background/60 p-4 rounded-md border border-stone-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-6 h-4 rounded border-2 border-primary inline-flex items-center justify-center text-[10px] font-bold text-primary">▢</span>
                        <strong className="text-surface font-display text-base">Actividades</strong>
                      </div>
                      <p className="text-xs text-foreground-muted leading-relaxed">
                        Se representan con <strong>rectángulos de esquinas redondeadas</strong>. Son el trabajo que se ejecuta dentro del proceso; pueden ser tareas simples o subprocesos que a su vez contienen su propio flujo interno.
                      </p>
                    </div>

                    <div className="bg-background/60 p-4 rounded-md border border-stone-200">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-5 h-5 rotate-45 border-2 border-primary inline-block text-[10px]"></span>
                        <strong className="text-surface font-display text-base">Compuertas (gateways)</strong>
                      </div>
                      <p className="text-xs text-foreground-muted leading-relaxed">
                        Se representan con <strong>rombos/diamantes</strong>. Son puntos de decisión que determinan por qué camino continúa el flujo (exclusiva, inclusiva, paralela, basada en eventos), similar a un "if" dentro del proceso.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2. Objetos de conexión */}
                <div className="bg-white p-6 sm:p-8 border-l-4 border-surface shadow-sm rounded-r-md">
                  <h3 className="text-xl font-display font-bold text-surface mb-3 flex items-center gap-2">
                    <span className="bg-surface text-white text-xs px-2.5 py-1 rounded font-sans">02</span>
                    Objetos de conexión
                  </h3>
                  <p className="text-sm text-foreground-muted mb-4">Líneas que conectan los objetos de flujo entre sí con significado explícito:</p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 bg-background/50 rounded-md">
                      <strong className="block text-surface mb-1 text-sm font-semibold">Flujo de secuencia</strong>
                      <div className="h-0.5 w-16 bg-surface mb-2 relative"><span className="absolute right-0 top-[-4px] text-[10px]">▶</span></div>
                      <p className="text-xs text-foreground-muted">Línea sólida con punta de flecha; indica el orden estricto en que se ejecutan las actividades.</p>
                    </div>
                    <div className="p-4 bg-background/50 rounded-md">
                      <strong className="block text-surface mb-1 text-sm font-semibold">Flujo de mensajes</strong>
                      <div className="h-0.5 w-16 border-b-2 border-dashed border-primary mb-2"></div>
                      <p className="text-xs text-foreground-muted">Línea discontinua; indica el intercambio de información o mensajes entre dos participantes distintos (dos pools).</p>
                    </div>
                    <div className="p-4 bg-background/50 rounded-md">
                      <strong className="block text-surface mb-1 text-sm font-semibold">Asociación</strong>
                      <div className="h-0.5 w-16 border-b-2 border-dotted border-gray-400 mb-2"></div>
                      <p className="text-xs text-foreground-muted">Línea punteada sin flecha de secuencia; conecta artefactos (datos, anotaciones) a un elemento del flujo.</p>
                    </div>
                  </div>
                </div>

                {/* 3. Carriles (Pools y Lanes) */}
                <div className="bg-white p-6 sm:p-8 border-l-4 border-[#C1522A] shadow-sm rounded-r-md">
                  <h3 className="text-xl font-display font-bold text-surface mb-3 flex items-center gap-2">
                    <span className="bg-[#C1522A] text-white text-xs px-2.5 py-1 rounded font-sans">03</span>
                    Carriles (Pools y Lanes)
                  </h3>
                  <p className="text-sm text-foreground-muted mb-4">Representan a los <strong>participantes y responsables</strong> del proceso:</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-background/50 rounded-md border border-stone-200">
                      <h4 className="font-bold text-surface text-sm mb-1 uppercase tracking-wider">Pool (piscina)</h4>
                      <p className="text-xs text-foreground-muted leading-relaxed">
                        Representa a una organización o participante completo (ej. <em>"Cliente Interno"</em>). Delimita las fronteras institucionales de un proceso autónomo.
                      </p>
                    </div>
                    <div className="p-4 bg-background/50 rounded-md border border-stone-200">
                      <h4 className="font-bold text-surface text-sm mb-1 uppercase tracking-wider">Lane (carril)</h4>
                      <p className="text-xs text-foreground-muted leading-relaxed">
                        Subdivisión dentro de un pool que representa un rol o área específica (ej. <em>"Líder de Hardware"</em>, <em>"Aseguramiento de Calidad"</em>) para asignar responsabilidades precisas.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4. Artefactos */}
                <div className="bg-white p-6 sm:p-8 border-l-4 border-stone-600 shadow-sm rounded-r-md">
                  <h3 className="text-xl font-display font-bold text-surface mb-3 flex items-center gap-2">
                    <span className="bg-stone-700 text-white text-xs px-2.5 py-1 rounded font-sans">04</span>
                    Artefactos
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    Elementos adicionales que dan contexto sin afectar el flujo directo del proceso: <strong>objetos de datos</strong> (documentos, inventarios o paquetes de información que entran o salen de una actividad), <strong>grupos</strong> (rectángulos punteados para agrupar visualmente actividades relacionadas) y <strong>anotaciones</strong> (notas de texto explicativas enlazadas al diagrama).
                  </p>
                </div>

              </div>
            </section>
          </FadeIn>

          {/* 1.4 Tipos de eventos y compuertas más comunes */}
          <FadeIn delay={0.1}>
            <section className="bg-white p-8 md:p-12 border-l-4 border-primary shadow-sm rounded-r-md">
              <h2 className="text-3xl md:text-4xl font-display mb-6 text-surface">
                1.4 Tipos de eventos y compuertas más comunes
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-display font-bold text-primary mb-4 flex items-center gap-2">
                    <Activity size={20} />
                    Tipos de Eventos
                  </h3>
                  <ul className="space-y-3 text-sm text-foreground-muted">
                    <li className="p-3 bg-background/50 rounded-md">
                      <strong className="text-surface block mb-0.5">De Inicio:</strong> Dispara e inicia la ejecución del proceso al recibir un estímulo externo o requerimiento.
                    </li>
                    <li className="p-3 bg-background/50 rounded-md">
                      <strong className="text-surface block mb-0.5">De Mensaje:</strong> Indica la recepción o el envío de una comunicación formal entre participantes.
                    </li>
                    <li className="p-3 bg-background/50 rounded-md">
                      <strong className="text-surface block mb-0.5">De Temporizador:</strong> Condicionado por plazos de tiempo fijos, intervalos de espera o vencimientos.
                    </li>
                    <li className="p-3 bg-background/50 rounded-md">
                      <strong className="text-surface block mb-0.5">De Error y de Señal:</strong> Capturan o difunden excepciones críticas y avisos de broadcast en el sistema.
                    </li>
                    <li className="p-3 bg-background/50 rounded-md">
                      <strong className="text-surface block mb-0.5">De Fin:</strong> Cierra formalmente el proceso completo o culmina una de sus ramas activas.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold text-surface mb-4 flex items-center gap-2">
                    <GitFork size={20} />
                    Tipos de Compuertas (Gateways)
                  </h3>
                  <ul className="space-y-3 text-sm text-foreground-muted">
                    <li className="p-3 bg-background/50 rounded-md border-l-2 border-primary">
                      <strong className="text-surface block mb-0.5">Exclusiva (XOR):</strong> Solo un camino posible. Es la más común para decisiones binarias o condicionales tipo <em>"sí / no"</em>.
                    </li>
                    <li className="p-3 bg-background/50 rounded-md border-l-2 border-primary">
                      <strong className="text-surface block mb-0.5">Paralela (AND):</strong> Todos los caminos emergentes se ejecutan de manera concurrente y simultánea sin evaluar condición.
                    </li>
                    <li className="p-3 bg-background/50 rounded-md border-l-2 border-primary">
                      <strong className="text-surface block mb-0.5">Inclusiva (OR):</strong> Uno o más caminos pueden activarse simultáneamente dependiendo de múltiples condiciones evaluadas.
                    </li>
                    <li className="p-3 bg-background/50 rounded-md border-l-2 border-primary">
                      <strong className="text-surface block mb-0.5">Basada en Eventos:</strong> La ruta que sigue el flujo se define según cuál evento ocurra primero en el entorno (ej. llegada de mensaje vs. expiración de temporizador).
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </FadeIn>

          {/* 1.5 Beneficios de usar BPMN */}
          <FadeIn delay={0.1}>
            <section>
              <h2 className="text-3xl md:text-4xl font-display mb-8 border-l-4 border-primary pl-4 text-surface">
                1.5 Beneficios de usar BPMN
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#FAF8F5] p-6 border-t-4 border-surface shadow-sm rounded-b-md">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="text-primary" size={24} />
                    <h3 className="font-display font-bold text-lg text-surface uppercase">Estandarización Universal</h3>
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    Estandariza la forma de documentar procesos, permitiendo que cualquier persona capacitada en BPMN (en cualquier organización) lea el diagrama sin necesitar explicación adicional.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-6 border-t-4 border-primary shadow-sm rounded-b-md">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="text-primary" size={24} />
                    <h3 className="font-display font-bold text-lg text-surface uppercase">Dependencias Claras entre Áreas</h3>
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    Hace visibles las dependencias entre áreas: en procesos con varios responsables (como el nuestro), deja claro en qué momento un área entrega trabajo a otra.
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-6 border-t-4 border-[#C1522A] shadow-sm rounded-b-md">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="text-[#C1522A]" size={24} />
                    <h3 className="font-display font-bold text-lg text-surface uppercase">Detección de Reprocesos y Fallos</h3>
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    Facilita detectar reprocesos o cuellos de botella (por ejemplo, un ciclo de "no aprobado" que regresa varias veces a la misma área para subsanar errores).
                  </p>
                </div>

                <div className="bg-[#FAF8F5] p-6 border-t-4 border-emerald-700 shadow-sm rounded-b-md">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle2 className="text-emerald-700" size={24} />
                    <h3 className="font-display font-bold text-lg text-surface uppercase">Base de Automatización Directa</h3>
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    Es la base para automatizar procesos con herramientas BPM (motores de flujo de trabajo) cuando el proceso ya está validado y estabilizado.
                  </p>
                </div>
              </div>
            </section>
          </FadeIn>

          {/* 1.6 Nuestro Diagrama BPMN — Gestión de Solicitud de Infraestructura Tecnológica */}
          <FadeIn delay={0.1}>
            <section className="space-y-8" id="bpmn-diagrama">
              <div className="border-b pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-1 block">
                  Flujo Operativo de Tiradores • Proceso Oficial
                </span>
                <h2 className="text-3xl md:text-4xl font-display text-surface">
                  1.6 Nuestro Diagrama BPMN — Gestión de Solicitud de Infraestructura Tecnológica
                </h2>
              </div>

              {/* HERO CARD CON EL DIAGRAMA BPMN */}
              <div className="bg-[#FAF7F2] p-4 sm:p-8 md:p-10 rounded-2xl border border-[#E3DACB] shadow-xl relative overflow-hidden group">
                
                {/* Header de la tarjeta del diagrama */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E8DFD3]">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-primary text-white rounded-lg shadow-sm">
                      <Workflow size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-surface">
                        Gestión de Solicitud de Infraestructura Tecnológica
                      </h3>
                      <p className="text-xs text-foreground-muted">
                        Diagrama de flujo de actividades con carriles por rol y compuertas lógicas de decisión
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setIsZoomed(!isZoomed);
                        setZoomScale(1);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-stone-100 text-surface text-xs font-semibold rounded-md border border-stone-300 transition-colors shadow-sm cursor-pointer"
                      title={isZoomed ? "Reducir vista" : "Ver en pantalla completa"}
                    >
                      {isZoomed ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                      <span>{isZoomed ? "Restaurar" : "Ampliar"}</span>
                    </button>
                    <a
                      href="/bpmn-diagram.svg"
                      download="BPMN_Gestion_Solicitud_Infraestructura.svg"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary hover:bg-primary-hover text-white text-xs font-semibold rounded-md transition-colors shadow-sm"
                      title="Descargar diagrama vectorial"
                    >
                      <Download size={14} />
                      <span>Descargar SVG</span>
                    </a>
                  </div>
                </div>

                {/* IMAGEN DEL DIAGRAMA CENTRADA (CLICKABLE PARA AMPLIAR) */}
                <div 
                  onClick={() => {
                    setIsZoomed(true);
                    setZoomScale(1);
                  }}
                  className="relative w-full overflow-hidden rounded-xl bg-[#F8F5EE] border border-stone-200/80 p-2 sm:p-4 flex items-center justify-center min-h-[380px] md:min-h-[500px] cursor-pointer group"
                >
                  <img
                    src={imageSrc}
                    onError={() => {
                      if (imageSrc !== '/bpmn-diagram.svg') {
                        setImageSrc('/bpmn-diagram.svg');
                      }
                    }}
                    alt="Diagrama BPMN Gestión de Solicitud de Infraestructura Tecnológica"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-[650px] object-contain rounded-lg transition-transform duration-300 shadow-md group-hover:scale-[1.01]"
                  />
                  
                  {/* Badge flotante de ayuda */}
                  <div className="absolute bottom-4 right-4 bg-surface/85 hover:bg-surface text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transition-all group-hover:scale-105 backdrop-blur-xs">
                    <Maximize2 size={13} className="text-primary" />
                    <span>Haz clic para ampliar</span>
                  </div>
                </div>

                {/* Pie de foto de la tarjeta */}
                <div className="mt-4 flex flex-col sm:flex-row justify-between items-center text-xs text-foreground-muted gap-2 px-2">
                  <div className="flex items-center gap-1.5">
                    <Sparkles size={14} className="text-primary" />
                    <span>Diagrama de proceso elaborado por el equipo Pisadores / Tiradores</span>
                  </div>
                  <span className="font-mono bg-white px-2.5 py-1 rounded border border-stone-200">
                    6 Carriles (Lanes) • 3 Compuertas (Gateways) • Ciclos de Reproceso
                  </span>
                </div>
              </div>

              {/* MODAL ZOOM CON CONTROLES AVANZADOS */}
              {isZoomed && (
                <div 
                  className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-2 sm:p-4 md:p-6"
                  onClick={() => setIsZoomed(false)}
                >
                  <div 
                    className="bg-[#FAF7F2] p-4 sm:p-6 rounded-2xl max-w-7xl w-full h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-stone-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex flex-wrap justify-between items-center mb-4 pb-3 border-b border-stone-300 gap-3">
                      <div>
                        <h4 className="font-display font-bold text-lg md:text-xl text-surface">
                          Vista Ampliada — BPMN: Gestión de Solicitud de Infraestructura
                        </h4>
                        <p className="text-xs text-foreground-muted font-sans">
                          Usa los controles de zoom o la rueda del ratón para inspeccionar cada carril y actividad
                        </p>
                      </div>

                      {/* Controles de Zoom */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center bg-white border border-stone-300 rounded-lg p-1 shadow-sm">
                          <button
                            onClick={() => setZoomScale(Math.max(0.6, zoomScale - 0.2))}
                            className="p-1.5 hover:bg-stone-100 rounded text-surface transition-colors cursor-pointer"
                            title="Reducir (-) zoom"
                          >
                            <ZoomOut size={16} />
                          </button>
                          <span className="px-3 text-xs font-mono font-bold text-surface min-w-[50px] text-center">
                            {Math.round(zoomScale * 100)}%
                          </span>
                          <button
                            onClick={() => setZoomScale(Math.min(2.5, zoomScale + 0.2))}
                            className="p-1.5 hover:bg-stone-100 rounded text-surface transition-colors cursor-pointer"
                            title="Aumentar (+) zoom"
                          >
                            <ZoomIn size={16} />
                          </button>
                          <button
                            onClick={() => setZoomScale(1)}
                            className="px-2 py-1 ml-1 hover:bg-stone-100 rounded text-[11px] font-semibold text-primary transition-colors cursor-pointer border-l border-stone-200"
                            title="Restablecer a 100%"
                          >
                            1:1
                          </button>
                        </div>

                        <a
                          href="/bpmn-diagram.svg"
                          download="BPMN_Gestion_Solicitud_Infraestructura.svg"
                          className="p-2 bg-primary hover:bg-primary-hover text-white rounded-lg transition-colors shadow-sm"
                          title="Descargar SVG original"
                        >
                          <Download size={16} />
                        </a>

                        <button 
                          onClick={() => setIsZoomed(false)}
                          className="p-2 bg-stone-200 hover:bg-stone-300 rounded-lg text-surface transition-colors cursor-pointer"
                          title="Cerrar vista ampliada (Esc)"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </div>

                    {/* Canvas con scroll y zoom dinámico */}
                    <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-white rounded-xl border border-stone-200 shadow-inner">
                      <div 
                        style={{ 
                          transform: `scale(${zoomScale})`, 
                          transformOrigin: 'center center',
                          transition: 'transform 0.15s ease-out' 
                        }}
                        className="w-full flex items-center justify-center"
                      >
                        <img 
                          src={imageSrc}
                          alt="Diagrama BPMN ampliado" 
                          referrerPolicy="no-referrer"
                          className="w-full max-h-[78vh] object-contain select-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* DESGLOSE DETALLADO DE CADA CARRIL (LANE) */}
              <div className="space-y-6 pt-4">
                <div className="flex items-center gap-2">
                  <Layers className="text-primary" size={24} />
                  <h3 className="text-2xl font-display font-bold text-surface uppercase">
                    Desglose del Diagrama por Carril (Lanes)
                  </h3>
                </div>

                <div className="space-y-4">
                  {laneBreakdown.map((lane) => (
                    <div 
                      key={lane.id}
                      className="bg-white p-6 border-l-4 border-primary shadow-sm rounded-r-xl transition-all hover:shadow-md"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-background rounded-md">
                            {lane.icon}
                          </div>
                          <div>
                            <h4 className="text-lg md:text-xl font-display font-bold text-surface">
                              {lane.role}
                            </h4>
                            <span className="text-xs font-semibold text-primary">
                              Responsable: {lane.holder}
                            </span>
                          </div>
                        </div>
                        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded border uppercase tracking-wider ${lane.badgeColor}`}>
                          Carril Activo
                        </span>
                      </div>

                      <p className="text-sm text-foreground-muted mb-4 leading-relaxed">
                        {lane.desc}
                      </p>

                      <div className="bg-background/50 p-4 rounded-md border border-stone-200">
                        <span className="text-xs font-bold uppercase tracking-wider text-surface block mb-2">
                          Actividades y puntos de control en este carril:
                        </span>
                        <ul className="space-y-2">
                          {lane.activities.map((act, idx) => (
                            <li key={idx} className="text-xs text-foreground-muted flex items-start gap-2">
                              <span className="text-primary mt-0.5 font-bold">→</span>
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                {/* TEXTO DE CIERRE REQUERIDO */}
                <div className="bg-surface text-foreground-inverse p-8 rounded-xl shadow-lg border-t-4 border-primary">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 text-primary rounded-lg shrink-0 mt-1">
                      <Sparkles size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold text-white mb-3">
                        Sinergia entre Modelos: IDEF0 y BPMN
                      </h4>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        Este diagrama complementa al diagrama IDEF0 del área: mientras <strong>IDEF0</strong> muestra la relación del proceso con su entorno (entradas, controles, mecanismos y salidas), <strong>BPMN</strong> detalla paso a paso cómo se ejecuta ese mismo proceso internamente entre las distintas áreas del equipo.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </section>
          </FadeIn>

        </div>
      </div>
    </AnimatedPage>
  );
}
