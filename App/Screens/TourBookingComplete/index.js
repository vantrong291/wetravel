import React from 'react'
import { BackHandler, Image, ScrollView, StatusBar, Text, View } from 'react-native'
import { PropTypes } from 'prop-types'
import LoadingContainer from '../../Components/LoadingContainer'
import Colors from '../../Theme/Colors'
import contants from '../../Theme/Constants'

import completeImage from '../../Assets/Images/confirmation.png'
import { Button } from 'react-native-elements'
import { runAfter } from '../../Utils/asyncFunc'

class TourBookingComplete extends React.Component {
  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
    this.state = {
      loading: true,
    }
  };

  componentDidMount() {
    runAfter(() => this.setState({ loading: false }), 1000)
    // this.setState({ loading: false })
  };

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick)
    // this._isMounted = false;
  }

  async handleBackButtonClick() {
  }

  goBack = () => {
    this.props.navigation.goBack()
  }

  goHome = () => {
    this.props.navigation.navigate('Main')
  }

  bookingTour = () => {
    alert('booking successfully')
  }

  render() {
    const loading = this.state.loading
    return (
      <View style={{ flex: 1, backgroundColor: Colors.mainBackgroundColor }}>

        {/*<AppHeader onItemPress={this.goBack} title={title} barStyle={'dark-content'}*/}
        {/*backgroundColor={Colors.mainBackgroundColor} textColor={Colors.mainBackgroundColorTitle}/>*/}
        <StatusBar translucent backgroundColor={Colors.mainBackgroundColor} barStyle="dark-content"/>

        <ScrollView>
          {loading && <LoadingContainer height={550}/>}
          {!loading && <View style={{
            marginTop: 20,
            paddingBottom: 10,
            color: Colors.mainBackgroundColorTitle,
            paddingHorizontal: contants.padding,
          }}>
            <View style={{ height: 550, justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={completeImage} style={{ width: 220, height: 150 }}/>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginBottom: 10,
                  color: Colors.mainBackgroundColorTitle,
                }}>Đặt vé thành công!</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: Colors.mainBackgroundColorNormalText }}>Quá trình đặt vé hoàn tất</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: Colors.mainBackgroundColorNormalText, textAlign: 'center' }}>Chúng tôi sẽ liên hệ cho bạn sớm nhất có thể.</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: Colors.mainBackgroundColorNormalText, textAlign: 'center' }}>Xin chân thành cảm ơn!</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
              <Button
                // icon={
                //   <Icon name="book-plus" size={20} style={{ marginRight: 5, color: Colors.navbarTextColor }}/>
                // }
                title="Trở về Màn hình chính"
                titleStyle={{ fontSize: 15 }}
                buttonStyle={{
                  width: '100%',
                  paddingVertical: 10,
                  backgroundColor: Colors.navbarColor,
                  borderRadius: 2,
                }}
                containerStyle={{ width: '100%' }}
                onPress={() => this.goHome()}
              />
            </View>
            {/*<View style={{ flexDirection: 'row', marginTop: 30 }}>*/}
            {/*<Button*/}
            {/*// icon={*/}
            {/*//   <Icon name="book-plus" size={20} style={{ marginRight: 5, color: Colors.navbarTextColor }}/>*/}
            {/*// }*/}
            {/*title="Go Home"*/}
            {/*titleStyle={{ fontSize: 15, color: Colors.mainBackgroundColorTitle }}*/}
            {/*buttonStyle={{*/}
            {/*width: '100%',*/}
            {/*paddingVertical: 10,*/}
            {/*backgroundColor: Colors.navbarTextColor,*/}
            {/*borderRadius: 2,*/}
            {/*}}*/}
            {/*containerStyle={{ width: '100%' }}*/}
            {/*onPress={() => this.goHome()}*/}
            {/*/>*/}
            {/*</View>*/}

          </View>}
        </ScrollView>
      </View>
    )
  }
}

export default TourBookingComplete