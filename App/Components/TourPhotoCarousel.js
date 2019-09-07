import React from 'react'
import { Dimensions, Platform } from 'react-native'
import { PropTypes } from 'prop-types'
import SliderEntry from './SliderEntry'
import Carousel from 'react-native-snap-carousel'

const IS_RIPPLE_EFFECT_SUPPORTED = Platform.Version >= 21 && IS_ANDROID
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideWidth = wp(75);
const itemHorizontalMargin = wp(1);
const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;
const IS_ANDROID = Platform.OS === 'android';

const styles = {
  slider: {
    marginTop: 15,
    overflow: 'visible', // for custom animations
  },
  sliderContentContainer: {
    // alignContent: 'center',
    paddingVertical: 10, // for custom animation
  },
}

const TourPhotoCarousel = ({data}) => {

  const _renderItemWithParallax = ({item, index}, parallaxProps) => {
    console.log("item",item)
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  return (
    <Carousel
      ref={c => this._slider1Ref = c}
      data={data}
      renderItem={_renderItemWithParallax}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      hasParallaxImages={true}
      firstItem={1}
      inactiveSlideScale={0.9}
      inactiveSlideOpacity={0.1}
      // inactiveSlideShift={20}
      containerCustomStyle={styles.slider}
      contentContainerCustomStyle={styles.sliderContentContainer}
      loop={true}
      loopClonesPerSide={2}
      autoplay={true}
      autoplayDelay={500}
      autoplayInterval={3000}
      // onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
    />
  )
}

export default TourPhotoCarousel