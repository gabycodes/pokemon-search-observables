import { createStore } from 'redux'
import pokemonReducer from './Reducers/pokemonReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = pokemonReducer

export default createStore(
  reducer,
  composeWithDevTools(),
)