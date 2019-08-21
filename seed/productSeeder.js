const Product = require('../models/Product')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true })
    .then(() => console.log(`conected to db`))
    .catch(err => console.log(err))

var products = [
    new Product({
        imagePath: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        title: 'clothes',
        description: 'awesome',
        price: 10
    }),
    new Product({
        imagePath: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        title: 'clothes',
        description: 'awesome',
        price: 10
    }),
    new Product({
        imagePath: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        title: 'clothes',
        description: 'awesome',
        price: 10
    }),
    new Product({
        imagePath: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        title: 'clothes',
        description: 'awesome',
        price: 10
    }),
    new Product({
        imagePath: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        title: 'clothes',
        description: 'awesome',
        price: 10
    }),

    new Product({
        imagePath: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        title: 'clothes',
        description: 'awesome',
        price: 10
    }),

]
let done = 0
for (let i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit()
        }
    });
}

function exit() {
    mongoose.disconnect();
}