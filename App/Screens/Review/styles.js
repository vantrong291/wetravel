import metrics from '../../Config/metrics'
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
    top: "25%",
    marginBottom: 10,
    paddingBottom: 50,
    paddingHorizontal: contants.padding,
  },
  // wave : {
  //   top: 0,
  //   height: coverHeight,
  //   width: metrics.DEVICE_WIDTH,
  //   margin: 0
  // },
  outerFLoat: {
    top: coverHeight - waveHeight - 50,
    backgroundColor: "#fff",
    marginBottom: 10,
    paddingBottom: 150,
    color: '#333',
    paddingHorizontal: contants.padding,
  },
  writeBtn: {backgroundColor: "#fff", borderRadius: 20, width: "35%", marginTop: 30}
}