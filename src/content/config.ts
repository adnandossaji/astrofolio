import { defineCollection, z } from 'astro:content';

// Define the recipe collection schema
const recipeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    prepTime: z.string(),
    cookTime: z.string(),
    servings: z.number(),
    difficulty: z.enum(['easy', 'medium', 'hard']),
    tags: z.array(z.string()),
    ingredients: z.array(z.object({
      name: z.string(),
      amount: z.string(),
      unit: z.string().optional(),
    })),
    instructions: z.array(z.object({
      step: z.number(),
      instruction: z.string(),
    })),
    notes: z.string().optional(),
    author: z.string().optional(),
    datePublished: z.string().optional(),
  }),
});

// Define the gallery collection schema
const galleryCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string(),
    alt: z.string().optional(),
    category: z.string().optional(),
    featured: z.boolean().optional().default(false),
    dateAdded: z.string().optional(),
  }),
});

// Export collections
export const collections = {
  'recipes': recipeCollection,
  'gallery': galleryCollection,
}; 