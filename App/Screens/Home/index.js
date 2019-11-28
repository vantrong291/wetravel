import React from 'react'
import { Image, ImageBackground, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { PropTypes } from 'prop-types'
import styles from './styles'
import { Text as EText } from 'react-native-elements'

import SearchComponent from '../../Components/SearchComponent'
import CardHorizontalFlatList from '../../Components/CardHorizontalFlatList'
import CardVerticalFlatList from '../../Components/CardVerticalFlatList'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import { PARALLAX_HEADER_HEIGHT, parallaxStyles, STICKY_HEADER_HEIGHT } from '../../Components/ParallaxConfig'
import Icon from 'react-native-vector-icons/Entypo'
import Colors from '../../Theme/Colors'
import LoadingContainer from '../../Components/LoadingContainer'
import AreaChoiceCard from '../../Components/AreaChoiceCard'

const cover = require('../../Assets/Images/home-cover.jpg')
const wave = require('../../Assets/Images/wave.png')
const logo = require('../../Assets/Images/wetravel@0,25x.png')

class Home extends React.Component {
    constructor(props) {
        super(props)
        // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state = {
            loading: true,
        }
    };

    componentDidMount() {
        this.setState({ loading: false })
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return
    // }

    goToTourDetail = (item) => {
        // console.log(item)
        this.props.navigation.navigate('TourDetail', { tour: item })
    }

    goToMore = (filter = '1') => {
        if(filter !== '1' && filter !== '2') {
            this.props.navigation.navigate('ListTours', {filter: filter})
        }
        else this.props.navigation.navigate('ListTours')
    }

    onSearching = (value = 'Ba Na Hill') => {
        this.props.navigation.navigate('SearchResults', { keyword: value })
    }

    render() {
        const { loading } = this.state
        return loading ? (<LoadingContainer height={278}/>) : (
            <View style={styles.container}>
                <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
                <ParallaxScrollView
                    ref="ScrollView"
                    // backgroundColor="#fff"
                    backgroundColor={Colors.navbarColor}
                    headerBackgroundColor="#333"
                    stickyHeaderHeight={STICKY_HEADER_HEIGHT}
                    parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT + 140}
                    backgroundSpeed={10}
                    renderBackground={() => (
                        <View style={{ backgroundColor: '#fff', height: PARALLAX_HEADER_HEIGHT + 140 }}>
                            <ImageBackground source={cover} style={[styles.cover]}>
                                <Image source={wave} style={styles.wave}/>
                            </ImageBackground>
                        </View>
                    )}

                    renderForeground={() => (
                        <View key="parallax-header" style={styles.floatArea}>
                            {/*<Image source={logo} style={{width: 171, height: 40, marginBottom: 20}}/>*/}
                            <EText h4 style={{ color: '#333' }}>Xin chào, Văn Trọng</EText>
                            <EText h4 style={{ color: '#333' }}>Tuần này bạn muốn đi đâu?</EText>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Icon name='location' color={Colors.navbarColor} size={18}/>
                                <Text style={{ paddingLeft: 10 }}>Hà Nội</Text>
                            </View>
                            <SearchComponent onSearching={this.onSearching}/>
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
                                }}>WeTravel</Text>
                            </View>
                            <View key="fixed-header" style={parallaxStyles.fixedSection}>
                                <MaterialCommunityIcons name="format-align-top" style={parallaxStyles.fixedSectionText}
                                                        onPress={() => this.refs.ScrollView.scrollTo({ x: 0, y: 0 })}>
                                </MaterialCommunityIcons>
                            </View>
                        </View>
                    )}

                    // renderFixedHeader={() => (
                    //   <View key="fixed-header" style={parallaxStyles.fixedSection}>
                    //     <MaterialCommunityIcons name="format-align-top" style={parallaxStyles.fixedSectionText}
                    //                             onPress={() => this.refs.ScrollView.scrollTo({x: 0, y: 0})}>
                    //     </MaterialCommunityIcons>
                    //   </View>
                    // )}
                >
                    <View style={styles.outerFLoat}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#333' }}>Khu vực yêu thích</Text>
                        </View>
                        <AreaChoiceCard onItemPress={this.goToMore}/>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#333' }}>Điểm đến hấp dẫn</Text>
                            <TouchableOpacity style={{ paddingTop: 4, marginLeft: 'auto' }} onPress={() => this.goToMore('1')}>
                                <Text style={{ fontSize: 14, color: '#3284c6' }}>Xem tất cả</Text>
                            </TouchableOpacity>
                        </View>
                        <CardHorizontalFlatList onItemPress={this.goToTourDetail}/>

                        <View style={{ flexDirection: 'row', marginTop: 30 }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#333' }}>Dành cho bạn</Text>
                            <TouchableOpacity style={{ paddingTop: 4, marginLeft: 'auto' }} onPress={() => this.goToMore('2')}>
                                <Text style={{ fontSize: 14, color: '#3284c6' }}>Xem tất cả</Text>
                            </TouchableOpacity>
                        </View>
                        <CardVerticalFlatList onItemPress={this.goToTourDetail}/>
                    </View>
                </ParallaxScrollView>
            </View>
        )
    }
}

export default Home