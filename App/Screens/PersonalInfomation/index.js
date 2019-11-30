import React from 'react'
import { Alert, Image, ScrollView, Text, TextInput, View } from 'react-native'
import { PropTypes } from 'prop-types'
import LoadingContainer from '../../Components/LoadingContainer'
import Colors from '../../Theme/Colors'
import contants from '../../Theme/Constants'
import AppHeader from '../../Components/AppHeader'
import { Button, Text as EText } from 'react-native-elements'

const avatar = require('../../Assets/Images/ava.jpg')

class PersonalInfomation extends React.Component {
    constructor(props) {
        super(props)
        // this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
        this.state = {
            loading: true,
            username: 'vantrong291',
            email: 'vantrong291@gmail.com',
            fullname: 'Phạm Văn Trọng',
            city: "Hà Nội",
            bio: "Wherever you go, go with all your heart"
        }
    };

    componentDidMount() {
        // runAfter(() => this.setState({ loading: false }), 2000)
        this.setState({ loading: false })
    };

    goBack = () => {
        this.props.navigation.goBack()
    }

    onPressSaveInfo = () => {
        Alert.alert(
            'Thành công',
            'Cập nhật thông tin cá nhân thành công!',
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

                <AppHeader onItemPress={this.goBack} title={'Thông tin cá nhân'} barStyle={'dark-content'}
                           backgroundColor={Colors.mainBackgroundColor} textColor={Colors.mainBackgroundColorTitle}/>
                {/*<StatusBar translucent backgroundColor={Colors.mainBackgroundColor} barStyle="dark-content"/>*/}

                <ScrollView>
                    {loading && <LoadingContainer height={550}/>}
                    {!loading && <View style={{
                        marginTop: 20,
                        paddingBottom: 10,
                        color: Colors.mainBackgroundColorTitle,
                        paddingHorizontal: contants.padding,
                    }}>
                        <View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={avatar} style={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: 40,
                                        borderWidth: 3,
                                        borderColor: '#fff',
                                        marginBottom: 10,
                                    }}/>
                                    {/*<View style={{ flexDirection: 'row', marginLeft: 'auto' }}>*/}
                                    {/*<TouchableScale*/}
                                    {/*activeScale={0.8}*/}
                                    {/*friction={90}*/}
                                    {/*tension={100}*/}
                                    {/*onPress={this.onLogout}*/}
                                    {/*style={{ marginTop: 10 }}>*/}
                                    {/*<MaterialCommunityIcons name={'logout-variant'} size={26}*/}
                                    {/*style={{ color: '#fff' }}/>*/}
                                    {/*</TouchableScale>*/}
                                    {/*</View>*/}
                                </View>
                                <EText h4 style={{ color: Colors.mainBackgroundColorTitle }}>Phạm Văn Trọng</EText>
                                <EText style={{ color: Colors.mainBackgroundColorTitle, marginTop: 5 }}>"Wherever you go, go with all your heart"</EText>
                            </View>
                            <View style={{ marginBottom: 10, marginTop: 30 }}>
                                <View>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Tên người dùng</Text>
                                </View>
                                <View style={{ marginTop: 5 }}>
                                    <TextInput placeholder={'Tên người dùng'}
                                               defaultValue={this.state.username}
                                               // onChangeText={this.onChangePassword}
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
                                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Tên đầy đủ</Text>
                                </View>
                                <View style={{ marginTop: 5 }}>
                                    <TextInput placeholder={'Nguyễn Văn A,...'}
                                               defaultValue={this.state.fullname}
                                        // onChangeText={this.onChangePassword}
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
                                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Email</Text>
                                </View>
                                <View style={{ marginTop: 5 }}>
                                    <TextInput placeholder={'abc@xyz.com'}
                                               defaultValue={this.state.email}
                                        // onChangeText={this.onChangePassword}
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
                                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Địa chỉ</Text>
                                </View>
                                <View style={{ marginTop: 5 }}>
                                    <TextInput placeholder={'144, Xuân Thủy, Hà Nội, ...'}
                                               defaultValue={this.state.city}
                                        // onChangeText={this.onChangePassword}
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
                                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Châm ngôn du lịch</Text>
                                </View>
                                <View style={{ marginTop: 5 }}>
                                    <TextInput placeholder={'Bạn nghĩ gì về du lịch?'}
                                               defaultValue={this.state.bio}
                                        // onChangeText={this.onChangePassword}
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
                                    title="Lưu lại"
                                    titleStyle={{ fontSize: 15 }}
                                    buttonStyle={{
                                        width: '100%',
                                        paddingVertical: 10,
                                        backgroundColor: Colors.navbarColor,
                                        borderRadius: 2,
                                    }}
                                    containerStyle={{ width: '100%' }}
                                    onPress={this.onPressSaveInfo}
                                />
                            </View>
                        </View>
                    </View>}
                </ScrollView>
            </View>
        )
    }
}

export default PersonalInfomation