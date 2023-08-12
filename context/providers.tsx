"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <NextThemesProvider
      attribute='data-theme'
      storageKey='page-theme'
      defaultTheme='system'
      enableSystem={true}
    >
      {children}
    </NextThemesProvider>
  );
}
