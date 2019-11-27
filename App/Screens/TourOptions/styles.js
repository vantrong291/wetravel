import Colors from '../../Theme/Colors'

export default {
  list: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  label: { textAlign: 'left', fontSize: 12, fontWeight: 'bold', color: Colors.mainBackgroundColorTitle },
  content: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    // color: Colors.mainBackgroundColorNormalText
    color: Colors.success
  },
  timelineText: {
    textAlign: 'justify',
    fontSize: 14,
    color: Colors.mainBackgroundColorNormalText,
    marginBottom: 10
  },
  timelineTitle: {
    textAlign: 'justify',
    fontSize: 16,
    color: Colors.mainBackgroundColorNormalText,
    fontWeight: 'bold',
    marginBottom: 10
  },

}