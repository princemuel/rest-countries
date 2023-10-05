import { getPlaiceholder } from 'plaiceholder';
import { cache } from 'react';
import 'server-only';

export const preloadBase64 = (slug = '') => {
  void toBase64(slug);
};

export const toBase64 = cache(async (imageUrl = '') => {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch image: ${response.status} ${response.statusText}`
      );
    }
    const buffer = await response.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (exception) {
    if (exception instanceof Error) console.log(exception.stack);
    else console.log(exception);
    const base64 =
      typeof window === 'undefined'
        ? Buffer.from(imageUrl).toString('base64')
        : window?.btoa(imageUrl);

    return base64 ?? '';
  }
});
