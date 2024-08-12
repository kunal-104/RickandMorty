import { View, Text, TouchableOpacity, StyleSheet, ImageBackground  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AllCharactersScreen from './components/screens/AllCharactersScreen';
import CharacterDetailScreen from './components/screens/CharacterDetailScreen';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Provider as PaperProvider } from 'react-native-paper';
const Stack = createNativeStackNavigator();



const HomeScreen = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch characters from the Rick and Morty API
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        setCharacters(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  const aliveCharacters = characters.filter(character => character.status === 'Alive');
  const deadCharacters = characters.filter(character => character.status === 'Dead');

  const renderCard = (title, imageUrl, navigateTo, data) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate(navigateTo, { title, data, loading })}
    >
      <ImageBackground
        source={{ uri: imageUrl }}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.overlay}>
          <Text style={styles.cardText}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
       <Text style={styles.title}>The Multiverse of {'\n'} Rick and Morty</Text>
    {renderCard('All Characters', 'https://rickandmortyapi.com/api/character/avatar/17.jpeg', 'AllCharacters', characters)}
    {renderCard('Alive Characters', 'https://rickandmortyapi.com/api/character/avatar/11.jpeg', 'AllCharacters', aliveCharacters)}
    {renderCard('Dead Characters', 'https://rickandmortyapi.com/api/character/avatar/9.jpeg', 'AllCharacters', deadCharacters)}
  </View>
  );
};



export default function App() {
  return (
    <SafeAreaProvider>
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator  
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AllCharacters" component={AllCharactersScreen} />
        <Stack.Screen name="CharacterDetails" component={CharacterDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#333333', // Light background color for better contrast
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'cursive',
    color: 'white',
    marginBottom: 11,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    height: 200,
    marginVertical: 10,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5, // Adds shadow effect for Android
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 5 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 10, // Shadow radius
  },
  image: {
    flex: 1,
    resizeMode: 'cover', // Ensures the image covers the entire area
    justifyContent: 'flex-end', // Align text at the bottom
  },
  imageStyle: {
    borderRadius: 15,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Dark semi-transparent overlay
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  cardText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'serif',
  },
});
