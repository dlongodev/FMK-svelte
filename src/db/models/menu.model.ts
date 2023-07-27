import * as z from 'zod';
import db from '$db/mongo'

const menu_schema = z.object({
    _id: z.string(),
  title: z.string(),
  desc: z.string().optional(),
  price: z.number(),
  category: z.string()
});

export type MenuItem = z.infer<typeof menu_schema>;
export const Menu = db.collection<MenuItem>('menus')
