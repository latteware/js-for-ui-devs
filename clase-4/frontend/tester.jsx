const React = require('react');
const ReactDOM = require('react-dom');

const datalayer = require('./lib/datalayer')

const Product = require('./datalayer-definitions/product')

const emptyCollection = new Product.Collection()
datalayer.registry('products', emptyCollection)

const productCollection = new Product.Collection([
	{name:'First item', descripction:'This is the first item'},
	{name:'Second item', descripction:'This is the second item'}
])
datalayer.registry('empty', productCollection)

const ProductList = require('./views/product-list.jsx')

ReactDOM.render(<ProductList collection={emptyCollection}/>, document.getElementById('product-list-empty'))
ReactDOM.render(<ProductList collection={productCollection}/>, document.getElementById('product-list-with-data'))

window.datalayer = datalayer
