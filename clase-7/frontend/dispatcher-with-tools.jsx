import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

// Creamos un componente
let Counter = ({value, dispatch}) => {
	console.log('Rendering state', arguments)

	return (<div>
		<h1 onClick={e =>
			dispatch({
				type: 'INCREMENT'
			})
		}>{value}</h1>
	</div>)
}

// Reducer
function increment(state, action) {
	console.log(state, action)

	if(action.type === 'INCREMENT'){
		return {value: state.value + (action.i || 1)}
	}else{
		return {value: 0}
	}
}

// Creamos un store
const DevTools = createDevTools(
	<DockMonitor toggleVisibilityKey='ctrl-h'changePositionKey='ctrl-q'>
		<LogMonitor />
	</DockMonitor>
);
let store = createStore(increment, DevTools.instrument())

// Conectar un componente a store
function mapStateToProps(state) {
	return { value: state.value }
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
Counter = connect(mapStateToProps)(Counter)


// Rendereamos
render(
	<Provider store={store}>
		<div>
			<Counter/>
			<DevTools />
		</div>
	</Provider>,
	document.getElementById('root')
)