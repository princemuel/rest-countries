import { Temporal } from "@js-temporal/polyfill";

export const println$ = import.meta.env.DEV
  ? (msg?: unknown, ...args: unknown[]) =>
      console.info(`[${Temporal.Now.instant().toString()}]`, msg, ...args)
  : () => {};
