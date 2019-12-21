import React from 'react'
import { Text } from 'react-native'
import Colors from '../Theme/Colors'
import { Header } from 'react-native-elements'
import BackButton from './BackButton'

const AppHeader = ({ onItemPress, title, titleSize = 16, barStyle = 'light-content', backgroundColor = Colors.navbarColor, textColor = Colors.navbarTextColor }) => {
    return (
        <Header
            statusBarProps={{ barStyle: barStyle, backgroundColor: backgroundColor }}
            leftComponent={<BackButton onItemPress={onItemPress} textColor={textColor}/>}
            centerComponent={<Text style={{ color: textColor, fontSize: titleSize, fontWeight: 'bold' }}>{title}</Text>}
            containerStyle={{
                backgroundColor: backgroundColor,
                justifyContent: 'space-around',
            }}

        />

    )
}

export default AppHeader