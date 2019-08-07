const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const server = express()

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-pc8aa.mongodb.net/omnistack8?retryWrites=true&w=majority', {
  useNewUrlParser: true
})

server.use(cors())
server.use(express.json())
server.use(routes)

const port = 3333
server.listen(port, () => {
  console.log(`Backend running on port ${port}...`)
})
