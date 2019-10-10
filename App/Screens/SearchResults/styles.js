import Colors from '../../Theme/Colors'
import Constants from '../../Theme/Constants'
import contants from '../../Theme/Constants'
const borderRadius = 10

export default {
  container: {
    flex: 1,
  },
  inputContainer:{
    flexDirection: "column",
    width: "90%"
  },
  searchInput: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 2,
    elevation: 1,
    height: 45,
    backgroundColor: '#e8ecee',
    marginTop: 20,
    paddingHorizontal: contants.padding,
    color: '#8096a0',
    borderRadius: 4,
  },
  backButton: {
    flexDirection: "column",
    width: "10%",
    height: 45
  }
}