import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import Button from './Button'
import styles from '../CSS-Modules/PokemonDetails.module.css'

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
		<div className={styles.detailsHolder}>
			<Button url={'/'}/>
			<h2>{pokemon}</h2>
			<div className={styles.imageHolder}>
				<img src={pokemonDetails && pokemonDetails.sprites.front_default} alt=""/>
			</div>
			<div className={styles.contentHolder}>
				<p><span>Order:</span> {pokemonDetails && pokemonDetails.order}</p>
				<p><span>Height:</span> {pokemonDetails && pokemonDetails.height}</p>
				<p><span>Weight:</span> {pokemonDetails && pokemonDetails.weight}</p>
				<p><span>Types:</span> {allTypes}</p>
				<p><span>Base Stats:</span></p>
				<ul>
					{pokemonDetails && pokemonDetails.stats.map(({stat, base_stat}) => (
						<li key={stat.name}>{stat.name}: {base_stat}</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default PokemonDetails