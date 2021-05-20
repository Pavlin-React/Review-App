import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import DetailsReview from '../screens/detailsReview'

let screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'GameZone'
    }
  },
  DetailsReview: {
    screen: DetailsReview,
    navigationOptions: {
      title: 'Danger Z'
    }
  }
}

let HomeStack = createStackNavigator( screens )

export default createAppContainer( HomeStack )