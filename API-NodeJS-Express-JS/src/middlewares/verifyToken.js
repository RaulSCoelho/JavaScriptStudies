const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader)
    return res
      .status(401)
      .send({ error: 'Authorization header was not provided' })

  const authParts = authHeader.split(' ')

  if (!authParts.length === 2)
    return res.status(401).send({ error: 'Token malformed' })

  const [bearer, token] = authParts

  if (!/^Bearer$/i.test(bearer))
    return res.status(401).send({ error: 'Token malformed' })

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(400).send({ error: 'Invalid Token' })
    req.user_id = decoded.id
    return next()
  })
}
