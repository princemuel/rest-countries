"use client";

import { ThemeProvider } from "next-themes";

type Props = React.ComponentProps<"div">;

export function Providers({ children }: Props) {
  return (
    <ThemeProvider attribute="class" storageKey="rc-theme" enableSystem={true}>
      {children}
    </ThemeProvider>
  );
}
