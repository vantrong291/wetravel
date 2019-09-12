import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import styles from './styles'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";


class AddCard extends React.Component {
  constructor(props) {
    super(props);
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      loading: true,
    };
  };
  componentDidMount() {
  }

  _onChange = form => console.log(form);

  render() {
    return (
      <View style={styles.container}>
        <CreditCardInput onChange={this._onChange} />
      </View>
    )
  }

  }

export default AddCard;