import { validateRetailContent } from '@potenciapp/landing-core/schemas';
import { content } from './index';

try {
  validateRetailContent(content);
  console.log('✓ Content validation passed for retail');
  process.exit(0);
} catch (error) {
  console.error('✗ Content validation failed for retail:');
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
