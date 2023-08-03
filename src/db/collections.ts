import { getDB } from '$db/mongo';
const db = getDB();

export async function getCollection(collectionName: string) {
	const data = await db.collection(collectionName).find({}).project({ _id: 0 }).toArray();
	// return JSON response
	return data;
}
