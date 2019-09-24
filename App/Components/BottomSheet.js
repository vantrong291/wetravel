import React from 'react'
import { Animated, Dimensions, Text, View } from 'react-native'

import SlidingUpPanel from 'rn-sliding-up-panel'

const { height } = Dimensions.get('window')

const styles = {
  panel: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  panelHeader: {
    height: 50,
    backgroundColor: '#b197fc',
    justifyContent: 'flex-end',
    padding: 24,
  },
  textHeader: {
    fontSize: 28,
    color: '#FFF',
  },
}

class BottomSheet extends React.Component {
  static defaultProps = {
    draggableRange: { top: height/4 + 180 - 64, bottom: 30 },
  }

  _draggedValue = new Animated.Value(30)

  render() {
    const { top, bottom } = this.props.draggableRange

    const backgoundOpacity = this._draggedValue.interpolate({
      inputRange: [height - 1408, height],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    })

    const iconTranslateY = this._draggedValue.interpolate({
      inputRange: [height - 56, height, top + 500],
      outputRange: [0, 56, -400],
      extrapolate: 'clamp',
    })

    const textTranslateY = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [0, 8],
      extrapolate: 'clamp',
    })

    const textTranslateX = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [0, -112],
      extrapolate: 'clamp',
    })

    const textScale = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [1, 0.7],
      extrapolate: 'clamp',
    })

    return (
      <SlidingUpPanel
        ref={c => (this._panel = c)}
        draggableRange={this.props.draggableRange}
        animatedValue={this._draggedValue}
        snappingPoints={[360]}
        height={height/3 + 180 - 64}
        friction={0.5}
        style={{bottom:0}}
      >
        <View style={styles.panel}>
          {/*<Animated.View*/}
            {/*style={[*/}
              {/*styles.iconBg,*/}
              {/*{*/}
                {/*opacity: backgoundOpacity,*/}
                {/*transform: [{ translateY: iconTranslateY }],*/}
              {/*},*/}
            {/*]}*/}
          {/*/>*/}
          <View style={styles.panelHeader}>
            <Animated.View
              style={{
                transform: [
                  { translateY: textTranslateY },
                  // { translateX: textTranslateX },
                  { scale: textScale },
                ],
              }}
            >
              <Text style={styles.textHeader}>Sliding Up Panel</Text>
            </Animated.View>
          </View>
          {this.props.children}
          {/*<View style={styles.container}>*/}
            {/*<Text>Bottom sheet content</Text>*/}
          {/*</View>*/}
        </View>
      </SlidingUpPanel>
    )
  }
}

export default BottomSheet
