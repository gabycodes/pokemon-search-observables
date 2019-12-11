// import { createStore, applyMiddleware, combineReducers } from 'redux'
// import thunk from 'redux-thunk'
// import todoReducer from './Reducers/todo'
// import messageReducer from './Reducers/messages'
// import { composeWithDevTools } from 'redux-devtools-extension'

import { createStore } from 'redux'
import pokemonReducer from './Reducers/pokemonReducers'
import { composeWithDevTools } from 'redux-devtools-extension'


// const reducer = combineReducers({ 
// 	todo: todoReducer, message: messageReducer 
// })

const reducer = pokemonReducer

export default createStore(
  reducer,
  composeWithDevTools,
)
// export default createStore(
// 	reducer,
// 	composeWithDevTools(
// 			applyMiddleware(thunk) // this enables us to start using asynchronous actions in our reducers
// 	)
// )