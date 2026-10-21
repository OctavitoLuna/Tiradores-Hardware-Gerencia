export interface TeamMemberContact {
  id: string;
  name: string;
  scrumRole: string;
  area: string;
  email: string;
  phone: string;
  whatsapp: string;
  scrumAnchor: string;
  organigramaAnchor: string;
  initials: string;
  photoUrl?: string;
  bio?: string;
}

export interface GeneralContactInfo {
  teamName: string;
  company: string;
  email: string;
  university: string;
  location: string;
  schedule: string;
  description: string;
}

/**
 * Datos editables de contacto del equipo Tiradores (IATECH Co.).
 * Modifica estos valores cuando dispongas de los datos de contacto definitivos.
 */
export const teamMembersContact: TeamMemberContact[] = [
  {
    id: 'octavio-luna',
    name: 'Octavio Luna Vargas',
    scrumRole: 'Líder de Hardware / Scrum Master',
    area: 'Líder de Hardware e Infraestructura',
    email: 'correo@pendiente.com',
    phone: '+591 00000000',
    whatsapp: '59100000000',
    scrumAnchor: 'octavio-luna',
    organigramaAnchor: 'lider-hardware',
    initials: 'OL',
    bio: 'Articula la estrategia de hardware y facilita la resolución de bloqueos técnicos y metodológicos en el equipo.'
  },
  {
    id: 'leandro-colque',
    name: 'Leandro Colque',
    scrumRole: 'Product Owner',
    area: 'Dirección de Tecnología y Presupuesto',
    email: 'correo@pendiente.com',
    phone: '+591 00000000',
    whatsapp: '59100000000',
    scrumAnchor: 'leandro-colque',
    organigramaAnchor: 'direccion-tecnologia',
    initials: 'LC',
    bio: 'Define el stack tecnológico, gestiona el presupuesto técnico y prioriza el backlog con foco en resultados de negocio.'
  },
  {
    id: 'einar-guillen',
    name: 'Einar Andrés Guillén Boero',
    scrumRole: 'Developer',
    area: 'Gestión de Infraestructura Global',
    email: 'correo@pendiente.com',
    phone: '+591 00000000',
    whatsapp: '59100000000',
    scrumAnchor: 'einar-guillen',
    organigramaAnchor: 'gestion-infraestructura',
    initials: 'EG',
    bio: 'Gestiona la provisión física, servidores, centros de datos y logística de hardware e IoT médico.'
  },
  {
    id: 'huascar-duran',
    name: 'Huáscar Camilo Durán Avendaño',
    scrumRole: 'Developer',
    area: 'Aseguramiento de Calidad y Recursos',
    email: 'correo@pendiente.com',
    phone: '+591 00000000',
    whatsapp: '59100000000',
    scrumAnchor: 'huascar-duran',
    organigramaAnchor: 'aseguramiento-calidad',
    initials: 'HD',
    bio: 'Garantiza el cumplimiento de normativas de salud digital, certificaciones de calidad y gestión de recursos.'
  },
  {
    id: 'leonardo-ibarra',
    name: 'Leonardo Ibarra López',
    scrumRole: 'Developer',
    area: 'Operaciones de Soporte y Entorno de Trabajo',
    email: 'correo@pendiente.com',
    phone: '+591 00000000',
    whatsapp: '59100000000',
    scrumAnchor: 'leonardo-ibarra',
    organigramaAnchor: 'operaciones-soporte',
    initials: 'LI',
    bio: 'Responsable de la continuidad operativa, monitoreo de incidentes de soporte y entorno físico de trabajo.'
  }
];

export const generalContactInfo: GeneralContactInfo = {
  teamName: 'Equipo Tiradores — Hardware e Infraestructura',
  company: 'IATECH Co. / IA MediTech',
  email: 'contacto.tiradores@pendiente.com',
  university: 'Universidad Católica Boliviana "San Pablo"',
  location: 'La Paz, Bolivia',
  schedule: 'Lunes a Viernes, 08:30 – 18:00 (Hora Bolivia)',
  description: 'Canal oficial de comunicación para requerimientos técnicos, soporte de servidores, auditorías de infraestructura y proyectos de salud digital.'
};
