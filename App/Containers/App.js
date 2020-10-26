import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Container } from 'native-base';
import { Provider } from 'react-redux'
import { Dimensions, Platform, StatusBar, StyleSheet, View } from 'react-native';

import RootContainer from './RootContainer'
import createStore from '../Redux'
import NavigationRouter from '../Navigation/NavigationRouter';
import HeaderScreen from './HeaderScreen';
import FooterScreen from './FooterScreen';

import { Colors } from '../../ignite/DevScreens/DevTheme';

// create our store
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
class App extends Component {
  render() {

    const StatusBarAPP = (<MyStatusBar backgroundColor={'#2ad9b2'} barStyle="light-content" />);
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        {Platform.OS == 'ios' ? StatusBarAPP : StatusBarAPP}
        <Container>
          <HeaderScreen />
          <NavigationRouter />
          <FooterScreen />
        </Container>
      </Provider>
    )
  }
}

const { height } = Dimensions.get('window');
const STATUSBAR_HEIGHT = (Platform.OS === 'ios' && height >= 812) ? 44 : 22;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
