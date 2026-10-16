import { z } from 'zod';
import { BaseLandingContentSchema } from './base';

export const ProductCategorySchema = z.object({
  name: z.string().min(1, 'El nombre de la categoría es requerido'),
  description: z.string().optional(),
  image: z.string().optional(),
  slug: z.string().min(1, 'El slug es requerido'),
});

export const FeaturedProductSchema = z.object({
  name: z.string().min(1, 'El nombre del producto es requerido'),
  description: z.string().min(1, 'La descripción es requerida'),
  price: z.string().min(1, 'El precio es requerido'),
  image: z.string().optional(),
  badge: z.string().optional(),
  category: z.string().min(1, 'La categoría es requerida'),
});

export const RetailContentSchema = BaseLandingContentSchema.extend({
  vertical: z.literal('retail'),
  categories: z.array(ProductCategorySchema).min(1, 'Al menos una categoría es requerida'),
  featuredProducts: z.array(FeaturedProductSchema).min(1, 'Al menos un producto destacado es requerido'),
  storeInfo: z.object({
    hasPhysicalStore: z.boolean(),
    hasOnlineStore: z.boolean(),
    onlineStoreUrl: z.string().url().optional(),
    paymentMethods: z.array(z.string()).optional(),
    shippingInfo: z.string().optional(),
  }),
  promotions: z.array(z.object({
    title: z.string(),
    description: z.string(),
    validUntil: z.string().optional(),
  })).optional(),
});

export type ProductCategory = z.infer<typeof ProductCategorySchema>;
export type FeaturedProduct = z.infer<typeof FeaturedProductSchema>;
export type RetailContent = z.infer<typeof RetailContentSchema>;

export function validateRetailContent(data: unknown): RetailContent {
  const result = RetailContentSchema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join('\n');
    throw new Error(`Validación de contenido Retail fallida:\n${errors}`);
  }
  return result.data;
}
