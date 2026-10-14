import type { RetailContent } from '@potenciapp/landing-core/schemas';

export const content: RetailContent = {
  vertical: 'retail',
  brandName: 'TechStore',
  contact: {
    phone: '+54 11 3456-7890',
    email: 'ventas@techstore.com',
    address: 'Av. Cabildo 1500',
    city: 'Buenos Aires',
    schedule: 'Lun-Sáb 10:00-21:00',
  },
  social: {
    instagram: 'https://instagram.com/techstore',
    facebook: 'https://facebook.com/techstore',
  },
  seo: {
    title: 'TechStore - Tecnología al Mejor Precio',
    description: 'Los mejores productos tecnológicos con garantía oficial y envío a todo el país.',
  },
  hero: {
    headline: 'Tecnología que te conecta',
    subheadline: 'Encontrá los mejores productos con garantía oficial y el mejor servicio.',
    ctaText: 'Ver Productos',
    ctaHref: '#productos',
  },
  services: [
    {
      title: 'Envío Gratis',
      description: 'En compras mayores a $50.000 a todo el país.',
    },
    {
      title: 'Garantía Oficial',
      description: 'Todos nuestros productos con garantía del fabricante.',
    },
    {
      title: 'Soporte Técnico',
      description: 'Asistencia post-venta incluida.',
    },
  ],
  categories: [
    {
      name: 'Smartphones',
      description: 'Los últimos modelos de las mejores marcas.',
      slug: 'smartphones',
    },
    {
      name: 'Notebooks',
      description: 'Equipos para trabajo y gaming.',
      slug: 'notebooks',
    },
    {
      name: 'Accesorios',
      description: 'Auriculares, cargadores y más.',
      slug: 'accesorios',
    },
  ],
  featuredProducts: [
    {
      name: 'Smartphone Pro Max',
      description: 'Pantalla 6.7", 256GB, Cámara 108MP.',
      price: '$899.999',
      badge: 'Nuevo',
      category: 'Smartphones',
    },
    {
      name: 'Notebook Gaming X',
      description: 'Intel i7, RTX 4060, 16GB RAM, 512GB SSD.',
      price: '$1.299.999',
      badge: 'Más vendido',
      category: 'Notebooks',
    },
    {
      name: 'Auriculares Wireless Pro',
      description: 'Cancelación de ruido, 30hs batería.',
      price: '$149.999',
      category: 'Accesorios',
    },
  ],
  storeInfo: {
    hasPhysicalStore: true,
    hasOnlineStore: true,
    onlineStoreUrl: 'https://tienda.techstore.com',
    paymentMethods: ['Tarjetas de crédito', 'Transferencia', 'MercadoPago', '3 cuotas sin interés'],
    shippingInfo: 'Envío gratis en compras mayores a $50.000',
  },
  promotions: [
    {
      title: '3 cuotas sin interés',
      description: 'En toda la tienda con tarjetas seleccionadas.',
    },
  ],
  testimonials: [
    {
      name: 'Roberto García',
      quote: 'Excelente servicio y los mejores precios del mercado.',
      rating: 5,
    },
  ],
};
