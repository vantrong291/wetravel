import React from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'
import { PropTypes } from 'prop-types'
import LoadingContainer from '../../Components/LoadingContainer'
import Colors from '../../Theme/Colors'
import contants from '../../Theme/Constants'
import AppHeader from '../../Components/AppHeader'
import { runAfter } from '../../Utils/asyncFunc'
import FullWidthCardItem from '../../Components/FullWidthCardItem'
import { tourData } from '../../Data/tours'

class ComingTours extends React.Component {
    constructor(props) {
        super(props)
        // this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
        this.state = {
            loading: true,
        }
    };

    componentDidMount() {
        // runAfter(() => this.setState({ loading: false }), 2000)
        this.setState({ loading: false })
    };

    keyExtractor = (item, index) => index.toString()

    goToTourDetail = (item) => {
        // console.log(item)
        this.props.navigation.navigate('RecentTourDetail', { tour: item })
    }

    goBack = () => {
        this.props.navigation.goBack()
    }

    render() {
        const loading = this.state.loading
        return (
            <View style={{ flex: 1, backgroundColor: Colors.mainBackgroundColor }}>

                <AppHeader onItemPress={this.goBack} title={'Tour sắp tới'} barStyle={'dark-content'}
                           backgroundColor={Colors.mainBackgroundColor} textColor={Colors.mainBackgroundColorTitle}/>
                {/*<StatusBar translucent backgroundColor={Colors.mainBackgroundColor} barStyle="dark-content"/>*/}

                <ScrollView>
                    {loading && <LoadingContainer height={550}/>}
                    {!loading && <View style={{
                        marginTop: 10,
                        paddingBottom: 10,
                        color: Colors.mainBackgroundColorTitle,
                        paddingHorizontal: contants.padding,
                    }}>
                        <View>
                            <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#333' }}>Các tour sắp khởi hành của bạn</Text>
                            </View>
                            <FlatList
                                keyExtractor={this.keyExtractor}
                                data={tourData.filter(item => item.destination.includes('al'))}
                                renderItem={({ item }) => <FullWidthCardItem item={item}
                                                                             onItemPress={this.goToTourDetail}
                                    // style={{paddingTop: 15}}
                                />}
                            />
                        </View>

                    </View>}
                </ScrollView>
            </View>
        )
    }
}

export default ComingTours