import React from 'react'
import { Text, View } from 'react-native'
import { Image } from 'react-native-elements'
import RateComponent from './RateComponent'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../Theme/Colors'


const TourComment = ({cmt}) => {
  const image =  cmt.userAvatar ? cmt.userAvatar : require('../Assets/Images/TOM.png')
  return (
    <View style={styles.card}>
      <View style={styles.userRow}>
        <View style={{}}>
          <Image source={image}
                 style={{ width: 60, height: 60, borderRadius: 4 }}/>
        </View>
        <View style={styles.userColumn}>
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Text style={styles.userName}>{cmt.userName}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Text style={styles.postTime}>{cmt.commentTime}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <RateComponent rate={cmt.rate} size={14}/>
          </View>
          <View style={{ flexDirection: 'row', marginVertical: 5 }}>
            <Text style={{ textAlign: 'justify', color: Colors.mainBackgroundColorNormalText }}>{cmt.comment}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginVertical: 5 }}>
            <View style={{ flexDirection: 'column', marginRight: 10 }}>
              <View style={{ flexDirection: 'row' }}>
                <Icon name={'heart-outline'} size={18} style={{ color: '#949aa8', marginRight: 5 }}/>
                <Text>{cmt.like} Likes</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
              <View style={{ flexDirection: 'row' }}>
                <Icon name={'reply'} size={18} style={{ color: '#949aa8', marginRight: 5 }}/>
                <Text>Reply</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginLeft: 'auto' }}>
          <Icon name={'dots-horizontal'} size={26} style={{ color: '#949aa8' }}/>
        </View>
      </View>
    </View>
  )
}

const styles = {
  card: {
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  userRow: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingBottom: 8,
  },
  userColumn: {
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  userName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.mainBackgroundColorTitle,
  },
  postTime: {
    fontSize: 12,
    color: '#9e9eaa',
  },
}

export default TourComment