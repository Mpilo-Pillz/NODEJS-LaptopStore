const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!");
    }).catch(err => {
        console.error("FAILED TO CONNECT", err);
    });

const p = new Product({
    name: 'Ruby Grapefruit',
    price: 11.99,
    category: 'fruit'
})

p.save().then(p => {
    console.log(p)
})
    .catch(e => {
        console.log(e);
    })