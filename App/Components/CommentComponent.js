import React from 'react'
import { Dimensions, TextInput, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import contants from '../Theme/Constants'
import ActionSheet from 'react-native-actionsheet'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const containerWidth = screenWidth - 30
const photoSelectWidth = 45
const cancelButtonIndex = 3

const CommentComponent = (props) => {

    const onSelectPhotoSource = (index) => {
        if (index !== 3) {
            alert('Bạn đã chọn lựa chọn số ' + (index + 1) + '. Tính năng này đang phát triển.. Chúng tôi sẽ sớm cập nhật trong các bản cập nhật tới.. Rất xin lối vì sự bất tiện này..')
        }
    }

    const handleChoosePhoto = () => {
        this.ActionSheet.show()

    }

    const [value, onChangeText] = React.useState('')
    return (
        <View style={{ flexDirection: 'row', marginBottom: 35 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: photoSelectWidth }}>
                <TouchableOpacity onPress={handleChoosePhoto}>
                    <MaterialCommunityIcons active name="image-outline" size={32}
                                            style={{ color: '#8096a0', marginLeft: 15 }}/>
                </TouchableOpacity>
            </View>
            <View style={styles.commentContainer}>
                <TextInput placeholder={props.placeholder ? props.placeholder : "Đánh giá của bạn..."}
                           style={{ paddingLeft: 10, paddingTop: 0, paddingBottom: 8, width: '80%' }}
                           placeholderTextColor={'#8096a0'}
                           onChangeText={text => onChangeText(text)}
                           value={value}
                           multiline
                />
                <View style={{ marginLeft: 'auto' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            onPress={() => alert('Open Sticker Library ...')} style={{ marginRight: 5 }}>
                            <MaterialCommunityIcons active name="sticker-emoji" size={26}
                                                    style={{ paddingBottom: 5, color: '#8096a0' }}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => alert("Đăng nhận xét thành công!")}>
                            <MaterialCommunityIcons active name="send" size={26}
                                                    style={{ paddingBottom: 5, color: '#3578e5' }}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View>
                <ActionSheet
                    ref={o => this.ActionSheet = o}
                    title={'Bạn muốn lấy ảnh từ đâu?'}
                    options={['Chọn từ Thư viện', 'Chụp ảnh mới', 'Chọn từ Google Photos', 'Hủy']}
                    cancelButtonIndex={cancelButtonIndex}
                    // destructiveButtonIndex={2}
                    onPress={onSelectPhotoSource}
                />
            </View>
        </View>
    )
}


const styles = {
    commentContainer: {
        width: containerWidth - photoSelectWidth,
        flexDirection: 'row',
        paddingTop: 10,
        marginHorizontal: contants.padding,
        paddingBottom: 2,
        // elevation: 1,
        height: 45,
        backgroundColor: '#e8ecee',
        // marginBottom: 20,
        paddingHorizontal: contants.padding,
        color: '#8096a0',
        borderRadius: 20,
    },
}

export default CommentComponent