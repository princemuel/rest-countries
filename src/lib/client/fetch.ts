import { BASE_URL } from './constants';

export default function fetcher<Data>(url: string) {
  return async (): Promise<Data | null> => {
    const response = await fetch(`${BASE_URL}/${url}`);

    // If we got a 404 Not Found or similar error
    if (!response.ok) return null;

    // Now check the headers to ensure that the server sent us JSON.
    // If not, our server is broken, and this is a serious error!
    let type = response.headers.get('content-type');

    if (type !== 'application/json') {
      throw new TypeError(`Expected JSON, got ${type}`);
    }

    return await response.json();
  };
}
