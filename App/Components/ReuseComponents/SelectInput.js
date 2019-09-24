import React from 'react'
import { View } from 'react-native'
import SectionedMultiSelect from 'react-native-sectioned-multi-select'

const styles = {
  // chipText: {
  //   maxWidth: Dimensions.get('screen').width - 90,
  // },
  // itemText: {
  //   color: this.state.selectedItems.length ? 'black' : 'lightgrey'
  // },
  // selectedItemText: {
  //   color: 'blue',
  // },
  // subItemText: {
  //   color: this.state.selectedItems.length ? 'black' : 'lightgrey'
  // },
  item: {
    paddingHorizontal: 10,
  },
  subItem: {
    paddingHorizontal: 10,
  },
  selectedItem: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  selectedSubItem: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  // selectedSubItemText: {
  //   color: 'blue',
  // },
  scrollView: { paddingHorizontal: 0 },
  selectToggle: {
    height: 50,
    backgroundColor: '#fff',
    margin: 15,
    paddingHorizontal: 10,
    borderRadius: 5
  },
}

const SelectInput = ({ containerStyle, items, single = true, subKey = 'children', placeholder, showDropDowns = true, readOnlyHeadings = true, onSelectedItemsChange, selectedItems }) => {
  return (
    <View style={containerStyle}>
      <SectionedMultiSelect
        items={items}
        uniqueKey="id"
        single={single}
        subKey={subKey}
        selectText={placeholder}
        showDropDowns={showDropDowns}
        readOnlyHeadings={readOnlyHeadings}
        onSelectedItemsChange={onSelectedItemsChange}
        selectedItems={selectedItems}
        styles={styles}
      />
    </View>
  )
}

export default SelectInput