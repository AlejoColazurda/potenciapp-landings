import type { SaludBellezaContent } from '@potenciapp/landing-core/schemas';

export const content: SaludBellezaContent = {
  vertical: 'salud-belleza',
  brandName: 'Estética Vital',
  contact: {
    phone: '+54 11 2345-6789',
    email: 'turnos@esteticavital.com',
    address: 'Av. Santa Fe 2500',
    city: 'Buenos Aires',
    schedule: 'Lun-Sáb 9:00-20:00',
  },
  social: {
    instagram: 'https://instagram.com/esteticavital',
  },
  seo: {
    title: 'Estética Vital - Centro de Belleza y Bienestar',
    description: 'Tratamientos faciales, corporales y de bienestar en un espacio único.',
  },
  hero: {
    headline: 'Tu bienestar, nuestra pasión',
    subheadline: 'Descubrí una nueva forma de cuidarte con nuestros tratamientos personalizados.',
    ctaText: 'Reservar Turno',
    ctaHref: '#contacto',
  },
  services: [
    {
      title: 'Tratamientos Faciales',
      description: 'Limpieza profunda, hidratación y rejuvenecimiento.',
    },
    {
      title: 'Tratamientos Corporales',
      description: 'Modelado, drenaje linfático y reducción de medidas.',
    },
    {
      title: 'Spa & Relax',
      description: 'Masajes descontracturantes y aromaterapia.',
    },
  ],
  treatments: [
    {
      name: 'Limpieza Facial Profunda',
      description: 'Limpieza con extracción, hidratación y mascarilla personalizada.',
      duration: '60 min',
      price: '$12.000',
      category: 'facial',
    },
    {
      name: 'Drenaje Linfático',
      description: 'Técnica manual para reducir retención de líquidos.',
      duration: '45 min',
      price: '$15.000',
      category: 'corporal',
    },
    {
      name: 'Masaje Descontracturante',
      description: 'Alivio de tensiones musculares con aceites esenciales.',
      duration: '50 min',
      price: '$14.000',
      category: 'masajes',
    },
  ],
  professionals: [
    {
      name: 'Dra. Laura Méndez',
      role: 'Directora Médica',
      specialties: ['Medicina estética', 'Dermatología'],
    },
    {
      name: 'Lic. Carolina Ruiz',
      role: 'Cosmetóloga',
      specialties: ['Tratamientos faciales', 'Aparatología'],
    },
  ],
  bookingUrl: 'https://turnos.esteticavital.com',
  testimonials: [
    {
      name: 'Ana López',
      quote: 'Excelente atención y resultados visibles desde la primera sesión.',
      rating: 5,
    },
  ],
};
