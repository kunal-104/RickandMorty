import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList, ImageBackground } from 'react-native';

const CharacterDetailScreen = ({ route }) => {
  const { character } = route.params;
  const { name, species, status, gender, episode, image, location, origin, type } = character;

  const renderEpisodeItem = ({ item }) => (
    <ImageBackground
      source={{ uri: `https://rickandmortyapi.com/api/character/avatar/${item.split('/').pop()}.jpeg` }} // Replace with a specific image URL if needed
      style={styles.episodeItem}
      imageStyle={styles.episodeImage}
    >
      <Text style={styles.episodeText}>{`Episode ${item.split('/').pop()}`}</Text>
    </ImageBackground>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: image }} style={styles.characterImage} />
      <Text style={styles.characterName}>{name}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.characterDetail}>Species: <Text style={styles.detailValue}>{species}</Text></Text>
        <Text style={styles.characterDetail}>Status: <Text style={styles.detailValue}>{status}</Text></Text>
        <Text style={styles.characterDetail}>Gender: <Text style={styles.detailValue}>{gender}</Text></Text>
        <Text style={styles.characterDetail}>Number of Episodes: <Text style={styles.detailValue}>{episode.length}</Text></Text>
        <Text style={styles.characterDetail}>Location: <Text style={styles.detailValue}>{location?.name || 'Unknown'}</Text></Text>
        <Text style={styles.characterDetail}>Origin: <Text style={styles.detailValue}>{origin?.name || 'Unknown'}</Text></Text>
        <Text style={styles.characterDetail}>Type: <Text style={styles.detailValue}>{type || 'N/A'}</Text></Text>
      </View>
      <Text style={styles.episodeTitle}>Episodes Appeared In:</Text>
      <FlatList
        data={episode}
        renderItem={renderEpisodeItem}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.episodeList}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#1c1c1c', // Dark background for the screen
    alignItems: 'center',
  },
  characterImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#333', // Light border around the image
  },
  characterName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f9f9f9', // Light text color for contrast
    marginBottom: 10,
    fontFamily: 'times'
  },
  detailsContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#2c2c2c', // Slightly lighter dark background for details
    borderRadius: 10,
    marginBottom: 20,
  },
  characterDetail: {
    fontSize: 18,
    color: '#f9f9f9', // Light text color for contrast
    marginBottom: 8,
  },
  detailValue: {
    fontWeight: 'bold',
  },
  episodeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f9f9f9',
    marginBottom: 10,
  },
  episodeList: {
    paddingVertical: 10,
  },
  episodeItem: {
    width: 150,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  episodeImage: {
    resizeMode: 'cover',
  },
  episodeText: {
    color: '#f9f9f9',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
  },
});

export default CharacterDetailScreen;
