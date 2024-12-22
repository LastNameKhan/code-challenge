import React from 'react';
import { List } from 'ui'
import { useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";
import store, { AppDispatch, RootState } from "../src/store";
import { setPokemonList } from "../src/store/pokemonSlice";

const api = "https://pokeapi.co/api/v2/pokemon?limit=151"

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [pokemonList, setPokemonList] = React.useState([]);

  React.useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error("Error fetching Pokemon data", error);
      }
    };

    fetchPokemon();
  }, []);
  return (
  <>
  <Provider store={store}>
    <h1>Pokemon list:</h1>
    <List pokemonList={pokemonList} />
  </Provider>

  </>
  )
}


export default App
