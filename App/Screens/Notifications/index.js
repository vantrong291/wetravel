import React from 'react'
import { Image, Text, TouchableHighlight, View } from 'react-native'
import { PropTypes } from 'prop-types'
import NotificationItem from '../../Components/NoficationItem'
import contants from '../../Theme/Constants'
import styles from './styles'
import { Text as EText } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { RANGE } from '../../Utils/range'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import { PARALLAX_HEADER_HEIGHT, parallaxStyles, STICKY_HEADER_HEIGHT, window } from '../../Components/ParallaxConfig'


const cover = require('../../Assets/Images/notibg.png')
const resource = require('../../Assets/Images/noti.png')


class Notifications extends React.Component {
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

  render() {
    return (
      <View style={styles.container}>
        <ParallaxScrollView
          ref="ScrollView"
          backgroundColor="#fff"
          headerBackgroundColor="#333"
          stickyHeaderHeight={STICKY_HEADER_HEIGHT}
          parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT - 50}
          backgroundSpeed={10}
          renderBackground={() => (
            <View key="background">
              <Image source={cover}
                     style={{
                       width: window.width,
                       height: PARALLAX_HEADER_HEIGHT,
                     }}/>
            </View>
          )}

          renderForeground={() => (
            <View key="parallax-header" style={[styles.floatArea, {
              flexDirection: 'row',
              paddingHorizontal: contants.padding,
              paddingBottom: 10,
            }]}>
              <View style={{width:'50%'}}>
                <Image source={resource}
                       style={{
                         width: 120,
                         height: 130,
                       }}/>
              </View>
              <View style={{width:'50%', justifyContent:'center', paddingTop: 40}}>
                <Text style={{ color: '#fff', fontSize: 27, fontWeight: 'bold', textAlign: 'right'}}>Notifications</Text>
                <EText  style={{color: "#fff", textAlign: 'right'}}>Keep you reminding important events</EText>
              </View>
            </View>

          )}

          renderStickyHeader={() => (
            <View>
              <View key="sticky-header" style={parallaxStyles.stickySection}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff', marginLeft: 15, marginBottom: 8 }}>Notifications</Text>
              </View>
              <View key="fixed-header" style={parallaxStyles.fixedSection}>
                <MaterialCommunityIcons name="format-align-top" style={parallaxStyles.fixedSectionText}
                                        onPress={() => this.refs.ScrollView.scrollTo({ x: 0, y: 0 })}>
                </MaterialCommunityIcons>
              </View>
            </View>
          )}
        >
          <View style={{ marginBottom: 20 }}>
             <View style={{ flexDirection: 'row', paddingHorizontal: contants.padding, paddingVertical: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}>News</Text>
              <TouchableHighlight style={{ paddingTop: 4, marginLeft: 'auto' }}>
                <Text style={{ fontSize: 14, color: '#3284c6' }}>Mark as read</Text>
              </TouchableHighlight>
            </View>
            {
              RANGE(1, 5).map((item, index) => (
                <NotificationItem/>
              ))
            }
          </View>
          <View>
            <View style={{ flexDirection: 'row', paddingHorizontal: contants.padding, paddingBottom: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}>Older</Text>
              {/*<TouchableHighlight style={{ paddingTop: 4, marginLeft: 'auto' }}>*/}
              {/*/!*<Text style={{ fontSize: 14, color: '#3284c6' }}></Text>*!/*/}
              {/*</TouchableHighlight>*/}
            </View>
            {
              RANGE(1, 5).map((item, index) => (
                <NotificationItem unread={false}/>
              ))
            }
          </View>
        </ParallaxScrollView>
      </View>
    )
  }

}

export default Notifications