import { defineCollection, z } from 'astro:content';

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()).default([]),
  icon: z.string().optional(),
  order: z.number().int().optional(),
  link: z.string().url().optional(),
  ctaText: z.string().optional(),
  ctaUrl: z.string().url().optional(),
  ctaExternal: z.boolean().optional(),
});

const projects = defineCollection({
  type: 'content',
  schema: projectSchema,
});

export const collections = { projects };
