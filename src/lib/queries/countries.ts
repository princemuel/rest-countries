import { createQueryKeys } from "@lukemorales/query-key-factory";
import { fetchCountries, fetchCountry } from "../client";

// Will refactor and use this when migrating to reactquery
export const countries = createQueryKeys("countries", {
  detail: (id: string) => ({
    queryKey: [id],
    queryFn: () => fetchCountry(id),
  }),
  lsit: (query: string) => ({
    queryKey: [query],
    queryFn: () => fetchCountries(),
  }),
});
