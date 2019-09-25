import React from 'react'
import {StatusBar, View, Text} from 'react-native'
import TouchableScale from 'react-native-touchable-scale' // https://github.com/kohver/react-native-touchable-scale
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../Theme/Colors'
import {Header} from 'react-native-elements'
import BackButton from './BackButton'

const AppHeader = ({onItemPress, title, barStyle = 'light-content', backgroundColor = Colors.navbarColor, textColor = Colors.navbarTextColor}) => {
  return (
    <Header
      statusBarProps={{ barStyle: barStyle, backgroundColor: backgroundColor }}
      leftComponent={<BackButton onItemPress={onItemPress} textColor={textColor}/>}
      centerComponent={<Text style={{ color: textColor, fontSize: 20, fontWeight: 'bold' }} >{title}</Text>}
      containerStyle={{
        backgroundColor: backgroundColor,
        justifyContent: 'space-around',
      }}
    />

  )
}

export default AppHeader