import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import PageHeaderBanner from '../components/PageHeaderBanner';
import VideoEmbed from '../components/VideoEmbed';
import { 
  Activity, 
  Server, 
  ExternalLink, 
  AlertTriangle, 
  Wifi, 
  Cpu, 
  HardDrive, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  FileText, 
  Radio, 
  Database, 
  HeartPulse, 
  Bell, 
  Zap, 
  RefreshCw,
  Image as ImageIcon
} from 'lucide-react';

export default function Monitoreo() {
  const prtgMapUrl = "http://laptop-7td9v3rm/mapshow.htm?id=2001";
  const [iframeError, setIframeError] = useState(false);
  const [activeViewMode, setActiveViewMode] = useState<'iframe' | 'mockup'>('iframe');

  return (
    <AnimatedPage>
      <div className="w-full bg-background pb-24">
        {/* Header Oficial */}
        <PageHeaderBanner
          title="Monitoreo de Infraestructura"
          badge="Telemetría en Tiempo Real • PRTG Network Monitor"
          subtitle="Cómo vigilamos en tiempo real la salud de la infraestructura que sostiene los sistemas clínicos de IATECH Co."
        />

        <div className="container-wide mt-16 space-y-24">

          {/* ==================== 1.1 HERO CON ACCESO AL MAPA EN VIVO ==================== */}
          <section className="bg-surface text-foreground-inverse border-2 border-primary/50 rounded-2xl p-6 sm:p-10 shadow-hard-lg relative overflow-hidden">
            {/* Ambient Background Grid */}
            <div aria-hidden="true" className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-neutral-800 pb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-primary font-mono text-xs font-bold uppercase tracking-widest">
                      PRTG Core Server // Live Node
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-white tracking-wide">
                    Mapa de monitoreo en vivo — PRTG
                  </h2>
                  <p className="text-gray-300 text-base sm:text-lg mt-2 max-w-2xl font-sans leading-relaxed">
                    Visualiza el estado actual de nuestra infraestructura en el mapa de PRTG Network Monitor.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
                  <a
                    href={prtgMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-3 text-base px-7 py-3.5 shadow-hard-orange hover:scale-105 transition-transform shrink-0"
                  >
                    <span>Abrir mapa de monitoreo</span>
                    <ExternalLink size={18} />
                  </a>

                  {/* Selector de Vista: Iframe o Captura / Esquema */}
                  <div className="flex items-center gap-2 bg-[#1c1c1c] p-1 rounded-lg border border-neutral-700 text-xs font-mono">
                    <button
                      onClick={() => setActiveViewMode('iframe')}
                      className={`px-3 py-1.5 rounded transition-colors ${
                        activeViewMode === 'iframe'
                          ? 'bg-primary text-white font-bold'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      Iframe en Vivo
                    </button>
                    <button
                      onClick={() => setActiveViewMode('mockup')}
                      className={`px-3 py-1.5 rounded transition-colors ${
                        activeViewMode === 'mockup'
                          ? 'bg-primary text-white font-bold'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      Captura / Esquema PRTG
                    </button>
                  </div>
                </div>
              </div>

              {/* Nota visible obligatoria */}
              <div className="flex items-start gap-3 bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
                <AlertTriangle size={20} className="text-primary shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                  <strong className="text-white">Nota de conectividad:</strong> Este mapa está alojado en el servidor local del equipo (<code>laptop-7td9v3rm</code>). Solo es accesible desde la misma red donde corre PRTG.
                </p>
              </div>

              {/* Visor Interactivo Embebido con Estado de Respaldo */}
              <div className="w-full mt-2">
                {activeViewMode === 'iframe' ? (
                  <div className="relative w-full h-[600px] rounded-xl border-2 border-primary/60 overflow-hidden bg-[#0a0a0a] shadow-inner">
                    {!iframeError ? (
                      <iframe
                        src={prtgMapUrl}
                        title="Mapa de Monitoreo PRTG"
                        className="w-full h-full border-0"
                        onError={() => setIframeError(true)}
                      />
                    ) : null}

                    {/* Fallback Overlay si no conecta o falla */}
                    <div 
                      className={`absolute inset-0 bg-[#0e0e0e]/95 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center transition-opacity ${
                        iframeError ? 'opacity-100 pointer-events-auto' : 'hidden'
                      }`}
                    >
                      <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-700 flex items-center justify-center text-primary mb-4 shadow-hard">
                        <Server size={32} />
                      </div>
                      <h3 className="text-2xl font-display text-white mb-2">
                        No se pudo cargar el mapa
                      </h3>
                      <p className="text-gray-400 max-w-md text-sm mb-6 font-sans">
                        Verifica que estés en la red local con PRTG activo (o revisa restricciones de contenido mixto HTTP/HTTPS de tu navegador).
                      </p>
                      <div className="flex flex-wrap gap-4 justify-center">
                        <a
                          href={prtgMapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-sm px-6 py-3"
                        >
                          Abrir mapa de monitoreo en nueva pestaña
                        </a>
                        <button
                          onClick={() => { setIframeError(false); }}
                          className="btn-secondary text-sm px-6 py-3"
                        >
                          Reintentar carga
                        </button>
                        <button
                          onClick={() => setActiveViewMode('mockup')}
                          className="px-5 py-3 rounded-full border border-neutral-700 text-gray-300 hover:text-white text-sm"
                        >
                          Ver captura / esquema
                        </button>
                      </div>
                    </div>

                    {/* Barra de estado en pie del iframe */}
                    <div className="absolute bottom-0 left-0 right-0 bg-[#111111]/90 backdrop-blur-sm border-t border-neutral-800 px-4 py-2 flex items-center justify-between text-xs font-mono text-gray-400">
                      <span className="truncate">URL: {prtgMapUrl}</span>
                      <button
                        onClick={() => setIframeError(!iframeError)}
                        className="text-primary hover:underline ml-2 shrink-0"
                      >
                        {iframeError ? "Ocultar diagnóstico" : "Simular / verificar respaldo"}
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Captura de pantalla / Esquema Visual de PRTG */
                  <div className="w-full min-h-[500px] rounded-xl border-2 border-primary/60 bg-[#0a0a0a] p-8 flex flex-col justify-between relative overflow-hidden shadow-inner">
                    <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/20 text-primary rounded-lg">
                          <ImageIcon size={22} />
                        </div>
                        <div>
                          <h4 className="font-display text-lg text-white">
                            Captura del mapa PRTG Network Monitor
                          </h4>
                          <span className="text-xs font-mono text-gray-400">
                            ID Mapa: 2001 &bull; Tiradores Healthcare Topology
                          </span>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded bg-neutral-800 text-primary font-mono text-xs border border-primary/30">
                        REFERENCIA OFICIAL
                      </span>
                    </div>

                    {/* Diagrama arquitectónico visual del mapa PRTG */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto py-4">
                      {/* Nodo 1: Gateway & Core */}
                      <div className="bg-[#141414] border border-emerald-500/40 p-5 rounded-xl flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> UP / ACTIVO
                          </span>
                          <span className="text-[10px] font-mono text-gray-400">PING: 0.8ms</span>
                        </div>
                        <h5 className="font-display text-xl text-white mb-1">laptop-7td9v3rm</h5>
                        <p className="text-xs text-gray-400 mb-4">Core Probe Server & Servicio PRTG 24/7</p>
                        <div className="bg-neutral-900 p-2.5 rounded text-[11px] font-mono text-gray-300 space-y-1">
                          <div>CPU Core: 14% | RAM: 3.8 / 16 GB</div>
                          <div>Disco C:\ 142 GB libres</div>
                        </div>
                      </div>

                      {/* Nodo 2: Servidor Clínico & BD */}
                      <div className="bg-[#141414] border border-emerald-500/40 p-5 rounded-xl flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> UP / ACTIVO
                          </span>
                          <span className="text-[10px] font-mono text-gray-400">HTTP 200 OK</span>
                        </div>
                        <h5 className="font-display text-xl text-white mb-1">Servidor Base de Datos</h5>
                        <p className="text-xs text-gray-400 mb-4">Historias Clínicas IA MediTech</p>
                        <div className="bg-neutral-900 p-2.5 rounded text-[11px] font-mono text-gray-300 space-y-1">
                          <div>PostgreSQL: Puerto 5432 Conectado</div>
                          <div>Tiempo Respuesta: 18ms</div>
                        </div>
                      </div>

                      {/* Nodo 3: Sensores IoT y Red Hospitalaria */}
                      <div className="bg-[#141414] border border-amber-500/40 p-5 rounded-xl flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono text-xs text-amber-400 font-bold flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-amber-400" /> WARNING UMBRAL
                          </span>
                          <span className="text-[10px] font-mono text-gray-400">SNMP 92%</span>
                        </div>
                        <h5 className="font-display text-xl text-white mb-1">Switch Rack Quirúrgico</h5>
                        <p className="text-xs text-gray-400 mb-4">Dispositivos Médicos Conectados</p>
                        <div className="bg-neutral-900 p-2.5 rounded text-[11px] font-mono text-gray-300 space-y-1">
                          <div>Tráfico enlace: 88 Mbps (Cerca del umbral)</div>
                          <div>Ventilador: Normal (28°C)</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-mono">
                      <span>Placeholder oficial del mapa: Captura de pantalla representativa con topología de red.</span>
                      <a
                        href={prtgMapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1 font-bold"
                      >
                        Abrir mapa original en PRTG <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* ==================== 1.2 ¿QUÉ ES EL MONITOREO DE INFRAESTRUCTURA? ==================== */}
          <section className="bg-white p-8 md:p-12 border-l-8 border-primary shadow-hard rounded-r-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span aria-hidden="true" className="w-2 h-10 bg-primary block rounded-full" />
              <h2 className="text-3xl md:text-4xl font-display text-surface">
                1. ¿Qué es el Monitoreo de Infraestructura?
              </h2>
            </div>

            <p className="text-lg text-foreground-muted leading-relaxed font-sans mb-8">
              El monitoreo de infraestructura TI es la práctica de supervisar de forma continua el estado, rendimiento y disponibilidad de los componentes tecnológicos de una organización (servidores, redes, equipos, servicios y aplicaciones) para detectar fallas o degradaciones antes de que afecten a los usuarios. En un entorno de salud digital, donde la caída de un sistema puede afectar información clínica crítica, el monitoreo deja de ser opcional y se convierte en parte de la garantía de continuidad operativa.
            </p>

            <VideoEmbed
              title="¿Qué es el monitoreo de infraestructura TI?"
              channel="IATECH Co. Educación Técnica"
              url="PENDIENTE DE PEGAR"
            />
          </section>

          {/* ==================== 1.3 CONCEPTOS CLAVE ==================== */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <span aria-hidden="true" className="w-2 h-10 bg-primary block rounded-full" />
              <div>
                <h2 className="text-3xl md:text-4xl font-display text-surface">
                  2. Conceptos Clave de Monitoreo
                </h2>
                <p className="text-sm text-foreground-muted uppercase tracking-widest font-sans">
                  Vocabulario técnico y métricas de referencia en Tiradores
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              <ConceptCard
                icon={<Activity size={24} />}
                title="Disponibilidad (Uptime)"
                desc="Porcentaje de tiempo en que un sistema está operativo. Nuestra meta de referencia es 99.9%."
                tag="Meta 99.9%"
              />
              <ConceptCard
                icon={<Zap size={24} />}
                title="Latencia"
                desc="Tiempo que tarda una señal o solicitud en ir y volver entre dos puntos de la red."
                tag="< 1ms local"
              />
              <ConceptCard
                icon={<Wifi size={24} />}
                title="Ancho de banda y tráfico"
                desc="Capacidad de transmisión de un enlace y volumen de datos que realmente circula por él."
                tag="Throughput"
              />
              <ConceptCard
                icon={<AlertTriangle size={24} />}
                title="Umbral (Threshold)"
                desc="Valor límite que, al superarse, cambia el estado de un indicador (por ejemplo, CPU por encima de 90%)."
                tag="Triggers"
              />
              <ConceptCard
                icon={<Bell size={24} />}
                title="Alerta / Notificación"
                desc="Aviso automático (correo, SMS, push) cuando un indicador cruza un umbral o falla."
                tag="Instantáneo"
              />
              <ConceptCard
                icon={<Clock size={24} />}
                title="MTTR (Mean Time To Repair)"
                desc="Tiempo medio que toma restaurar un servicio tras una falla imprevista."
                tag="< 2 Horas"
              />
              <ConceptCard
                icon={<ShieldCheck size={24} />}
                title="MTBF (Mean Time Between Failures)"
                desc="Tiempo medio transcurrido entre fallas de un componente o sistema físico."
                tag="Confiabilidad"
              />
              <ConceptCard
                icon={<FileText size={24} />}
                title="SLA (Nivel de Servicio)"
                desc="Compromiso formal de disponibilidad y tiempos de respuesta que debe cumplirse ante el cliente."
                tag="Contrato"
              />
              <ConceptCard
                icon={<TrendingUp size={24} />}
                title="Proactivo vs. Reactivo"
                desc="El proactivo detecta señales tempranas y previene la falla; el reactivo solo responde cuando el problema ya ocurrió."
                tag="Estrategia"
              />
              <ConceptCard
                icon={<Layers size={24} />}
                title="Línea base (Baseline)"
                desc="Comportamiento normal medido de un sistema, usado como referencia para detectar anomalías."
                tag="Patrones"
              />
            </div>
          </section>

          {/* ==================== 1.4 ¿QUÉ SE MONITOREA? ==================== */}
          <section className="bg-background-dark p-8 md:p-12 rounded-2xl border-t-4 border-primary shadow-hard">
            <div className="flex items-center gap-3 mb-8">
              <span aria-hidden="true" className="w-2 h-10 bg-primary block rounded-full" />
              <div>
                <h2 className="text-3xl md:text-4xl font-display text-surface">
                  3. ¿Qué se Monitorea en Tiradores?
                </h2>
                <p className="text-sm text-foreground-muted uppercase tracking-widest font-sans">
                  Las 5 capas de cobertura técnica en IA MediTech
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              <MonitoringLayerCard
                num="01"
                icon={<Wifi size={28} />}
                title="Red"
                items="Conectividad, latencia, pérdida de paquetes, tráfico de switches, routers y enlaces de fibra óptica."
              />
              <MonitoringLayerCard
                num="02"
                icon={<Server size={28} />}
                title="Servidores"
                items="Uso de CPU, memoria RAM, estado del almacenamiento en disco y servicios de sistema en ejecución."
              />
              <MonitoringLayerCard
                num="03"
                icon={<Cpu size={28} />}
                title="Hardware físico"
                items="Temperatura térmica, estado de ventiladores, fuentes de poder redundantes, discos duros y UPS."
              />
              <MonitoringLayerCard
                num="04"
                icon={<Database size={28} />}
                title="Servicios y aplicaciones"
                items="Respuesta de sitios web, motores de bases de datos relacionales y microservicios críticos de salud."
              />
              <MonitoringLayerCard
                num="05"
                icon={<HeartPulse size={28} />}
                title="Dispositivos IoT médicos"
                items="Estado de conexión, telemetría y disponibilidad continua de equipos biomédicos conectados."
              />
            </div>
          </section>

          {/* ==================== 1.5 NUESTRA HERRAMIENTA: PRTG NETWORK MONITOR ==================== */}
          <section className="bg-surface text-foreground-inverse p-8 md:p-12 rounded-2xl border-t-4 border-primary shadow-hard-lg">
            <div className="flex items-center gap-3 mb-6">
              <span aria-hidden="true" className="w-2 h-10 bg-primary block rounded-full" />
              <div>
                <h2 className="text-3xl md:text-4xl font-display text-primary">
                  4. Nuestra Herramienta: PRTG Network Monitor
                </h2>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-sans">
                  Plataforma central de supervisión por sensores de Paessler AG
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 mb-10 text-gray-300 font-sans leading-relaxed">
              <div className="lg:col-span-6 space-y-4">
                <div className="bg-[#181818] p-6 rounded-xl border border-neutral-800">
                  <h3 className="text-xl font-display text-white mb-2">¿Qué es PRTG?</h3>
                  <p className="text-sm">
                    PRTG Network Monitor es una herramienta de monitoreo de redes e infraestructura desarrollada por Paessler, que supervisa dispositivos y servicios mediante <strong>sensores</strong> y los presenta en dashboards, mapas y reportes consolidados.
                  </p>
                </div>

                <div className="bg-[#181818] p-6 rounded-xl border border-neutral-800">
                  <h3 className="text-xl font-display text-white mb-2">¿Cómo funciona?</h3>
                  <p className="text-sm">
                    Un <strong>servidor central (core)</strong> coordina uno o más <strong>probes (sondas)</strong> que ejecutan los sensores contra los dispositivos monitoreados para compilar métricas en tiempo real.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="bg-[#181818] p-6 rounded-xl border border-neutral-800">
                  <h3 className="text-xl font-display text-white mb-2">Tecnologías de recolección de datos</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    PRTG recopila información utilizando múltiples protocolos industriales sin requerir agentes pesados en los terminales:
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-primary">
                    <span className="px-2.5 py-1 bg-neutral-900 border border-primary/30 rounded">Ping (ICMP)</span>
                    <span className="px-2.5 py-1 bg-neutral-900 border border-primary/30 rounded">SNMP (v1/v2c/v3)</span>
                    <span className="px-2.5 py-1 bg-neutral-900 border border-primary/30 rounded">WMI</span>
                    <span className="px-2.5 py-1 bg-neutral-900 border border-primary/30 rounded">NetFlow / sFlow</span>
                    <span className="px-2.5 py-1 bg-neutral-900 border border-primary/30 rounded">Peticiones HTTP/S</span>
                    <span className="px-2.5 py-1 bg-neutral-900 border border-primary/30 rounded">SSH / REST API</span>
                  </div>
                </div>

                <div className="bg-[#181818] p-6 rounded-xl border border-neutral-800">
                  <h3 className="text-xl font-display text-white mb-2">Elementos Principales de PRTG</h3>
                  <ul className="text-xs sm:text-sm space-y-2 text-gray-300">
                    <li><strong className="text-white">Dispositivos (devices):</strong> cada equipo o servicio que se monitorea (servidor, switch, impresora, etc.).</li>
                    <li><strong className="text-white">Sensores:</strong> unidad básica de medición (ping, uso de CPU, tráfico de puerto, espacio en disco, respuesta HTTP...). Cada sensor tiene uno o más canales.</li>
                    <li><strong className="text-white">Mapas (maps):</strong> vistas gráficas personalizables que muestran el estado sobre un plano. <em>El mapa de nuestro proyecto es el del enlace de arriba.</em></li>
                    <li><strong className="text-white">Dashboards & Reportes:</strong> paneles con gráficos ejecutivos e informes periódicos de disponibilidad y cumplimiento de SLAs.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ESTADOS DE UN SENSOR EN PRTG (Círculos de color oficiales) */}
            <div className="mt-8 pt-8 border-t border-neutral-800">
              <h3 className="font-display text-2xl text-white mb-4">
                Estados Oficiales de un Sensor en PRTG
              </h3>
              <p className="text-sm text-gray-400 mb-6 font-sans">
                Cada sensor refleja en tiempo real su condición operativa a través de la convención cromática estándar:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                <SensorStateBadge
                  colorClass="bg-emerald-500"
                  name="Up / Correcto"
                  desc="Operación normal"
                  textColor="text-emerald-400"
                />
                <SensorStateBadge
                  colorClass="bg-yellow-400"
                  name="Warning / Advertencia"
                  desc="Umbral secundario superado"
                  textColor="text-yellow-400"
                />
                <SensorStateBadge
                  colorClass="bg-rose-500"
                  name="Down / Caído"
                  desc="Falla total del servicio"
                  textColor="text-rose-400"
                />
                <SensorStateBadge
                  colorClass="bg-sky-500"
                  name="Paused / Pausado"
                  desc="Mantenimiento programado"
                  textColor="text-sky-400"
                />
                <SensorStateBadge
                  colorClass="bg-orange-500"
                  name="Unusual / Inusual"
                  desc="Desvío de la línea base"
                  textColor="text-orange-400"
                />
                <SensorStateBadge
                  colorClass="bg-gray-500"
                  name="Unknown / Desconocido"
                  desc="Sin datos o sonda apagada"
                  textColor="text-gray-400"
                />
              </div>
            </div>

            {/* Videos complementarios PRTG con placeholder oficial */}
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <VideoEmbed
                title="Tutorial de PRTG Network Monitor en español"
                channel="Paessler AG / Capacitación"
                url="PENDIENTE DE PEGAR"
              />
              <VideoEmbed
                title="Cómo crear un mapa en PRTG"
                channel="Paessler AG / Tutoriales"
                url="PENDIENTE DE PEGAR"
              />
            </div>
          </section>

          {/* ==================== 1.6 FLUJO DEL MONITOREO EN NUESTRO EQUIPO ==================== */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <span aria-hidden="true" className="w-2 h-10 bg-primary block rounded-full" />
              <div>
                <h2 className="text-3xl md:text-4xl font-display text-surface">
                  5. Flujo del Monitoreo en el Equipo Tiradores
                </h2>
                <p className="text-sm text-foreground-muted uppercase tracking-widest font-sans">
                  Proceso interactivo de 5 pasos desde la detección hasta la documentación
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              <WorkflowStep
                step="01"
                title="Detectar"
                role="Sensores PRTG"
                desc="Vigilancia activa 24/7 y muestreo continuo contra umbrales predefinidos."
              />
              <WorkflowStep
                step="02"
                title="Alertar"
                role="Notificación Inmediata"
                desc="Disparo de avisos automáticos a canales críticos (email, SMS, webhook)."
              />
              <WorkflowStep
                step="03"
                title="Diagnosticar"
                role="Operaciones de Soporte"
                desc="Leonardo Ibarra analiza la causa raíz, severidad y servicios afectados."
              />
              <WorkflowStep
                step="04"
                title="Resolver"
                role="Infraestructura Global"
                desc="Einar Guillén y equipo ejecutan la corrección física o conmutación por falla."
              />
              <WorkflowStep
                step="05"
                title="Verificar y Documentar"
                role="Aseguramiento de Calidad"
                desc="Huáscar Durán valida el restablecimiento del SLA y registra el post-mortem."
                isLast
              />
            </div>
          </section>

          {/* ==================== 1.7 BENEFICIOS DEL MONITOREO ==================== */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <span aria-hidden="true" className="w-2 h-10 bg-primary block rounded-full" />
              <div>
                <h2 className="text-3xl md:text-4xl font-display text-surface">
                  6. Beneficios del Monitoreo para IA MediTech
                </h2>
                <p className="text-sm text-foreground-muted uppercase tracking-widest font-sans">
                  Retorno tangible en seguridad hospitalaria y continuidad operativa
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <BenefitCard
                num="01"
                title="Detección temprana de fallas"
                desc="Identifica advertencias y desviaciones de rendimiento antes de que se transformen en caídas críticas para el personal médico."
              />
              <BenefitCard
                num="02"
                title="Reducción del downtime"
                desc="Minimiza drásticamente el tiempo de inactividad de los servidores y bases de datos clínicas mediante respuesta automatizada."
              />
              <BenefitCard
                num="03"
                title="Decisiones basadas en datos"
                desc="Permite planificar actualizaciones de hardware y presupuestos basándose en tendencias reales de consumo de CPU, memoria y ancho de banda."
              />
              <BenefitCard
                num="04"
                title="Evidencia de SLA y normativas"
                desc="Genera auditorías y reportes históricos certificados para demostrar el cumplimiento riguroso de acuerdos de nivel de servicio y estándares de salud."
              />
            </div>
          </section>

          {/* ==================== 1.8 BUENAS PRÁCTICAS ==================== */}
          <section className="bg-white p-8 md:p-12 rounded-2xl border border-stone-200 shadow-hard">
            <div className="flex items-center gap-3 mb-6">
              <span aria-hidden="true" className="w-2 h-10 bg-primary block rounded-full" />
              <div>
                <h2 className="text-3xl md:text-4xl font-display text-surface">
                  7. Buenas Prácticas de Monitoreo
                </h2>
                <p className="text-sm text-foreground-muted uppercase tracking-widest font-sans">
                  Directrices operativas aplicadas por los ingenieros de Tiradores
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <BestPracticeItem text="Definir umbrales realistas basados en la línea base del sistema para evitar falsos positivos." />
              <BestPracticeItem text="Evitar el exceso de alertas (alert fatigue) para que las emergencias reales nunca sean ignoradas." />
              <BestPracticeItem text="Documentar cada incidente y su resolución bajo la cultura Blameless Post-Mortem." />
              <BestPracticeItem text="Revisar reportes de disponibilidad y tendencias periódicamente con Dirección Técnica." />
              <BestPracticeItem text="Mantener permanentemente actualizado el mapa de infraestructura física y lógica." />
              <BestPracticeItem text="Probar y auditar periódicamente los canales de notificación y cadenas de escalado." />
            </div>
          </section>

          {/* ==================== 1.9 RELACIÓN CON EL RESTO DEL PROYECTO ==================== */}
          <section className="bg-surface text-foreground-inverse p-8 md:p-12 rounded-2xl border-l-8 border-primary shadow-hard-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-primary font-mono text-xs font-bold uppercase mb-2">
                <Radio size={16} /> Ecosistema Integrado Tiradores
              </div>
              <h3 className="text-2xl sm:text-3xl font-display text-white mb-3">
                Conexión con el Resto del Proyecto
              </h3>
              <p className="text-gray-300 font-sans leading-relaxed text-base sm:text-lg">
                El monitoreo alimenta los KPIs de Gestión de Tecnología (<Link to="/gestion-tecnologia" className="text-primary hover:underline font-semibold">/gestion-tecnologia</Link>), responde a nuestra misión de máxima disponibilidad (<Link to="/mision-vision" className="text-primary hover:underline font-semibold">/mision-vision</Link>) y se ejecuta en el proceso descrito en <Link to="/bpmn" className="text-primary hover:underline font-semibold">/bpmn</Link> y <Link to="/idef0" className="text-primary hover:underline font-semibold">/idef0</Link>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link to="/contacto" className="btn-primary text-sm px-6 py-3 whitespace-nowrap">
                Contactar al Equipo
              </Link>
              <Link to="/bpmn" className="btn-secondary text-sm px-6 py-3 whitespace-nowrap">
                Ver Proceso BPMN
              </Link>
            </div>
          </section>

        </div>
      </div>
    </AnimatedPage>
  );
}

/* ==================== SUBCOMPONENTES MODULARES ==================== */

function ConceptCard({ icon, title, desc, tag }: { icon: React.ReactNode; title: string; desc: string; tag: string }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-hard hover:border-primary hover:shadow-hard-orange transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-lg bg-surface text-primary flex items-center justify-center border border-primary/20 group-hover:scale-105 transition-transform">
            {icon}
          </div>
          <span className="font-mono text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
            {tag}
          </span>
        </div>
        <h4 className="font-display text-xl text-surface font-bold mb-2 leading-tight">
          {title}
        </h4>
        <p className="text-sm text-foreground-muted font-sans leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

function MonitoringLayerCard({ num, icon, title, items }: { num: string; icon: React.ReactNode; title: string; items: string }) {
  return (
    <div className="bg-white p-6 rounded-xl border-l-4 border-primary shadow-hard hover:shadow-hard-orange transition-all duration-300 relative overflow-hidden group">
      <div className="text-6xl font-display text-primary/10 absolute right-3 top-2 font-bold select-none pointer-events-none group-hover:scale-110 transition-transform">
        {num}
      </div>
      <div className="relative z-10">
        <div className="text-primary mb-3">
          {icon}
        </div>
        <h4 className="font-display text-xl text-surface font-bold mb-2">
          {title}
        </h4>
        <p className="text-xs sm:text-sm text-foreground-muted font-sans leading-relaxed">
          {items}
        </p>
      </div>
    </div>
  );
}

function SensorStateBadge({ colorClass, name, desc, textColor }: { colorClass: string; name: string; desc: string; textColor: string }) {
  return (
    <div className="bg-[#141414] p-4 rounded-xl border border-neutral-800 flex flex-col items-center text-center hover:border-neutral-700 transition-colors">
      <div className={`w-6 h-6 rounded-full ${colorClass} mb-3 shadow-md`} />
      <span className={`font-mono text-xs font-bold mb-1 ${textColor}`}>
        {name}
      </span>
      <span className="text-[11px] text-gray-400 font-sans">
        {desc}
      </span>
    </div>
  );
}

function WorkflowStep({ step, title, role, desc, isLast = false }: { step: string; title: string; role: string; desc: string; isLast?: boolean }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-hard flex flex-col justify-between relative group hover:border-primary hover:shadow-hard-orange transition-all">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-2xl font-bold text-primary">
            {step}
          </span>
          {!isLast && (
            <ArrowRight size={18} className="text-stone-300 hidden md:block" />
          )}
        </div>
        <h4 className="font-display text-2xl text-surface mb-1">
          {title}
        </h4>
        <div className="inline-block px-2 py-0.5 rounded bg-primary/10 text-primary font-mono text-[10px] font-bold uppercase tracking-wider mb-3 border border-primary/20">
          {role}
        </div>
        <p className="text-xs sm:text-sm text-foreground-muted font-sans leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

function BenefitCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="bg-white p-6 rounded-xl border-t-4 border-surface shadow-hard hover:border-primary hover:shadow-hard-orange transition-all duration-300">
      <span className="font-mono text-xs text-primary font-bold block mb-1">BENEFICIO // {num}</span>
      <h4 className="font-display text-xl text-surface font-bold mb-3 leading-tight">
        {title}
      </h4>
      <p className="text-sm text-foreground-muted font-sans leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function BestPracticeItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-xl bg-stone-50 border border-stone-200 hover:border-primary/40 transition-colors">
      <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
      <span className="text-sm sm:text-base text-foreground-muted font-sans leading-relaxed font-medium">
        {text}
      </span>
    </div>
  );
}
