import clientPromise from 'infra/mongodb'

export default async function handler(req, res) {
  try {
    const client = await clientPromise
    const db = client.db(process.env.MONGODB_DB)

    const rooms = await db
      .collection('listingsAndReviews')
      .find({})
      .limit(10)
      .toArray()

    res.json(rooms)
  } catch (err) {
    console.log(err)
    res.status(400).send({ err })
  }
}
