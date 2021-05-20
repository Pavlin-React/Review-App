import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { globalStyles } from '../styles/global'

const Home = ( { navigation } ) => {

  let [reviews, setReviews] = useState([
    { title: 'Zelda, breath the fresh air', rating: 5, body: 'Lorem ipsum', key: 1 }
    { title: '', rating: 5, body: 'Lorem ipsum', key: 1 }
  ])

  return (
    <View style={ globalStyles.container }>
      <Text style={ globalStyles.titleText }>Home Screen</Text>
    </View>
  );
}
 
export default Home;
