import { REST_COUNTRIES_API } from "@/config";
import { cache } from "react";
import "server-only";

export const preloadCountry = (slug = "") => {
  void getBySlug(slug);
};

export const getBySlug = cache(async (slug = ""): Promise<CountryType[]> => {
  try {
    const response = await fetch(`${REST_COUNTRIES_API}/alpha/${slug}`);

    return response.json();
  } catch (error) {
    console.log("[getBySlug]", error);

    return [];
  }
});
