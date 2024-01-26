import { BaseLayout } from "@/components";
import { defineMeta } from "@/config";
import { Providers } from "@/context";
import { Analytics } from "@vercel/analytics/react";
import { Viewport } from "next";
import { fontVars } from "./fonts";
import "./globals.css";

export const metadata = defineMeta();

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={fontVars}
      data-darkreader-mode="dynamic"
      suppressHydrationWarning
    >
      <body className="relative bg-brand-100 text-brand-300 antialiased transition-colors duration-500 ease-in dark:bg-brand-400 dark:text-white">
        <Providers>
          <BaseLayout>{children}</BaseLayout>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
