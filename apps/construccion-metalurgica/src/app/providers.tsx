'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#fff7e6',
      100: '#ffeacc',
      200: '#ffd699',
      300: '#ffc266',
      400: '#ffad33',
      500: '#ff9900',
      600: '#cc7a00',
      700: '#995c00',
      800: '#663d00',
      900: '#331f00',
    },
  },
  fonts: {
    heading: 'var(--font-sans)',
    body: 'var(--font-sans)',
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
