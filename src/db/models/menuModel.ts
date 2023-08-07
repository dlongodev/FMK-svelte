import { z } from 'zod';
import { ObjectId } from 'mongodb';

const menuSchema = z.object({
	_id: z.instanceof(ObjectId).optional(),
	title: z.string(),
	desc: z.string().optional(),
	price: z.number(),
	category: z.string()
});

export type MenuItem = z.infer<typeof menuSchema>;
