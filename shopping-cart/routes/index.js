var express = require('express');
var router = express.Router();
const Product = require('../models/productModel');
const Cart = require('../models/cartModel');

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.find();
    res.render('shop/index', { products });
  } catch {
    console.log('theres error');
  }
});

router.get('/add-to-cart/:id', async (req, res, next) => {
  const productId = req.params.id;
  const cart = new Cart(req.session.cart ? req.session.cart : {});
  const product = await Product.findById(productId);
  cart.add(product, product._id);
  req.session.cart = cart;
  console.log(req.session.cart);
  res.redirect('/')
});

router.get('/shopping-cart', (req, res) => {
  if(!req.session.cart) return res.render('/shop/shopping-cart', { products: null });
  var cart = new Cart(req.session.cart);
  res.render('shop/shopping-cart', { products: cart.generateArray(), totalPrice: cart.totalPrice })
});

router.get('/checkout', (req, res) => {
  res.render('shop/checkout');
});

router.post('/checkout', (req, res) => {
  if(!req.session.cart) return res.redirect('/shopping-cart');
  const cart = new Cart(req.session.cart);
  res.render('shop/checkout', { total: cart.totalPrice });
});

module.exports = router;
