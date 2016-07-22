const React = require('react');
const ReactDOM = require('react-dom');

const datalayer = require('../lib/datalayer')

class ListItem extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {}

		this.state.model = props.model
	}

	render() {
		return <div>
			<h4>{this.state.model.title}</h4>
			<p>{this.state.model.description}</p>
			Link
		</div>
	}
}

class List extends React.Component {
	constructor(props) {
		super(props)

		this.state = {}
		this.state.items = props.collection

		console.log('HelloWorld')
	}

	render() {
		const items = this.state.items.map(function(item, i){
			return <ListItem key={i} model={item} />
		})

		return <div>
			<h2>List</h2>
			{items}
		</div>
	}
}

List.ListItem = ListItem

module.exports = List