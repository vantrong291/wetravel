import React from 'react'
import { Text } from 'react-native'
import { Card } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale' // https://github.com/kohver/react-native-touchable-scale

import RateComponent from './RateComponent'


const CardHorizontalItem = ({ item, onItemPress }) => {
  // const image = require(`${item.images[0]}`)
  const id = item.id
  return (
    <TouchableScale activeScale={0.95}
                    friction={90}
                    tension={100}
                    onPress={() => {onItemPress(item)}}
    >
      <Card image={{uri: item.images[item.id - 1]}} containerStyle={{
        marginHorizontal: 0,
        borderRadius: 10,
        width: 180,
        marginBottom: 15,
        marginRight: 10,
      }}>
        <Text style={{ marginBottom: 0, fontSize: 16, fontWeight: 'bold', color: '#333' }}>
          {item.destination}
        </Text>
        <Text style={{ marginBottom: 5, fontSize: 12 }}>
          {item.country}, {item.continent}
        </Text>
        <RateComponent rate={item.rating}/>

      </Card>
    </TouchableScale>
  )
}

const styles = {
  card: {
    marginHorizontal: 0,
    borderRadius: 4,
  },
}

export default CardHorizontalItem