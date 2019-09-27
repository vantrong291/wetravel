import React from 'react'
import { ScrollView, Text, TouchableHighlight, View } from 'react-native'
import { PropTypes } from 'prop-types'
import LoadingContainer from '../../Components/LoadingContainer'
import Colors from '../../Theme/Colors'
import contants from '../../Theme/Constants'
import AppHeader from '../../Components/AppHeader'
import { Divider, Image } from 'react-native-elements'
import metrics from '../../Config/metrics'
import styles from './styles'
import RateComponent from '../../Components/RateComponent'
import TouchableScale from 'react-native-touchable-scale'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {comments} from '../../Data/reviewComments'
import ReviewComment from '../../Components/ReviewComment'

class ReviewDetail extends React.Component {
  constructor(props) {
    super(props)
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
    this.state = {
      loading: true,
    }
  };

  componentDidMount() {
    // runAfter(() => this.setState({ loading: false }), 2000)
    this.setState({ loading: false })
  };

  goBack = () => {
    this.props.navigation.goBack()
  }

  render() {
    const loading = this.state.loading
    const { navigation } = this.props
    const reviewItem = navigation.getParam('review')

    return (
      <View style={{ flex: 1, backgroundColor: Colors.mainBackgroundColor }}>
        <AppHeader onItemPress={this.goBack} title={reviewItem.userName + ' - ' + reviewItem.place} titleSize={18} barStyle={'dark-content'}
                   backgroundColor={Colors.mainBackgroundColor} textColor={Colors.mainBackgroundColorTitle}/>
        <ScrollView>
          {loading && <LoadingContainer height={550}/>}
          {!loading && <View style={{
            // marginTop: 20,
            paddingBottom: 10,
            color: Colors.mainBackgroundColorTitle,
            // paddingHorizontal: contants.padding,
          }}>
            <View style={{ justifyContent: 'center'}}>
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
                <View style={styles.titleRate}>
                  <Text style={styles.title}>
                    {reviewItem.reviewTitle}
                  </Text>
                  <RateComponent rate={reviewItem.rate} size={28}/>
                </View>
                <View style={{ marginBottom: 10 }}>
                  <Text style={styles.reviewItemText}>
                    {reviewItem.reviewContent}
                  </Text>
                </View>
                {
                  reviewItem.images.map((item, index) => (
                    <View key={index} style={{ marginBottom: 10 }}>
                      <Image source={{ uri: item }}
                             style={{ width: metrics.DEVICE_WIDTH - 30, height: 250, borderRadius: 8 }}
                             PlaceholderContent={<LoadingContainer height={250}/>}
                      />
                    </View>
                  ))
                }
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
              <Divider style={{ backgroundColor: '#fff', marginVertical: 10 }} />

              <View style={{ flexDirection: 'row', paddingHorizontal: contants.padding, marginBottom: 20 }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#333' }}>Comments</Text>
              </View>
              {
                comments.map((item, index)=> (
                  <ReviewComment key={index} cmt={item}/>
                ))
              }
            </View>
          </View>}
        </ScrollView>
      </View>
    )
  }
}

export default ReviewDetail