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


const cover = require('../../Assets/Images/review-cover.jpg')
const resource = require('../../Assets/Images/texture.png')


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
          <ParallaxScrollView
            ref="ScrollView"
            backgroundColor="#fff"
            headerBackgroundColor="#333"
            stickyHeaderHeight={STICKY_HEADER_HEIGHT}
            parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
            backgroundSpeed={10}
            renderBackground={() => (
              <View key="background">
                <Image source={cover}
                       style={{
                         width: window.width,
                         height: PARALLAX_HEADER_HEIGHT
                       }}/>
              </View>
            )}

            renderForeground={() => (
              <View key="parallax-header" style={styles.floatArea}>
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
            )}

            renderStickyHeader={() => (
              <View key="sticky-header" style={parallaxStyles.stickySection}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff', marginLeft: 15, marginBottom: 8}}>Customer Reviews</Text>
              </View>
            )}

            renderFixedHeader={() => (
              <View key="fixed-header" style={parallaxStyles.fixedSection}>
                <MaterialCommunityIcons name="format-align-top" style={parallaxStyles.fixedSectionText}
                      onPress={() => this.refs.ScrollView.scrollTo({x: 0, y: 0})}>
                </MaterialCommunityIcons>

              </View>
            )}>
            <FlatList
              keyExtractor={this.keyExtractor}
              data={RANGE(1,5)}
              renderItem={({item}) => <ReviewListComponent/>}
              style={{paddingTop: 15}}
            />
          </ParallaxScrollView>
      </View>
    )
  }

  }

export default Review;