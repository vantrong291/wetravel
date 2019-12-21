import React from 'react'
import { Alert, ScrollView, View } from 'react-native'
import { PropTypes } from 'prop-types'
import { CreditCardInput } from 'react-native-credit-card-input'
import { runAfter } from '../../Utils/asyncFunc'
import Colors from '../../Theme/Colors'
import AppHeader from '../../Components/AppHeader'
import contants from '../../Theme/Constants'
import LoadingContainer from '../../Components/LoadingContainer'
import { Button } from 'react-native-elements'


class AddCard extends React.Component {
    constructor(props) {
        super(props)
        // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state = {
            loading: true,
            form: {}
        }
    };

    componentDidMount() {
        runAfter(() => this.setState({ loading: false }), 500)
        // this.setState({ loading: false })
    };

    _onChange = form => {
        console.log(form)
        this.setState({form: form})
    }

    _onSubmitCard = () => {
        const form = this.state.form;
        const props = this.props;

        if (!form.valid) {
            Alert.alert(
                'Không hợp lệ',
                'Thẻ của bạn không hợp lệ, vui lòng kiểm tra lại',
                [
                    // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                    {
                        text: 'Thử lại',
                        onPress: () => console.log('Try add card again'),
                    },
                ],
                { cancelable: true },
            )
        } else {
            Alert.alert(
                'Thành công',
                'Bạn đã thêm thẻ vào tài khoản thanh toán thành công',
                [
                    // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                    {
                        text: 'OK',
                        onPress: () => props.navigation.navigate('Personal'),
                    },
                ],
                { cancelable: true },
            )
        }

    }


    goBack = () => {
        this.props.navigation.goBack()
    }

    render() {
        const loading = this.state.loading
        return (
            <View style={{ flex: 1, backgroundColor: Colors.mainBackgroundColor }}>

                <AppHeader onItemPress={this.goBack} title={'Thêm thẻ quốc tế'} barStyle={'dark-content'}
                           backgroundColor={Colors.mainBackgroundColor} textColor={Colors.mainBackgroundColorTitle}/>
                <ScrollView>
                    {loading && <LoadingContainer height={550}/>}
                    {!loading && <View style={{
                        marginTop: 20,
                        paddingBottom: 10,
                        color: Colors.mainBackgroundColorTitle,
                        paddingHorizontal: contants.padding,
                    }}>
                        <View style={{marginBottom:20}}>
                            <CreditCardInput onChange={this._onChange} labels={{ number: "Số thẻ", expiry: "Hết hạn", cvc: "CVC/CCV" }} />
                        </View>
                        <View>
                            <Button
                                title="Xác nhận"
                                titleStyle={{ fontSize: 15 }}
                                buttonStyle={{
                                    width: '100%',
                                    paddingVertical: 10,
                                    backgroundColor: Colors.navbarColor,
                                    borderRadius: 2,
                                }}
                                containerStyle={{ width: '100%' }}
                                onPress={() => this._onSubmitCard()}
                            />
                        </View>
                    </View>}

                </ScrollView>
            </View>
        )
    }
}

export default AddCard