import { NotFoundError } from 'errors'
import { NextApiRequest, NextApiResponse } from 'next'

function onNoMatchHandler(req: NextApiRequest, res: NextApiResponse) {
  const notFoundError = new NotFoundError()

  return res.status(notFoundError.statusCode).json(notFoundError)
}

function onErrorHandler(error, req: NextApiRequest, res: NextApiResponse) {
  console.log(error.statusCode)

  return res.status(error.statusCode).json(error)
}

export default Object.freeze({
  onNoMatchHandler,
  onErrorHandler
})
