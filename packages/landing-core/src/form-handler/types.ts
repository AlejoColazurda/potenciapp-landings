export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject?: string;
  source?: string;
  vertical?: string;
  brandName?: string;
}

export interface FormHandlerRequest {
  method: string;
  body: ContactFormData;
  headers?: Record<string, string>;
}

export interface FormHandlerResponse {
  statusCode: number;
  body: string;
  headers?: Record<string, string>;
}

export interface FormHandlerConfig {
  recipientEmail?: string;
  webhookUrl?: string;
  corsOrigins?: string[];
  rateLimit?: {
    maxRequests: number;
    windowMs: number;
  };
}

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

export type EmailProvider = 'ses' | 'sendgrid' | 'mailgun' | 'smtp' | 'webhook';

export interface EmailConfig {
  provider: EmailProvider;
  from: string;
  replyTo?: string;
  awsRegion?: string;
  apiKey?: string;
  webhookUrl?: string;
}
