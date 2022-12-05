import { connectToDatabase } from 'infra/mongodb'
import nextConnect, { NextApiRequestCustom } from 'models/nextConnect'
import { NextApiResponse } from 'next'

export default nextConnect.get(getMiddleware, getHandler)

async function getHandler(req: NextApiRequestCustom, res: NextApiResponse) {
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
      _id: room._id,
      name: room.name,
      image: room.images.picture_url,
      address: room.address,
      summary: room.summary,
      guests: room.accommodates,
      price
    }
  })

  res.send(JSON.stringify(roomsAdapted))
}

function getMiddleware(req: NextApiRequestCustom, res: NextApiResponse, next) {
  // if (!req.userId) throw new UnauthorizedError()
  console.log(req.userId)
  console.log(req.username)
  next()
}
