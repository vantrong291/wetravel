import React, { useRef } from 'react'
import { Dimensions, FlatList, ImageBackground, Platform, StyleSheet, Text, View } from 'react-native'
import TouchableScale from 'react-native-touchable-scale'

const data = [
    {
        title: 'Trong nước',
        thumbnail: 'https://travel.com.vn/Content/ThemeHe/img/dd3.jpg',
    },
    {
        title: 'Châu Âu',
        thumbnail: 'https://travel.com.vn/Content/ThemeHe/img/qg1.jpg',
    },
    {
        title: 'Châu Á',
        thumbnail: 'https://travel.com.vn/Content/ThemeHe/img/qg2.jpg',
    },
    {
        title: 'Châu Úc',
        thumbnail: 'https://travel.com.vn/Content/ThemeHe/img/qg3.jpg',
    },
    {
        title: 'Châu Mỹ',
        thumbnail: 'https://travel.com.vn/Content/ThemeHe/img/qg4.jpg',
    },
    {
        title: 'Châu Phi',
        thumbnail: 'https://travel.com.vn/Content/ThemeHe/img/qg5.jpg',
    },
]

const { width: screenWidth } = Dimensions.get('window')

const Item = ({ title, image, onItemPress }) => {
    return (
        <TouchableScale activeScale={0.95}
                        friction={90}
                        tension={100}
                        onPress={onItemPress}
        >
            <View style={styles.item}>
                <ImageBackground source={{ uri: image }} style={{ width: 200, height: 100, borderRadius: 15 }}   imageStyle={{ borderRadius: 15 }}>
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: "rgba(0,0,0,0.3)",
                        borderRadius: 15
                    }}>
                        <Text style={{color: "#fff", fontWeight: "bold", fontSize: 16}}>{title}</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableScale>
    )
}

const AreaChoiceCard = (props) => {
    const keyExtractor = (item, index) => index.toString()

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={keyExtractor}
                data={data}
                renderItem={({ item }) => <Item title={item.title}
                                                onItemPress={() => props.onItemPress(item.title)}
                                                image={item.thumbnail}
                />}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default AreaChoiceCard

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },
    item: {
        marginRight: 10,
        marginBottom: 20,
        borderRadius: 8
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
    },
    title: {
        marginTop: -50,
    },
})