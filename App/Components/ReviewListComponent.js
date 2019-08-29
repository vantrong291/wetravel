import React from 'react'
import { Text, View } from 'react-native'
import { Image } from 'react-native-elements'
import RateComponent from './RateComponent'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import metrics from '../Config/metrics'


const ReviewListComponent = ({ image = require('../Assets/Images/TOM.png'), name = 'Hoi An', rate = 4, continents = 'Asia', country = 'VietNam' }) => {
  return (
    <View style={styles.card}>
      <View style={styles.userRow}>
        <View style={{}}>
          <Image source={image}
                 style={{ width: 40, height: 40, borderRadius: 20 }}/>
        </View>
        <View style={styles.userColumn}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.userName}>Phạm Văn Trọng</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.postTime}>26 minutes ago</Text>
          </View>
        </View>
        <View style={{ marginLeft: 'auto' }}>
          <Icon name={'dots-horizontal'} size={26} style={{ color: '#949aa8' }}/>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.titleRate}>
          <Text style={styles.title}>
            Excellent
          </Text>
          <RateComponent rate={rate} size={28}/>
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={styles.reviewText}>
            I am very happy with the services. I think this is the best place for all people ...
          </Text>
          <Text style={styles.seeMore}>See More</Text>
        </View>
        <View style={{marginBottom: 10}}>
          <Image source={image} style={{ width: metrics.DEVICE_WIDTH - 60, height: 150, borderRadius: 8 }}/>
        </View>
        <View style={styles.location}>
          <View style={styles.locationCountry}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.tagTitle}>Country</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.tagText}>Viet Nam</Text>
            </View>
          </View>
          <View style={styles.locationPlace}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.tagTitle}>Place</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text st0yle={styles.tagText}>Ha Long Bay</Text>
            </View>
          </View>
        </View>
        <View style={styles.actions}>
          <View style={styles.actionColumn}>
            <View style={{flexDirection: 'row'}}>
              <Icon name={'heart-outline'} size={24} style={{ color: '#949aa8' }}/>
            </View>
            <View sty2le={{flexDirection: 'row'}}>
              <Text style={styles.actionText}>69</Text>
            </View>
          </View>
          <View style={styles.actionColumn}>
            <View style={{flexDirection: 'row'}}>
              <Icon name={'thumb-down-outline'} size={24} style={{ color: '#949aa8' }}/>
            </View>
            <View sty2le={{flexDirection: 'row'}}>
              <Text style={styles.actionText}>0</Text>
            </View>
          </View>
          <View style={styles.actionColumn}>
            <View style={{flexDirection: 'row'}}>
              <Icon name={'comment-multiple-outline'} size={24} style={{ color: '#949aa8' }}/>
            </View>
            <View sty2le={{flexDirection: 'row'}}>
              <Text style={styles.actionText}>10</Text>
            </View>
          </View>
          <View style={styles.actionColumn}>
            <View style={{flexDirection: 'row'}}>
              <Icon name={'share-variant'} size={24} style={{ color: '#949aa8' }}/>
            </View>
            <View sty2le={{flexDirection: 'row'}}>
              <Text style={styles.actionText}>2</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = {
  card: {
    borderRadius: 10,
    marginBottom: 15,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  userRow: {
    flexDirection: 'row',
    borderBottomColor: '#eaeaea',
    padding: 15,
    paddingBottom: 8,
    borderBottomWidth: 1,
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
    marginBottom: 20
  },
  title: {
    marginBottom: 8,
    marginTop: 5,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#243559'
  },
  reviewText: {
    color: "#2a374d",
    fontSize: 15
  },
  seeMore: {
    fontSize: 15,
    color: "#9c9faa"
  },
  location: {
    marginBottom: 10,
    backgroundColor: "#f1f2f8",
    alignContent: 'stretch',
    padding: 15,
    borderRadius: 10,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  locationCountry: {
    width: "50%",
    flexWrap:'wrap'
  },
  locationPlace: {
    width: "50%",
    flexWrap:'wrap'
  },
  tagTitle: {fontWeight: "bold", fontSize: 14, color: '#525c6d', marginBottom: 3},
  tagText: {
    color: '#676f83',
    fontSize: 16
  },
  actions: {
    // marginBottom: 10,
    alignContent: 'stretch',
    paddingHorizontal: 15,
    borderRadius: 10,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  actionColumn: {
    width: "25%",
    flexWrap:'wrap',
    alignItems: 'center'
  },
  actionText: {
    color: '#676f83',
    fontSize: 14
  }
}

export default ReviewListComponent