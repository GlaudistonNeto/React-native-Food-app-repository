import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => console.log('Term was submited')}
        />
      <Text>Search Screen</Text>
      <Text>{term}</Text>
    </View>
  );
};

const styles  = StyleSheet.create({});

export default SearchScreen;