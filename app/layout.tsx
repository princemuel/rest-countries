import { cn } from "@/helpers";
import { fonts } from "./fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={cn(
          "bg-brand-100 text-brand-300 dark:bg-brand-400 dark:text-white",
          fonts
        )}
      >
        {children}
      </body>
    </html>
  );
}
