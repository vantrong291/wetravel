import React from 'react'
import { ScrollView, Text, TouchableHighlight, View } from 'react-native'
import { PropTypes } from 'prop-types'
import AppHeader from '../../Components/AppHeader'
import TourPhotoCarousel from '../../Components/TourPhotoCarousel'
import { runAfter } from '../../Utils/asyncFunc'
import LoadingContainer from '../../Components/LoadingContainer'
import Constants from '../../Theme/Constants'
import RateComponent from '../../Components/RateComponent'
import TourComment from '../../Components/TourComment'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../../Theme/Colors'
import { comments } from '../../Data/comments'

class TourDetail extends React.Component {
    constructor(props) {
        super(props)
        // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state = {
            loading: true,
            selectedItems: [],
        }
    };

    componentDidMount() {
        runAfter(() => this.setState({ loading: false }), 200)
    };

    goBack = () => {
        this.props.navigation.goBack()
    }

    goTourOptionScreen = () => {
        const { navigation } = this.props
        const tour = navigation.getParam('tour')
        this.props.navigation.navigate('TourOptions', { tour: tour })
    }

    render() {
        const { navigation } = this.props
        const tour = navigation.getParam('tour')
        const title = tour.destination
        const country = tour.country
        const continents = tour.continent
        const { loading } = this.state

        return (
            <View style={{ flex: 1, backgroundColor: Colors.mainBackgroundColor }}>
                <AppHeader onItemPress={this.goBack} title={title} barStyle={'dark-content'}
                           backgroundColor={Colors.mainBackgroundColor} textColor={Colors.mainBackgroundColorTitle}/>
                <ScrollView>
                    {loading && <LoadingContainer height={278}/>}
                    {!loading && <TourPhotoCarousel data={tour.images}/>}
                    <View style={{ paddingHorizontal: Constants.padding, paddingBottom: 30 }}>
                        <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                            <View>
                                <RateComponent rate={tour.rating}/>
                            </View>
                            <View style={{ marginLeft: 'auto' }}>
                                <Text
                                    style={{
                                        marginBottom: 0,
                                        fontSize: 18,
                                        fontWeight: 'bold',
                                        color: Colors.mainBackgroundColorTitle,
                                    }}>30
                                    - 80$ per seat</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Text
                                    style={{
                                        marginBottom: 0,
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        color: Colors.mainBackgroundColorTitle,
                                    }}>
                                    {title}
                                </Text>
                                <Text style={{ marginBottom: 5, fontSize: 12 }}>
                                    {country}, {continents}
                                </Text>
                            </View>
                            <View style={{ marginLeft: 'auto' }}>
                                <Button
                                    icon={
                                        <Icon name="book-plus" size={22}
                                              style={{ marginRight: 5, color: Colors.navbarTextColor }}/>
                                    }
                                    title="Book this tour"
                                    titleStyle={{ fontSize: 14 }}
                                    buttonStyle={{ backgroundColor: Colors.success, borderRadius: 2 }}
                                    onPress={() => this.goTourOptionScreen()}
                                />
                            </View>
                        </View>

                        <Text style={{
                            textAlign: 'justify',
                            fontSize: 16,
                            marginTop: 10,
                            color: Colors.mainBackgroundColorNormalText,
                        }}>
                            {tour.introduce}
                        </Text>
                        {/*<Text style={{*/}
                        {/*textAlign: 'justify',*/}
                        {/*fontSize: 16,*/}
                        {/*marginTop: 10,*/}
                        {/*color: Colors.mainBackgroundColorNormalText,*/}
                        {/*}}>*/}
                        {/*{tour.introduce}*/}
                        {/*</Text>*/}
                    </View>
                    <View style={{ flexDirection: 'row', paddingHorizontal: Constants.padding, marginBottom: 20 }}>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#333' }}>Comments and Rates</Text>
                        <TouchableHighlight style={{ paddingTop: 4, marginLeft: 'auto' }}>
                            <Text style={{ fontSize: 14, color: '#3284c6' }}>Xem tất cả</Text>
                        </TouchableHighlight>
                    </View>

                    {
                        comments.map((item, index) => (
                            <TourComment key={index} cmt={item}/>
                        ))
                    }

                </ScrollView>
            </View>
        )
    }
}

export default TourDetail