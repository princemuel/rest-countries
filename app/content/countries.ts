import { glob } from "astro/loaders";
import { defineCollection, reference } from "astro:content";
import { z } from "astro:schema";

export const countries = defineCollection({
  loader: glob({ base: "content/countries", pattern: "**/[^_]*.json" }),
  schema: z.object({
    // id: z.string().min(2),
    name: z.object({
      common: z.string().min(2),
      official: z.string().min(2),
      native: z.array(z.string()).default([]),
      translations: z.record(reference("ccas"), z.string().min(1)).default({}),
    }),
    code: z.object({
      cca2: z.string().default(""),
      cca3: reference("ccas"),
      ccn3: z.string().default(""),
      cioc: z.string().default(""),
    }),
    flag: z.object({
      alt: z.string().default(""),
      icon: z.string().emoji(),
      url: z.object({ png: z.string().url(), svg: z.string().url() }),
    }),
    location: z.object({
      region: z.string().min(2),
      subregion: z.string().default(""),
      continents: z.array(z.string()).default([]),
      borders: z.array(reference("ccas")).default([]),
      landlocked: z.boolean().default(false),
      latlng: z.tuple([z.number().min(-90).max(90), z.number().min(-180).max(180)]),
    }),
    capital: z.object({
      names: z.array(z.string()).default([]),
      latlng: z
        .tuple([z.number().min(-90).max(90), z.number().min(-180).max(180)])
        .nullish(),
    }),
    languages: z.record(reference("ccas"), z.string().min(2)).default({}),
    currencies: z.array(
      z.object({ code: z.string(), name: z.string(), symbol: z.string() }),
    ),
    gini: z
      .record(z.string().regex(/^\d{4}$/), z.number().nonnegative().lte(100))
      .default({}),
    area: z.number().nonnegative().finite(),
    population: z.number().nonnegative().finite(),
    timezones: z.array(z.string().min(2)).default([]),
    tld: z.array(z.string().min(2)).default([]),
    status: z.string().default(""),
    independent: z.boolean().default(false),
    unMember: z.boolean().default(false),
    fifa: z.string().default(""),
    startOfWeek: z.string().min(2),
    car: z.object({
      side: z.enum(["left", "right"]),
      signs: z.array(z.string().default("")).default([]),
    }),
    maps: z.array(
      z.object({
        url: z.string().url(),
        provider: z.enum(["google", "openstreetmap"]),
      }),
    ),
    coatOfArms: z.object({
      png: z.string().url().nullish(),
      svg: z.string().url().nullish(),
    }),
    postalCode: z.object({
      format: z.string().nullish(),
      regex: z.string().nullish(),
    }),
    idd: z.object({
      root: z.string().default(""),
      suffixes: z.array(z.string().default("")).default([]),
    }),
  }),
});
