import { z } from 'zod';
import { BaseLandingContentSchema } from './base';

export const MenuItemSchema = z.object({
  name: z.string().min(1, 'El nombre del plato es requerido'),
  description: z.string().min(1, 'La descripción del plato es requerida'),
  price: z.string().min(1, 'El precio es requerido'),
  image: z.string().optional(),
  category: z.string().min(1, 'La categoría es requerida'),
  isVegetarian: z.boolean().optional(),
  isGlutenFree: z.boolean().optional(),
  spicyLevel: z.number().min(0).max(3).optional(),
});

export const GastronomiaContentSchema = BaseLandingContentSchema.extend({
  vertical: z.literal('gastronomia'),
  menu: z.array(MenuItemSchema).min(1, 'Al menos un item del menú es requerido'),
  deliveryInfo: z.object({
    available: z.boolean(),
    platforms: z.array(z.string()).optional(),
    minimumOrder: z.string().optional(),
  }).optional(),
  reservations: z.object({
    available: z.boolean(),
    phone: z.string().optional(),
    url: z.string().url().optional(),
  }).optional(),
});

export type MenuItem = z.infer<typeof MenuItemSchema>;
export type GastronomiaContent = z.infer<typeof GastronomiaContentSchema>;

export function validateGastronomiaContent(data: unknown): GastronomiaContent {
  const result = GastronomiaContentSchema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join('\n');
    throw new Error(`Validación de contenido Gastronomía fallida:\n${errors}`);
  }
  return result.data;
}
