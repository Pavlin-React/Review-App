import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import DetailsReview from '../screens/detailsReview'

let screens = {
  Home: {
    screen: Home,
    navigati
  },
  DetailsReview: {
    screen: DetailsReview
  }
}

let HomeStack = createStackNavigator( screens )

export default createAppContainer( HomeStack )