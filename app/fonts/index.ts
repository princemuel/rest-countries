import { cn } from '@/helpers';
import localFont from 'next/font/local';

const FontSans = localFont({
  display: 'swap',
  variable: '--font-sans',
  src: './nunito-sans.ttf',
});

export const fonts = cn(FontSans.variable);
