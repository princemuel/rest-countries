import { defineAction } from "astro:actions";
import { getCollection } from "astro:content";
import { z } from "astro:schema";

export const search = defineAction({
  input: z.object({
    query: z.string(),
  }),
  handler: async (input) => {
    const entries = await getCollection("countries", ({ data }) => {
      return Boolean(input.query)
        ? RegExp(`${input.query}`, "ig").test(data.name.common)
        : true;
    });

    return entries;
  },
});
