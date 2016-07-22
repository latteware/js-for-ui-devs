const React = require('react')
const ReactDOM = require('react-dom')

const Slider = React.createClass({
	getInitialState: function() {
		return {
			value: 0
		}
	},
	componentDidMount: function() {
		// debugger;
		const self = this

		$(this.refs.slider).slider({
			change: function(){
				const value = $(this).slider('value')
				self.setState({value: value })
				self.props.changeHandler(self.props.name, value)
			}
		})
	},
	componentWillUnmount: function() {
		$(this.refs.slider).slider('destroy')
	},
	componentWillUpdate: function(nextProps, nextState) {
		if( $(this.refs.slider).slider('value') !== nextState.value ){
			$(this.refs.slider).slider('value', nextState.value)
		}

	},
	handleChange: function(event) {
		this.setState({value: event.target.value})
		this.props.changeHandler(this.props.name, event.target.value)
	},
	render: function() {
		return <div className="form-group">
			<label className="col-sm-2 control-label">{this.props.label}</label>
			<div className="col-sm-9">
				<div ref="slider"></div>
			</div>
			<div className="col-sm-1">
				<input className="form-control"
					type="number"
					value={this.state.value}
					onChange={this.handleChange}
				/>				
			</div>
		</div>
	}
})

Slider.handler = function(){}

module.exports = Slider