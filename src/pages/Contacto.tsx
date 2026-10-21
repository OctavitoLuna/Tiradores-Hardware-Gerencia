import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import PageHeaderBanner from '../components/PageHeaderBanner';
import { 
  teamMembersContact, 
  generalContactInfo, 
  TeamMemberContact 
} from '../data/contactData';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  GraduationCap, 
  Building2, 
  ArrowRight, 
  CheckCircle, 
  AlertCircle, 
  ExternalLink, 
  Activity, 
  Send,
  User,
  Shield,
  Layers
} from 'lucide-react';

export default function Contacto() {
  // Form State
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: 'Soporte técnico',
    mensaje: ''
  });
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState<boolean>(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (formError) setFormError(null);
  };

  const handleFormSubmit = () => {
    // Validaciones
    if (!formData.nombre.trim()) {
      setFormError('Por favor ingresa tu nombre completo.');
      return;
    }
    if (!formData.correo.trim() || !formData.correo.includes('@')) {
      setFormError('Por favor ingresa un correo electrónico válido.');
      return;
    }
    if (!formData.mensaje.trim()) {
      setFormError('Por favor escribe un mensaje detallando tu consulta.');
      return;
    }

    setFormError(null);
    setFormSuccess(true);

    // Preparar enlace mailto
    const subject = encodeURIComponent(`[${formData.asunto}] Mensaje de ${formData.nombre}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.nombre}\n` +
      `Correo de contacto: ${formData.correo}\n` +
      `Asunto: ${formData.asunto}\n\n` +
      `Mensaje:\n${formData.mensaje}\n\n` +
      `--- Enviado desde el portal web de Tiradores (IATECH Co.)`
    );

    const mailtoUrl = `mailto:${generalContactInfo.email}?subject=${subject}&body=${body}`;
    
    // Abrir cliente de correo
    window.location.href = mailtoUrl;
  };

  return (
    <AnimatedPage>
      <div className="w-full bg-background pb-24">
        {/* Header Oficial */}
        <PageHeaderBanner
          title="Contacto"
          badge="Canal Oficial de Comunicación • Tiradores"
          subtitle="Conoce al equipo Tiradores y escríbenos."
        />

        <div className="container-wide mt-16 space-y-24">

          {/* ==================== 2.4 BLOQUE DE ACCESO RÁPIDO A MONITOREO ==================== */}
          <section className="bg-surface text-foreground-inverse p-6 sm:p-8 rounded-2xl border-l-8 border-primary shadow-hard-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center shrink-0 border border-primary/40 mt-1">
                <Activity size={26} className="animate-pulse" />
              </div>
              <div>
                <span className="text-primary font-mono text-xs font-bold uppercase tracking-wider block mb-1">
                  Telemetría Operativa 24/7
                </span>
                <h3 className="text-xl sm:text-2xl font-display text-white">
                  ¿Incidencia en la infraestructura? Revisa el estado en vivo
                </h3>
                <p className="text-sm text-gray-400 mt-1 font-sans">
                  Monitoreamos servidores, bases de datos y dispositivos médicos en tiempo real con PRTG.
                </p>
              </div>
            </div>

            <Link
              to="/monitoreo"
              className="btn-primary text-sm px-6 py-3.5 inline-flex items-center gap-2 whitespace-nowrap shadow-hard-orange hover:scale-105 transition-transform shrink-0"
            >
              <span>Ver Mapa de Monitoreo</span>
              <ArrowRight size={16} />
            </Link>
          </section>

          {/* ==================== 2.1 TARJETAS DE CONTACTO POR INTEGRANTE ==================== */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <span aria-hidden="true" className="w-2 h-10 bg-primary block rounded-full" />
              <div>
                <h2 className="text-3xl md:text-4xl font-display text-surface">
                  1. Directorio del Equipo de Hardware
                </h2>
                <p className="text-sm text-foreground-muted uppercase tracking-widest font-sans">
                  5 ingenieros responsables de la infraestructura física en IA MediTech
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {teamMembersContact.map((member) => (
                <MemberContactCard key={member.id} member={member} />
              ))}

              {/* Tarjeta de Mesa de Ayuda General */}
              <div className="bg-[#111111] text-foreground-inverse p-8 rounded-2xl border-2 border-primary/50 shadow-hard-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white font-display text-lg font-bold shadow-sm">
                      TH
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest">
                        CANAL CENTRALIZADO
                      </span>
                      <h3 className="text-xl font-display text-white">
                        Mesa de Infraestructura
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed mb-6">
                    Para solicitudes generales de compras de hardware, auditorías normativas o coordinación institucional entre áreas.
                  </p>
                  <div className="space-y-2 text-xs font-mono text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <Mail size={14} className="text-primary shrink-0" />
                      <span className="truncate">{generalContactInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-primary shrink-0" />
                      <span>{generalContactInfo.schedule}</span>
                    </div>
                  </div>
                </div>

                <a
                  href={`mailto:${generalContactInfo.email}?subject=Solicitud%20de%20Infraestructura`}
                  className="btn-primary text-xs py-3 text-center justify-center w-full"
                >
                  Contactar Mesa Central
                </a>
              </div>
            </div>
          </section>

          {/* ==================== 2.2 CONTACTO GENERAL Y 2.3 FORMULARIO ==================== */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* 2.2 Información Institucional */}
            <div className="lg:col-span-5 bg-white p-8 md:p-10 rounded-2xl border border-stone-200 shadow-hard space-y-6">
              <div>
                <span className="text-primary font-bold font-mono text-xs uppercase tracking-widest block mb-1">
                  Información Institucional
                </span>
                <h3 className="text-2xl sm:text-3xl font-display text-surface">
                  Contacto General
                </h3>
                <p className="text-sm text-foreground-muted font-sans mt-2 leading-relaxed">
                  {generalContactInfo.description}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-stone-200 font-sans text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-surface text-primary shrink-0">
                    <Building2 size={18} />
                  </div>
                  <div>
                    <strong className="text-surface block">Equipo y Empresa:</strong>
                    <span className="text-foreground-muted">{generalContactInfo.teamName}</span>
                    <div className="text-xs text-primary font-mono">{generalContactInfo.company}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-surface text-primary shrink-0">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <strong className="text-surface block">Institución Académica:</strong>
                    <span className="text-foreground-muted">{generalContactInfo.university}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-surface text-primary shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <strong className="text-surface block">Ubicación Física:</strong>
                    <span className="text-foreground-muted">{generalContactInfo.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-surface text-primary shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <strong className="text-surface block">Horario de Atención:</strong>
                    <span className="text-foreground-muted">{generalContactInfo.schedule}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-surface text-primary shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <strong className="text-surface block">Correo Electrónico Oficial:</strong>
                    <a 
                      href={`mailto:${generalContactInfo.email}`} 
                      className="text-primary hover:underline font-mono text-xs font-bold"
                    >
                      {generalContactInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs text-foreground-muted">
                <span className="font-bold text-surface block mb-1">Configuración Editable:</span>
                Los datos de contacto provienen de <code>src/data/contactData.ts</code>. Puedes reemplazarlos fácilmente sin tocar el marcado.
              </div>
            </div>

            {/* 2.3 Formulario de Contacto Funcional */}
            <div className="lg:col-span-7 bg-[#111111] text-foreground-inverse p-8 md:p-10 rounded-2xl border-2 border-primary/40 shadow-hard-lg">
              <div className="mb-6">
                <span className="text-primary font-mono text-xs font-bold uppercase tracking-widest block mb-1">
                  Buzón de Mensajería
                </span>
                <h3 className="text-2xl sm:text-3xl font-display text-white">
                  Envíanos un Mensaje
                </h3>
                <p className="text-sm text-gray-400 font-sans mt-1">
                  Completa los campos a continuación para generar una solicitud directa por correo electrónico.
                </p>
              </div>

              {formSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500 text-emerald-200 text-sm flex items-start gap-3 font-sans">
                  <CheckCircle size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold block">¡Solicitud preparada con éxito!</strong>
                    Se ha abierto tu cliente de correo con los datos precargados para enviar a <code>{generalContactInfo.email}</code>.
                  </div>
                </div>
              )}

              {formError && (
                <div className="mb-6 p-4 rounded-xl bg-rose-950/80 border border-rose-500 text-rose-200 text-sm flex items-start gap-3 font-sans">
                  <AlertCircle size={20} className="text-rose-400 shrink-0 mt-0.5" />
                  <span>{formError}</span>
                </div>
              )}

              <div className="space-y-5 font-sans">
                <div>
                  <label className="block text-xs font-mono uppercase text-gray-300 mb-2 font-bold">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => handleInputChange('nombre', e.target.value)}
                    placeholder="Ej. Ing. María Prado"
                    className="w-full px-4 py-3 rounded-xl bg-[#1c1c1c] border border-neutral-700 text-white placeholder-gray-500 focus:outline-none focus:border-primary text-sm transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-300 mb-2 font-bold">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      value={formData.correo}
                      onChange={(e) => handleInputChange('correo', e.target.value)}
                      placeholder="tu.correo@ejemplo.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#1c1c1c] border border-neutral-700 text-white placeholder-gray-500 focus:outline-none focus:border-primary text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-gray-300 mb-2 font-bold">
                      Asunto del Requerimiento *
                    </label>
                    <select
                      value={formData.asunto}
                      onChange={(e) => handleInputChange('asunto', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#1c1c1c] border border-neutral-700 text-white focus:outline-none focus:border-primary text-sm transition-colors cursor-pointer"
                    >
                      <option value="Soporte técnico">Soporte técnico</option>
                      <option value="Solicitud de infraestructura">Solicitud de infraestructura</option>
                      <option value="Consulta general">Consulta general</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-gray-300 mb-2 font-bold">
                    Mensaje o Descripción de la Necesidad *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.mensaje}
                    onChange={(e) => handleInputChange('mensaje', e.target.value)}
                    placeholder="Describe los requerimientos técnicos, equipo, sistema o consulta sobre la infraestructura..."
                    className="w-full px-4 py-3 rounded-xl bg-[#1c1c1c] border border-neutral-700 text-white placeholder-gray-500 focus:outline-none focus:border-primary text-sm transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-gray-500 font-mono">
                    * Campos obligatorios para procesar la solicitud.
                  </span>
                  <button
                    type="button"
                    onClick={handleFormSubmit}
                    className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 shadow-hard-orange hover:scale-105 transition-transform"
                  >
                    <span>Enviar Mensaje</span>
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </div>

          </section>

        </div>
      </div>
    </AnimatedPage>
  );
}

/* ==================== TARJETA DE INTEGRANTE (PERSONCARD) ==================== */

function MemberContactCard({ member }: { member: TeamMemberContact; key?: string }) {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-hard hover:shadow-hard-orange hover:border-primary transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div className="p-7">
        
        {/* Cabecera con Foto o Avatar Iniciales */}
        <div className="flex items-start gap-4 mb-5">
          {member.photoUrl ? (
            <img
              src={member.photoUrl}
              alt={member.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-primary shadow-sm"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-surface text-primary flex items-center justify-center font-display text-2xl font-bold border-2 border-primary shadow-sm shrink-0 group-hover:scale-105 transition-transform">
              {member.initials}
            </div>
          )}

          <div>
            <h3 className="font-display text-xl sm:text-2xl text-surface font-bold leading-tight group-hover:text-primary transition-colors">
              {member.name}
            </h3>
            <div className="text-xs font-mono font-bold text-primary uppercase mt-1">
              {member.scrumRole}
            </div>
            <div className="text-xs text-foreground-muted font-sans mt-0.5">
              {member.area}
            </div>
          </div>
        </div>

        {member.bio && (
          <p className="text-xs sm:text-sm text-foreground-muted font-sans leading-relaxed mb-6 border-l-2 border-primary/40 pl-3">
            {member.bio}
          </p>
        )}

        {/* Datos de Contacto (Placeholders visibles) */}
        <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-2 mb-6 font-mono text-xs">
          <div className="flex items-center justify-between text-foreground-muted">
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-primary" /> Correo:
            </span>
            <span className="text-surface font-semibold truncate max-w-[170px]" title={member.email}>
              {member.email}
            </span>
          </div>
          <div className="flex items-center justify-between text-foreground-muted">
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-primary" /> Teléfono:
            </span>
            <span className="text-surface font-semibold">
              {member.phone}
            </span>
          </div>
        </div>

        {/* Botones Principales de Contacto */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <a
            href={`mailto:${member.email}?subject=Contacto%20con%20${encodeURIComponent(member.name)}`}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-surface text-white text-xs font-semibold hover:bg-primary transition-colors shadow-sm text-center"
          >
            <Mail size={14} />
            <span>Escribir correo</span>
          </a>

          <a
            href={`https://wa.me/${member.whatsapp}?text=${encodeURIComponent(`Hola ${member.name}, te contacto desde el portal Tiradores.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500 transition-colors shadow-sm text-center"
          >
            <MessageSquare size={14} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Enlaces Internos a Scrum y Organigrama */}
      <div className="bg-stone-100/80 px-7 py-3 border-t border-stone-200 flex items-center justify-between text-xs font-mono">
        <Link
          to={`/scrum#${member.scrumAnchor}`}
          className="text-foreground-muted hover:text-primary transition-colors flex items-center gap-1 font-semibold"
        >
          <span>Ver en Scrum</span>
          <ArrowRight size={12} />
        </Link>
        <span className="text-stone-300">|</span>
        <Link
          to={`/organigrama#${member.organigramaAnchor}`}
          className="text-foreground-muted hover:text-primary transition-colors flex items-center gap-1 font-semibold"
        >
          <span>Ver en Organigrama</span>
          <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  );
}
