import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from 'react-native-animatable'
import { PropTypes } from 'prop-types'

import CustomButton from '../../Components/CustomButton'
import CustomTextInput from '../../Components/CustomTextInput'
import metrics from '../../Config/metrics'
import {runAfter} from '../../Utils/asyncFunc'
import {Config} from '../../Config'

export default class LoginForm extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onLoginPress: PropTypes.func.isRequired,
    onSignupLinkPress: PropTypes.func.isRequired
  }

  state = {
    email: '',
    password: '',
    fullName: '',
    isBtnLoading: false
  }

  hideForm = async () => {
    if (this.buttonRef && this.formRef && this.linkRef) {
      await Promise.all([
        this.buttonRef.zoomOut(200),
        this.formRef.fadeOut(300),
        this.linkRef.fadeOut(300)
      ])
    }
  }

  onLogin = (email, password) => {
    this.setState({isBtnLoading: true})
    runAfter(() => this.props.onLoginPress(email, password), Config.LOGIN_TIME);
  }

  render () {
    const { email, password } = this.state
    const { isLoading, onSignupLinkPress, onLoginPress } = this.props
    // const isValid = email !== '' && password !== ''
    const isValid = true
    return (
      <View style={styles.container}>
        <View style={styles.form} ref={(ref) => { this.formRef = ref }}>
          <CustomTextInput
            name={'email'}
            ref={(ref) => this.emailInputRef = ref}
            placeholder={'Địa chỉ email'}
            keyboardType={'email-address'}
            editable={!isLoading}
            returnKeyType={'next'}
            blurOnSubmit={false}
            withRef={true}
            onSubmitEditing={() => this.passwordInputRef.focus()}
            onChangeText={(value) => this.setState({ email: value })}
            isEnabled={!isLoading}
          />
          <CustomTextInput
            name={'password'}
            ref={(ref) => this.passwordInputRef = ref}
            placeholder={'Mật khẩu'}
            editable={!isLoading}
            returnKeyType={'done'}
            secureTextEntry={true}
            withRef={true}
            onChangeText={(value) => this.setState({ password: value })}
            isEnabled={!isLoading}
          />
        </View>
        <View style={styles.footer}>
          <View ref={(ref) => this.buttonRef = ref}>
            <CustomButton
              onPress={() => this.onLogin(email, password)}
              isEnabled={isValid}
              isLoading={this.state.isBtnLoading}
              buttonStyle={styles.loginButton}
              textStyle={styles.loginButtonText}
              text={'Đăng nhập'}
            />
          </View>
          <Text
            ref={(ref) => this.linkRef = ref}
            style={styles.signupLink}
            onPress={onSignupLinkPress}
            // animation={'fadeIn'}
            // duration={600}
            // delay={10}
          >
            {'Chưa có tài khoản?'}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: metrics.DEVICE_WIDTH * 0.1
  },
  form: {
    marginTop: 20
  },
  footer: {
    height: 100,
    justifyContent: 'center'
  },
  loginButton: {
    backgroundColor: 'white'
  },
  loginButtonText: {
    color: '#3E464D',
    fontWeight: 'bold'
  },
  signupLink: {
    color: 'rgba(255,255,255,0.6)',
    alignSelf: 'center',
    padding: 20
  }
})
