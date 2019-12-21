import Colors from '../../Theme/Colors'
import Constants from '../../Theme/Constants'
const borderRadius = 10

export default {
    container: {
        flex: 1,
    },
    card: {
        elevation: 1,
        shadowColor: '#ffff',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        marginHorizontal: 0,
        width: '100%',
        marginTop: 15,
        borderRadius: borderRadius,
        // padding: 15,
        // backgroundColor: Colors.navbarTextColor
    },
    cardHeading: {
        borderTopRightRadius: borderRadius,
        borderTopLeftRadius: borderRadius,
        padding: 10,
        backgroundColor: '#f6bd20'
    },
    cardBody: {
        paddingVertical:15,
        backgroundColor: Colors.navbarTextColor,
        paddingHorizontal: Constants.padding,
        borderBottomRightRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
    },
    label: { textAlign: 'left', fontSize: 12, fontWeight: 'bold', color: '#707488' },
    content: { textAlign: 'left', fontSize: 16, fontWeight: 'bold', color: Colors.mainBackgroundColorNormalText },
    paymentReview: {
        backgroundColor: '#474b65',
        padding: 15,
        borderRadius: borderRadius
    },
    paymentCard: {
        elevation: 1,
        shadowColor: '#ffff',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        marginHorizontal: 0,
        borderRadius: borderRadius,
        width: '100%',
        marginVertical: 5,
        marginRight: 10,
        flexDirection: 'row',
        padding: 15,
    },
    cardImage: {
        width: '100%',
        height: 120,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
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
    postTime: {
        fontSize: 12,
        // fontWeight: 'bold',
        color: '#9e9eaa',
    },

}