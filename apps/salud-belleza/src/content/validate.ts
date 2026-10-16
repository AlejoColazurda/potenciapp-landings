import { validateSaludBellezaContent } from '@potenciapp/landing-core/schemas';
import { content } from './index';

try {
  validateSaludBellezaContent(content);
  console.log('✓ Content validation passed for salud-belleza');
  process.exit(0);
} catch (error) {
  console.error('✗ Content validation failed for salud-belleza:');
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
