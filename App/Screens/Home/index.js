import React from 'react'
import { Image, ImageBackground, StatusBar, Text, TouchableHighlight, View } from 'react-native'
import { PropTypes } from 'prop-types'
import styles from './styles'
import { Text as EText } from 'react-native-elements'

import SearchComponent from '../../Components/SearchComponent'
import CardHorizontalFlatList from '../../Components/CardHorizontalFlatList'
import CardVerticalFlatList from '../../Components/CardVerticalFlatList'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import { PARALLAX_HEADER_HEIGHT, parallaxStyles, STICKY_HEADER_HEIGHT } from '../../Components/ParallaxConfig'
import Icon from 'react-native-vector-icons/Entypo'
import Colors from '../../Theme/Colors'

const cover = require('../../Assets/Images/home-cover.jpg')
const wave = require('../../Assets/Images/wave.png')
const logo = require('../../Assets/Images/wetravel@0,25x.png')

class Home extends React.Component {
  constructor(props) {
    super(props)
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      loading: true,
    }
  };

  componentDidMount() {
    this.setState({ loading: false })
  }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //     return
  // }

  goToTourDetail = (item) => {
    // console.log(item)
    this.props.navigation.navigate('TourDetail', { tour: item })
  }

  render() {
    const { loading } = this.state
    return loading ? (<View><Text>a</Text></View>) : (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
        <ParallaxScrollView
          ref="ScrollView"
          // backgroundColor="#fff"
          backgroundColor={Colors.navbarColor}
          headerBackgroundColor="#333"
          stickyHeaderHeight={STICKY_HEADER_HEIGHT}
          parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT + 140}
          backgroundSpeed={10}
          renderBackground={() => (
            <View style={{backgroundColor: '#fff', height:PARALLAX_HEADER_HEIGHT + 140 }}>
            <ImageBackground source={cover} style={[styles.cover]}>
              <Image source={wave} style={styles.wave}/>
            </ImageBackground>
            </View>
          )}

          renderForeground={() => (
            <View key="parallax-header" style={styles.floatArea}>
              {/*<Image source={logo} style={{width: 171, height: 40, marginBottom: 20}}/>*/}
              <EText h4 style={{ color: '#333' }}>Hi, Van Trong</EText>
              <EText h4 style={{ color: '#333' }}>Where do you want to go?</EText>
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Icon name='location' color={Colors.navbarColor} size={18}/>
                <Text style={{ paddingLeft: 10 }}>Ha Noi</Text>
              </View>
              <SearchComponent/>
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
                }}>WeTravel</Text>
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
          //                             onPress={() => this.refs.ScrollView.scrollTo({x: 0, y: 0})}>
          //     </MaterialCommunityIcons>
          //   </View>
          // )}
        >
          <View style={styles.outerFLoat}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#333' }}>Top Place</Text>
              <TouchableHighlight style={{ paddingTop: 4, marginLeft: 'auto' }}>
                <Text style={{ fontSize: 14, color: '#3284c6' }}>More</Text>
              </TouchableHighlight>
            </View>
            <CardHorizontalFlatList onItemPress={this.goToTourDetail}/>

            <View style={{ flexDirection: 'row', marginTop: 30 }}>
              <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#333' }}>For you</Text>
              <TouchableHighlight style={{ paddingTop: 4, marginLeft: 'auto' }}>
                <Text style={{ fontSize: 14, color: '#3284c6' }}>More</Text>
              </TouchableHighlight>
            </View>
            <CardVerticalFlatList onItemPress={this.goToTourDetail}/>
          </View>
        </ParallaxScrollView>
      </View>
    )
  }
}

export default Home