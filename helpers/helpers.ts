import { ClassValue, cnMerge } from "tailwind-variants";

export function tw(...args: ClassValue[]) {
  return cnMerge(...args)({ twMerge: false });
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
