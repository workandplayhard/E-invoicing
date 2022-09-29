import { StyleSheet } from 'react-native';

import { COLORS } from 'assets/styles/colors';

export default StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    position: 'relative',
    paddingVertical: 55,
    alignItems: 'center',
  },
  logout: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  logoutText: {
    color: COLORS.white,
  },
  title: {
    marginTop: 25,
    fontSize: 15,
    lineHeight: 18,
    color: COLORS.white,
  },
  text: {
    marginTop: 10,
    fontSize: 17,
    lineHeight: 21,
    color: COLORS.white,
  },
  actions: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 25,
    marginTop: -30,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: COLORS.white,
    shadowColor: '#0000000A',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -13,
    },
    shadowRadius: 13,
  },
  firstAction: {
    marginTop: 0,
  },
});
