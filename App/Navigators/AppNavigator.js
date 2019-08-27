import { createAppContainer, createStackNavigator } from 'react-navigation'

import ExampleScreen from 'App/Screens/Example/ExampleScreen'
import Login from 'App/Screens/Login'

const StackNavigator = createStackNavigator(
  {
    Login: Login,
    MainScreen: ExampleScreen,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
