import type { GastronomiaContent } from '@potenciapp/landing-core/schemas';

export const content: GastronomiaContent = {
  vertical: 'gastronomia',
  brandName: 'Mi Restaurante',
  contact: {
    phone: '+54 11 1234-5678',
    email: 'contacto@mirestaurante.com',
    address: 'Av. Corrientes 1234',
    city: 'Buenos Aires',
    schedule: 'Lun-Dom 12:00-00:00',
  },
  social: {
    instagram: 'https://instagram.com/mirestaurante',
    facebook: 'https://facebook.com/mirestaurante',
  },
  seo: {
    title: 'Mi Restaurante - Cocina de Autor',
    description: 'Descubrí nuestra propuesta gastronómica única en el corazón de Buenos Aires.',
  },
  hero: {
    headline: 'Sabores que cuentan historias',
    subheadline: 'Una experiencia gastronómica inolvidable con ingredientes de estación y técnicas de autor.',
    ctaText: 'Reservar Mesa',
    ctaHref: '#contacto',
  },
  services: [
    {
      title: 'Almuerzo Ejecutivo',
      description: 'Menú especial de lunes a viernes con opciones variadas.',
      icon: '🍽️',
    },
    {
      title: 'Cenas',
      description: 'Experiencia gastronómica completa con maridaje opcional.',
      icon: '🌙',
    },
    {
      title: 'Eventos Privados',
      description: 'Salón privado para hasta 40 personas.',
      icon: '🎉',
    },
  ],
  menu: [
    {
      name: 'Empanadas de Carne',
      description: 'Masa casera, carne cortada a cuchillo, especias tradicionales.',
      price: '$2.500',
      category: 'Entradas',
    },
    {
      name: 'Bife de Chorizo',
      description: '400g de carne premium, papas rústicas y chimichurri.',
      price: '$18.500',
      category: 'Principales',
    },
    {
      name: 'Tiramisú',
      description: 'Receta italiana clásica con café de especialidad.',
      price: '$6.500',
      category: 'Postres',
    },
  ],
  deliveryInfo: {
    available: true,
    platforms: ['Rappi', 'PedidosYa'],
    minimumOrder: '$5.000',
  },
  reservations: {
    available: true,
    phone: '+54 11 1234-5678',
  },
  testimonials: [
    {
      name: 'María García',
      quote: 'La mejor experiencia gastronómica de Buenos Aires.',
      rating: 5,
    },
  ],
};
