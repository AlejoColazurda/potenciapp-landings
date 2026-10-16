import React, { type ReactNode } from 'react';
import { Header, type HeaderProps } from './Header';
import { Footer, type FooterProps } from './Footer';

export interface LayoutProps {
  children: ReactNode;
  header: Omit<HeaderProps, 'className'>;
  footer: Omit<FooterProps, 'className'>;
  className?: string;
}

export function Layout({ children, header, footer, className = '' }: LayoutProps): React.JSX.Element {
  return (
    <div
      className={className}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-sans)',
      }}
    >
      <Header {...header} />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer {...footer} />
    </div>
  );
}
