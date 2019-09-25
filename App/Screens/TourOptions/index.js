import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { PropTypes } from 'prop-types'
import AppHeader from '../../Components/AppHeader'
import LoadingContainer from '../../Components/LoadingContainer'
import SelectInput from '../../Components/ReuseComponents/SelectInput'
import Colors from '../../Theme/Colors'
import contants from '../../Theme/Constants'
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Button } from 'react-native-elements'

const items = [

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
]

class TourOptions extends React.Component {
  constructor(props) {
    super(props)
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      loading: true,
      selectedItems: ['Ha Noi'],
      selectedTour: {
        from: 'Ha Noi',
        price: 120,
        currency: 'USD',
        vehicle: 'Coach',
        timeStart: '7:00 AM, 27/04/2020',
        time: '3 days, 2 night',
        description: '',
        timeline: [
          {
            'partTitle': ' Xe và hướng dẫn viên Mytour.vn đón Quý khách tại điểm hẹn, khởi hành đi thăm quan:',
            'partContent': [
              'Bảo tàng chứng tích chiến tranh trên đường Võ Văn Tầng: Là bảo tàng chuyên đề nghiên cứu, sưu tầm, lưu trữ, bảo quản và trưng bày những tư liệu, hình ảnh, hiện vật về những chứng tích tội ác và hậu quả của các cuộc chiến tranh mà các thế lực xâm lược đã gây ra đối với Việt Nam.',
              'Dinh Độc Lập (Dinh Thống Nhất): Công trình kiến trúc nổi tiếng ở Thành phố Hồ Chí Minh. Hiện nay, nó đã được thủ tướng chính phủ Việt Nam xếp hạng là di tích quốc gia đặc biệt.'],
          },
          {
            'partTitle': ' Xe và hướng dẫn viên Mytour.vn đón Quý khách tại điểm hẹn, khởi hành đi thăm quan:',
            'partContent': [
              'Bảo tàng chứng tích chiến tranh trên đường Võ Văn Tầng: Là bảo tàng chuyên đề nghiên cứu, sưu tầm, lưu trữ, bảo quản và trưng bày những tư liệu, hình ảnh, hiện vật về những chứng tích tội ác và hậu quả của các cuộc chiến tranh mà các thế lực xâm lược đã gây ra đối với Việt Nam.',
              'Dinh Độc Lập (Dinh Thống Nhất): Công trình kiến trúc nổi tiếng ở Thành phố Hồ Chí Minh. Hiện nay, nó đã được thủ tướng chính phủ Việt Nam xếp hạng là di tích quốc gia đặc biệt.'],
          },
        ],
      },
    }
  };

  componentDidMount() {
    // runAfter(() => this.setState({ loading: false }), 200)
    this.setState({ loading: false })
  };

  goBack = () => {
    this.props.navigation.goBack()
  }

  goPaymentScreen = () => {
    const { navigation } = this.props
    const tour = navigation.getParam('tour')
    this.props.navigation.navigate('TourPayment', { tour: tour, selectedTour: this.state.selectedTour })
  }

  onSelectedItemsChange = (selectedItems) => {
    const { navigation } = this.props
    const tour = navigation.getParam('tour')
    const tours = tour.tours
    const result = tours.filter((item, index) => item.from === selectedItems[0])[0]
    this.setState({ selectedTour: result })
    this.setState({ selectedItems })
  }

  render() {
    const { navigation } = this.props
    const tour = navigation.getParam('tour')
    const title = tour.destination
    const country = tour.country
    const continents = tour.continent
    const { loading } = this.state
    const selectedTour = this.state.selectedTour

    return (
      <View style={{ flex: 1, backgroundColor: Colors.mainBackgroundColor }}>
        <AppHeader onItemPress={this.goBack} title={title} barStyle={'dark-content'}
                   backgroundColor={Colors.mainBackgroundColor} textColor={Colors.mainBackgroundColorTitle}/>
        <ScrollView>
          {loading && <LoadingContainer height={2780}/>}
          {!loading && <View style={{
            marginTop: 20,
            paddingBottom: 10,
            color: Colors.mainBackgroundColorTitle,
            paddingHorizontal: contants.padding,
          }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: Colors.mainBackgroundColorTitle }}>Tour
              Options
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{
                width: '50%',
                flexWrap: 'wrap',
                marginVertical: 5,
                marginRight: 5,
              }}>
                <Text style={styles.label}>Starting place</Text>
                <SelectInput
                  items={tour.tours}
                  uniqueKey="from"
                  single={true}
                  // subKey="children"
                  placeholder="Your location ..."
                  // showDropDownst={true}
                  // readOnlyHeadings={true}
                  displayKey={'from'}
                  onSelectedItemsChange={this.onSelectedItemsChange}
                  selectedItems={this.state.selectedItems}
                  containerStyle={{ width: '80%' }}
                />
              </View>
              <View style={{
                width: '50%',
                flexWrap: 'wrap',
                marginVertical: 5,
                marginLeft: 5,
              }}>
                <Text style={styles.label}>Destination place</Text>
                <View style={{
                  marginVertical: 5,
                  // paddingHorizontal: 10,
                  paddingVertical: 5,
                  height: 40,
                }}>
                  <Text style={styles.content}>{title}</Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{
                width: '50%',
                flexWrap: 'wrap',
                marginVertical: 5,
                marginRight: 5,
              }}>
                <Text style={styles.label}>Price</Text>
                <View style={{
                  marginVertical: 5,
                  // paddingHorizontal: 10,
                  paddingVertical: 5,
                  height: 40,
                }}>
                  <Text style={styles.content}>{selectedTour.price + ' ' + selectedTour.currency}</Text>
                </View>
              </View>
              <View style={{
                width: '50%',
                flexWrap: 'wrap',
                marginVertical: 5,
                marginLeft: 5,
              }}>
                <Text style={styles.label}>Start at</Text>
                <View style={{
                  marginVertical: 5,
                  // paddingHorizontal: 10,
                  paddingVertical: 5,
                  height: 40,
                }}>
                  <Text style={styles.content}>{selectedTour.timeStart}</Text>
                </View>
              </View>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <View style={{
                width: '50%',
                flexWrap: 'wrap',
                marginVertical: 5,
                marginRight: 5,
              }}>
                <Text style={styles.label}>Vehicle</Text>
                <View style={{
                  marginVertical: 5,
                  // paddingHorizontal: 10,
                  paddingVertical: 5,
                  height: 40,
                }}>
                  <Text style={styles.content}>{selectedTour.vehicle}</Text>
                </View>
              </View>
              <View style={{
                width: '50%',
                flexWrap: 'wrap',
                marginVertical: 5,
                marginLeft: 5,
              }}>
                <Text style={styles.label}>Time</Text>
                <View style={{
                  marginVertical: 5,
                  // paddingHorizontal: 10,
                  paddingVertical: 5,
                  height: 40,
                }}>
                  <Text style={styles.content}>{selectedTour.time}</Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{
                width: '100%',
                flexWrap: 'wrap',
                marginVertical: 5,
                marginRight: 5,
              }}>
                <Text style={styles.label}>Main Activities</Text>
                <View style={{
                  marginVertical: 5,
                  // paddingHorizontal: 10,
                  paddingVertical: 5,
                  // height: 40,
                }}>
                  {
                    selectedTour.timeline.map((item, index) => (
                      <View key={index}>
                        <Text style={styles.timelineTitle}>{index + 1}. {item.partTitle}</Text>
                        {item.partContent.map((part, partIndex) => (
                          <Text key={partIndex} style={styles.timelineText}>+ {part}</Text>
                        ))}
                      </View>
                    ))
                  }
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Button
                // icon={
                //   <Icon name="book-plus" size={20} style={{ marginRight: 5, color: Colors.navbarTextColor }}/>
                // }
                title="Go to pay"
                titleStyle={{ fontSize: 15 }}
                buttonStyle={{ width: "100%", paddingVertical:10, backgroundColor: Colors.navbarColor, borderRadius: 2 }}
                containerStyle={{ width: "100%"}}
                onPress={() => this.goPaymentScreen()}
              />
            </View>
          </View>}
        </ScrollView>
      </View>
    )
  }
}

export default TourOptions