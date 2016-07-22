const Backbone = require('backbone')

const Model = Backbone.Model.extend({
	urlRoot : '/orders',
	idAttribute: 'uuid'
})

const Collection = Backbone.Collection.extend({
	model: Model,
	url: '/orders'
})

module.exports = {
	Model,
	Collection
}