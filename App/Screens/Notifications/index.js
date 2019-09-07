import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import styles from './styles'

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      loading: true,
    };
  };
  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Notifications</Text>
      </View>
    )
  }

  }

export default Notifications;