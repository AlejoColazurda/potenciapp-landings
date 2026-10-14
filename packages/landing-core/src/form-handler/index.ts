export * from './types';
export * from './handler';

export {
  validateContactForm,
  sanitizeFormData,
  sanitizeInput,
  handleContactForm,
  createAwsLambdaHandler,
} from './handler';

export type {
  ContactFormData,
  FormHandlerRequest,
  FormHandlerResponse,
  FormHandlerConfig,
  ValidationResult,
  EmailProvider,
  EmailConfig,
} from './types';
