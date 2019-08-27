import React from 'react'
import { Text, FlatList } from 'react-native'
import {RANGE} from '../Utils/range'
import CardVerticalItem from './CardVerticalItem'

const keyExtractor = (item, index) => index.toString();

const CardVerticalFlatList = ({}) => {
  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={RANGE(1,5)}
      renderItem={({item}) => <CardVerticalItem
      // style={{paddingTop: 15}}
      />}
    />
  )
}

export default CardVerticalFlatList;