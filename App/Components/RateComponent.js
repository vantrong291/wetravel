import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {RANGE} from '../Utils/range'

const RateComponent = ({rate}) => {
  const roundedRate = Math.round(rate);
  const rest = 5 - roundedRate;
  return (
    <View style={{flexDirection: 'row'}}>
      {
        RANGE(1, roundedRate).map((item, index) => (
          <Icon name={"star"} size={18} style={{ color: "#e7504c" }}/>
        ))
      }
      {
        RANGE(1, rest).map((item, index) => (
          <Icon name={"star-o"} size={18}/>
        ))
      }
    </View>
  )
}
export default RateComponent;