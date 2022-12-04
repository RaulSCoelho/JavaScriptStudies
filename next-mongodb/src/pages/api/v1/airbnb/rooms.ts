import { connectToDatabase } from 'infra/mongodb'
import nextConnect from 'models/nextConnect'

export default nextConnect.get(getMiddleware, getHandler)

async function getHandler(req, res) {
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
}

function getMiddleware(req, res, next) {
  // if (!req.userId) throw new UnauthorizedError()
  console.log(req.userId)
  console.log(req.username)
  next()
}
