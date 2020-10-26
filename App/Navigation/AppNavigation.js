import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from '../Containers/WelcomeScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  WelcomeScreen: { screen: WelcomeScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'WelcomeScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
