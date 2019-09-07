import React, { Component } from 'react'
import { Dimensions, Image, Platform, StyleSheet, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'
import { ParallaxImage } from 'react-native-snap-carousel'

const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: '#B721FF',
  background2: '#21D4FD',
}

const IS_IOS = Platform.OS === 'ios'
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100
  return Math.round(value)
}

const slideHeight = viewportHeight * 0.36
const slideWidth = wp(75)
const itemHorizontalMargin = wp(2)

export const sliderWidth = viewportWidth
export const itemWidth = slideWidth + itemHorizontalMargin * 2

const entryBorderRadius = 8

const styles = StyleSheet.create({
  slideInnerContainer: {
    width: itemWidth,
    height: slideHeight,
    paddingHorizontal: itemHorizontalMargin,
    paddingBottom: 18, // needed for shadow
  },
  shadow: {
    position: 'absolute',
    top: 0,
    left: itemHorizontalMargin,
    right: itemHorizontalMargin,
    bottom: 18,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    borderRadius: entryBorderRadius,
  },
  imageContainer: {
    flex: 1,
    marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: entryBorderRadius,
  },
  imageContainerEven: {
    backgroundColor: colors.black,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: IS_IOS ? entryBorderRadius : 0,
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
  },
  // image's border radius is buggy on iOS; let's hack it!
  radiusMask: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: entryBorderRadius,
    backgroundColor: 'white',
  },
  radiusMaskEven: {
    backgroundColor: colors.black,
  },
})


export default class SliderEntry extends Component {
  static propTypes = {
    data: PropTypes.string.isRequired,
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object,
  }

  get image() {
    const { data , parallax, parallaxProps, even } = this.props

    return parallax ? (
      <ParallaxImage
        source={{ uri: data }}
        containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
        style={styles.image}
        parallaxFactor={0.35}
        showSpinner={true}
        spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
        {...parallaxProps}
      />
    ) : (
      <Image
        source={{ uri: illustration }}
        style={styles.image}
      />
    )
  }

  render() {
    const { data: { title, subtitle }, even } = this.props

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
        onPress={() => {
          alert(`You've clicked '${title}'`)
        }}
      >
        <View style={styles.shadow}/>
        <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
          {this.image}
          {/*<View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]}/>*/}
        </View>
      </TouchableOpacity>
    )
  }
}