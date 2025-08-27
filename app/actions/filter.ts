import { defineAction } from "astro:actions";
import { getCollection } from "astro:content";
import { z } from "astro:schema";

export const filter = defineAction({
  input: z.object({
    query: z.string(),
  }),
  handler: async (input) => {
    const entries = await getCollection("countries", ({ data }) => {
      return input.query.toLowerCase() !== "all"
        ? RegExp(`${input.query}`, "ig").test(data.location.region)
        : true;
    });
    return entries;
  },
});
