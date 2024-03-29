import React from 'react'
import { TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import TouchableScale from 'react-native-touchable-scale' // https://github.com/kohver/react-native-touchable-scale
import contants from '../Theme/Constants'

const SearchComponent = ({ onSearching }) => {
  const [value, onChangeText] = React.useState('Vịnh Hạ Long')
  return (
    <View style={styles.searchInput}>
      <Icon active name="search" size={20} style={{ color: '#8096a0', paddingTop: 4 }}/>
      <TextInput placeholder="Eg: Vịnh Hạ Long, Hoi An,..."
                 style={{ paddingLeft: 10, paddingTop: 0, paddingBottom: 8, width: '100%' }}
                 placeholderTextColor={'#8096a0'}
                 onChangeText={text => onChangeText(text)}
                 value={value}
      />
      <TouchableScale
        activeScale={0.5}
        friction={90}
        tension={100}
        onPress={() => onSearching(value)}
        style={{ marginLeft: 'auto' }}>
        <MaterialCommunityIcons active name="send" size={26} style={{ paddingBottom: 5, color: '#3578e5' }}/>
      </TouchableScale>
    </View>
  )
}


const styles = {
  searchInput: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 2,
    elevation: 1,
    height: 45,
    backgroundColor: '#e8ecee',
    marginTop: 20,
    paddingHorizontal: contants.padding,
    color: '#8096a0',
    borderRadius: 4,
  },
}

export default SearchComponent