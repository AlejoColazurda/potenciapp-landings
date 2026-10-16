import React from 'react';

export interface HeaderProps {
  brandName: string;
  logo?: string;
  navItems?: Array<{ label: string; href: string }>;
  className?: string;
}

export function Header({ brandName, logo, navItems = [], className = '' }: HeaderProps): React.JSX.Element {
  return (
    <header
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--spacing-4) var(--spacing-6)',
        backgroundColor: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-default)',
        position: 'sticky',
        top: 0,
        zIndex: 'var(--z-sticky)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
        {logo && (
          <img
            src={logo}
            alt={`${brandName} logo`}
            style={{ height: '40px', width: 'auto' }}
          />
        )}
        <span
          style={{
            fontSize: 'var(--font-size-xl)',
            fontWeight: 700,
            color: 'var(--text-primary)',
          }}
        >
          {brandName}
        </span>
      </div>

      {navItems.length > 0 && (
        <nav style={{ display: 'flex', gap: 'var(--spacing-6)' }}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: 'var(--font-size-base)',
                transition: 'color var(--transition-fast)',
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
