import React from 'react'
import { Dimensions, Image, Text, View } from 'react-native'
import TouchableScale from 'react-native-touchable-scale' // https://github.com/kohver/react-native-touchable-scale
import RateComponent from './RateComponent'

const { width: screenWidth } = Dimensions.get('window')
const cardWidth = screenWidth - 30
const cardBorderRadius = 0


const FullWidthCardItem = ({ item, onItemPress }) => {
    // const image = require(`${item.images[0]}`)
    const id = item.id
    return (
        <TouchableScale activeScale={0.98}
                        friction={90}
                        tension={100}
                        onPress={() => {
                            onItemPress(item)
                        }}
        >
            <View style={styles.card}>
                <Image source={{ uri: item.images[0] }} style={styles.cardImage}/>
                <View style={{ flexDirection: 'row', paddingHorizontal: 15, paddingTop: 15 }}>
                    <Text style={{
                        marginBottom: 0,
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#333',
                    }}>{item.destination + ', ' + item.country}</Text>
                    <View style={{ paddingTop: 3, marginLeft: 'auto' }}>
                        <RateComponent rate={item.rating}/>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: 15, paddingTop: 10, paddingBottom: 15 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#278df7'}}>{item.distance || '453 Km'}</Text>
                    <Text style={{ fontSize: 16, color: '#b5bec5'}}> từ vị trí của bạn</Text>
                </View>
            </View>
        </TouchableScale>
    )
}

const styles = {
    card: {
        backgroundColor: '#fff',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        marginHorizontal: 0,
        borderRadius: cardBorderRadius,
        width: cardWidth,
        marginVertical: 10,
        marginRight: 10,
    },
    cardImage: {
        width: cardWidth,
        height: 160,
        borderTopLeftRadius: cardBorderRadius,
        borderTopRightRadius: cardBorderRadius,
    },
}

export default FullWidthCardItem