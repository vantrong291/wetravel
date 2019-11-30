import React from 'react'
import { BackHandler, Image, ScrollView, StatusBar, Text, View } from 'react-native'
import { PropTypes } from 'prop-types'
import LoadingContainer from '../../Components/LoadingContainer'
import Colors from '../../Theme/Colors'
import contants from '../../Theme/Constants'
import AppHeader from '../../Components/AppHeader'

import completeImage from '../../Assets/Images/confirmation.png'
import { Button, CheckBox } from 'react-native-elements'
import { runAfter } from '../../Utils/asyncFunc'

class Settings extends React.Component {
  constructor(props) {
    super(props)
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
    this.state = {
      loading: true,
      enableNoti: true,
      enableEmail: true,
      enableStatistic: false
    }
  };

  componentDidMount() {
    // runAfter(() => this.setState({ loading: false }), 2000)
    this.setState({ loading: false })
  };

  goBack = () => {
    this.props.navigation.goBack()
  }

  render() {
    const loading = this.state.loading
    return (
      <View style={{ flex: 1, backgroundColor: Colors.mainBackgroundColor }}>

        <AppHeader onItemPress={this.goBack} title={"Cài dặt"} barStyle={'dark-content'}
        backgroundColor={Colors.mainBackgroundColor} textColor={Colors.mainBackgroundColorTitle}/>
        {/*<StatusBar translucent backgroundColor={Colors.mainBackgroundColor} barStyle="dark-content"/>*/}

        <ScrollView>
          {loading && <LoadingContainer height={550}/>}
          {!loading && <View style={{
            marginTop: 10,
            paddingBottom: 10,
            color: Colors.mainBackgroundColorTitle,
            paddingHorizontal: 5,
          }}>
            <View style={{}}>
              <View>
                <CheckBox
                    title='Nhận thông báo ứng dụng'
                    checked={this.state.enableNoti}
                    onPress={() => this.setState({enableNoti: !this.state.enableNoti})}
                />
              </View>
              <View>
                <CheckBox
                    title='Nhận thông báo Email'
                    checked={this.state.enableEmail}
                    onPress={() => this.setState({enableEmail: !this.state.enableEmail})}
                />
              </View>
              <View>
                <CheckBox
                    title='Gửi dữ liệu phân tích'
                    checked={this.state.enableStatistic}
                    onPress={() => this.setState({enableStatistic: !this.state.enableStatistic})}
                />
              </View>
            </View>

          </View>}
        </ScrollView>
      </View>
    )
  }
}

export default Settings