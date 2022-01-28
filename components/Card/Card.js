import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';

function Card({pokemon}) {
  return (
    <View style={styles.container}>
      <Text style={styles.nom}>{pokemon.name}</Text>
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
        }}
        style={{height: 150, width: 150}}
      />

      <Text style={styles.texte}>Weight : {pokemon.weight}KG</Text>
      <Text style={styles.texte}>Height : {pokemon.height}DM</Text>
      <Text style={styles.texte}>
        {' '}
        Types : {pokemon.types[0].type.name}
        <Text> {pokemon?.types[1]?.type?.name}</Text>
      </Text>
      <Text style={styles.texte}>
        Ability : {pokemon.abilities[0].ability.name}
        {''}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#20232a',
    backgroundColor: '#2F4F4F',
  },
  texte: {
    fontSize: 18,
    color: '#F0F8FF',
  },
  nom: {
    textTransform: 'capitalize',
    fontSize: 28,
    color: '#F0F8FF',
  },
});
export default Card;
