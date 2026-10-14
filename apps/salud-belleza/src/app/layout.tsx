import type { Metadata } from 'next';
import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core';
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

const theme = createTheme({
  primaryColor: 'pink',
  fontFamily: 'var(--font-sans)',
});

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
        <ColorSchemeScript defaultColorScheme="auto" />
        <script dangerouslySetInnerHTML={{ __html: THEME_HEAD_SCRIPT }} />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
