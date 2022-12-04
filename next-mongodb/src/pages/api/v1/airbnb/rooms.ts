import { connectToDatabase } from 'infra/mongodb'

export default async function handler(req, res) {
  try {
    const { db } = await connectToDatabase()

    const rooms = await db
      .collection('listingsAndReviews')
      .find({})
      .limit(10)
      .project({
        _id: 1,
        name: 1,
        'images.picture_url': 1,
        address: 1,
        summary: 1,
        accommodates: 1,
        price: 1
      })
      .toArray()

    const roomsAdapted = rooms.map(room => {
      const price = JSON.parse(JSON.stringify(room.price)).$numberDecimal
      return {
        ...room,
        images: undefined,
        image: room.images.picture_url,
        guests: room.accommodates,
        price
      }
    })

    res.send(JSON.stringify(roomsAdapted))
  } catch (err) {
    console.log(err)
    res.status(400).send({ err })
  }
}
