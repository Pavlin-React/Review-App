import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global'

const About = () => {
  return (
    <View style={ styles.container }>
      <Text>About</Text>
    </View>
  );
}
 
export default About;

let styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  titleText: {
    fontSize: 24,
  },
})