import React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



const renderList = ({ item, navigation }) => {
  // const navigation = useNavigation();
return (  <TouchableOpacity
  onPress={() => navigation.navigate('CharacterDetails', { character: item })}
>
    <Card style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <Image source={{ uri: item.image }} style={styles.characterImage} />
        <View style={styles.characterDetails}>
          <Title style={styles.characterName}>{item.name}</Title>
          {/* <Paragraph style={styles.characterSpecies}>{item.species} - {item.status}</Paragraph> */}
          <Text style={styles.characterGender}>Species: {item.species}</Text>
          {/* <Text style={styles.characterLocation}>Location: {item.location.name}</Text> */}
          {/* <Text style={styles.characterOrigin}>Origin: {item.origin.name}</Text> */}
        </View>
      </Card.Content>
    </Card>
  </TouchableOpacity>)
};

export default renderList;

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardContent: {
    flexDirection: 'row',
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
    color: 'white',
    fontFamily: 'serif',
  },
  characterSpecies: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  characterGender: {
    fontSize: 14,
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


// import React from 'react';
// import { StyleSheet, Image } from 'react-native';
// import { Card, Title, Paragraph } from 'react-native-paper';

// const renderList = ({ item }) => (
//   <Card style={styles.card}>
//     <Card.Content>
//       <Image source={{ uri: item.image }} style={styles.characterImage} />
//       <Title style={styles.characterName}>{item.name}</Title>
//       <Paragraph style={styles.characterSpecies}>{item.species}</Paragraph>
//     </Card.Content>
//   </Card>
// );

// export default renderList;

// const styles = StyleSheet.create({
//   card: {
//     marginVertical: 12,
//     marginHorizontal: 16,
//     borderRadius: 12,
//     overflow: 'hidden',
//     elevation: 3, // Adds a shadow for Android
//   },
//   characterImage: {
//     width: '100%',
//     height: 300,
//     resizeMode: 'cover',
//   },
//   characterName: {
//     marginTop: 12,
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//     textAlign: 'center',
//   },
//   characterSpecies: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//   },
// });
