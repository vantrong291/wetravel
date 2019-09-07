import React from 'react'
import TouchableScale from 'react-native-touchable-scale' // https://github.com/kohver/react-native-touchable-scale
import Icon from 'react-native-vector-icons/Ionicons'
import Colors from '../Theme/Colors'

const BackButton = ({onItemPress}) => {
  return (
    <TouchableScale activeScale={0.95}
                    friction={90}
                    tension={100}
                    onPress={onItemPress}
                    style={{paddingLeft:5}}
    >
      <Icon name='md-arrow-round-back' color={Colors.navbarTextColor} size={26}/>
    </TouchableScale>
  )
}

export default BackButton