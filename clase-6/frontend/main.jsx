const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router')

const Router = ReactRouter.Router
const Route = ReactRouter.Route

const datalayer = require('./lib/datalayer')

const Product = require('./datalayer-definitions/product')
const productCollection = new Product.Collection()
datalayer.registry('products', productCollection)

const ProductList = require('./views/product-list.jsx')
const ProductDescriptionView = ProductList.DescriptionView

const ProductsPage = React.createClass({
	render(){
		return <div className="row">
			<div className="col-xs-12 col-sm-8">
				<ProductList collection={productCollection}/>
			</div>
		</div>
	}
})

const ProductDescriptionPage = React.createClass({
	render(){
		const uuid = this.props.routeParams.uuid
		const model = productCollection.findWhere({uuid:uuid})

		var content
		if(!model){
			content = <NotFound/> 
		}else{
			content = <ProductDescriptionView model={model}/>
		}

		return <div className="row">
			<div className="col-xs-12 col-sm-8">
				{ content }
			</div>
		</div>
	}
})

const NotFound = React.createClass({
	render() {
		return <h3>404</h3>
	}
})

const router = (<Router history={ReactRouter.browserHistory}>
	<Route path="/" component={ProductsPage}></Route>
	<Route path="/product/:uuid" component={ProductDescriptionPage}></Route>
	<Route path="*" component={NotFound}></Route>
</Router>)

const productXhr = productCollection.fetch()

productXhr.then(function(){
	console.log('Product collection loaded')

	ReactDOM.render(router, document.getElementById('app'))
})

productXhr.catch(function(err){
	console.log('Product collection coundn\'t load', err)
})

window.datalayer = datalayer
