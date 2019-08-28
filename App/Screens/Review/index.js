import React from 'react'
import { Platform, Text, View, ActivityIndicator, Image, ScrollView, ImageBackground, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ReviewListComponent from '../../Components/ReviewListComponent'
import styles from './styles'
import { Text as EText, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign'
import {RANGE} from '../../Utils/range'
import CardVerticalItem from '../../Components/CardVerticalFlatList'

const cover = require('../../Assets/Images/home3-slider.abeeb270.png')
const resource = require('../../Assets/Images/shape (1).png')


class Review extends React.Component {
  constructor(props) {
    super(props);
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      loading: true,
    };
  };
  componentDidMount() {}

  keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{height: "100%", backgroundColor: '#fff'}}>
          <ImageBackground source={cover} style={styles.cover}>
            {/*<Image source={resource} style={styles.wave}/>*/}
            <View style={styles.floatArea}>
              <EText h4 style={{color: "#fff"}}>Customer Reviews</EText>
              <EText  style={{color: "#fff"}}>Browse any reviews for your reference</EText>
              <Button
                icon={
                  <Icon
                    name="edit"
                    size={18}
                    color="#333"
                  />
                }
                title=" Write"
                titleStyle={{color: "#333"}}
                buttonStyle={styles.writeBtn}
              />
            </View>
          </ImageBackground>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={RANGE(1,5)}
            renderItem={({item}) => <ReviewListComponent
              // style={{paddingTop: 15}}
            />}
          />
        </ScrollView>
      </View>
    )
  }

  }

export default Review;