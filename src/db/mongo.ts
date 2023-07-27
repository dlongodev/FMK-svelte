import { MongoClient } from 'mongodb';
import { MONGO_URL, DB_NAME } from '$env/static/private';

const client = new MongoClient(MONGO_URL);

export async function dbConnect() {
	console.log('Starting MongDB...');
	return await client.connect();
}

export default client.db(DB_NAME);
