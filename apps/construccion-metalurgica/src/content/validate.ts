import { validateConstruccionMetalurgicaContent } from '@potenciapp/landing-core/schemas';
import { content } from './index';

try {
  validateConstruccionMetalurgicaContent(content);
  console.log('✓ Content validation passed for construccion-metalurgica');
  process.exit(0);
} catch (error) {
  console.error('✗ Content validation failed for construccion-metalurgica:');
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
