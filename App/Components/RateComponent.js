import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {RANGE} from '../Utils/range'

const RateComponent = ({rate, size = 18}) => {
  const roundedRate = Math.round(rate);
  const rest = 5 - roundedRate;
  return (
    <View style={{flexDirection: 'row'}}>
      {
        RANGE(1, roundedRate).map((item, index) => (
          <Icon key={index} name={"star"} size={size} style={{ color: "#fde226" }}/>
        ))
      }
      {
        RANGE(1, rest).map((item, index) => (
          <Icon key={index} name={"star"} size={size} style={{ color: "#e8e8e8" }}/>
        ))
      }
    </View>
  )
}
export default RateComponent;