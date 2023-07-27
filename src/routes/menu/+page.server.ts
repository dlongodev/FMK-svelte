import type { PageServerLoad } from './$types';
import { serializeData } from '$db/serializeData';
import { getCollection } from '$db/collections';
import type { MenuItem } from '$db/models/menu.model';
import type { Category } from '$db/models/category.model';

export const load: PageServerLoad = async function () {
	const [menuRes, categoryRes] = await Promise.all([
		getCollection('menus'),
		getCollection('categories')
	]);

	console.log({ menuRes, categoryRes });

	return {
		menu: menuRes,
		categories: categoryRes
	};
};
