import { BaseLayout } from '@/components';
import { defineMeta } from '@/config';
import { Providers } from '@/context';
import { cn } from '@/helpers';
import { Analytics } from '@vercel/analytics/react';
import { fonts } from './fonts';
import './globals.css';

export const metadata = defineMeta();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={cn(fonts)} suppressHydrationWarning>
      <body className='bg-brand-100 text-brand-300 transition-colors duration-500 ease-in dark:bg-brand-400 dark:text-white'>
        <Providers>
          <BaseLayout>{children}</BaseLayout>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
