import { defineCollection, z } from "astro:content";

// const schema = z.object({});

const countries = defineCollection({
  loader: async () => {
    try {
      await fetch("https://restcountries.com/v3.1/all");
      return [{ id: "hfhfvff" }];
    } catch (error) {
      console.log(error);
      return [];
    }
  },
  schema: z.object({}),
});

export { countries };
