import { getCollection } from 'astro:content';
import fs from 'node:fs/promises';
import path from 'node:path';

// Directory where gallery images are stored
const GALLERY_DIR = path.join(process.cwd(), 'public', 'images', 'gallery');

// Interface for gallery items
export interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  image: string;
  alt?: string;
  category?: string;
  featured: boolean;
  dateAdded?: string;
}

/**
 * Gets all images from the gallery directory and their metadata
 */
export async function getAllGalleryImages(): Promise<GalleryItem[]> {
  // Get metadata from content collection
  const galleryCollection = await getCollection('gallery');
  
  // Map the collection items to our interface
  const galleryItems = galleryCollection.map(item => ({
    id: item.id,
    title: item.data.title,
    description: item.data.description,
    image: item.data.image,
    alt: item.data.alt,
    category: item.data.category,
    featured: item.data.featured || false,
    dateAdded: item.data.dateAdded
  }));
  
  return galleryItems;
}

/**
 * Check if public/images/gallery exists and create if it doesn't
 */
export async function ensureGalleryDirExists() {
  try {
    await fs.access(GALLERY_DIR);
  } catch (error) {
    // Directory doesn't exist, create it
    await fs.mkdir(GALLERY_DIR, { recursive: true });
  }
}

/**
 * Get all images directly from the gallery directory (for auto-discovery)
 */
export async function getImagesFromDir(): Promise<string[]> {
  try {
    await ensureGalleryDirExists();
    
    const files = await fs.readdir(GALLERY_DIR);
    return files.filter(file => {
      const extension = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif'].includes(extension);
    }).map(file => `/images/gallery/${file}`);
  } catch (error) {
    console.error('Error reading gallery directory:', error);
    return [];
  }
}

/**
 * Get both collection data and images from the directory
 */
export async function getGallery(): Promise<GalleryItem[]> {
  // Get metadata from collection
  const galleryItems = await getAllGalleryImages();
  
  // Get all images from the directory
  const directoryImages = await getImagesFromDir();
  
  // Find images in the directory that don't have metadata
  const galleryImagePaths = galleryItems.map(item => item.image);
  const newImages = directoryImages.filter(image => !galleryImagePaths.includes(image));
  
  // Create simple metadata for new images
  const newItems: GalleryItem[] = newImages.map(image => {
    const filename = path.basename(image);
    const id = path.basename(image, path.extname(image)); // Use filename without extension as ID
    
    return {
      id,
      title: id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '), // Convert filename to title
      image,
      featured: false
    };
  });
  
  // Combine both sets of items
  return [...galleryItems, ...newItems];
} 