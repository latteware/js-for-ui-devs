const React = require('react')
const ReactDOM = require('react-dom')

const TextInput = React.createClass({
	getInitialState: function() {
		return {
			value: ''
		}
	},
	handleChange: function(event) {
		this.setState({value: event.target.value})
		this.props.changeHandler(this.props.name, event.target.value)
	},
	render: function() {
		return <div className="form-group">
			<label className="col-sm-2 control-label">{this.props.label}</label>
			<div className="col-sm-10">
				<input className="form-control"
					type="text"
					value={this.state.value}
					onChange={this.handleChange}
				/>				
			</div>
		</div>
	}
})

module.exports = TextInput