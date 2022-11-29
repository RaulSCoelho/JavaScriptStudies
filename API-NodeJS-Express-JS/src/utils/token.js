const jwt = require('jsonwebtoken')

function generateToken(payload, expiresIn = 60 * 60 * 24) {
  const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
    expiresIn, // default: 24 Hours
  })

  return token
}

module.exports = { generateToken }
