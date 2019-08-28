import React, { Component } from 'react';
import {
  Dimensions
} from 'react-native';

export const window = Dimensions.get('window');
export const AVATAR_SIZE = 120;
export const ROW_HEIGHT = 55;
export const PARALLAX_HEADER_HEIGHT = 300;
export const STICKY_HEADER_HEIGHT = 65;

export const parallaxStyles =  {
  container: {
    backgroundColor: "#FFF",
  },
  mb10: {
    marginBottom: 10
  },

  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: "100%",
    justifyContent: 'flex-end',
    // backgroundColor: '#73e3d8',
    backgroundColor: '#3897f1'

  },
  fixedSection: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    top: 30,
    // width: 50
  },
  fixedSectionText: {
    color: '#fff',
    fontSize: 26,
    marginRight: 10
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 50
  },
  avatar: {
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 24,
    paddingVertical: 5,
    textAlign: "center",
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5,
    textAlign: "center",
    // alignItems: "center",
    // justifyContent: "center"
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  rowText: {
    fontSize: 20
  }
};
