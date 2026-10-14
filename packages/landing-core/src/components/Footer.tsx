import React from 'react';
import type { ContactInfo, SocialLinks } from '../schemas/base';

export interface FooterProps {
  brandName: string;
  contact: ContactInfo;
  social?: SocialLinks;
  className?: string;
}

export function Footer({ brandName, contact, social, className = '' }: FooterProps): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={className}
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-default)',
        padding: 'var(--spacing-12) var(--spacing-6)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-8)',
        }}
      >
        <div>
          <h3
            style={{
              fontSize: 'var(--font-size-lg)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: 'var(--spacing-4)',
            }}
          >
            {brandName}
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>
            Transformando ideas en realidad.
          </p>
        </div>

        <div>
          <h4
            style={{
              fontSize: 'var(--font-size-base)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: 'var(--spacing-4)',
            }}
          >
            Contacto
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: 'var(--spacing-2)', color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>
              {contact.address}, {contact.city}
            </li>
            <li style={{ marginBottom: 'var(--spacing-2)' }}>
              <a href={`tel:${contact.phone}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 'var(--font-size-sm)' }}>
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 'var(--font-size-sm)' }}>
                {contact.email}
              </a>
            </li>
          </ul>
        </div>

        {social && (
          <div>
            <h4
              style={{
                fontSize: 'var(--font-size-base)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: 'var(--spacing-4)',
              }}
            >
              Seguinos
            </h4>
            <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
              {social.instagram && (
                <a href={social.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                  Instagram
                </a>
              )}
              {social.facebook && (
                <a href={social.facebook} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                  Facebook
                </a>
              )}
              {social.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          marginTop: 'var(--spacing-8)',
          paddingTop: 'var(--spacing-6)',
          borderTop: '1px solid var(--border-default)',
          textAlign: 'center',
          color: 'var(--text-tertiary)',
          fontSize: 'var(--font-size-xs)',
        }}
      >
        © {currentYear} {brandName}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
