import { z } from 'zod';
import { BaseLandingContentSchema } from './base';

export const ProfessionalServiceSchema = z.object({
  name: z.string().min(1, 'El nombre del servicio es requerido'),
  description: z.string().min(1, 'La descripción es requerida'),
  icon: z.string().optional(),
  features: z.array(z.string()).optional(),
});

export const TeamMemberSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido'),
  role: z.string().min(1, 'El rol es requerido'),
  bio: z.string().optional(),
  photo: z.string().optional(),
  credentials: z.array(z.string()).optional(),
  linkedIn: z.string().url().optional(),
});

export const CaseStudySchema = z.object({
  title: z.string().min(1, 'El título es requerido'),
  client: z.string().optional(),
  challenge: z.string().min(1, 'El desafío es requerido'),
  solution: z.string().min(1, 'La solución es requerida'),
  results: z.string().optional(),
});

export const ServiciosProfesionalesContentSchema = BaseLandingContentSchema.extend({
  vertical: z.literal('servicios-profesionales'),
  professionalServices: z.array(ProfessionalServiceSchema).min(1, 'Al menos un servicio profesional es requerido'),
  team: z.array(TeamMemberSchema).optional(),
  caseStudies: z.array(CaseStudySchema).optional(),
  industries: z.array(z.string()).optional(),
  certifications: z.array(z.string()).optional(),
  consultationCta: z.object({
    text: z.string(),
    description: z.string().optional(),
  }).optional(),
});

export type ProfessionalService = z.infer<typeof ProfessionalServiceSchema>;
export type TeamMember = z.infer<typeof TeamMemberSchema>;
export type CaseStudy = z.infer<typeof CaseStudySchema>;
export type ServiciosProfesionalesContent = z.infer<typeof ServiciosProfesionalesContentSchema>;

export function validateServiciosProfesionalesContent(data: unknown): ServiciosProfesionalesContent {
  const result = ServiciosProfesionalesContentSchema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join('\n');
    throw new Error(`Validación de contenido Servicios Profesionales fallida:\n${errors}`);
  }
  return result.data;
}
