import React, {useEffect, useState} from 'react';
import {getAllPokemon, getPokemon} from './services/pokemon';
import Card from './components/Card';
import {View, ScrollView, StyleSheet} from 'react-native';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const loadingPokemon = async data => {
    let _pokemonData = await Promise.all(
      data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      }),
    );
    setPokemonData(_pokemonData);
  };

  return (
    <>
      <ScrollView>
        {pokemonData.map((pokemon, i) => {
          return <Card key={i} pokemon={pokemon} />;
        })}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    border: '2px solid black',
  },
  texte: {
    textAlign: 'center',
  },
});
export default App;
