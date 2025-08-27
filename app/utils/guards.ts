export const isString = (value: unknown): value is string => typeof value === "string";
export const isResponse = (value: unknown): value is Response => value instanceof Response;

export const isObject = (value: unknown): value is Record<string, unknown> => {
  return "[object Object]" === Object.prototype.toString.call(value);
};

export const isEmptyObject = (value: unknown): boolean => {
  return isObject(value) && Object.keys(value).length === 0;
};

export const hasValues = <T>(value: T[] | undefined | null): value is NonNullable<T[]> => {
  return Array.isArray(value) && value.length > 0;
};

export const hasValue = <T>(value: T | undefined | null): value is NonNullable<T> => {
  return value !== undefined && value !== null && value !== "" && value !== false;
};

export const isBrowser = (() => {
  if (
    typeof window === "undefined" ||
    typeof document === "undefined" ||
    typeof HTMLElement === "undefined"
  ) {
    return false;
  }
  // Deno can polyfill browser APIs, check for native implementation
  return String(HTMLElement).includes("[native code]");
})();
export const isServer = !isBrowser;
