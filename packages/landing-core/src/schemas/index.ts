export * from './base';
export * from './gastronomia';
export * from './salud-belleza';
export * from './retail';
export * from './servicios-profesionales';
export * from './construccion-metalurgica';
export * from './eventos';

import { GastronomiaContentSchema, validateGastronomiaContent } from './gastronomia';
import { SaludBellezaContentSchema, validateSaludBellezaContent } from './salud-belleza';
import { RetailContentSchema, validateRetailContent } from './retail';
import { ServiciosProfesionalesContentSchema, validateServiciosProfesionalesContent } from './servicios-profesionales';
import { ConstruccionMetalurgicaContentSchema, validateConstruccionMetalurgicaContent } from './construccion-metalurgica';
import { EventosContentSchema, validateEventosContent } from './eventos';

export const VERTICAL_SCHEMAS = {
  gastronomia: GastronomiaContentSchema,
  'salud-belleza': SaludBellezaContentSchema,
  retail: RetailContentSchema,
  'servicios-profesionales': ServiciosProfesionalesContentSchema,
  'construccion-metalurgica': ConstruccionMetalurgicaContentSchema,
  eventos: EventosContentSchema,
} as const;

export const VERTICAL_VALIDATORS = {
  gastronomia: validateGastronomiaContent,
  'salud-belleza': validateSaludBellezaContent,
  retail: validateRetailContent,
  'servicios-profesionales': validateServiciosProfesionalesContent,
  'construccion-metalurgica': validateConstruccionMetalurgicaContent,
  eventos: validateEventosContent,
} as const;

export type VerticalType = keyof typeof VERTICAL_SCHEMAS;
