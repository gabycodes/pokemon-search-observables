import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

const PokemonDetails = props => {
	const [pokemonDetails, setPokemonDetails] = useState()
	const [isLoading, setIsLoading] = useState(true)
	let { pokemon } = useParams();

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
			.then(res => res.json())
			.then(res => setPokemonDetails(res))
			.then(res => setIsLoading(false))
	}, [pokemon])

	const allTypes = pokemonDetails && pokemonDetails.types.reduce((acc, type) => {
		const { name } = type.type
		return acc === '' ? `${name}` : `${acc}, ${name}`
	}, '')

	if (isLoading) {
		return <p>Loading...</p>
	}

	return (
		<div>
			<h2>{pokemon}</h2>
			<p>Order: {pokemonDetails && pokemonDetails.order}</p>
			<p>Height: {pokemonDetails && pokemonDetails.height}</p>
			<p>Weight: {pokemonDetails && pokemonDetails.weight}</p>
			<p>Types: {allTypes}</p>
			<p>Base Stats</p>
			<ul>
				{pokemonDetails && pokemonDetails.stats.map(({stat, base_stat}) => (
					<li key={stat.name}>{stat.name}: {base_stat}</li>
				))}
			</ul>
			<div className="imageHolder">
				<img src={pokemonDetails && pokemonDetails.sprites.front_default} alt=""/>
			</div>
		</div>
	)
}

export default PokemonDetails