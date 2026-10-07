import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const lessons = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content",
  }),

  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  lessons,
};