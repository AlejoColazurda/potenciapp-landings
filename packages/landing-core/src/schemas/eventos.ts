import { z } from 'zod';
import { BaseLandingContentSchema } from './base';

export const EventTypeSchema = z.object({
  name: z.string().min(1, 'El nombre del tipo de evento es requerido'),
  description: z.string().min(1, 'La descripción es requerida'),
  image: z.string().optional(),
  features: z.array(z.string()).optional(),
});

export const VenueSchema = z.object({
  name: z.string().min(1, 'El nombre del salón es requerido'),
  capacity: z.string().min(1, 'La capacidad es requerida'),
  description: z.string().optional(),
  images: z.array(z.string()).optional(),
  amenities: z.array(z.string()).optional(),
});

export const PackageSchema = z.object({
  name: z.string().min(1, 'El nombre del paquete es requerido'),
  description: z.string().min(1, 'La descripción es requerida'),
  price: z.string().optional(),
  includes: z.array(z.string()).min(1, 'Al menos un ítem incluido es requerido'),
  recommended: z.boolean().optional(),
});

export const GalleryImageSchema = z.object({
  src: z.string().min(1, 'La URL de la imagen es requerida'),
  alt: z.string().min(1, 'El texto alternativo es requerido'),
  eventType: z.string().optional(),
});

export const EventosContentSchema = BaseLandingContentSchema.extend({
  vertical: z.literal('eventos'),
  eventTypes: z.array(EventTypeSchema).min(1, 'Al menos un tipo de evento es requerido'),
  venues: z.array(VenueSchema).optional(),
  packages: z.array(PackageSchema).optional(),
  gallery: z.array(GalleryImageSchema).optional(),
  additionalServices: z.array(z.object({
    name: z.string(),
    description: z.string().optional(),
  })).optional(),
  faq: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })).optional(),
});

export type EventType = z.infer<typeof EventTypeSchema>;
export type Venue = z.infer<typeof VenueSchema>;
export type Package = z.infer<typeof PackageSchema>;
export type GalleryImage = z.infer<typeof GalleryImageSchema>;
export type EventosContent = z.infer<typeof EventosContentSchema>;

export function validateEventosContent(data: unknown): EventosContent {
  const result = EventosContentSchema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join('\n');
    throw new Error(`Validación de contenido Eventos fallida:\n${errors}`);
  }
  return result.data;
}
