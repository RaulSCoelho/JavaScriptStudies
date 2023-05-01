import { Db, Document } from 'mongodb'

interface BaseConfig<T> {
  db: Db
  collection: string
  search?: object[] | object
  projection?: Partial<{
    // eslint-disable-next-line no-unused-vars
    [K in keyof T]: 0 | 1
  }>
}

interface FindOneConfig<T> extends BaseConfig<T> {
  search: object[] | object
}

interface FindOneByIdConfig<T> extends BaseConfig<T> {
  _id: string
}

interface InsertOneConfig<T> extends BaseConfig<T> {
  data: object
}

interface UpdateOneConfig<T> extends InsertOneConfig<T> {
  _id: string
}

interface DeleteOneConfig<T> extends BaseConfig<T> {
  search: object[] | object
}

interface DeleteOneByIdConfig<T> extends BaseConfig<T> {
  _id: string
}

export async function findAll<T extends Document>({ db, collection, search, projection }: BaseConfig<T>): Promise<T[]> {
  if (Array.isArray(search)) search = { $or: search }

  const found = await db
    .collection<T>(collection)
    .find(search as any, { projection })
    .toArray()

  return found as T[]
}

export async function findOne<T extends Document>({
  db,
  collection,
  search,
  projection
}: FindOneConfig<T>): Promise<T> {
  if (Array.isArray(search)) search = { $or: search }

  const found = await db.collection(collection).findOne<T>(search, { projection })
  return found as T
}

export async function findOneById<T extends Document>({
  db,
  _id,
  collection,
  projection
}: FindOneByIdConfig<T>): Promise<T> {
  return await findOne<T>({ db, collection, search: { _id }, projection })
}

export async function insertOne<T extends Document>({ db, collection, data }: InsertOneConfig<T>): Promise<T> {
  await db.collection(collection).insertOne(data)

  return data as T
}

export async function updateOne<T extends Document>({
  db,
  _id,
  collection,
  data,
  projection
}: UpdateOneConfig<T>): Promise<T> {
  const updated = await db
    .collection<T>(collection)
    .findOneAndUpdate({ _id } as any, { $set: data as any }, { returnDocument: 'after', projection })

  return updated.value as T
}

export async function deleteOne<T>({ db, collection, search }: DeleteOneConfig<T>) {
  const query = typeof search === 'string' ? { _id: search } : search

  return await db.collection(collection).deleteOne(query)
}

export async function deleteOneById<T>({ db, collection, _id }: DeleteOneByIdConfig<T>) {
  return await deleteOne({ db, collection, search: { _id } })
}
