import { View, Text, StyleSheet,FlatList   } from 'react-native';
import CustomHeader from '../header';
import React, { useEffect, useState } from 'react';
import renderList from '../renderList';

const AllCharactersScreen = ({ route, navigation }) => {
    const { title, data, loading } = route.params;
    const [filteredCharacters, setFilteredCharacters] = useState(data);
    const [filters, setFilters] = useState([]);


    useEffect(() => {
      if (!loading && data) {
          applyFilters(filters);
      }
  }, [filters, data]);

  const applyFilters = (selectedFilters) => {
    if (selectedFilters.length === 0) {
        setFilteredCharacters(data);
    } else {
        const speciesFilters = selectedFilters.filter(filter => ['Human', 'Alien'].includes(filter)); // Update with actual species options
        const genderFilters = selectedFilters.filter(filter => ['Male', 'Female'].includes(filter)); // Update with actual gender options

        const newFilteredCharacters = data.filter(character => {
            const speciesMatch = speciesFilters.length === 0 || speciesFilters.includes(character.species);
            const genderMatch = genderFilters.length === 0 || genderFilters.includes(character.gender);

            return speciesMatch && genderMatch; // Only include characters that match all selected filters
        });
        setFilteredCharacters(newFilteredCharacters);
    }
};



    return (
        <View style={styles.container}>
      <CustomHeader 
        title={title} 
        onSelect={setFilters}
      />
      <View style={styles.content}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList 
            data={filteredCharacters}
            renderItem={({ item }) => renderList({ item, navigation })}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>
    </View>
    );
  };

  export default AllCharactersScreen;


  const styles = StyleSheet.create({
    container: {
        flex: 1, // Ensures the container takes up the available space
        overflow: 'auto', // Enables scrolling
        paddingBottom: 100,
        backgroundColor: 'black',
        height: '100%',
      },
    characterContainer: {
      flexDirection: 'row',
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
      marginVertical: 8,
      marginHorizontal: 16,
      padding: 16,
      alignItems: 'center',
    },
    characterImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginRight: 16,
    },
    characterDetails: {
      flex: 1,
    },
    characterName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 4,
    },
    characterSpecies: {
      fontSize: 14,
      color: '#666',
      marginBottom: 4,
    },
    characterGender: {
      fontSize: 12,
      color: '#888',
      marginBottom: 2,
    },
    characterLocation: {
      fontSize: 12,
      color: '#888',
      marginBottom: 2,
    },
    characterOrigin: {
      fontSize: 12,
      color: '#888',
    },
  });