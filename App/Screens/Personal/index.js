import React from 'react'
import { FlatList, Image, Text, TouchableHighlight, View } from 'react-native'
import { PropTypes } from 'prop-types'
import ReviewListComponent from '../../Components/ReviewListComponent'
import styles from './styles'
import { Text as EText } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import { PARALLAX_HEADER_HEIGHT, parallaxStyles, STICKY_HEADER_HEIGHT, window } from '../../Components/ParallaxConfig'
import TouchableScale from 'react-native-touchable-scale'
import Colors from '../../Theme/Colors'
import { logout } from '../../Services/AuthService'
import { reviews } from '../../Data/reviews'
import contants from '../../Theme/Constants'

const cover = require('../../Assets/Images/personal-cover.png')
const resource = require('../../Assets/Images/texture.png')
const logo = require('../../Assets/Images/wetravel@0,25x.png')
const avatar = require('../../Assets/Images/ava.jpg')


class Personal extends React.Component {
  constructor(props) {
    super(props)
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      loading: true,
    }
  };

  componentDidMount() {
  }

  keyExtractor = (item, index) => index.toString()

  onLogout = async () => {
    await logout(this)
    // this.props.navigation.navigate('MainScreen')
  }

  goReviewDetails = (reviewItem) => {
    this.props.navigation.navigate('ReviewDetail', { review: reviewItem })
  }

  goToPersonalInfomation = (item) => {
    this.props.navigation.navigate('PersonalInfomation')
  }

  goToAddCard = (item) => {
    this.props.navigation.navigate('AddCard')
  }

  goToChangePassword = (item) => {
    this.props.navigation.navigate('ChangePassword')
  }

  goToComingTours = (item) => {
    this.props.navigation.navigate('ComingTours')
  }

  goToRecentTours = (item) => {
    this.props.navigation.navigate('RecentTours')
  }

  goToSettings = (item) => {
    this.props.navigation.navigate('Settings')
  }


  render() {
    return (
      <View style={styles.container}>
        <ParallaxScrollView
          ref="ScrollView"
          // backgroundColor="#fff"
          backgroundColor={Colors.navbarColor}
          headerBackgroundColor="#333"
          stickyHeaderHeight={STICKY_HEADER_HEIGHT}
          parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT + 80}
          backgroundSpeed={10}
          renderBackground={() => (
            <View key="background" style={{ backgroundColor: '#fff', height: PARALLAX_HEADER_HEIGHT + 80 }}>
              <Image source={cover}
                     style={{
                       width: window.width,
                       height: PARALLAX_HEADER_HEIGHT,
                     }}/>
            </View>
          )}

          renderForeground={() => (
            <View key="parallax-header" style={styles.floatArea}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={avatar} style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  borderWidth: 3,
                  borderColor: '#fff',
                  marginBottom: 10,
                }}/>
                <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                  <TouchableScale
                    activeScale={0.8}
                    friction={90}
                    tension={100}
                    onPress={this.onLogout}
                    style={{ marginTop: 10 }}>
                    <MaterialCommunityIcons name={'logout-variant'} size={26} style={{ color: '#fff' }}/>
                  </TouchableScale>
                </View>
              </View>
              <EText h4 style={{ color: '#fff' }}>Phạm Văn Trọng</EText>
              <EText style={{ color: '#fff' }}>"Wherever you go, go with all your heart"</EText>

              <View style={styles.statisticCard}>
                <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                  <View style={styles.statisticColumn}>
                    <TouchableScale
                      activeScale={0.8}
                      friction={90}
                      tension={100}
                      onPress={this.goToPersonalInfomation}>
                      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <MaterialCommunityIcons name={'information-outline'} size={24}
                                                style={{ color: Colors.navbarColor }}/>
                      </View>
                      <View style={styles.tagTextContainer}>
                        <Text style={styles.tagText}>Personal Infomation</Text>
                      </View>
                    </TouchableScale>
                  </View>
                  <View style={styles.statisticColumn}>
                    <TouchableScale
                      activeScale={0.8}
                      friction={90}
                      tension={100}
                      onPress={this.goToAddCard}>
                      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <MaterialCommunityIcons name={'credit-card-plus'} size={24}
                                                style={{ color: Colors.navbarColor }}/>
                      </View>
                      <View style={styles.tagTextContainer}>
                        <Text style={styles.tagText}>Add Credit Card</Text>
                      </View>
                    </TouchableScale>
                  </View>
                  <View style={styles.statisticColumn}>
                    <TouchableScale
                      activeScale={0.8}
                      friction={90}
                      tension={100}
                      onPress={this.goToChangePassword}>
                      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <MaterialCommunityIcons name={'textbox-password'} size={24}
                                                style={{ color: Colors.navbarColor }}/>
                      </View>
                      <View style={styles.tagTextContainer}>
                        <Text style={styles.tagText}>Change Password</Text>
                      </View>
                    </TouchableScale>
                  </View>
                </View>

                <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                  <View style={styles.statisticColumn}>
                    <TouchableScale
                      activeScale={0.8}
                      friction={90}
                      tension={100}
                      onPress={this.goToComingTours}>
                      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <MaterialCommunityIcons name={'alpha-c-circle-outline'} size={24}
                                                style={{ color: Colors.navbarColor }}/>
                      </View>
                      <View style={styles.tagTextContainer}>
                        <Text style={styles.tagText}>Coming Tour</Text>
                      </View>
                    </TouchableScale>
                  </View>
                  <View style={styles.statisticColumn}>
                    <TouchableScale
                      activeScale={0.8}
                      friction={90}
                      tension={100}
                      onPress={this.goToRecentTours}>
                      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <MaterialCommunityIcons name={'history'} size={24} style={{ color: Colors.navbarColor }}/>
                      </View>
                      <View style={styles.tagTextContainer}>
                        <Text style={styles.tagText}>Recent Tour</Text>
                      </View>
                    </TouchableScale>
                  </View>
                  <View style={styles.statisticColumn}>
                    <TouchableScale
                      activeScale={0.8}
                      friction={90}
                      tension={100}
                      onPress={this.goToSettings}>
                      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <MaterialCommunityIcons name={'settings-outline'} size={24}
                                                style={{ color: Colors.navbarColor }}/>
                      </View>
                      <View style={styles.tagTextContainer}>
                        <Text style={styles.tagText}>Settings</Text>
                      </View>
                    </TouchableScale>
                  </View>
                </View>
              </View>
            </View>
          )}

          renderStickyHeader={() => (
            <View>
              <View key="sticky-header" style={parallaxStyles.stickySection}>
                <Text style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#fff',
                  marginLeft: 15,
                  marginBottom: 8,
                }}>vantrong291</Text>
              </View>
              <View key="fixed-header" style={parallaxStyles.fixedSection}>
                <MaterialCommunityIcons name="format-align-top" style={parallaxStyles.fixedSectionText}
                                        onPress={() => this.refs.ScrollView.scrollTo({ x: 0, y: 0 })}>
                </MaterialCommunityIcons>
              </View>
            </View>
          )}

          // renderFixedHeader={() => (
          //   <View key="fixed-header" style={parallaxStyles.fixedSection}>
          //     <MaterialCommunityIcons name="format-align-top" style={parallaxStyles.fixedSectionText}
          //                             onPress={() => this.refs.ScrollView.scrollTo({ x: 0, y: 0 })}>
          //     </MaterialCommunityIcons>
          //   </View>
          // )}
        >
          <View style={{ backgroundColor: 'transparent' }}>
            <View style={{ flexDirection: 'row', marginTop: 30, marginHorizontal: contants.padding }}>
              <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#333' }}>Your reviews</Text>
              <TouchableHighlight style={{ paddingTop: 4, marginLeft: 'auto' }}>
                <Text style={{ fontSize: 14, color: '#3284c6' }}>Xem tất cả</Text>
              </TouchableHighlight>
            </View>

            <FlatList
              keyExtractor={this.keyExtractor}
              data={reviews}
              renderItem={({ item }) => <ReviewListComponent reviewItem={item}
                                                             goReviewDetails={() => this.goReviewDetails(item)}/>}
              style={{ paddingTop: 10, backgroundColor: 'transparent' }}
            />
          </View>
        </ParallaxScrollView>
      </View>
    )
  }
}

export default Personal