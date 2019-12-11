import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

const PokemonDetails = props => {
	const [pokemonDetails, setPokemonDetails] = useState()
	let { pokemon } = useParams();

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
			.then(res => res.json())
			.then(res => setPokemonDetails(res))
	}, [pokemon])

	console.log('PokemonDetails', {pokemonDetails})

	const allTypes = pokemonDetails && pokemonDetails.types.reduce((acc, type) => {
		const { name } = type.type
		return acc === '' ? `${name}` : `${acc}, ${name}`
	}, '')

	return (
		<div>
			<h2>{pokemon}</h2>
			<p>Height: {pokemonDetails && pokemonDetails.height}</p>
			<p>Types: {allTypes}</p>
			<div className="imageHolder">
				<img src={pokemonDetails && pokemonDetails.sprites.front_default} alt=""/>
			</div>

		</div>
	)
}

export default PokemonDetails