import React from 'react'
import { Animated, Dimensions, Text, View } from 'react-native'

import SlidingUpPanel from 'rn-sliding-up-panel'
import Colors from '../Theme/Colors'

const { height } = Dimensions.get('window')

const styles = {
  panel: {
    flex: 1,
    backgroundColor: "#f7f7fa",
    position: 'relative',
  },
  panelHeader: {
    height: 50,
    backgroundColor: Colors.navbarColor,
    justifyContent: 'flex-end',
    padding: 24,
  },
  textHeader: {
    fontSize: 28,
    color: Colors.navbarTextColor,
    textAlign: 'center',
  },
}

class BottomSheet extends React.Component {
  static defaultProps = {
    draggableRange: { top: height / 3, bottom: 30 },
  }

  _draggedValue = new Animated.Value(30)

  // componentDidMount(): void {
  //   this._panel.show()
  // }

  showPanel = () => {
    this._panel.show()
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps.open) {
      this.showPanel()
    }
  }


  render() {
    const { top, bottom } = this.props.draggableRange

    // const backgoundOpacity = this._draggedValue.interpolate({
    //   inputRange: [height - 1408, height],
    //   outputRange: [1, 0],
    //   extrapolate: 'clamp',
    // })

    // const iconTranslateY = this._draggedValue.interpolate({
    //   inputRange: [height - 56, height, top + 600],
    //   outputRange: [0, 56, -400],
    //   extrapolate: 'clamp',
    // })

    const textTranslateY = this._draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [0, 8],
      extrapolate: 'clamp',
    })

    // const textTranslateX = this._draggedValue.interpolate({
    //   inputRange: [bottom, top],
    //   outputRange: [0, -112],
    //   extrapolate: 'clamp',
    // })

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
        height={height / 3}
        friction={0.5}
      >
        <View style={styles.panel}>
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
              <Text style={styles.textHeader}>_________</Text>
            </Animated.View>
          </View>
          {this.props.children}
        </View>
      </SlidingUpPanel>
    )
  }
}

export default BottomSheet
