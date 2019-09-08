import AsyncStorage from '@react-native-community/async-storage';

export  const setItem = async (key, value, stringifyValue = true) => {
  try {
    const strValue = stringifyValue ? JSON.stringify(value) : value
    await AsyncStorage.setItem(key, strValue)
    return {
      success: true
    }
  } catch (e) {
    console.log(e)
    return {
      success: false
    }
  }
}

export  const getItem = async (key, parseResult = true) => {
  try {
    const value = await AsyncStorage.getItem(key)
    return {
      success: true,
      value: parseResult ? JSON.parse(value) : value
    }
  } catch (e) {
    console.log(e)
    return {
      success: false,
      value: null
    }
  }
}

export  const replaceItem = async (key, value, stringifyValue = true) => {
  try {
    const strValue = stringifyValue ? JSON.stringify(value) : value
    await AsyncStorage.removeItem(key)
    await AsyncStorage.setItem(key, strValue)
    return {
      success: true
    }
  } catch (e) {
    console.log(e)
    return {
      success: false
    }
  }
}

export  const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
    return {
      success: true,
    }
  } catch (e) {
    console.log(e)
    return {
      success: false,
    }
  }
}


