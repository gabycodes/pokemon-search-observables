import React from 'react'
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import PokemonDetails from './PokemonDetails'

const ResultsList = props => {
	let match = useRouteMatch();
	
	return (
		<>
			<ul>
				{props.results.map(({name}) => (
					<li key={name}>
						<Link to={`${match.url}/${name}`}>{name}</Link>
					</li>
				) )}
			</ul>
			<Switch>
				<Route path={`${match.path}/:pokemon`}>
          <PokemonDetails />
        </Route>
			</Switch>
		</>
	)
}

export default ResultsList