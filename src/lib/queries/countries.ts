import { createQueryKeys } from '@lukemorales/query-key-factory';
import { fetchCountries, fetchCountry } from '../client';

// Will refactor and use this when migrating to reactquery
export const countries = createQueryKeys('countries', {
  detail: (countryId: string) => ({
    queryKey: [countryId],
    queryFn: () => fetchCountry(countryId),
  }),
  lsit: (query: string) => ({
    queryKey: [query],
    queryFn: () => fetchCountries(),
  }),
});
