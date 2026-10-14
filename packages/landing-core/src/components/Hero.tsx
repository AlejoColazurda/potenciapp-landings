import React from 'react';
import type { Hero as HeroContent } from '../schemas/base';

export interface HeroProps extends HeroContent {
  className?: string;
}

export function Hero({
  headline,
  subheadline,
  ctaText,
  ctaHref,
  backgroundImage,
  className = '',
}: HeroProps): React.JSX.Element {
  return (
    <section
      className={className}
      style={{
        position: 'relative',
        padding: 'var(--spacing-24) var(--spacing-6)',
        textAlign: 'center',
        backgroundColor: 'var(--bg-secondary)',
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {backgroundImage && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        />
      )}

      <div
        style={{
          position: 'relative',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <h1
          style={{
            fontSize: 'var(--font-size-5xl)',
            fontWeight: 700,
            color: backgroundImage ? 'var(--color-white)' : 'var(--text-primary)',
            marginBottom: 'var(--spacing-6)',
            lineHeight: 1.2,
          }}
        >
          {headline}
        </h1>

        <p
          style={{
            fontSize: 'var(--font-size-xl)',
            color: backgroundImage ? 'rgba(255, 255, 255, 0.9)' : 'var(--text-secondary)',
            marginBottom: 'var(--spacing-8)',
            lineHeight: 1.6,
          }}
        >
          {subheadline}
        </p>

        <a
          href={ctaHref}
          style={{
            display: 'inline-block',
            padding: 'var(--spacing-4) var(--spacing-8)',
            backgroundColor: 'var(--accent-primary)',
            color: 'var(--color-white)',
            textDecoration: 'none',
            borderRadius: 'var(--radius-lg)',
            fontSize: 'var(--font-size-lg)',
            fontWeight: 600,
            transition: 'background-color var(--transition-fast)',
          }}
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
}
