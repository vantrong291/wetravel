import React from 'react'
import { ScrollView, View } from 'react-native'
import { PropTypes } from 'prop-types'
import { CreditCardInput } from 'react-native-credit-card-input'
import { runAfter } from '../../Utils/asyncFunc'
import Colors from '../../Theme/Colors'
import AppHeader from '../../Components/AppHeader'
import contants from '../../Theme/Constants'
import LoadingContainer from '../../Components/LoadingContainer'


class AddCard extends React.Component {
  constructor(props) {
    super(props)
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      loading: true,
    }
  };

  componentDidMount() {
    runAfter(() => this.setState({ loading: false }), 500)
    // this.setState({ loading: false })
  };

  _onChange = form => console.log(form)


  goBack = () => {
    this.props.navigation.goBack()
  }

  render() {
    const loading = this.state.loading
    return (
      <View style={{ flex: 1, backgroundColor: Colors.mainBackgroundColor }}>

        <AppHeader onItemPress={this.goBack} title={'Add Credit Card'} barStyle={'dark-content'}
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
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <CreditCardInput onChange={this._onChange}/>
            </View>

          </View>}
        </ScrollView>
      </View>
    )
  }
}

export default AddCard