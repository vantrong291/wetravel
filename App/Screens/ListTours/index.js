import React from 'react'
import { Dimensions, FlatList, ScrollView, ScrollViewComponent, Text, TouchableHighlight, View } from 'react-native'
import { PropTypes } from 'prop-types'
import LoadingContainer from '../../Components/LoadingContainer'
import Colors from '../../Theme/Colors'
import contants from '../../Theme/Constants'
import AppHeader from '../../Components/AppHeader'
import { tourData } from '../../Data/tours'
import CardVerticalItem from '../../Components/CardVerticalFlatList'
import FullWidthCardItem from '../../Components/FullWidthCardItem'
import Icon from 'react-native-vector-icons/AntDesign'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

class ListTours extends React.Component {
    constructor(props) {
        super(props)
        // this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
        this.state = {
            loading: true,
            filter: '',
            tours: [],
            heading: ""
        }
    };

    componentDidMount() {
        let tours = tourData
        const { navigation } = this.props
        const filter = navigation.getParam('filter', null)
        if (filter !== '1' && filter !== '2') {
            this.setState({ filter: filter })
            this.setState({ heading: `Điểm đến hấp dẫn nhất ${filter}` })
            tours = tourData.filter((item) => item.continent === filter)

        }
        else if(filter === '1') {
            this.setState({ heading: `Điểm đến hấp dẫn nhất` })
            this.setState({ filter: "Điểm đến hấp dẫn" })
        }
        else if(filter === '2') {
            this.setState({ heading: `Điểm đến dành cho bạn` })
            this.setState({ filter: "Tour dành cho bạn" })
        }
        this.setState({ tours: tours })
        // runAfter(() => this.setState({ loading: false }), 2000)
        this.setState({ loading: false })
    };

    goBack = () => {
        this.props.navigation.goBack()
    }

    keyExtractor = (item, index) => index.toString()

    goToTourDetail = (item) => {
        // console.log(item)
        this.props.navigation.navigate('TourDetail', { tour: item })
    }

    render() {
        const loading = this.state.loading
        const filter = this.state.filter
        const tours = this.state.tours
        const heading = this.state.heading

        return (
            <View style={{ flex: 1, backgroundColor: Colors.mainBackgroundColor }}>

                <AppHeader onItemPress={this.goBack} title={filter} barStyle={'dark-content'}
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
                        <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#333' }}>{heading}</Text>
                        </View>
                        {
                            tours.length === 0 && (
                                <View style={{
                                    width: screenWidth - 30,
                                    height: screenHeight - 150
                                }}>
                                    <View style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Icon name={'warning'} size={22} style={{ color: '#949aa8'}}/>
                                        <Text style={{color: "#949aa8", fontSize: 12, marginTop: 5}}>Danh sách trống</Text>
                                    </View>
                                </View>
                            )
                        }
                        {
                            tours.length > 0 && (
                                <FlatList
                                    keyExtractor={this.keyExtractor}
                                    data={tours}
                                    renderItem={({ item }) => <FullWidthCardItem item={item} onItemPress={this.goToTourDetail}
                                        // style={{paddingTop: 15}}
                                    />}
                                />
                            )
                        }
                    </View>}
                </ScrollView>
            </View>
        )
    }
}

export default ListTours