import { ObjectId } from 'mongodb';
import * as z from 'zod';

const category_schema = z.object({
	_id: z.instanceof(ObjectId).optional(),
	title: z.string(),
	slug: z.string(),
	order: z.number() // so user can sort by specific order on the menu page
});

export type Category = z.infer<typeof category_schema>;
