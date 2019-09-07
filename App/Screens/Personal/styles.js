import contants from '../../Theme/Constants'

const coverHeight = 260;
const waveHeight = 60;

export default {
  container: {
    flex: 1,
  },
  cover: {
    alignSelf: "stretch",
    height: coverHeight,
    width: null,
    position: "relative",
    marginBottom: 10
  },
  floatArea: {
    top: 50,
    marginBottom: 10,
    paddingBottom: 50,
    paddingHorizontal: contants.padding,
  },
  outerFLoat: {
    top: coverHeight - waveHeight - 50,
    // backgroundColor: "#fff",
    marginBottom: 10,
    paddingBottom: 150,
    color: '#333',
    paddingHorizontal: contants.padding,
  },
  statisticCard: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#fff",
    alignContent: 'stretch',
    padding: 15,
    borderRadius: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    elevation: 2,
  },
  statisticColumn: {
    width: "50%",
    flexWrap:'wrap',
    alignItems: 'center'
  },
  tagTitle: {fontWeight: "bold", fontSize: 14, color: '#525c6d', marginBottom: 3},
  tagText: {
    color: '#676f83',
    fontSize: 16
  },
}