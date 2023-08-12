import { cn } from "@/helpers";
import { Nunito_Sans } from "next/font/google";

const FontSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const fonts = cn(FontSans.variable);
