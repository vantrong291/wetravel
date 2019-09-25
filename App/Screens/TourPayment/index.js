import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { PropTypes } from 'prop-types'
import AppHeader from '../../Components/AppHeader'
import LoadingContainer from '../../Components/LoadingContainer'
import Colors from '../../Theme/Colors'
import contants from '../../Theme/Constants'
import { cards } from '../../Data/cards'
import PaymentMethodCard from '../../Components/ReuseComponents/PaymentMethodCard'
import { Button } from 'react-native-elements'

class TourPayment extends React.Component {
  constructor(props) {
    super(props)
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      loading: true,
      cards: [],
      selectedCard: {},
    }
  };

  componentDidMount() {
    // runAfter(() => this.setState({ loading: false }), 200)
    this.setState({ cards: cards })
    this.setState({ selectedCard: cards[0] })
    this.setState({ loading: false })
  };

  goBack = () => {
    this.props.navigation.goBack()
  }

  goBookingReviewScreen = () => {
    const { navigation } = this.props
    const tour = navigation.getParam('tour')
    const selectedTour = navigation.getParam('selectedTour')
    this.props.navigation.navigate('TourBookingReview', {
      tour: tour,
      selectedTour: selectedTour,
      paymentMethod: this.state.selectedCard,
    })

  }

  onSelectCard = (card) => {
    this.setState({ selectedCard: card })
  }


  render() {
    const { navigation } = this.props
    const tour = navigation.getParam('tour')
    const title = tour.destination
    const { loading } = this.state

    return (
      <View style={{ flex: 1, backgroundColor: Colors.mainBackgroundColor }}>
        <AppHeader onItemPress={this.goBack} title={title} barStyle={'dark-content'}
                   backgroundColor={Colors.mainBackgroundColor} textColor={Colors.mainBackgroundColorTitle}/>
        <ScrollView>
          {loading && <LoadingContainer height={2780}/>}
          {!loading && <View style={{
            marginTop: 20,
            paddingBottom: 10,
            color: Colors.mainBackgroundColorTitle,
            paddingHorizontal: contants.padding,
          }}>
            <Text
              style={{ fontSize: 20, fontWeight: 'bold', color: Colors.mainBackgroundColorTitle, marginBottom: 15 }}>
              Select Payment Method
            </Text>
            <PaymentMethodCard
              onItemPress={(card) => this.onSelectCard(card)}
            />
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
              <Button
                // icon={
                //   <Icon name="book-plus" size={20} style={{ marginRight: 5, color: Colors.navbarTextColor }}/>
                // }
                title="Checkout"
                titleStyle={{ fontSize: 15 }}
                buttonStyle={{
                  width: '100%',
                  paddingVertical: 10,
                  backgroundColor: Colors.navbarColor,
                  borderRadius: 2,
                }}
                containerStyle={{ width: '100%' }}
                onPress={() => this.goBookingReviewScreen()}
              />
            </View>
          </View>}

        </ScrollView>
      </View>
    )
  }
}

export default TourPayment