const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

// Import Routes
const projectsRoute = require('./routes/projects')
const authRoute = require('./routes/auth')

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
  },
  () => console.log('Connected to DB!')
)

// Middlewares
app.use(cors())
app.use(express.json())

// App Routes
app.use('/projects', projectsRoute)
app.use('/auth', authRoute)

app.listen(3000, () => {
  console.log('Backend started at http://localhost:3000')
})
