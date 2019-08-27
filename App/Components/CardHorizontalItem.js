import React from 'react'
import { Text } from 'react-native'
import { Card } from 'react-native-elements'

import RateComponent from './RateComponent'


const CardHorizontalItem = ({image = require('../Assets/Images/TOM.png'), name = 'Hoi An', rate = 4, continents = "Asia", country= "VietNam"}) => {
  return (
    <Card image={image} containerStyle={{
      marginHorizontal: 0,
      borderRadius: 10,
      width: 180,
      marginBottom: 15,
      marginRight: 10
    }}>
      <Text style={{marginBottom: 0, fontSize: 16, fontWeight:'bold', color: "#333"}}>
        {name}
      </Text>
      <Text style={{marginBottom: 5, fontSize: 12}}>
        {country}, {continents}
      </Text>
      <RateComponent rate={rate}/>

    </Card>
  )
}

const styles = {
  card: {
    marginHorizontal: 0,
    borderRadius: 4,
  }
}

export default CardHorizontalItem;