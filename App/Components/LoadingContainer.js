import React from 'react'
import { Dimensions, View } from 'react-native'
import Colors from '../Theme/Colors'
import Spinner from 'react-native-spinkit'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')

const LoadingContainer = ({ height = 320, width = viewportWidth, type = 'FadingCircleAlt' }) => {
  return (
    <View style={{ height: height, width: width }}>
      <Spinner type={type} size={30} color={Colors.navbarColor} style={{ alignSelf: 'center', paddingTop: 150 }}/>
    </View>
  )
}

export default LoadingContainer