import { connectToDatabase } from 'infra/mongodb'

export default async function handler(req, res) {
  try {
    const { db } = await connectToDatabase()

    const data = req.query

    const response = await db.collection('bookings').insertOne(data)

    res.send(response)
  } catch (err) {
    console.log(err)
    res.status(400).send({ err })
  }
}
