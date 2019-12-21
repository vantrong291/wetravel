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
import { formatter } from '../../Utils/currencyFomatter'

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
    const tourOptionsSeats = navigation.getParam('tourOptionsSeats')
    const tourOptionsPrice = navigation.getParam('tourOptionsPrice')

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
            // marginTop: 20,
            paddingBottom: 10,
            color: Colors.mainBackgroundColorTitle,
            paddingHorizontal: contants.padding,
          }}>
            <Text
              style={{ fontSize: 20, fontWeight: 'bold', color: Colors.mainBackgroundColorTitle, marginBottom: 15 }}>
              Thông tin tour
            </Text>
            <Text>
              Dưới đây là thông tin về việc đặt vé của bạn, hãy kiểm tra cẩn thận, sau đó bấm "Xác nhận"
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
                      <Text style={styles.label}>Khởi hành lúc</Text>
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
                      width: '100%',
                      flexWrap: 'wrap',
                      marginVertical: 5,
                    }}>
                      <Text style={styles.label}>Khởi hành tại</Text>
                      <View style={{
                        marginVertical: 5,
                        // paddingHorizontal: 10,
                        paddingVertical: 5,
                        height: 40,
                      }}>
                        <Text style={styles.content}>{'144 Xuân Thủy, Cầu Giấy'}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{
                      width: '50%',
                      flexWrap: 'wrap',
                      marginVertical: 5,
                    }}>
                      <Text style={styles.label}>Phương tiện di chuyển</Text>
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
                      <Text style={styles.label}>Thời gian tour</Text>
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
                      <Text style={styles.label}>Số chỗ</Text>
                      <View style={{
                        marginVertical: 5,
                        // paddingHorizontal: 10,
                        paddingVertical: 5,
                        height: 40,
                      }}>
                        <Text style={styles.content}>{tourOptionsSeats}</Text>
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
                    width: '45%',
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    borderRadius: 0,
                    padding: 10,
                    marginTop: 10
                  }}>
                    <Image source={qrImage} style={{ width: 120, height: 120 }}/>
                  </View>
                  <View style={{ width: '55%', padding: 10 }}>
                    <Text style={{ fontSize: 11, color: '#fff' }}>Tổng chi phí</Text>
                    <Text style={{
                      fontSize: 25,
                      fontWeight: 'bold',
                      color: '#fff',
                    }}>{formatter(tourOptionsPrice) + ' ' + selectedTour.currency}</Text>
                    <Text style={{ fontSize: 11, color: '#fff' }}>
                      Bạn có thể sử dụng mã QR này để chi trả và xem lại lịch sử thanh toán cho tour này
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
              <Button
                // icon={
                //   <Icon name="book-plus" size={20} style={{ marginRight: 5, color: Colors.navbarTextColor }}/>
                // }
                title="Xác nhận"
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