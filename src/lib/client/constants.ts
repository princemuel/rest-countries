import { hasValues } from "../utils";
import rqFetcher from "./fetch";

export const BASE_URL = "https://restcountries.com/v3.1";

export async function fetchCountries() {
  const response = await rqFetcher<CountryType[]>("/all")();
  return response;
}

export async function fetchRegions() {
  const response = await rqFetcher<RegionData[]>("/all?fields=region")();
  const data = response?.map(({ region }) => region);
  return [...new Set(data)];
}

export async function fetchCountry(id: string) {
  const response = await rqFetcher<CountryType>(`/alpha/${id}`)();
  return response;
}

export async function fetchBorders(codes?: string[]) {
  return hasValues(codes)
    ? await Promise.all(
        (codes || []).map(async (code) => {
          const response = await rqFetcher<CountryType>(`/alpha/${code}`)();
          return { name: response?.name, code: response?.cca3 };
        })
      )
    : [];
}

interface RegionData {
  region: string;
  independent: boolean;
}
