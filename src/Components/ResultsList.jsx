import React from 'react'
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import PokemonDetails from './PokemonDetails'
import styles from '../CSS-Modules/ResultsList.module.css'

const ResultsList = props => {
	let match = useRouteMatch();
	return (
		<>
			<ul className={styles.resultsList}>
				{props.results.map(({name}) => (
					<li key={name}>
						<Link to={`${match.url}pokemon/${name}`}>{name}</Link>
					</li>
				) )}
			</ul>
			<Switch>
				<Route path={`${match.path}pokemon/:pokemon`}>
          <PokemonDetails />
        </Route>
			</Switch>
		</>
	)
}

export default ResultsList