import { z } from 'zod';
import { BaseLandingContentSchema } from './base';

export const ProjectSchema = z.object({
  name: z.string().min(1, 'El nombre del proyecto es requerido'),
  description: z.string().min(1, 'La descripción es requerida'),
  images: z.array(z.string()).optional(),
  location: z.string().optional(),
  year: z.string().optional(),
  category: z.enum(['construccion', 'metalurgica', 'herreria', 'estructuras', 'mantenimiento', 'otro']),
});

export const EquipmentSchema = z.object({
  name: z.string().min(1, 'El nombre del equipo es requerido'),
  description: z.string().optional(),
  image: z.string().optional(),
});

export const ConstruccionMetalurgicaContentSchema = BaseLandingContentSchema.extend({
  vertical: z.literal('construccion-metalurgica'),
  projects: z.array(ProjectSchema).min(1, 'Al menos un proyecto es requerido'),
  equipment: z.array(EquipmentSchema).optional(),
  certifications: z.array(z.string()).optional(),
  serviceAreas: z.array(z.string()).optional(),
  safetyInfo: z.object({
    certifications: z.array(z.string()).optional(),
    description: z.string().optional(),
  }).optional(),
  quoteRequest: z.object({
    available: z.boolean(),
    responseTime: z.string().optional(),
  }).optional(),
});

export type Project = z.infer<typeof ProjectSchema>;
export type Equipment = z.infer<typeof EquipmentSchema>;
export type ConstruccionMetalurgicaContent = z.infer<typeof ConstruccionMetalurgicaContentSchema>;

export function validateConstruccionMetalurgicaContent(data: unknown): ConstruccionMetalurgicaContent {
  const result = ConstruccionMetalurgicaContentSchema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join('\n');
    throw new Error(`Validación de contenido Construcción/Metalúrgica fallida:\n${errors}`);
  }
  return result.data;
}
