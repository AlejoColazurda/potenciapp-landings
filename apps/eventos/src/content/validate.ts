import { validateEventosContent } from '@potenciapp/landing-core/schemas';
import { content } from './index';

try {
  validateEventosContent(content);
  console.log('✓ Content validation passed for eventos');
  process.exit(0);
} catch (error) {
  console.error('✗ Content validation failed for eventos:');
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
