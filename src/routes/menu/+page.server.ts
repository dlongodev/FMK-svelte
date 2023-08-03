import type { PageServerLoad } from './$types';
import { getCollection } from '$db/collections';

export const load: PageServerLoad = async function () {
	return {
		menu: getCollection('menus'),
		categories: getCollection('categories')
	};
};
