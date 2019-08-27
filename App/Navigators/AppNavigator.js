import React, { Component } from 'react'
import { createAppContainer, createStackNavigator, createSwitchNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import Icon from "react-native-vector-icons/Entypo";

import ExampleScreen from 'App/Screens/Example/ExampleScreen'
import Login from 'App/Screens/Login'

const TabNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: ExampleScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" color={tintColor} size={24}/>
        )
      }
    },
    Review: {
      screen: ExampleScreen,
      navigationOptions: {
        tabBarLabel: "Review",
        tabBarIcon: ({tintColor}) => (
          <Icon name="news" color={tintColor} size={24}/>
        )
      }
    },
    RecentLocation: {
      screen: ExampleScreen,
      navigationOptions: {
        tabBarLabel: "Recent",
        tabBarIcon: ({tintColor}) => (
          <Icon name="location" color={tintColor} size={24}/>
        )
      }
    },
    Personal: {
      screen: ExampleScreen,
      navigationOptions: {
        tabBarLabel: "Personal",
        tabBarIcon: ({tintColor}) => (
          <Icon name="unread" color={tintColor} size={24}/>
        )
      },
    }
  },
  {
    initialRouteName: "Home",
    order: ["Home", "Review", "RecentLocation", "Personal"],
    // activeTintColor: "#e91d62",
    // barStyle: { backgroundColor: '#f5f5f5' },
    // shifting:true

    // tabBarComponent: MyTabBar,
    tabBarPosition: "bottom",
    swipeEnabled: true,
    animationEnabled: true,
    optimizationsEnabled: true,
    tabBarOptions: {
      activeTintColor: "#1976D2",
      inactiveTintColor: "grey",
      upperCaseLabel: false,
      pressColor: "#1976d224",
      pressOpacity: 1,
      labelStyle: {
        fontSize: 10,
        marginTop: 2,
        marginLeft: 0,
        marginRight: 0
      },
      style: {
        backgroundColor: "#fff",
        borderTopWidth: 0.5,
        borderTopColor: "grey",
        height: 50,
        // elevation: 3,
      },
      iconStyle: {},
      indicatorStyle: {
        height: 0
      },
      showIcon: true,
      showLabel: true
    }
  }
);


const StackNavigator = createSwitchNavigator(
  {
    Login: Login,
    MainScreen: TabNavigator,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
