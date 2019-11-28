import React from 'react'
import { Text, View, Image} from 'react-native'
// import { Image } from 'react-native-elements'
import metrics from '../Config/metrics'

import RateComponent from './RateComponent'
import TouchableScale from 'react-native-touchable-scale'


const CardVerticalItem = ({ item, onItemPress }) => {
    const id = item.id
    return (
        <TouchableScale activeScale={0.95}
                        friction={90}
                        tension={100}
                        onPress={() => {
                            onItemPress(item)
                        }}
        >
            <View style={[styles.row, { marginTop: 15 }]}>
                <View style={styles.imageCol4}>
                    <Image source={{ uri: item.images[0] }}
                           style={{
                               width: metrics.DEVICE_WIDTH * 0.4 - 10,
                               height: metrics.DEVICE_WIDTH * 0.25,
                               borderRadius: 8,
                           }}/>
                </View>
                <View style={styles.imageCol6}>
                    <Text style={{ marginBottom: 0, fontSize: 16, fontWeight: 'bold', color: '#333' }}>
                        {item.destination}
                    </Text>
                    <Text style={{ marginBottom: 5, fontSize: 12 }}>
                        {item.country}, {item.continent}
                    </Text>
                    <RateComponent rate={item.rating}/>
                </View>
            </View>
        </TouchableScale>
    )
}

const styles = {
    row: {
        flexDirection: 'row',
    },
    imageCol4: {
        width: metrics.DEVICE_WIDTH * 0.4,
        // borderRadius: 8,
        borderRadius: 8
    },
    imageCol6: {
        width: metrics.DEVICE_WIDTH * 0.6,
        paddingLeft: 10,
    },
}

export default CardVerticalItem