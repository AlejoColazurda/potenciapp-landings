import type {
  ContactFormData,
  FormHandlerRequest,
  FormHandlerResponse,
  FormHandlerConfig,
  ValidationResult,
} from './types';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s\-+()]+$/;

export function validateContactForm(data: unknown): ValidationResult {
  const errors: string[] = [];

  if (!data || typeof data !== 'object') {
    return { valid: false, errors: ['Invalid request body'] };
  }

  const form = data as Record<string, unknown>;

  if (!form.name || typeof form.name !== 'string' || form.name.trim().length < 2) {
    errors.push('Name is required and must be at least 2 characters');
  }

  if (!form.email || typeof form.email !== 'string' || !EMAIL_REGEX.test(form.email)) {
    errors.push('A valid email is required');
  }

  if (form.phone && typeof form.phone === 'string' && !PHONE_REGEX.test(form.phone)) {
    errors.push('Phone number contains invalid characters');
  }

  if (!form.message || typeof form.message !== 'string' || form.message.trim().length < 10) {
    errors.push('Message is required and must be at least 10 characters');
  }

  if (form.message && typeof form.message === 'string' && form.message.length > 5000) {
    errors.push('Message must not exceed 5000 characters');
  }

  return { valid: errors.length === 0, errors };
}

export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '')
    .slice(0, 5000);
}

export function sanitizeFormData(data: ContactFormData): ContactFormData {
  return {
    name: sanitizeInput(data.name),
    email: data.email.trim().toLowerCase(),
    phone: data.phone ? sanitizeInput(data.phone) : undefined,
    message: sanitizeInput(data.message),
    subject: data.subject ? sanitizeInput(data.subject) : undefined,
    source: data.source ? sanitizeInput(data.source) : undefined,
    vertical: data.vertical ? sanitizeInput(data.vertical) : undefined,
    brandName: data.brandName ? sanitizeInput(data.brandName) : undefined,
  };
}

function createResponse(
  statusCode: number,
  body: Record<string, unknown>,
  config?: FormHandlerConfig
): FormHandlerResponse {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (config?.corsOrigins && config.corsOrigins.length > 0) {
    headers['Access-Control-Allow-Origin'] = config.corsOrigins[0];
    headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS';
    headers['Access-Control-Allow-Headers'] = 'Content-Type';
  }

  return {
    statusCode,
    body: JSON.stringify(body),
    headers,
  };
}

export async function handleContactForm(
  request: FormHandlerRequest,
  config: FormHandlerConfig = {},
  sendEmail?: (data: ContactFormData) => Promise<void>
): Promise<FormHandlerResponse> {
  if (request.method === 'OPTIONS') {
    return createResponse(200, { ok: true }, config);
  }

  if (request.method !== 'POST') {
    return createResponse(405, { error: 'Method not allowed' }, config);
  }

  const validation = validateContactForm(request.body);
  if (!validation.valid) {
    return createResponse(400, { error: 'Validation failed', details: validation.errors }, config);
  }

  const sanitizedData = sanitizeFormData(request.body as ContactFormData);

  try {
    if (config.webhookUrl) {
      await fetch(config.webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...sanitizedData,
          timestamp: new Date().toISOString(),
        }),
      });
    }

    if (sendEmail) {
      await sendEmail(sanitizedData);
    }

    return createResponse(200, { success: true, message: 'Form submitted successfully' }, config);
  } catch (error) {
    console.error('Form submission error:', error);
    return createResponse(500, { error: 'Internal server error' }, config);
  }
}

export function createAwsLambdaHandler(
  config: FormHandlerConfig = {},
  sendEmail?: (data: ContactFormData) => Promise<void>
) {
  return async (event: {
    httpMethod: string;
    body: string | null;
    headers?: Record<string, string>;
  }): Promise<FormHandlerResponse> => {
    let body: ContactFormData;

    try {
      body = event.body ? JSON.parse(event.body) : {};
    } catch {
      return createResponse(400, { error: 'Invalid JSON body' }, config);
    }

    return handleContactForm(
      {
        method: event.httpMethod,
        body,
        headers: event.headers,
      },
      config,
      sendEmail
    );
  };
}
