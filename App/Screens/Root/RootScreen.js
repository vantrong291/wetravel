import React, { Component } from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { View, StatusBar } from 'react-native'
import styles from './RootScreenStyle'
import { connect } from 'react-redux'
import StartupActions from 'App/Stores/Startup/Actions'
import { PropTypes } from 'prop-types'
import SplashScreen from 'react-native-splash-screen'
import Colors from '../../Theme/Colors'
import { getItem } from '../../Services/AsyncStorageService'
import { login } from '../../Services/AuthService'

class RootScreen extends Component {
  async componentDidMount() {
    // Run the startup saga when the application is starting
    SplashScreen.hide()
    // this.props.startup()
  }

  render() {
    return (

      <View style={styles.container}>
        {/*<StatusBar backgroundColor={Colors.subColor} barStyle="light-content" />*/}
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
        <AppNavigator
          // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
        />
      </View>
    )
  }
}

RootScreen.propTypes = {
  startup: PropTypes.func,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreen)
