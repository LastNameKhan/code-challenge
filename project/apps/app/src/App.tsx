import React from 'react';
import { List } from 'ui'

const api = "https://pokeapi.co/api/v2/pokemon?limit=151"

const App = () => {
  const [pokemonList, setPokemonList] = React.useState([]);

  React.useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemon();
  }, []);
  return (
  <>
    <h1>Pokemon list:</h1>
    <List pokemonList={pokemonList} />
  </>
  )
}

export default App
