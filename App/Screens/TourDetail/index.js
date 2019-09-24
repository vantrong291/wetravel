import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { PropTypes } from 'prop-types'
import styles from './styles'
import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons'
import AppHeader from '../../Components/AppHeader'
import Colors from '../../Theme/Colors'
import TourPhotoCarousel from '../../Components/TourPhotoCarousel'
import { runAfter } from '../../Utils/asyncFunc'
import LoadingContainer from '../../Components/LoadingContainer'
import Constants from '../../Theme/Constants'
import RateComponent from '../../Components/RateComponent'
import SectionedMultiSelect from 'react-native-sectioned-multi-select'
import SelectInput from '../../Components/ReuseComponents/SelectInput'

const items = [
  {
    name: 'Fruits',
    id: 0,
    // these are the children or 'sub items'
    children: [
      {
        name: 'Apple',
        id: 10,
      },
      {
        name: 'Strawberry',
        id: 17,
      },
      {
        name: 'Pineapple',
        id: 13,
      },
      {
        name: 'Banana',
        id: 14,
      },
      {
        name: 'Watermelon',
        id: 15,
      },
      {
        name: 'Kiwi fruit',
        id: 16,
      },
    ],
  },

]

class TourDetail extends React.Component {
  constructor(props) {
    super(props)
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      loading: true,
      details: {},
      selectedItems: [],
    }
  };

  componentDidMount() {
    runAfter(() => this.setState({ loading: false }), 200)
  }

  goBack = () => {
    this.props.navigation.goBack()
  }

  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems })
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
          {loading && <LoadingContainer height={278}/>}
          {!loading && <TourPhotoCarousel data={tour.images}/>}
          <View style={{ paddingHorizontal: Constants.padding }}>
            <Text style={{ marginBottom: 0, fontSize: 20, fontWeight: 'bold', color: '#333' }}>
              {title}
            </Text>
            <Text style={{ marginBottom: 5, fontSize: 12 }}>
              {country}, {continents}
            </Text>
            <RateComponent rate={tour.rating}/>
            <Text style={{ textAlign: 'justify', fontSize: 16, marginTop: 10 }}>
              {tour.introduce}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <SelectInput
              items={items}
              uniqueKey="id"
              single={true}
              subKey="children"
              placeholder="Choose some things..."
              showDropDownst={true}
              readOnlyHeadings={true}
              onSelectedItemsChange={this.onSelectedItemsChange}
              selectedItems={this.state.selectedItems}
              containerStyle={{width: '50%'}}
            />
            <SelectInput
              items={items}
              uniqueKey="id"
              single={true}
              subKey="children"
              placeholder="Choose some things..."
              showDropDownst={true}
              readOnlyHeadings={true}
              onSelectedItemsChange={this.onSelectedItemsChange}
              selectedItems={this.state.selectedItems}
              containerStyle={{width: '50%'}}
            />
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