import React from 'react'
import { BackHandler, Image, ScrollView, StatusBar, Text, View } from 'react-native'
import { PropTypes } from 'prop-types'
import LoadingContainer from '../../Components/LoadingContainer'
import Colors from '../../Theme/Colors'
import contants from '../../Theme/Constants'

import completeImage from '../../Assets/Images/confirmation.png'
import { runAfter } from '../../Utils/asyncFunc'
import AppHeader from '../../Components/AppHeader'
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Button } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'
import Timeline from 'react-native-timeline-listview'
import { stringToImage } from '../../Utils/stringToImage'
import qrImage from '../../Assets/Images/Payments/qr-code.png'
import { cards } from '../../Data/cards'

const paymentMethods = ['visa', 'master', 'cash']

class RecentTourDetail extends React.Component {
    constructor(props) {
        super(props)
        // this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
        this.state = {
            loading: true,
        }
    };

    componentDidMount() {
        // runAfter(() => this.setState({ loading: false }), 2000)
        this.setState({ loading: false })
    };

    goBack = () => {
        this.props.navigation.goBack()
    }

    render() {
        const loading = this.state.loading
        const { navigation } = this.props
        const tour = navigation.getParam('tour')
        const title = tour.destination
        const paymentMethod = cards[Math.floor(Math.random() * 4)]
        const tourOptionsPrice = '12.000.000'
        const marginTop = paymentMethod.expire ? 0 : 8
        const height = paymentMethod.expire ? 15 : 0

        return (
            <View style={{ flex: 1, backgroundColor: Colors.mainBackgroundColor }}>

                <AppHeader onItemPress={this.goBack} title={title} barStyle={'dark-content'}
                backgroundColor={Colors.mainBackgroundColor} textColor={Colors.mainBackgroundColorTitle}/>
                {/*<StatusBar translucent backgroundColor={Colors.mainBackgroundColor} barStyle="dark-content"/>*/}

                <ScrollView>
                    {loading && <LoadingContainer height={550}/>}
                    {!loading && <View style={{
                        marginTop: 10,
                        paddingBottom: 10,
                        color: Colors.mainBackgroundColorTitle,
                        paddingHorizontal: contants.padding,
                    }}>
                        <View >
                            <Text
                                style={{ fontSize: 20, fontWeight: 'bold', color: Colors.mainBackgroundColorTitle, marginBottom: 15 }}>
                                Thông tin tour
                            </Text>
                            <Text>
                                Dưới đây là thông tin vé đặt của bạn. Nếu có thắc mắc hãy liên hệ ngay vơi chúng tôi theo hotline: 16001254
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
                                            }}>{tour.tours[0].from}</Text>
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
                                                    <Text style={styles.content}>{tour.tours[0].timeStart}</Text>
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
                                                    <Text style={styles.content}>{tour.tours[0].vehicle}</Text>
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
                                                    <Text style={styles.content}>{tour.tours[0].time}</Text>
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
                                                    <Text style={styles.content}>1</Text>
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
                                                fontSize: 30,
                                                fontWeight: 'bold',
                                                color: '#fff',
                                            }}>{tourOptionsPrice + ' ' + tour.tours[0].currency}</Text>
                                            <Text style={{ fontSize: 11, color: '#fff' }}>
                                                Bạn có thể sử dụng mã QR này để chi trả và xem lại lịch sử thanh toán cho tour này
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{
                                    width: '100%',
                                    flexWrap: 'wrap',
                                    marginVertical: 5,
                                    marginRight: 5,
                                    marginTop: 20
                                }}>
                                    <Text style={styles.label}>Các hoạt động chính của tour</Text>
                                    <View style={{
                                        marginVertical: 5,
                                        // paddingHorizontal: 10,
                                        paddingVertical: 5,
                                        // height: 40,
                                    }}>
                                        <Timeline
                                            style={styles.list}
                                            data={tour.tours[0].timeline}
                                            circleSize={20}
                                            circleColor='rgb(45,156,219)'
                                            lineColor='rgb(45,156,219)'
                                            timeContainerStyle={{ minWidth: 52, marginTop: 0 }}
                                            detailContainerStyle={{ marginTop: -10 }}
                                            timeStyle={{
                                                textAlign: 'center',
                                                backgroundColor: '#ff9797',
                                                color: 'white',
                                                padding: 5,
                                                borderRadius: 15,
                                            }}
                                            descriptionStyle={{ color: 'gray', textAlign: 'justify' }}
                                            options={{
                                                style: { paddingTop: 0 },
                                            }}
                                            innerCircle={'dot'}
                                        />
                                    </View>
                                </View>
                            </View>

                        </View>

                    </View>}
                </ScrollView>
            </View>
        )
    }
}

export default RecentTourDetail