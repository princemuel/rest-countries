export const serialize = <T>(data: T, options?: StructuredSerializeOptions) =>
  structuredClone(data, options);
