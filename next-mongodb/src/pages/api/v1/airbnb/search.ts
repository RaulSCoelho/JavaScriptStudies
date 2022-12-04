import { connectToDatabase } from 'infra/mongodb'

export default async function handler(req, res) {
  try {
    const { db } = await connectToDatabase()

    const rooms = await db
      .collection('listingsAndReviews')
      .aggregate([
        {
          $search: {
            search: {
              query: req.query.term,
              path: ['description', 'amenities']
            }
          }
        },
        {
          $project: {
            description: 1,
            amenities: 1
          }
        },
        {
          $limit: 20
        }
      ])
      .toArray()

    res.send(rooms)
  } catch (err) {
    console.log(err)
    res.status(400).send({ err })
  }
}
