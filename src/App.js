import './App.css';
import React, {useState, useEffect} from 'react';
import PokemonCollection from './components/PokemonCollection'

function App() {
  const [pokemons, setPokemons] = useState ([])

  useEffect(() => {
    fetch('http://localhost:3000/pokemon')
    .then(res => (res.json()))
    .then(data => setPokemons((data)))
  }, [])


  return (
    <PokemonCollection pokemons={pokemons}/>
  );
}

export default App;
