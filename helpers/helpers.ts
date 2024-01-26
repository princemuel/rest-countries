import { cx } from "cva";
import type { ClassValue } from "cva/types";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({});

export function tw(...args: ClassValue[]) {
  return customTwMerge(cx(args));
}

/*---------------------------------*
            STRING UTILS           *
  ---------------------------------*
 */

/*---------------------------------*
            ARRAY UTILS            *
  ---------------------------------*
 */
export function hasValues<T>(
  data: T[] | null | undefined,
): data is NonNullable<T[]> {
  return (data || []).length > 0;
}

/*---------------------------------*
            FUNCTION UTILS          *
  ---------------------------------*
 */

export const logg = (...values: Parameters<Console["log"]>) =>
  process.env.NODE_ENV === "development" ? console.log(...values) : undefined;

/*---------------------------------*
            BROWSER UTILS          *
  ---------------------------------*
 */
export const isBrowser = typeof window !== "undefined";
export const isNavigator = typeof navigator !== "undefined";
