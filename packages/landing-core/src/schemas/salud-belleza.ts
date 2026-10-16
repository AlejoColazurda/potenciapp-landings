import { z } from 'zod';
import { BaseLandingContentSchema } from './base';

export const TreatmentSchema = z.object({
  name: z.string().min(1, 'El nombre del tratamiento es requerido'),
  description: z.string().min(1, 'La descripción es requerida'),
  duration: z.string().min(1, 'La duración es requerida'),
  price: z.string().min(1, 'El precio es requerido'),
  image: z.string().optional(),
  category: z.enum(['facial', 'corporal', 'capilar', 'unas', 'masajes', 'depilacion', 'otro']),
});

export const ProfessionalSchema = z.object({
  name: z.string().min(1, 'El nombre del profesional es requerido'),
  role: z.string().min(1, 'El rol es requerido'),
  bio: z.string().optional(),
  photo: z.string().optional(),
  specialties: z.array(z.string()).optional(),
});

export const SaludBellezaContentSchema = BaseLandingContentSchema.extend({
  vertical: z.literal('salud-belleza'),
  treatments: z.array(TreatmentSchema).min(1, 'Al menos un tratamiento es requerido'),
  professionals: z.array(ProfessionalSchema).optional(),
  bookingUrl: z.string().url().optional(),
  certifications: z.array(z.string()).optional(),
});

export type Treatment = z.infer<typeof TreatmentSchema>;
export type Professional = z.infer<typeof ProfessionalSchema>;
export type SaludBellezaContent = z.infer<typeof SaludBellezaContentSchema>;

export function validateSaludBellezaContent(data: unknown): SaludBellezaContent {
  const result = SaludBellezaContentSchema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join('\n');
    throw new Error(`Validación de contenido Salud & Belleza fallida:\n${errors}`);
  }
  return result.data;
}
