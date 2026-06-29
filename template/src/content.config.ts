import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One collection over the whole content tree. Per-piece folders
// (YYYY-MM-DD-<topic>/spec.mdx, plan.mdx, ...) and global mdx are all just
// routes; the id is the path-derived slug.
const docs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    // YAML parses a bare `date: 2026-06-29` as a Date — accept both and
    // normalize to a YYYY-MM-DD string so unquoted dates don't break the build.
    date: z
      .union([z.string(), z.date()])
      .optional()
      .transform((v) => (v instanceof Date ? v.toISOString().slice(0, 10) : v)),
    status: z.string().optional(),
  }),
});

export const collections = { docs };
