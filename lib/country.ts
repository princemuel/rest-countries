import { REST_COUNTRIES_API } from "@/config";
import { cache } from "react";
import "server-only";

export const preloadCountry = (slug = "") => {
  void getCountryBySlug(slug);
};

export const getCountryBySlug = cache(
  async (slug = ""): Promise<CountryType[]> => {
    try {
      const response = await fetch(`${REST_COUNTRIES_API}/alpha/${slug}`);

      return response.json();
    } catch (error) {
      console.log("[getCountryBySlug]", error);

      return [];
    }
  },
);
