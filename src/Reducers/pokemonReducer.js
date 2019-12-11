const STORE_ALL_POKEMON = 'STORE_ALL_POKEMON'
// const GET_ALL_POKEMON = 'STORE_ALL_POKEMON'
// const GET_SINGLE_POKEMON = 'STORE_ALL_POKEMON'

const initialState = {
  allPokemon: []
}

export const storeAllPokemon = value => ({ type: STORE_ALL_POKEMON, payload: value })

export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_ALL_POKEMON:
      return { ...state, allPokemon: action.payload }
    
    default:
      return state
  }
}