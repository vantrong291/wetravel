import React from 'react'
import { Image, ImageBackground, Text, TouchableHighlight, View } from 'react-native'
import { PropTypes } from 'prop-types'
import styles from './styles'
import { Text as EText } from 'react-native-elements'

import SearchComponent from '../../Components/SearchComponent'
import CardHorizontalFlatList from '../../Components/CardHorizontalFlatList'
import CardVerticalFlatList from '../../Components/CardVerticalFlatList'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import { PARALLAX_HEADER_HEIGHT, parallaxStyles, STICKY_HEADER_HEIGHT } from '../../Components/ParallaxConfig'

const cover = require('../../Assets/Images/home-cover.jpg')
const wave = require('../../Assets/Images/wave.png')

class Home extends React.Component {
  constructor(props) {
    super(props)
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      loading: true,
    }
  };

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <ParallaxScrollView
          ref="ScrollView"
          backgroundColor="#fff"
          headerBackgroundColor="#333"
          stickyHeaderHeight={STICKY_HEADER_HEIGHT}
          parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT + 100}
          backgroundSpeed={10}
          renderBackground={() => (
            <ImageBackground source={cover} style={styles.cover}>
              <Image source={wave} style={styles.wave}/>
            </ImageBackground>
          )}

          renderForeground={() => (
            <View key="parallax-header" style={styles.floatArea}>
                <EText h4 style={{color: "#333"}}>Hi, Van Trong</EText>
                <EText h4 style={{color: "#333"}}>Where do you want to go?</EText>
                <SearchComponent/>
            </View>
          )}

          renderStickyHeader={() => (
            <View key="sticky-header" style={parallaxStyles.stickySection}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff', marginLeft: 15, marginBottom: 8}}>KodeTravel</Text>
            </View>
          )}

          renderFixedHeader={() => (
            <View key="fixed-header" style={parallaxStyles.fixedSection}>
              <MaterialCommunityIcons name="format-align-top" style={parallaxStyles.fixedSectionText}
                                      onPress={() => this.refs.ScrollView.scrollTo({x: 0, y: 0})}>
              </MaterialCommunityIcons>
            </View>
          )}>
          <View style={styles.outerFLoat}>
            <View style={{flexDirection:'row'}}>
              <Text style={{fontSize: 17, fontWeight: "bold", color: "#333"}}>Top Place</Text>
              <TouchableHighlight style={{paddingTop: 4, marginLeft: 'auto'}}>
                <Text style={{fontSize: 14, color: "#3284c6"}}>More</Text>
              </TouchableHighlight>
            </View>
            <CardHorizontalFlatList/>

            <View style={{flexDirection:'row', marginTop: 30}}>
              <Text style={{fontSize: 17, fontWeight: "bold", color: "#333"}}>For you</Text>
              <TouchableHighlight style={{paddingTop: 4, marginLeft: 'auto'}}>
                <Text style={{fontSize: 14, color: "#3284c6"}}>More</Text>
              </TouchableHighlight>
            </View>
            <CardVerticalFlatList/>
          </View>
        </ParallaxScrollView>
      </View>
    )
  }
}

export default Home