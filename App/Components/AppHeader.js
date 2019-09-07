import React from 'react'
import {StatusBar, View, Text} from 'react-native'
import TouchableScale from 'react-native-touchable-scale' // https://github.com/kohver/react-native-touchable-scale
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../Theme/Colors'
import {Header} from 'react-native-elements'
import BackButton from './BackButton'

const AppHeader = ({onItemPress, title}) => {
  return (
    <Header
      statusBarProps={{ barStyle: 'light-content', backgroundColor: Colors.navbarColor }}
      leftComponent={<BackButton onItemPress={onItemPress}/>}
      centerComponent={<Text style={{ color: Colors.navbarTextColor, fontSize: 20, fontWeight: 'bold' }} >{title}</Text>}
      containerStyle={{
        backgroundColor: Colors.navbarColor,
        justifyContent: 'space-around',
      }}
    />

  )
}

export default AppHeader