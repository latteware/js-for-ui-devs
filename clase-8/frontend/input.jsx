import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

// Creamos un componente
let Form = ({ value, dispatch }) => {
	let input

	return <div>
		<form onSubmit={e => {
			e.preventDefault()
			if (!input.value.trim()) {
				return
			}

			dispatch({
				type: 'CHANGE_TEXT',
				text: input.value
			})
			input.value = ''
		}}>
			<input ref={node => {
				input = node
			}} />
			<button type="submit">Add Todo</button>
		</form>

		<pre>{value}</pre>
	</div>
}

// Reducer
function reducer(state = '', action) {
	console.log(state, action)

	if(action.type === 'CHANGE_TEXT'){
		return {text: action.text}
	}else{
		return state
	}
}

// Creamos un store
let store = createStore(reducer)


// Conectar un componente a store
function mapStateToProps(state) {
	return {
		value: state.text
	}
}
Form = connect(mapStateToProps)(Form)


// Rendereamos
render(
	<Provider store={store}>
		<Form/>
	</Provider>,
	document.getElementById('root')
)

window.store = store