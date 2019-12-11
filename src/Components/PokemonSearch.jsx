import React, { useState, useEffect } from 'react'
import SearchForm from './SearchForm'
import ResultsList from './ResultsList'

const PokeonSearch = () => {
	const [allPokemon, setAllPokemon] = useState([])
	const [searchResults, setSearchResults] = useState([])

	useEffect(() => {
		fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1000')
			.then(res => res.json())
			.then(res => res.results.filter(pokemon => !pokemon.name.includes('alola')))
			.then(res => setAllPokemon(res))
	}, [])

	const updateCurrentQuery = newQuery => {
		searchPokemon(newQuery)
	}
	
	const searchPokemon = query => {
		const results = allPokemon.filter(pokemon => pokemon.name.includes(query))
		setSearchResults(results)
	}

	return (
		<>
			<SearchForm 
				updateCurrentQuery={updateCurrentQuery} 
			/>
			<ResultsList results={searchResults} />
		</>
	)
}

export default PokeonSearch