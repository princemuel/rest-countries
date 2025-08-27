import { file } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro:schema";

export const ccas = defineCollection({
  loader: file("content/ccas.json"),
  schema: z.object({
    code: z.string().length(3),
  }),
});
