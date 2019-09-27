import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Image } from 'react-native-elements'
import RateComponent from './RateComponent'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { reviews } from '../Data/reviews'
import TouchableScale from 'react-native-touchable-scale'
import metrics from '../Config/metrics'


const ReviewListComponent = ({ reviewItem = reviews[0], goReviewDetails }) => {
  const renderContent = () => {
    return reviewItem.reviewContent.length <= 100 ? (
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.reviewItemText}>
          {reviewItem.reviewContent}
        </Text>
      </View>
    ) : (
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.reviewItemText}>
          {reviewItem.reviewContent.substring(0, 99) + ' ...'}
        </Text>
        <Text style={styles.seeMore}>See More</Text>
      </View>
    )
  }

  return (
    <View style={styles.card}>
      <View style={styles.userRow}>
        <View style={{}}>
          <Image source={reviewItem.userAvatar}
                 style={{ width: 40, height: 40, borderRadius: 20 }}/>
        </View>
        <View style={styles.userColumn}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.userName}>{reviewItem.userName}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.postTime}>{reviewItem.reviewTime}</Text>
          </View>
        </View>
        <View style={{ marginLeft: 'auto' }}>
          <Icon name={'dots-horizontal'} size={26} style={{ color: '#949aa8' }}/>
        </View>
      </View>
      <View style={styles.content}>
        <TouchableOpacity activeOpacity={0.8} onPress={goReviewDetails}>
          <View style={styles.titleRate}>
            <Text style={styles.title}>
              {reviewItem.reviewTitle}
            </Text>
            <RateComponent rate={reviewItem.rate} size={28}/>
          </View>
          {renderContent()}
          <View style={{ marginBottom: 10 }}>
            <Image source={{ uri: reviewItem.images[reviewItem.id - 1] }}
                   style={{ width: metrics.DEVICE_WIDTH - 30, height: 250, borderRadius: 8 }}/>
          </View>
        </TouchableOpacity>
        <View style={styles.location}>
          <View style={styles.locationCountry}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.tagTitle}>Country</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.tagText}>{reviewItem.country}, {reviewItem.continents}</Text>
            </View>
          </View>
          <View style={styles.locationPlace}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.tagTitle}>Place</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text st0yle={styles.tagText}>{reviewItem.place}</Text>
            </View>
          </View>
        </View>
        <View style={styles.actions}>
          <TouchableScale style={styles.actionColumn}
                          activeScale={0.8}
                          friction={90}
                          tension={100}>
            <View style={{ flexDirection: 'row' }}>
              <Icon name={'heart-outline'} size={24} style={{ color: '#949aa8' }}/>
            </View>
            <View sty2le={{ flexDirection: 'row' }}>
              <Text style={styles.actionText}>{reviewItem.like}</Text>
            </View>
          </TouchableScale>
          <TouchableScale style={styles.actionColumn}
                          activeScale={0.8}
                          friction={90}
                          tension={100}>
            <View style={{ flexDirection: 'row' }}>
              <Icon name={'thumb-down-outline'} size={24} style={{ color: '#949aa8' }}/>
            </View>
            <View sty2le={{ flexDirection: 'row' }}>
              <Text style={styles.actionText}>{reviewItem.dislike}</Text>
            </View>
          </TouchableScale>
          <TouchableScale style={styles.actionColumn}
                          activeScale={0.8}
                          friction={90}
                          tension={100}>
            <View style={{ flexDirection: 'row' }}>
              <Icon name={'comment-multiple-outline'} size={24} style={{ color: '#949aa8' }}/>
            </View>
            <View sty2le={{ flexDirection: 'row' }}>
              <Text style={styles.actionText}>{reviewItem.comment}</Text>
            </View>
          </TouchableScale>
          <TouchableScale style={styles.actionColumn}
                          activeScale={0.8}
                          friction={90}
                          tension={100}>
            <View style={{ flexDirection: 'row' }}>
              <Icon name={'share-variant'} size={24} style={{ color: '#949aa8' }}/>
            </View>
            <View sty2le={{ flexDirection: 'row' }}>
              <Text style={styles.actionText}>{reviewItem.share}</Text>
            </View>
          </TouchableScale>
        </View>
      </View>
    </View>
  )
}

const styles = {
  card: {
    // borderRadius: 10,
    marginBottom: 15,
    // marginHorizontal: 15,
    backgroundColor: '#fff',
    // elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',

  },
  userRow: {
    flexDirection: 'row',
    padding: 15,
    paddingBottom: 8,
    // borderBottomColor: '#eaeaea',
    // borderBottomWidth: 1,
  },
  userColumn: {
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  userName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  postTime: {
    fontSize: 12,
    // fontWeight: 'bold',
    color: '#9e9eaa',
  },
  content: {
    padding: 15,
  },
  titleRate: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    marginBottom: 8,
    marginTop: 5,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#243559',
  },
  reviewItemText: {
    color: '#2a374d',
    fontSize: 15,
  },
  seeMore: {
    fontSize: 15,
    color: '#9c9faa',
  },
  location: {
    marginBottom: 10,
    backgroundColor: '#f1f2f8',
    alignContent: 'stretch',
    padding: 15,
    borderRadius: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  locationCountry: {
    width: '50%',
    flexWrap: 'wrap',
  },
  locationPlace: {
    width: '50%',
    flexWrap: 'wrap',
  },
  tagTitle: { fontWeight: 'bold', fontSize: 14, color: '#525c6d', marginBottom: 3 },
  tagText: {
    color: '#676f83',
    fontSize: 16,
  },
  actions: {
    // marginBottom: 10,
    alignContent: 'stretch',
    paddingHorizontal: 15,
    borderRadius: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  actionColumn: {
    width: '25%',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  actionText: {
    color: '#676f83',
    fontSize: 14,
  },
}

export default ReviewListComponent