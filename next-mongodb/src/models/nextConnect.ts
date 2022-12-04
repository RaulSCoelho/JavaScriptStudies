import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'

import controller from './controller'

interface NextApiRequestCustom extends NextApiRequest {
  userId: number
  username: string
}

export default nextConnect<NextApiRequestCustom, NextApiResponse>({
  attachParams: true,
  onNoMatch: controller.onNoMatchHandler,
  onError: controller.onErrorHandler
})
  // ONLY EXAMPLE
  .use((req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
      req.userId = 0
      req.username = 'anonymous'
    } else {
      req.userId = 1
      req.username = 'defined'
    }

    next()
  })
