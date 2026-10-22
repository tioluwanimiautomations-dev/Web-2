import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const resources = defineCollection({
  // Every Markdown file in src/content/resources becomes /resources/<file-name>
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** What kind of thing it is: "Google Sheet", "Text pack", "Guide". Used by the filter. */
    category: z.string(),
    /** Display order, lowest first. The first one is the featured resource. */
    order: z.number().int(),
    /** "coming-soon" until the founder marks it live and adds the link. */
    status: z.enum(['coming-soon', 'live']).default('coming-soon'),
    /** The Google Sheet / Doc link, once live. */
    link: z.url().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { resources };
