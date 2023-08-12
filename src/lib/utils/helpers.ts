/*---------------------------------*
            STRING UTILS           *
  ---------------------------------*
 */

export function capitalize(string = "") {
  return string?.[0]?.toUpperCase() + string?.slice(1).toLowerCase();
}
export function trim(string = "") {
  return string?.trim();
}

export function removeFirstChar(string = "") {
  return string?.slice(1);
}
export function pluralize(word: string, value: number) {
  return value === 1 ? `${word}` : `${word}s`;
}

export function truncate(str = "", length = str.length) {
  return str.length > length ? `${str.substring(0, length)}...` : str;
}

type EndsWith<W, S extends string> = W extends `${infer R}${S}` ? W : never;

export const endsWith = <Word extends string, Suffix extends string>(
  str: Word,
  suffix: Suffix
): str is EndsWith<Word, Suffix> => {
  return str.endsWith(suffix);
};
/*---------------------------------*
            OBJECT UTILS           *
  ---------------------------------*
 */

export function serialize<T>(data: T): NonNullable<T> {
  return JSON.parse(JSON.stringify(data));
}

export const objectKeys = <O extends {}>(object: O): (keyof O)[] => {
  return Object.keys(object) as (keyof O)[];
};

/*---------------------------------*
            ARRAY UTILS           *
  ---------------------------------*
 */
export function hasValues<T>(
  data: T[] | null | undefined
): data is NonNullable<T[]> {
  return (data || []).length > 0;
}

/*---------------------------------*
            DOM UTILS              *
  ---------------------------------*
 */
export const isBrowser = typeof window !== "undefined";
export const isNavigator = typeof navigator !== "undefined";

export function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T["addEventListener"]> | [string, Function | null, ...any]
): void {
  if (obj && obj.addEventListener) {
    obj.addEventListener(
      ...(args as Parameters<HTMLElement["addEventListener"]>)
    );
  }
}

export function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args:
    | Parameters<T["removeEventListener"]>
    | [string, Function | null, ...any]
): void {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(
      ...(args as Parameters<HTMLElement["removeEventListener"]>)
    );
  }
}
