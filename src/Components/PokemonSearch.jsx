import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SearchForm from './SearchForm'
import ResultsList from './ResultsList'
import { storeAllPokemon, updateCurrentQuery } from '../Reducers/pokemonReducer'
import styles from '../CSS-Modules/PokemonSearch.module.css'

const PokemonSearch = props => {
	const [storedPokemon, setStoredPokemon] = useState([])
	const [searchResults, setSearchResults] = useState([])
	const [isDirty, setIsDirty] = useState(false)

	useEffect(() => {
		fetch('https://pokeapi.co/api/v2/pokemon/?limit=1000')
			.then(res => res.json())
			.then(res => res.results.filter(pokemon => !pokemon.name.includes('alola') && !pokemon.name.includes('-mega')))
			.then(res => {
				props.storeAllPokemon(res)
				setStoredPokemon(res)
			})
	}, [])

	const updateCurrentQuery = newQuery => {
		props.updateCurrentQuery(newQuery)
		setIsDirty(true)
		searchPokemon(newQuery)
	}
	
	const searchPokemon = query => {
		const results = storedPokemon.filter(pokemon => pokemon.name.includes(query))
		setSearchResults(results)
	}

	return (
		<div className={styles.everythingHolder}>
			<SearchForm 
				updateCurrentQuery={updateCurrentQuery}
				isFormDirty={isDirty}
			/>
			<ResultsList results={searchResults} />
		</div>
	)
}

// very contrived use of redux. It's just really here for a bit of practice 👯‍
export default connect(
	state => ({ allPokemon: state}),
	{storeAllPokemon, updateCurrentQuery}
)(PokemonSearch)