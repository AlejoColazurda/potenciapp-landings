import React, { useState, type FormEvent, type ChangeEvent } from 'react';
import type { ContactFormData } from '../form-handler/types';

interface ContactFormProps {
  endpoint?: string;
  vertical?: string;
  brandName?: string;
  source?: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
  className?: string;
  labels?: {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
    submit?: string;
  };
  placeholders?: {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  };
}

const defaultLabels = {
  name: 'Nombre',
  email: 'Email',
  phone: 'Teléfono',
  message: 'Mensaje',
  submit: 'Enviar',
};

const defaultPlaceholders = {
  name: 'Tu nombre completo',
  email: 'tu@email.com',
  phone: '+54 11 1234-5678',
  message: 'Contanos cómo podemos ayudarte...',
};

export function ContactForm({
  endpoint = '/api/contact',
  vertical,
  brandName,
  source,
  onSuccess,
  onError,
  className = '',
  labels = {},
  placeholders = {},
}: ContactFormProps): React.JSX.Element {
  const [formData, setFormData] = useState<Omit<ContactFormData, 'vertical' | 'brandName' | 'source'>>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const mergedLabels = { ...defaultLabels, ...labels };
  const mergedPlaceholders = { ...defaultPlaceholders, ...placeholders };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          vertical,
          brandName,
          source: source || window.location.hostname,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el formulario');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      onSuccess?.();
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error desconocido';
      setStatus('error');
      setErrorMessage(message);
      onError?.(message);
    }
  };

  const inputStyles = {
    width: '100%',
    padding: 'var(--spacing-3)',
    border: '1px solid var(--border-default)',
    borderRadius: 'var(--radius-md)',
    backgroundColor: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    fontSize: 'var(--font-size-base)',
    transition: 'border-color var(--transition-fast)',
  };

  const labelStyles = {
    display: 'block',
    marginBottom: 'var(--spacing-1)',
    fontSize: 'var(--font-size-sm)',
    fontWeight: 500,
    color: 'var(--text-primary)',
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div style={{ marginBottom: 'var(--spacing-4)' }}>
        <label htmlFor="contact-name" style={labelStyles}>{mergedLabels.name} *</label>
        <input
          id="contact-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={mergedPlaceholders.name}
          required
          minLength={2}
          style={inputStyles}
        />
      </div>

      <div style={{ marginBottom: 'var(--spacing-4)' }}>
        <label htmlFor="contact-email" style={labelStyles}>{mergedLabels.email} *</label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={mergedPlaceholders.email}
          required
          style={inputStyles}
        />
      </div>

      <div style={{ marginBottom: 'var(--spacing-4)' }}>
        <label htmlFor="contact-phone" style={labelStyles}>{mergedLabels.phone}</label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          value={formData.phone || ''}
          onChange={handleChange}
          placeholder={mergedPlaceholders.phone}
          style={inputStyles}
        />
      </div>

      <div style={{ marginBottom: 'var(--spacing-4)' }}>
        <label htmlFor="contact-message" style={labelStyles}>{mergedLabels.message} *</label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={mergedPlaceholders.message}
          required
          minLength={10}
          rows={4}
          style={{ ...inputStyles, resize: 'vertical' }}
        />
      </div>

      {status === 'error' && (
        <div style={{ 
          marginBottom: 'var(--spacing-4)', 
          padding: 'var(--spacing-3)',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid var(--color-error)',
          borderRadius: 'var(--radius-md)',
          color: 'var(--color-error)',
          fontSize: 'var(--font-size-sm)',
        }}>
          {errorMessage}
        </div>
      )}

      {status === 'success' && (
        <div style={{ 
          marginBottom: 'var(--spacing-4)', 
          padding: 'var(--spacing-3)',
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
          border: '1px solid var(--color-success)',
          borderRadius: 'var(--radius-md)',
          color: 'var(--color-success)',
          fontSize: 'var(--font-size-sm)',
        }}>
          ¡Gracias! Tu mensaje fue enviado correctamente.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        style={{
          width: '100%',
          padding: 'var(--spacing-3) var(--spacing-6)',
          backgroundColor: status === 'loading' ? 'var(--text-tertiary)' : 'var(--accent-primary)',
          color: 'var(--color-white)',
          border: 'none',
          borderRadius: 'var(--radius-md)',
          fontSize: 'var(--font-size-base)',
          fontWeight: 600,
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          transition: 'background-color var(--transition-fast)',
        }}
      >
        {status === 'loading' ? 'Enviando...' : mergedLabels.submit}
      </button>
    </form>
  );
}
