import { ICountry } from '../@types';
import { fetcher } from './client';

export async function getCountries() {
  const response = await fetcher(
    '/all?fields=name,population,region,capital,alpha3Code,flags'
  );
  return response.data as ICountry[];
}
export async function getRegions() {
  const response = await fetcher('/all?fields=region');
  const data = (response?.data as RegionData[]).map(({ region }) => region);
  return [...new Set(data)];
}

type RegionData = {
  region: string;
  independent: boolean;
};
