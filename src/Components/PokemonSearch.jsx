import React, { useState } from 'react'
import SearchForm from './SearchForm'
import ResultsList from './ResultsList'

const PokeonSearch = () => {
	const [currentQuery, setCurrentQuery] = useState('')
	const [searchResults, setSearchResults] = useState([])

	const updateCurrentQuery = newQuery => {
		setCurrentQuery(newQuery)
		searchPokemon(newQuery)
	}
	
	const searchPokemon = query => {
		fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1000')
			.then(res => res.json())
			.then(res => res.results.filter(pokemon => pokemon.name.includes(query)))
			.then(res => res.filter(pokemon => !pokemon.name.includes('alola')))
			.then(res => setSearchResults(res))
	}

		return(
			<>
				<SearchForm 
					updateCurrentQuery={updateCurrentQuery} 
				/>
				<ResultsList results={searchResults} />
			</>
		)
}

export default PokeonSearch