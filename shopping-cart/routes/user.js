var express = require('express');
var router = express.Router();
const csrf = require('csurf');
const Product = require('../models/productModel');
const passport = require('passport');
const { body, validationResult } = require('express-validator');

const csrfProtection = csrf();
router.use(csrfProtection);



router.get('/profile', isLoggedIn, (req, res) => {
    res.render('user/profile');
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// Protect all Routes under this route
router.use(notLoggedIn, (req, res, next) => {
    next();
});

router.get('/signup', (req, res) => {
    messages = req.flash('error');
    res.render('user/signup', { csrfToken: req.csrfToken(), messages, hasError: messages.length > 0 })
  });
  
router.post('/signup', [
    body('email').notEmpty().isEmail().withMessage('enter a correct email'),
    body('password').isLength({ min:4 }).withMessage('password must be at least 4 character')
  ],passport.authenticate('local-signup', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signup',
    failureMessage: true,
    failureFlash: true
}));
  
  
router.get('/signin', (req, res) => {
    messages = req.flash('error');
    res.render('user/signin', { csrfToken: req.csrfToken(), messages, hasError: messages.length > 0 });
});
  
router.post('/signin', [
    body('email').notEmpty().isEmail().withMessage('enter a correct email'),
    body('password').isLength({ min:4 }).withMessage('password must be at least 4 character')
  ],passport.authenticate('local-signin', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signin',
    failureMessage: true,
    failureFlash: true
  }));

  module.exports = router;

  function isLoggedIn(req, res, next) {
      if(req.isAuthenticated()) return next();
      res.redirect('/');
}

function notLoggedIn(req, res, next) {
    if(!req.isAuthenticated()) return next();
    res.redirect('/');
}