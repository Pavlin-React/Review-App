import React from 'react';
import { Button, Text, View } from 'react-native';
import { globalStyles } from '../styles/global'

const Home = ( { navigation } ) => {

  let pressHandler = () => {
    
  }

  return (
    <View style={ globalStyles.container }>
      <Text style={ globalStyles.titleText }>Home Screen</Text>
      <Button title='Go to review dets' onPress={ pressHandler } />
    </View>
  );
}
 
export default Home;
