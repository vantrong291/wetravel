import React from 'react'
import { ScrollView, Text, View } from 'react-native'
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
import CommentComponent from '../../Components/CommentComponent'
import ActionSheet from 'react-native-actionsheet'

const shareOptions = ['Facebook', 'Twitter', 'Lotus', 'Hủy']
const commentActions = ['Báo cáo', 'Ẩn', 'Hủy']

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

    onSelectShareOption = (index) => {
        if (index !== 3) {
            alert(`Chia sẻ lên ${shareOptions[index]}`)
        }
    }

    handleShare = () => {
        this.ActionSheet.show()

    }

    onSelectCommentOption = (index) => {
        if (index !== 2) {
            alert(commentActions[index])
        }
    }

    handleCommentOptionShow = () => {
        this.CommentActionSheet.show()
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
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                        color: Colors.mainBackgroundColorTitle,
                                    }}>3.000.000 - 3.500.000 VND / người</Text>
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
                                <View style={{ flexDirection: 'row' }}>
                                    <Button
                                        icon={
                                            <Icon name="share-outline" size={22}
                                                  style={{ marginRight: 5, color: Colors.navbarTextColor }}/>
                                        }
                                        title="Chia sẻ"
                                        titleStyle={{ fontSize: 14 }}
                                        buttonStyle={{ backgroundColor: Colors.primary, borderRadius: 2, marginRight: 5 }}
                                        onPress={this.handleShare}
                                    />
                                    <Button
                                        icon={
                                            <Icon name="book-plus" size={22}
                                                  style={{ marginRight: 5, color: Colors.navbarTextColor }}/>
                                        }
                                        title="Đặt vé"
                                        titleStyle={{ fontSize: 14 }}
                                        buttonStyle={{ backgroundColor: Colors.success, borderRadius: 2 }}
                                        onPress={() => this.goTourOptionScreen()}
                                    />
                                </View>
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
                        <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#333' }}>Nhận xét và đánh giá</Text>
                        {/*<TouchableHighlight style={{ paddingTop: 4, marginLeft: 'auto' }}>*/}
                        {/*<Text style={{ fontSize: 14, color: '#3284c6' }}>Xem tất cả</Text>*/}
                        {/*</TouchableHighlight>*/}
                    </View>
                    <CommentComponent/>

                    {
                        comments.map((item, index) => (
                            <TourComment key={index} cmt={item} onShow={this.handleCommentOptionShow}/>
                        ))
                    }

                    <View>
                        <ActionSheet
                            ref={o => this.ActionSheet = o}
                            title={'Bạn muốn chia sẻ tới đâu?'}
                            options={shareOptions}
                            cancelButtonIndex={3}
                            // destructiveButtonIndex={2}
                            onPress={this.onSelectShareOption}
                        />
                    </View>
                    <View>
                        <ActionSheet
                            ref={o => this.CommentActionSheet = o}
                            title={'Hành động'}
                            options={commentActions}
                            cancelButtonIndex={2}
                            // destructiveButtonIndex={2}
                            onPress={this.onSelectCommentOption}
                        />
                    </View>

                </ScrollView>
            </View>
        )
    }
}

export default TourDetail