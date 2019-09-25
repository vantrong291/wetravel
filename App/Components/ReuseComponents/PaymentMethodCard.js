import React from 'react'
import { Image, Text, View } from 'react-native'
import { stringToImage } from '../../Utils/stringToImage'
import TouchableScale from 'react-native-touchable-scale'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { cards } from '../../Data/cards'

const cardWidth = '100%'
const cardBorderRadius = 4


class PaymentMethodCard extends React.Component {
  constructor(props) {
    super(props)
    // this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      loading: true,
      selected: 1,
      cards: [],
    }
  };

  componentDidMount() {
    this.setState({ cards: cards })
    this.setState({ loading: false })
  };


  onCardItem = (card) => {
    // const card = this.props.card
    this.setState({ selected: card.id })
    this.props.onItemPress(card)
  }

  renderCard = (card) => {
    const selected = this.state.selected === card.id
    const marginTop = card.expire ? 0 : 8
    const height = card.expire ? 15 : 0
    const backgroundColor = selected ? '#8bc34a26' : '#fff'
    const icon = selected ? 'check' : 'dots-horizontal'
    const iconColor = selected ? 'green' : '#949aa8'
    return (
      <View style={[styles.card, { backgroundColor: backgroundColor }]}>
        <View style={{}}>
          <Image source={stringToImage(card.name)}
                 style={{ width: 40, height: 40, borderRadius: 0 }}/>
        </View>
        <View style={styles.userColumn}>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={[styles.userName, { marginTop: marginTop }]}>{card.cardNumber ? card.cardNumber : card.cardHolder}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.postTime, { height: height }]}>{card.expire ? card.expire : ''}</Text>
          </View>
        </View>
        <View style={{ marginLeft: 'auto' }}>
          <Icon name={icon} size={26} style={{ color: iconColor, marginTop: 8 }}/>
        </View>
      </View>
    )
  }

  render() {

    return (
      <View>
        {
          this.state.cards.map((card, index) => (
            <TouchableScale key={index} activeScale={0.95}
                            friction={90}
                            tension={100}
                            onPress={() => this.onCardItem(card)}
            >
              {this.renderCard(card)}
            </TouchableScale>))
        }
      </View>
    )
  }
}

const styles = {
  card: {
    elevation: 1,
    shadowColor: '#ffff',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginHorizontal: 0,
    borderRadius: cardBorderRadius,
    width: cardWidth,
    marginVertical: 5,
    marginRight: 10,
    flexDirection: 'row',
    padding: 15,
  },
  cardImage: {
    width: cardWidth,
    height: 120,
    borderTopLeftRadius: cardBorderRadius,
    borderTopRightRadius: cardBorderRadius,
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

export default PaymentMethodCard