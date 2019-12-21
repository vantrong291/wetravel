import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { stringToImage } from '../Utils/stringToImage'

export const CreditCard = ({ title, image, onItemPress }) => {
    return (
        <TouchableOpacity style={{}}
                          onPress={onItemPress}
        >
            <View style={{
                marginRight: 10,
                marginBottom: 20,
                borderRadius: 3,
                backgroundColor: "#fff",
                paddingHorizontal: 20,
                paddingVertical: 5
            }}>
                <Image source={stringToImage(image)} style={{ width: 80, height: 60 }}/>
            </View>
        </TouchableOpacity>
    )
}
