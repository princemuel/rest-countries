import { BaseLayout } from '@/components';
import { Providers } from '@/context';
import { cn } from '@/helpers';
import { fonts } from './fonts';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={cn(fonts)}>
      <body className='bg-brand-100 text-brand-300 dark:bg-brand-400 dark:text-white'>
        <Providers>
          <BaseLayout>{children}</BaseLayout>
        </Providers>
      </body>
    </html>
  );
}
