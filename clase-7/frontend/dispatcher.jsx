import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

// Creamos un componente
let Counter = ({value, increment}) => {
	console.log('Rendering state', arguments)

	return (<div>
		<h1 onClick={e =>
			increment()
		}>{value}</h1>
	</div>)
}

// Reducer
function increment(state = 0, action) {
	console.log(state, action)

	if(action.type === 'INCREMENT'){
		return state + (action.i || 1)
	}else{
		return state
	}
}

// Creamos un store
let store = createStore(increment)


// Conectar un componente a store
function mapStateToProps(state) {
	return { value: state }
}
// Conectar un componente a funciones propias
function mapDispatchToProps(dispatch) {
	return {
		increment: (i = 2) => {
			dispatch({
				type: 'INCREMENT',
				i: i
			})
		}
	}
}
Counter = connect(mapStateToProps, mapDispatchToProps)(Counter)


// Rendereamos
render(
	<Provider store={store}>
		<Counter/>
	</Provider>,
	document.getElementById('root')
)