const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/user')
const { generateToken } = require('../utils/token')

// Get all the users
router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    res.send(users)
  } catch (err) {
    res.status(400).send(err)
  }
})

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
  if (!user)
    return res.status(404).send({ error: 'Invalid username or password' })

  const validPassword = await bcrypt.compare(password, user.password)
  if (!validPassword)
    return res.status(404).send({ error: 'Invalid username or password' })

  user.password = undefined

  return res.send({
    user,
    token: generateToken({ id: user.id }),
  })
})

module.exports = router
