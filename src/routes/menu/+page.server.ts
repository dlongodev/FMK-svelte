import { Menu, type MenuItem } from '$db/models/menu.model'
import { Categories, type Category } from '$db/models/category.model'
import type {PageServerLoad} from './$types'
import {serializeData} from '$db/serializeData'

export const load: PageServerLoad = async function() {
	const [menuRes, categoryRes ] = await Promise.all([
        Menu.find({}, {projection: {title:1, desc:1, price:1, category:1}}).toArray(),
        Categories.find({}, {projection: {title:1, slug:1, order:1}}).toArray()
    ])
    const menuData: MenuItem[] = serializeData(menuRes)
    const categoryData: Category[] = serializeData(categoryRes)

	return {
		menu: menuData,
        categories: categoryData
	}
}