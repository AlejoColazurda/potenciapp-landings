import { z } from 'zod';

export const ContactInfoSchema = z.object({
  phone: z.string().min(1, 'El teléfono es requerido'),
  email: z.string().email('Email inválido'),
  address: z.string().min(1, 'La dirección es requerida'),
  city: z.string().min(1, 'La ciudad es requerida'),
  schedule: z.string().optional(),
});

export const SocialLinksSchema = z.object({
  instagram: z.string().url().optional(),
  facebook: z.string().url().optional(),
  twitter: z.string().url().optional(),
  linkedin: z.string().url().optional(),
  whatsapp: z.string().optional(),
});

export const SeoSchema = z.object({
  title: z.string().min(1, 'El título SEO es requerido'),
  description: z.string().min(1, 'La descripción SEO es requerida'),
  ogImage: z.string().optional(),
});

export const HeroSchema = z.object({
  headline: z.string().min(1, 'El headline es requerido'),
  subheadline: z.string().min(1, 'El subheadline es requerido'),
  ctaText: z.string().min(1, 'El texto del CTA es requerido'),
  ctaHref: z.string().min(1, 'El href del CTA es requerido'),
  backgroundImage: z.string().optional(),
});

export const ServiceSchema = z.object({
  title: z.string().min(1, 'El título del servicio es requerido'),
  description: z.string().min(1, 'La descripción del servicio es requerida'),
  icon: z.string().optional(),
  image: z.string().optional(),
});

export const TestimonialSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido'),
  role: z.string().optional(),
  quote: z.string().min(1, 'La cita es requerida'),
  avatar: z.string().optional(),
  rating: z.number().min(1).max(5).optional(),
});

export const BaseLandingContentSchema = z.object({
  brandName: z.string().min(1, 'El nombre de marca es requerido'),
  logo: z.string().optional(),
  contact: ContactInfoSchema,
  social: SocialLinksSchema.optional(),
  seo: SeoSchema,
  hero: HeroSchema,
  services: z.array(ServiceSchema).min(1, 'Al menos un servicio es requerido'),
  testimonials: z.array(TestimonialSchema).optional(),
});

export type ContactInfo = z.infer<typeof ContactInfoSchema>;
export type SocialLinks = z.infer<typeof SocialLinksSchema>;
export type Seo = z.infer<typeof SeoSchema>;
export type Hero = z.infer<typeof HeroSchema>;
export type Service = z.infer<typeof ServiceSchema>;
export type Testimonial = z.infer<typeof TestimonialSchema>;
export type BaseLandingContent = z.infer<typeof BaseLandingContentSchema>;
