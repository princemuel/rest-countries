import { ICountry } from '../@types';
import { cachedFetch } from './client';

export async function getCountries() {
  const response = await cachedFetch(
    '/all?fields=name,population,region,capital,alpha3Code,flags'
  );
  return response.data as ICountry[];
}
export async function getRegions() {
  const response = await cachedFetch('/all?fields=region');
  const data = (response?.data as RegionData[]).map(({ region }) => region);
  return [...new Set(data)];
}

type RegionData = {
  region: string;
  independent: boolean;
};
