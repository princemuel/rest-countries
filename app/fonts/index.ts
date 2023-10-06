import { cn } from '@/helpers';
import { Nunito_Sans } from 'next/font/google';
import localFont from 'next/font/local';

const isProduction = process.env.NODE_ENV === 'production';

const FontSans_DEV = localFont({
  display: 'swap',
  variable: '--font-sans',
  src: './nunito-sans.ttf',
});

const FontSans_PROD = Nunito_Sans({
  display: 'swap',
  variable: '--font-sans',
  subsets: ['latin'],
});

export const fonts = cn(
  isProduction ? [FontSans_PROD.variable] : [FontSans_DEV.variable]
);
