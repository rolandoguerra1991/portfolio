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

const stackSchema = z.object({
  iconClass: z.string(),
  iconText: z.string().optional(),
  label: z.string(),
  hint: z.string(),
  delay: z.number().optional(),
  order: z.number().int().optional(),
});

const stack = defineCollection({
  type: 'data',
  schema: stackSchema,
});

const experienceSchema = z.object({
  date: z.string(),
  role: z.string(),
  company: z.string(),
  summary: z.string().optional(),
  detail: z.string(),
  delay: z.number().optional(),
  order: z.number().int().optional(),
});

const experience = defineCollection({
  type: 'data',
  schema: experienceSchema,
});

export const collections = { projects, stack, experience };
