import React from 'react'
import { BackHandler, Image, ScrollView, StatusBar, Text, View } from 'react-native'
import { PropTypes } from 'prop-types'
import LoadingContainer from '../../Components/LoadingContainer'
import Colors from '../../Theme/Colors'
import contants from '../../Theme/Constants'

import completeImage from '../../Assets/Images/confirmation.png'
import { Button } from 'react-native-elements'
import { runAfter } from '../../Utils/asyncFunc'
import AppHeader from '../../Components/AppHeader'

class SearchResults extends React.Component {
  constructor(props) {
    super(props)
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
    this.state = {
      loading: true,
    }
  };

  componentDidMount() {
    runAfter(() => this.setState({ loading: false }), 200)
    // this.setState({ loading: false })
  };

  goBack = () => {
    this.props.navigation.goBack()
  }

  render() {
    const loading = this.state.loading
    const { navigation } = this.props
    const keyword = navigation.getParam('keyword')

    return (
      <View style={{ flex: 1, backgroundColor: Colors.mainBackgroundColor }}>

        <AppHeader onItemPress={this.goBack} title={"Search Results"} barStyle={'dark-content'}
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
              <Text>{keyword}</Text>
            </View>

          </View>}
        </ScrollView>
      </View>
    )
  }
}

export default SearchResults