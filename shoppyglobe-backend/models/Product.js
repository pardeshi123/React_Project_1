const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  stock: { type: Number, required: true } // 
});

module.exports = mongoose.model('Product', productSchema);
