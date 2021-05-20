import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import DetailsReview from '../screens/detailsReview'

let screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Game Zone'
    }
  },
  DetailsReview: {
    screen: DetailsReview,
    navigationOptions: {
      title: 'Danger Zone',
      headerStyle: { backgroundColor: '#eee' }
    }
  }
}

let HomeStack = createStackNavigator( screens, {
  defaultNavigationOptions: {

  }
} )

export default createAppContainer( HomeStack )