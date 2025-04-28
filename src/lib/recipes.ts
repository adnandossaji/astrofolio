// Recipe helpers
import { getCollection, getEntry } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export type RecipeEntry = CollectionEntry<'recipes'>;

// Helper functions
export async function getAllRecipes() {
  return await getCollection('recipes');
}

export async function getRecipeBySlug(slug: string) {
  try {
    return await getEntry('recipes', slug);
  } catch (error) {
    console.error(`Recipe with slug "${slug}" not found:`, error);
    return undefined;
  }
}

export async function getRecipesByTag(tag: string) {
  const recipes = await getAllRecipes();
  return recipes.filter(recipe => recipe.data.tags.includes(tag));
} 