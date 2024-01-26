import { tw } from "@/helpers";
import { Nunito_Sans } from "next/font/google";

const FontSans = Nunito_Sans({
  display: "swap",
  variable: "--font-sans",
  subsets: ["latin"],
});

export const fontVars = tw(FontSans.variable);
