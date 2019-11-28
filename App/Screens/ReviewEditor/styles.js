import colors from '../../Theme/Colors'

export default {
    userRow: {
        flexDirection: 'row',
        // padding: 15,
        paddingBottom: 8,
        // borderBottomColor: '#eaeaea',
        // borderBottomWidth: 1,
    },
    userColumn: {
        flexDirection: 'column',
        paddingHorizontal: 10,
    },
    userName: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333',
    },
    confirmText: {
        fontSize: 12,
        // fontWeight: 'bold',
        color: colors.success,
    },
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textareaContainer: {
        height: 210,
        paddingVertical: 5,
        backgroundColor: colors.white,
        // backgroundColor: "green",
    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: 200,
        fontSize: 14,
        color: '#333',
    },
}