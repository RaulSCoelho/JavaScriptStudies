const express = require('express')
const router = express.Router()
const auth = require('../middlewares/verifyToken')

router.get('/', auth, async (req, res) => {
  res.send({ user_id: req.user_id })
})

module.exports = router
