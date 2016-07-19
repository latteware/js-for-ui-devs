const React = require('react')
const ReactDOM = require('react-dom')

const Panel = require('./ui-library/panel.jsx');
const TextInput = require('./ui-library/text-input.jsx');
const SliderInput = require('./ui-library/slider-input.jsx');
const Button = require('./ui-library/send-button.jsx');

const Form = React.createClass({
	getInitialState: function(){
		return {}
	},
	nameHandler: function(name, value){
		console.log('Name Changed', name, value)

		this.setState({username:value})
	},
	genericChangeHandler: function(name, value){
		var item = {}

		item[name] = value
		this.setState(item)
	},
	handleSubmit: function(e){
		e.preventDefault()

		console.log('Submit')
	},
	render: function() {
		var data = JSON.stringify(this.state)

		var validButton
		if(this.state.username && this.state.address && this.state.phone){
			validButton = <Button />
		}else{
			validButton = <Button disabled="true"/>
		}

		return <div>
			
			<pre>{ data }</pre>

			<Panel title="Add user">
				<form className="form-horizontal" onSubmit={this.handleSubmit}>
					<TextInput label="Username" changeHandler={this.nameHandler} name="username"/>
					<TextInput label="Address" changeHandler={this.genericChangeHandler} name="address"/>
					<TextInput label="Phone" changeHandler={this.genericChangeHandler} name="phone"/>
					<SliderInput label="Age" changeHandler={this.genericChangeHandler} name="age"/>
					
					{ validButton }
				</form>
			</Panel>
		</div>
	}
})
 
ReactDOM.render(<Form />, document.getElementById('content'))