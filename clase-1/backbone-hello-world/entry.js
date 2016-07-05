const $ = require('jquery')
window.$ = $

const _ = require('underscore')
window._ = _

const Backbone = require('Backbone')

const ToDoListModel = Backbone.Model.extend({})

const ToDoListCollection = Backbone.Collection.extend({
	model: ToDoListModel
})

const toDoListCollection = new ToDoListCollection()
window.toDoListCollection = toDoListCollection

const ToDoListView = Backbone.View.extend({
	collection: toDoListCollection,
	initialize: function(){
		this.listenTo(this.collection, 'add', this.render)
		this.listenTo(this.collection, 'remove', this.render)
		this.listenTo(this.collection, 'change', this.render)
	},
	render: function(){
		var self = this

		this.$el.html('')
		this.collection.each(function(model){
			self.$el.append('<div>'+model.get('title')+'</div>')
		})
	}
})

const toDoListView = new ToDoListView()

$('body').append(toDoListView.$el)
toDoListView.render()

window.toDoListView = toDoListView

toDoListCollection.add({title:'To Do 1'})
toDoListCollection.add({title:'To Do 2'})