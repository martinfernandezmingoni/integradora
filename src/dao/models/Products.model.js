const mongoose = require('mongoose')

const collectionName = 'product'

const collectionSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  thumbnail: String,
  code: String,
  stock: Number 
})

const Products = mongoose.model(collectionName, collectionSchema)

module.exports = Products