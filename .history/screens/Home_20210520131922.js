import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { globalStyles } from '../styles/global'

const Home = ( { navigation } ) => {

  let [reviews, setReviews] = useState([
    { title: 'Zelda, breath the fresh air', rating: 5, body: 'Lorem ipsum', key: 1 },
    { title: 'Gotta catch them all', rating: 3, body: 'Lorem ipsum', key: 2 },
    { title: 'Not so finally fantasy', rating: 4, body: 'Lorem ipsum', key: 3 },
  ])

  return (
    <View style={ globalStyles.container }>
      <FlatList
        data={  }
      />
    </View>
    </View>
  );
}
 
export default Home;
