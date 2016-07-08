const $ = require('jquery')
window.$ = $

const datalayer = require('./lib/datalayer')

const Product = require('./datalayer-definitions/product')
const productCollection = new Product.Collection()
datalayer.registry('products', productCollection)

const Order = require('./datalayer-definitions/order')
const orderCollection = new Order.Collection()
datalayer.registry('orders', orderCollection)

const productXhr = productCollection.fetch()

productXhr.then(function(){
	console.log('Product collection loaded')
})

productXhr.catch(function(err){
	console.log('Product collection coundn\'t load', err)
})

// Add order fetch here
const orderXhr = orderCollection.fetch()

orderXhr.then(function(){
	console.log('Orders collection loaded')
})

orderXhr.catch(function(err){
	console.log('Orders collection coundn\'t load', err)
})

const ProductList = require('./views/product-list')
const productList = new ProductList(productCollection)

$('.product-list').append(productList.$el)
productList.render()

// Elements exposed to window
window.datalayer = datalayer
window.productCollection = productCollection
window.Product = Product
window.Order = Order