import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global'

const Home = () => {
  return (
    <View style={ globalStyles.container }>
      <Text style={ globalStyles.titleText }>Home Scree</Text>
    </View>
  );
}
 
export default Home;
