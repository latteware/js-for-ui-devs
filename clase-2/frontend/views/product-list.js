const Backbone = require('backbone')
const datalayer = require('../lib/datalayer')

const ProductList = Backbone.View.extend({
	events: {
		'submit form': 'createProduct',
		'click .buy-item': 'createOrder'
	},
	initialize: function(productCollection){
		this.productCollection = productCollection

		this.listenTo(this.productCollection, 'add', this.render)
		this.listenTo(this.productCollection, 'remove', this.render)
		this.listenTo(this.productCollection, 'change', this.render)
	},
	createProduct: function(e){
		e.preventDefault()

		const name = this.$el.find('.product-name')
		const description = this.$el.find('.description')

		const model = this.productCollection.add({
			name:name.val(),
			description:description.val(),
		})

		model.save()

		name.val('')
		description.val('')
	},
	createOrder: function(e){
		const $row = $(e.currentTarget).closest('.row')
		const model = this.productCollection.findWhere({uuid: $row.data('uuid')})

		const quantity = $row.find('input').val()
		const order = {
			products: [
				{
					quantity: quantity,
					product: model.id,
					name: model.get('name'),
					description: model.get('description')
				}
			]
		}

		const orders = datalayer.get('orders')

		const newOrderModel = orders.add(order)
		newOrderModel.save()

		// order = {products:[{quantity:Number, product:UUID}]}
	},
	render: function(){
		var self = this

		this.$el.html(`
			<form class="form-horizontal">
				<div class="form-group">
					<label for="product-name" class="col-sm-2 control-label">Product Name</label>
					<div class="col-sm-10">
						<input type="text" class="form-control product-name" id="product-name" placeholder="Product name">
					</div>
				</div>
				<div class="form-group">
					<label for="description" class="col-sm-2 control-label">Description</label>
					<div class="col-sm-10">
						<textarea class="form-control description" id="description" placeholder="Description for product"></textarea>
					</div>
				</div>
				<div class="form-group">
					<div class="col-sm-offset-2 col-sm-10">
						<button type="submit" class="btn btn-primary btn-block">Crear</button>
					</div>
				</div>
			</form>
		`)

		this.productCollection.toArray().reverse().forEach(function(model){
			var data = model.toJSON()

			console.log(data)

			self.$el.append(`
				<div class="row" data-uuid="${data.uuid}">
					<div class="col-xs-6">
						<h2>${data.name}</h2>
						<p>${data.description}</p>
					</div>
					<div class="col-xs-3">
						<input type="number" min="1" value="1"></input>
					</div>
					<div class="col-xs-3">
						<button type="submit" class="btn btn-primary btn-block buy-item">Comprar</button>
					</div>
				</div>
			`)
		})
	}
})

module.exports = ProductList