import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { PropTypes } from 'prop-types'
import ReviewListComponent from '../../Components/ReviewListComponent'
import styles from './styles'
import { Button, Text as EText } from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { RANGE } from '../../Utils/range'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import { PARALLAX_HEADER_HEIGHT, parallaxStyles, STICKY_HEADER_HEIGHT, window } from '../../Components/ParallaxConfig'


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


  render() {
    return (
      <View style={styles.container}>
        <ParallaxScrollView
          ref="ScrollView"
          backgroundColor="#fff"
          headerBackgroundColor="#333"
          stickyHeaderHeight={STICKY_HEADER_HEIGHT}
          parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT + 120}
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
            <View key="parallax-header" style={styles.floatArea}>
              <Image source={avatar} style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                borderWidth: 3,
                borderColor: '#fff',
                marginBottom: 10,
              }}/>
              <EText h4 style={{ color: '#fff' }}>Phạm Văn Trọng</EText>
              <EText style={{ color: '#fff' }}>"Wherever you go, go with all your heart"</EText>

              <View style={styles.statisticCard}>
                <View style={{flexDirection: 'row', marginBottom: 15}}>
                  <View style={styles.statisticColumn}>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.tagTitle}>Country</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.tagText}>Viet Nam</Text>
                    </View>
                  </View>
                  <View style={styles.statisticColumn}>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.tagTitle}>Place</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text st0yle={styles.tagText}>Ha Long Bay</Text>
                    </View>
                  </View>
                </View>

                <View style={{flexDirection: 'row', marginBottom: 15}}>
                  <View style={styles.statisticColumn}>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.tagTitle}>Country</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.tagText}>Viet Nam</Text>
                    </View>
                  </View>
                  <View style={styles.statisticColumn}>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.tagTitle}>Place</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text st0yle={styles.tagText}>Ha Long Bay</Text>
                    </View>
                  </View>
                </View>

                <View style={{flexDirection: 'row', marginBottom: 5}}>
                  <View style={styles.statisticColumn}>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.tagTitle}>Country</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.tagText}>Viet Nam</Text>
                    </View>
                  </View>
                  <View style={styles.statisticColumn}>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.tagTitle}>Place</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text st0yle={styles.tagText}>Ha Long Bay</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}

          renderStickyHeader={() => (
            <View key="sticky-header" style={parallaxStyles.stickySection}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff', marginLeft: 15, marginBottom: 8 }}>Customer
                Reviews</Text>
            </View>
          )}

          renderFixedHeader={() => (
            <View key="fixed-header" style={parallaxStyles.fixedSection}>
              <MaterialCommunityIcons name="format-align-top" style={parallaxStyles.fixedSectionText}
                                      onPress={() => this.refs.ScrollView.scrollTo({ x: 0, y: 0 })}>
              </MaterialCommunityIcons>
            </View>
          )}>
          <View style={{ backgroundColor: 'transparent' }}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={RANGE(1, 5)}
              renderItem={({ item }) => <ReviewListComponent
                // style={{paddingTop: 15}}
              />}
              style={{ paddingTop: 30, backgroundColor: 'transparent' }}
            />
          </View>
        </ParallaxScrollView>
      </View>
    )
  }
}

export default Personal