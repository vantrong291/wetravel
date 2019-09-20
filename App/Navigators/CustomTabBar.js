import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Dimensions} from 'react-native'
import posed from "react-native-pose";

const windowWidth = Dimensions.get("window").width;
const tabWidth = windowWidth / 4;
const SpotLight = posed.View({
  route0: { x: 0 },
  route1: { x: tabWidth },
  route2: { x: tabWidth * 2 },
  route3: { x: tabWidth * 3 }
});

const Scaler = posed.View({
  active: { scale: 1.1 },
  inactive: { scale: 1 }
});

const styles = StyleSheet.create({
  container: { flexDirection: 'row', height: 55, elevation: 5, backgroundColor: "#fff" },
  tabButton: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  spotLight: {
    width: tabWidth,
    height: "100%",
  },
  scaler: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})

const CustomTabBar = props => {
  const {
    renderIcon,
    getLabelText,
    activeTintColor,
    inactiveTintColor,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation
  } = props

  const { routes, index: activeRouteIndex } = navigation.state

  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFillObject}>
        <SpotLight style={styles.spotLight} pose={`route${activeRouteIndex}`}/>
      </View>
      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor
        const activeBorderTop = isRouteActive ? {
          borderTopColor: tintColor,
          borderTopWidth: 1
        } : {
          borderTopColor: '#fff',
          borderTopWidth: 1
        }

        return (
          <TouchableOpacity
            key={routeIndex}
            style={[styles.tabButton, activeBorderTop]}
            onPress={() => {
              onTabPress({ route })
            }}
            onLongPress={() => {
              onTabLongPress({ route })
            }}
            accessibilityLabel={getAccessibilityLabel({ route })}
          >
            <Scaler style={styles.scaler} pose={isRouteActive ? "active" : "inactive"}>
              {renderIcon({ route, focused: isRouteActive, tintColor })}
              <Text style={{color: isRouteActive ? tintColor : "grey", fontSize: 10}}>{getLabelText({ route })}</Text>
            </Scaler>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default CustomTabBar