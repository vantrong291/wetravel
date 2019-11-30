import React from 'react'
import { Alert, Image, ScrollView, Text, TouchableOpacity, View, TextInput } from 'react-native'
import { PropTypes } from 'prop-types'
import LoadingContainer from '../../Components/LoadingContainer'
import Colors from '../../Theme/Colors'
import contants from '../../Theme/Constants'
import { runAfter } from '../../Utils/asyncFunc'
import AppHeader from '../../Components/AppHeader'
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Textarea from 'react-native-textarea'
import { Button, Rating } from 'react-native-elements'
import ActionSheet from 'react-native-actionsheet'

const cancelButtonIndex = 3

class ReviewEditor extends React.Component {
    constructor(props) {
        super(props)
        // this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
        this.state = {
            loading: true,
            content: '',
            destination: '',
            reviewSummary: ''
        }
    };

    componentDidMount() {
        // runAfter(() => this.setState({ loading: false }), 1000)
        this.setState({ loading: false })
    };

    handleChoosePhoto = () => {
        this.ActionSheet.show()

    }

    goBack = () => {
        if (this.state.content === '' && this.state.reviewSummary === '' && this.state.destination === '') this.props.navigation.goBack()
        else {
            Alert.alert(
                'Chưa hoàn tất',
                'Bạn chưa hoàn tất bài viết. Nếu bạn thoát, nội dung bài viết sẽ không được lưu lại, bạn có chắc chắn muốn thoát?',
                [
                    // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                    {
                        text: 'Hủy bỏ',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'Xác nhận rời', onPress: () => this.props.navigation.goBack() },
                ],
                { cancelable: true },
            )
        }
    }

    onChangeContent = (e) => {
        this.setState({ content: e })
    }

    onChangeDestination = (e) => {
        this.setState({ destination: e })
    }

    onChangeReviewSummary = (e) => {
        this.setState({ reviewSummary: e })
    }

    onSelectPhotoSource = (index) => {
        if (index !== 3) {
            alert('Bạn đã chọn lựa chọn số ' + (index + 1) + '. Tính năng này đang phát triển.. Chúng tôi sẽ sớm cập nhật trong các bản cập nhật tới.. Rất xin lối vì sự bất tiện này..')
        }
    }


    render() {
        const loading = this.state.loading
        return (
            <View style={{ flex: 1, backgroundColor: Colors.white }}>

                <AppHeader onItemPress={this.goBack} title={'Tạo bài viết'} barStyle={'dark-content'}
                           backgroundColor={Colors.white} textColor={Colors.mainBackgroundColorTitle}/>
                {/*<StatusBar translucent backgroundColor={Colors.mainBackgroundColor} barStyle="dark-content"/>*/}

                <ScrollView>
                    {loading && <LoadingContainer height={550}/>}
                    {!loading && <View style={{
                        paddingTop: 10,
                        paddingBottom: 10,
                        color: Colors.mainBackgroundColorTitle,
                        backgroundColor: Colors.white,
                        paddingHorizontal: contants.padding,
                    }}>
                        <View style={{
                            // height: 550,
                            // justifyContent: 'center',
                            // alignItems: 'center'
                        }}>
                            <View style={styles.userRow}>
                                <View style={{}}>
                                    <Image source={require('../../Assets/Images/Users/1.jpg')}
                                           style={{ width: 40, height: 40, borderRadius: 20 }}/>
                                </View>
                                <View style={styles.userColumn}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.userName}>{'Phạm Văn Trọng'}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon name={'check-circle-outline'} size={14}
                                              style={{ color: Colors.success }}/>
                                        <Text style={styles.confirmText}>{' Đã đi tour'}</Text>
                                    </View>
                                </View>
                                <View style={{ marginLeft: 'auto' }}>
                                    <TouchableOpacity>
                                        {/*<Text style={{ marginTop: 5, fontSize: 14, color: '#3284c6', fontWeight: 'bold' }}>Submit</Text>*/}
                                        {/*<MaterialCommunityIcons active name="send" size={26} style={{ marginTop: 5, color: '#3578e5' }}/>*/}
                                        {/*<Icon name={'dots-horizontal'} size={26} style={{ color: '#949aa8' }}/>*/}
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{marginVertical: 10}}>
                                <Rating showRating={false} imageSize={30} fractions={0} startingValue={4} />
                            </View>
                            <View style={{ marginTop: 0 }}>
                                <TextInput
                                    placeholder={'Địa điểm review...'}
                                    onChangeText={this.onChangeDestination}
                                    defaultValue={this.state.destination}
                                    placeholderTextColor={'#c7c7c7'}
                                    autoFocus
                                    autoCapitaliz={'words'}
                                />
                            </View>
                            <View style={{ marginTop: 0 }}>
                                <TextInput
                                    placeholder={'Tiêu đề review...'}
                                    placeholderTextColor={'#c7c7c7'}
                                    onChangeText={this.onChangeReviewSummary}
                                    defaultValue={this.state.reviewSummary}
                                    autoCapitaliz={'sentences'}
                                />
                            </View>
                            <View style={{ marginTop: 0 }}>
                                <Textarea
                                    containerStyle={styles.textareaContainer}
                                    style={styles.textarea}
                                    maxLength={10000}
                                    onChangeText={this.onChangeContent}
                                    defaultValue={this.state.content}
                                    placeholder={'Bạn đang nghĩ gì?'}
                                    placeholderTextColor={'#c7c7c7'}
                                    underlineColorAndroid={'transparent'}
                                    multiline
                                />
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity onPress={this.handleChoosePhoto}>
                                        <Icon name={'image-multiple'} size={26} style={{ color: '#949aa8' }}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ paddingTop: 4, marginLeft: 'auto' }}
                                                      onPress={() => this.goToMore('2')}>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ marginTop: 15 }}>
                                <Button
                                    title="Submit"
                                    titleStyle={{ fontSize: 14 }}
                                    buttonStyle={{
                                        width: '100%',
                                        paddingVertical: 8,
                                        backgroundColor: Colors.navbarColor,
                                        borderRadius: 2,
                                    }}
                                    containerStyle={{ width: '100%' }}
                                    onPress={() => alert('Bài review đang được đăng...')}
                                />
                            </View>
                            <View>
                                <ActionSheet
                                    ref={o => this.ActionSheet = o}
                                    title={'Bạn muốn lấy ảnh từ đâu?'}
                                    options={['Chọn từ Thư viện', 'Chụp ảnh mới', 'Chọn từ Google Photos', 'Hủy']}
                                    cancelButtonIndex={cancelButtonIndex}
                                    // destructiveButtonIndex={2}
                                    onPress={this.onSelectPhotoSource}
                                />
                            </View>

                        </View>
                    </View>}
                </ScrollView>
            </View>
        )
    }
}

export default ReviewEditor
