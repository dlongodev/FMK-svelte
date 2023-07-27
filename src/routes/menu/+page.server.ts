import type { PageServerLoad } from './$types';
import { serializeData } from '$db/serializeData';
import db from '$db/mongo';

export const load: PageServerLoad = async function () {
	const [menuRes, categoryRes] = await Promise.all([
		db
			.collection('menus')
			.find({}, { projection: { title: 1, desc: 1, price: 1, category: 1 } })
			.toArray(),
		db
			.collection('categories')
			.find({}, { projection: { title: 1, slug: 1, order: 1 } })
			.toArray()
		// Menu.find({}, {projection: {title:1, desc:1, price:1, category:1}}).toArray(),
		// Categories.find({}, {projection: {title:1, slug:1, order:1}}).toArray()
	]);
	const menuData = serializeData(menuRes);
	const categoryData = serializeData(categoryRes);

	return {
		menu: menuData,
		categories: categoryData
	};
};
