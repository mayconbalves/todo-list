const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const todo = require('./routes/todo.router') // Imports routes for the products

const mongoDB = process.env.MONGODB_URI

mongoose.connect(mongoDB, {
  useNewUrlParser : true
})

mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

// baseUrl:  http://localhost:8080/products/
app.use('/todos', todo)

const port = 8080

app.listen(port, () => {
  console.log('Server start on port ' + port)
})
