import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

// Creamos un componente
let Counter = ({ value }) => {
	// console.log('Rendering state', value)

	return (<div>
		<h1>{value}</h1>
	</div>)
}

// Reducer
function increment(state = 0, action) {
	// console.log(state, action)
	if(action.type === 'INCREMENT'){
		return state + (action.i || 1)
	}else if(action.type === 'DECREMENT'){
		return state - (action.i || 1)
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
Counter = connect(mapStateToProps)(Counter)


// Hacemos una accion recurrent
setInterval(()=>{
	if(Math.random() > .5){
		store.dispatch({type:'INCREMENT', i: 2})
	}else{
		store.dispatch({type:'DECREMENT'})
	}
}, 1000)


// Rendereamos
render(
	<Provider store={store}>
		<Counter/>
	</Provider>,
	document.getElementById('root')
)

window.store = store