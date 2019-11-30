import React from 'react'
import { Dimensions, FlatList, ScrollView, StatusBar, Text, TextInput, View } from 'react-native'
import { PropTypes } from 'prop-types'
import LoadingContainer from '../../Components/LoadingContainer'
import Colors from '../../Theme/Colors'
import contants from '../../Theme/Constants'
import styles from './styles'
import TouchableScale from 'react-native-touchable-scale'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { tourData } from '../../Data/tours'
import CardVerticalItem from '../../Components/CardVerticalItem'
import Icon from 'react-native-vector-icons/AntDesign'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

class SearchResults extends React.Component {
    constructor(props) {
        super(props)
        // this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
        this.state = {
            loading: true,
            keyword: '',
            tmpKeyword: '',
            tourResults: [],
        }
    };

    componentDidMount() {
        const { navigation } = this.props
        const keyword = navigation.getParam('keyword')
        this.setState({ keyword: keyword, tmpKeyword: keyword })
        const tours = tourData.filter(item => item.destination.includes(keyword))
        this.setState({ tourResults: tours })
        this.setState({ loading: false })
        // runAfter(() => this.setState({ loading: false }), 1000)
    };

    onChangeText = (text) => {
        this.setState({ keyword: text })
    }

    goBack = () => {
        this.props.navigation.goBack()
    }

    goToTourDetail = (item) => {
        // console.log(item)
        this.props.navigation.navigate('TourDetail', { tour: item })
    }

    onSearching = () => {
        this.setState({ loading: true })
        const keyword = this.state.keyword
        const tours = tourData.filter(item => item.destination.includes(keyword))
        this.setState({ tourResults: tours })
        this.setState({ tmpKeyword: keyword })
        this.setState({ loading: false })
        // runAfter(() => this.setState({ loading: false, tmpKeyword: keyword }), 1000)
    }

    keyExtractor = (item, index) => index.toString()

    render() {
        const loading = this.state.loading
        const { navigation } = this.props
        const keyword = navigation.getParam('keyword')
        const tours = this.state.tourResults

        return (
            <View style={{ flex: 1, backgroundColor: Colors.mainBackgroundColor }}>

                {/*<AppHeader onItemPress={this.goBack} title={"Search Results"} barStyle={'dark-content'}*/}
                {/*backgroundColor={Colors.mainBackgroundColor} textColor={Colors.mainBackgroundColorTitle}/>*/}
                <StatusBar translucent backgroundColor={Colors.mainBackgroundColor} barStyle="dark-content"/>
                <View style={{ paddingHorizontal: contants.padding, flexDirection: 'row', marginTop: 30 }}>
                    <View style={styles.backButton}>
                        <TouchableScale
                            activeScale={0.9}
                            friction={90}
                            tension={100}
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Ionicons active name="md-arrow-round-back" size={30}
                                      style={{ color: Colors.mainBackgroundColorTitle }}/>
                        </TouchableScale>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.searchInput}>
                            <TextInput placeholder="Eg: Vịnh Hạ Long, Hoi An,..."
                                       style={{ paddingTop: 0, paddingBottom: 8, width: '100%' }}
                                       placeholderTextColor={'#8096a0'}
                                       onChangeText={text => this.onChangeText(text)}
                                       value={this.state.keyword}
                            />
                            <TouchableScale
                                activeScale={0.5}
                                friction={90}
                                tension={100}
                                onPress={this.onSearching}
                                style={{ marginLeft: 'auto' }}>
                                <MaterialCommunityIcons active name="send" size={26}
                                                        style={{ paddingBottom: 5, color: '#3578e5' }}/>
                            </TouchableScale>
                        </View>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    paddingHorizontal: contants.padding,
                    alignItems: 'center',
                    height: 50,
                }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: Colors.mainBackgroundColorTitle }}>Search
                        results for "{this.state.tmpKeyword}"</Text>
                </View>
                <ScrollView>
                    {loading && <LoadingContainer height={550}/>}
                    {!loading && <View style={{
                        marginTop: 0,
                        paddingBottom: 10,
                        color: Colors.mainBackgroundColorTitle,
                        paddingHorizontal: contants.padding,
                    }}>
                        {
                            tours.length === 0 && (
                                <View style={{
                                    width: screenWidth - 30,
                                    height: screenHeight - 150,
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
                                        <Icon name={'warning'} size={22} style={{ color: '#949aa8' }}/>
                                        <Text style={{ color: '#949aa8', fontSize: 12, marginTop: 5 }}>Danh sách
                                            trống</Text>
                                    </View>
                                </View>
                            )
                        }
                        {
                            tours.length > 0 && (
                                <View style={{}}>
                                    <FlatList
                                        keyExtractor={this.keyExtractor}
                                        data={this.state.tourResults}
                                        renderItem={({ item }) => <CardVerticalItem item={item}
                                                                                    onItemPress={this.goToTourDetail}
                                            // style={{paddingTop: 15}}
                                        />}
                                    />
                                </View>)
                        }
                    </View>}
                </ScrollView>
            </View>
        )
    }
}

export default SearchResults