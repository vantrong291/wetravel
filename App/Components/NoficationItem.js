import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import Colors from '../Theme/Colors'
import Spinner from 'react-native-spinkit'
import { Image } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')



const NotificationItem = ({ unread = true, image = require('../Assets/Images/TOM.png'), content = 'Your review has been voted up', time='5 minutes ago' }) => {
  const backgroundColor = unread ? "#edf2fa" : "#fff";
  return (
    <View style={[styles.notiRow,{ backgroundColor: backgroundColor }]}>
      <View style={{}}>
        <Image source={image}
               style={{ width: 45, height: 45, borderRadius: 4 }}/>
      </View>
      <View style={styles.notiColumn}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.notiContent}>{content}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.notiTime}>{time}</Text>
        </View>
      </View>
      <View style={{ marginLeft: 'auto' }}>
        <Icon name={'dots-horizontal'} size={26} style={{ color: '#949aa8' }}/>
      </View>
    </View>
  )
}

const styles = {
  notiRow: {
    flexDirection: 'row',
    borderBottomColor: '#dddfe2',
    padding: 15,
    paddingTop: 20,
    borderBottomWidth: 1,
    height: 80,
    textAlignVertical: 'center'
  },
  notiColumn: {
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  notiContent: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  notiTime: {
    fontSize: 12,
    // fontWeight: 'bold',
    color: '#9e9eaa',
  }
}

export default NotificationItem