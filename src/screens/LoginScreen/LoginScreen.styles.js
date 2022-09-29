import { StyleSheet } from 'react-native';

import { COLORS } from 'assets/styles/colors';

export default StyleSheet.create({
  screen: {
    flex: 1,
    position: 'relative',
  },
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: 470,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  inner: {
    paddingTop: 25,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  logo: {
    width: 280,
    height: 80,
  },
  title: {
    marginTop: 25,
    textAlign: 'center',
    color: COLORS.white,
    fontSize: 19,
    lineHeight: 40,
  },
  subTitle: {
    fontSize: 23,
    lineHeight: 40,
    textAlign: 'center',
    color: COLORS.white,
  },
  form: {
    width: '100%',
    marginTop: 25,
    borderColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: '#339DFF3B',
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowRadius: 7,
  },
  blurView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#339DFF',
    opacity: 0.3,
    borderRadius: 10,
  },
});
