import mongoose from 'mongoose'
import {MONGO_URL} from '$env/static/private'

declare global {
  var mongoose: any; // This must be a `var` and not a `let / const`
}

if (!MONGO_URL) {
    throw new Error(
        'Please define the MONGO_URL environment variable inside .env file'
    )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
var cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        }

        cached.promise = mongoose.connect(MONGO_URL, opts).then((mongoose) => {
            return mongoose
        }).catch(error => console.error(error))
    }
    cached.conn = await cached.promise
    return cached.conn
}

export default dbConnect