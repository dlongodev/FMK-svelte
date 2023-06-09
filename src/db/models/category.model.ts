import * as z from 'zod';
import db from '$db/mongo'

const category_schema = z.object({
    _id: z.string(),
  title: z.string(),
  slug: z.string(),
  order: z.number(),// so user can sort by specific order on the menu page
});

export type Category = z.infer<typeof category_schema>;
export const Categories = db.collection<Category>('categories')