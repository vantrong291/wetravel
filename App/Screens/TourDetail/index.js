import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { PropTypes } from 'prop-types'
import styles from './styles'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'
import AppHeader from '../../Components/AppHeader'
import Colors from '../../Theme/Colors'
import { ENTRIES1 } from '../../Data/tourDetailData'
import TourPhotoCarousel from '../../Components/TourPhotoCarousel'
import { runAfter } from '../../Utils/asyncFunc'
import LoadingContainer from '../../Components/LoadingContainer'
import Constants from '../../Theme/Constants'
import {tourData} from '../../Data/tours'

class TourDetail extends React.Component {
  constructor(props) {
    super(props)
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      loading: true,
      details: {},
    }
  };

  componentDidMount() {
    runAfter(() => this.setState({ loading: false }), 1000)
  }

  goBack = () => {
    this.props.navigation.goBack()
  }

  render() {
    const { navigation } = this.props
    const tour = navigation.getParam('tour')
    const title = tour.destination
    const country = tour.country
    const continents = tour.continent
    const { loading } = this.state

    return (
      <View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
        <AppHeader onItemPress={this.goBack} title={title}/>
        <ScrollView style={{ height: 10000 }}>
          {loading && <LoadingContainer height={267}/>}
          {!loading && <TourPhotoCarousel data={tour.images}/>}
          <View style={{ paddingHorizontal: Constants.padding }}>
            <Text style={{ marginBottom: 0, fontSize: 16, fontWeight: 'bold', color: '#333' }}>
              {title}
            </Text>
            <Text style={{ marginBottom: 5, fontSize: 12 }}>
              {country}, {continents}
            </Text>
            <Text>
              {tour.introduce}
            </Text>
          </View>
        </ScrollView>
        <ActionButton
          buttonColor={Colors.navbarColor}
          renderIcon={() => (<Icon name='md-apps' size={26} color={Colors.navbarTextColor}/>)}
        >
          <ActionButton.Item buttonColor='#009688' title="Book now" onPress={() => console.log('notes tapped!')}>
            <Icon name='md-airplane' style={styles.actionButtonIcon} size={26} color={Colors.navbarTextColor}/>
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#f44336' title="Add to my list" onPress={() => {
          }}>
            <Icon name="md-add" style={styles.actionButtonIcon} size={26} color={Colors.navbarTextColor}/>
          </ActionButton.Item>

        </ActionButton>
      </View>
    )
  }
}

export default TourDetail