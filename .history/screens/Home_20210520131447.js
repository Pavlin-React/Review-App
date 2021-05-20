import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { globalStyles } from '../styles/global'

const Home = ( { navigation } ) => {

  let [reviews, setReviews] = useState([
    { title: 'Zelda, breath the fresh air', rating: 5, body: 'Lorem ipsum', key: 1 },
    { title: 'Gotta catch them all', rating: 3, body: 'Lorem ipsum', key: 2 },
    { title: 'No', rating: 4, body: 'Lorem ipsum', key: 3 },
  ])

  return (
    <View style={ globalStyles.container }>
      <Text style={ globalStyles.titleText }>Home Screen</Text>
    </View>
  );
}
 
export default Home;
