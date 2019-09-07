import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const S = StyleSheet.create({
  container: { flexDirection: 'row', height: 55, elevation: 5, backgroundColor: "#fff" },
  tabButton: { flex: 1, justifyContent: 'center', alignItems: 'center' },
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
    <View style={S.container}>
      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor

        return (
          <TouchableOpacity
            key={routeIndex}
            style={S.tabButton}
            onPress={() => {
              onTabPress({ route })
            }}
            onLongPress={() => {
              onTabLongPress({ route })
            }}
            accessibilityLabel={getAccessibilityLabel({ route })}
          >
            {renderIcon({ route, focused: isRouteActive, tintColor})}
            <Text style={{color: isRouteActive ? tintColor : "grey", fontSize: 10}}>{getLabelText({ route })}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default CustomTabBar