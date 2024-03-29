import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { PropTypes } from 'prop-types'
import ReviewListComponent from '../../Components/ReviewListComponent'
import styles from './styles'
import { Button, Text as EText } from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import { PARALLAX_HEADER_HEIGHT, parallaxStyles, STICKY_HEADER_HEIGHT, window } from '../../Components/ParallaxConfig'
import Colors from '../../Theme/Colors'
import { reviews } from '../../Data/reviews'
import ActionSheet from 'react-native-actionsheet'

const cover = require('../../Assets/Images/review-cover2.png')
const cover2 = require('../../Assets/Images/review-cover.jpg')
const resource = require('../../Assets/Images/texture.png')

const actions = ['Báo cáo', 'Hủy']
const shareOptions = ['Facebook', 'Twitter', 'Lotus', 'Hủy']

class Review extends React.Component {
    constructor(props) {
        super(props)
        // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state = {
            loading: true,
        }
    };

    componentDidMount() {
    }

    goReviewDetails = (reviewItem) => {
        this.props.navigation.navigate('ReviewDetail', { review: reviewItem })
    }

    keyExtractor = (item, index) => index.toString()

    onSelectOption = (index) => {
        if (index !== 1) {
            alert(actions[index])
        }
    }

    handleOptions = () => {
        this.PostActionSheet.show()

    }

    onSelectShareOption = (index) => {
        if (index !== 3) {
            alert(`Chia sẻ lên ${shareOptions[index]}`)
        }
    }

    handleShare = () => {
        this.ShareActionSheet.show()
    }

    render() {
        return (
            <View style={styles.container}>
                <ParallaxScrollView
                    ref="ScrollView"
                    // backgroundColor="#fff"
                    backgroundColor={Colors.navbarColor}
                    headerBackgroundColor="#333"
                    stickyHeaderHeight={STICKY_HEADER_HEIGHT}
                    parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
                    backgroundSpeed={10}
                    renderBackground={() => (
                        <View key="background" style={{ backgroundColor: '#fff' }}>
                            <Image source={cover2}
                                   style={{
                                       width: window.width,
                                       height: PARALLAX_HEADER_HEIGHT,
                                   }}/>
                        </View>
                    )}

                    renderForeground={() => (
                        <View key="parallax-header" style={styles.floatArea}>
                            <EText h4 style={{ color: '#fff' }}>Review của du khách</EText>
                            <EText style={{ color: '#fff' }}>Khám phá và hiểu rõ hơn về những địa điểm du lịch bạn quan
                                tâm</EText>
                            <Button
                                icon={
                                    <Icon
                                        name="edit"
                                        size={14}
                                        color="#333"
                                    />
                                }
                                title="&nbsp; Viết Review"
                                titleStyle={{ color: '#333', fontSize: 14, marginBottom: 3 }}
                                buttonStyle={styles.writeBtn}
                                onPress={() => this.props.navigation.navigate('ReviewEditor')}
                            />
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
                                }}>Bài viết Review</Text>
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
                    //           onPress={() => this.refs.ScrollView.scrollTo({x: 0, y: 0})}>
                    //     </MaterialCommunityIcons>
                    //
                    //   </View>
                    // )}
                >
                    <View style={{ backgroundColor: '#fff' }}>
                        {/*<ReviewListComponent reviewItem={reviews[0]}/>*/}
                        <FlatList
                            keyExtractor={this.keyExtractor}
                            data={reviews}
                            renderItem={({ item }) => <ReviewListComponent reviewItem={item}
                                                                           goReviewDetails={() => this.goReviewDetails(item)}
                                                                            onPressAction={this.handleOptions}
                                                                            onPressShare={this.handleShare}
                            />}
                            style={{ paddingTop: 15 }}
                        />

                        {/*<View style={{flex:1, backgroundColor: '#f3f3f3'}}>*/}
                            {/* Rest of the app comes ABOVE the action button component !*/}
                            {/*<ActionButton buttonColor="rgba(231,76,60,1)">*/}
                                {/*<ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>*/}
                                    {/*<Icon name="md-create" style={styles.actionButtonIcon} />*/}
                                {/*</ActionButton.Item>*/}
                                {/*<ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>*/}
                                    {/*<Icon name="md-notifications-off" style={styles.actionButtonIcon} />*/}
                                {/*</ActionButton.Item>*/}
                                {/*<ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>*/}
                                    {/*<Icon name="md-done-all" style={styles.actionButtonIcon} />*/}
                                {/*</ActionButton.Item>*/}
                            {/*</ActionButton>*/}
                        {/*</View>*/}

                    </View>
                    <View>
                        <ActionSheet
                            ref={o => this.PostActionSheet = o}
                            title={'Hành động'}
                            options={actions}
                            cancelButtonIndex={1}
                            // destructiveButtonIndex={2}
                            onPress={this.onSelectOption}
                        />
                    </View>
                    <View>
                        <ActionSheet
                            ref={o => this.ShareActionSheet = o}
                            title={'Bạn muốn chia sẻ tới đâu?'}
                            options={shareOptions}
                            cancelButtonIndex={3}
                            // destructiveButtonIndex={2}
                            onPress={this.onSelectShareOption}
                        />
                    </View>
                </ParallaxScrollView>
            </View>
        )
    }

}

export default Review