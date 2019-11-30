import React from 'react'
import { Alert, ScrollView, Text, TextInput, View } from 'react-native'
import { PropTypes } from 'prop-types'
import LoadingContainer from '../../Components/LoadingContainer'
import Colors from '../../Theme/Colors'
import contants from '../../Theme/Constants'
import AppHeader from '../../Components/AppHeader'
import { Button } from 'react-native-elements'

class ChangePassword extends React.Component {
    constructor(props) {
        super(props)
        // this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
        this.state = {
            loading: true,
            password: '',
            newPassword: '',
            confirmNewPassword: '',

        }
    };

    componentDidMount() {
        // runAfter(() => this.setState({ loading: false }), 2000)
        this.setState({ loading: false })
    };

    goBack = () => {
        this.props.navigation.goBack()
    }

    onPressChangePassword = () => {
        if (this.state.password === '') {
            this.onAlert('Lỗi', 'Bạn chưa nhập mật khẩu hiện tại')
        } else if (this.state.newPassword === '') {
            this.onAlert('Lỗi', 'Bạn chưa nhập mật khẩu mới')
        } else if (this.state.confirmNewPassword === '') {
            this.onAlert('Lỗi', 'Bạn chưa nhập lại mật khẩu mới')
        } else if (this.state.newPassword !== this.state.confirmNewPassword) {
            this.onAlert('Lỗi', 'Mật khẩu bạn nhập không khớp. Xin vui lòng kiểm tra lại!')
        }
    }

    onAlert = (title, message) => {
        Alert.alert(
            title,
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

    onChangePassword = (e) => {
        this.setState({ password: e })
    }

    onChangeNewPassword = (e) => {
        this.setState({ newPassword: e })
    }

    onChangeConfirmNewPassword = (e) => {
        this.setState({ confirmNewPassword: e })
    }


    render() {
        const loading = this.state.loading
        return (
            <View style={{ flex: 1, backgroundColor: Colors.mainBackgroundColor }}>

                <AppHeader onItemPress={this.goBack} title={'Thay đổi mật khẩu'} barStyle={'dark-content'}
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
                        <View>
                            <View style={{ marginBottom: 10 }}>
                                <View>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Mật khẩu hiện tại</Text>
                                </View>
                                <View style={{ marginTop: 5 }}>
                                    <TextInput placeholder={'*********'}
                                               autoCompleteType={'password'}
                                               secureTextEntry={true}
                                               autoFocus
                                               defaultValue={this.state.password}
                                               onChangeText={this.onChangePassword}
                                               style={{
                                                   backgroundColor: '#fff',
                                                   paddingHorizontal: 10,
                                                   paddingVertical: 5,
                                                   borderRadius: 2,
                                               }}
                                    />
                                </View>
                            </View>
                            <View style={{ marginBottom: 10 }}>
                                <View>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Mật khẩu mới</Text>
                                </View>
                                <View style={{ marginTop: 5 }}>
                                    <TextInput placeholder={'*********'}
                                               autoCompleteType={'password'}
                                               secureTextEntry={true}
                                               autoFocus
                                               defaultValue={this.state.newPassword}
                                               onChangeText={this.onChangeNewPassword}
                                               style={{
                                                   backgroundColor: '#fff',
                                                   paddingHorizontal: 10,
                                                   paddingVertical: 5,
                                                   borderRadius: 2,
                                               }}
                                    />
                                </View>
                            </View>
                            <View style={{ marginBottom: 10 }}>
                                <View>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Xác nhận mật khẩu mới</Text>
                                </View>
                                <View style={{ marginTop: 5 }}>
                                    <TextInput placeholder={'*********'}
                                               autoCompleteType={'password'}
                                               secureTextEntry={true}
                                               defaultValue={this.state.confirmNewPassword}
                                               onChangeText={this.onChangeConfirmNewPassword}
                                               autoFocus
                                               style={{
                                                   backgroundColor: '#fff',
                                                   paddingHorizontal: 10,
                                                   paddingVertical: 5,
                                                   borderRadius: 2,
                                               }}
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginTop: 20 }}>
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
                                    onPress={this.onPressChangePassword}
                                />
                            </View>

                        </View>

                    </View>}
                </ScrollView>
            </View>
        )
    }
}

export default ChangePassword