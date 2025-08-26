#!/usr/bin/env node

import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

try {
  const filePath = path.join(process.cwd(), "content", "ccas.json");
  const ccasFile = await readFile(filePath, "utf8");
  const ccasExist =
    existsSync(filePath) && ((JSON.parse(ccasFile) ?? []) as any[])?.length !== 0;

  if (!ccasExist) {
    let url = new URL("https://restcountries.com/v3.1/all");
    url.searchParams.set("fields", "cca3");

    const ctrl = new AbortController();

    const req = await fetch(new Request(url, { signal: ctrl.signal }));
    const res = await req.json();

    const ccas = res.map((data: { cca3: string }) => ({
      id: data?.cca3?.toLowerCase(),
      code: data?.cca3,
    }));

    await writeFile(filePath, JSON.stringify(ccas));

    console.log("All countries saved successfully");
  }
} catch (err) {
  console.error("[ERROR]", err);
} finally {
  try {
    const dir = path.join(process.cwd(), "content", "countries");
    await mkdir(dir, { recursive: true });

    // Read the ccas.json file
    const ccasFile = await readFile(
      path.join(process.cwd(), "content", "ccas.json"),
      "utf8",
    );
    const ccas = JSON.parse(ccasFile);
    const codes = ccas.map((c: { code: string }) => c.code);

    // Split into chunks of 50 codes (API limitation)
    const chunkSize = 50;

    for (const chunk of chunkArray(codes, chunkSize)) {
      const url = new URL("https://restcountries.com/v3.1/alpha");
      url.searchParams.set("codes", chunk.join(","));

      const ctrl = new AbortController();

      const req = await fetch(new Request(url, { signal: ctrl.signal }));
      const res = await req.json();

      for (const country of res) {
        const transformed = transformCountry(country);
        const fileName = `${transformed?.id}.json`;
        const filePath = path.join(dir, fileName);

        await writeFile(filePath, JSON.stringify(transformed));
        console.log(`Saved ${fileName}`);
      }
    }

    console.log("All countries saved successfully");
  } catch (err) {
    console.error("[ERROR]", err);
  }
}

// Transform country data to a more manageable structure
function transformCountry(country: any) {
  return {
    id: country?.cca3?.toLowerCase(),
    name: {
      common: country?.name.common,
      official: country?.name.official,
      native: Object.values(country?.name?.nativeName ?? {}).map((n) => n?.common),

      // native: Object.entries(country?.name?.nativeName ?? {}).map(
      //   ([lang, { common }]) => ({ lang, common })
      // ),
      translations: Object.fromEntries(
        Object.entries(country?.translations ?? {}).map(([k, v]) => [k, v?.common]),
      ),
    },
    code: {
      cca2: country?.cca2,
      cca3: country?.cca3?.toLowerCase(),
      ccn3: country?.ccn3,
      cioc: country?.cioc,
    },
    flag: {
      alt: country?.flags?.alt,
      icon: country?.flag,
      url: { png: country?.flags?.png, svg: country?.flags?.svg },
    },
    location: {
      region: country?.region,
      subregion: country?.subregion,
      continents: country?.continents,
      borders: (country?.borders ?? []).map((it) => it?.toLowerCase()),
      landlocked: country?.landlocked,
      latlng: country?.latlng,
    },
    capital: { names: country?.capital, latlng: country?.capitalInfo?.latlng },
    languages: country?.languages,
    currencies: Object.entries(country?.currencies ?? {}).map(
      ([code, { symbol, name }]) => ({ code, name, symbol }),
    ),
    gini: country?.gini,
    area: country?.area,
    population: country?.population,
    timezones: country?.timezones,
    tld: country?.tld,
    status: country?.status,
    independent: country?.independent,
    unMember: country?.unMember,
    fifa: country?.fifa,
    startOfWeek: country?.startOfWeek,
    car: country?.car,
    maps: Object.entries(country?.maps ?? {}).map(([key, url]) => {
      let provider = key.replace(/Maps?$/i, "").toLowerCase();
      if (provider === "openstreet") provider = "openstreetmap";
      if (provider === "openstreetmap" && !url?.startsWith("http")) {
        url = "https://www." + url?.replace(/^https?:\/\//, "");
      }
      return { provider, url };
    }),
    coatOfArms: country?.coatOfArms ?? {},
    postalCode: country?.postalCode,
    idd: country?.idd,
  };
}

function* chunkArray(arr: any[], size: number) {
  for (let i = 0; i < arr.length; i += size) {
    yield arr.slice(i, i + size);
  }
}
