import { env } from '@/env.mjs'
import { MongoClient } from 'mongodb'

if (!env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = env.MONGODB_URI
const options = {}

let client
let clientPromise: Promise<MongoClient>

if (env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export async function connectToDatabase(database = env.MONGODB_DB) {
  const client = await clientPromise
  const db = client.db(database)

  return {
    client,
    db
  }
}
