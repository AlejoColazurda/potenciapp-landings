import { validateServiciosProfesionalesContent } from '@potenciapp/landing-core/schemas';
import { content } from './index';

try {
  validateServiciosProfesionalesContent(content);
  console.log('✓ Content validation passed for servicios-profesionales');
  process.exit(0);
} catch (error) {
  console.error('✗ Content validation failed for servicios-profesionales:');
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
