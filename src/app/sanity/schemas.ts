import { z } from 'zod';

export const menuItemSchema = z.object({
  _id: z.string(),
  name: z.string(),
  price: z.number(),
  description: z.string().optional(),
});
export type MenuItem = z.infer<typeof menuItemSchema>;

export const menuCategorySchema = z.object({
  _id: z.string(),
  title: z.string(),
  items: z.array(menuItemSchema),
});
export type MenuCategory = z.infer<typeof menuCategorySchema>;

export const postSchema = z.object({
  _id: z.string(),
  title: z.string(),
  slug: z.object({ current: z.string() }),
  body: z.any(),
});
export type Post = z.infer<typeof postSchema>;

export const testimonialSchema = z.object({
  _id: z.string(),
  author: z.string(),
  quote: z.string(),
});
export type Testimonial = z.infer<typeof testimonialSchema>;
