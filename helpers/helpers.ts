import { cx } from 'cva';
import type { ClassValue } from 'cva/types';
import { extendTailwindMerge } from 'tailwind-merge';

const customTwMerge = extendTailwindMerge({});

export function cn(...args: ClassValue[]) {
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
  data: T[] | null | undefined
): data is NonNullable<T[]> {
  return (data || []).length > 0;
}

/*---------------------------------*
            BROWSER UTILS          *
  ---------------------------------*
 */
export const isBrowser = typeof window !== 'undefined';
export const isNavigator = typeof navigator !== 'undefined';
