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
  userRow: {
    flexDirection: 'row',
    padding: 15,
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
  postTime: {
    fontSize: 12,
    // fontWeight: 'bold',
    color: '#9e9eaa',
  },
  content: {
    padding: 15,
  },
  titleRate: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    marginBottom: 8,
    marginTop: 5,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#243559',
  },
  reviewItemText: {
    color: '#2a374d',
    fontSize: 15,
    textAlign: 'justify'
  },
  seeMore: {
    fontSize: 15,
    color: '#9c9faa',
  },
  location: {
    marginBottom: 10,
    backgroundColor: '#f1f2f8',
    alignContent: 'stretch',
    padding: 15,
    borderRadius: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  locationCountry: {
    width: '50%',
    flexWrap: 'wrap',
  },
  locationPlace: {
    width: '50%',
    flexWrap: 'wrap',
  },
  tagTitle: { fontWeight: 'bold', fontSize: 14, color: '#525c6d', marginBottom: 3 },
  tagText: {
    color: '#676f83',
    fontSize: 16,
  },
  actions: {
    // marginBottom: 10,
    alignContent: 'stretch',
    paddingHorizontal: 15,
    borderRadius: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  actionColumn: {
    width: '25%',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  actionText: {
    color: '#676f83',
    fontSize: 14,
  },
}