import { Nunito_Sans } from "next/font/google";

const FontSans = Nunito_Sans({
  variable: "--font-sans",
});

export const fonts = FontSans.variable;
