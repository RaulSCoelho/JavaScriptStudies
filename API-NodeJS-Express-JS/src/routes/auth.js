const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const User = require('../models/user')
const mailer = require('../modules/mailer')
const { generateToken } = require('../utils/token')
const path = require('path')

// Register a user
router.post('/register', async (req, res) => {
  const { email } = req.body

  try {
    const existingUser = await User.findOne({ email })
    if (existingUser)
      return res.status(400).send({ error: 'User already exists!' })

    const user = await User.create(req.body)

    user.password = undefined

    return res.send({
      user,
      token: generateToken({ id: user.id }),
    })
  } catch (err) {
    return res.status(400).send({ error: 'Registration failed' })
  }
})

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email }).select('+password')
  if (!user) return res.status(404).send({ error: 'Invalid email or password' })

  const validPassword = await bcrypt.compare(password, user.password)
  if (!validPassword)
    return res.status(404).send({ error: 'Invalid email or password' })

  user.password = undefined

  return res.send({
    user,
    token: generateToken({ id: user.id }),
  })
})

router.post('/forgot-password', async (req, res) => {
  const { email } = req.body
  const message = 'If user exists an email will be sent, check your inbox'
  const errorMessage = 'Something went wrong when trying to reset the password'

  try {
    const user = await User.findOne({ email })
    if (!user) return res.send({ message })

    const token = crypto.randomBytes(20).toString('hex')

    const token_expires = new Date()
    token_expires.setMinutes(token_expires.getMinutes() + 10)

    await User.findByIdAndUpdate(user.id, {
      $set: {
        passwordResetToken: token,
        passwordResetTokenExpires: token_expires,
      },
    })

    mailer.sendMail({
      to: email,
      from: 'raul.s.coelho@gmail.com',
      template: 'auth/forgot-password',
      context: { token },
    })

    return res.send({ message })
  } catch (err) {
    res.status(400).send({ error: errorMessage })
  }
})

router.post('/reset-password', async (req, res) => {
  const { email, password, token } = req.body
  const errorMessage = 'Something went wrong when trying to reset the password'

  try {
    const user = await User.findOne({ email }).select(
      '+passwordResetToken passwordResetTokenExpires'
    )
    if (!user) return res.status(400).send({ error: errorMessage })

    if (token !== user.passwordResetToken)
      return res.status(400).send({ error: 'Invalid token' })

    const now = new Date()

    if (now > user.passwordResetTokenExpires)
      return res.status(400).send({ error: 'Expired token' })

    user.password = password

    await user.save()

    return res.send({ message: 'Your password has been reset successfully' })
  } catch (err) {
    res.status(400).send({ error: errorMessage })
  }
})

module.exports = router
