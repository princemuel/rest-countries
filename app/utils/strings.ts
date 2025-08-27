type EndsWith<W extends string, S extends string> = W extends `${string}${S}` ? W : never;

export const capitalize = <S extends string>(str: S, locale?: Intl.LocalesArgument) => {
  if (!str) return str as Capitalize<S>;
  return (str.charAt(0).toLocaleUpperCase(locale) +
    str.slice(1).toLocaleLowerCase(locale)) as Capitalize<S>;
};

export const normalize = (str: string) =>
  str
    .normalize("NFD")
    .replaceAll(/[\u0300-\u036f]/g, "")
    .replaceAll(/[^\w]/g, "-");

export const truncate = (str: string, length: number, locale?: Intl.LocalesArgument) => {
  if (!str || typeof str !== "string" || str.length <= length) return str;

  // Use Intl.Segmenter for proper grapheme cluster handling
  if (Intl.Segmenter) {
    const segmenter = new Intl.Segmenter(locale, { granularity: "grapheme" });
    const segments = Array.from(segmenter.segment(str));
    if (segments.length <= length) return str;
    return (
      segments
        .slice(0, length)
        .map((s) => s.segment)
        .join("") + "..."
    );
  }

  return `${str.slice(0, length)}...`;
};

export const pluralize = <C extends number, N extends string, P extends string = `${N}s`>(
  count: C,
  noun: N,
  plural?: P,
  locale?: Intl.LocalesArgument,
) => {
  // Use Intl.PluralRules for proper pluralization
  if (Intl.PluralRules) {
    const pr = new Intl.PluralRules(locale);
    const rule = pr.select(count);
    return (rule === "one" ? noun : (plural ?? `${noun}s`)) as C extends 1 ? N : P;
  }

  return (count === 1 ? noun : (plural ?? `${noun}s`)) as C extends 1 ? N : P;
};

export const endsWith = <W extends string, S extends string>(
  str: W,
  suffix: S,
): str is EndsWith<W, S> => {
  return str.endsWith(suffix);
};
