/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
import { MongoClient } from 'mongodb'

declare global {
  var _mongoClientPromise: Promise<MongoClient>
}
