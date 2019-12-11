import React from 'react';
import PokemonSearch from './Components/PokemonSearch'
import PokemonDetails from './Components/PokemonDetails'
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/pokemon'>
            <PokemonSearch />
          </Route>
          <Route path='/pokemon/:pokemon'>
            <PokemonDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
