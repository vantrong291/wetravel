import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { PropTypes } from 'prop-types'
import LoadingContainer from '../../Components/LoadingContainer'
import Colors from '../../Theme/Colors'
import contants from '../../Theme/Constants'
import { runAfter } from '../../Utils/asyncFunc'
import AppHeader from '../../Components/AppHeader'
import styles from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Textarea from 'react-native-textarea';

class ReviewEditor extends React.Component {
    constructor(props) {
        super(props)
        // this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
        this.state = {
            loading: true,
            content: ''
        }
    };

    componentDidMount() {
        runAfter(() => this.setState({ loading: false }), 1000)
        // this.setState({ loading: false })
    };

    goBack = () => {
        this.props.navigation.goBack()
    }

    onChange = (e) => {
        this.setState({content: e})
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
                            height: 550,
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
                                        <Icon name={'dots-horizontal'} size={26} style={{ color: '#949aa8' }}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{marginTop: 0}}>
                                <Textarea
                                    containerStyle={styles.textareaContainer}
                                    style={styles.textarea}
                                    autoFocus
                                    maxLength={10000}
                                    onChangeText={this.onChange}
                                    defaultValue={this.state.content}
                                    placeholder={'Bạn đang nghĩ gì?'}
                                    placeholderTextColor={'#c7c7c7'}
                                    underlineColorAndroid={'transparent'}
                                    multiline
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
