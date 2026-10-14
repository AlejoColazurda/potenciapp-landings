import type { ServiciosProfesionalesContent } from '@potenciapp/landing-core/schemas';

export const content: ServiciosProfesionalesContent = {
  vertical: 'servicios-profesionales',
  brandName: 'Estudio Jurídico ABC',
  contact: {
    phone: '+54 11 4567-8901',
    email: 'consultas@estudiojuridicoabc.com',
    address: 'Av. Libertador 3000, Piso 10',
    city: 'Buenos Aires',
    schedule: 'Lun-Vie 9:00-18:00',
  },
  social: {
    linkedin: 'https://linkedin.com/company/estudiojuridicoabc',
  },
  seo: {
    title: 'Estudio Jurídico ABC - Asesoría Legal Integral',
    description: 'Soluciones legales personalizadas para empresas y particulares con más de 20 años de experiencia.',
  },
  hero: {
    headline: 'Soluciones legales a tu medida',
    subheadline: 'Más de 20 años de experiencia defendiendo tus derechos con profesionalismo y dedicación.',
    ctaText: 'Agendar Consulta',
    ctaHref: '#contacto',
  },
  services: [
    {
      title: 'Derecho Empresarial',
      description: 'Asesoramiento integral para empresas.',
    },
    {
      title: 'Derecho Laboral',
      description: 'Defensa de derechos laborales.',
    },
    {
      title: 'Derecho Civil',
      description: 'Contratos, sucesiones y más.',
    },
  ],
  professionalServices: [
    {
      name: 'Derecho Societario',
      description: 'Constitución de sociedades, fusiones, adquisiciones y reestructuraciones empresariales.',
      features: ['Constitución de SA y SRL', 'Due diligence', 'Contratos societarios'],
    },
    {
      name: 'Derecho Laboral',
      description: 'Asesoramiento a empleadores y empleados en todas las etapas de la relación laboral.',
      features: ['Despidos y renuncias', 'Negociación colectiva', 'Litigios laborales'],
    },
    {
      name: 'Derecho Tributario',
      description: 'Planificación fiscal y defensa ante la AFIP.',
      features: ['Planificación fiscal', 'Recursos y reclamos', 'Asesoría impositiva'],
    },
  ],
  team: [
    {
      name: 'Dr. Juan Pérez',
      role: 'Socio Director',
      bio: 'Especialista en derecho empresarial con más de 25 años de experiencia.',
      credentials: ['UBA', 'Maestría en Derecho Empresarial'],
      linkedIn: 'https://linkedin.com/in/juanperez',
    },
    {
      name: 'Dra. María González',
      role: 'Socia',
      bio: 'Experta en derecho laboral y litigios complejos.',
      credentials: ['UBA', 'Especialización en Derecho del Trabajo'],
    },
  ],
  caseStudies: [
    {
      title: 'Fusión Corporativa Internacional',
      client: 'Empresa multinacional',
      challenge: 'Coordinar una fusión entre empresas de Argentina y Brasil.',
      solution: 'Estructuración legal y due diligence completo en tiempo récord.',
      results: 'Fusión completada en 6 meses con aprobación regulatoria.',
    },
  ],
  industries: ['Tecnología', 'Energía', 'Retail', 'Manufactura'],
  certifications: ['Colegio Público de Abogados de la Capital Federal'],
  consultationCta: {
    text: 'Primera consulta sin cargo',
    description: 'Agendá una reunión para evaluar tu caso sin compromiso.',
  },
  testimonials: [
    {
      name: 'CEO TechCorp',
      role: 'Cliente corporativo',
      quote: 'Profesionales excepcionales que entienden nuestras necesidades de negocio.',
      rating: 5,
    },
  ],
};
