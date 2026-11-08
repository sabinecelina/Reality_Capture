import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1),
    date: z.coerce.date(),
    categories: z.array(z.string()).min(1),
    description: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1),
    teaser: z.string().max(300),
    thumbnail: z.string().startsWith('/'),
    order: z.number().int().positive(),
    description: z.string().optional(),
  }),
});

export const collections = { blog, projects };
