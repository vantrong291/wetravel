import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { PropTypes } from 'prop-types'
import NotificationItem from '../../Components/NoficationItem'
import contants from '../../Theme/Constants'
import styles from './styles'
import { Text as EText } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import { PARALLAX_HEADER_HEIGHT, parallaxStyles, STICKY_HEADER_HEIGHT, window } from '../../Components/ParallaxConfig'
import Colors from '../../Theme/Colors'
import ActionSheet from 'react-native-actionsheet'

import { notifications } from '../../Data/notifications'

const cover = require('../../Assets/Images/notibg.png')
const resource = require('../../Assets/Images/noti.png')
const notiChoice = ['Đánh dấu đã đọc', 'Dừng nhận thông báo tương tự', 'Xóa thông báo', 'Hủy']
const unreadNotiChoice = ['Đánh dấu chưa đọc', 'Dừng nhận thông báo tương tự', 'Xóa thông báo', 'Hủy']

class Notifications extends React.Component {
    constructor(props) {
        super(props)
        // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state = {
            loading: true,
            refresh: false,
        }
    };

    componentDidMount() {
    }

    keyExtractor = (item, index) => index.toString()

    onSelectNotiOption = (index) => {
        if (index !== 3) {
            alert(notiChoice[index])
        }
    }

    onSelectUnreadNotiOption = (index) => {
        if (index !== 3) {
            alert(unreadNotiChoice[index])
        }
    }

    handleNotiOption = () => {
        this.NotiActionSheet.show()
    }

    handleUnreadNotiOption = () => {
        this.UnreadNotiActionSheet.show()
    }

    handleLinkTo = (name) => {
        // alert(name)
        if (name) this.props.navigation.navigate(name)
    }

    handleRefresh = () => {
        this.setState({ refresh: true })
        setTimeout(() => {
            this.setState({ refresh: false })
        }, 1000)
    }

    render() {
        const refresh = this.state.refresh
        return (
            <View style={styles.container}>
                <ParallaxScrollView
                    ref="ScrollView"
                    // backgroundColor="#fff"
                    backgroundColor={Colors.navbarColor}
                    headerBackgroundColor="#333"
                    stickyHeaderHeight={STICKY_HEADER_HEIGHT}
                    parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT - 50}
                    backgroundSpeed={10}
                    renderBackground={() => (
                        <View key="background">
                            <Image source={cover}
                                   style={{
                                       width: window.width,
                                       height: PARALLAX_HEADER_HEIGHT,
                                   }}/>
                        </View>
                    )}

                    renderForeground={() => (
                        <View key="parallax-header" style={[styles.floatArea, {
                            flexDirection: 'row',
                            paddingHorizontal: contants.padding,
                            paddingBottom: 10,
                        }]}>
                            <View style={{ width: '50%' }}>
                                <Image source={resource}
                                       style={{
                                           width: 120,
                                           height: 130,
                                       }}/>
                            </View>
                            <View style={{ width: '50%', justifyContent: 'center', paddingTop: 40 }}>
                                <Text style={{ color: '#fff', fontSize: 27, fontWeight: 'bold', textAlign: 'right' }}>Thông
                                    báo</Text>
                                <EText style={{ color: '#fff', textAlign: 'right' }}>Giúp bạn không bỏ lỡ bất kỳ sự kiện
                                    nào</EText>
                            </View>
                        </View>

                    )}

                    renderStickyHeader={() => (
                        <View>
                            <View key="sticky-header" style={parallaxStyles.stickySection}>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    color: '#fff',
                                    marginLeft: 15,
                                    marginBottom: 8,
                                }}>Notifications</Text>
                            </View>
                            <View key="fixed-header" style={parallaxStyles.fixedSection}>
                                <MaterialCommunityIcons name="format-align-top" style={parallaxStyles.fixedSectionText}
                                                        onPress={() => this.refs.ScrollView.scrollTo({ x: 0, y: 0 })}>
                                </MaterialCommunityIcons>
                            </View>
                        </View>
                    )}
                >
                    <SafeAreaView>
                        {/*<RefreshControl refreshing={refresh} onRefresh={this.handleRefresh}>*/}
                        <View style={{ marginBottom: 20 }}>
                            <View style={{
                                flexDirection: 'row',
                                paddingHorizontal: contants.padding,
                                paddingVertical: 10,
                            }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}>Mới nhất</Text>
                                <TouchableOpacity style={{ paddingTop: 4, marginLeft: 'auto' }}
                                                  onPress={() => alert('Đánh dấu là đã đọc')}>
                                    <Text style={{ fontSize: 14, color: '#3284c6' }}>Đánh dấu đã đọc</Text>
                                </TouchableOpacity>
                            </View>
                            {
                                notifications.filter(item => item.type === 'unread').map((item, index) => (
                                    <NotificationItem
                                        key={index}
                                        image={item.image}
                                        content={item.title}
                                        time={item.time}
                                        handlePress={() => this.handleLinkTo(item.linkTo)}
                                        onPressItemOption={this.handleNotiOption}/>
                                ))
                            }
                        </View>
                        <View>
                            <View style={{
                                flexDirection: 'row',
                                paddingHorizontal: contants.padding,
                                paddingBottom: 10,
                            }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}>Cũ hơn</Text>
                                {/*<TouchableHighlight style={{ paddingTop: 4, marginLeft: 'auto' }}>*/}
                                {/*/!*<Text style={{ fontSize: 14, color: '#3284c6' }}></Text>*!/*/}
                                {/*</TouchableHighlight>*/}
                            </View>
                            {
                                notifications.filter(item => item.type === 'read').map((item, index) => (
                                    <NotificationItem
                                        unread={false}
                                        key={index}
                                        image={item.image}
                                        content={item.title}
                                        time={item.time}
                                        handlePress={() => this.handleLinkTo(item.linkTo)}
                                        onPressItemOption={this.handleUnreadNotiOption}/>
                                ))
                            }
                        </View>
                        {/*</RefreshControl>*/}
                        <View>
                            <ActionSheet
                                ref={o => this.NotiActionSheet = o}
                                title={'Hành động'}
                                options={notiChoice}
                                cancelButtonIndex={3}
                                destructiveButtonIndex={2}
                                onPress={this.onSelectNotiOption}
                            />
                        </View>
                        <View>
                            <ActionSheet
                                ref={o => this.UnreadNotiActionSheet = o}
                                title={'Hành động'}
                                options={unreadNotiChoice}
                                cancelButtonIndex={3}
                                destructiveButtonIndex={2}
                                onPress={this.onSelectUnreadNotiOption}
                            />
                        </View>
                    </SafeAreaView>
                </ParallaxScrollView>
            </View>
        )
    }

}

export default Notifications