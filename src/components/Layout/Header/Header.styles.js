import { StyleSheet } from 'react-native';

import { COLORS } from 'assets/styles/colors';

export default StyleSheet.create({
  container: {
    height: 87,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.dodgerBlue,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    top: 0,
    paddingTop: 0,
  },
  title: {
    paddingTop: 15,
    color: COLORS.white,
    fontSize: 17,
    fontWeight: 'bold',
  },
});
