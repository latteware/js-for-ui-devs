import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Router, Route, browserHistory, Link } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import request from 'browser-request'

let fetchSubreddit = function(subreddit){
	var state = store.getState()

	store.dispatch({
		type: 'LOADING_SUBREDDIT',
		subreddit
	})

	request.get({
		uri: 'https://www.reddit.com/r/'+subreddit+'.json',
		json: true
	}, function(err, res, body){
		if(err){return console.log('Couldn\'t load ', err)}

		const posts = body.data.children.map(function(item){
			return item.data
		})			

		store.dispatch({
			type: 'LOADED_SUBREDDIT',
			subreddit,
			posts
		})		
	})
}

// Creamos un componente
let Subreddit = ({ subreddit, loading, posts, dispatch }) => {
	let input

	let loadElement
	if(loading){
		loadElement = <div>loading...</div>
	}

	let postsElement
	if(posts.length){
		postsElement = posts.map( (post)=>{
			return <div key={post.id}>{post.title}</div>
		})
	}

	return <div>
		<form onSubmit={e => {
			e.preventDefault()
			if (!input.value.trim()) {
				return
			}

			routerHistory.push(input.value)
			input.value = ''
		}}>
			<input ref={node => {
				input = node
			}} />
			<button type="submit">Add Todo</button>
		</form>

		{loadElement}

		{postsElement}
	</div>
}

const App = function({ children }) {
	return (<div>
		Links:
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/aww">Aww</Link></li>
			<li><Link to="/awww">Awww</Link></li>
		</ul>
		<div style={{ marginTop: '1.5em' }}>{children}</div>
	</div>)
}

// Reducer
function reducer(state = '', action) {
	if(action.type === 'LOADING_SUBREDDIT'){
		return {loading:true, subreddit: action.subreddit, posts:[]}
	}else if(action.type === 'LOADED_SUBREDDIT'){
		return {loading:false, subreddit: action.subreddit, posts:action.posts}
	}else{
		return {loading:false, subreddit:'', posts:[]}
	}
}

// Creamos un store
let store = createStore(combineReducers({
	reducer,
	routing: routerReducer
}))


// Conectar un componente a store
function mapStateToProps(state) {
	return {
		loading: state.reducer.loading,
		posts: state.reducer.posts,
		subreddit: state.reducer.subreddit

	}
}
Subreddit = connect(mapStateToProps)(Subreddit)

const history = syncHistoryWithStore(browserHistory, store)

history.listen(location => {
	const subreddit = location.pathname.replace('/','')
	if(subreddit){
		fetchSubreddit(subreddit)	
	}
})

// Rendereamos
render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<Route path="/:subreddit" component={Subreddit}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
)

window.store = store
window.fetchSubreddit = fetchSubreddit
window.routerHistory = history