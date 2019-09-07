import React from 'react'
import { Text, Image, View } from 'react-native'
import { Card } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale' // https://github.com/kohver/react-native-touchable-scale
import RateComponent from './RateComponent'

const cardWidth = 150
const cardBorderRadius = 8


const CardHorizontalItem = ({ item, onItemPress }) => {
  // const image = require(`${item.images[0]}`)
  const id = item.id
  return (
    <TouchableScale activeScale={0.95}
                    friction={90}
                    tension={100}
                    onPress={() => {
                      onItemPress(item)
                    }}
    >
      <View style={styles.card}>
        <Image source={{ uri: item.images[item.id - 1]}} style={styles.cardImage}/>
        <View style={{padding:15}}>
        <Text style={{ marginBottom: 0, fontSize: 16, fontWeight: 'bold', color: '#333' }}>
          {item.destination}
        </Text>
        <Text style={{ marginBottom: 5, fontSize: 12 }}>
          {item.country}, {item.continent}
        </Text>
        <RateComponent rate={item.rating}/>
        </View>
      </View>
    </TouchableScale>
  )
}

const styles = {
  card: {
    backgroundColor: '#fff',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginHorizontal: 0,
    borderRadius: cardBorderRadius,
    width: cardWidth,
    marginVertical: 15,
    marginRight: 10,
  },
  cardImage: {
    width:cardWidth,
    height: 120,
    borderTopLeftRadius: cardBorderRadius,
    borderTopRightRadius: cardBorderRadius
  }
}

export default CardHorizontalItem