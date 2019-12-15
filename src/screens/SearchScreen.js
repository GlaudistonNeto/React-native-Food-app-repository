import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const SeachScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
    </View>
  );
};

const styles  = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SeachScreen;