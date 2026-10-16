import { validateGastronomiaContent } from '@potenciapp/landing-core/schemas';
import { content } from './index';

try {
  validateGastronomiaContent(content);
  console.log('✓ Content validation passed for gastronomia');
  process.exit(0);
} catch (error) {
  console.error('✗ Content validation failed for gastronomia:');
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
