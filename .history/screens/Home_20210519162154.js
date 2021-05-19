import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global'

const Home = () => {
  return (
    <View style={ globalStyles.container }>
      <Text style={ styles.titleText }>Home Screen</Text>
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