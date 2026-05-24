import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    author: z.string().default('Bank วุฒิพิพัฒน์'),
    category: z.enum(['unitlink-basics', 'product-review', 'investment', 'insurance', 'planning', 'faq']),
    tags: z.array(z.string()).default([]),
    keywords: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    shortName: z.string(),
    productCode: z.string().optional(),
    category: z.enum(['unit-linked', 'traditional', 'health', 'ci', 'accident']),
    heroImage: z.string().optional(),
    features: z.array(z.string()).default([]),
    keywords: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

export const collections = { blog, products };
