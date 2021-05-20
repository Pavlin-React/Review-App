import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import DetailsReview from '../screens/detailsReview'

let screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Game Zone',
      headerStyle: { ba }
    }
  },
  DetailsReview: {
    screen: DetailsReview,
    navigationOptions: {
      title: 'Danger Zone'
    }
  }
}

let HomeStack = createStackNavigator( screens )

export default createAppContainer( HomeStack )