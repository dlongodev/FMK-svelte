import { MONGO_URL } from '$env/static/private';
import { MongoClient } from 'mongodb';

const client = new MongoClient(MONGO_URL);

// connect to the database
export async function connect() {
	await client.connect();
}

// disconnect from the database
export async function disconnect() {
	await client.close();
}

// get the database
export function getDB() {
	return client.db();
}
