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
  wave : {
    top: coverHeight - waveHeight,
    height: waveHeight,
    width: metrics.DEVICE_WIDTH,
    // position: "relative",
    margin: 0
  },
  floatArea: {
    top: coverHeight - waveHeight,
    backgroundColor: "#fff",
    marginBottom: 10,
    paddingBottom: 50,
    paddingHorizontal: contants.padding,
  },
  outerFLoat: {
    top: coverHeight - waveHeight - 50,
    backgroundColor: "#fff",
    marginBottom: 10,
    paddingBottom: 150,
    color: '#333',
    paddingHorizontal: contants.padding,
  }
}