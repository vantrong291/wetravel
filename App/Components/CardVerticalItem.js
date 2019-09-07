import React from 'react'
import { Text, View } from 'react-native'
import { Image } from 'react-native-elements'
import metrics from '../Config/metrics'

import RateComponent from './RateComponent'
import TouchableScale from 'react-native-touchable-scale'


const CardVerticalItem = ({ image = require('../Assets/Images/TOM.png'), name = 'Hoi An', rate = 4, continents = 'Asia', country = 'VietNam' }) => {
  return (
    <TouchableScale activeScale={0.9}
                    friction={90}
                    tension={100}
    >
      <View style={[styles.row, { marginTop: 15 }]}>
        <View style={styles.imageCol4}>
          <Image source={image}
                 style={{ width: metrics.DEVICE_WIDTH * 0.4 - 10, height: metrics.DEVICE_WIDTH * 0.4 - 10 }}/>
        </View>
        <View style={styles.imageCol6}>
          <Text style={{ marginBottom: 0, fontSize: 16, fontWeight: 'bold', color: '#333' }}>
            {name}
          </Text>
          <Text style={{ marginBottom: 5, fontSize: 12 }}>
            {country}, {continents}
          </Text>
          <RateComponent rate={rate}/>
        </View>
      </View>
    </TouchableScale>
  )
}

const styles = {
  row: {
    flexDirection: 'row',
  },
  imageCol4: {
    width: metrics.DEVICE_WIDTH * 0.4,
  },
  imageCol6: {
    width: metrics.DEVICE_WIDTH * 0.6,
    paddingLeft: 10,
  },
}

export default CardVerticalItem