import React from 'react'
import { Platform, Text, View, Button, ImageBackground, Image, ScrollView, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import styles from './styles'
import { Text as EText, Input } from 'react-native-elements'
import {Ti} from '@shoutem/ui'
import Icon from 'react-native-vector-icons/MaterialIcons'

import SearchComponent from '../../Components/SearchComponent'
import CardHorizontalItem from '../../Components/CardHorizontalItem'
import CardHorizontalFlatList from '../../Components/CardHorizontalFlatList'
import CardVerticalFlatList from '../../Components/CardVerticalFlatList'


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
        <ScrollView style={{height: "100%"}}>
          <ImageBackground source={cover} style={styles.cover}>
            <Image source={wave} style={styles.wave}/>
            <View style={styles.floatArea}>
              <EText h4 style={{color: "#333"}}>Hi, Van Trong</EText>
              <EText h4 style={{color: "#333"}}>Where do you want to go?</EText>
              <SearchComponent/>
            </View>
          </ImageBackground>
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
        </ScrollView>
      </View>

    )
  }

}

export default Home