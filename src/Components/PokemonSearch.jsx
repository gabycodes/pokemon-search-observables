import React, {Component} from 'react'
import SearchForm from './SearchForm'

class PokeonSearch extends Component {
	// create form with throttle
	// every nth second, results populate with applicable pokemon
	// select pokemon to open more details


	state = {
		currentQuery: '',
		searchResults: []
	}

	updateCurrentQuery = newQuery => {
		this.setState({ currentQuery: newQuery})
		this.searchPokemon(newQuery)
	}
	
	searchPokemon = query => {
		const fetchResults = fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1000')
			.then(res => res.json())
			.then(res => res.results.filter(pokemon => pokemon.name.includes(query)))
			.then(res => this.setState({ searchResults: res }))
		
	}

	render() {
		console.log(this.state.searchResults)

		return(
			<SearchForm 
				updateCurrentQuery={this.updateCurrentQuery} 
			/>
		)
	}

}

export default PokeonSearch