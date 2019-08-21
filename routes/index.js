const express = require('express');
const router = express.Router();
const Product = require('../models/Product')
const csrf = require('csurf')
const passport = require('passport')

const csrfProtection = csrf()
router.use(csrfProtection)
    /* GET home page. */
router.get('/', function(req, res, next) {
    Product.find(function(err, docs) {
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize))
        }
        res.render('shop/index', { title: 'Shopping Cart', products: productChunks });
    });
});

router.get('/users/signup', (req, res, next) => {
    var messages = req.flash('error')
    res.render('users/signup', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 })

});
router.post('/users/signup', passport.authenticate('local-signup', {
    successRedirect: '/users/profile',
    failureRedirect: '/users/signup',
    failureFlash: true
}))
router.get('/profile', (req, res) => {
    res.render('users/profile')
});

module.exports = router;