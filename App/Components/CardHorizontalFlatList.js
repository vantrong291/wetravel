import React from 'react'
import { Text, FlatList } from 'react-native'
import {RANGE} from '../Utils/range'
import CardHorizontalItem from './CardHorizontalItem'

const keyExtractor = (item, index) => index.toString();

const CardHorizontalFlatList = ({}) => {
  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={RANGE(1,5)}
      renderItem={({item}) => <CardHorizontalItem/>}
      horizontal
    />
  )
}

export default CardHorizontalFlatList;