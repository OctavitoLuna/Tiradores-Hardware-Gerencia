import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import PageHeaderBanner from '../components/PageHeaderBanner';
import AccordionSection from '../components/AccordionSection';
import PriceTable from '../components/PriceTable';
import { 
  queSonServiciosExternos,
  paraQueSirven,
  servicioAXS,
  servicioStarlink,
  servicioInhibicion,
  comparativaServicios,
  leyendaPreciosComun
} from '../data/serviciosData';
import { 
  AxsBoliviaLogo, 
  StarlinkLogo, 
  IspKeyboardVisual, 
  SignalJammerVisual 
} from '../components/servicios/ServiciosVisuals';
import { 
  Server, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Radio, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  DollarSign, 
  Lock, 
  Wifi, 
  Globe, 
  Network, 
  Activity, 
  Compass,
  Building2,
  ExternalLink
} from 'lucide-react';

export default function ServiciosExternos() {
  // Tabs states for pricing tables
  const [activeAxsTab, setActiveAxsTab] = useState(servicioAXS.tabs[0].id);
  const [activeStarlinkTab, setActiveStarlinkTab] = useState(servicioStarlink.tabs[0].id);

  const currentAxsTab = servicioAXS.tabs.find(t => t.id === activeAxsTab) || servicioAXS.tabs[0];
  const currentStarlinkTab = servicioStarlink.tabs.find(t => t.id === activeStarlinkTab) || servicioStarlink.tabs[0];

  return (
    <AnimatedPage>
      <div className="w-full bg-background pb-24">
        {/* Header Oficial */}
        <PageHeaderBanner
          title="SERVICIOS EXTERNOS DE NUESTRA EMPRESA"
          badge="Outsourcing Tecnológico • Conectividad Crítica y Seguridad"
          subtitle="Proveedores especializados de conectividad dedicada, respaldo satelital y protección electromagnética para los sistemas de IATECH Co."
        />

        <div className="container-wide mt-16 space-y-24">

          {/* ==================== 1. ¿QUÉ SON LOS SERVICIOS EXTERNOS? ==================== */}
          <section className="bg-white p-8 md:p-12 border-l-8 border-primary shadow-hard rounded-r-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span aria-hidden="true" className="w-2 h-10 bg-primary block rounded-full" />
              <div>
                <span className="text-primary font-mono text-xs font-bold uppercase tracking-widest block mb-1">
                  Fundamento Operativo
                </span>
                <h2 className="text-3xl md:text-4xl font-display text-surface">
                  1. ¿Qué son los Servicios Externos?
                </h2>
              </div>
            </div>

            <p className="text-lg md:text-xl text-surface font-display font-medium leading-relaxed mb-6 border-b border-stone-200 pb-6">
              "{queSonServiciosExternos.quote}"
            </p>

            <p className="text-base sm:text-lg text-foreground-muted font-sans leading-relaxed">
              {queSonServiciosExternos.ampliacion}
            </p>
          </section>

          {/* ==================== 2. ¿PARA QUÉ SIRVEN? (Texto izquierda, Visual derecha) ==================== */}
          <section className="bg-background-dark p-8 md:p-12 rounded-2xl border-t-4 border-primary shadow-hard">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Text & Core Pillars */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <span aria-hidden="true" className="w-2 h-10 bg-primary block rounded-full" />
                  <div>
                    <span className="text-primary font-mono text-xs font-bold uppercase tracking-widest block">
                      Enfoque en el Core Business
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display text-surface">
                      2. ¿Para qué Sirven?
                    </h2>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-foreground-muted font-sans leading-relaxed">
                  {paraQueSirven.quote}
                </p>

                <div className="space-y-4 pt-2">
                  {paraQueSirven.pilares.map((pilar) => (
                    <div 
                      key={pilar.id}
                      className="p-5 rounded-xl bg-white border border-stone-200 shadow-sm hover:border-primary/60 transition-colors flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-surface text-primary flex items-center justify-center shrink-0 mt-0.5 border border-primary/20">
                        {pilar.id === 'continuidad' ? <Activity size={20} /> : pilar.id === 'seguridad' ? <Lock size={20} /> : <Zap size={20} />}
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-lg text-surface mb-1">
                          {pilar.title}
                        </h4>
                        <p className="text-sm text-foreground-muted font-sans leading-relaxed">
                          {pilar.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual "Internet Service Providers" */}
              <div className="lg:col-span-5 h-full flex flex-col justify-center">
                <IspKeyboardVisual />
              </div>
            </div>

            {/* 3 Tarjetas Extra "Ventajas adicionales" */}
            <div className="mt-12 pt-8 border-t border-stone-300">
              <h3 className="font-display text-2xl text-surface mb-6 flex items-center gap-2">
                <span className="text-primary">✦</span> Ventajas Adicionales del Outsourcing Técnico
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paraQueSirven.ventajasAdicionales.map((v, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border-t-4 border-surface shadow-hard hover:border-primary transition-all">
                    <span className="font-mono text-xs font-bold text-primary block mb-2">VENTAJA // 0{i+1}</span>
                    <h4 className="font-display text-xl text-surface font-bold mb-2 leading-snug">
                      {v.title}
                    </h4>
                    <p className="text-sm text-foreground-muted font-sans leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ==================== 3. SERVICIO 1: INTERNET DEDICADO (AXS BOLIVIA) ==================== */}
          <section className="bg-white p-8 md:p-12 rounded-2xl border-2 border-stone-200 shadow-hard">
            {/* Header del Servicio: Logo AXS izquierda, Título y Descripción derecha */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-stone-200 pb-8 mb-8">
              <div className="md:col-span-4 lg:col-span-3 flex justify-center">
                <AxsBoliviaLogo />
              </div>

              <div className="md:col-span-8 lg:col-span-9 space-y-3">
                <div className="flex items-center gap-2 text-primary font-mono text-xs font-bold uppercase tracking-wider">
                  <Wifi size={16} /> {servicioAXS.badge}
                </div>
                <h2 className="text-3xl sm:text-4xl font-display text-surface">
                  {servicioAXS.title}
                </h2>
                <p className="text-base sm:text-lg text-foreground-muted font-sans leading-relaxed">
                  "{servicioAXS.description}"
                </p>
              </div>
            </div>

            {/* 4 Acordeones (Cerrados por defecto, títulos en cursiva naranja) */}
            <div className="space-y-4">
              
              {/* Acordeón 1: Funcionalidad */}
              <AccordionSection title="Funcionalidad" defaultOpen={false} badge="Arquitectura de Enlace">
                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-foreground-muted font-sans pt-2">
                  <p>{servicioAXS.funcionalidad}</p>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                    <span>
                      <strong>Garantía de rendimiento:</strong> La tecnología DWDM (Dense Wavelength Division Multiplexing) de AXS permite multiplexar múltiples longitudes de onda en una sola fibra, garantizando escalabilidad inmediata hacia anchos de banda de 1 Gbps sin cambiar el tendido físico.
                    </span>
                  </div>
                </div>
              </AccordionSection>

              {/* Acordeón 2: Características */}
              <AccordionSection title="Características" defaultOpen={false} badge="Especificaciones Técnicas">
                <div className="pt-2">
                  <ul className="space-y-3 font-sans text-sm sm:text-base text-foreground-muted">
                    {servicioAXS.caracteristicas.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionSection>

              {/* Acordeón 3: Planes y Precios (AXS Business) */}
              <AccordionSection title="Planes y Precios (AXS Business)" defaultOpen={false} badge="Tarifario Oficial">
                <div className="pt-2 space-y-6">
                  {/* Selector de Tabs para los planes */}
                  <div className="flex flex-wrap gap-2 p-1.5 bg-stone-100 rounded-xl border border-stone-200">
                    {servicioAXS.tabs.map((tab) => {
                      const isActive = tab.id === activeAxsTab;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setActiveAxsTab(tab.id)}
                          className={`px-4 py-2 rounded-lg font-sans text-xs sm:text-sm font-semibold transition-all ${
                            isActive
                              ? 'bg-surface text-white shadow-sm'
                              : 'text-foreground-muted hover:text-surface hover:bg-white/60'
                          }`}
                        >
                          {tab.name}
                        </button>
                      );
                    })}
                  </div>

                  {/* Tabla de precios renderizada con PriceTable */}
                  <PriceTable
                    columns={currentAxsTab.columns}
                    rows={currentAxsTab.rows}
                    fuente={servicioAXS.fuentePrecios}
                    mostrarLeyenda={true}
                  />

                  {/* Recuadro "¿Cuál nos conviene?" */}
                  <div className="bg-[#111111] text-foreground-inverse p-6 rounded-xl border border-primary/40 shadow-sm space-y-2">
                    <div className="flex items-center gap-2 text-primary font-mono text-xs font-bold uppercase tracking-wider">
                      <Compass size={16} /> Evaluación Técnica Tiradores
                    </div>
                    <h4 className="font-display text-xl text-white">¿Cuál nos conviene?</h4>
                    <p className="text-sm text-gray-300 font-sans leading-relaxed">
                      {servicioAXS.recomendacion}
                    </p>
                  </div>
                </div>
              </AccordionSection>

              {/* Acordeón 4: Condiciones y cargos adicionales */}
              <AccordionSection title="Condiciones y cargos adicionales" defaultOpen={false} badge="Términos Contractuales">
                <div className="pt-2">
                  <div className="grid sm:grid-cols-2 gap-4 font-sans text-sm">
                    {servicioAXS.condiciones.map((cond, i) => (
                      <div key={i} className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                        <AlertTriangle size={18} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground-muted">{cond}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </AccordionSection>

            </div>
          </section>

          {/* ==================== 4. SERVICIO 2: INTERNET SATELITAL (STARLINK) ==================== */}
          <section className="bg-white p-8 md:p-12 rounded-2xl border-2 border-stone-200 shadow-hard">
            {/* Header del Servicio: Logo Starlink izquierda, Título y Descripción derecha */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-stone-200 pb-8 mb-8">
              <div className="md:col-span-4 lg:col-span-3 flex justify-center">
                <StarlinkLogo />
              </div>

              <div className="md:col-span-8 lg:col-span-9 space-y-3">
                <div className="flex items-center gap-2 text-primary font-mono text-xs font-bold uppercase tracking-wider">
                  <Globe size={16} /> {servicioStarlink.badge}
                </div>
                <h2 className="text-3xl sm:text-4xl font-display text-surface">
                  {servicioStarlink.title}
                </h2>
                <p className="text-base sm:text-lg text-foreground-muted font-sans leading-relaxed">
                  "{servicioStarlink.description}"
                </p>
              </div>
            </div>

            {/* Dato de Contexto Bolivia (Tarjeta destacada) */}
            <div className="p-5 rounded-xl bg-stone-100 border-l-4 border-primary text-sm sm:text-base text-foreground-muted font-sans leading-relaxed mb-8 flex items-start gap-3">
              <CheckCircle2 size={22} className="text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="text-surface font-semibold block mb-1">Marco Regulatorio Nacional:</strong>
                {servicioStarlink.datoContexto}
              </div>
            </div>

            {/* 4 Acordeones Starlink (Cerrados por defecto, títulos en cursiva naranja) */}
            <div className="space-y-4">
              
              {/* Acordeón 1: Funcionalidad */}
              <AccordionSection title="Funcionalidad" defaultOpen={false} badge="Constelación LEO">
                <div className="pt-2 text-sm sm:text-base leading-relaxed text-foreground-muted font-sans space-y-4">
                  <p>{servicioStarlink.funcionalidad}</p>
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="font-mono text-xs font-bold text-primary block mb-1">ROL 01 // FAILOVER</span>
                      <p className="text-xs sm:text-sm">Conmutación por falla instantánea si un corte físico interrumpe la troncal de fibra de AXS.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                      <span className="font-mono text-xs font-bold text-primary block mb-1">ROL 02 // COBERTURA RURAL</span>
                      <p className="text-xs sm:text-sm">Conexión a puestos de salud remotos para sincronizar historias clínicas e imágenes de diagnóstico.</p>
                    </div>
                  </div>
                </div>
              </AccordionSection>

              {/* Acordeón 2: Características */}
              <AccordionSection title="Características" defaultOpen={false} badge="Hardware y Rendimiento">
                <div className="pt-2">
                  <ul className="space-y-3 font-sans text-sm sm:text-base text-foreground-muted">
                    {servicioStarlink.caracteristicas.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionSection>

              {/* Acordeón 3: Planes y Precios (Starlink Directo) */}
              <AccordionSection title="Planes y Precios" defaultOpen={false} badge="Modalidades Directas">
                <div className="pt-2 space-y-6">
                  {/* Selector de Tabs */}
                  <div className="flex flex-wrap gap-2 p-1.5 bg-stone-100 rounded-xl border border-stone-200">
                    {servicioStarlink.tabs.map((tab) => {
                      const isActive = tab.id === activeStarlinkTab;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setActiveStarlinkTab(tab.id)}
                          className={`px-4 py-2 rounded-lg font-sans text-xs sm:text-sm font-semibold transition-all ${
                            isActive
                              ? 'bg-surface text-white shadow-sm'
                              : 'text-foreground-muted hover:text-surface hover:bg-white/60'
                          }`}
                        >
                          {tab.name}
                        </button>
                      );
                    })}
                  </div>

                  {/* Tabla de precios renderizada con PriceTable */}
                  <PriceTable
                    columns={currentStarlinkTab.columns}
                    rows={currentStarlinkTab.rows}
                    fuente={servicioStarlink.fuentePrecios}
                    notaEspecial={currentStarlinkTab.id === 'starlink-kits' ? servicioStarlink.notaKits : undefined}
                    mostrarLeyenda={true}
                  />
                </div>
              </AccordionSection>

              {/* Acordeón 4: Starlink vía AXS Bolivia */}
              <AccordionSection title="Starlink vía AXS" defaultOpen={false} badge="Alianza Comercial Local">
                <div className="pt-2 space-y-6">
                  <p className="text-sm sm:text-base text-foreground-muted font-sans leading-relaxed">
                    AXS Bolivia integra la constelación de Starlink como un servicio corporativo con facturación unificada local y soporte técnico directo en territorio boliviano.
                  </p>

                  <PriceTable
                    columns={servicioStarlink.starlinkAXS.columns}
                    rows={servicioStarlink.starlinkAXS.rows}
                    fuente={servicioStarlink.starlinkAXS.fuente}
                    notaEspecial={`Bloques adicionales: ${servicioStarlink.starlinkAXS.bloquesAdicionales}`}
                    mostrarLeyenda={true}
                  />

                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-foreground-muted font-sans">
                    <strong className="text-surface font-semibold block mb-1">Nota de validación comercial:</strong>
                    {servicioStarlink.starlinkAXS.nota}
                  </div>
                </div>
              </AccordionSection>

            </div>
          </section>

          {/* ==================== 5. SERVICIO 3: INHIBICIÓN DE SEÑALES MÓVILES ==================== */}
          <section className="bg-white p-8 md:p-12 rounded-2xl border-2 border-stone-200 shadow-hard">
            {/* Header del Servicio: Título/descripción izquierda, Foto/gráfico inhibidor derecha */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-stone-200 pb-8 mb-8">
              <div className="md:col-span-8 lg:col-span-8 space-y-3">
                <div className="flex items-center gap-2 text-primary font-mono text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck size={16} /> {servicioInhibicion.badge}
                </div>
                <h2 className="text-3xl sm:text-4xl font-display text-surface">
                  {servicioInhibicion.title}
                </h2>
                <p className="text-base sm:text-lg text-foreground-muted font-sans leading-relaxed">
                  "{servicioInhibicion.description}"
                </p>
              </div>

              <div className="md:col-span-4 lg:col-span-4 flex justify-center">
                <SignalJammerVisual />
              </div>
            </div>

            {/* RECUADRO DE CUMPLIMIENTO NORMATIVO OBLIGATORIO */}
            <div className="p-6 rounded-xl bg-amber-50 border-2 border-amber-500 text-amber-950 font-sans leading-relaxed mb-8 flex items-start gap-4 shadow-sm">
              <AlertTriangle size={26} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-display font-bold text-lg text-amber-900 block mb-1">
                  Aviso Obligatorio de Cumplimiento Normativo:
                </strong>
                <p className="text-sm sm:text-base text-amber-900/90 leading-relaxed">
                  {servicioInhibicion.cumplimientoNormativo}
                </p>
              </div>
            </div>

            {/* 3 Acordeones (Cerrados por defecto, títulos en cursiva naranja) */}
            <div className="space-y-4">
              
              {/* Acordeón 1: Funcionalidad */}
              <AccordionSection title="Funcionalidad" defaultOpen={false} badge="Protección de Propiedad Intelectual">
                <div className="pt-2 text-sm sm:text-base leading-relaxed text-foreground-muted font-sans space-y-4">
                  <p>{servicioInhibicion.funcionalidad}</p>
                </div>
              </AccordionSection>

              {/* Acordeón 2: Características */}
              <AccordionSection title="Características" defaultOpen={false} badge="Especificaciones de Blindaje">
                <div className="pt-2">
                  <ul className="space-y-3 font-sans text-sm sm:text-base text-foreground-muted">
                    {servicioInhibicion.caracteristicas.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionSection>

              {/* Acordeón 3: Precios (Mercado en La Paz) */}
              <AccordionSection title="Precios (Mercado en La Paz)" defaultOpen={false} badge="Cotización a Demanda">
                <div className="pt-2 space-y-6">
                  <p className="text-sm text-foreground-muted font-sans leading-relaxed">
                    No existe un tarifario público regulado de libre venta para este equipamiento. Los valores se presentan como <strong>"Por cotizar"</strong> según requerimiento técnico de atenuación, certificación del operador y dimensiones del espacio a blindar:
                  </p>

                  <PriceTable
                    columns={servicioInhibicion.preciosTabla.columns}
                    rows={servicioInhibicion.preciosTabla.rows}
                    fuente="Mercado de Equipamiento Táctico y Blindaje RF, La Paz 2026."
                    mostrarLeyenda={true}
                    actionButton={
                      <Link
                        to="/contacto"
                        className="btn-primary text-xs py-2 px-3 inline-flex items-center gap-1.5 whitespace-nowrap"
                      >
                        <span>Solicitar cotización</span>
                        <ArrowRight size={12} />
                      </Link>
                    }
                  />

                  <div className="pt-2 flex justify-end">
                    <Link
                      to="/contacto"
                      className="btn-primary text-sm px-7 py-3 inline-flex items-center gap-2 shadow-hard-orange"
                    >
                      <span>Solicitar Cotización de Blindaje Electromagnético</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </AccordionSection>

            </div>
          </section>

          {/* ==================== 6. SECCIÓN FINAL: COMPARATIVA Y RECOMENDACIÓN ==================== */}
          <section className="bg-background-dark p-8 md:p-12 rounded-2xl border-t-4 border-primary shadow-hard space-y-12">
            
            {/* 6.1 Tabla Comparativa de los 3 Servicios */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span aria-hidden="true" className="w-2 h-10 bg-primary block rounded-full" />
                <div>
                  <span className="text-primary font-mono text-xs font-bold uppercase tracking-widest block">
                    Matriz de Selección
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display text-surface">
                    Comparativa de Servicios Externos
                  </h2>
                </div>
              </div>

              <div className="overflow-x-auto rounded-xl border-2 border-stone-300 shadow-hard bg-white">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-[#111111] text-white font-mono text-xs uppercase tracking-wider">
                      <th className="px-5 py-4 border-b border-neutral-800">Servicio Externo</th>
                      <th className="px-5 py-4 border-b border-neutral-800">Problema que Resuelve</th>
                      <th className="px-5 py-4 border-b border-neutral-800">Pilar Asociado</th>
                      <th className="px-5 py-4 border-b border-neutral-800">Rango de Costo (Bs.)</th>
                      <th className="px-5 py-4 border-b border-neutral-800">Área Responsable</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 font-sans text-xs sm:text-sm">
                    {comparativaServicios.map((comp, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-[#FDFBF7]' : 'bg-white'}>
                        <td className="px-5 py-4 font-display font-bold text-surface text-base">
                          {comp.servicio}
                        </td>
                        <td className="px-5 py-4 text-foreground-muted">
                          {comp.problema}
                        </td>
                        <td className="px-5 py-4 font-mono font-semibold text-surface">
                          {comp.pilar}
                        </td>
                        <td className="px-5 py-4 font-mono font-bold text-primary">
                          {comp.rangoCosto}
                        </td>
                        <td className="px-5 py-4 text-stone-700 font-medium">
                          {comp.areaResponsable}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 6.2 Recomendación de Arquitectura (Diagrama de 3 Cajas) */}
            <div>
              <div className="text-center max-w-3xl mx-auto mb-8">
                <span className="text-primary font-mono text-xs font-bold uppercase tracking-widest block mb-1">
                  Diseño de Alta Disponibilidad &bull; Tiradores
                </span>
                <h3 className="text-2xl sm:text-3xl font-display text-surface">
                  Recomendación de Arquitectura de Infraestructura
                </h3>
                <p className="text-sm text-foreground-muted font-sans mt-2">
                  Topología híbrida recomendada para los laboratorios y servicios clínicos de IA MediTech:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                
                {/* Caja 1: Enlace Principal */}
                <div className="bg-white p-7 rounded-2xl border-2 border-stone-300 shadow-hard flex flex-col justify-between hover:border-primary transition-all">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-surface text-primary flex items-center justify-center mb-4 border border-primary/20">
                      <Wifi size={24} />
                    </div>
                    <span className="font-mono text-xs font-bold text-primary uppercase block mb-1">CAPA 01 // PRINCIPAL</span>
                    <h4 className="font-display text-2xl text-surface mb-2">AXS Fibra Dedicada</h4>
                    <p className="text-sm text-foreground-muted font-sans leading-relaxed">
                      Enlace troncal simétrico de alta velocidad y baja latencia para operación normal, procesamiento distribuido y sincronización continua en la nube.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-stone-200 text-xs font-mono text-emerald-600 font-bold">
                    Disponibilidad Primaria: 99.9%
                  </div>
                </div>

                {/* Caja 2: Enlace de Respaldo */}
                <div className="bg-white p-7 rounded-2xl border-2 border-stone-300 shadow-hard flex flex-col justify-between hover:border-primary transition-all">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-surface text-primary flex items-center justify-center mb-4 border border-primary/20">
                      <Globe size={24} />
                    </div>
                    <span className="font-mono text-xs font-bold text-primary uppercase block mb-1">CAPA 02 // RESPALDO</span>
                    <h4 className="font-display text-2xl text-surface mb-2">Starlink Satelital LEO</h4>
                    <p className="text-sm text-foreground-muted font-sans leading-relaxed">
                      Enlace de failover automático vía constelación de satélites ante eventuales cortes físicos de fibra en La Paz o despliegues móviles.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-stone-200 text-xs font-mono text-primary font-bold">
                    Conmutación Automática en &lt; 30s
                  </div>
                </div>

                {/* Caja 3: Entorno Blindado */}
                <div className="bg-white p-7 rounded-2xl border-2 border-stone-300 shadow-hard flex flex-col justify-between hover:border-primary transition-all">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-surface text-primary flex items-center justify-center mb-4 border border-primary/20">
                      <ShieldCheck size={24} />
                    </div>
                    <span className="font-mono text-xs font-bold text-primary uppercase block mb-1">CAPA 03 // BLINDAJE</span>
                    <h4 className="font-display text-2xl text-surface mb-2">Entorno Blindado RF</h4>
                    <p className="text-sm text-foreground-muted font-sans leading-relaxed">
                      Inhibición de frecuencias inalámbricas y atenuación pasiva en la sala de prototipado para evitar filtración de telemetría y propiedad intelectual.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-stone-200 text-xs font-mono text-surface font-bold">
                    Confidencialidad Médica I+D
                  </div>
                </div>

              </div>
            </div>

            {/* 6.3 Relación con el resto del proyecto */}
            <div className="bg-surface text-foreground-inverse p-8 rounded-2xl border-l-8 border-primary shadow-hard-lg">
              <div className="flex items-center gap-2 text-primary font-mono text-xs font-bold uppercase mb-2">
                <Layers size={16} /> Gobernanza Técnica y Compras
              </div>
              <h3 className="text-2xl sm:text-3xl font-display text-white mb-3">
                Gestión y Supervisión Institucional
              </h3>
              <p className="text-gray-300 font-sans leading-relaxed text-base sm:text-lg mb-6">
                Estos servicios dan soporte a la infraestructura descrita en <Link to="/gestion-tecnologia" className="text-primary hover:underline font-semibold">/gestion-tecnologia</Link>, se supervisan continuamente con la herramienta de <Link to="/monitoreo" className="text-primary hover:underline font-semibold">/monitoreo</Link> (PRTG), y las compras y contratos los gestiona el área de <strong>Gestión de Infraestructura Global</strong> (<Link to="/organigrama" className="text-primary hover:underline font-semibold">/organigrama</Link>), con el presupuesto aprobado por <strong>Dirección de Tecnología y Presupuesto</strong>.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/gestion-tecnologia" className="btn-secondary text-xs sm:text-sm px-5 py-2.5">
                  Ver Gestión Tecnológica
                </Link>
                <Link to="/monitoreo" className="btn-secondary text-xs sm:text-sm px-5 py-2.5">
                  Ver Monitoreo PRTG
                </Link>
                <Link to="/organigrama" className="btn-secondary text-xs sm:text-sm px-5 py-2.5">
                  Ver Organigrama
                </Link>
              </div>
            </div>

            {/* 6.4 Banda CTA Naranja Final */}
            <div className="p-8 md:p-10 rounded-2xl bg-primary text-white shadow-hard-orange flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <span className="text-white/80 font-mono text-xs font-bold uppercase tracking-widest block mb-1">
                  Atención Directa de Proveedores
                </span>
                <h3 className="text-2xl sm:text-3xl font-display text-white">
                  ¿Necesitas más información sobre nuestros proveedores?
                </h3>
                <p className="text-white/90 font-sans text-sm sm:text-base mt-1">
                  Escríbenos para consultar especificaciones de contratos, factibilidad técnica de enlaces o solicitar cotizaciones formales.
                </p>
              </div>

              <Link
                to="/contacto"
                className="btn-secondary bg-white text-surface hover:bg-stone-100 text-sm sm:text-base px-8 py-4 font-bold shadow-hard hover:scale-105 transition-transform inline-flex items-center gap-2 whitespace-nowrap shrink-0 border-0"
              >
                <span>Ir a Contacto</span>
                <ArrowRight size={18} />
              </Link>
            </div>

          </section>

        </div>
      </div>
    </AnimatedPage>
  );
}
