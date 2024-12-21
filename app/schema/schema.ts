import { z } from "astro:schema";

const successSchema = z.object({});

const errorSchema = z.object({
  title: z.string().default(""),
  message: z.string().default(""),
  resolution: z.string().default(""),
});

export const searchSchema = z.object({
  query: z
    .string()
    .min(1, { message: "Whoop's, can't be empty" })
    .trim()
    .default(""),
});

export const schema = z.object({
  ok: z.boolean(),
  data: z.nullable(successSchema),
  error: z.nullable(errorSchema),
});

export type Result = z.infer<typeof schema>;
