import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.titleText }>Home</Text>
    </View>
  );
}
 
export default Home;

let styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  titleText: {
    fontSize: 24,

  },
})