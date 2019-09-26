import React from 'react'
import { Image, ScrollView, StatusBar, Text, View } from 'react-native'
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
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      loading: true,
    }
  };

  componentDidMount() {
    runAfter(() => this.setState({ loading: false }), 2000)
    // this.setState({ loading: false })
  };

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
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: Colors.mainBackgroundColorTitle }}>Congratulations!</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{color: Colors.mainBackgroundColorNormalText}}>Your booking is completed</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{color: Colors.mainBackgroundColorNormalText}}>We will contact you soon!</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
              <Button
                // icon={
                //   <Icon name="book-plus" size={20} style={{ marginRight: 5, color: Colors.navbarTextColor }}/>
                // }
                title="Go Home"
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