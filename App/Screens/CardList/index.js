import React from 'react'
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { PropTypes } from 'prop-types'
import LoadingContainer from '../../Components/LoadingContainer'
import Colors from '../../Theme/Colors'
import contants from '../../Theme/Constants'
import AppHeader from '../../Components/AppHeader'
import { CreditCard } from '../../Components/CreditCard'
import { stringToImage } from '../../Utils/stringToImage'

const INTER_CARDS = ['visa', 'master', 'paypal']
const INTRA_CARDS = ['agri', 'exim', 'mb', 'tech', 'vietcom', 'viettin', 'bidv', 'vp', 'mari']


class CardList extends React.Component {
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

    keyExtractor = (item, index) => index.toString()

    onAlert = (message) => {
        Alert.alert(
            'Thêm thẻ',
            message,
            [
                // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {
                    text: 'OK',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
            ],
            { cancelable: true },
        )
    }

    render() {
        const loading = this.state.loading
        return (
            <View style={{ flex: 1, backgroundColor: Colors.mainBackgroundColor }}>
                <AppHeader onItemPress={this.goBack} title={'Thêm thẻ thanh toán'} barStyle={'dark-content'}
                           backgroundColor={Colors.mainBackgroundColor} textColor={Colors.mainBackgroundColorTitle}/>
                {/*<StatusBar translucent backgroundColor={Colors.mainBackgroundColor} barStyle="dark-content"/>*/}

                <ScrollView>
                    {loading && <LoadingContainer height={550}/>}
                    {!loading && <View style={{
                        marginTop: 0,
                        paddingBottom: 10,
                        color: Colors.mainBackgroundColorTitle,
                        paddingHorizontal: contants.padding,
                    }}>
                        <View>
                            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#333' }}>Thẻ thanh toán quốc
                                    tế</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                {
                                    INTER_CARDS.map((item, index) => (
                                        <CreditCard key={index} title={''} onItemPress={() => this.props.navigation.navigate("AddCard")}
                                                    image={item}/>
                                    ))
                                }
                            </View>
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#333' }}>Thẻ ngân hàng trong
                                    nước</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={{width: "33.33%", marginRight: 5}}
                                                  onPress={() => this.onAlert(INTRA_CARDS[0])}
                                >
                                    <View style={{
                                        marginRight: 10,
                                        marginBottom: 20,
                                        borderRadius: 3,
                                        backgroundColor: '#fff',
                                        paddingHorizontal: 20,
                                        paddingVertical: 5,
                                        height: 70,
                                        justifyContent: 'center',
                                    }}>
                                        <Image source={stringToImage(INTRA_CARDS[0])}
                                               style={{ width: 65, height: 28 }}/>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width: "33.33%", marginRight: 5}}
                                                  onPress={() => this.onAlert(INTRA_CARDS[1])}
                                >
                                    <View style={{
                                        marginRight: 10,
                                        marginBottom: 20,
                                        borderRadius: 3,
                                        backgroundColor: '#fff',
                                        paddingHorizontal: 20,
                                        paddingVertical: 5,
                                        height: 70,
                                        // width: 120,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <Image source={stringToImage(INTRA_CARDS[1])}
                                               style={{ width: 45, height: 27 }}/>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width: "33.33%", marginRight: 5}}
                                                  onPress={() => this.onAlert(INTRA_CARDS[2])}
                                >
                                    <View style={{
                                        marginRight: 10,
                                        marginBottom: 20,
                                        borderRadius: 3,
                                        backgroundColor: '#fff',
                                        paddingHorizontal: 20,
                                        paddingVertical: 5,
                                        height: 70,
                                        // width: 120,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <Image source={stringToImage(INTRA_CARDS[2])}
                                               style={{ width: 40, height: 25 }}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={{width: "33.33%", marginRight: 5}}
                                                  onPress={() => this.onAlert(INTRA_CARDS[3])}
                                >
                                    <View style={{
                                        marginRight: 10,
                                        marginBottom: 20,
                                        borderRadius: 3,
                                        backgroundColor: '#fff',
                                        paddingHorizontal: 20,
                                        paddingVertical: 5,
                                        height: 70,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Image source={stringToImage(INTRA_CARDS[3])}
                                               style={{ width: 80, height: 40 }}/>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width: "33.33%", marginRight: 5}}
                                                  onPress={() => this.onAlert(INTRA_CARDS[4])}
                                >
                                    <View style={{
                                        marginRight: 10,
                                        marginBottom: 20,
                                        borderRadius: 3,
                                        backgroundColor: '#fff',
                                        paddingHorizontal: 20,
                                        paddingVertical: 5,
                                        height: 70,
                                        // width: 120,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <Image source={stringToImage(INTRA_CARDS[4])}
                                               style={{ width: 80, height: 50 }}/>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width: "33.33%", marginRight: 5}}
                                                  onPress={() => this.onAlert(INTRA_CARDS[5])}
                                >
                                    <View style={{
                                        marginRight: 10,
                                        marginBottom: 20,
                                        borderRadius: 3,
                                        backgroundColor: '#fff',
                                        paddingHorizontal: 20,
                                        paddingVertical: 5,
                                        height: 70,
                                        // width: 120,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <Image source={stringToImage(INTRA_CARDS[5])}
                                               style={{ width: 80, height: 40 }}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={{width: "33.33%", marginRight: 5}}
                                                  onPress={() => this.onAlert(INTRA_CARDS[6])}
                                >
                                    <View style={{
                                        marginRight: 10,
                                        marginBottom: 20,
                                        borderRadius: 3,
                                        backgroundColor: '#fff',
                                        paddingHorizontal: 20,
                                        paddingVertical: 5,
                                        height: 70,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Image source={stringToImage(INTRA_CARDS[6])}
                                               style={{ width: 80, height: 35 }}/>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width: "33.33%", marginRight: 5}}
                                                  onPress={() => this.onAlert(INTRA_CARDS[7])}
                                >
                                    <View style={{
                                        marginRight: 10,
                                        marginBottom: 20,
                                        borderRadius: 3,
                                        backgroundColor: '#fff',
                                        paddingHorizontal: 20,
                                        paddingVertical: 5,
                                        height: 70,
                                        // width: 120,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <Image source={stringToImage(INTRA_CARDS[7])}
                                               style={{ width: 76, height: 16 }}/>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{width: "33.33%", marginRight: 5}}
                                                  onPress={() => this.onAlert(INTRA_CARDS[8])}
                                >
                                    <View style={{
                                        marginRight: 10,
                                        marginBottom: 20,
                                        borderRadius: 3,
                                        backgroundColor: '#fff',
                                        paddingHorizontal: 20,
                                        paddingVertical: 5,
                                        height: 70,
                                        // width: 120,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <Image source={stringToImage(INTRA_CARDS[8])}
                                               style={{ width: 75, height: 20 }}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>}
                </ScrollView>
            </View>
        )
    }
}

export default CardList