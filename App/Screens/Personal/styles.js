import contants from '../../Theme/Constants'
import Colors from '../../Theme/Colors'
import ParallaxScrollView from '../Notifications'
import React from 'react'

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
    paddingTop: 15,
    borderRadius: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    elevation: 2,
  },
  statisticColumn: {
    width: "33%",
    flexWrap:'wrap',
    alignItems: 'center',
    marginVertical: 5
  },
  tagTitle: {fontWeight: "bold", fontSize: 14, color: '#525c6d', marginBottom: 3},
  tagTextContainer: { flexDirection: 'row', marginTop: 2, width: 70, justifyContent: 'center' },
  tagText: {
    color: '#676f83',
    fontSize: 11,
    // flexShrink: 1,
    textAlign: 'center'
  },
}