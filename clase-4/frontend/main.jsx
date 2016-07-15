const React = require('react');
const ReactDOM = require('react-dom');

const datalayer = require('./lib/datalayer')

const Product = require('./datalayer-definitions/product')
const productCollection = new Product.Collection()
datalayer.registry('products', productCollection)

const productXhr = productCollection.fetch()

productXhr.then(function(){
	console.log('Product collection loaded')
})

productXhr.catch(function(err){
	console.log('Product collection coundn\'t load', err)
})

const ProductList = require('./views/product-list.jsx')

ReactDOM.render(<ProductList collection={productCollection}/>, document.getElementById('content'))

window.datalayer = datalayer
