const React = require('react');
const ReactDOM = require('react-dom');

const datalayer = require('./lib/datalayer')

const Product = require('./datalayer-definitions/product')

/*
First state: empty
description: This is in case that is empty the collection
*/
const emptyCollection = new Product.Collection()
datalayer.registry('products', emptyCollection)

/*
First state: loaded
description: This is after the collection is loaded
*/
const productCollection = new Product.Collection([
	{name:'First item', description:'This is the first item'},
	{name:'Second item', description:'This is the second item'}
])
datalayer.registry('empty', productCollection)

const ProductList = require('./views/product-list.jsx')

ReactDOM.render(<ProductList collection={emptyCollection}/>, document.getElementById('product-list-empty'))
ReactDOM.render(<ProductList title="With data" collection={productCollection}/>, document.getElementById('product-list-with-data'))

window.datalayer = datalayer
