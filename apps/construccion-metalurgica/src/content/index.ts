import type { ConstruccionMetalurgicaContent } from '@potenciapp/landing-core/schemas';

export const content: ConstruccionMetalurgicaContent = {
  vertical: 'construccion-metalurgica',
  brandName: 'MetalWorks SA',
  contact: {
    phone: '+54 11 5678-9012',
    email: 'presupuestos@metalworks.com',
    address: 'Parque Industrial Norte, Lote 45',
    city: 'Pilar, Buenos Aires',
    schedule: 'Lun-Vie 7:00-17:00',
  },
  social: {
    instagram: 'https://instagram.com/metalworkssa',
    linkedin: 'https://linkedin.com/company/metalworkssa',
  },
  seo: {
    title: 'MetalWorks SA - Estructuras Metálicas y Construcción Industrial',
    description: 'Fabricación de estructuras metálicas, galpones industriales y servicios de construcción con los más altos estándares de calidad.',
  },
  hero: {
    headline: 'Construimos el futuro con acero',
    subheadline: 'Más de 15 años fabricando estructuras metálicas de alta calidad para la industria argentina.',
    ctaText: 'Solicitar Presupuesto',
    ctaHref: '#contacto',
  },
  services: [
    {
      title: 'Estructuras Metálicas',
      description: 'Diseño y fabricación de estructuras para galpones, naves industriales y edificios.',
    },
    {
      title: 'Herrería Industrial',
      description: 'Portones, rejas, escaleras y estructuras a medida.',
    },
    {
      title: 'Mantenimiento',
      description: 'Reparación y mantenimiento de estructuras existentes.',
    },
  ],
  projects: [
    {
      name: 'Galpón Industrial 5000m²',
      description: 'Nave industrial completa con puente grúa para empresa logística.',
      location: 'Zárate, Buenos Aires',
      year: '2024',
      category: 'estructuras',
    },
    {
      name: 'Estructura de Edificio Comercial',
      description: 'Estructura metálica para edificio de oficinas de 6 pisos.',
      location: 'CABA',
      year: '2023',
      category: 'construccion',
    },
    {
      name: 'Planta de Procesamiento',
      description: 'Estructura y equipamiento para planta de alimentos.',
      location: 'Luján, Buenos Aires',
      year: '2023',
      category: 'metalurgica',
    },
  ],
  equipment: [
    {
      name: 'Plegadora CNC',
      description: 'Capacidad hasta 6mm de espesor.',
    },
    {
      name: 'Cortadora Plasma',
      description: 'Corte de precisión hasta 25mm.',
    },
    {
      name: 'Soldadura MIG/TIG',
      description: 'Equipos certificados para acero y aluminio.',
    },
  ],
  certifications: ['ISO 9001:2015', 'AWS D1.1 Soldadura Estructural'],
  serviceAreas: ['CABA', 'GBA', 'Interior Buenos Aires', 'Litoral'],
  safetyInfo: {
    certifications: ['ISO 45001', 'ART al día'],
    description: 'Cumplimos con todas las normas de seguridad e higiene industrial.',
  },
  quoteRequest: {
    available: true,
    responseTime: '24-48 horas hábiles',
  },
  testimonials: [
    {
      name: 'Gerente de Planta',
      role: 'Empresa Logística',
      quote: 'Entregaron en tiempo y forma, excelente calidad de trabajo.',
      rating: 5,
    },
  ],
};
