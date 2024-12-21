import { REST_COUNTRIES_API } from "@/config";
import { cache } from "react";
import "server-only";

const url = `${REST_COUNTRIES_API}/all?fields=name,flags,population,region,capital,cca3,tld`;

export const preloadCountries = () => void getAllCountries();

export const getAllCountries = cache(async (): Promise<CountryType[]> => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.log("[getAllCountries]", error);
    return [];
  }
});
