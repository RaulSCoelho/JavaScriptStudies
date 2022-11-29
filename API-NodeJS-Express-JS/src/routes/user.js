const express = require('express')
const router = express.Router()
const User = require('../models/user')
const auth = require('../middlewares/verifyToken')

// Get all the users
router.get('/', auth, async (req, res) => {
  try {
    const users = await User.find()
    res.send(users)
  } catch (err) {
    res.status(400).send(err)
  }
})

module.exports = router
