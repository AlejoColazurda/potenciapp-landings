import type { EventosContent } from '@potenciapp/landing-core/schemas';

export const content: EventosContent = {
  vertical: 'eventos',
  brandName: 'Eventos Elegance',
  contact: {
    phone: '+54 11 6789-0123',
    email: 'info@eventoselegance.com',
    address: 'Av. del Libertador 6000',
    city: 'Buenos Aires',
    schedule: 'Lun-Sáb 10:00-20:00',
  },
  social: {
    instagram: 'https://instagram.com/eventoselegance',
    facebook: 'https://facebook.com/eventoselegance',
  },
  seo: {
    title: 'Eventos Elegance - Salones y Organización de Eventos',
    description: 'Los mejores salones para tu evento con servicio integral de catering y organización.',
  },
  hero: {
    headline: 'Hacemos realidad el evento de tus sueños',
    subheadline: 'Salones exclusivos y servicio integral para bodas, fiestas corporativas y celebraciones.',
    ctaText: 'Conocer Salones',
    ctaHref: '#salones',
  },
  services: [
    {
      title: 'Catering Premium',
      description: 'Menús personalizados con los mejores chefs.',
    },
    {
      title: 'Decoración',
      description: 'Ambientación única para cada evento.',
    },
    {
      title: 'Coordinación',
      description: 'Planificación integral de principio a fin.',
    },
  ],
  eventTypes: [
    {
      name: 'Bodas',
      description: 'Celebrá el día más importante con nosotros.',
      features: ['Ceremonia civil', 'Recepción', 'Luna de miel'],
    },
    {
      name: 'Eventos Corporativos',
      description: 'Reuniones, lanzamientos y fiestas de fin de año.',
      features: ['Equipamiento audiovisual', 'Coffee breaks', 'Catering ejecutivo'],
    },
    {
      name: 'Fiestas de 15',
      description: 'Una noche mágica e inolvidable.',
      features: ['Show de apertura', 'DJ y música en vivo', 'Fotografía profesional'],
    },
  ],
  venues: [
    {
      name: 'Salón Imperial',
      capacity: '300 personas',
      description: 'Nuestro salón principal con vista al jardín.',
      amenities: ['Pista de baile', 'Escenario', 'Terraza privada'],
    },
    {
      name: 'Salón Jardín',
      capacity: '150 personas',
      description: 'Espacio íntimo con acceso directo al parque.',
      amenities: ['Ceremonia al aire libre', 'Iluminación led', 'Bar integrado'],
    },
  ],
  packages: [
    {
      name: 'Básico',
      description: 'Todo lo esencial para tu evento.',
      includes: ['Salón por 6 horas', 'Menú de 3 pasos', 'Bebidas sin alcohol', 'DJ'],
    },
    {
      name: 'Premium',
      description: 'La experiencia completa.',
      includes: ['Salón por 8 horas', 'Menú de 5 pasos', 'Barra libre', 'DJ + Banda en vivo', 'Fotografía'],
      recommended: true,
    },
    {
      name: 'Luxury',
      description: 'Sin límites, pura exclusividad.',
      includes: ['Uso exclusivo del predio', 'Chef privado', 'Barra premium', 'Espectáculo personalizado', 'Video + Foto'],
    },
  ],
  additionalServices: [
    { name: 'Invitaciones personalizadas' },
    { name: 'Torta de diseño' },
    { name: 'Candy bar' },
    { name: 'Souvenirs' },
  ],
  faq: [
    {
      question: '¿Con cuánta anticipación debo reservar?',
      answer: 'Recomendamos reservar con al menos 6 meses de anticipación para fechas populares.',
    },
    {
      question: '¿Puedo llevar mi propio DJ?',
      answer: 'Sí, ofrecemos flexibilidad para que traigas tus propios proveedores.',
    },
  ],
  testimonials: [
    {
      name: 'Sofía y Martín',
      quote: 'Nuestra boda fue perfecta gracias a todo el equipo de Elegance.',
      rating: 5,
    },
  ],
};
