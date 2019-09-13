import React from 'react'
import { Text, TouchableHighlight, View, ScrollView } from 'react-native'
import { PropTypes } from 'prop-types'
import styles from './styles'
import NotificationItem from '../../Components/NoficationItem'
import { RANGE } from '../../Utils/range'
import contants from '../../Theme/Constants'

class Notifications extends React.Component {
  constructor(props) {
    super(props)
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      loading: true,
    }
  };

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={{marginBottom: 20}}>
          <View style={{ flexDirection: 'row', paddingHorizontal: contants.padding, paddingBottom: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}>News</Text>
            <TouchableHighlight style={{ paddingTop: 4, marginLeft: 'auto' }}>
              <Text style={{ fontSize: 14, color: '#3284c6' }}>Mark as read</Text>
            </TouchableHighlight>
          </View>
          {
            RANGE(1, 5).map((item, index) => (
              <NotificationItem/>
            ))
          }
        </View>
        <View>
          <View style={{ flexDirection: 'row', paddingHorizontal: contants.padding, paddingBottom: 10}}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}>Older</Text>
            {/*<TouchableHighlight style={{ paddingTop: 4, marginLeft: 'auto' }}>*/}
              {/*/!*<Text style={{ fontSize: 14, color: '#3284c6' }}></Text>*!/*/}
            {/*</TouchableHighlight>*/}
          </View>
          {
            RANGE(1, 5).map((item, index) => (
              <NotificationItem unread={false}/>
            ))
          }
        </View>
        </ScrollView>
      </View>
    )
  }
}

export default Notifications