import React from 'react'
import { ScrollView, View } from 'react-native'
import { PropTypes } from 'prop-types'
import LoadingContainer from '../../Components/LoadingContainer'
import Colors from '../../Theme/Colors'
import contants from '../../Theme/Constants'
import AppHeader from '../../Components/AppHeader'
import { runAfter } from '../../Utils/asyncFunc'

class ChangePassword extends React.Component {
    constructor(props) {
        super(props)
        // this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
        this.state = {
            loading: true,
        }
    };

    componentDidMount() {
        runAfter(() => this.setState({ loading: false }), 2000)
        // this.setState({ loading: false })
    };

    goBack = () => {
        this.props.navigation.goBack()
    }

    render() {
        const loading = this.state.loading
        return (
            <View style={{ flex: 1, backgroundColor: Colors.mainBackgroundColor }}>

                <AppHeader onItemPress={this.goBack} title={'Change Password'} barStyle={'dark-content'}
                           backgroundColor={Colors.mainBackgroundColor} textColor={Colors.mainBackgroundColorTitle}/>
                {/*<StatusBar translucent backgroundColor={Colors.mainBackgroundColor} barStyle="dark-content"/>*/}

                <ScrollView>
                    {loading && <LoadingContainer height={550}/>}
                    {!loading && <View style={{
                        marginTop: 20,
                        paddingBottom: 10,
                        color: Colors.mainBackgroundColorTitle,
                        paddingHorizontal: contants.padding,
                    }}>
                        <View style={{ height: 550, justifyContent: 'center', alignItems: 'center' }}>

                        </View>

                    </View>}
                </ScrollView>
            </View>
        )
    }
}

export default ChangePassword