import React from 'react';
import { Button, Text, View } from 'react-native';
import { globalStyles } from '../styles/global'

const DetailsReview = ( { navigation } ) => {
 

  return (
    <View style={ globalStyles.container }>
      <Text>{ navigation.getParam( 'title' ) }</Text>
      <Text>{ navigation.getParam( 'rating' ) }</Text>
      <Text>{ navigation.getParam( 'bodt' ) }</Text>
    </View>
  );
}
 
export default DetailsReview;
