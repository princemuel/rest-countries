'use server';

import { getPlaiceholder } from 'plaiceholder';

export async function toBase64(imageUrl: string) {
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
    return typeof window === 'undefined'
      ? Buffer.from(imageUrl).toString('base64')
      : window?.btoa(imageUrl);
  }
}

export async function blurDataUrls(images: Photo[]) {
  const base64Promises = images.map((image) => toBase64(image.url));

  const base64Results = await Promise.all(base64Promises);

  return images.map((image, idx) => {
    image.blurredDataUrl = base64Results[idx];
    return image;
  });
}

export async function blurImages(urls: string) {}
