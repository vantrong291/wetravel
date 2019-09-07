import React from 'react'
import { Text, FlatList } from 'react-native'
import {RANGE} from '../Utils/range'
import CardVerticalItem from './CardVerticalItem'
import {tourData} from '../Data/tours'

const keyExtractor = (item, index) => index.toString();

const CardVerticalFlatList = ({onItemPress}) => {
  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={tourData}
      renderItem={({item}) => <CardVerticalItem item={item} onItemPress={onItemPress}
      // style={{paddingTop: 15}}
      />}
    />
  )
}

export default CardVerticalFlatList;