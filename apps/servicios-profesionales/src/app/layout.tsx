import type { Metadata } from 'next';
import { Theme } from '@radix-ui/themes';
import { 
  resolveBuildTheme, 
  THEME_HEAD_SCRIPT,
  isPreviewEnvironment 
} from '@potenciapp/landing-core/theme';
import { content } from '@/content';
import './globals.css';

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const buildTheme = resolveBuildTheme();
  const isPreview = isPreviewEnvironment();

  return (
    <html 
      lang="es" 
      data-build-theme={buildTheme}
      data-preview-override={isPreview ? 'true' : undefined}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_HEAD_SCRIPT }} />
      </head>
      <body>
        <Theme accentColor="blue" grayColor="slate" radius="medium" scaling="100%">
          {children}
        </Theme>
      </body>
    </html>
  );
}
