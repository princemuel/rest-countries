import type { ICountry } from "../../@types";
import { hasValues } from "../utils";
import rqFetcher from "./fetch";

export const BASE_URL = "https://restcountries.com/v2";

export async function fetchCountries() {
  const response = await rqFetcher<ICountry[]>(
    "/all?fields=name,population,region,capital,alpha3Code,flags"
  )();
  return response;
}

export async function fetchRegions() {
  const response = await rqFetcher<RegionData[]>("/all?fields=region")();
  const data = response?.map(({ region }) => region);
  return [...new Set(data)];
}

export async function fetchCountry(id: string) {
  const response = await rqFetcher<ICountry>(`/alpha/${id}`)();
  return response;
}

export async function fetchBorders(codes?: string[]) {
  return hasValues(codes)
    ? await Promise.all(
        (codes || []).map(async (code) => {
          const response = await rqFetcher<ICountry>(`/alpha/${code}`)();
          return { name: response?.name, code: response?.alpha3Code };
        })
      )
    : [];
}

interface RegionData {
  region: string;
  independent: boolean;
}
