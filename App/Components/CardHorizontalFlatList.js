import React from 'react'
import { Text, FlatList } from 'react-native'
import {RANGE} from '../Utils/range'
import CardHorizontalItem from './CardHorizontalItem'
import {tourData} from '../Data/tours'

const keyExtractor = (item, index) => index.toString();

const CardHorizontalFlatList = ({onItemPress}) => {
  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={tourData}
      renderItem={({item}) => <CardHorizontalItem item={item} onItemPress={onItemPress}/>}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default CardHorizontalFlatList;