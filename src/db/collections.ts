import { getDB } from '$db/mongo';
const db = getDB();

export async function getCollection(collectionName: string): Promise<JSON> {
	// get repositories from MongoDB with skip and limit
	const data = await db.collection(collectionName).find({}).project({ _id: 0 }).toArray();

	// return JSON response
	return data;
}
