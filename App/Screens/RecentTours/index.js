import React from 'react'
import { BackHandler, Image, ScrollView, StatusBar, Text, View } from 'react-native'
import { PropTypes } from 'prop-types'
import LoadingContainer from '../../Components/LoadingContainer'
import Colors from '../../Theme/Colors'
import contants from '../../Theme/Constants'
import AppHeader from '../../Components/AppHeader'

import completeImage from '../../Assets/Images/confirmation.png'
import { Button } from 'react-native-elements'
import { runAfter } from '../../Utils/asyncFunc'

class RecentTours extends React.Component {
  constructor(props) {
    super(props)
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
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

  render() {
    const loading = this.state.loading
    return (
      <View style={{ flex: 1, backgroundColor: Colors.mainBackgroundColor }}>

        <AppHeader onItemPress={this.goBack} title={"Recent Tours"} barStyle={'dark-content'}
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
            <View style={{ height: 550, justifyContent: 'center', alignItems: 'center' }}>

            </View>

          </View>}
        </ScrollView>
      </View>
    )
  }
}

export default RecentTours