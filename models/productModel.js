const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    categoryId: Number,
    price: Number,
    countInStock: Number,
    brand: String,


}, { timestamps: true })

module.exports = mongoose.model('Product', productSchema)

