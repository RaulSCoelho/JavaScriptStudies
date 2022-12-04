import { connectToDatabase } from 'infra/mongodb'

export default async function handler(req, res) {
  try {
    const { db } = await connectToDatabase()

    const rooms = await db
      .collection('listingsAndReviews')
      .find({})
      .limit(10)
      .toArray()

    res.send(rooms)
  } catch (err) {
    console.log(err)
    res.status(400).send({ err })
  }
}
