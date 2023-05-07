import { client } from '.';
import { memoize } from '../utils/cache';
import { getErrorMessage } from '../utils/error-handler';

export const fetcher = async (url: string) => {
  return await client
    .get(url)
    .then((res) => ({
      status: res.status,
      data: res.status === 200 ? res.data : null,
    }))
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log('ERROR_RES', error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log('ERROR_REQ', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        const ex = getErrorMessage(error);
        console.log('ERROR_MSG', ex);
      }
      console.log(error.config);
    });
};

export const cachedFetch = memoize(fetcher);
