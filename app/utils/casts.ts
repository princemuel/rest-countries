export const toNull = <T>(value: T | undefined): T | null => (value ? value : null);
export const toUndefined = <T>(value: T | null): T | undefined => (value ? value : undefined);
/** Safely parses a value to a number and guards against NaN and negative zero. */
export const toValidNumber = (input: unknown, defaultValue = 0): number => {
  if (input == null || input === "") return defaultValue;

  const value = Number(input);
  return Number.isFinite(value) ? value : defaultValue;
};

const TRUTHY_STRINGS = new Set(["true", "1", "yes", "on"]);
export const toBool = (value?: unknown): boolean => {
  if (value == null) return false;
  if (typeof value === "boolean") return value;
  if (typeof value === "number") return value !== 0;
  if (typeof value === "string") return TRUTHY_STRINGS.has(value.toLowerCase().trim());
  return Boolean(value);
};
