import React from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')


const NotificationItem = ({ unread = true, image = require('../Assets/Images/TOM.png'), content = 'Your review has been voted up', time = '5 minutes ago', onPressItemOption, handlePress }) => {
    const backgroundColor = unread ? '#edf2fa' : '#fff'

    return (
        <TouchableOpacity style={[styles.notiRow, { backgroundColor: backgroundColor }]} onPress={handlePress}>
            <View style={{}}>
                <Avatar rounded
                        source={image}
                        size="medium"/>
            </View>
            <View style={styles.notiColumn}>
                <View style={{ flexDirection: 'row', flexShrink: 1, width: viewportWidth - 120 }}>
                    <Text style={styles.notiContent}>{content}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.notiTime}>{time}</Text>
                </View>
            </View>
            <View style={{ marginLeft: 'auto' }}>
                <TouchableOpacity onPress={onPressItemOption}>
                    <Icon name={'dots-horizontal'} size={26} style={{ color: '#949aa8' }}/>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = {
    notiRow: {
        flexDirection: 'row',
        // borderBottomColor: '#dddfe2',
        borderTopColor: '#dddfe2',
        padding: 15,
        paddingTop: 20,
        // borderBottomWidth: 1,
        borderTopWidth: 1,
        // height: 80,
        textAlignVertical: 'center',
    },
    notiColumn: {
        flexDirection: 'column',
        paddingHorizontal: 10,
    },
    notiContent: {
        fontSize: 15,
        flexShrink: 1,
        fontWeight: 'bold',
        color: '#333',
    },
    notiTime: {
        fontSize: 12,
        // fontWeight: 'bold',
        color: '#9e9eaa',
    },
}

export default NotificationItem