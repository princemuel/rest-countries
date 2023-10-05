import { REST_COUNTRIES_API } from '@/config';
import { cache } from 'react';
import 'server-only';

export const preloadCountry = (slug = '') => {
  void getCountryBySlug(slug);
};

export const getCountryBySlug = cache(
  async (slug = ''): Promise<CountryType[]> => {
    try {
      const url = `${REST_COUNTRIES_API}/alpha/${slug}`;

      const response = await fetch(url);

      return response.json();
    } catch (error) {
      console.log(error);

      return [];
    }
  }
);
