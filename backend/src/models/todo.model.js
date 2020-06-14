const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ProductSchema = new Schema({
  task: { type: String, required: true, max: 100 }
})

module.exports = mongoose.model('Product', ProductSchema)