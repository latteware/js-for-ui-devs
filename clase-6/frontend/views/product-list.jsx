const React = require('react')
const ReactDOM = require('react-dom')
const ReactRouter = require('react-router')

const Link = ReactRouter.Link

const datalayer = require('../lib/datalayer')

class ProductForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	nameChange (event){
		this.setState({name: event.target.value});
	}

	descriptionChange (event){
		this.setState({description: event.target.value});
	}

	handleSubmit (e) {
		e.preventDefault();
		var name = this.state.name.trim();
		var description = this.state.description.trim();
		if (!name || !name) {
			return;
		}
		
		const model = this.props.collection.add({
			name: name,
			description: description
		})
		model.save()

		this.setState({name: '', description: ''});
	}

	componentDidMount (){

	}

	render () {
		return <div>
			<div>
				<form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
					<div className="form-group">
						<label className="col-sm-2 control-label">Product Name</label>
						<div className="col-sm-10">
							<input type="text" className="form-control product-name" id="product-name" placeholder="Product name" value={this.state.name} onChange={this.nameChange.bind(this)}/>
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">Description</label>
						<div className="col-sm-10">
							<textarea className="form-control description" id="description" placeholder="Description for product" value={this.state.description} onChange={this.descriptionChange.bind(this)}></textarea>
						</div>
					</div>
					<div className="form-group">
						<div className="col-sm-offset-2 col-sm-10">
							<button type="submit" className="btn btn-primary btn-block">Crear</button>
						</div>
					</div>
				</form>				
			</div>
		</div>
	}
}

class ListItem extends React.Component {
	constructor(props) {
		super(props)
		const self = this
		
		this.state = {}

		this.model = props.model

		this.binder = function() {
			self.setState(self.model.toJSON())
		}
	}

	componentDidMount(){
		this.model.on('change', this.binder)
		this.binder()
	}

	componentWillUnmount(){
		this.model.off('change', this.binder)
	}

	clickHandler(){
		console.log('Hi')
	}

	render() {
		const link = '/product/'+this.state.uuid

		return <div>
			<h4>{this.state.name}</h4>
			<Link to={ link } className="btn btn-primary">View</Link>
		</div>
	}
}


class DescriptionView extends React.Component {
	constructor(props) {
		super(props)
		const self = this
		
		this.state = {}

		this.model = props.model

		this.binder = function() {
			self.setState(self.model.toJSON())
		}
	}

	componentDidMount(){
		this.model.on('change', this.binder)
		this.binder()
	}

	componentWillUnmount(){
		this.model.off('change', this.binder)
	}

	clickHandler(){
		console.log('Hi')
	}

	render() {
		const link = '/'

		return <div>
			<h4>{this.state.name}</h4>
			<p>{this.state.description}</p>
			<Link to={ link } className="btn btn-primary">Return to home</Link>
		</div>
	}
}

class ProductList extends React.Component {
	constructor(props) {
		super(props)
		const self = this

		this.collection = props.collection
		this.state = {}
		this.state.items = []

		this.binder = function() {
			self.setState({items: self.collection.toArray() })
		}
	}

	componentDidMount(){
		this.binder()
		this.collection.on('add', this.binder)
		this.collection.on('remove', this.binder)
	}

	componentWillUnmount(){
		this.collection.off('add', this.binder)
		this.collection.off('remove', this.binder)
	}

	render() {
		var items 
		if(!this.state.items.length){
			items = <div>Empty</div>
		}else{
			items = this.state.items.map(function(item, i){
				return <ListItem key={i} model={item} />
			})
		}

		return <div className="product-list">
			<h2>{this.props.title}</h2>
			<ProductForm collection={this.collection}/>
			{items}
		</div>
	}
}

ProductList.ListItem = ListItem
ProductList.DescriptionView = DescriptionView

module.exports = ProductList