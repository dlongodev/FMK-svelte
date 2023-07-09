import { dbConnect } from "$db/mongo";
dbConnect().then(() => {
	console.log('MongoDB is connected ✅');
}).catch(e => {console.error(e)})