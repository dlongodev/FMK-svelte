import dbConnect from "$db/mongo";
import type {PageServerLoad} from './$types
import Menu, { type IMenu } from "$db/models/menu";
import { serializedData } from "$db/serializeData";

export const load: PageServerLoad = async function(){
    dbConnect()
    const response = await Menu.find({})
    const data: IMenu[] = serializedData(response)
    return {
            menuItems: data
    }
}