const STORE_ALL_POKEMON = 'STORE_ALL_POKEMON'
const UPDATE_CURRENT_QUERY = 'UPDATE_CURRENT_QUERY'

const initialState = {
  allPokemon: [],
  currentQuery: ''
}

export const storeAllPokemon = value => ({ type: STORE_ALL_POKEMON, payload: value })
export const updateCurrentQuery = value => ({ type: UPDATE_CURRENT_QUERY, payload: value })

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_ALL_POKEMON:
      return { ...state, allPokemon: action.payload }

    case UPDATE_CURRENT_QUERY:
      return { ...state, currentQuery: action.payload }
    
    default:
      return state
  }
}