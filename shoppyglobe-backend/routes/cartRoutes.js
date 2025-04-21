const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');
const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Get user's cart (protected)
router.get('/', verifyToken, async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  res.json(cart);
});

// Add item to cart (protected)
router.post('/', verifyToken, async (req, res) => {
  const { productId, quantity } = req.body;

  // ✅ Validate product exists
  const product = await Product.findById(productId);
  if (!product) return res.status(404).json({ message: 'Product does not exist' });

  let cart = await Cart.findOne({ userId: req.user.id });

  if (!cart) {
    cart = new Cart({
      userId: req.user.id,
      products: [{ productId, quantity }]
    });
  } else {
    const existingProduct = cart.products.find(
      (item) => item.productId.toString() === productId
    );

    if (existingProduct) {
      existingProduct.quantity += quantity || 1;
    } else {
      cart.products.push({ productId, quantity: quantity || 1 });
    }
  }

  await cart.save();
  res.json({ message: 'Item added to cart', cart });
});


// Delete item from cart (protected)
router.delete('/:productId', verifyToken, async (req, res) => {
  const cart = await Cart.findOneAndUpdate(
    { userId: req.user.id },
    { $pull: { products: { productId: req.params.productId } } },
    { new: true }
  );
  res.json({ message: 'Item removed', cart });
});

// Update quantity of product in cart (protected)
// Update quantity of a product in the cart
router.put('/:productId', verifyToken, async (req, res) => {
  const { quantity } = req.body;

  if (!quantity || quantity < 1) {
    return res.status(400).json({ message: 'Quantity must be at least 1' });
  }

  const cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) return res.status(404).json({ message: 'Cart not found' });

  const product = cart.products.find(p => p.productId.toString() === req.params.productId);
  if (!product) return res.status(404).json({ message: 'Product not found in cart' });

  product.quantity = quantity;

  await cart.save();
  res.json({ message: 'Cart updated', cart });
});




module.exports = router;
