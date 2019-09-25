import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { PropTypes } from 'prop-types'
import AppHeader from '../../Components/AppHeader'
import TourPhotoCarousel from '../../Components/TourPhotoCarousel'
import { runAfter } from '../../Utils/asyncFunc'
import LoadingContainer from '../../Components/LoadingContainer'
import Constants from '../../Theme/Constants'
import RateComponent from '../../Components/RateComponent'
import SelectInput from '../../Components/ReuseComponents/SelectInput'
import BottomSheet from '../../Components/BottomSheet'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../Theme/Colors'

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
      openChoicePanel : false,
    }
  };

  componentDidMount() {
    runAfter(() => this.setState({ loading: false }), 200)
  };

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
        <ScrollView style={{ marginBottom: 30 }}>
          {loading && <LoadingContainer height={278}/>}
          {!loading && <TourPhotoCarousel data={tour.images}/>}
          <View style={{ paddingHorizontal: Constants.padding, paddingBottom: 30 }}>
            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
              <View>
                <RateComponent rate={tour.rating}/>
              </View>
              <View style={{ marginLeft: 'auto' }}>
                <Text style={{ marginBottom: 0, fontSize: 18, fontWeight: 'bold', color: '#333' }}>30 - 80$</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Text style={{ marginBottom: 0, fontSize: 20, fontWeight: 'bold', color: '#333' }}>
                  {title}
                </Text>
                <Text style={{ marginBottom: 5, fontSize: 12 }}>
                  {country}, {continents}
                </Text>
              </View>
              <View style={{ marginLeft: 'auto' }}>
                <Button
                  icon={
                    <Icon name="book-plus" size={22} style={{marginRight: 5, color: Colors.navbarTextColor}} />
                  }
                  title="Book this tour"
                  titleStyle={{fontSize: 14}}
                  buttonStyle={{backgroundColor: Colors.success, borderRadius: 2}}
                  onPress={() => { this.setState({openChoicePanel: true})}}
                />
              </View>
            </View>

            <Text style={{ textAlign: 'justify', fontSize: 16, marginTop: 10 }}>
              {tour.introduce}
            </Text>
            <Text style={{ textAlign: 'justify', fontSize: 16, marginTop: 10 }}>
              {tour.introduce}
            </Text>
          </View>

        </ScrollView>
        <BottomSheet open={this.state.openChoicePanel} children={<View style={{ flexDirection: 'row' }}>
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
            containerStyle={{ width: '50%' }}
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
            containerStyle={{ width: '50%' }}
          />
        </View>}/>
        {/*<ActionButton*/}
        {/*buttonColor={Colors.navbarColor}*/}
        {/*renderIcon={() => (<Icon name='md-apps' size={26} color={Colors.navbarTextColor}/>)}*/}
        {/*onPress={() => { alert("hi")}}*/}
        {/*/>*/}
      </View>
    )
  }
}

export default TourDetail