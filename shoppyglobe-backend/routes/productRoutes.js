const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');
const Product = require('../models/Product');

// Get all products (public)
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Create product (protected)

router.post('/', verifyToken, async (req, res) => {
  console.log("✅ POST /api/products route hit");
  const product = new Product(req.body);
  await product.save();
  res.json({ message: 'Product created', product });
});

// Get a single product by ID (public)
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Update product (protected)
router.put('/:id', verifyToken, async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ message: 'Product updated', updated });
});

// Delete product (protected)
router.delete('/:id', verifyToken, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product deleted' });
});

module.exports = router;
