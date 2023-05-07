export function memoize(this: any, func: Function) {
  const cache = new Map<string, any>();

  return (...args: any[]) => {
    let key = args.length + args.join('+');
    if (cache.has(key)) return cache.get(key);

    let result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
}
