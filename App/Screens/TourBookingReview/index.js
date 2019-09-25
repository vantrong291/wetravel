import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { PropTypes } from 'prop-types'
import AppHeader from '../../Components/AppHeader'
import LoadingContainer from '../../Components/LoadingContainer'
import Colors from '../../Theme/Colors'
import contants from '../../Theme/Constants'
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { stringToImage } from '../../Utils/stringToImage'

import qrImage from '../../Assets/Images/Payments/qr-code.png'
import { Button } from 'react-native-elements'

class TourBookingReview extends React.Component {
  constructor(props) {
    super(props)
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      loading: true,
    }
  };

  componentDidMount() {
    // runAfter(() => this.setState({ loading: false }), 200)
    this.setState({ loading: false })
  };

  goBack = () => {
    this.props.navigation.goBack()
  }

  bookingTour = () => {
    this.props.navigation.navigate('TourBookingComplete')
    // alert('booking successfully')
  }

  render() {
    const { navigation } = this.props
    const tour = navigation.getParam('tour')
    const selectedTour = navigation.getParam('selectedTour')
    const paymentMethod = navigation.getParam('paymentMethod')
    const title = tour.destination
    const { loading } = this.state

    const marginTop = paymentMethod.expire ? 0 : 8
    const height = paymentMethod.expire ? 15 : 0

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
            <Text
              style={{ fontSize: 20, fontWeight: 'bold', color: Colors.mainBackgroundColorTitle, marginBottom: 15 }}>
              Tour Infomation
            </Text>
            <Text>
              Below is all infomation about the tour, please read carefully and confirm payment
            </Text>
            <View>
              <View style={styles.card}>
                <View style={styles.cardHeading}>
                  <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 12, color: '#262947' }}>Ticket No #14659</Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 5 }}>
                    <Text style={{
                      fontWeight: 'bold',
                      fontSize: 22,
                      color: '#262947',
                      marginRight: 10,
                    }}>{selectedTour.from}</Text>
                    <Icon name={'arrow-right'} size={25} color={'#262947'}/>
                    <Text style={{
                      fontWeight: 'bold',
                      fontSize: 22,
                      color: '#262947',
                      marginLeft: 10,
                    }}>{tour.destination}</Text>
                  </View>
                </View>
                <View style={styles.cardBody}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{
                      width: '100%',
                      flexWrap: 'wrap',
                      marginVertical: 5,
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
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{
                      width: '50%',
                      flexWrap: 'wrap',
                      marginVertical: 5,
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
                      width: '50%',
                      flexWrap: 'wrap',
                      marginVertical: 5,
                    }}>
                      <Text style={styles.label}>Seats</Text>
                      <View style={{
                        marginVertical: 5,
                        // paddingHorizontal: 10,
                        paddingVertical: 5,
                        height: 40,
                      }}>
                        <Text style={styles.content}>{'2'}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.paymentReview}>
                <View style={[styles.paymentCard, { backgroundColor: '#fff' }]}>
                  <View style={{}}>
                    <Image source={stringToImage(paymentMethod.name)}
                           style={{ width: 40, height: 40, borderRadius: 0 }}/>
                  </View>
                  <View style={styles.userColumn}>
                    <View style={{ flexDirection: 'row' }}>
                      <Text
                        style={[styles.userName, { marginTop: marginTop }]}>{paymentMethod.cardNumber ? paymentMethod.cardNumber : paymentMethod.cardHolder}</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text
                        style={[styles.postTime, { height: height }]}>{paymentMethod.expire ? paymentMethod.expire : ''}</Text>
                    </View>
                  </View>
                  <View style={{ marginLeft: 'auto' }}>
                    <Icon name={'check'} size={26} style={{ color: 'green', marginTop: 8 }}/>
                  </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{
                    width: '40%',
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    borderRadius: 8,
                    padding: 8,
                  }}>
                    <Image source={qrImage} style={{ width: 120, height: 120 }}/>
                  </View>
                  <View style={{ width: '60%', padding: 10 }}>
                    <Text style={{ fontSize: 11, color: '#fff' }}>Price</Text>
                    <Text style={{
                      fontSize: 30,
                      fontWeight: 'bold',
                      color: '#fff',
                    }}>{selectedTour.price + ' ' + selectedTour.currency}</Text>
                    <Text style={{ fontSize: 11, color: '#fff' }}>You can use this QR code to pay and check your billing
                      for this tour</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
              <Button
                // icon={
                //   <Icon name="book-plus" size={20} style={{ marginRight: 5, color: Colors.navbarTextColor }}/>
                // }
                title="Confirm and Pay"
                titleStyle={{ fontSize: 15 }}
                buttonStyle={{
                  width: '100%',
                  paddingVertical: 10,
                  backgroundColor: Colors.navbarColor,
                  borderRadius: 2,
                }}
                containerStyle={{ width: '100%' }}
                onPress={() => this.bookingTour()}
              />
            </View>


          </View>}
        </ScrollView>
      </View>
    )
  }
}

export default TourBookingReview