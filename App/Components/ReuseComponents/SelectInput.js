import React from 'react'
import { View } from 'react-native'
import SectionedMultiSelect from 'react-native-sectioned-multi-select'

const styles = {
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
    backgroundColor: '#fff',
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical:5,
    borderRadius: 4,
    elevation: 2,
    height: 40
  },
}

const SelectInput = ({ containerStyle, items, single = true, subKey = 'children', placeholder, displayKey, showDropDowns = true, readOnlyHeadings = true, onSelectedItemsChange, selectedItems }) => {
  return (
    <View style={containerStyle}>
      <SectionedMultiSelect
        items={items}
        uniqueKey="from"
        single={single}
        // subKey={subKey}
        displayKey={displayKey}
        selectText={placeholder}
        // showDropDowns={showDropDowns}
        // readOnlyHeadings={readOnlyHeadings}
        onSelectedItemsChange={onSelectedItemsChange}
        selectedItems={selectedItems}
        styles={styles}
      />
    </View>
  )
}

export default SelectInput