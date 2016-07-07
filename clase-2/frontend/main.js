const $ = require('jquery')
window.$ = $

const datalayer = require('./lib/datalayer')

const Product = require('./datalayer-definitions/product')
const productCollection = new Product.Collection()
datalayer.registry('products', productCollection)

const Order = require('./datalayer-definitions/order')
const orderCollection = new Order.Collection()
datalayer.registry('orders', orderCollection)

const xhr = productCollection.fetch()

xhr.then(function(){
	console.log('Product collection loaded')
})

xhr.catch(function(err){
	console.log('Product collection coundn\'t load', err)
})

// Add order fetch here

const ProductList = require('./views/product-list')
const productList = new ProductList(productCollection)

$('.product-list').append(productList.$el)
productList.render()

// Elements exposed to window
window.datalayer = datalayer
window.productCollection = productCollection
window.Product = Product
window.Order = Order